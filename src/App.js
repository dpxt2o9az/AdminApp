/*
This is the main module of the AdminApp.  See the REAME.md
file in the security project to understand how to
run this code in the browser.

*/

import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CustomTable from './components/custom-table.js';

const appUrl = 'http://localhost:8080/user';
function App() {

  return (
    <div>
      <CustomTable url={appUrl}/>
    </div>
  );
}
export default App;
