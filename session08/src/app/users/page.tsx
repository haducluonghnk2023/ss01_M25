"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState<any>();
  useEffect(() => {
    let data = axios.get("http://localhost:3000/api/users");
    data
      .then((res: any) => {
        console.log(res);

        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      Danh sách user
      {users &&
        users.map((user: any) => (
          <div key={user.id}>
            <p>{user.id}</p>
            <p>{user.name}</p>
          </div>
        ))}
    </div>
  );
}
