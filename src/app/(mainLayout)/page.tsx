import AboutCompany from "@/components/ui/Homepage/AboutCompany/AboutCompany";
import BlogSection from "@/components/ui/Homepage/Blog/Blog";
import ConsultingSection from "@/components/ui/Homepage/ConsultancSection/ConsultanceSection";
import Feedback from "@/components/ui/Homepage/Feedback/Feedback";
import { HeroSlider } from "@/components/ui/Homepage/HeroSlider/HeroSlider";
import JoinUsSection from "@/components/ui/Homepage/JoinUsSection/JoinUsSection";
import Services from "@/components/ui/Homepage/Services/Services";
import TeamSlider from "@/components/ui/Homepage/Team/Team";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <AboutCompany />
      <ConsultingSection />
      <JoinUsSection />
      <Feedback />
      <TeamSlider />
      <BlogSection />
    </>
  );
}
