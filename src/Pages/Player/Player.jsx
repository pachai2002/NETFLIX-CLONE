
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const[apiData,setApiData] = useState({
    name: "",
    key: "",
  published_at: "",
  typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTFjMTdmZjViYmZkZDA4Y2JkMjZjMjA1YjNmNDlhZiIsIm5iZiI6MTczMjA4NDYzOS45NDM1MzA2LCJzdWIiOiI2NzNkODFiYzhlMzU3YTJkZWQ5NTgzNjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BiIV06EVKZ_3uBuU17zLSoSPo1JTF0LazM_w9_gz3Kc'
    }
  };

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(Response => setApiData(Response.results[0]))
    .catch(err => console.error(err));



  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  



  return (
    <div className="player">
       <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
       <iframe src={`https://www.youtube.com/embed/${apiData.key}`}
       width="90%" height="90%" title='trailer' frameBorder='0' allowFullScreen></iframe>
       <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player