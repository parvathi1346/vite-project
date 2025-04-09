import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from "../src/GridView";
import Todo from "./Todo";
import Navbar from "./Navbar";
import Home from "./Home";
import ProfileCard from "./ProfileCard";
import storeredux from "./storeredux";
import {Provider} from "react-redux";
const profileLst = {
  name: "Parvathi",
  Department: "AIDS",
  year: 2,
  mobile: 9809890980,
  address: "D.No: 23/234, Saraswathi Nagar, Coimbatore",
};
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="/todo" element={
          <Provider store={storeredux}> 
          <Todo/>
          </Provider>
        }/>
        
        <Route path="/profilecard" 
        element={<ProfileCard profileLst={profileLst}/>} />
        <Route path="/gridview" element={<GridView />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;