import React from "react";
import SwipeableViews from "react-swipeable-views";

import textStyles from "./text.css";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import LivingTV from "./pages/LivingTV"
import LivingAirConditionar from "./pages/LivingAirConditionar";


const Swipe=(props) =>{
    const [swipeableActions, setSwipeableActions] = React.useState();
    const [tabIndex, setTabIndex] = React.useState(0);


    const handleChange = index => {
        setTabIndex(index);
    };
    const myIo = props.myIo;

    const tabNames = ["リビング\nテレビ","リビング\nエアコン"]
    return (
        <React.Fragment>
            <Tabs
                value={tabIndex}
                onChange={(e, value) => handleChange(value)}
                variant="fullWidth"
                indicatorColor="primary"
            >
                {tabNames.map((tabName, index)=>(
                    <Tab 
                    label={
                        <Typography style={{whiteSpace: 'pre-line'}}>
                            {tabName}
                        </Typography>
                    }/>
                ))}
            </Tabs>
            <SwipeableViews
                enableMouseEvents
                action={actions => setSwipeableActions(actions)}
                resistance
                animateHeight
            >
                <LivingTV myIo = {myIo}/>
                <LivingAirConditionar />
            </SwipeableViews>
        </React.Fragment>

    );
};

export default Swipe;