const Menu = () => {
  return (
    <>
      <ul className="flex justify-end">
        <li className="m-5 bg-gray-50 p-2 border-1 rounded-2xl"><a href="/dashboard/products">Products</a></li>
        <li  className="m-5 bg-gray-50 p-2 border-1 rounded-2xl"><a href="/dashboard/productDetails">Product Details</a></li>
        <li  className="m-5 bg-gray-50 p-2 border-1 rounded-2xl"><a href="/dashboard/constactus">Contact Us</a></li>
      </ul>
    </>
  )
}   

export default Menu;