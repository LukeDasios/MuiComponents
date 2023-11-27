import {
    Box,
    Breadcrumbs,
    Link,
    Typography
} from '@mui/material';
import { MuiNavbar } from './MuiNavbar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiBreadcrumbs = () => {
    return (
        <>
            <MuiNavbar />
            <Box m={2}>
                <Breadcrumbs 
                    aria-label='breadcrumbs' 
                    separator={<NavigateNextIcon fontSize="small"/>}
                    maxItems={2}
                >
                    <Link underline='hover' href='#'>Home</Link>
                    <Link underline='hover' href='#'>Catalog</Link>
                    <Link underline='hover' href='#'>Accessories</Link>
                    <Typography color='text.primary'>Shoes</Typography>
                </Breadcrumbs>
            </Box>
        </>
    );
}