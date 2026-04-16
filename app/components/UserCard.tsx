import { User } from '@/types';
import Link from 'next/link';

export default function UserCard({user} : { user: User }) {
  return (
    <Link href={`/profile/${user.id}`} className="block">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.displayName}
            className="w-16 h-16 rounded-full mb-4 object-cover"
          />
        )}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{user.displayName}</h2>
        <p className="text-gray-600 text-sm h-15">{user.bio}</p>
        {user.friendIds !== undefined && (
          <p className="text-gray-500 text-lg font-bold">{user.friendIds.length} Followers</p>
        )}
      </div>
    </Link>
  );
}