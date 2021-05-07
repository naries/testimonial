import { Box, makeStyles } from "@material-ui/core"
import SecondFlatImage from '../../assets/secondflatImage.png'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        background: '#222222',
        color: 'white',
        overflow: 'hidden'
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
        fontSize: '32px',
        lineHeight: '60px',
        letterSpacing: '-0.02em'
    },
    smallText: {
        marginTop: '22px',
        width: '22em',
        lineHeight: '1.5em',
        fontSize: '18px',
    },
    img: {
        marginBottom: '-5em',
    },
    capitalize: {
        textTransform: 'uppercase',
        marginTop: '48px'
    }
})

const SecondFlat = () => {
    const classes = useStyles()

    return <>
        <Box className={classes.root}>
            <Box className={classes.box2}>
                <img src={SecondFlatImage} alt="happy vasiti image" className={classes.img} />
            </Box>

            <Box className = {classes.box1}>
                <Box className={classes.hugeText}>
                    Tolu & Joy’s Experience
                </Box>
                <Box className={classes.smallText}>
                    I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
                </Box>
                <Box className={[classes.smallText, classes.capitalize]}>
                    Share your own story!
                </Box>
            </Box>
        </Box>
    </>
};

export default SecondFlat;