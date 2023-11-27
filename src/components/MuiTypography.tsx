import { Typography } from '@mui/material'

export const MuiTypography = () => {
    return (
        <div>
            { /* headers */ }
            <Typography variant='h1'>h1</Typography>
            <Typography variant='h2'>h2</Typography>
            <Typography variant='h3'>h3</Typography>
            { /* able to determine what component gets rendered, regardless of how its styled */ }
            <Typography variant='h4' component='h1'>h4</Typography>
             { /* gutterBottom -> adds a margin-bottom to the component */ }
            <Typography variant='h5' gutterBottom>h5</Typography>
            <Typography variant='h6'>h6</Typography>

            { /* variants of h6 */ }
            <Typography variant='subtitle1'>subtitle1</Typography>
            <Typography variant='subtitle2'>subtitle2</Typography>

            { /* bodies -- its worth noting that the variant property on a Typography component equals body1 by default */ }
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reiciendis! Tempore, accusantium saepe quia, earum libero unde ipsa illo possimus, beatae aut delectus voluptates adipisci! Inventore ullam delectus ex dolorem?</Typography>
            <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto deleniti dolore iure ipsum dolor unde corrupti ea tempora asperiores, eaque dicta voluptatem eligendi necessitatibus quasi possimus est sit fugiat incidunt.</Typography>
        </div>
    );
}