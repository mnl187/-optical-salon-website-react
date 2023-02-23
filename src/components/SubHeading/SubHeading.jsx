import React from 'react';
import {IoGlassesOutline} from "react-icons/io5";

const SubHeading = ({title}) => (
  <div style={{ marginBottom: '1rem'}}>
    <p className="p__montserrat">{title}</p>
      <IoGlassesOutline color="fff"/>
  </div>
);

export default SubHeading;
