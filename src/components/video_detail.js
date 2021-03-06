import React from 'react';
//==============================================================================
const VideoDetail = ({video}) => {
  if(video){
    const url = `http://www.youtube.com/embed/${video.id.videoId}`;
    return(
      <div className="video-detail col-md-8" >
        <div className="embed-responsive embed-responsive-16by9 " >
          <iframe className="embed-responsive-item" allowFullScreen frameBorder="0" src={url} />
        </div>
        <div className="details" >
          <div>
            <p>{video.snippet.title}</p>
          </div>
          <div className="description" >{video.snippet.description}</div>
        </div>
      </div>
    );
  }else return(
    <div>no videos</div>
  );
}
//==============================================================================
export { VideoDetail };
