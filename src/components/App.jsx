

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVid: props.videoData[0],
      allVideos: props.videoData
    }
    this.playClicked = this.playClicked.bind(this);
  }
  playClicked (video) {
    this.setState({currentVid: video})
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video= {this.state.currentVid} />
        </div>
        <div className="col-md-5">
          <VideoList playerFunction= {this.playClicked} videos = {this.props.videoData} />
        </div>        
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
