import ConsultingSection from "@/components/ui/Homepage/ConsultancSection/ConsultanceSection";
import { HeroSlider } from "@/components/ui/Homepage/HeroSlider/HeroSlider";
import JoinUsSection from "@/components/ui/Homepage/JoinUsSection/JoinUsSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ConsultingSection />
      <JoinUsSection />
    </>
  );
}
