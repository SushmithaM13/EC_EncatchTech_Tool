import { Link } from "react-router-dom";
import "../styles/home.css";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";
import image20 from "../assets/image20.png";
import image21 from "../assets/image21.png";


const imageData = [
  { title: "APPOINTMENTS", url: image1, link: "/appointments" },
  { title: "RESOURCES", url: image2, link: "/appointments" },
  { title: "ASSIGNMNETS", url: image3, link: "/appointments" },
  { title: "DAY CARE", url: image4, link: "/appointments" },
  { title: "PRODUCTS", url: image5, link: "/appointments" },
  { title: "FEES", url: image6, link: "/appointments" },
  { title: "ONLINE CLASSES", url: image7, link: "/appointments" },
  { title: "CIRCULARS", url: image8, link: "/appointments" },
  { title: "NOTIFICATIONS", url: image9, link: "/appointments" },
  { title: "ATTENDENCE", url: image10, link: "/appointments" },
  { title: "CALENDAR", url: image11, link: "/appointments" },
  { title: "HOMEWORK", url: image12, link: "/appointments" },
  { title: "SHOWCASE", url: image13, link: "/appointments" },
  { title: "ONLINE EXAMS", url: image14, link: "/appointments" },
  { title: "TIME TABLE", url: image15, link: "/appointments" },
  { title: "PROGRESS REPORT", url: image16, link: "/appointments" },
  { title: "EXAM TIMETABLE", url: image17, link: "/appointments" },
  { title: "SUPPORT", url: image18, link: "/appointments" },
  { title: "SETTINGS", url: image19, link: "/appointments" },
  { title: "DIGITAL CONTENT", url: image20, link: "/appointments" },
  { title: "PROFILE", url: image21, link: "/appointments" },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>My Apps</h3>
        <ul className="menu">
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/add_section">Add Section</Link></li>
        </ul>
      </div>

      <div className="grid">
        {imageData.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card">
              <img src={item.url} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
