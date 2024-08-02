import { useContext } from "react";
import { DataContext } from "../DataProvider";

const Date = () => {
  const {selectedDate, setSelectedDate} = useContext(DataContext);

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