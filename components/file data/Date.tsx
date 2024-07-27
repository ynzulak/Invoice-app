import { useState } from "react";

const Date = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (e: any) => {
      setSelectedDate(e.target.value);
    };
    return (
    <>
        <label htmlFor="date-of-invoice"><p>Date:</p></label>
        <input type="date" id="date-of-invoice" value={selectedDate} onChange={handleDateChange}></input>
    </>
    )
}

export default Date