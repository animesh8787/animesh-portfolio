import { motion } from "framer-motion";
import { EASE } from "../lib/motion";

export default function About() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 grid md:grid-cols-[0.8fr_1.2fr] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="section-eyebrow mb-3">About</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
            Why I build the way I build.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="space-y-6 text-ink/80 leading-[1.75] text-[15px]"
        >
          <p>
            I'm a Computer Science undergraduate at Thapar Institute of Engineering and
            Technology, graduating in 2027. Most of my time goes into two things that turn
            out to be closely related: building AI systems that actually run reliably in
            production, and trying to understand where those systems are likely to fail or
            behave in ways their designer didn't anticipate.
          </p>
          <p>
            During a research internship, I benchmarked deep learning architectures for
            real-time structural health monitoring — work that's now part of a paper under
            review at Elsevier. That project taught me how much of empirical ML is actually
            about measurement discipline: knowing what a 99.9% validation accuracy does and
            doesn't tell you, and building the alerting logic so the model's mistakes are
            visible rather than silent.
          </p>
          <p>
            Outside of research, I've spent the last several months as the sole engineer on
            Ashwatthama, a local-first AI assistant — partly because I wanted to ship
            something end-to-end on my own, and partly because "does this need to leave the
            user's machine" turned out to be a genuinely interesting constraint to design
            around, not just a privacy checkbox.
          </p>
          <p>
            Longer-term, I'm most drawn to AI safety work — mechanistic interpretability,
            adversarial robustness, and LLM evaluation in particular — because they sit at
            the same intersection I keep finding myself at: rigorous measurement applied to
            systems complex enough to surprise you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
