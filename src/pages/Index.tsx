import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AuthorityStrip from "@/components/AuthorityStrip";
import FeatureSection from "@/components/FeatureSection";
import ValueProposition from "@/components/ValueProposition";
import BlogSection from "@/components/BlogSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      <main>
        <HeroSection />
        <AuthorityStrip />
        <FeatureSection />
        <ValueProposition />
        <BlogSection />
        <PreFooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
