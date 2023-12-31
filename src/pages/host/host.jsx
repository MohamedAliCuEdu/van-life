// react components:
import { NavLink, Outlet } from "react-router-dom";

function Host(){

  return(
    <main className="host-page page-content">
      <nav>
        <NavLink to="">dashboard</NavLink>
        <span>  /  </span>
        <NavLink to="income">income</NavLink>
        <span>  /  </span>
        <NavLink to="vans">vans</NavLink>
        <span>  /  </span>
        <NavLink to="reviews">reviews</NavLink>
      </nav>
      <br></br>
      <br></br>
      <br></br>
      <Outlet />
    </main>
  )
}

export default Host;