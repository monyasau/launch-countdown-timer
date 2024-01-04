import { useEffect , useState} from "react"

let CountDown = ()=> {
    let currentDate = new Date().getTime()
    let launchDate = new Date(`December 31, ${new Date().getFullYear()-1} 23:59:59`).getTime()
    const [timeTillLaunch, setTimeTillLaunch] = useState(launchDate-currentDate)
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
        <div className="h-[75%] flex items-center">
        <div className=" text-center  w-full">
        <div className="mt-12 md:mt-0" aria-label="header">
            <h3 className="text-center font-bold md:tracking-[10px] tracking-wider">
                WE'RE LAUNCHING SOON
            </h3>
        </div>
            <div className="grid md:grid-cols-4 grid-cols-2 md:my-20 my-10 md:w-[70%] mx-auto">
                <div className="flex items-center flex-col ">
                <div className="rounded bg-dark-gray w-[70%] flex shadow-xl justify-center items-center h-[150px] text-white text-7xl"><h1>{launchTimeInfo.day}</h1></div>
                    Days
                </div>
                <div className="flex items-center flex-col ">
                <div className="rounded bg-dark-gray w-[70%] flex shadow-xl justify-center items-center h-[150px] text-white text-7xl"><h1>{launchTimeInfo.hour}</h1></div>
                Hours
                </div>
                <div className="flex items-center flex-col ">
                <div className="rounded bg-dark-gray w-[70%] flex shadow-xl justify-center items-center h-[150px] text-white text-7xl"><h1>{launchTimeInfo.minutes}</h1></div>
                Minutes
                </div>
                <div className="flex items-center flex-col ">
                <div className="rounded bg-dark-gray w-[70%] flex shadow-xl justify-center items-center h-[150px] text-white text-7xl"><h1>{launchTimeInfo.seconds}</h1></div>
                Seconds
                </div>
            </div>
            
        <div className="text-center">Launch date: {launchTimeInfo.staticLaunchDate}</div>
            </div>
            </div>
            </>
    );
}

export default CountDown;