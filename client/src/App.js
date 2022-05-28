import React, { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import About from "./Pages/About";
import Books from "./Pages/Books";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddBook from "./Pages/AddBook";
import BookInfo from "./components/BookInfo";
import Register from "./Pages/Register";

function App() {
  return (
    <Fragment>
    <BrowserRouter>
      <div className="App">
        <Navbar  />
        <Routes>
          <Route path='/' element={ < Home /> } exact />
          <Route path='/about' element={ < About /> } />
          <Route path='/register' element={ < Register /> } />
          <Route path='/books' element={ < Books /> } exact />
          <Route path='/books/:id' element={ <BookInfo /> } exact />
          <Route path='/login' element={ < Login /> } />
          <Route path='/add' element={ < AddBook /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    <ToastContainer />
    </Fragment>
  );
}

export default App;
