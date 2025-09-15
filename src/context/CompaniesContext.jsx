// context/CompaniesContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CompaniesContext = createContext();

export const useCompanies = () => {
  const context = useContext(CompaniesContext);
  if (!context) {
    throw new Error('useCompanies must be used within a CompaniesProvider');
  }
  return context;
};

export const CompaniesProvider = ({ children }) => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'TechCorp Inc.',
      industry: 'Technology',
      date: '2023-01-15',
      website: 'www.techcorp.com',
      description: 'Leading technology solutions provider',
      logo: null
    },
    {
      id: 2,
      name: 'GreenEnergy Solutions',
      industry: 'Energy',
      date: '2023-03-22',
      website: 'www.greenenergy.com',
      description: 'Sustainable energy for a better tomorrow',
      logo: null
    }
  ]);

  const addCompany = (newCompany) => {
    const companyWithId = {
      ...newCompany,
      id: companies.length + 1
    };
    setCompanies([...companies, companyWithId]);
  };

  const deleteCompany = (id) => {
    setCompanies(companies.filter(company => company.id !== id));
  };

  const value = {
    companies,
    addCompany,
    deleteCompany
  };

  return (
    <CompaniesContext.Provider value={value}>
      {children}
    </CompaniesContext.Provider>
  );
};