import {
    Stack,
    Chip,
    Avatar
} from '@mui/material';
import { useState } from 'react';
import FaceIcon from '@mui/icons-material/Face';

export const MuiChip = () => {
    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])

    const handleDelete = (chipToDelete: string) => {
        setChips(chips.filter(chip => chip !== chipToDelete))
    };

    return (
        <Stack direction='row' spacing={1}>
            <Chip label='chip' color='primary' size='small' />
            <Chip label='chip' color='primary' size='small' icon={<FaceIcon />} />
            <Chip label='chip' color='primary' size='small' avatar={<Avatar>LD</Avatar>} />
            <Chip variant='outlined' label='chip-outlined' color='secondary' />
            <Chip label='click' color='success' onClick={() => alert('clicked!')} />
            <Chip label='delete' color='error' onClick={() => alert('clicked!')} onDelete={() => alert('delete handler called')} />
            {
                chips.map(chip => 
                    <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>
                )
            }
        </Stack>
    );
}