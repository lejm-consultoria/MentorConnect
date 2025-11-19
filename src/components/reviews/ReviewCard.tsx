import React from 'react';
import { Card } from '../ui/Card';
import { Pill } from '../ui/Pill';
import { ClockIcon, UserIcon } from 'lucide-react';
interface ReviewCardProps {
  review: {
    id: string;
    question: string;
    askedBy: string;
    askedByPhoto: string;
    date: string;
    status: 'pending' | 'approved' | 'rejected';
  };
  onClick: () => void;
}
export function ReviewCard({
  review,
  onClick
}: ReviewCardProps) {
  const statusConfig = {
    pending: {
      label: 'Pendente',
      variant: 'warning' as const
    },
    approved: {
      label: 'Aprovado',
      variant: 'success' as const
    },
    rejected: {
      label: 'Rejeitado',
      variant: 'danger' as const
    }
  };
  const config = statusConfig[review.status];
  return <Card hover onClick={onClick} className="cursor-pointer">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <Pill variant={config.variant} size="sm">
            {config.label}
          </Pill>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <ClockIcon className="w-3 h-3 mr-1" />
            {review.date}
          </div>
        </div>

        <p className="text-gray-900 dark:text-gray-100 font-medium mb-3 line-clamp-2">
          {review.question}
        </p>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <img src={review.askedByPhoto} alt={review.askedBy} className="w-6 h-6 rounded-full mr-2" />
          <span>Enviado por: {review.askedBy}</span>
        </div>
      </div>
    </Card>;
}