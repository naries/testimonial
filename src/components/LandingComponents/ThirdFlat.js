import { Box, makeStyles, Chip } from "@material-ui/core"
import ThirdFlatImage from '../../assets/shopping.png'
import GirlImage from '../../assets/girl.png'
import Circle from '../../assets/ellipse.svg'
import Line from '../../assets/simpleLine.svg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#FFF8F5',
        flexDirection: 'column-reverse',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
            height:'600px',
            overflow: 'hidden',
            flexDirection: 'row',
        },
        '& img': {
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 'unset',
            }
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
        }
    },

    
    box1: {
        padding: '2em',
        [theme.breakpoints.up('md')]: {
            padding: '8em',
        }
    },

    box2: {
        paddingLeft: '2em',
        paddingRight: '2em',
        paddingTop: '2em',
        textAlign: 'center',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            paddingLeft: 'unset',
            paddingRight: '8em',
        }
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
    img: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'none',
        [theme.breakpoints.up('md')]: {
            left: '5%',
            top: '10%',
            display: 'initial',
        }
    },
    show: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'initial',
        }
    },
    girlImg: {
        display: 'initial',
        [theme.breakpoints.up('md')]: {
            display: 'none',  
        }
    },
    line: {
        width: '80%',
        [theme.breakpoints.up('md')]: {
            width: 'unset',
        }
    },
    chip: {
        border: '1px solid rgba(255, 92, 0, 0.4)',
        color: '#FF5C00',
        borderRadius: '4px'
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
    capitalize: {
        textTransform: 'uppercase',
        marginTop: '48px',
        letterSpacing: '5px' 
    }
}))

const ThirdFlat = () => {
    const classes = useStyles()

    return <>
        <Box className={classes.root}>

            <Box className = {classes.box1}>
                <Box className={[classes.hugeText, classes.desktop]}>
                    Josiah’s Experience
                </Box>
                <Box className={[classes.hugeText, classes.mobile]}>
                    Victoria's Experience
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
                <Box className={classes.smallText, classes.capitalize}>
                    Share your own story!
                </Box>
                <Box className={classes.line}>
                    <img src={Line} alt="simple line" />
                </Box>
            </Box>

            <Box className={classes.box2}>
                <img src={Circle} className={classes.show}/>
                <img src={ThirdFlatImage} alt="happy vasiti image" className={classes.img} />
                <img src={GirlImage} alt="happy vasiti image" className={classes.girlImg} />

            </Box>
        </Box>
    </>
};

export default ThirdFlat