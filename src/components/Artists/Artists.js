import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Artists.module.css';

const Artists = () => (
  <div className={styles.Artists}>
    Artists Component
  </div>
);

function fetchArtists(){

  
  fetch('http://localhost:3000')
  .then((res) => res.json())
}

Artists.propTypes = {};

Artists.defaultProps = {};

export default Artists;
