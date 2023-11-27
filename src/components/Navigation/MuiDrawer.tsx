import {
    Drawer,
    Box,
    Typography,
    IconButton,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

// is hidden by default, need a variable to track the open and closed state
export const MuiDrawer = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <IconButton 
                size='large' 
                edge='start' 
                color='inherit' 
                aria-label='logo' 
                onClick={handleOpen}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={isOpen}
                onClose={handleClose}
            >   
                <Box 
                    p={2} 
                    width='250px' 
                    textAlign='center'
                    role='presentation'
                >
                    <Typography
                        variant='h6'
                        component='div'
                    >
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
}