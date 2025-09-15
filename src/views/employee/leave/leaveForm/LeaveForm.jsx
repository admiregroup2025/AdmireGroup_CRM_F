import React, { useState, useEffect } from 'react';
import './LeaveForm.css';

const LeaveForm = ({ onSubmit, onCancel, leaveBalance }) => {
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    additionalManager: '',
    reason: ''
  });

  const handleDateInputClick = (inputId) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
      inputElement.showPicker();
    }
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  const [availableLeave, setAvailableLeave] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({
      ...prev,
      startDate: today,
      endDate: today
    }));
  }, []);

  useEffect(() => {
    if (formData.leaveType) {
      const leaveTypeMap = {
        'Sick Leave': 'Sick Leave (Paid)',
        'Casual Leave': 'Casual Leave (Paid)',
        'Paid Leave': 'Emergency Leave (Paid)',
        'unPaid Leave': 'Unpaid Leave',
        'Paternity Leave': 'Paternity Leave (Paid)'
      };
      
      const mappedType = leaveTypeMap[formData.leaveType];
      if (mappedType && leaveBalance[mappedType] !== undefined) {
        setAvailableLeave(`${leaveBalance[mappedType]} days available`);
      } else {
        setAvailableLeave('Unlimited');
      }
    } else {
      setAvailableLeave('');
    }
  }, [formData.leaveType, leaveBalance]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.leaveType) newErrors.leaveType = 'Leave type is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (!formData.reason) newErrors.reason = 'Reason is required';

    if (formData.startDate && formData.endDate) {
      const startDate = new Date(formData.startDate);
      const endDate = new Date(formData.endDate);
      if (startDate > endDate) {
        newErrors.dateRange = 'End date cannot be before start date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });
    
    try {
      const success = await onSubmit(formData);
      if (success) {
        setSubmitMessage({ 
          type: 'success', 
          text: 'Leave application submitted successfully!' 
        });
      }
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        text: error.message || 'Failed to submit leave application' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      leaveType: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      additionalManager: '',
      reason: ''
    });
    setErrors({});
    setSubmitMessage({ type: '', text: '' });
    if (onCancel) onCancel();
  };

  return (
    <div className="mainbar-grid">
      <div className="pb-4" style={{ overflow: 'auto' }}>
        <div className="container-fluid py2" style={{ color: 'var(--primaryDashColorDark)' }}>
          <div>
            <div className="my-auto mt-2">
              <div className="d-flex align-items-center gap-2">
                <h5 className="m-0 p-0 text-capitalize" style={{ fontWeight: 500, color: 'var(--PrimaryColorDark)' }}>
                  Create Leave
                </h5>
              </div>
              <p className="m-0" style={{ color: 'var(--Subtittles)' }}>
                You can create a new leave request here.
              </p>
            </div>

            {submitMessage.text && (
              <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3`}>
                {submitMessage.text}
              </div>
            )}

            <form className="py-4 rounded row" onSubmit={handleSubmit}>
              <div className="mb-3 col-12">
                <label htmlFor="leaveType" className="form-label">Leave Type</label>
                <select
                  className={`form-select rounded-2 bg-light text-dark border ${errors.leaveType ? 'is-invalid' : ''}`}
                  id="leaveType"
                  name="leaveType"
                  value={formData.leaveType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>-- Select Leave Type --</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Paid Leave">Paid Leave</option>
                  <option value="unPaid Leave">UnPaid Leave</option>
                  <option value="Paternity Leave">Paternity Leave</option>
                </select>
                {errors.leaveType && <div className="invalid-feedback">{errors.leaveType}</div>}
              </div>

              <div className="mb-3 col-12">
                <label htmlFor="leaveCount" className="form-label">Available</label>
                <div className="rounded-2 w-100 text-dark border dark-placeholder" style={{ width: 'fit-content', position: 'relative', background: 'rgba(201, 34, 34, 0.118)' }}>
                  <input
                    className="form-control rounded-2 bg-light text-dark border dark-placeholder"
                    id="leaveCount"
                    name="leaveCount"
                    readOnly
                    disabled
                    placeholder={formData.leaveType ? availableLeave : "Please select a leave type"}
                    value={formData.leaveType ? availableLeave : ""}
                    style={{ opacity: 1 }}
                  />
                </div>
              </div>

              <div className="mb-3 col-6" onClick={() => handleDateInputClick('startDate')} style={{ cursor: 'pointer' }}>
                <label htmlFor="startDate" className="form-label">Start Date:</label>
                <input
                  type="date"
                  className={`form-control rounded-2 bg-light text-dark ${errors.startDate ? 'is-invalid' : ''}`}
                  id="startDate"
                  name="startDate"
                  min={new Date().toISOString().split('T')[0]}
                  required
                  value={formData.startDate}
                  onChange={handleChange}
                />
                {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
              </div>

              <div className="mb-3 col-6" onClick={() => handleDateInputClick('endDate')} style={{ cursor: 'pointer' }}>
                <label htmlFor="endDate" className="form-label">End Date:</label>
                <input
                  type="date"
                  className={`form-control rounded-2 bg-light text-dark ${errors.endDate ? 'is-invalid' : ''}`}
                  id="endDate"
                  name="endDate"
                  min={formData.startDate || new Date().toISOString().split('T')[0]}
                  value={formData.endDate}
                  onChange={handleChange}
                />
                {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
                {errors.dateRange && <div className="invalid-feedback d-block">{errors.dateRange}</div>}
              </div>

              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="manager" className="form-label">Reporting Manager:</label>
                <input
                  className="form-control rounded-2 bg-light text-dark border-0"
                  id="manager"
                  name="manager"
                  disabled
                  placeholder="demo.manager@munc.in"
                  value="demo.manager@munc.in"
                />
              </div>

              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="hr" className="form-label">Reporting HR:</label>
                <input
                  className="form-control rounded-2 bg-light text-dark border-0"
                  id="hr"
                  name="hr"
                  disabled
                  placeholder="demo.hr@munc.in"
                  value="demo.hr@munc.in"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="additionalManager" className="form-label">Additional Manager:</label>
                <select
                  className="form-select rounded-2 bg-light text-dark border dark-placeholder"
                  id="additionalManager"
                  name="additionalManager"
                  value={formData.additionalManager}
                  onChange={handleChange}
                >
                  <option value="" disabled>-- Select Additional Manager --</option>
                  <option value="demo.admin@munc.in">demo.admin@munc.in</option>
                  <option value="demoemp2@munc.in">demoemp2@munc.in</option>
                  <option value="deepak@gmail.com">deepak@gmail.com</option>
                  <option value="sachin@gmail.com">sachin@gmail.com</option>
                  <option value="aloke@gmail.com">aloke@gmail.com</option>
                  <option value="sachin12@gmail.com">sachin12@gmail.com</option>
                </select>
              </div>

              <div className="mb-3" style={{ position: 'relative' }}>
                <label htmlFor="reason" className="form-label">Reason:</label>
                <textarea
                  className={`form-control rounded-2 bg-light text-dark border dark-placeholder ${errors.reason ? 'is-invalid' : ''}`}
                  id="reason"
                  name="reason"
                  maxLength="100"
                  required
                  placeholder="Please mention the reason for leave"
                  value={formData.reason}
                  onChange={handleChange}
                />
                <span style={{ position: 'absolute', bottom: '0.2rem', right: '2rem' }}>
                  {100 - formData.reason.length} characters
                </span>
                {errors.reason && <div className="invalid-feedback">{errors.reason}</div>}
              </div>

              <div className="d-flex align-items-center gap-3">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                <button
                  type="reset"
                  className="btn btn-danger"
                  onClick={handleReset}
                  disabled={isSubmitting}
                  style={{ color: 'white' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveForm;