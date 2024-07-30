import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/6209581-uhd_4096_2160_25fps.mp4'
const Videoplayer = ({playstate , setplaystate}) => {
  const player = useRef(null);
  const closeplayer = (e) => {
    if (e.target === player.current) {
        setplaystate(false);
    }
  }
  return (
    <div className={`vedio-player ${playstate? '' : 'hide'}`} ref={player} onClick={closeplayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
