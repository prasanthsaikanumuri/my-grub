import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import './index.css';
import fetch from 'node-fetch';


class IndexPage extends React.Component{
  setLocationNameOnChange(evt){
    this.setState({
      locationName: evt.target.value
    });

  }

  getLatLong(locationName){
    fetch(`https://us1.locationiq.com/v1/search.php?key=93413dd7e03322&q=${locationName}&format=json`,
    {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        location: {
          lat: data[0].lat,
          lon: data[0].lon
        }
      });
      this.getRestaurantData(data[0].lat, data[0].lon);
    });
  }

  getRestaurantData(Lat,Long){
    console.log(Lat);
    console.log(Long);

  }

  handleOnClick(){
    // console.log(this.state.locationName);
    getLatLong(this.state.locationName);
  }

  render (){
    return (
      <Layout>
      <SEO title="Home" />
      {/* <h1>My Gatsby Site</h1> */}
      {/* <p>Welcome to your new Gatsby site.</p> */}
      {/* <p>Now go build something great.</p> */}
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      <div className="location-search">
            <input placeholder="Enter the location" onChange={(evt) => this.setLocationNameOnChange(evt)}/>
            <button onClick={(evt) => this.handleOnClick(evt)}>Search</button>
          </div>
      console.log(locationName);
      
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
  }
}

export default IndexPage
