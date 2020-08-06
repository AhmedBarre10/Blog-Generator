import React from 'react';
import axios from 'axios';

import {Redirect} from 'react-router-dom';
import {set} from 'mongoose';
const Logout = () => {
  localStorage.removeItem ('token');
  console.log ('logout');

  return <Redirect to="/login" />;
};

export default Logout;
