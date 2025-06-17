import { useState } from "react";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Sign Up Successful!");
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "auto",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px", 
      backgroundColor: "#fff" 
    }}>
      <h2 style={{ textAlign: "center" }}>Sign up</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label style={{ fontSize: "14px" }}>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            style={{ marginRight: "8px" }}
          />
          I agree to all Term, Privacy Policy and Fees
        </label>

        <button type="submit" style={{
          backgroundColor: "#6c47ff",
          color: "white",
          padding: "12px",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Sign up
        </button>
      </form>

      <div style={{
        textAlign: "center",
        margin: "20px 0",
        borderTop: "1px solid #ccc",
        position: "relative"
      }}>
        <span style={{
          position: "absolute",
          top: "-12px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#fff",
          padding: "0 10px",
          color: "#999"
        }}>
          Or sign up with
        </span>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <SocialIcon src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
        <SocialIcon src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" />
        <SocialIcon src="https://img.icons8.com/ios-filled/48/000000/twitterx.png" alt="X" />
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px"
};

const SocialIcon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: "40px",
      height: "40px",
      cursor: "pointer",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "5px"
    }}
  />
);

export default SignUp;
