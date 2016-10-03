

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    }
    this.handleVideoListEntryClick = this.handleVideoListEntryClick.bind(this);
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);

  {console.log(this.state)}
  }
  componentDidMount() {
    this.getYouTubeVideos('dogs');
  }

  handleVideoListEntryClick (video) {
    this.setState({currentVideo: video})
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    }
    this.props.searchYouTube (options, (videos) => 
        this.setState({
          videos: videos,
          currentVideo: videos[0]
        })
      ); 
  }  
  render() {
  {console.log(this.state)}
    return (
      <div>
        <Nav handleNavInput={this.getYouTubeVideos} />
        <div className="col-md-7">
          <VideoPlayer video= {this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList handleVideoListEntryClick= {this.handleVideoListEntryClick} videos = {this.state.videos} />
        </div>        
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
