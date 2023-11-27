import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Button,
    Typography,
    Box
} from '@mui/material';

export const MuiCard = () => {
    return (
        <Box width="300px">
            <Card>
                <CardMedia 
                    component='img'
                    height='140px'
                    image='https://source.unsplash.com/random'
                    alt='unsplash image'
                />
                <CardContent>
                    <Typography gutter-bottom variant="h5" component="div">React</Typography>
                    <Typography variant="body2" color='text.secondary'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>Share</Button>
                    <Button>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    );
}