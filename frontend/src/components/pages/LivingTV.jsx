import React,{Component} from "react";
import buttonStyles from "./../button.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(() => {
    return {
        LivingTV: {
            color: "white",
            backgroundColor: "#e1e2e7"
        },
        NormalButton: {
            color: "black",
            backgroundColor: "dfe4e7"
        },
    };
  });


const LivingTV=(props) =>{
    
    const classes = useStyles();

    const myIo = props.myIo;
    myIo.on("broadcast", payload=>{
        console.log("broadcast swipe");
        console.log("payload",payload);
      });
    const deviceName = "リビングテレビ";
    function btnPush(btnName){
        console.log(btnName);
        const payload = {
            deviceName: deviceName,
            buttonName: btnName,
        };
        myIo.emit('send', payload);
    }
    return (
        <div className={classes.LivingTV}>
            <div>
                <div class="inner">
                    <Button
                    variant="contained" 
                    onClick={()=>btnPush("入力切替")}
                    >入力切替</Button>
                    <Button
                    variant="contained" 
                    onClick={()=>btnPush("電源")}
                    >電源</Button>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>            
    );
};

export default LivingTV;