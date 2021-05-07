import { Box, makeStyles, Chip } from "@material-ui/core"
import ThirdFlatImage from '../../assets/shopping.png'
import Circle from '../../assets/ellipse.svg'
import Line from '../../assets/simpleLine.svg'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: '#FFF8F5',
    },
    
    box1: {
        padding: '8em',
    },

    box2: {
        paddingRight: '8em',
        paddingTop: '2em',
        textAlign: 'center'
    },
    hugeText: {
        fontWeight: 400,
        fontSize: '32px',
        letterSpacing: '-0.02em'
    },
    img: {
        marginTop: '-100%',
        marginLeft: '10%',
    },
    chip: {
        border: '1px solid rgba(255, 92, 0, 0.4)',
        color: '#FF5C00',
        borderRadius: '4px'
    },
    smallText: {
        marginTop: '22px',
        width: '22em',
        lineHeight: '1.5em',
        fontSize: '18px',
    },
    capitalize: {
        textTransform: 'uppercase',
        marginTop: '48px',
        letterSpacing: '5px' 
    }
})

const ThirdFlat = () => {
    const classes = useStyles()

    return <>
        <Box className={classes.root}>

            <Box className = {classes.box1}>
                <Box className={classes.hugeText}>
                    Josiah’s Experience
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
                <Box>
                    <img src={Line} alt="simple line" />
                </Box>
            </Box>

            <Box className={classes.box2}>
                <img src={Circle} />
                <img src={ThirdFlatImage} alt="happy vasiti image" className={classes.img} />
            </Box>
        </Box>
    </>
};

export default ThirdFlat