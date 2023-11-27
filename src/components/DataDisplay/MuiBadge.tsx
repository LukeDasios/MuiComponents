import {
    Stack,
    Badge
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export const MuiBadge = () => {
    return (
        <Stack spacing={2} direction='row'>
            <Badge
                badgeContent={5}
                color='primary'
            >
                <MailIcon />
            </Badge>
            <Badge
                badgeContent={100} // default max value is show, but can be changed with the max prop
                color='primary'
            >
                <MailIcon />
            </Badge>
            <Badge
                badgeContent={999} // default max value is show, but can be changed with the max prop
                color='primary'
                max={1000}
            >
                <MailIcon />
            </Badge>
            <Badge
                badgeContent={5}
                color='secondary'
            >
                <MailIcon />
            </Badge>
            <Badge
                badgeContent={0}
                color='secondary'
            >
                <MailIcon />
            </Badge>
            <Badge
                badgeContent={0}
                color='secondary'
                showZero
            >
                <MailIcon />
            </Badge>
            <Badge
                variant='dot'
                color='primary'
            >
                <MailIcon />
            </Badge>
            <Badge
                variant='dot'
                color='primary'
                invisible
            >
                <MailIcon />
            </Badge>
        </Stack>
    );
}