import React ,{useState,useEffect}from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Ordinateur = () => {
  
const [data,setData] =useState([]);
const [filter,setfilter] =useState(data);
const [loading ,setloading] = useState(false);


useEffect(() => {
   let isMounted = true;

   const getProducts = async () => {
      setloading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (isMounted) {
         const data = await response.json();
         setData(data);
         setfilter(data);
         setloading(false);
         console.log(data);
      }
   };

   getProducts();

   return () => {
      isMounted = false;
   };
}, []);



const Loading = () => {
   return (
      <div className="row">
   <div className="col-md-3">
      <Skeleton height={350}/>
   </div>
   <div className="col-md-3">
      <Skeleton height={350}/>
   </div>
   <div className="col-md-3">
      <Skeleton height={350}/>
   </div>
   <div className="col-md-3">
      <Skeleton height={350}/>
   </div>
</div>

   );
}

const filterproduit = (cat) =>
{
   const updateList = data.filter((x)=>x.category === cat);
setfilter(updateList);
}

const Showproduit = () => {
   return (
      <div>
         <div className="Buttons">
            <button className="btn btn-outline-dark" onClick={()=>filterproduit("men's clothing")}>Ordinateur Portable</button>
            <button className="btn btn-outline-dark" onClick={()=>filterproduit("Ordinateur de Bureau")}>Ordinateur de Bureau</button>
            <button className="btn btn-outline-dark" onClick={()=>filterproduit("Pc Portable Gamer")}>Pc Portable Gamer</button>
            <button className="btn btn-outline-dark" onClick={()=>filterproduit("Pc De Bureau Gamer")}>Pc De Bureau Gamer</button>
         </div>
         <div className="d-flex flex-wrap">
            {filter.map((product) => {
               return (
                  <div className="col-md-3 mb-4" key={product.id}>
                     <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={product.image} alt={product.title} style={{ height: "250px" }}/>
                        <div className="card-body">
                           <h5 className="card-title mb-0">{product.title.substring(0,12)}$</h5>
                           <p className="card-text">{product.price}$</p>
                           <NavLink to={`/produit/${product.id}`} className="btn btn-primary">Aperçu</NavLink>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
   return (
    
     <>
         <div className="row">
            <div className="col-12 mb-5">
               <h1 className="display-6 fw-bolder text-center">proudit</h1>
             <hr/>
            </div>
         </div>
         <div className="row justify-content-center">
            {loading ? <Loading/> : <Showproduit/>}
         </div>
      </>
  
  )
}

export default Ordinateur
