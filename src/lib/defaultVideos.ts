/**
 * Built-in post animations, mirrored 1:1 from Android
 * (catalog/.../linkedin/DefaultPostVideos.kt). Ids must stay identical:
 * the backend stores only the id in post metadata (`defaultVideoId`),
 * and each client resolves the animation locally.
 */
export interface DefaultPostVideo {
  id: string;
  title: string;
  description: string;
  /** Same-origin dotLottie file under /public/default-videos. */
  src: string;
  backgroundColor?: string;
}

export const DEFAULT_POST_VIDEOS: DefaultPostVideo[] = [
  { id: 'businessman_rocket', title: 'Rocket Lift', description: 'Momentum and launches', src: '/default-videos/businessman_rocket.lottie' },
  { id: 'rainbow_twist', title: 'Rainbow Twist', description: 'Bright quick energy', src: '/default-videos/rainbow_twist.lottie' },
  { id: 'hoverboard', title: 'Hoverboard', description: 'Playful movement', src: '/default-videos/hoverboard.lottie' },
  { id: 'loudspeaker', title: 'Loudspeaker', description: 'Announcements', src: '/default-videos/loudspeaker.lottie', backgroundColor: '#FFF4D8' },
  { id: 'eye_searching', title: 'Eye Search', description: 'Discovery and curiosity', src: '/default-videos/eye_searching.lottie' },
  { id: 'sushi', title: 'Sushi', description: 'Small fun moments', src: '/default-videos/sushi.lottie' },
  { id: 'spooky_onion', title: 'Spooky Onion', description: 'Quirky reactions', src: '/default-videos/spooky_onion.lottie' },
  { id: 'spooky_onion_alt', title: 'Spooky Onion 2', description: 'Alternate onion mood', src: '/default-videos/spooky_onion_alt.lottie' },
  { id: 'lost_in_space', title: 'Lost in Space', description: 'Empty-state space drift', src: '/default-videos/lost_in_space.lottie' },
  { id: 'error_not_found', title: 'Not Found', description: '404-style status moment', src: '/default-videos/error_not_found.lottie' },
  { id: 'all_the_data', title: 'All the Data', description: 'Analytics and insights', src: '/default-videos/all_the_data.lottie' },
  { id: 'baloons', title: 'Balloons', description: 'Light celebration lift', src: '/default-videos/baloons.lottie' },
  { id: 'be_bold', title: 'Be Bold', description: 'Confident statement', src: '/default-videos/be_bold.lottie', backgroundColor: '#101827' },
  { id: 'quiz_bump', title: 'Quiz Bump', description: 'Questions and polls', src: '/default-videos/quiz_bump.lottie' },
  { id: 'litarebello_hi', title: 'Litarebello Hi', description: 'Friendly hello', src: '/default-videos/litarebello_hi.lottie' },
  { id: 'palapala_loading', title: 'Palapala Loading', description: 'Waiting and progress', src: '/default-videos/palapala_loading.lottie' },
];

export function findDefaultPostVideo(id: string | null | undefined): DefaultPostVideo | null {
  if (!id) return null;
  return DEFAULT_POST_VIDEOS.find((video) => video.id === id) ?? null;
}
