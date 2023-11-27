import {
    Box,
    FormControlLabel,
    Switch,
    FormGroup
} from '@mui/material';
import { useState } from 'react';

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Box>
            <Box>
                <FormControlLabel 
                    label='Dark Mode' 
                    control={
                        <Switch 
                            value={checked}
                            onChange={handleChange}
                            size='small'
                            color='success'
                        />
                    }
                />
            </Box>

            <Box>
                <FormGroup row>
                    <FormControlLabel 
                        label='HTML'
                        control={<Switch value='html' checked={checked} onChange={handleChange}/>}
                    />
                    <FormControlLabel 
                        label='CSS'
                        control={<Switch value='css' checked={checked} onChange={handleChange}/>}
                    />
                    <FormControlLabel 
                        label='JavaScript'
                        control={<Switch value='javascript' checked={checked} onChange={handleChange}/>}
                    />
                </FormGroup>
            </Box>
        </Box>
    );
}