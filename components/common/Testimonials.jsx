"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselApi
  } from "@/components/ui/carousel"

  import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react";

function Testimonials() {

    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
          return
        }
     
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])

    return (
        <Carousel setApi={setApi} plugins={[Autoplay({ delay: 5000, })]} className="global-align-center w-[60%] text-center mx-auto my-[10%]">
        <CarouselContent>
            <CarouselItem>
                    <p>“I am so happy with the service I received from this company. The team was professional and friendly and the work was completed to a very high standard. I would definitely recommend them to anyone looking for a reliable and trustworthy company.”</p>
                    <p className="author">- John Doe</p>
            </CarouselItem>
            <CarouselItem>
                <p>“I am so happy with the service I received from this company. The team was professional and friendly and the work was completed to a very high standard. I would definitely recommend them to anyone looking for a reliable and trustworthy company.”</p>
                <p className="author">- Jane Lucy</p>
            </CarouselItem>
            <CarouselItem>
                <p>“I am so happy with the service I received from this company. The team was professional and friendly and the work was completed to a very high standard. I would definitely recommend them to anyone looking for a reliable and trustworthy company.”</p>
                <p className="author">- John Smith</p>
            </CarouselItem>
        </CarouselContent>
        <div className="py-2 text-center text-sm text-muted-foreground flex justify-center gap-4 mt-4">
            {
                Array.from({ length: count }).map((_, i) => (
                    <div key={i} className={`h-[13px] w-[13px] rounded-full ${current === i + 1 ? 'bg-black' : 'bg-gray-500'}`}></div>
                ))
            }
        </div>
        </Carousel>


    );
}

export default Testimonials;

