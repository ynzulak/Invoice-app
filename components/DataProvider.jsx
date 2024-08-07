import React, { createContext, useState } from 'react';


export const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [ceoName, setCeoName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [nin, setNin] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoicePrice, setInvoicePrice] = useState('');
  const [invoiceClient, setInvoiceClient] = useState('');
  const [invoiceWorkplace, setInvoiceWorkplace] = useState('');
  const [priceInWords, setPriceInWords] = useState('');
  const [invoiceService, setInvoiceService] = useState('')
  const [serviceList, setServiceList] = useState([])
  const [bankAccount, setBankAccount] = useState('')
  const [bic, setBic ] = useState('')
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);


  const value = {
    selectedDate, setSelectedDate, invoiceNumber, setInvoiceNumber, invoicePrice, setInvoicePrice, invoiceClient, setInvoiceClient, invoiceWorkplace, setInvoiceWorkplace, priceInWords, setPriceInWords, invoiceService, setInvoiceService, serviceList, setServiceList, businessName, setBusinessName, businessType, setBusinessType, ceoName, setCeoName, businessAddress, setBusinessAddress, businessPhone, setBusinessPhone, nin, setNin, bankAccount, setBankAccount, bic, setBic, isVisible, setIsVisible, error, setError
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

