import "../src/app/styles/invoice-file.scss"

const InvoiceFile = () => {
  return (
    <div className="invoice-file">
      <div className="a4">
        <div className="business-info">
          <p className="business-name">„ BUSINESS ”</p>
          <p>Construction services</p>
          <p>Mr John SMITH</p>
          <p>00-013 Warszawa, ul. Jasna 8/10</p>
          <p>Tel : 123456789</p>
          <p className="siret">Siret : NIP PL 1234567890 – REGON 12345678</p>
        </div>
        <div className="invoice-number">
          <p>INVOICE N°1</p>
        </div>
        <div className="invoice-info">
          <div className="date row">
            <div className="category"><p>Date:</p></div>
            <div className="category-info"><p>01/01/2024</p></div>
          </div>
          <div className="number row">
            <div className="category"><p>Invoice n°:</p></div>
            <div className="category-info"><p>NR 1/SYS/2024</p></div>
          </div>
          <div className="client-address row">
            <div className="category"><p>Client address:</p></div>
            <div className="category-info">
              <p>MR JOHN DOE</p>
              <p>NW1 6XE</p>
              <p>221b, Baker Street</p>
              <p>London</p>
            </div>
          </div>
          <div className="workplace row">
            <div className="category"><p>Workplace :</p></div>
            <div className="category-info">
              <p>MR JOHN DOE</p>
              <p>NW1 6XE</p>
              <p>221b, Baker Street</p>
              <p>London</p></div>
          </div>
          <div className="service row">
            <div className="category"><p>Service</p></div>
            <div className="category-info">
              <p>1. Dismantling of old windows and doors.</p>
              <p>2. Installation of new windows and doors with treatment in a residential building.</p>
              <p>2. Installation of new windows and doors with treatment in a residential building.</p>
              <p>2. Installation of new windows and doors with treatment in a residential building.</p>
            </div>
          </div>
          <div className="price">
            <div className="price-row">
              <div className="price-number"><p>1000€</p></div>
              <div className="price-in-words"><p>(one thousand euros)</p></div>
            </div>
          </div>
          <div className="bank-number">
            <div className="thanks">
              <p>For your kind settlement,</p>
              <p>THANKS</p>
              <p>Please for the transfer to the Poland account:</p>
              <p>JAN KOWALSKI – beneficiary</p>
            </div>
            <div className="bank-account">
              <p>PL 12 345678901234567890123</p>
            </div>
            <div className="bic">
              <p>Bic bank:</p>
              <p>PLBANK</p>
            </div>
            <div className="name">
              <p>Mr Jan KOWALSKI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceFile
