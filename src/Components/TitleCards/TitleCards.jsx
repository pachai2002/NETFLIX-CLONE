
import { Link } from 'react-router-dom';
import './TitleCards.css'
import { useEffect, useRef, useState } from 'react'



// eslint-disable-next-line react/prop-types
const TitleCards = ({title,category}) => {

  const[apiData,setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTFjMTdmZjViYmZkZDA4Y2JkMjZjMjA1YjNmNDlhZiIsIm5iZiI6MTczMjA4NDYzOS45NDM1MzA2LCJzdWIiOiI2NzNkODFiYzhlMzU3YTJkZWQ5NTgzNjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BiIV06EVKZ_3uBuU17zLSoSPo1JTF0LazM_w9_gz3Kc'
    }
  };
  
 


  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
 }
  useEffect(()=>{
      
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(Response => setApiData(Response.results))
    .catch(err => console.error(err));
    
     cardsRef.current.addEventListener('wheel', handleWheel)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="title-cards"> 
     <h2>{title?title:"Popular On Netflix"}</h2>
     <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index)=>{
         return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={ `https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
         </Link>
      })}
     </div>
    </div>
  )
}

export default TitleCards