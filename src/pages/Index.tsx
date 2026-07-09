import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import FeatureSection from "@/components/FeatureSection";
import ValueProposition from "@/components/ValueProposition";
import ProjectGallery from "@/components/ProjectGallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fatih Merkezli İstanbul Yapı Dekorasyon ve Tadilat | Küçükler Yapı Dekorasyon</title>
        <meta
          name="description"
          content="Fatih merkezli, İstanbul geneli hizmet veren Küçükler Yapı Dekorasyon; komple ev tadilatı, banyo, mutfak, boya, mantolama ve su yalıtımı işlerinde 20 yıllık tecrübe."
        />
        <link rel="canonical" href="https://asaf-yapi.lovable.app/" />
        <meta property="og:url" content="https://asaf-yapi.lovable.app/" />
      </Helmet>
      <TopBar />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesGrid />
        <FeatureSection />
        <ValueProposition />
        <ProjectGallery />
        <Testimonials />
        <FAQ />
        <BlogSection />
        <PreFooterCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
