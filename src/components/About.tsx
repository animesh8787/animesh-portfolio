import { motion } from "framer-motion";
import { EASE } from "../lib/motion";

export default function About() {
  return (
    <section id="about" className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-[0.8fr_1.2fr] gap-12">
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
            Technology.
          </p>
          <p>
            Most of my time goes into two things that turn out to be closely related.
            Building AI systems that run reliably in production, and understanding where
            those systems are likely to fail or behave in ways their designer didn't
            anticipate.
          </p>
          <p>
            During a research internship, I benchmarked deep learning architectures for
            real-time structural health monitoring. That work is now part of a paper under
            review at Elsevier. It taught me how much of empirical ML is actually measurement
            discipline: knowing what a 99.9% validation accuracy does and doesn't tell you,
            and building alerting logic so the model's mistakes stay visible instead of silent.
          </p>
          <p>
            Outside of research, I've spent the last several months as the sole engineer on
            Ashwatthama, a local-first AI assistant. Partly because I wanted to ship something
            end-to-end on my own. Partly because "does this need to leave the user's machine"
            turned out to be a genuinely interesting constraint to design around, not just a
            privacy checkbox.
          </p>
          <p>
            Longer-term, I'm most drawn to AI safety work: mechanistic interpretability,
            adversarial robustness, and LLM evaluation in particular. They sit at the same
            intersection I keep finding myself at, rigorous measurement applied to systems
            complex enough to surprise you.
          </p>
          <p>
            Alongside Ashwatthama, I've shipped and deployed a handful of other things end to
            end: TalentRank, an explainable resume-ranking tool with a live weight-tunable
            scoring engine; ArthSetu, a government business-identity platform built with two
            teammates for a hackathon, where I owned the review-queue and governance workflows;
            and Nexus OS, a personal engineering dashboard that auto-tracks my own LeetCode and
            GitHub activity. I've also completed Amazon ML Summer School 2026 and hold a
            certificate for it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
