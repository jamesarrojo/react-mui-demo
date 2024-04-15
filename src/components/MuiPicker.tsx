import { Stack } from '@mui/material';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import dayjs from 'dayjs';

export const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
    const [selectedTime, setSelectedTime] = useState<dayjs.Dayjs | null>(null);
    const [selectedDateTime, setSelectedDateTime] =
        useState<dayjs.Dayjs | null>(null);
    console.log({
        selectedTime: selectedTime && selectedTime.format('hh:mm:ss A'),
    });
    return (
        <Stack spacing={4} sx={{ width: '250px' }}>
            <DatePicker
                label="Date Picker"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
            />
            <TimePicker
                label="Time Picker"
                value={selectedTime}
                onChange={(newValue) => setSelectedTime(newValue)}
            />
            <DateTimePicker
                label="Date Time Picker"
                value={selectedDateTime}
                onChange={(newValue) => setSelectedDateTime(newValue)}
            />
        </Stack>
    );
};
