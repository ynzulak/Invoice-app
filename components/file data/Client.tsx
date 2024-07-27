import { useState } from "react"

const Client = () => {
    const [invoiceClient, setInvoiceClient] = useState('')

    const handleClientChage = (e: any) => {
        setInvoiceClient(e.target.value)
    }

    return (
    <>
        <label htmlFor="client-of-invoice"><p>Client address:</p></label>
        <input type="text" id="client-of-invoice"placeholder="Type address" value={invoiceClient} onChange={handleClientChage}></input>
    </>
    )
}

export default Client

