import CategoriesSlide from "@/components/common/CategoriesSlide";
import CollectionsNavbar from "@/components/common/CollectionsNavbar";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import NewsletterSignUpForm from "@/components/common/NewsletterSignUpForm";
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
      <h2 className="py-24 text-center text-3xl">Handcrafted beauty products made with integrity, sustainability, and love. <br /> Rediscover your skin's natural radiance.</h2>
      <CollectionsNavbar />
      <Features title="What's Popular" />
      <div>
        <div className="container mx-auto h-[60vh] mt-24 grid grid-cols-2 gap-4">
          <div className="h-full ">
            <ImagePlaceholder />
          </div>
          <div className="h-full ">
            <ImagePlaceholder />
          </div>
        </div>
      </div>
      <About2 />
      <Info />
      <Features title="What's New" />
      {/* <CategoriesSlide /> */}
      {/* <Ingredients /> */}
      <Testimonials />
      <NewsletterSignUpForm />
    </>
  );
}
