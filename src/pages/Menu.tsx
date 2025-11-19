import  {NavLink} from "react-router-dom";
const Menu = () => {
  return (
    <>
      {/* <ul className="flex justify-end">
        <li className="m-2 p-2"><a href="/dashboard/products">Products</a></li>
        <li  className="m-2 p-2"><a href="/dashboard/productDetails">Product Details</a></li>
        <li  className="m-2 p-2"><a href="/dashboard/constactus">Contact Us</a></li>
      </ul> */}
      <NavLink to="/dashboard/product" end className={({ isActive }) =>
          isActive
            ? "text-red-600 m-2 p-2"
            : "m-2 p-2"
        } >Products</NavLink>
        <NavLink to="/dashboard/product/105" end className={({ isActive }) =>
          isActive
            ? "text-red-600 m-2 p-2"
            : "m-2 p-2"
        } >Product Details</NavLink>
        <NavLink to="/dashboard/constactus" end className={({ isActive }) =>
          isActive
            ? "text-red-600 m-2 p-2"
            : "m-2 p-2"
        } >Contact Us</NavLink>
        <NavLink to="/logout" end className={({ isActive }) =>
          isActive
            ? "text-red-600 m-2 p-2"
            : "m-2 p-2"
        } >Logout</NavLink>
    </>
  )
}   

export default Menu;