import React, { createContext, useState } from 'react';


export const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoicePrice, setInvoicePrice] = useState('');
  const [invoiceClient, setInvoiceClient] = useState('');
  const [invoiceWorkplace, setInvoiceWorkplace] = useState('');
  const [priceInWords, setPriceInWords] = useState('');


  const value = {
    selectedDate, setSelectedDate, invoiceNumber, setInvoiceNumber, invoicePrice, setInvoicePrice, invoiceClient, setInvoiceClient, invoiceWorkplace, setInvoiceWorkplace, priceInWords, setPriceInWords
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

