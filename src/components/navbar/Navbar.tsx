import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "../../assets/images/Foodieland..svg";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Instagram from "../../assets/images/instagram.svg";

export default function Navbar() {
  return (
    <>
      <header id="header">
        <div className="header_even_container">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="Foodieland" />
            </Link>
          </div>
          <nav>
            <ul role="list" className="navlist">
              <li>
                <Link to={"/"} className="list_link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/recipes"} className="list_link">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="list_link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="list_link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/aBout"} className="list_link">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="social_icons">
            <div className="icon_hover_effect">
              <img src={Facebook} alt="Facebook-icon" />
            </div>
            <div className="icon_hover_effect">
              <img src={Twitter} alt="Twitter-icon" />
            </div>
            <div className="icon_hover_effect">
              <img src={Instagram} alt="instagam-icon" />
            </div>
          </div>

          <div className="menu_icon">
            <i className="bx bx-menu"></i>
          </div>
        </div>
      </header>
    </>
  );
}
