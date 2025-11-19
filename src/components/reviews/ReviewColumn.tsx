import React from 'react';
import { ReviewCard } from './ReviewCard';
interface Review {
  id: string;
  question: string;
  askedBy: string;
  askedByPhoto: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}
interface ReviewColumnProps {
  title: string;
  reviews: Review[];
  onReviewClick: (review: Review) => void;
  emptyMessage: string;
}
export function ReviewColumn({
  title,
  reviews,
  onReviewClick,
  emptyMessage
}: ReviewColumnProps) {
  return <div className="flex-1 min-w-[300px]">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
            {title}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {reviews.length}
            </span>
          </h2>
        </div>

        <div className="p-4 space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto">
          {reviews.length === 0 ? <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              {emptyMessage}
            </div> : reviews.map(review => <ReviewCard key={review.id} review={review} onClick={() => onReviewClick(review)} />)}
        </div>
      </div>
    </div>;
}