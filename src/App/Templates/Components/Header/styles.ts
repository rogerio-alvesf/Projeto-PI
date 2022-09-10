import { Theme, useTheme } from "@mui/material";


const useStyles = () => ({
    header: {
        boxShadow: "0px 4px 3px 0px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#fff",
        padding: (theme: Theme) => theme.spacing(0,2,0,2),
    },
    imgLogo: {
        height: "90%",
        paddingTop: (theme: Theme) => theme.spacing(1),
    },
    opcoes: {
        display: "flex",
        justifyContent: "flex-end",
        alignitems: "center",
        paddingTop: (theme: Theme) => theme.spacing(1),
    },
    botao: {
        textTransform: "none",
        color: "#000",
        fontWeight: "bold",
    },
    iconeConta: {
        color: "#000",
    },
    imgLogoContainer: {
        height: "12vh",
    },
});

export default useStyles;