import { useContext } from "react";
import "../src/app/styles/invoice-file.scss"
import { DataContext } from "./DataProvider";


const InvoiceFile = () => {
const {businessName, businessType, ceoName, businessAddress, businessPhone, nin, selectedDate, invoiceNumber, invoicePrice, invoiceClient, invoiceWorkplace, priceInWords, serviceList, bankAccount, bic} = useContext(DataContext)

  return (
    <div className="invoice-file">
      <div className="a4">
        <div className="business-info">
          <p className="business-name">„ {businessName} ”</p>
          <p>{businessType}</p>
          <p>{ceoName}</p>
          <p>{businessAddress}</p>
          <p>Tel : {businessPhone}</p>
          <p className="siret">Nin : {nin}</p>
        </div>
        <div className="invoice-number">
          <p>INVOICE N°{invoiceNumber}</p>
        </div>
        <div className="invoice-info">
          <div className="date row">
            <div className="category"><p>Date:</p></div>
            <div className="category-info"><p>{selectedDate}</p></div>
          </div>
          <div className="number row">
            <div className="category"><p>Invoice n°:</p></div>
            <div className="category-info"><p>NR {invoiceNumber}/SYS/2024</p></div>
          </div>
          <div className="client-address row">
            <div className="category"><p>Client address:</p></div>
            <div className="category-info address-div">
              <p>{invoiceClient}</p>
            </div>
          </div>
          <div className="workplace row">
            <div className="category"><p>Workplace:</p></div>
            <div className="category-info address-div">
              <p>{invoiceWorkplace}</p>
            </div>
          </div>
          <div className="service row">
            <div className="category"><p>Service:</p></div>
            <div className="category-info service-list">
            <ol>
                {serviceList.map((service: string, index: number) => (
                    <li key={index}><p>{service}</p></li>
                ))}
            </ol>
            </div>
          </div>
          <div className="price">
            <div className="price-row">
              <div className="price-number"><p>{invoicePrice}€</p></div>
              <div className="price-in-words"><p>({priceInWords})</p></div>
            </div>
          </div>
          <div className="bank-number">
            <div className="thanks">
              <p>For your kind settlement,</p>
              <p>THANKS</p>
              <p>Please for the transfer to the Poland account:</p>
              <p>{ceoName} – beneficiary</p>
            </div>
            <div className="bank-account">
              <p>{bankAccount}</p>
            </div>
            <div className="bic">
              <p>Bic bank:</p>
              <p>{bic}</p>
            </div>
            <div className="name">
              <p>{ceoName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceFile
