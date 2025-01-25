"use client"
import ProductCard from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import {products} from '@/lib/database/products'
import ProgressBar from "./ProgressBar";
import { useState } from "react";

function ProductCarousel() {

    const [progress, setProgress] = useState(0)

    function handleScroll(e){
        const {scrollLeft, clientWidth} = e.target
        const progress = Math.floor((scrollLeft / clientWidth)* 100 )
        
        setProgress(progress)    
    }

    

    return (
        <div className="pb-6">
            <Carousel>
                <CarouselContent onScroll={(e) => handleScroll(e)}>
                    {products.map((product) => (
                        <CarouselItem key={product.id} className="md:basis-1/4 b-r-4 border-black">
                            <ProductCard product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                <ProgressBar progress={progress}>
                    <CarouselPrevious />
                    <CarouselNext />
                </ProgressBar>

            </Carousel>
        </div>
    );
}

export default ProductCarousel; 