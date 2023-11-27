import {
    Box, // use instead of the div tag, can specify unique css properties on it
    TextField,
    MenuItem
} from '@mui/material';
import { useState } from 'react';

export const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    const [country, setCountry] = useState<string>('');

    const handleSingleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string);
    }

    const handleMultipleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split('') : value);
    }

    return(
        <>
            <Box width='250px' marginTop='50px' marginLeft='50px'>
                <TextField 
                    label='select country'
                    select
                    value={country}
                    onChange={handleSingleChange}
                    fullWidth // always use
                    size='medium'
                    color='primary'
                    helperText='can select only one item'
                    // error
                >
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>United States</MenuItem>
                    <MenuItem value='AU'>Australia</MenuItem>
                </TextField>
            </Box>

            <Box width='250px' marginTop='50px' marginLeft='50px'>
                <TextField 
                    label='select country'
                    select
                    value={countries}
                    onChange={handleMultipleChange}
                    fullWidth // always use
                    SelectProps={{
                        multiple: true
                    }}
                    size='medium'
                    color='primary'
                    helperText='can select multiple items'
                    // error
                >
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>United States</MenuItem>
                    <MenuItem value='AU'>Australia</MenuItem>
                </TextField>
            </Box>
        </>
    );
}