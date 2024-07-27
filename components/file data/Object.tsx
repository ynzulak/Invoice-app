import { useState } from "react"

const Service = () => {
    const [invoiceService, setInvoiceService] = useState('')

    const handleServiceChage = (e: any) => {
        setInvoiceService(e.target.value)
    }

    return (
    <>
        <label htmlFor="service-of-invoice"><p>Description of Service:</p></label>
        <input type="text" id="service-of-invoice"placeholder="Type description" value={invoiceService} onChange={handleServiceChage}></input>
    </>
    )
}

export default Service

