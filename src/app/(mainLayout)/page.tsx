import ConsultingSection from "@/components/ui/Homepage/ConsultancSection/ConsultanceSection";
import { HeroSlider } from "@/components/ui/Homepage/HeroSlider/HeroSlider";
import JoinUsSection from "@/components/ui/Homepage/JoinUsSection/JoinUsSection";
import Services from "@/components/ui/Homepage/Services/Services";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <ConsultingSection />
      <JoinUsSection />
    </>
  );
}
