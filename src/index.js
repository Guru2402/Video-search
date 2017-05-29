import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';
import { SearchBar, VideoList, VideoDetail } from './components';
//==============================================================================
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCCNl0NsrQiUapxU6sHe18PTJkzxu-HW20';
//==============================================================================
class App extends Component {
//==============================================================================
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo:{},
    };
  }
//==============================================================================
  onSubmitSearch(term){

    axios.get(ROOT_URL,{
      params:{
        part: 'snippet',
        key: API_KEY,
        q: term,
        type: 'video'
      }
    }).then((res)=>{
      this.setState({videos:res.data.items,selectedVideo:res.data.items[0]});
    })
    .catch((error)=>console.log(error));

  }
//==============================================================================
  render(){
    const search = _.debounce((term)=>this.onSubmitSearch(term),1000);
    return (
      <div>
        <SearchBar
          onSubmit={search}
        />
        {this.state.videos.length===0 ? (null) : (
          <VideoDetail
            video={this.state.selectedVideo}
          />
        ) }
        <VideoList
          data={this.state.videos}
          onSelected={(video)=>this.setState({selectedVideo:video})}
        />
      </div>
    );
  }
}
//==============================================================================
ReactDOM.render(<App/>,document.querySelector('.container'));
//==============================================================================
