let CountDown = ()=> {
    let dateRef = (param)=>   new Date(param);
    let staticDateRefRef = dateRef('01'+"/"+'01'+"/"+'2024')
    let launchTimeInfo = {
        // staticLaunchDate: "dateRef('01/01/2024').toLocaleDateString()",
        // day: "staticDateRefRef.getUTCDate()",
        // hour: "staticDateRefRef.getUTCHours()",
        // minutes: "staticDateRefRef.getMinutes()",
        // seconds: "staticDateRefRef.getUTCSeconds()",
        day: staticDateRefRef.getUTCDate(),
        hour: staticDateRefRef.getUTCHours(),
        minutes: staticDateRefRef.getMinutes(),
        seconds: staticDateRefRef.getUTCSeconds()

    }
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