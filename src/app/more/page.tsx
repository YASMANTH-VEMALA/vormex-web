'use client';
import { MoreDashboardView } from './MoreDashboardView';
import type { MenuItem, Section } from './page.types';
export type { MenuItem, Section } from './page.types';

import { useAgent } from '@/components/agent/AgentContext';
import { useLiveWalletXpBalance } from '@/hooks/useLiveGamification';
import { getPendingRequests } from '@/lib/api/connections';
import { useAuth } from '@/lib/auth/useAuth';
import Cookies from 'js-cookie';
import {
  AtSign,
  Award,
  Bell,
  Bookmark,
  BookOpen,
  Briefcase,
  Code,
  Crown,
  FileText,
  Film,
  Flag,
  Gamepad2,
  Gift,
  Github,
  GraduationCap,
  Group,
  HelpCircle,
  MapPin,
  MessageSquare,
  Palette,
  Shield,
  ShoppingBag,
  Trophy,
  User,
  UserPlus,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function VormexAiIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={20}
      height={20}
      className={`${className || 'h-5 w-5'} rounded-full object-contain`}
    />
  );
}

export default function MorePage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { openAgent } = useAgent();
  const [activeSection, setActiveSection] = useState<Section>('main');
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  const [pendingConnectionsCount, setPendingConnectionsCount] = useState(0);
  const [themeApplied, setThemeApplied] = useState(false);
  const { data: xpBalance = 0 } = useLiveWalletXpBalance();

  // Fetch pending connection requests count
  useEffect(() => {
    const fetchPendingCount = async () => {
      try {
        const data = await getPendingRequests(1, 1);
        setPendingConnectionsCount(data.total);
      } catch (error) {
        console.error('Failed to fetch pending connections:', error);
      }
    };
    fetchPendingCount();
  }, []);

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      Cookies.remove('authToken');
      Cookies.remove('vx_auth_present');
      Cookies.remove('vx_csrf');
      localStorage.removeItem('authToken');
      logout();
      router.push('/login');
    }
  };

  const menuItems: MenuItem[] = [
    // --- Unlocked Items ---
    {
      id: 'profile',
      label: 'Edit Profile',
      icon: User,
      href: '/profile',
      color: 'text-blue-500',
    },
    {
      id: 'vormex-ai',
      label: 'Vormex AI',
      icon: VormexAiIcon,
      onClick: openAgent,
      color: 'text-blue-500',
      subtext: 'Ask the app-aware assistant',
    },
    {
      id: 'premium',
      label: 'Vormex+ Premium',
      icon: Crown,
      href: '/premium',
      color: 'text-blue-500',
      subtext: 'Premium, Creator Pro, and boosts',
    },
    {
      id: 'saved',
      label: 'Saved Posts',
      icon: Bookmark,
      href: '/more/saved',
      color: 'text-blue-600',
    },
    {
      id: 'reels',
      label: 'Reels',
      icon: Film,
      href: '/reels',
      color: 'text-pink-500',
    },
    {
      id: 'connections',
      label: 'Connection Requests',
      icon: UserPlus,
      href: '/more/connections',
      color: 'text-cyan-500',
      badge: pendingConnectionsCount > 0 ? pendingConnectionsCount : undefined,
    },
    {
      id: 'courses',
      label: 'Video Courses',
      icon: GraduationCap,
      href: '/courses',
      color: 'text-orange-500',
    },
    {
      id: 'groups',
      label: 'Groups',
      icon: Group,
      href: '/groups',
      color: 'text-indigo-500',
    },
    {
      id: 'events',
      label: 'Campus Events',
      icon: Flag,
      href: '/events',
      color: 'text-teal-500',
    },
    {
      id: 'hackathons',
      label: 'Hackathons',
      icon: Trophy,
      href: '/hackathons',
      color: 'text-amber-500',
      subtext: 'Find events and form teams',
    },
    {
      id: 'skill-passport',
      label: 'Skill Passport',
      icon: Award,
      href: '/skills/passport',
      color: 'text-emerald-500',
      subtext: 'Verified proof of your skills',
    },
    {
      id: 'skill-swap',
      label: 'Skill Swap',
      icon: Zap,
      href: '/skill-swap',
      color: 'text-violet-500',
      subtext: 'Learn or teach with peers',
    },
    {
      id: 'college-communities',
      label: 'College Communities',
      icon: GraduationCap,
      href: '/college-communities',
      color: 'text-indigo-500',
      subtext: 'Join verified campus spaces',
    },
    {
      id: 'talk',
      label: 'Talk with Vormex',
      icon: MessageSquare,
      href: '/talk',
      color: 'text-sky-500',
      subtext: 'Find people with AI search',
    },
    {
      id: 'progress',
      label: 'Progress',
      icon: Trophy,
      href: '/progress',
      color: 'text-orange-500',
      subtext: 'XP, Coins, levels, and streaks',
    },
    {
      id: 'accountability',
      label: 'Grow Together',
      icon: Users,
      href: '/accountability',
      color: 'text-emerald-500',
    },
    {
      id: 'games',
      label: 'Games & XP',
      icon: Gamepad2,
      href: '/more/games',
      color: 'text-purple-600',
      locked: true,
    },
    {
      id: 'streaks',
      label: 'Streaks',
      icon: Zap,
      href: '/streaks',
      color: 'text-orange-500',
    },
    {
      id: 'nearby',
      label: 'Find Nearby People',
      icon: MapPin,
      href: '/find-people?tab=nearby',
      color: 'text-green-500',
    },
    {
      id: 'integrations',
      label: 'Connected Apps',
      icon: Github,
      onClick: () => setActiveSection('integrations'),
      color: 'text-gray-700 dark:text-gray-300',
    },
    {
      id: 'mentions',
      label: 'Your Mentions',
      icon: AtSign,
      onClick: () => setActiveSection('mentions'),
      color: 'text-purple-500',
    },
    {
      id: 'discovery-privacy',
      label: 'Public Search & AI Discovery',
      icon: Shield,
      href: '/settings/discovery',
      color: 'text-blue-500',
    },
    {
      id: 'privacy',
      label: 'Identity & Safety',
      icon: Shield,
      href: '/more/safety',
      color: 'text-red-500',
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: HelpCircle,
      href: '/support',
      color: 'text-cyan-500',
    },
    {
      id: 'terms',
      label: 'Terms of Service',
      icon: FileText,
      href: '/terms',
      color: 'text-gray-500',
    },
    {
      id: 'report',
      label: 'Report a Problem',
      icon: Flag,
      href: '#',
      color: 'text-orange-500',
    },

    // --- Locked Items ---
    {
      id: 'badges',
      label: 'Achievements & Badges',
      icon: Award,
      href: '/badges',
      color: 'text-amber-500',
      locked: true,
    },
    {
      id: 'store',
      label: 'XP Store',
      icon: ShoppingBag,
      href: '/store',
      color: 'text-emerald-500',
    },
    {
      id: 'referrals',
      label: 'Invite Friends',
      icon: Gift,
      href: '/referrals',
      color: 'text-rose-500',
      locked: true,
    },
    {
      id: 'jobs',
      label: 'Job Board',
      icon: Briefcase,
      href: '/jobs',
      color: 'text-indigo-500',
      locked: true,
      subtext: 'Need more users to unlock this',
    },
    {
      id: 'challenges',
      label: 'Coding Challenges',
      icon: Code,
      href: '/challenges',
      color: 'text-violet-500',
      locked: true,
    },
    {
      id: 'learning',
      label: 'Learning Paths',
      icon: BookOpen,
      href: '/learning',
      color: 'text-teal-500',
      locked: true,
    },
    {
      id: 'interviews',
      label: 'Mock Interviews',
      icon: MessageSquare,
      href: '/interviews',
      color: 'text-sky-500',
      locked: true,
    },
    {
      id: 'notifications',
      label: 'Notification Settings',
      icon: Bell,
      href: '/notifications',
      color: 'text-yellow-500',
      locked: true,
    },
    {
      id: 'appearance',
      label: 'Appearance',
      icon: Palette,
      onClick: () => setActiveSection('appearance'),
      color: 'text-pink-500',
    },
  ];

  return (
    <MoreDashboardView
      activeSection={activeSection}
      handleLogout={handleLogout}
      isDark={isDark}
      menuItems={menuItems}
      router={router}
      setActiveSection={setActiveSection}
      setIsDark={setIsDark}
      setThemeApplied={setThemeApplied}
      themeApplied={themeApplied}
      user={user}
      xpBalance={xpBalance}
    />
  );
}
