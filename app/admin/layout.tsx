import React from "react";
import {auth} from '@/auth'

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()
  if(!session) {
    return <div>403 Forbidden</div>
  }
  const isAdmin = session?.user.role
  if (isAdmin !== 'ADMIN') {
    return <div>403 Forbidden</div>;
  }

  return <div>{children}</div>;
};

export default AdminLayout;
