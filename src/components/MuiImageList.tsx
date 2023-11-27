import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Box,
    Stack
} from '@mui/material';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'random image'
    },
    {
        img: 'https://images.unsplash.com/photo-1700740760502-f28b1769c8d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'random image'
    },
    {
        img: 'https://images.unsplash.com/photo-1682687220208-22d7a2543e88?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'random image'
    },
    {
        img: 'https://images.unsplash.com/photo-1700744228339-03c725f5ee57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'random image'
    },
    {
        img: 'https://images.unsplash.com/photo-1700884946166-52d042940b04?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'random image'
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1700124504129-02393b281f06?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'random image'
    },
    {
        img: 'https://images.unsplash.com/photo-1682695796795-cc287af78a2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'random image'
    },
    {
        img: 'https://images.unsplash.com/photo-1700518274836-2fd552c5f564?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'random image'
    },
    {
        img: 'https://images.unsplash.com/photo-1700047329772-3ebe7de69b67?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'random image'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'random image'
    },
]

export const MuiImageList = () => {
    return (
        <Stack spacing={4}>
            <ImageList 
                sx={{ width: 500, height: 450 }} 
                cols={3} 
                rowHeight={164}
            >
                {itemData.map(item => (
                    <ImageListItem key={item.title}>
                        <img src={`${item.img}?w=164?h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                    </ImageListItem>
                ))}
            </ImageList>
            <ImageList 
                sx={{ width: 500, height: 450 }} 
                cols={3} 
                rowHeight={164}
                variant='woven'
                gap={8}
            >
                {itemData.map(item => (
                    <ImageListItem key={item.title}>
                        <img src={`${item.img}?w=164?h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                    </ImageListItem>
                ))}
            </ImageList>
            <ImageList 
                sx={{ width: 500, height: 450 }} 
                cols={3} 
                rowHeight={164}
                variant='woven'
                gap={8}
            >
                {itemData.map(item => (
                    <ImageListItem key={item.title}>
                        <img src={`${item.img}?w=164?h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                        <ImageListItemBar title={item.title}/>
                    </ImageListItem>
                ))}
            </ImageList>
            <Box
                sx={{ width: 500, height: 450, overflowY: 'scroll' }} 
            >
                <ImageList 
                cols={3} 
                gap={8}
                variant='masonry'
            >
                {itemData.map(item => (
                    <ImageListItem key={item.title}>
                        <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                    </ImageListItem>
                ))}
            </ImageList>
            </Box>
        </Stack>
    );
}