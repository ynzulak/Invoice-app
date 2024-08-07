import { useContext } from "react"
import { DataContext } from "../DataProvider"

const Workplace = () => {
    const {bankAccount, setBankAccount, bic, setBic} = useContext(DataContext)

    const handleBankAccountNumber = (e: any) => {
        setBankAccount(e.target.value)
    }
    const handleBic = (e: any) => {
        setBic(e.target.value)
    }
   

    return (
    <>
        <div className="data">
            <label htmlFor="business-data"><p>Bank number:</p></label>
            <input type="text" id="business-data"placeholder="Type account number" value={bankAccount} onChange={handleBankAccountNumber}></input>
        </div>
        <div className="data">
            <label htmlFor="business-data"><p>Bic:</p></label>
            <input type="text" id="business-data"placeholder="Type bic" value={bic} onChange={handleBic}></input>
        </div>
    </>
    )
}

export default Workplace

