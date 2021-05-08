import { Box, makeStyles } from "@material-ui/core"
import FirstFlatImage from '../../assets/firstflatImage.png'

const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        paddingLeft: '10%',
        paddingRight: '2em',
        [theme.breakpoints.up('md')]: {
            height: '600px',
            display: 'flex',
            paddingLeft: '12%',
            paddingRight: '8em',
        }
    },
    
    box1: {
        paddingTop: '2em',
        [theme.breakpoints.up('md')]: {
            paddingTop: '8em',
        }
    },

    box2: {
        paddingTop: '2em',
    },
    hugeText: {
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '40px',
        letterSpacing: '-0.02em',
        width: '8em',
        [theme.breakpoints.up('md')]: {
            fontSize: '48px',
            lineHeight: '60px',
            width: '10em',
        }
    },
    smallText: {
        marginTop: '22px',
        width: 'unset',
        fontSize: '18px',
        lineHeight: '31px',
        [theme.breakpoints.up('md')]: {
            width: '26em',
        }
    },
    img: {
        width: '180%',
        marginLeft: '-50%',
        [theme.breakpoints.up('md')]: {
            marginLeft: '-1em',
            width: 'unset',
        }
    }
}))

const FirstFlat = () => {
    const classes = useStyles()

    return <>
        <Box className={classes.root}>
            <Box className = {classes.box1}>
                <Box className={classes.hugeText}>
                    Amazing <br /> Experiences from Our Wonderful Customers
                </Box>
                <Box className={classes.smallText}>
                    Here is what customers and vendors are saying about us, you can share your stories with us too.
                </Box>
            </Box>
            <Box className={classes.box2}>
                <img src={FirstFlatImage} alt="happy vasiti" className={classes.img} />
            </Box>
        </Box>
    </>
};

export default FirstFlat;