
import { useState } from 'react';
import Prods from './Prods'
import { IProduct } from './interface';
import { Products } from './data';

function HomePage() {

  const [products,setProducts] = useState<IProduct[]>(Products);
  
 console.log(setProducts)

  //Renders
 const RenderProductList = products.map((product) =>(
  <Prods key={product.id} product={product} />
   ));
  
  return (
    <>
     <h1 className='text-sky-950 m-4 text-center text-4xl font-bold'> 
     Alphazero 
     <span className='text-red-600'> E-comm</span>
     </h1>
     
      <div className='m-5 container grid grid-cols-1 md:grid-cols-2
    lg:grid-cols-3 gap-8'>
       {RenderProductList} 
      </div>
     
    
    </>
  )
}

export default HomePage
