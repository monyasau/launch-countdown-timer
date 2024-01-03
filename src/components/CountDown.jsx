import { useEffect , useState} from "react"

let CountDown = ()=> {
    let currentDate = new Date().getTime()
    let launchDate = new Date('December 31, 2024 23:59:59').getTime()
    const [timeTillLaunch, setTimeTillLaunch] = useState(launchDate-currentDate)
    console.log("time till",timeTillLaunch);
    const [launchTimeInfo, setLaunchTimeInfo] = useState({
        staticLaunchDate: new Date(launchDate+86400000).toLocaleDateString(),
        day: Math.floor(timeTillLaunch/(1000*60*60*24)),
        hour: Math.floor((timeTillLaunch%(1000*60*60*24))/(1000*60*60)),
        minutes: Math.floor((timeTillLaunch%(1000*60*60)/(1000*60))),
        seconds: Math.floor((timeTillLaunch%(1000*60))/1000),});

    useEffect(() => {
                setTimeout(() => {
                   if (timeTillLaunch>0) {
        setLaunchTimeInfo({
            staticLaunchDate: new Date(launchDate+86400000).toLocaleDateString(),
            day: Math.floor(timeTillLaunch/(1000*60*60*24)),
            hour: Math.floor((timeTillLaunch%(1000*60*60*24))/(1000*60*60)),
            minutes: Math.floor((timeTillLaunch%(1000*60*60)/(1000*60))),
            seconds: Math.floor((timeTillLaunch%(1000*60))/1000),
        })
        setTimeTillLaunch(launchDate-currentDate)
    }
        }, 1000);
    
      }, [launchDate-currentDate]);

    return (
        <>
        <div className="mb-10 text-center">
        <div className="my-20">
            <h3 className="text-center font-bold tracking-[10px]">
                WE'RE LAUNCHING SOON
            </h3>
        </div>
            <div className="grid grid-cols-4 w-[70%] mx-auto">
                <div className="bg-dark-gray w-[70%]  h-[150px] text-white text-7xl"><h1>{launchTimeInfo.day}</h1></div>
                <div className="bg-dark-gray w-[70%]  h-[150px] text-white text-7xl"><h1>{launchTimeInfo.hour}</h1></div>
                <div className="bg-dark-gray w-[70%]  h-[150px] text-white text-7xl"><h1>{launchTimeInfo.minutes}</h1></div>
                <div className="bg-dark-gray w-[70%]  h-[150px] text-white text-7xl"><h1>{launchTimeInfo.seconds}</h1></div>
            </div>
        Launch date: <span className="text-center">{launchTimeInfo.staticLaunchDate}</span>
            </div>
            </>
    );
}

export default CountDown;