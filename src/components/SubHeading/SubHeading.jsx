import React from 'react';
import {women01} from "../../constants/images";

const SubHeading = () => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">Tytuł</p>
      <img src={women01} alt="women image" className="women01__img"/>
  </div>
);

export default SubHeading;
