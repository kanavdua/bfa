import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark my-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">BooksForAll</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/books" className="nav-link active" aria-current="page">Books</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/add" className="nav-link active" aria-current="page">Add Book</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/">Applied Science</a></li>
                        <li><a className="dropdown-item" href="/">Civil Engineering</a></li>
                        <li><a className="dropdown-item" href="/">Computer Science & Engineering</a></li>
                        <li><a className="dropdown-item" href="/">Electrical Engineering</a></li>
                        <li><a className="dropdown-item" href="/">Electronics & Communication Engineering</a></li>
                        <li><a className="dropdown-item" href="/">Information Technology</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/">Others</a></li>
                      </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                <button type="button" className="btn btn-outline-light mx-2"><NavLink to="/register" className="signin-btn">Sign In</NavLink></button>
                </div>
            </div>
            </nav>
    </>
  )
}

export default Navbar