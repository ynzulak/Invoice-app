import { useContext } from "react"
import { DataContext } from "../DataProvider"

const GeneratePDF = () => {
    const {isVisible, setIsVisible, businessName,
    businessType,
    ceoName,
    businessAddress,
    businessPhone,
    nin,
    selectedDate,
    invoiceNumber,
    invoicePrice,
    invoiceClient,
    invoiceWorkplace,
    priceInWords,
    serviceList,
    bankAccount,
    bic, error, setError} = useContext(DataContext)

    const ifBlankSpaces = () => {
        if (!businessName || !businessType || !ceoName || !businessAddress ||
            !businessPhone || !nin || !selectedDate || !invoiceNumber || !invoicePrice ||
            !invoiceClient || !invoiceWorkplace || !priceInWords || serviceList.length === 0 ||
            !bankAccount || !bic) {
          setError('Please fill in all the required fields.');
          return false;
        }
        setError('');
        return true;
      };


    const generatePDF = () => {

  if (ifBlankSpaces()) {
      setIsVisible(true);
    }
    }

    return (
    <>
       <div className='button'>
		    {!isVisible && (
            <button className='download-button' onClick={generatePDF}>
				<p>Generate PDF</p>
	        </button>)}
        </div>
    </>
    )
}

export default GeneratePDF