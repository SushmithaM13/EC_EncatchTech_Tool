import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page3.css";

const classAssignments = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Class ${i + 1}`
}));

const Page3 = () => {
  const navigate = useNavigate();

  const handleClassClick = (classId) => {
    navigate(`/assignments/${classId}`);
  };

  return (
    <div className="page3-container">
      <h2 className="page3-title">Class-wise Assignments</h2>
      <div className="class-grid">
        {classAssignments.map((cls) => (
          <button
            key={cls.id}
            className={`class-btn class-${cls.id}`}
            onClick={() => handleClassClick(cls.id)}
          >
            {cls.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page3;
 



