export interface ProfilePageProps {
  userId?: string; // If not provided, shows current user's profile
  openEditModalOnMount?: boolean; // Open edit profile modal when page loads (e.g. from /profile/edit)
}
