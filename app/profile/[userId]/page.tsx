'use client';

import { useEffect, useState } from "react";
import { User } from "@/types";
import NotFound from "@/components/NotFound";
import Sidebar from "@/components/SideBar";
import PostList from "@/components/post/PostList";
import Friends from "@/components/Friends";
import UserProfile from "@/components/UserProfile";

export default function profilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [friendList, setFriendList] = useState<User[]>([]);

  const handleTabClick = (index: number) => {
      setActiveTab(index);
    };

  const getFriends = async (user: User) => {
    const friends: User[] = [];
    for (const friendId of user.friendIds) {
      try {
        const response = await fetch(`/api/users/${friendId}`);
        const result = await response.json();
        if (result.success) {
          friends.push(result.data);
        }
      } catch (error) {
        console.log("Error fetching friend:", error);
      }
    }
    setFriendList(friends);
  };
  
  useEffect(() => {
    (async () => {
      const { userId } = await params;
        fetch(`/api/users/${userId}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setUser(data.data);
            getFriends(data.data); // Fetch friends after user is fetched
          }
        })
        .catch(err => {
          console.error('Error fetching user:', err);
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
        })
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Loading...</h1>
          <p className="text-gray-500 mb-8">Please wait while we load the profile data.</p>
        </div>
      </div>
    );
  }

  if (hasError || !user) {
    return (
      <NotFound />
    );
  }

  return (
    <div className="w-full max-w-256 min-h-156 ">
      <div className="grid grid-cols-3 gap-8 w-full max-w-5xl px-4 h-full min-h-156">
        <Sidebar user={user} activeTab={activeTab} onTabClick={handleTabClick} />
        {activeTab === 0 && <div className="md:col-span-2 col-span-3"><PostList userId={user.id} /></div>}
        {activeTab === 1 && <div className="md:col-span-2 col-span-3"><Friends list={friendList} /></div>}
        {activeTab === 2 && <div className="md:col-span-2 col-span-3"><UserProfile user={user} /></div>}
      </div>
    </div>
  );
}
