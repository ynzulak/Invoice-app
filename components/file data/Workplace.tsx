import { useState } from "react"

const Workplace = () => {
    const [invoiceWorkplace, setInvoiceWorkplace] = useState('')

    const handleWorkplaceChage = (e: any) => {
        setInvoiceWorkplace(e.target.value)
    }

    return (
    <>
        <label htmlFor="workplace-of-invoice"><p>Workplace address:</p></label>
        <input type="text" id="workplace-of-invoice"placeholder="Type address" value={invoiceWorkplace} onChange={handleWorkplaceChage}></input>
    </>
    )
}

export default Workplace

