import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStore } from 'react-redux';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Container, Image, Menu } from 'semantic-ui-react';
import { PacmanLoader } from 'react-spinners';

// DATA EN DUR
import * as parkDate from '../../data/skateboard-parks.json';
// CSS MAPBOX
import 'src/styles/mapbox-gl.css';
import './map.scss';

const Map = ({ }) => {
// const Map = ({ viewport, mapboxApiAccessToken, mapStyle, updateViewport }) => {
  const store = useStore();
  console.log(store);
  // IMPORT DES DATA EN DUR
  const [selectedPark, setSelectedPark] = useState(null);

  //  Fonction pour calculer la taille du Navigateur
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [mapLoading, setMapLoading] = useState(true);

  let resizeWindow = () => {
    setNavbarHeight(document.querySelector('.navbar').offsetHeight);
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
    window.addEventListener('resize', resizeWindow);
    // console.log(document.querySelector('.ui .container'));
    // console.log(document.querySelector('.ui .container').offsetHeight);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);
  // FIN DE LA FONCTION

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPark(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);
  const handleChange = (mapChange) => {
    updateViewport(mapChange);
  };
  // const handleResize = (event)=>{
  //   console.log('--------')
  //   console.log(event)
  //   console.log(event.height)
  //   // setViewportsize(event);
  //   console.log('--------')
  // }
  const handleLoad = (onLoadEvent) => {
    setMapLoading(false);
  };

  return (
    <>
      
    </>
  );
};
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
};

export default Map;
