import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vormex — Learn and Build Together',
    short_name: 'Vormex',
    description:
      'Find students, mentors, creators, and collaborators by skills, interests, and goals.',
    id: '/',
    start_url: '/feed',
    scope: '/',
    display: 'standalone',
    background_color: '#050816',
    theme_color: '#2563eb',
    icons: [
      { src: '/app-icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/app-icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
