import React from "react";
import "./leaveAssign.css"; // Assuming you have a CSS file for styling
const AssignLeaveForm = () => {
  return (
    <div className="assign-leave-container">
      <form className="assign-leave-form">
        <h1>Assign Leave</h1>
        <p className="form-description">
          Select an employee, choose a leave type, and provide a reason.
        </p>

        <div className="form-section">
          <label className="form-label" htmlFor="employee">Employee</label>
          <div className="select-wrapper">
            <select className="employee-select" id="employee">
              <option>Select Employee</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <label className="form-label">Leave Type</label>
          <div className="leave-options">
            <label className="leave-option">
              <input type="radio" name="leave" value="casual" className="leave-radio" />
              Casual Leave
            </label>
            <label className="leave-option">
              <input type="radio" name="leave" value="sick" className="leave-radio" />
              Sick Leave
            </label>
            <label className="leave-option">
              <input type="radio" name="leave" value="earned" className="leave-radio" />
              Earned Leave
            </label>
          </div>
        </div>

        <div className="form-section">
          <label className="form-label" htmlFor="reason">Reason for Leave</label>
          <textarea
            id="reason"
            className="reason-textarea"
            placeholder="Enter reason..."
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AssignLeaveForm;
