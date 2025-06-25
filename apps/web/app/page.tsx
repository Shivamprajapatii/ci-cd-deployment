import {client} from "@repo/prismadb/client";
import { use } from "react";

export default async function Home() {
  const user = await client.user.findFirst();
  
  return (
    <div>
      <h1>Hey Shivam...</h1>
      <h1>Zaptoz</h1>
      nothing to say
      {user?.email}
      {user?.password}
      {user?.username}
    </div>
  );
};
