// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    updateBitrate = () =>{ 
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
    }

    updateResolution = () =>{
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div className="update">
                <br /><button className="bitrate" onClick={this.updateBitrate}>Bitrate: {this.state.settings.bitrate}</button>
        <br /><button className="resolution" onClick={this.updateResolution}>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}
export default YouTubeDebugger;