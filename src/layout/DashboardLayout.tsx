import Menu from "@/pages/menu";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
    <div className="border-2 rounded-2xl m-5 p-5 width-auto">
      <Menu />
      <Outlet />
    </div>
      
    </>
  )
}

export default DashboardLayout;