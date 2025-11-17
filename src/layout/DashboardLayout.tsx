import Menu from "@/pages/menu";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default DashboardLayout;