import { Theme } from "@mui/material";

const useStyles = () => ({
    header: {
        boxShadow: "0px 4px 3px 0px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#fff",
    },
    imgLogo: {
        height: "90%",
    },
    campoBusca: {
        paddingTop: "1rem",
    },
    opcoes: {
        display: "flex",
        justifyContent: "flex-end",
        height: "12vh",
        padding: "1rem"
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
        height: "12vh"
    },
});

export default useStyles;