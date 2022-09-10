import { Theme } from "@mui/material";

const useStyles = () => ({
    closeButton: {
        display: 'flex',
        justifyContent: 'flex-start',
        paddingLeft: (theme: Theme) => theme.spacing(3),
        paddingTop: (theme: Theme) => theme.spacing(3),
    },
    root: {
        backgroundColor: "#0C8FF2",
    },
});

export default useStyles;