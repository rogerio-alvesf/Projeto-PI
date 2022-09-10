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
        height: "auto",
    },
    menu: {
        width: (theme: Theme) => theme.spacing(40),
    },
    imgBottonClose: {
        color: "#fff",
    },
    opcoesMenu: {
        color: "#fff",
    },
    iconeContaContainer: {
        display: "flex",
        justifyContent: "center",
        height: (theme: Theme) => theme.spacing(15),
        padding: (theme: Theme) => theme.spacing(5),
    },
    iconeConta: {
        height: "75%",
        width: "40%",
    },
});

export default useStyles;