'use client';

import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { User } from "@/types";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    (async () => {
      const userList = await fetch('/api/users');
      const { data: users } = await userList.json();
      setUsers(users ?? []);
    }
    )();
  }, []);  

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl px-4">
        {users.map((user: User) => (<UserCard key={user.id} user={user} />))}
      </div>
    </div>
  );
}
