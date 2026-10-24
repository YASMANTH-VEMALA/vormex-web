'use client';
import { type NearbyUser } from '@/lib/api/location';
import { Loader2, MapPin, UserPlus, X } from 'lucide-react';
import Link from 'next/link';

export const NearbyUserProfileCard = ({
  user,
  onClose,
  onConnect,
  connectingUserId,
}: {
  user: NearbyUser;
  onClose: () => void;
  onConnect: (userId: string) => Promise<void>;
  connectingUserId: string | null;
}) => (
  <div
    className="fixed inset-0 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm"
    style={{ zIndex: 9999 }}
    onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    <div
      className="bg-white dark:bg-neutral-900 w-full max-w-md rounded-t-3xl sm:rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      style={{ animation: 'slideUp 0.3s ease-out' }}
    >
      {/* Banner */}
      <div className="h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative">
        {user.bannerImage && (
          <img src={user.bannerImage} alt="Banner" className="w-full h-full object-cover" />
        )}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 bg-black/30 hover:bg-black/50 rounded-full transition-colors"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Avatar */}
      <div className="px-4 -mt-10 relative z-10">
        <div className="w-20 h-20 rounded-full border-4 border-white dark:border-neutral-900 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          {user.profileImage ? (
            <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-white font-bold text-2xl">{user.name?.charAt(0) || '?'}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-6 pt-3">
        {/* Name & Username */}
        <div className="mb-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
          <p className="text-gray-500 dark:text-neutral-400">@{user.username}</p>
        </div>

        {/* Distance Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
            <MapPin className="w-3.5 h-3.5" />
            {user.distance < 1
              ? `${Math.round(user.distance * 1000)}m away`
              : `${user.distance.toFixed(1)}km away`}
          </span>
          {user.location?.city && (
            <span className="text-sm text-gray-500 dark:text-neutral-400">
              {user.location.city}
            </span>
          )}
          {user.isOnline && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Online
            </span>
          )}
        </div>

        {/* Headline */}
        {user.headline && (
          <p className="text-gray-700 dark:text-neutral-300 mb-4">{user.headline}</p>
        )}

        {/* Skills */}
        {user.skills && user.skills.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-neutral-500 uppercase mb-2">
              Skills
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {user.skills.slice(0, 6).map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
              {user.skills.length > 6 && (
                <span className="px-2.5 py-1 text-gray-500 text-xs">
                  +{user.skills.length - 6} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Interests */}
        {user.interests && user.interests.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-neutral-500 uppercase mb-2">
              Interests
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {user.interests.slice(0, 6).map((interest, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs"
                >
                  {interest}
                </span>
              ))}
              {user.interests.length > 6 && (
                <span className="px-2.5 py-1 text-gray-500 text-xs">
                  +{user.interests.length - 6} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 mt-4">
          <Link
            href={`/profile/${user.username}`}
            className="flex-1 py-2.5 text-center bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
          >
            View Profile
          </Link>
          <button
            onClick={() => onConnect(user.id)}
            disabled={connectingUserId === user.id}
            className="flex-1 py-2.5 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {connectingUserId === user.id ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <UserPlus className="w-4 h-4" />
            )}
            Connect
          </button>
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes slideUp {
        from {
          transform: translateY(100%);
        }
        to {
          transform: translateY(0);
        }
      }
    `}</style>
  </div>
);
