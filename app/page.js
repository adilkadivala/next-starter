"use client";

import { useEffect, useState } from "react";

// UI components
import { Table } from "@/components/table";
import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [createUsers, setCreateUsers] = useState({
    name: "",
    message: "",
  });
  const [openForm, setOpenForm] = useState(false);

  // Define table headers
  const TABLE_HEAD = ["Name", "Message", "Actions"];

  // get user's data
  async function fetchUsers() {
    try {
      const response = await axios.get("/api/users");
      if (response.status === 200) {
        // use this if you got data with object key
        setUsers(response.data.data || []);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // form handler
  const handleForm = () => {
    setOpenForm(!openForm);
  };

  // create new user handler
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users", {
        name: createUsers.name,
        message: createUsers.message,
      });
      if (response.status === 200) {
        setCreateUsers(response.data.data);
        setCreateUsers({
          name: "",
          message: "",
        });
        setOpenForm(false);
        fetchUsers();
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  // input handlers
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCreateUsers((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // effects
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-evenly pt-2">
          <p className="text-neutral-700">
            This is a smallest project of next.js for understanding next.js
            lifecycle
          </p>
          <Button type="submit" onClick={handleForm}>
            + Add new
          </Button>
        </div>
        {openForm && (
          <Form
            method="post"
            className="p-5 absolute top-1/2 flex flex-col gap-5 bg-slate-100 rounded-md w-[50%] translate-x-1/2"
          >
            <Input
              type="text"
              name="name"
              placeholder="Enter User Name..."
              className="p-3"
              value={createUsers.name}
              onInput={handleInput}
            >
              Enter name...
            </Input>

            <Input
              type="text"
              name="message"
              placeholder="Enter message..."
              className="p-3"
              value={createUsers.message}
              onInput={handleInput}
            >
              Enter message...
            </Input>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        )}
      </div>
      <div className="flex justify-center items-center m-5 p-5 border border-slate-600">
        {users.length > 0 ? (
          <Table TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={users} key={users.id} />
        ) : (
          <p>No any data available</p>
        )}
      </div>
    </>
  );
}
