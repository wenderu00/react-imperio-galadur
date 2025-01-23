import { useEffect, useState } from "react"
import Buildings from "./Buildings";
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
    function handleUpgradeBuilding(key){
        setBuildings(prevBuldings => {
            const newBuildings = { ...prevBuldings };
            newBuildings[key].upgrading = true;
            return newBuildings;
        })
    }
    function upgradeBuildings(buildings){
        const newBuildings = { ...buildings };
        Object.keys(newBuildings).forEach( key => {
            if(newBuildings[key].upgrading && newBuildings[key].daysUpgrading>= newBuildings[key].daysToUpgrade){
                newBuildings[key].level++;
                newBuildings[key].upgrading = false;
                newBuildings[key].daysUpgrading=0;
            } else if(newBuildings[key].upgrading){
                newBuildings[key].daysUpgrading++
            }
        })
        return newBuildings;
    }

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
            setBuildings(prevBuldings => upgradeBuildings(prevBuldings));
        }, 1000)
        return () => clearInterval(interval);
    }, []) 

    return (<>
        <Buildings buildings={buildings} handleUpgrade={handleUpgradeBuilding}/>
        <Time time={time}/>
    </>)
}