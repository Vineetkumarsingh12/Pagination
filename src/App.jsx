import {useEffect,useState } from 'react';
import './App.css';
import ProductCard from './productCard';

export default function App() {


  const [products,setProducts]= useState([]);
  const page_size=10;
  const [currentPage,setCurrentPage]=useState(0);
  const start=currentPage*page_size;
  const end=start+page_size;
  const fetchData=async()=>{
    const data= await fetch("https://dummyjson.com/products?limit=500");
    const json= await data.json();
    setProducts(json.products);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const numberOfPages=Math.ceil(products.length/page_size);

  return !products.length?(
<h1>No Data</h1>
  ):(
    <div className='App font-bold'>
  <h1 className='my-2'>Pagination</h1>
  <div className='flex flex-wrap justify-center'>
  {
 
    [...Array(numberOfPages).keys() ].map((index)=>(<span className={`p-1 border-green-400 border-2 m-1 cursor-pointer ${currentPage===index?'bg-green-400 text-white':''}`}
       key={index} onClick={()=>setCurrentPage(index)}>{index}</span>))
  }
  </div>
  <div className='flex flex-wrap justify-center'>
  {
  products.slice(start,end).map((product)=>(
    <ProductCard key={product.id} image={product.thumbnail} title={product.title}/>
  ))
  }
  </div>
 

    </div>
  );
}
