
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "black" }}>
      <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "18px" }}>APP</Link>
      <div style={{ display: "flex", gap: "20px" }}>
        {!isAuthenticated ? (
          <>
            <Link to="/login" style={{textDecoration: "none", color: "white" }}>Login</Link>
            <Link to="/signUp" style={{ textDecoration: "none",color: "white" }}>Sign Up</Link>
          </>
        ) : (
          <button onClick={handleLogout} style={{ color: "white", background: "transparent", border: "none", cursor: "pointer" }}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
