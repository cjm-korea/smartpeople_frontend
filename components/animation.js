import Lottie from "react-lottie-player";

import lottieJson from '/public/think.json'

export default function Animation() {
    
    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
            // style={{width: 150, height: 150}}
        />
    )
}