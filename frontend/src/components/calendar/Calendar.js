import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './DatePicker.css'; // Create this CSS file for styling
import './CalendarStyles.css'

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="date-picker-container">
      <h2>Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Pick Date"
        showPopperArrow={false}
        popperPlacement="top-end"
        customInput={<CustomDatePickerInput />}
      />
    </div>
  );
};

const CustomDatePickerInput = ({ value, onClick }) => (
  <div className="custom-datepicker-input" onClick={onClick}>
    <span>{value || 'Pick Date'}</span>
    <img src="https://i.fbcd.co/products/resized/resized-750-500/fc3968fc479135343c50cdf757ee71fba560b55b90132ac4408f800047aa5e6c.jpg" alt="calendar-icon" />
  </div>
);

export default MyDatePicker;
