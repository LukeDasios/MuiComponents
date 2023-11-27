import {
    Box,
    Rating
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react'; 

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(3);

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box>
                <Rating 
                    value={value} 
                    onChange={handleChange}
                    icon={<FavoriteIcon font-size='inherit'/>}
                    emptyIcon={<FavoriteBorderIcon font-size='inherit'/>}
                    readOnly
                />
            </Box>

            <Box>
                <Rating 
                    value={value} 
                    onChange={handleChange}
                    icon={<FavoriteIcon font-size='inherit'/>}
                    emptyIcon={<FavoriteBorderIcon font-size='inherit'/>}
                    highlightSelectedOnly
                />
            </Box>

            <Box>
                <Rating value={value} onChange={handleChange} precision={0.5} size='large'/>
            </Box>
        </Box>
    );
}