import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const isAdmin = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/admin`, {
    next: { revalidate: 86400 },
  });
  console.log(isAdmin.status);
  if (isAdmin.status !== 200) {
    return <div>403 Forbidden</div>;
  }

  return <div>{children}</div>;
};

export default AdminLayout;
