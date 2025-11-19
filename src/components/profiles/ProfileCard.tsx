import React from 'react';
import { Card } from '../../../../front-end - Copia/src/components/ui/Card';
import { Pill } from '../../../../front-end - Copia/src/components/ui/Pill';
import { MapPinIcon, BriefcaseIcon } from 'lucide-react';
interface ProfileCardProps {
  profile: {
    id: string;
    name: string;
    role: string;
    photo: string;
    city: string;
    topSkills: string[];
  };
  onClick: () => void;
}
export function ProfileCard({
  profile,
  onClick
}: ProfileCardProps) {
  return <Card hover onClick={onClick}>
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <img src={profile.photo} alt={profile.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-100 dark:border-gray-700" />

          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {profile.name}
          </h3>

          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
            <BriefcaseIcon className="w-4 h-4 mr-1" />
            {profile.role}
          </div>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-4">
            <MapPinIcon className="w-4 h-4 mr-1" />
            {profile.city}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {profile.topSkills.slice(0, 3).map((skill, index) => <Pill key={index} variant="primary" size="sm">
                {skill}
              </Pill>)}
          </div>
        </div>
      </div>
    </Card>;
}