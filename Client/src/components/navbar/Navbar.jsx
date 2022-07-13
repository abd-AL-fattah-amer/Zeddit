import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  
const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/login");
}

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Zeddit</span>
        </Link>
        {user ?   <>
                      <>Hello...</>  {user.username}
                        <button onClick={handleLogout}>LogOut</button>
                    </>
                     : (  
          
          <div className="navItems">
           <>
            <button className="navButton" onClick={()=>navigate("/Register")}>Register</button>
            <button onClick={()=>navigate("/Login")} className="navButton">Login</button>
            </>
          </div>
        )}


        
      </div>
    </div>
  );
};

export default Navbar;