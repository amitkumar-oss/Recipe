import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { SiFoodpanda } from "react-icons/si";

const Navbar = () => {

  let navigate = useNavigate()
  const handleClick = () => {
    navigate('/favourite')


  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning  mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ fontSize: '25px' }} to="/"><SiFoodpanda style={{ fontSize: '40px' }} /><b>Food</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

            </ul>
            <li className='me-5 ' onClick={handleClick} style={{ listStyle: 'none', cursor: 'pointer' }}> Favourite   <FaRegHeart /><sup>0</sup> </li>

          </div>

        </div>
      </nav>



    </div>
  )
}

export default Navbar
