"use client";
import { useEffect, useState } from "react";
import { Table } from "@/components/table";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        const result = await response.json();
        setUsers(result.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  // Define table headers
  const TABLE_HEAD = ["Name", "Message", "Actions"];

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-2">
        <p className="text-neutral-700">
          This is a smallest project of next.js for understanding next.js
          lifecycle
        </p>
      </div>
      <div className="flex justify-center items-center m-5 p-5">
        {users.length > 0 ? (
          <Table TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={users} />
        ) : (
          <p>No any data available</p>
        )}
      </div>
    </>
  );
}
