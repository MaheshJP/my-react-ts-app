import { Link } from "react-router-dom";

const Card = (props: any) => {
  return (
    <>
    <div className="group relative">
      {/* <Link to={`/product/${props.item.id}`}> */}
        <Link to={`${props.item.id}`}>
          <img src={props.item.img} alt="Front of men&#039;s Basic Tee in black." 
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        </Link>
        {/* </Link> */}
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
                {props.item.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{props.item.brand}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{props.item.price}</p>
        </div>
      </div>
    </>
  )
}   

export default Card;
// {
// 		img:"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
// 		name:"Basic t-shart",
// 		price:100,
// 		brand:"Adidas"
// 		colors : ['black','red','white'],
// 		size: ['M','S','L'],
// 	},