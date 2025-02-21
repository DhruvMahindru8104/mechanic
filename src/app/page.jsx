import Image from "next/image";
import Hero from "@/components/ui/mycomponents/indexcomponents/Hero";
import Features from "@/components/ui/mycomponents/indexcomponents/WhyChooseUs";
import OurServices from "@/components/ui/mycomponents/indexcomponents/OurServices";
import TeamSection from "@/components/ui/mycomponents/indexcomponents/Team";
import GallerySection from "@/components/ui/mycomponents/indexcomponents/CarGallery";
export default function Home() {
  return (
   <>
   <Hero/>
   <Features/>
   <OurServices/>
   <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
   <TeamSection/>
   </div>
   <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
   <GallerySection/>
   </div>
   </>
  );
}
