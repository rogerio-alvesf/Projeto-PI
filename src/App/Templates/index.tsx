import react from 'react';

import Box from '@mui/material/Box';

import useStyles from './styles';

type TemplateProps = {
    children: React.ReactNode;
};

const Templates = ({ children }: TemplateProps) => {
    const styles = useStyles();

    return (
        <>
            <Box sx={styles.header}>
            </Box>
        </>
    )
};

export default Templates;