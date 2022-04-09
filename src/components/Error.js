import React from "react";
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router-dom";

const Error = () => {
  const history = useHistory();

  const onNewPollButton = async (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="Vote">
      <div className="fom">
    <h1>LOGIN</h1><br />
    <input type="text" placeholder='LOG IN ID' /><br />
    <input type="text" placeholder='PASSWORD' /><br />
   
      <button type="submit" className="buttonPoll" onClick={onNewPollButton}>
      LOGIN
      </button>
      <Link class="nav-link" to="/Registration">I DONT HAVE AN ACCOUNT</Link>
      </div>
          </div>
  );
};

export default Error;
