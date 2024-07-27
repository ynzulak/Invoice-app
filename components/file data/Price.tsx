import { useState } from "react"

const Price = () => {
    const [invoicePrice, setInvoicePrice] = useState('')

    const handlePriceChage = (e: any) => {
        setInvoicePrice(e.target.value)
    }

    return (
    <>
        <label htmlFor="price-of-invoice"><p>Price:</p></label>
        <input type="number" id="price-of-invoice" min="1" max="999" placeholder="€" value={invoicePrice} onChange={handlePriceChage}></input>
    </>
    )
}

export default Price