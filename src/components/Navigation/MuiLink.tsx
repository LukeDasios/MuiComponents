import {
    Link,
    Stack,
    Typography
} from '@mui/material';

export const MuiLink = () => {
    return(
        <Stack 
            spacing={2}
            direction='row'
            m={4}
        >   
            <Link href='#'>Link</Link>
            <Link href='#' color='secondary'>Secondary</Link>
            <Link href='#' underline='hover'>Hover on me</Link>
            <Link href='#' underline='none'>Never gets underlined</Link>


            <Typography variant='h2'>
                <Link href='#'>Link</Link> 
            </Typography>
        </Stack>
    );
}