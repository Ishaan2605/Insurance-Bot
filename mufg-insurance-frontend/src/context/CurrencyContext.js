import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CURRENCY_CONFIG = {
  IN: {
    symbol: '₹',
    code: 'INR',
    name: 'Indian Rupee'
  },
  AU: {
    symbol: '$',
    code: 'AUD',
    name: 'Australian Dollar'
  }
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(CURRENCY_CONFIG.IN);

  const updateCurrency = (countryCode) => {
    setCurrency(CURRENCY_CONFIG[countryCode]);
  };

  return (
    <CurrencyContext.Provider value={{ currency, updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
