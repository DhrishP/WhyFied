import React from "react";
import axios from "axios";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  // const isAdmin = await axios.get(
  //   `${process.env.NEXT_PUBLIC_APP_URL}/api/admin`
  // );
  // if (isAdmin.status !== 200) {
  //   return <div>403 Forbidden</div>;
  // }

  return <div>{children}</div>;
};

export default AdminLayout;
