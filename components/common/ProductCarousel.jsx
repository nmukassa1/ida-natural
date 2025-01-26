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
            <Carousel >
                <CarouselContent onScroll={(e) => handleScroll(e)}>
                    {products.map((product, index) => (
                        <CarouselItem key={product.id} className={`${index === 0 && 'ml-4'} ${index === products.length -1 && 'mr-4'} md:basis-1/4 b-r-4 border-black`}>
                            <ProductCard product={product} className="w-[250px]" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                <ProgressBar progress={progress} className="mx-4">
                    <CarouselPrevious />
                    <CarouselNext />
                </ProgressBar>

            </Carousel>
        </div>
    );
}

export default ProductCarousel; 