import { useState } from "react";



export const useTimer = (time) => {
    const [timer, setTimer] = useState(time);
    const isFinish = false;
    let interval = null;

    const resetTimer = () => {
        setTimer(time);
    }

    const startTimer = () => {
        interval = setInterval(() => {
            if(timer == 0 && timer < 0){
                isFinish = true
                return;
            }
            else
            setTimer(timer - 1)
        }, 1000)
    }

    return ({
        timer,
        isFinish,
        startTimer,
        resetTimer
    });

}