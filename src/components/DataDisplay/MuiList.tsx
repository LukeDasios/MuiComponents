import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemAvatar,
    ListItemButton,
    Divider,
    Avatar
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export const MuiList = () => {
    return (
        <Box sx={{ width: 400, bgcolor: '#EFEFEF'}}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary='List Item 1'/>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary='List Item 1'/>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <MailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='List Item 2'/>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary='List Item 3' secondary='secondary text' />
                </ListItem>
            </List>
        </Box>
    );
}