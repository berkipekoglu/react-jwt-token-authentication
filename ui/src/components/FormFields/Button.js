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


function Button(props) {
  // reference: https://flowbite.com/docs/components/buttons/
  switch (props?.buttonType) {
    case "Blue":
        return <BlueButton {...props } />

    case "Green":
        return <GreenButton {...props } />

    case "Lime":
        return <LimeButton {...props } />

    case "Pink": 
        return <PinkButton {...props } />
    
    case "Purple": 
        return <PurpleButton {...props } />

    case "Red": 
        return <RedButton {...props } />

    case "Teal": 
        return <TealButton {...props } />

    case "Cyan": 
        return <CyanButton {...props } />

    case "GradientCyanToBlue": 
        return <GradientCyanToBlue {...props } />

    case "GradientGreenToBlue": 
        return <GradientGreenToBlue {...props } />

    case "GradientPinkToOrange": 
        return <GradientPinkToOrange {...props } />

    case "GradientPurpleToBlue": 
        return <GradientPurpleToBlue {...props } />

    case "GradientPurpleToPink": 
        return <GradientPurpleToPink {...props } />

    case "GradientRedToYellow": 
        return <GradientRedToYellow {...props } />

    case "GradientTealToLime": 
        return <GradientTealToLime {...props } />

    default:
        return <BlueButton {...props } />
  }
}

export default Button;
