import React,{Component} from "react";
import buttonStyles from "./../button.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(() => {
    return {
        LivingAirConditionar: {
            color: "white",
            backgroundColor: "#e1e2e7"
        },
        NormalButton: {
            color: "black",
            backgroundColor: "dfe4e7"
        },
    };
  });


const LivingAirConditionar=(props) =>{
    
    const classes = useStyles();

    const myIo = props.myIo;
    myIo.on("broadcast", payload=>{
        console.log("broadcast swipe");
        console.log("payload",payload);
      });
    const deviceName = "リビングエアコン";
    function btnPush(btnName){
        console.log(btnName);
        const payload = {
            deviceName: deviceName,
            buttonName: btnName,
        };
        myIo.emit('send', payload);
    }
    return (
        <div className={classes.LivingAirConditionar}>
            <div>
                <div class="inner">
                    <Button
                    variant="contained" 
                    onClick={()=>btnPush("冷房")}>
                        冷房
                    </Button>
                    <Button
                    variant="contained" 
                    onClick={()=>btnPush("停止")}>
                        停止
                    </Button>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>            
    );
};

export default LivingAirConditionar;