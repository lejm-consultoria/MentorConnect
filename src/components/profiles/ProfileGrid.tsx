import React from 'react';
import { ProfileCard } from './ProfileCard';
interface Profile {
  id: string;
  name: string;
  role: string;
  photo: string;
  city: string;
  topSkills: string[];
}
interface ProfileGridProps {
  profiles: Profile[];
  onProfileClick: (profile: Profile) => void;
}
export function ProfileGrid({
  profiles,
  onProfileClick
}: ProfileGridProps) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {profiles.map(profile => <ProfileCard key={profile.id} profile={profile} onClick={() => onProfileClick(profile)} />)}
    </div>;
}