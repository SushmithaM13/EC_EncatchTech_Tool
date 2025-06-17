
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";


export const Login = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    remember: false
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);
    login(); 
    alert("Logged in!");
    navigate("/"); // Navigate to Home after login
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Log in</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="emailOrPhone"
          placeholder="Email or Phone number"
          value={formData.emailOrPhone}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <div style={rowStyle}>
          <label style={{ fontSize: "14px" }}>
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              style={{ marginRight: "6px" }}
            />
            Remember me
          </label>
          <Link to="#" style={{ fontSize: "14px", color: "#6c47ff" }}>
            Forgot password?
          </Link>
        </div>

        <button type="submit" style={loginButtonStyle}>
          Login
        </button>
      </form>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p style={{ fontSize: "14px" }}>
          Not a member?{" "}
          <Link to="/signUp" style={{ color: "#6c47ff" }}>
            Sign up
          </Link>
        </p>
      </div>

      <div style={dividerStyle}>or log in with</div>

      <div style={googleButton}>
        <img
          src="https://img.icons8.com/color/24/google-logo.png"
          alt="Google"
          style={{ marginRight: "10px" }}
        />
        Log in with Google
      </div>
    </div>
  );
};

// 🎨 Styles
const containerStyle = {
  maxWidth: "400px",
  margin: "auto",
  padding: "30px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",
  backgroundColor: "#fff",
  fontFamily: "Arial, sans-serif"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px"
};

const loginButtonStyle = {
  backgroundColor: "#6c47ff",
  color: "white",
  padding: "12px",
  border: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer"
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const dividerStyle = {
  textAlign: "center",
  margin: "20px 0",
  borderTop: "1px solid #ccc",
  position: "relative",
  fontSize: "13px",
  color: "#777"
};

const googleButton = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "10px",
  fontSize: "14px",
  cursor: "pointer"
};

export default Login;
