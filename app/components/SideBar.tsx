'use client';

import { User } from "@/types";
import Tabs from "./Tabs";
import BackToHomeButton from "./BackToHomeButton";

export default function Sidebar({ user, activeTab, onTabClick }: { user: User; activeTab: number; onTabClick: (index: number) => void }) {

    const tabs = [
      { name: 'Posts', isActive: activeTab === 0 },
      { name: 'Friends', isActive: activeTab === 1 },
      { name: 'Profile', isActive: activeTab === 2 },
    ]
  
    const handleTabClick = (index: number) => {
      onTabClick(index);
    };

  return (
    <aside className="top-6 space-y-6 rounded-5xl md:col-span-1 col-span-3">
      <div className="mb-6 flex items-center">
        <BackToHomeButton />
      </div>
      <div className="bg-white p-5 rounded-2xl">
        <h3 className="text-black font-bold mb-4">My Profile</h3>
        <div className="flex gap-4">
          <img src={user.avatarUrl} className="w-14 h-14 rounded-full" />
          <div>
            <p className="text-black font-semibold">{user.displayName}</p>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </div>
        <Tabs 
          tabs={tabs}
          onClickTab={handleTabClick}
        />
      </div>
    </aside>
  );
}