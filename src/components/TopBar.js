import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, List, ListItem } from "@material-ui/core"
import Logo from '../assets/logo.svg'

const useStyles = makeStyles(theme =>({
    root: {
        background: 'white',
        border: 0,
        justifyContent: 'space-between',
        fontFamily: 'Roboto',
        padding: '2em',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            height: '48px',
            padding: '1em 10em',
        },
        '& nav': {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'block'
            }
        }
    },
    navItem: {
        display: 'initial',
    },
    button: {
        background: '#FF5C00',
        color: 'white',
        boxShadow: '1px 4px 8px 0px #EF580333',
        paddingLeft: '1em',
        paddingRight: '1em'
    }
}))

const TopBar = () => {
    const classes = useStyles();

    return <>
        <Box className={classes.root}>
            <Box>
                <img src={Logo} alt="logo"/>
            </Box>
            <List component="nav" aria-labelledby="main navigation">
                <ListItem className={classes.navItem}>ABOUT US</ListItem>
                <ListItem className={classes.navItem}>STORIES</ListItem>
                <ListItem className={classes.navItem}>CONTACT</ListItem>
                <ListItem className={classes.navItem}>LOGIN</ListItem>
                <Button className={classes.button}>SIGN UP</Button>
            </List>
        </Box>
    </>
};

export default TopBar;