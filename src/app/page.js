"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [time,setTime] = useState({hr:0,min:0,sec:0,milli:0});
    const [status,setStatus] = useState();
    let updateHr = time.hr;
    let updateMin = time.min;
    let updateSec = time.sec;
    let updateMilli = time.milli;
    const start = () => {
        setStatus(setInterval(() => {
           myFun();
        }, 10))
    }
    const stop = () => {
        clearInterval(status)
    }
    const reset = () => {
        clearInterval(status);
        setTime({hr:0,min:0,sec:0,milli:0});
    }

    const myFun = () => {
        if(updateMilli === 100){
            updateMilli=0;
            updateSec++
        }
        if(updateSec === 60){
            updateSec=0;
            updateMin++
        }
        if(updateMin === 60){
            updateMin=0;
            updateHr++
        }
        updateMilli++;
        return setTime({hr:updateHr,min:updateMin,sec:updateSec,milli:updateMilli});
    }
  return (
  <>
  <div class="container w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden ">
        <div class="stopwatch bg-orange-300 flex flex-col items-center justify-center pt-5 gap-5 rounded-2xl w-[400px] overflow-hidden z-[5]">
             <h1 className=" w-[100%] ml-[165px]">{time.hr + " : " + time.min + " : " + time.sec + " : " + time.milli}</h1>
            <div class="btn flex items-center text-2xl justify-justify-center   bg-zinc-500 w-full">
            <button onClick={start} className=" py-2 px-10 text-red-500" id="btn">Start</button>
            <button onClick={stop} className=" py-2 px-9 text-yellow-400">Stop</button>
            <button onClick={reset} className=" py-2 px-11 text-green-500">Reset</button>
            </div>
        </div>
        <h1 className="text-[300px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%]
  translate-y-[-50%] z-[1] opacity-40 text">Rupesh.</h1>
  </div>
  </>
  );
}
