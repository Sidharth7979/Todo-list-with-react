import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDateRange } from './dateRangeSlice'; // Ensure this path is correct
import { Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers/DateRangeCalendar';

export default function DateRangeComponent() {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.dateRange);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDateRange) => {
    // Ensure newDateRange is in the format [startDate, endDate]
    dispatch(setDateRange({
      startDate: newDateRange[0] || null,
      endDate: newDateRange[1] || null,
    }));
  };

  const toggleCalendar = () => {
    setShowCalendar(prevShowCalendar => !prevShowCalendar);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Button variant="contained" onClick={toggleCalendar}>
          {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
        </Button>

        {showCalendar && (
          <div style={{ position: 'absolute', top: '100px', left: '50px' }}>
            <DateRangeCalendar
              value={[startDate, endDate]}
              onChange={handleDateChange}
              calendars={1} // Adjust to 2 if needed
            />
          </div>
        )}

        <p>Start Date: {startDate ? startDate.format('YYYY-MM-DD') : 'Not selected'}</p>
        <p>End Date: {endDate ? endDate.format('YYYY-MM-DD') : 'Not selected'}</p>
      </div>
    </LocalizationProvider>
  );
}
