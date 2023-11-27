import { 
    TextField,
    Stack, // in jsx, use Stack instead of the div tag
    InputAdornment
} from '@mui/material';
import { useState } from 'react';

// build forms in react: https://formik.org/ 

export const MuiTextField = () => {
    const [value, setValue] = useState('');

    return (
        <Stack spacing={4}>

            { /* different variants, outlined is the default variant */ }
            <Stack direction="row" spacing={2}>
                <TextField label="name" variant="outlined" />
                <TextField label="name" variant="filled" />
                <TextField label="name" variant="standard" />
            </Stack>

            { /* can change size and color */ }
            <Stack direction="row" spacing={2}>
                <TextField label="small secondary" size="small" color="secondary" />
                <TextField label="medium primary" size="medium" color="primary" />
                <TextField label="medium info" size="medium" color="info"/>
            </Stack>

            { /* form input */ }
            <Stack direction="row" spacing={2}>
                <TextField label="form input" required />
            </Stack>

            { /* helper text */ }
            <Stack direction="row" spacing={2}>
                <TextField label="form input" helperText='keep your password secret' />
            </Stack>

            { /* type of input */ }
            <Stack direction="row" spacing={2}>
                <TextField label="password" type="password" />
            </Stack>

             { /* disabled */ }
            <Stack direction="row" spacing={2}>
                <TextField label="password" type="password" disabled />
            </Stack>

            { /* disabled */ }
            <Stack direction="row" spacing={2}>
                <TextField label="password" InputProps={{ readOnly: true }} />
            </Stack>

            { /* error (use when input is invalid on a form submission) */ }
            <Stack direction="row" spacing={2}>
                <TextField label="password" error />
            </Stack>

            { /* Input Adornment */ }
            <Stack direction="row" spacing={2}>
                <TextField 
                    label="Amount" 
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                    }} 
                />
                <TextField 
                    label="Weight" 
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                    }}
                />
            </Stack>

            { /* connected with state */ }
            <Stack direction="row" spacing={2}>
                <TextField 
                    label="stateful" 
                    value={value} 
                    onChange={e => setValue(e.target.value)} 
                    error={!value}
                    helperText={!value ? 'required' : 'do not show your password with anyone'}
                />
            </Stack>
        </Stack>
    );
}