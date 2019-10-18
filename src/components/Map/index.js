import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { Container, Image, Menu } from 'semantic-ui-react';

// DATA EN DUR
import * as parkDate from '../../data/skateboard-parks.json'
// CSS MAPBOX
import 'mapbox-gl/dist/mapbox-gl.css'
import './map.scss'

const Map = ({ viewport, mapboxApiAccessToken, mapStyle, updateViewport }) => {
  // IMPORT DES DATA EN DUR
  const [selectedPark, setSelectedPark] = useState(null)


  //  Fonction pour calculer la taille du Navigateur
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    let resizeWindow = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    //SUPRIMER LA HAUTEUR DE LA NAV POUR VOIR 100% DE LA CARTE
    // const [navBarSize, setnavBarSize] = useState(0);
    // let navBarSize = () => {
    //   setnavBarSize(window.innerWidth);
    // };
    // // let navBar=



    useEffect(() => {
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
      // console.log(document.querySelector('.ui .container'));
      // console.log(document.querySelector('.ui .container').offsetHeight);
      return () => window.removeEventListener("resize", resizeWindow);
    }, []);
  // FIN DE LA FONCTION

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPark(null)
      }
    }
    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])
  const handleChange = (mapChange) => {
    updateViewport(mapChange)
  }
  // const handleResize = (event)=>{
  //   console.log('--------')
  //   console.log(event)
  //   console.log(event.height)
  //   // setViewportsize(event);
  //   console.log('--------')
  // }


  return (
      <ReactMapGL
      {...viewport}
              width={windowWidth}
              height={windowHeight}
        
        // onResize={handleResize}
        transitionDuration={100}
        mapboxApiAccessToken={mapboxApiAccessToken}
        mapStyle={mapStyle}
        // Animation sur le changement :  Viewport Transition
        // https://urbica.github.io/react-map-gl/#/Components/Layer
        // https://github.com/uber/react-map-gl/blob/master/docs/advanced/viewport-transition.md#examples/viewport-animation
        // onViewportChange={viewport => {
        //   setViewport(viewport);
        //   console.log(viewport);
        // }}
        onViewportChange={handleChange}
      >
        {parkDate.features.map((park) => (
          // ICI A VERIFIER PREFERER LAYER A MARKER
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault()
                setSelectedPark(park)
              }}
            >
              <img src="public/DumpsterLogos.svg" alt="Dumpsters" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null)
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
              <img src="public/DumpsterLogos.svg" />
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>

  )
}
Map.propTypes = {
  viewport: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    // J'arrive pas a verfier le type de Height et Width car il change
    // width: PropTypes.number.isRequired,
    // height: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,

  mapboxApiAccessToken: PropTypes.string.isRequired,
  mapStyle: PropTypes.string.isRequired,
  updateViewport: PropTypes.func.isRequired,
}

export default Map
