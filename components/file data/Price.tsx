import { useContext } from "react"
import { DataContext } from "../DataProvider"




const Price = () => {
      const {invoicePrice, setInvoicePrice, priceInWords, setPriceInWords} = useContext(DataContext)
    const handlePriceChage = (e: any) => {
        const price = e.target.value
        setInvoicePrice(price)
        if (!isNaN(price) && price !== '') {
            setPriceInWords((price));
          } else {
            setPriceInWords('');
          }
          console.log(priceInWords);
    }
    

    return (
    <>
        <label htmlFor="price-of-invoice"><p>Price:</p></label>
        <input type="number" id="price-of-invoice" min="1" max="999" placeholder="€" value={invoicePrice} onChange={handlePriceChage}></input>
    </>
    )
}

export default Price