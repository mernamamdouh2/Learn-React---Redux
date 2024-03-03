// import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Cards from './components/Cards';
import DatesReminder from './components/DatesReminder/DatesReminder';
import FormInputs from './components/Form';
import Header from './components/Header';
import MenuFood from './components/MenuFood/MenuFood';
import MoviesDB from './components/MoviesDB/MoviesDB';
import MoviesDBRedux from './components/Redux/MoviesDBRedux/MoviesDBRedux';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
//////////////////////REDUX////////////////
import Redux from './components/Redux/Redux';
// import Footer from './components/Footer';
import img1 from './images/lights.jpg';
import img2 from './images/mountains.jpg';
import img3 from './images/sailboat.jpg';
import img4 from './images/snow.jpg';

function App() {
  const data = [
    {title: 'Title 1', description: 'description 1', img: img1},
    {title: 'Title 2', description: 'description 2', img: img2},
    {title: 'Title 3', description: 'description 3', img: img3},
    {title: 'Title 4', description: 'description 4', img: img4},
  ]

  const printTitle = (message)=>{
    alert("This is from app file " + message)
  }

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/cards" element={
              data.length ? (
                data.map((item, index)=> {
                  return (
                    <Cards 
                      key={index} 
                      title={item.title} 
                      description={item.description} 
                      img={item.img}
                      click={printTitle}
                    >
                      <h6>Children</h6>
                    </Cards>
                  )
                })
              ) : (<NotFound message="No Data Found" color="danger" />)
            } />
          <Route path="/form" element={<FormInputs/>} />
          <Route path="/datesReminder" element={<DatesReminder/>} />
          <Route path="/questionAnswer" element={<QuestionAnswer/>} />
          <Route path="/menuFood" element={<MenuFood/>} />
          {/* // eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <Route path="/moviesDB" element={<MoviesDB/>} />

          //////////////////////REDUX////////////////
          <Route path="/redux" element={<Redux/>} />
          {/* // eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <Route path="/moviesDBRedux" element={<MoviesDBRedux/>} />

          <Route path="*" element={<NotFound message="404 Page Not Found" color="warning" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// <Footer/>
export default App;
