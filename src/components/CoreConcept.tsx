import { motion } from "framer-motion";

export const CoreConcept = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Reimagine Reality, Empower Humanity
          </h2>
          <p className="text-lg text-accent mb-12 leading-relaxed">
            MetaOne transforms the metaverse into a human-centric experience,
            intertwining advanced AR/VR technology with the physical world. By
            embedding virtual environments into real-life settings, MetaOne creates
            a future where digital spaces enhance our connection to nature,
            history, and each other.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
            Learn How MetaOne Works
          </button>
        </motion.div>
      </div>
    </section>
  );
};