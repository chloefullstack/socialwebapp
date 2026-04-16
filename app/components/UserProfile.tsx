'use client';

import { User } from "@/types";

export default function UserProfile({ user }: { user: User }) {
  const joinedDate = new Date(user.joinedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-4">
      <h2 className="text-black text-2xl font-bold mb-4">User profile</h2>
      <section className="rounded-3xl border border-gray-200 bg-white p-8">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</p>
          <p className="mt-1 font-medium">{user.location}</p>
        </div>
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
          <p className="mt-1 font-medium break-all">{user.email}</p>
        </div>
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Joined</p>
          <p className="mt-1 font-medium">{joinedDate}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">
            About
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-700">
            {user.bio}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Username</p>
          <p className="mt-2 text-lg font-medium text-slate-900">{user.username}</p>
        </div>
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Friends</p>
          <p className="mt-2 text-lg font-medium text-slate-900">{user.friendIds.length}</p>
        </div>
      </section>
    </div>
  );
}