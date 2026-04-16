import { User } from '@/types';

interface Friend {
  list: User[];
}

export default function Friends({ list }: Friend) {
  return (
    <div className="p-4 max-w-md">
      <h2 className="text-black text-2xl font-bold mb-4">Friends</h2>
      <ul className="space-y-2">
        {list.map((friend) => (
          <li
            key={friend.id}
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-100"
          >
            <img
              src={friend.avatarUrl}
              alt={friend.displayName}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <span className="text-black font-medium">{friend.displayName}</span>
            <span className="text-sm text-gray-500">@{friend.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}