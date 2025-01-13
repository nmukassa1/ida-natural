"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function About() {
    const aboutRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(aboutRefs.current, {
            opacity: 0,
        });
        

        const tl = gsap.timeline();

        aboutRefs.current.forEach((ref, index) => {
            gsap.to(ref, {
                opacity: 1,
                scrollTrigger: {
                    trigger: ref,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                    // markers: true,
                    // toggleActions: "play none none none"
                }
            });
        }
        );
       
        
        aboutRefs.current.forEach(ref => console.log(ref));
    }, []);

   const aboutClass = "border-2 border-black rounded-lg w-[500px] px-[30px] py-[80px] text-2xl";

    return (
        <div className="global-align-center mt-8 relative">
            <div className="border-2 border-black rounded-lg h-[90vh] sticky top-[70px] overflow-hidden">
                <h1 className="text-center text-4xl">Our Story</h1>

            </div>
            <div className="relative flex flex-col bottom-[300px] gap-[50vh]">
                <div ref={el => aboutRefs.current[0] = el} className={aboutClass}>
                    <p>What started during lockdown as a way to care for my family turned into a mission to help others.</p>
                </div>
                <div ref={el => aboutRefs.current[1] = el} className={aboutClass}>
                    <p>When my three-month-old grandson’s severe skin condition didn’t improve with hospital treatments, I created a natural cream that healed him completely.</p>
                </div>
                <div ref={el => aboutRefs.current[2] = el} className={aboutClass}>
                    <p>Inspired by that success, I now craft homemade, natural products with love to nourish and care for others.</p>
                </div>
            </div>
        </div>
    );
}

export default About;