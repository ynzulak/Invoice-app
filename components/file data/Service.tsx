import { useContext } from "react"
import { DataContext } from "../DataProvider"

const Service = () => {
    const {invoiceService, setInvoiceService, serviceList, setServiceList} = useContext(DataContext)

    const handleServiceChage = (e: any) => {
        setInvoiceService(e.target.value)
    }

    const handleAddService = () => {
        if (invoiceService.trim() !== '') {
            setServiceList([...serviceList, invoiceService])
            setInvoiceService('')
        }
    }

    const handleKeyEnter = (e: any) => {
        if(e.key === 'Enter') {
            handleAddService()
        }
    }

    return (
    <>
        <label htmlFor="service-of-invoice"><p>Description of Service:</p></label>
        <input type="text" id="service-of-invoice"placeholder="Type description" value={invoiceService} onChange={handleServiceChage} onKeyDown={handleKeyEnter}></input>
        <button onClick={handleAddService}>Add Service</button>
    </>
    )
}

export default Service

