import React from "react";
import { gsap } from "gsap";
import Image from 'next/image';
import bgImage from '../images/1x/slide1_bg_new.webp';

const { useRef, useLayoutEffect } = React;

function Background() {
    return <Image src={bgImage} alt="slide 1" priority placeholder="blur" className="background absolute z-1 slide-bg bg-cover w-full h-full p-10 bg-red-500"/>;
  }

function LineFrame() {
  return <div className="line-frame absolute z-2 border-4 border-white rounded-3xl w-full h-full">
  </div>
}

function AesthetixLogo() {
  return <div className=""></div>
}
  
export default function Slide1() {
    const app = useRef();
    // store the timeline in a ref.
    const tl = useRef();
        
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        // add a box and circle animation to our timeline and play on first render
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap.timeline()
        .to(".background", {
          scale: 1.15,
          duration: 5
        })
        .to(".line-frame", {
          scale: 0.9,
          duration: 3
        }, "<")
        .from(".background", {
          opacity: 0.5,
          duration: 3
        },"<")
        .to(".circle", {
          x: 100,
          delay: 1
        }, "<");
      }, app);
      return () => ctx.revert();
    }, []);
     
    return (
      <div className="relative slide1 flex flex-col justify-center items-center w-full h-full" ref={app}>
        <Background/>
        <LineFrame/>
      </div>
    );
  }