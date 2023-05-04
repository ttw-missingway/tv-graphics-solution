import React from "react";
import Slide1 from "@/slides/Slide1";
import Slide2 from "@/slides/Slide2";

const { useState, useRef } = React;

const delay = ms => new Promise(res => setTimeout(res, ms));

function Slide({ index }) {
    const slides = [
        <Slide1/>,
        <Slide2/>
    ]

    return slides[index];
}

function updateSlide(i){

    i++;

    if (i >= 2){
        return 0;
    }

    return i++;
}
   
export default function Frame() {
    const app = useRef();
    // store the timeline in a ref.

    const [index, setIndex] = useState(0);

    const myfunction = async () => {
        await delay(5000);
        setIndex(updateSlide(index));
    }

    myfunction();
     
    return (
      <div className="app w-full h-full flex-col justify-center align-middle" ref={app}>
        <Slide index={index}/>
      </div>
    );
}