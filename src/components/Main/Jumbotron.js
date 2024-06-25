import React,{useState} from 'react'
import './animation.css'
import './video.css'
import BackgroundVideo from './BackgroundVideo'
function Jumbotron() {


    const [isVideoVisible, setIsVideoVisible] = useState(true);

    const handleVideoEnd = () => {
      setIsVideoVisible(false);
    };


  
  return (
    
    

    <div className='body' style={{ height: '560px', width: '100%',  }}>
      
        <BackgroundVideo onVideoEnd={handleVideoEnd} isVisible={isVideoVisible}></BackgroundVideo>
       
        {/* <div className='content'>
          <h1 className={`title ${isVideoVisible ? 'visible' : ''}`}>CUBICA
          
            <div class="aurora">
              <div class="aurora__item">
              </div>
              <div class="aurora__item">
              </div>
              <div class="aurora__item">
              </div>
              <div class="aurora__item">
              </div>
            </div>
          </h1>
        </div> */}
    </div>
  )
}


export default Jumbotron