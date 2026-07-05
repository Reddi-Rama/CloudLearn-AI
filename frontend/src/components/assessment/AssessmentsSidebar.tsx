"use client";

import Timer from "./Timer";
import ProgressBar from "./ProgressBar";

interface Props{
time:string;
progress:number;
}

export default function AssessmentSidebar({
time,
progress
}:Props){

return(

<div className="glass-card sticky top-24 rounded-3xl p-6 space-y-8">

<Timer time={time}/>

<ProgressBar progress={progress}/>

</div>

)

}