import {
    Paper
} from '@mui/material';
import { MuiStack } from './MuiStack';

export const MuiPaper = () => {
    return (
        <Paper sx={{ padding: '32px', bgcolor: 'purple' }} elevation={10}>
            <MuiStack />
        </Paper>
    );
}