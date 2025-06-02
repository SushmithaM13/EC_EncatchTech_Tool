import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3>Menu</h3>
        <ul style={styles.menu}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <h1>Hello, welcome</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh"
  },
  sidebar: {
    width: "200px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRight: "1px solid #ccc"
  },
  menu: {
    listStyle: "none",
    padding: 0,
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  content: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#fff"
  }
};

export default Dashboard;
