import { Theme } from "@mui/material";


const useStyles = () => ({
    header: {
        boxShadow: "0px 4px 3px 0px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#fff",
        padding: (theme: Theme) => theme.spacing(0,2,0,2),
    },
    imgLogo: {
        height: (theme: Theme) => theme.spacing(5.5),
        paddingTop: (theme: Theme) => theme.spacing(1),
    },
    opcoes: {
        display: "flex",
        justifyContent: "flex-end",
        alignitems: "center",
        marginTop: (theme: Theme) => theme.spacing(2),
        marginBottom: (theme: Theme) => theme.spacing(2),
    },
    botao: {
        textTransform: "none",
        color: "#000",
        fontWeight: "bold",
        height: (theme: Theme) => theme.spacing(5.5),
    },
    iconeConta: {
        color: "#000",
        height: (theme: Theme) => theme.spacing(5.5),
    },
});

export default useStyles;