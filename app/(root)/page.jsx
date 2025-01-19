import CategoriesSlide from "@/components/common/CategoriesSlide";
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
      <Features title="What's Popular" />
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
