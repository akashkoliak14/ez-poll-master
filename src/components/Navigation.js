import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router-dom";
const Navigation = () => {
  const history = useHistory();
  const onNewPollButton = async (e) => {
    e.preventDefault();
    history.push("/RESULTS");
  };
	return (
		<div>
				<nav className='navbar navbar-expand-lg navbar-light bg-light text-dark'>
     
		
		
     <div class="container-fluid"  >
       <Link className="nav-link active mx-4" to="#"> E-Poll </Link>
   
       <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
             <Link className="nav-link active mx-4" to="/Home">Home</Link>
           </li>
		   <li class="nav-item">
		   <Link className="nav-link active mx-4" to="/">CREATE POLL</Link>
           </li>
           <li class="nav-item">
		   <Link className="nav-link active mx-4" to="/Login">LOGIN</Link>
           </li>
           <li class="nav-item">
		   <Link className="nav-link active mx-4" to="/Registration">Registration</Link>
           </li>
           
        	 <li class="nav-item">
		   <Link className="nav-link active mx-4" to="/Admin">Admin</Link>
           </li>
       
         </ul>
         CALL US :800-123-4567
    
     
       </div>
     </div>
   </nav>
		</div>
	);
};

export default Navigation;
