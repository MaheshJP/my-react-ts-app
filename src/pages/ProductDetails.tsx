import { useParams } from 'react-router-dom';
import type { ProductModuleType } from "@/modules/productModule";
const ProductDetails = () => {
  const { id } = useParams() as { id: string };
  const closthList = [
	{
		id:101,
		img:"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
		name:"Basic t-shart",
		price:100,
		brand:"Adidas",
		colors : ['black','red','white'],
		size: ['M','S','L'],
	},{
		id:102,
		img:"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
		name:"Basic t-shart",
		price:200,
		brand:"Adidas",
		colors : ['black','red','white'],
		size: ['M','S','L'],
	},
	{
		id:103,
		img:"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
		name:"Basic t-shart",
		price:800,
		brand:"Adidas",
		colors : ['black','red','white'],
		size: ['M','S','L'],
	},
	{
		id:104,
		img:"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
		name:"Basic t-shart",
		price:500,
		brand:"Adidas",
		colors : ['black','red','white'],
		size: ['M','S','L'],
	},
	{
		id:105,
		img:"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
		name:"Basic t-shart",
		price:900,
		brand:"Adidas",
		colors : ['black','red','white'],
		size: ['M','S','L'],
	}];
  const obj = closthList.find((item:ProductModuleType)=>item.id==Number(id));

  return (
    <>
      <h1>Product Details Page</h1>
      <h1>{obj?.id}</h1>
      <h1>{obj?.name}</h1>
      <h1>{obj?.price}</h1>
    </>
  )
}

export default ProductDetails;