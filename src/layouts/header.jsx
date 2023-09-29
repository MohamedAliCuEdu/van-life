// react component:
import {useRef} from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  // handle sign menu position - by adding [down] class:
  const menuId = useRef();
  function dropMenu(){
    menuId.current.classList.toggle("down");
  }
  
  return (
    <header>
      <div className="container">
        <Link className="logo" to="/">
          <img src={require("../assets/logo.png")} alt="logo" />
        </Link>
        <nav>
          <div className="links">
            <NavLink to="host" title="Host page">
              host
            </NavLink>
            <NavLink to="vans" title="Vans Page">
              vans
            </NavLink>
            <NavLink to="about" title="About Page">
              about
            </NavLink>
            <div className="user">
              <i className="fa-regular fa-circle-user" onClick={dropMenu} title="Sign Up/In"></i>
              <ul className="drop-menu" ref={menuId}>
                <li>
                  <NavLink to="sign">
                    <i className="fa-solid fa-user-plus"></i>
                    <span>sign up</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="sign">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span>sign in</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;