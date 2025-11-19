import type { ProductModuleType } from "@/modules/productModule";
import Card from "./Card";

const Products = () => {
  const closthList: ProductModuleType[] = [
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
  return (
    <>
      <h1>Products Page</h1>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          closthList.map((item,index)=>(
            <Card key={index} item={item}/>
          ))
        }
      </div>
    </>
  );
};

export default Products;
