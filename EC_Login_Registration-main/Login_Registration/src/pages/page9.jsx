import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import "./page9.css";

const Page9 = () => {
  const [rows, setRows] = useState([
    { id: "1236", details: "Alice" },
    { id: "259841", details: "Bob" },
    { id: "698745", details: "Charlie" },
  ]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleAddRow = () => {
    const newId = Math.floor(Math.random() * 1000000).toString();
    const newDetails = "New Notification";
    setRows([...rows, { id: newId, details: newDetails }]);
  };

  const handleDelete = (indexToDelete) => {
    const updatedRows = rows.filter((_, index) => index !== indexToDelete);
    setRows(updatedRows);
  };

  const handleEdit = (index) => {
    const newDetails = prompt("Enter new notification details:");
    if (newDetails) {
      const updatedRows = [...rows];
      updatedRows[index].details = newDetails;
      setRows(updatedRows);
    }
  };

  const openPopup = (id) => {
    setSelectedId(id);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedId(null);
  };

  return (
    <div className="page-container">
      <h2 className="page-heading">Welcome to Notification section</h2>

      <table className="notification-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Notification details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="clickable-id" onClick={() => openPopup(row.id)}>
                {row.id}
              </td>
              <td>{row.details}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(index)}>
                  <FaEdit className="icon" /> Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(index)}>
                  <FaTrash className="icon" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-row">
        <button className="add-row-btn" onClick={handleAddRow}>
          <FaPlus className="icon" /> Add Row
        </button>
      </div>

      {popupVisible && (
        <div className="popup-panel">
          <button className="close-popup-btn" onClick={closePopup}>
            <FaTimes />
          </button>
          <h3>ID: {selectedId}</h3>
          <p>This is a sample popup content.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
          <p>Excepteur sint occaecat cupidatat non proident.</p>
          <p>Click "X" to close this panel.</p>
        </div>
      )}
    </div>
  );
};

export default Page9;
