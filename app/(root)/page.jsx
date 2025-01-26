
import Collections from "@/components/common/Collections";
import FeaturedProducts from "@/components/common/FeaturedProducts";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import NewsletterSignUpForm from "@/components/common/NewsletterSignUpForm";
import ProductCarousel from "@/components/common/ProductCarousel";
import Testimonials from "@/components/common/Testimonials";
import About from "@/components/HomePage/About/About";
import About2 from "@/components/HomePage/About/About2";
import Features from "@/components/HomePage/Features/Features";
import Hero from "@/components/HomePage/Hero/Hero";
import Info from "@/components/HomePage/Info/Info";
import Ingredients from "@/components/HomePage/Ingredients/Ingredients";




export default function Home() {
  return (
    <>
      <Hero />
      
      <div>
        <div className="md:container mx-auto">
          <h1 className="text-4xl text-center mb-8 ">New In</h1>
          <ProductCarousel />
        </div>
      </div>

      <FeaturedProducts  />
      <Collections />
      <About2 />
     
     <div>
     <div className="md:container mx-auto mt-[100px]">
        <h1 className="text-4xl text-center mb-8">Best Sellers</h1>
        <ProductCarousel />
      </div>
     </div>

      <FeaturedProducts />

      <Testimonials />
      <NewsletterSignUpForm />

    
    </>
  );
}
