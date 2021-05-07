import { Box, makeStyles } from "@material-ui/core"
import FirstFlatImage from '../../assets/firstflatImage.png'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    
    box1: {
        padding: '8em 1em',
        paddingLeft: '174px',
    },

    box2: {
        paddingTop: '2em',
    },
    hugeText: {
        fontWeight: 400,
        fontSize: '48px',
        lineHeight: '60px',
        width: '8.634em',
        letterSpacing: '-0.02em'
    },
    smallText: {
        marginTop: '22px',
        width: '22em',
        lineHeight: '1.5em',
    },
    img: {
        marginLeft: '-4em',
    }
})

const FirstFlat = () => {
    const classes = useStyles()

    return <>
        <Box className={classes.root}>
            <Box className = {classes.box1}>
                <Box className={classes.hugeText}>
                    Amazing Experiences from Our Wonderful Customers
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