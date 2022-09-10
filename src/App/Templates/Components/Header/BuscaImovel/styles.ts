import { Theme } from "@mui/material";

const useStyles = () => ({
    root: {
        paddingTop: (theme: Theme) => theme.spacing(2),
    }
});

export default useStyles;