import React, { useState, useEffect } from 'react';

const NcnsSandwich = () => {
  const [formData, setFormData] = useState({
    isNCNS: false,
    isSandwich: false,
    employeeObjID: '',
    year: '',
    month: '',
    date: ''
  });
  const [months, setMonths] = useState([]);
  const [dates, setDates] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Sample employee data - in a real app, this would come from an API
  const employees = [
    { id: "66ebeb5030112f29b4c0b811", name: "Admin Admin", code: "DEMO0001" },
    { id: "67c68f0ba06d030b25201abf", name: "Hr Manager", code: "DEMO0002" },
    // ... other employees
  ];

  const years = [2024, 2025];
  const allMonths = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    // ... other months
  ];

  useEffect(() => {
    // Validate form whenever formData changes
    const isValid = (
      (formData.isNCNS || formData.isSandwich) &&
      formData.employeeObjID !== '' &&
      formData.year !== '' &&
      formData.month !== '' &&
      formData.date !== ''
    );
    setIsFormValid(isValid);
  }, [formData]);

  useEffect(() => {
    // Reset months and dates when year changes
    setFormData(prev => ({ ...prev, month: '', date: '' }));
    setMonths(allMonths);
  }, [formData.year]);

  useEffect(() => {
    // Reset dates when month changes
    setFormData(prev => ({ ...prev, date: '' }));
    if (formData.year && formData.month) {
      // Generate dates based on selected month and year
      const daysInMonth = new Date(formData.year, formData.month, 0).getDate();
      const newDates = Array.from({ length: daysInMonth }, (_, i) => ({
        value: i + 1,
        name: i + 1
      }));
      setDates(newDates);
    }
  }, [formData.month]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    
    // Ensure only one checkbox can be selected
    if (name === 'isNCNS' && checked) {
      setFormData(prev => ({ ...prev, isNCNS: true, isSandwich: false }));
    } else if (name === 'isSandwich' && checked) {
      setFormData(prev => ({ ...prev, isSandwich: true, isNCNS: false }));
    } else {
      setFormData(prev => ({ ...prev, [name]: checked }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setErrorMessage('Please fill all required fields');
      return;
    }
    
    // Submit logic here (API call, etc.)
    console.log('Form submitted:', formData);
    setErrorMessage('');
    // Reset form or show success message
  };

  return (
    <div className="container-fluid">
      <div className="mb-3">
        <div className="my-auto mt-2">
          <div className="d-flex align-items-center gap-2">
            <h5 className="m-0 p-0 text-capitalize" style={{ fontWeight: 500, color: 'var(--PrimaryColorDark)' }}>
              NCNS and Sandwich Controller
            </h5>
          </div>
          <p className="m-0" style={{ color: 'var(--Subtittles)' }}>
            You can mark NCNS and Sandwich to the employee attendance.
          </p>
        </div>
      </div>

      <form 
        className="row row-gap-4 mx-auto rounded-2 p-4 px-1 shadow-sm text-black" 
        style={{ background: 'var(--primaryDashMenuColor)' }}
        onSubmit={handleSubmit}
      >
        <div className="col-12 d-flex align-items-center gap-3">
          <div>
            <label className="form-switch d-flex align-items-center my-auto">
              <input 
                type="checkbox" 
                className="form-check-input" 
                name="isNCNS" 
                style={{ height: '1.5rem', width: '2.8rem' }}
                checked={formData.isNCNS}
                onChange={handleCheckboxChange}
              />
              <span className="mx-3">NCNS</span>
            </label>
          </div>
          <div>
            <label className="form-switch d-flex align-items-center my-auto">
              <input 
                type="checkbox" 
                className="form-check-input" 
                name="isSandwich" 
                style={{ height: '1.5rem', width: '2.8rem' }}
                checked={formData.isSandwich}
                onChange={handleCheckboxChange}
              />
              <span className="mx-3">Sandwich</span>
            </label>
          </div>
          <p className="m-0 badge-warning">
            You can select only one: Either NCNS or Sandwich Leave.
          </p>
        </div>

        <div className="col-12">
          <select 
            className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder" 
            required 
            name="employeeObjID"
            value={formData.employeeObjID}
            onChange={handleInputChange}
          >
            <option value="">Select Employee</option>
            {employees.map(emp => (
              <option key={emp.id} value={emp.id}>
                {emp.name} ({emp.code})
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <select 
            name="year" 
            className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder" 
            required
            value={formData.year}
            onChange={handleInputChange}
          >
            <option value="">Select Year</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <select 
            name="month" 
            className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder" 
            required
            value={formData.month}
            onChange={handleInputChange}
            disabled={!formData.year}
          >
            <option value="">Select Month</option>
            {months.map(month => (
              <option key={month.value} value={month.value}>{month.name}</option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <select 
            name="date" 
            className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder" 
            required
            value={formData.date}
            onChange={handleInputChange}
            disabled={!formData.month}
          >
            <option value="">Select Date</option>
            {dates.map(date => (
              <option key={date.value} value={date.value}>{date.name}</option>
            ))}
          </select>
        </div>

        <button 
          className="btn btn-primary ml-3 mt-3" 
          type="submit" 
          disabled={!isFormValid}
          style={{ width: 'fit-content', position: 'relative' }}
        >
          {isFormValid ? 'Submit' : 'Select Required Fields'}
          {errorMessage && (
            <span className="text-danger" style={{ position: 'absolute', top: '-2rem', width: 'fit-content', whiteSpace: 'pre', marginLeft: '-0.8rem' }}>
              {errorMessage}
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default NcnsSandwich;