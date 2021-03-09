import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
 

}));

export default function ArrowHeader({back, next, title}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AppBar position="static">  */}
      {/* <Toolbar> */}
      <ArrowLeftOutlinedIcon onClick={back} style={{float:"left",width: "60px",
	height: "50px",
	bordertop: "25px solid transparent",
	borderleft:" 50px solid #555",
	borderbottom: "25px solid transparent",
  marginTop:"-12px"
  }} />
          <Typography className={classes.title} variant="h6" color="inherit" style={{fontSize: "2.25rem",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: "Bold",
  lineHeight: 1.3,
  letterspacing: "0.0075em",
  textAlign: "center",
  color:"#034EA2"}} >
            {title}
          </Typography>
         <ArrowRightOutlinedIcon onClick={next} style={{float:"right",width: "60px",
	height: "50px",
	bordertop: "25px solid transparent",
	borderleft:" 50px solid #555",
	borderbottom: "25px solid transparent",
  marginTop:"-55px",
  }}/>
         {/* </Toolbar> */}
    
 
    </div>
  );
} 