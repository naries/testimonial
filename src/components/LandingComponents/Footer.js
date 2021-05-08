import { Box, Button, makeStyles, Grid } from "@material-ui/core"
import Phone from '../../assets/phone.png'
import FB from '../../assets/sm/fb.svg'
import IG from '../../assets/sm/ig.svg'
import IN from '../../assets/sm/in.svg'
import TW from '../../assets/sm/tw.svg'


const useStyles = makeStyles(theme => ({
    root: {
        background: '#25201D',
        color: '#fff',

        
        '& .m-footer': {
            padding: '1em',
            display: 'block',
            [theme.breakpoints.up('md')]: {
                padding: '4em 8em',
                display: 'flex',
                flexDirection: 'row',
            },

            '& .section': {
                padding: '0 1em',
                width: '40%',
                display: 'inline-block',
                verticalAlign: 'top',
                [theme.breakpoints.up('md')]: {
                    verticalAlign: 'unset',
                    width: '11em',
                    display: 'block',
                }
            },

            '& .topic, .child': {
                marginTop: '20px',
            },

            '& .topic': {
                fontSize: '16px',
                lineHeight: '19px',
                fontWeight: 700
            },

            '& .child': {
                fontSize: '14px',
                lineHeight: '16px',

                '& img': {
                    marginRight: '4px',
                }
            },

        },
    },
    flex: {
        display: 'flex',
        flexDirection: 'column-reverse',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        },
        '& img': {
            marginTop: '1em',
            marginLeft: '6%',
            width: '100%',
            [theme.breakpoints.up('md')]: {
                marginTop: '-3em',
                width: 'unset',
                marginLeft: 'unset',
            }
        },
        '& .picture-holder': {
            textAlign: 'center',
            overflow: 'hidden',
            [theme.breakpoints.up('md')]: {
                flex: 1.5,
                overflow: 'unset',
            }
        },
        '& .main': {
            flex: 1,
            padding: '2em',
            paddingTop: '2em',
            [theme.breakpoints.up('md')]: {
                padding: 'initial',
                paddingTop: '6em',
            },

            '& .main-text': {
                fontSize: '40px',
            },

            '& .small-text': {
                lineHeight: '20px',
                margin: '1em 0',
                width: 'unset',
                [theme.breakpoints.up('md')]: {
                    width: '24em',
                },
            },

            '& input': {
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                marginLeft: 'unset',
                [theme.breakpoints.up('md')]: {
                    marginLeft: '1em',
                },
            },

            '& .newsletter': {
                background:'rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                padding: '.2em',
                display: 'inline-block'
            },

            '& button': {
                fontSize: '13px',
            }
        }
    }
}))

const Footer = () => {
    const classes = useStyles()
    
    return <>
    <Box className={classes.root}>
        <Box component="div" className={classes.flex}>
            <div className="picture-holder">
                <img src={Phone} />
            </div>


            <div className="main">
                <div className="main-text">
                    Be a  member
                </div>
                <div className="main-text">
                    of our community 🎉
                </div>
                <div className="small-text">
                        We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.
                </div>
                <div className="newsletter">
                    <input type="email" placeholder="enter your email address" />
                    <Button variant="contained">
                        SUBSCRIBE
                    </Button>
                </div>
            </div>

        </Box>



        <Box className="m-footer">
            <div className="section">
                <div className="topic">Company</div>
                <div className="child">About Us</div>
                <div className="child">Term of Use</div>
                <div className="child">Privacy Policy</div>
                <div className="child">Press & Media</div>
            </div>
            <div className="section">
                <div className="topic">Products</div>
                <div className="child">Marketplace</div>
                <div className="child">Magazine</div>
                <div className="child">Seller</div>
                <div className="child">Wholesale</div>
                <div className="child">Services</div>
            </div>
            <div className="section">
                <div className="topic">Careers</div>
                <div className="child">Become a Campus Rep</div>
                <div className="child">Become a Vasiti influencer</div>
                <div className="child">Become a Campus Writer</div>
                <div className="child">Become an Affiliate</div>
            </div>
            <div className="section">
                <div className="topic">Get In Touch</div>
                <div className="child">Contact us</div>
                <div className="child">Partner with us</div>
                <div className="child">Advertise with us</div>
                <div className="child">Help/FAQs</div>
            </div>
            <div className="section">
                <div className="topic">Join our Community</div>
                <div className="child">
                    <img src={FB} alt="Facebook" />
                    <img src={IG} alt="Instagram" />
                    <img src={IN} alt="LinkedIn" />
                    <img src={TW} alt="Twitter" />
                </div>
                <div className="child">Email newsletter</div>
            </div>
        </Box>
    </Box>
    </>
};

export default Footer;