import React, {useState} from "react";
import CalenderHeader from '../CalenderHeader';
import CalenderTable from '../CalenderTable';
import './style.css'

function Calender() {
  const [date, setDate] = useState(new Date());

  const handleprevmonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(newDate);
  };
  const handleNextMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(newDate);
  };

  return (
     <div className = "calendar" >
    <
    CalenderHeader date = {
      date
    }
    onPrevMonth = {
      handleprevmonth
    }
    onNextMonth = {
      handleNextMonth
    }
    /> <
    CalenderTable date = {
      date
    }
    /> 
    </div>
  );
}

export default Calender;