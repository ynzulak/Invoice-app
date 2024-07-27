import { useState } from "react"

const Number = () => {
    const [invoiceNumber, setInvoiceNumber] = useState('')

    const handleNumberChage = (e: any) => {
        setInvoiceNumber(e.target.value)
    }

    return (
    <>
        <label htmlFor="number-of-invoice"><p>Number:</p></label>
        <input type="number" id="number-of-invoice" min="1" max="999" placeholder="1" value={invoiceNumber} onChange={handleNumberChage}></input>
    </>
    )
}

export default Number