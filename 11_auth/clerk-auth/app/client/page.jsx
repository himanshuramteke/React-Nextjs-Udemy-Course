"use client";

import { useUser } from "@clerk/nextjs";

function ClientPage() {
  const user = useUser();

  return (
    <div>
      Client Page
      {JSON.stringify(user)}
    </div>
  );
}

export default ClientPage;
