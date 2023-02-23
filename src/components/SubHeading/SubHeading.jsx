import React from 'react';
import {women01} from "../../constants/images";

const SubHeading = ({title}) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
      <img src={women01} alt="women image" className="women01__img"/>
  </div>
);

export default SubHeading;
