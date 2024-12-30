import { motion } from "framer-motion";

const features = [
  {
    title: "Nature-Driven AR/VR",
    description:
      "Bringing virtual worlds into the real world using energy-efficient AR/VR sensors inspired by nature's balance.",
  },
  {
    title: "Humanverse Pods",
    description:
      "Personalized AR/VR spaces that merge seamlessly with real-world settings, creating deeply immersive experiences.",
  },
  {
    title: "Projected Physical Worlds",
    description:
      "Dynamic virtual environments inspired by nature and biomimicry, enhancing physical spaces.",
  },
  {
    title: "Sensory Metaverse",
    description:
      "Deeply immersive, tactile experiences that bridge the physical and digital, responding to emotions and sensations in real time.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          The Foundations of the Humanverse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-accent">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};