import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = ({mode,toggle}) => {
    // console.log(obj.name)
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      Text Utils
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}

       {/* <div className="d-flex">
          <div className="bg-primary rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={() => {toggle('primary')}} ></div>
          <div className="bg-danger rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={() => {toggle('danger')}} ></div>
          <div className="bg-success rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={() => {toggle('success')}} ></div>
          <div className="bg-warning rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={() => {toggle('warning')}} ></div>
       </div> */}

       <div className={`form-check form-switch d-flex text-${mode === 'light'?'black': 'light'}`}>
      <input className="form-check-input me-2" onClick={toggle} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Change mode</label>
     </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar