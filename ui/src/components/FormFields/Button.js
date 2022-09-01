import React from "react";
import BlueButton from "./Buttons/BlueButton";
import GreenButton from "./Buttons/GreenButton";
import LimeButton from "./Buttons/LimeButton";
import PinkButton from "./Buttons/PinkButton";
import RedButton from "./Buttons/RedButton";
import TealButton from "./Buttons/RedButton";
import CyanButton from "./Buttons/RedButton";
import PurpleButton from "./Buttons/PurpleButton";
/* Gradient Buttons */

import GradientCyanToBlue from "./Buttons/GradientCyanToBlue";
import GradientGreenToBlue from "./Buttons/GradientGreenToBlue";
import GradientPinkToOrange from "./Buttons/GradientPinkToOrange";
import GradientPurpleToBlue from "./Buttons/GradientPurpleToBlue";
import GradientPurpleToPink from "./Buttons/GradientPurpleToPink";
import GradientRedToYellow from "./Buttons/GradientRedToYellow";
import GradientTealToLime from "./Buttons/GradientTealToLime";


function Button({ buttonType, style, className, onClick, title, name, type }) {
  // reference: https://flowbite.com/docs/components/buttons/
  switch (buttonType) {
    case "Blue":
        return <BlueButton {...{ style, className, onClick, title, name, type }} />

    case "Green":
        return <GreenButton {...{ style, className, onClick, title, name, type }} />

    case "Lime":
        return <LimeButton {...{ style, className, onClick, title, name, type }} />

    case "Pink": 
        return <PinkButton {...{ style, className, onClick, title, name, type }} />
    
    case "Purple": 
        return <PurpleButton {...{ style, className, onClick, title, name, type }} />

    case "Red": 
        return <RedButton {...{ style, className, onClick, title, name, type }} />

    case "Teal": 
        return <TealButton {...{ style, className, onClick, title, name, type }} />

    case "Cyan": 
        return <CyanButton {...{ style, className, onClick, title, name, type }} />

    case "GradientCyanToBlue": 
        return <GradientCyanToBlue {...{ style, className, onClick, title, name, type }} />

    case "GradientGreenToBlue": 
        return <GradientGreenToBlue {...{ style, className, onClick, title, name, type }} />

    case "GradientPinkToOrange": 
        return <GradientPinkToOrange {...{ style, className, onClick, title, name, type }} />

    case "GradientPurpleToBlue": 
        return <GradientPurpleToBlue {...{ style, className, onClick, title, name, type }} />

    case "GradientPurpleToPink": 
        return <GradientPurpleToPink {...{ style, className, onClick, title, name, type }} />

    case "GradientRedToYellow": 
        return <GradientRedToYellow {...{ style, className, onClick, title, name, type }} />

    case "GradientTealToLime": 
        return <GradientTealToLime {...{ style, className, onClick, title, name, type }} />

    default:
        return <BlueButton {...{ style, className, onClick, title, name, type }} />
  }
}

export default Button;
