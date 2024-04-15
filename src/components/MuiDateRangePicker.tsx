import { Box } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
export const MuiDateRangePicker = () => {
    const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);
    console.log({ value });
    return (
        <Box width="500px">
            <DateRangePicker
                localeText={{ start: 'Check-in', end: 'Check-out' }}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    );
};
