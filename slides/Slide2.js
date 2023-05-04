import React from "react";
import { gsap } from "gsap";

const { useRef, useLayoutEffect } = React;

function DifBox({ children }) {
    return <div className="difbox w-3 p-10 bg-green-500">{children}</div>;
  }
  
function DifCircle({ children }) {
    return <div className="difcircle w-3 p-10 rounded-full bg-yellow-300">{children}</div>;
}
   
export default function Slide2() {
    const app = useRef();
    // store the timeline in a ref.
    const tl = useRef();
        
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        // add a box and circle animation to our timeline and play on first render
      console.log("creating timeline");
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap.timeline()
        .to(".difbox", {
          rotation: 360,
          delay: 1
        })
        .to(".difcircle", {
          x: 100,
          delay: 1
        });
      }, app);
      return () => ctx.revert();
    }, []);
     
    return (
      <div className="slide2 flex flex-col justify-center items-center w-full h-full bg-yellow-100" ref={app}>
        <DifBox>box</DifBox>
        <DifCircle>circle</DifCircle>
      </div>
    );
  }