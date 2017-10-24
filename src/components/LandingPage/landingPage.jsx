// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../Title/title';

const LandingPage = () => (
  <div>
    <Title />
    <Link to="/item" href="/item">Go to Item Page</Link>
  </div>
);

export default LandingPage;
