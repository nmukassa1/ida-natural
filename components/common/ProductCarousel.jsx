"use client"
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

function ProductCarousel({ products }) {
   

    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {products.map((product) => (
                        <CarouselItem key={product.id} className="md:basis-1/4 b-r-4 border-black">
                            <ProductCard product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default ProductCarousel; 