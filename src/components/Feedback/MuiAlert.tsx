import { Alert, Stack, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  return (
    <>
      <Stack spacing={2}>
        <Alert severity="error">Error</Alert>
        <Alert severity="warning">Warning</Alert>
        <Alert severity="info">Info</Alert>
        <Alert severity="success">Success</Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert
          variant="outlined"
          severity="error"
          onClose={() => alert("close alert")}
        >
          <AlertTitle>Error</AlertTitle>
          An error has occurred
        </Alert>
        <Alert variant="outlined" severity="warning">
          Warning
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          Your password needs to be at least 12 characters long
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          Success
        </Alert>
      </Stack>
    </>
  );
};
