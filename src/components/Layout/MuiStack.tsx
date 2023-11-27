import {
    Stack,
    Divider
} from '@mui/material';
import { MuiBox } from './MuiBox';

export const MuiStack = () => {
    return (
        <>
            <Stack sx={{ border: '2px solid red', display: 'flex', flexDirection: 'column' }} spacing={2}> 
                <MuiBox />
            </Stack>
            <Stack 
                sx={{ 
                    border: '2px solid red',
                }} 
                direction='row'
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />} /* Not rendering? */
            > 
                <MuiBox />
            </Stack>
        </>
    )
}