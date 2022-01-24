import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeIcon from "../Images/Header/HomeIcon.svg";
import ContactIcon from '../Images/Header/ContactIcon.svg';
import AboutIcon from '../Images/Header/AboutIcon.svg'


function Header() {
  return (
    <div className="Header__container">
        <Router>
      <Link to="/Home" className="Header__link">
      <button className="Header__cell">
        <img className ="Header__image" src={HomeIcon} />
          Home</button>
      </Link>
      <Link to="/About" className="Header__link">
      <button className="Header__cell">
        <img className ="Header__image" src={AboutIcon} />
        About
          </button>
      </Link>
      <Link to="/Contact" className="Header__link">
        <button className="Header__button">
        <img className ="Header__image" src={ContactIcon} />
          Contact</button>
      </Link>
      </Router>
    </div>
  );
}

export default Header;