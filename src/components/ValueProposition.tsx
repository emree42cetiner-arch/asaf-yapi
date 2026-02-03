import { motion, Variants } from "framer-motion";
import { Clock, Award, ShieldCheck } from "lucide-react";
const values = [{
  icon: Clock,
  title: "Zamanında Teslim",
  description: "Taahhüt ettiğimiz sürede, eksiksiz teslimat garantisi sunuyoruz."
}, {
  icon: Award,
  title: "20 Yıllık Tecrübe",
  description: "Sektörün köklü firmalarından biri olarak güvenilir hizmet."
}, {
  icon: ShieldCheck,
  title: "Garantili İşçilik",
  description: "Tüm işlerimizi yazılı garanti ile teslim ediyoruz."
}];
const containerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};
const ValueProposition = () => {
  return <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Bu Asaf Yapı.</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Bu tecrübe başka kimde var?
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => <motion.div key={index} variants={itemVariants} className="card-sharp p-8 text-center group hover:border-accent/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-accent/10 group-hover:bg-accent transition-colors duration-300">
                <value.icon className="h-8 w-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default ValueProposition;