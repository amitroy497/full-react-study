import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Google Map in React</h1>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />
        </Map>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCepCONUC-1uRj9ucZH3UJNeuWY0jNaVEU',
})(Main)
