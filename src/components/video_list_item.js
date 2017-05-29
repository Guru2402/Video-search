import React from 'react';
//==============================================================================
const VideoListItem = ({item, onSelected, selectedItemId}) => {
  const listStyle = selectedItemId===item.id.videoId ? ({backgroundColor:'#ddd'}) : (null) ;
  return(
      <li onClick={()=>onSelected()} className="list-group-item" style={listStyle} >
        <div className="video-list media" >
          <div className="media-left" >
            <img
              className="media-object"
              src={item.snippet.thumbnails.default.url}
              alt=""
             />
          </div>
          <div className="media-body" >
            <div className="media-heading" >{item.snippet.title}</div>
          </div>
        </div>
      </li>
  );
}
//==============================================================================
export { VideoListItem };
