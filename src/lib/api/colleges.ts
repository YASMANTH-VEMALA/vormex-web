import apiClient from './client';
export interface CollegeSuggestion {
  id: string | null;
  name: string;
  logoUrl: string | null;
  domain: string | null;
  country: string | null;
  state: string | null;
  city: string | null;
}
export async function searchColleges(
  query: string,
  signal?: AbortSignal,
): Promise<{ colleges: CollegeSuggestion[] }> {
  const response = await apiClient.get<unknown, { colleges: CollegeSuggestion[] }>(
    '/people/colleges',
    {
      params: { q: query, limit: 8, directory: true },
      signal,
      timeout: 7000,
    },
  );
  return {
    colleges: response.colleges.map((college) => ({
      ...college,
      // Same-origin images also work with the backend's Cross-Origin-Resource-Policy.
      logoUrl: college.domain
        ? '/api/people/college-logo?domain=' + encodeURIComponent(college.domain)
        : null,
    })),
  };
}
