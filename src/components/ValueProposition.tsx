import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Award, Building2, Users, Hammer } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = false) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const start = () => {
    if (hasStarted) return;
    setHasStarted(true);
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return { count, start };
};

const stats = [
  {
    number: 20,
    suffix: "+",
    label: "Yıllık Tecrübe",
    icon: Award,
  },
  {
    number: 500,
    suffix: "+",
    label: "Tamamlanan Proje",
    icon: Building2,
  },
  {
    number: 1000,
    suffix: "+",
    label: "Mutlu Müşteri",
    icon: Users,
  },
  {
    number: 50,
    suffix: "+",
    label: "Uzman Ekip",
    icon: Hammer,
  },
];

const values = [
  {
    icon: Clock,
    title: "Zamanında Teslim",
    description: "Taahhüt ettiğimiz sürede, eksiksiz teslimat garantisi sunuyoruz.",
  },
  {
    icon: Award,
    title: "20 Yıllık Tecrübe",
    description: "Sektörün köklü firmalarından biri olarak güvenilir hizmet.",
  },
  {
    icon: ShieldCheck,
    title: "Garantili İşçilik",
    description: "Tüm işlerimizi yazılı garanti ile teslim ediyoruz.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Stats Counter Component
const StatCounter = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, start } = useCountUp(stat.number, 2000);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="text-center group"
    >
      <div className="relative mb-4">
        <stat.icon className="h-8 w-8 mx-auto text-accent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="text-sm md:text-base text-white/70 font-medium uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
};

const ValueProposition = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Hero Stats Section - Dark dramatic background */}
      <div className="relative bg-navy-dark py-24 md:py-32 overflow-hidden">
        {/* Parallax Background Pattern */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-5"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/20" />
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-accent/10 to-transparent" />
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent" />

        <div className="container-custom relative z-10">
          {/* Main Headline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-semibold uppercase tracking-widest mb-6">
                Neden Biz?
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              Tecrübe,{" "}
              <span className="relative inline-block">
                <span className="text-accent">Güven</span>
                <motion.span
                  variants={lineVariants}
                  className="absolute -bottom-2 left-0 w-full h-1 bg-accent origin-left"
                />
              </span>
              {" "}ve Kalite.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light"
            >
              20 yılı aşkın süredir İstanbul'un en prestijli projelerine imza atıyoruz. 
              Rakamlar kendini anlatır.
            </motion.p>
          </motion.div>

          {/* Animated Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <StatCounter key={index} stat={stat} index={index} />
            ))}
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-16 md:mt-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </div>
      </div>

      {/* Value Cards Section */}
      <div className="bg-background section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-card p-8 md:p-10 border border-border hover:border-accent/50 transition-all duration-500"
              >
                {/* Hover accent line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 group-hover:bg-accent transition-colors duration-300">
                    <value.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold uppercase tracking-wide">Detaylı Bilgi</span>
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
