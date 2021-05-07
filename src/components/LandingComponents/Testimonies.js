import React from 'react'
import { Box, Chip, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '4em 8em',
    },
    gridItem: {
      padding: '1em 2em',
    },
    content: {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#474747'
    },
    name: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: '#474747',
      fontSize: '24px',
      lineHeight: '29px'
    },
    flexBox: {
      display: 'flex',
      margin: '1em 0',
    },
    location: {
      fontWeight: 500,
      lineHeight: '18px',
      letterSpacing: '0.05em',
      color: '#535353',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1em',
    },
    chip: {
      color: '#0D019A',
      borderRadius: '4px',
      fontSize: '13px',
      lineHeight: '16px',
      background: '#EEF8FF',
      textTransform: 'uppercase'
    },
    greenChip: {
      color: '#049A01',
      borderRadius: '4px',
      fontSize: '13px',
      lineHeight: '16px',
      background: '#F0FFEE',
      textTransform: 'uppercase'
    }
})

const Testimonies = ({ data }) => {
    const classes = useStyles();
    
    function FormRow({ data }) {
        return (
          <React.Fragment>
           <Grid item xs={4}>
             <div className = {classes.gridItem}>
                <div>
                  <img src={data.picture} />
                </div>
                <Box className={classes.name}>
                  {data.name}
                </Box>
                <div className={classes.flexBox}>
                  <div className={classes.location}>
                    {data.location}
                  </div>
                  <div>
                    <Chip label={data.badge} className={data.badge==="customer"? classes.chip: classes.greenChip}/>
                  </div>
                </div>
                <Box className={classes.content}>
                  {data.content}
                </Box>
             </div>
            </Grid>
          </React.Fragment>
        );
    }
    
    return (
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              {data.filter((a, i) => i >= 0 && i <= 2).map((d, i)=> <FormRow key = {i} data={d}/>)}
            </Grid>
            <Grid container item xs={12} spacing={3}>
              {data.filter((a, i) => i >= 3 && i <= 5).map((d, i)=> <FormRow key = {i} data={d}/>)}
            </Grid>
          </Grid>
        </div>
      );
};

export default Testimonies;