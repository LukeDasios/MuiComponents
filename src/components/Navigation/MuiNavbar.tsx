import {
    AppBar, 
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button
} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

// need to comment out the .App css listings to see this component properly
export const MuiNavbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='button'>
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography 
                    variant='h6' 
                    component='div'
                    sx={{ flexGrow: 1 }}
                >
                    POKEMON APP
                </Typography>
                <Stack
                    direction='row'
                    spacing={2}
                >
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}