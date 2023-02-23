import React from 'react';
import {IoGlassesOutline} from "react-icons/io5";

const SubHeading = ({title}) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
      <IoGlassesOutline/>
  </div>
);

export default SubHeading;
