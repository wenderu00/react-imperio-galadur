import { useEffect, useState } from "react"
import Time from "./Time";
export default function Game(){
    const [buildings, setBuildings] = useState({
        castle: {
            level: 1,
            daysToUpgrade: 4,
            upgrading: false,
            daysUpgrading: 0
        },
        townHall: {
            level: 1,
            daysToUpgrade: 4,
            upgrading: false,
            daysUpgrading: 0
        }
    })
    const [time, setTime] = useState({
        day: 1,
        month: 0,
        year: 0
    })
    
    function incrementTime(time){
        let newTime = { ...time }
        if(newTime.day >= 30 && newTime.month>=12){
            newTime.day = 1;
            newTime.month = 0;
            newTime.year++;
        } else if(newTime.day >= 30){
            newTime.day = 1;
            newTime.month++
        } else {
            newTime.day++;
        }
        return newTime;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => incrementTime(prevTime));
        }, 1000)
        return () => clearInterval(interval);
    }, []) 

    return (<>
        <Time time={time}/>
    </>)
}