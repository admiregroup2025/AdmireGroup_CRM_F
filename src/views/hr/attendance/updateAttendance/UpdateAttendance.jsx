import React from 'react';

const UpdateAttendance = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="">
        <div className="card-header mb-3">
          <div className="my-auto mt-2">
            <div className="d-flex align-items-center gap-2">
              <h5 className="m-0 p-0 text-capitalize" style={{ fontWeight: 500, color: 'var(--PrimaryColorDark)' }}>
                Update Attendance
              </h5>
            </div>
            <p className="m-0" style={{ color: 'var(--Subtittles)' }}>
              You can update user attendance here.
            </p>
          </div>
        </div>
        <div className="card-body text-dark">
          <form className="row row-gap-3">
            <div className="col-12 col-md-6">
              <label htmlFor="Email" className="form-label">
                Select Email:
              </label>
              <select
                id="Email"
                name="Email"
                className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                required
              >
                <option value="" disabled>
                  Select an email
                </option>
                <option value="demo.manager@munc.in">demo.manager@munc.in</option>
                <option value="demo.employee@munc.in">demo.employee@munc.in</option>
                <option value="amar@gmail.com">amar@gmail.com</option>
                <option value="kumar@gmail.com">kumar@gmail.com</option>
                <option value="akash@gmail.com">akash@gmail.com</option>
                <option value="rahulsharma@gmail.com">rahulsharma@gmail.com</option>
                <option value="deepak@gmail.com">deepak@gmail.com</option>
                <option value="faiz@munc.in">faiz@munc.in</option>
                <option value="demo.employee2@munc.in">demo.employee2@munc.in</option>
                <option value="aloke@gmail.com">aloke@gmail.com</option>
                <option value="sachin12@gmail.com">sachin12@gmail.com</option>
              </select>
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="date" className="form-label">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                min="2025-04-28"
                max="2025-04-30"
                required
                defaultValue="2025-04-30"
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="loginTime" className="form-label">
                Login Time:
              </label>
              <input
                type="time"
                id="loginTime"
                name="loginTime"
                className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                defaultValue=""
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="logoutTime" className="form-label">
                Logout Time:
              </label>
              <input
                type="time"
                id="logoutTime"
                name="logoutTime"
                className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                defaultValue=""
              />
            </div>
            <div className="col-12">
              <label htmlFor="remark" className="form-label">
                Remark:
              </label>
              <textarea
                id="remark"
                name="remark"
                className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                rows="3"
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Update Attendance
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAttendance;