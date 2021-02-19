// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
import { css } from "@emotion/core";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const override = css`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  const[loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])
  return (
    
    <Router>
    {loading ? (
      <ClimbingBoxLoader size={30} color={'#773db4'} loading={loading} css={override}/>
    ) : (
      <Home />
    )}
    </Router>
  );
}

export default App;
