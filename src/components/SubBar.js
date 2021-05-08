import { makeStyles } from "@material-ui/core";
import { Box, List, ListItem, Button } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    container: {
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "Roboto",
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
    navItem: {
        display: 'inline-block',
        width: 'unset',
        padding: '1em 3em',
        textTransform: 'uppercase',
        fontSize: '13px',
    },
}))

const subBarOptions = ['Marketplace', 'wholesale center', 'seller center', 'services', 'internships', 'event']

const SubBar = () => {
    const classes = useStyles()

    return <>
        <Box className={classes.container}>
            <List component="nav" aria-labelledby="main navigation">
                {subBarOptions.map((option, i) => <ListItem key={i} className={classes.navItem}>{option}</ListItem>)}
            </List>
        </Box>
    </>
};

export default SubBar;