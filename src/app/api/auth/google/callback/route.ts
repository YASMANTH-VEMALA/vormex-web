import { NextRequest, NextResponse } from 'next/server';
import { BACKEND_ORIGIN } from '@/lib/utils/constants';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, codeVerifier, redirectUri } = body;

    if (!code || !codeVerifier) {
      return NextResponse.json(
        { error: 'Code and code verifier are required' },
        { status: 400 }
      );
    }

    if (!GOOGLE_CLIENT_ID) {
      console.error('GOOGLE_CLIENT_ID is not set');
      return NextResponse.json(
        { error: 'Google Client ID not configured. Please set NEXT_PUBLIC_GOOGLE_CLIENT_ID in your environment variables.' },
        { status: 500 }
      );
    }

    // Build the request body
    const defaultFrontendOrigin =
      process.env.NEXT_PUBLIC_BASE_URL ||
      request.nextUrl.origin ||
      BACKEND_ORIGIN;

    const tokenParams = new URLSearchParams({
      code: code,
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: redirectUri || `${defaultFrontendOrigin}/auth/google/callback`,
      grant_type: 'authorization_code',
      code_verifier: codeVerifier,
    });

    // Add client_secret only if it's configured (required for web applications)
    // For public clients with PKCE, some configurations might work without it
    // but Google typically requires it for authorization code flow
    if (GOOGLE_CLIENT_SECRET) {
      tokenParams.append('client_secret', GOOGLE_CLIENT_SECRET);
    }

    // Exchange authorization code for tokens using PKCE
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenParams,
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json().catch(() => ({}));
      const errorMessage = errorData.error_description || errorData.error || 'Failed to exchange authorization code';
      
      console.error('Google token exchange error:', {
        status: tokenResponse.status,
        error: errorData,
        hasClientSecret: !!GOOGLE_CLIENT_SECRET,
      });

      // Provide helpful error message
      if (errorData.error === 'invalid_client' && !GOOGLE_CLIENT_SECRET) {
        return NextResponse.json(
          { 
            error: 'Google Client Secret is required. Please set GOOGLE_CLIENT_SECRET in your environment variables. You can find it in Google Cloud Console under APIs & Services > Credentials.',
            details: 'The authorization code flow requires a client_secret for security.'
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: tokenResponse.status }
      );
    }

    const tokens = await tokenResponse.json();

    if (!tokens.id_token) {
      return NextResponse.json(
        { error: 'ID token not found in token response' },
        { status: 500 }
      );
    }

    // Return the id_token to the frontend
    return NextResponse.json({
      idToken: tokens.id_token,
      accessToken: tokens.access_token,
    });
  } catch (error: any) {
    console.error('Google OAuth token exchange error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

