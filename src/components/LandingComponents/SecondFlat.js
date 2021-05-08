import { Box, makeStyles, Chip } from "@material-ui/core"
import SecondFlatImage from '../../assets/secondflatImage.png'
import Line from '../../assets/simpleLine.svg'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column-reverse',
        background: '#222222',
        color: 'white',
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'center',
            flexDirection: 'row',
            height:'600px',
        }
    },

    mobile: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },

    desktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    
    box1: {
        padding: '3em',
        [theme.breakpoints.up('md')]: {
            padding: '6em 1em',
            paddingLeft: '174px',
        }
    },
    chip: {
        border: '1px solid #fff',
        color: '#fff',
        borderRadius: '4px',
        fontSize: '13px',
    },
    box2: {
        paddingTop: '2em',
    },
    hugeText: {
        fontWeight: 400,
        fontSize:'24px',
        lineHeight: '60px',
        letterSpacing: '-0.02em',
        [theme.breakpoints.up('md')]: {
            fontSize: '32px',
        }
    },
    smallText: {
        marginTop: '22px',
        lineHeight: '1.5em',
        fontSize: '16px',
        width: 'unset',
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            width: '22em',
        }
    },
    img: {
        width: '100%',
        marginBottom: '-2.8em',
        [theme.breakpoints.up('md')]: {
            marginBottom: '-5em',
            width: 'unset',
        },
    },

    line: {
        width: '80%',
        [theme.breakpoints.up('md')]: {
            width: 'unset',
        }
    },
    capitalize: {
        textTransform: 'uppercase',
        marginTop: '48px',
        letterSpacing: '5px' 
    }
}))

const SecondFlat = () => {
    const classes = useStyles()

    return <>
        <Box className={classes.root}>
            <Box className={classes.box2}>
                <img src={SecondFlatImage} alt="happy vasiti image" className={classes.img} />
            </Box>

            <Box className = {classes.box1}>
                <Box className={[classes.hugeText, classes.desktop]}>
                    Tolu & Joy’s Experience
                </Box>
                <Box className={[classes.hugeText, classes.mobile]}>
                    Oby's Experience
                </Box>
                <Chip
                    variant="outlined"
                    size="medium"
                    className={classes.chip}
                    label="VENDOR"
                />
                <Box className={classes.smallText}>
                    I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
                </Box>
                <Box className={[classes.smallText, classes.capitalize]}>
                    Share your own story!
                </Box>
                <Box className={classes.line}>
                    <img src={Line} alt="simple line" />
                </Box>
            </Box>
        </Box>
    </>
};

export default SecondFlat;