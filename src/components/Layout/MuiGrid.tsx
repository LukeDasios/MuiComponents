import {
    Grid,
    Box
} from '@mui/material';

export const MuiGrid = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={3} sm={6}> { /* xs refers to the 12-column grid layout */ }
                    <Box bgcolor="red" padding={2}>Item 1</Box>
                </Grid>
                <Grid item xs={9} sm={6}>
                    <Box bgcolor="red" padding={2}>Item 2</Box>
                </Grid>
                <Grid item xs={9} sm={6}>
                    <Box bgcolor="red" padding={2}>Item 3</Box>
                </Grid>
                <Grid item xs={3} sm={6}>
                    <Box bgcolor="red" padding={2}>Item 4</Box>
                </Grid>
            </Grid>
            <Grid container my={2} spacing={2}>
                <Grid item xs> { /* xs is variable */ }
                    <Box bgcolor="red" padding={2}>Item 1</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor="red" padding={2}>Item 2</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor="red" padding={2}>Item 3</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor="red" padding={2}>Item 4</Box>
                </Grid>
            </Grid>
        </>
    );
}