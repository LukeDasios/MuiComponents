import { 
    Stack, 
    Button, 
    ButtonGroup, 
    IconButton, 
    ToggleButtonGroup, 
    ToggleButton 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { useState } from 'react';

export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null[]>([]);

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null[]) => {
        setFormats(updatedFormats);
    }

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                { /* Button Variants */ }
                <Button variant='text' href='https://google.com'>Text</Button>
                <Button variant='outlined'>Outlined</Button>
                <Button variant='contained'>Contained</Button>
            </Stack>

            { /* Text Variant */ }
            <Stack spacing={2} direction='row'>
                { /* Color Variants */ }
                { /* There is a way to change the default color palette */ }
                <Button variant='text' color='primary'>Primary</Button>
                <Button variant='text' color='secondary'>Secondary</Button>
                <Button variant='text' color='error'>Error</Button>
                <Button variant='text' color='warning'>Warning</Button>
                <Button variant='text' color='info'>Info</Button>
                <Button variant='text' color='success'>Success</Button>
            </Stack>

            { /* Outlined Variant */ }
            <Stack spacing={2} direction='row'>
                { /* Color Variants */ }
                { /* There is a way to change the default color palette */ }
                <Button variant='outlined' color='primary'>Primary</Button>
                <Button variant='outlined' color='secondary'>Secondary</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' color='warning'>Warning</Button>
                <Button variant='outlined' color='info'>Info</Button>
                <Button variant='outlined' color='success'>Success</Button>
            </Stack>

            { /* Contained Variant */ }
            <Stack spacing={2} direction='row'>
                { /* Color Variants */ }
                { /* There is a way to change the default color palette */ }
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>


            { /* Contained Variant */ }
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>

            { /* Contained Variant, disabling elevation -> removes shadow */ }
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' disableElevation>No Elevation</Button>
            </Stack>

            { /* Contained Variant, disabling ripple effect -> normally happens when you click a button, but can be disabled */ }
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' disableRipple>No Ripple</Button>
            </Stack>

            { /* With Icons */ }
            <Stack spacing={2} direction='row'>
                { /* Icon comes before the text */ }
                <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
                { /* Icon comes after the text */ }
                <Button variant='contained' endIcon={<SendIcon />}>Send</Button>
            </Stack>


            { /* Just an Icon Button */ }
            <Stack spacing={2} direction='row'>
                <IconButton aria-label='send' color='success' size='small'>
                    <SendIcon />
                </IconButton>
            </Stack>

            { /* Handling the clicked event */ }
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' onClick={() => alert('clicked!')}>Click Event Handling</Button>
            </Stack>



            { /* Button Group */ }
            <Stack display='block' spacing={2} direction='row'>
                <ButtonGroup 
                    variant='contained' 
                    orientation='vertical' 
                    size='small' 
                    color='secondary'
                    aria-label='button group'
                >
                    <Button onClick={() => alert('Left')}>Left</Button>
                    <Button onClick={() => alert('Center')}>Center</Button>
                    <Button onClick={() => alert('Right')}>Right</Button>
                </ButtonGroup>
            </Stack>

            { /* Without Button Group */ }
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained'>Left</Button>
                <Button variant='contained'>Center</Button>
                <Button variant='contained'>Right</Button>
            </Stack>


            { /* Toggle ButtonGroup */ }
            <Stack direction='row'>
                <ToggleButtonGroup 
                    aria-label='text formatting' 
                    value={formats} 
                    onChange={handleFormatChange}
                    size='small'
                    color='success'
                    orientation='vertical'
                    exclusive
                >
                    <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
}