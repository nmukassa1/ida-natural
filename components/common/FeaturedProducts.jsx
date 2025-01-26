"use client"
import ProductCard from "./ProductCard";
import {products} from '@/lib/database/products'
import gsap from 'gsap'
import {useRef, useEffect} from 'react'
import  ScrollTrigger from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function FeaturedProducts({className}) {

    if(!products) return null

    const container = useRef()

    useEffect(() => {
        // gsap.registerPlugin(ScrollTrigger);
        // gsap.set(container.current, {opacity: 0})
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: container.current,
        //         start: "top 20%", // Start animation when the top of the container is 20% from the top of the viewport
        //         end: "top 5%", // End animation when the bottom of the container is 120% from the top of the viewport
        //         scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        //         markers: true
        //     }
        // });
        // tl.to(container.current, { opacity: 1 }); // Animate opacity to 1
    }, [])

    return ( 
        <div 
            className={`${className} w-[90vw] md:container mx-auto`} 
            ref={container}
        >
            <div 
                className={`featured-products md:w-[70vw] mx-auto grid grid-cols-2 gap-12 mt-[3rem]`}
            >
                <ProductCard product={products[0]} animation="fade-up w-full" duration="2000" />
                <ProductCard product={products[1]} className="mt-[130%] w-full" animation="fade-up" duration="2000"/>
            </div>
        </div>
     );
}

export default FeaturedProducts;