
import { Link } from "react-router-dom";
import { NavbarBottomAdd } from "./NavbarBottomAdd";
import { Song } from "./Song";


export const Newest = () => {

  return (
    <div>
  <div className="header">
        <br />



       
        <h2 className="queue-menu">Queue: </h2>
        <p className="menu-navbar"> <Link to="/" className="strong" style={{
          textDecoration: "none",
          color: "white"
        }}>Newest
        </ Link> | <Link to="/most-popular" style={{
          textDecoration: "none",
          color: "white"
        }}> Most popular </ Link> </p>


      </div>
      <div className="menu">
      <Song  />


</div>
<NavbarBottomAdd />
    </div>


  )
}