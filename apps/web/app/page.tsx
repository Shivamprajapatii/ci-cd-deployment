"use client"
import {client} from "@repo/prismadb/client";

export default function Home() {
  
  return (
    <>
    <h1>Hey Shivam</h1>
    <button onClick={ async () => {
      const data = await client.user.create({
    "data":{
      "id":"1",
      "username" :"SHivam",
      "password" :"HelloWorld",
      "email":"shivam@gmail.com"
    }
  })
    }}>Add Data</button>
    </>
  );
}
