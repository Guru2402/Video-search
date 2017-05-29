import React, { Component } from 'react';
import { VideoListItem } from './';
//==============================================================================
class VideoList extends Component {
//==============================================================================
constructor(props) {
  super(props);
  this.state = {
    selectedItemId:''
  }
}
//==============================================================================
  render() {
    return(
      <div>
        <ul className=" col-md-4 list-group" >
          {this.props.data.map(item=>(
            <VideoListItem
              onSelected={()=>{
                this.setState({selectedItemId:item.id.videoId});
                return this.props.onSelected(item) ;
              }}
              selectedItemId={this.state.selectedItemId}
              key={item.etag}
              item={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}
//==============================================================================
export { VideoList };
