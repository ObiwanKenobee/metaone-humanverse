import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-primary">
            Welcome to MetaOne
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            The Humanverse
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-12 leading-relaxed">
            Where Virtual Reality Meets the Human Experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
              Enter the Humanverse
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-primary rounded-lg hover:bg-white/20 transition-colors">
              Discover the Vision
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};