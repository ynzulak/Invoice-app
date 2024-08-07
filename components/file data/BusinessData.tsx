import { useContext } from "react"
import { DataContext } from "../DataProvider"

const Workplace = () => {
    const {businessName, setBusinessName, businessType, setBusinessType, ceoName, setCeoName, businessAddress, setBusinessAddress, businessPhone, setBusinessPhone, nin, setNin} = useContext(DataContext)

    const handleBusinessName = (e: any) => {
        setBusinessName(e.target.value)
    }
    const handleBusinessType = (e: any) => {
        setBusinessType(e.target.value)
    }
    const handleCeoName = (e: any) => {
        setCeoName(e.target.value)
    }
    const handleBusinessAddress = (e: any) => {
        setBusinessAddress(e.target.value)
    }
    const handleBusinessPhone = (e: any) => {
        setBusinessPhone(e.target.value)
    }
    const handleNin = (e: any) => {
        setNin(e.target.value)
    }

    return (
    <>
        <div className="data">
            <label htmlFor="business-data"><p>Business name:</p></label>
            <input type="text" id="business-data"placeholder="Type business" value={businessName} onChange={handleBusinessName}></input>
        </div>
        <div className="data">
            <label htmlFor="business-data"><p>Business type:</p></label>
            <input type="text" id="business-data"placeholder="Type business" value={businessType} onChange={handleBusinessType}></input>
        </div>
        <div className="data">
            <label htmlFor="business-data"><p>Ceo name:</p></label>
            <input type="text" id="business-data"placeholder="Type ceo name" value={ceoName} onChange={handleCeoName}></input>
        </div>
        <div className="data">
            <label htmlFor="business-data"><p>Business address:</p></label>
            <input type="text" id="business-data"placeholder="Address, post code, town etc." value={businessAddress} onChange={handleBusinessAddress}></input>
        </div>
        <div className="data">
            <label htmlFor="business-data"><p>Busines phone number:</p></label>
            <input type="text" id="business-data"placeholder="Type phone number" value={businessPhone} onChange={handleBusinessPhone}></input>
        </div>
        <div className="data">
            <label htmlFor="business-data"><p>Nin:</p></label>
            <input type="text" id="business-data"placeholder="Type Nin" value={nin} onChange={handleNin}></input>
        </div>
    </>
    )
}

export default Workplace

