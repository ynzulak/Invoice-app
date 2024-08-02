import { useContext } from "react"
import { DataContext } from "../DataProvider"

const Number = () => {
    const {invoiceNumber, setInvoiceNumber} = useContext(DataContext)

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