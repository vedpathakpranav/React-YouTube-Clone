import React, { useEffect } from 'react'
import { useState } from 'react'
import style from '../css/MainBox.module.css'


const MainBox = () => {

  let [state, setState] = useState();

  async function apiData() {
    const param = {
      part:"snippet , statistics",
      chart:"mostpopular",
      maxResults:10,
      regionCode:"In",
      key:import.meta.env.VITE_YOUTUBE_API_KEY
    }

    let fetchData = fetch(`https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(param)}`)

    let res=await fetchData;
    let data =await res.json();
     console.log(data.items)
     setState(data.items)
  } 
  useEffect(() => {
    apiData()
  },[])
  
  return (
    <main className={style.main}>
      
      {
        state?.map((data) =>{
          return (
          <article >
            <div>
              <img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title}/>
            </div>
            <div>
              <h2>{data.snippet.title}</h2>
            </div>
            <div>
              <h3>{data.snippet.channelTitle}</h3>
            </div>
          </article>
        
        )
      })
      }
 </main>
  )
}

export default MainBox;