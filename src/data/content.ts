export const interests = [
  "AI Safety",
  "Mechanistic Interpretability",
  "Adversarial Robustness",
  "LLM Evaluation",
  "Scalable Oversight",
  "Empirical ML Research",
];

// To link a project to its live site and/or GitHub repo, just paste the URL
// into that project's `links` object below — e.g. `links: { repo: "https://github.com/you/repo" }`.
// Leave a field as an empty string ("") to hide that link until you have one.
export const projects = [
  {
    id: "jarvis",
    name: "Ashwatthama",
    tagline:
      "A local-first AI desktop assistant. Everything it hears, transcribes, and remembers stays on your machine.",
    stack: ["Electron", "React", "TypeScript", "FastAPI", "Vosk", "Coqui XTTS v2", "ChromaDB"],
    featured: true,
    points: [
      {
        text: "Three layers talk to each other over WebSockets and a JWT-authenticated IPC bridge: an Electron and React frontend, a Python FastAPI backend, and a local inference layer with renderer context isolation.",
        metric: null,
        highlight: false,
      },
      {
        text: "Speech recognition runs fully offline, with a WebRTC noise gate and wake-word detection layered on top.",
        metric: "sub-200ms ASR latency",
        highlight: true,
      },
      {
        text: "Text-to-speech clones a voice from a 3-second sample.",
        metric: "<300ms TTS latency",
        highlight: true,
      },
      {
        text: "Conversation history is embedded and searched with a vector database, so the assistant actually remembers context instead of starting fresh every session.",
        metric: "ChromaDB · top-K cosine",
        highlight: false,
      },
      {
        text: "Sessions are hardened with authenticated encryption, OS-level key storage, and token rotation on every login.",
        metric: "Fernet · AES-128-CBC + HMAC-SHA256",
        highlight: false,
      },
    ],
    links: { site: "https://www.ashwatthama.dev", repo: "" },
  },
  {
    id: "talentrank",
    name: "TalentRank",
    tagline:
      "Explainable resume screening, rebuilt from an academic NLP prototype into a working product: rank applicants against a role and see exactly which skills, experience, and resume evidence produced every score.",
    stack: ["FastAPI", "React", "TypeScript", "Sentence-Transformers", "Firebase Auth", "SQLAlchemy"],
    featured: true,
    points: [
      {
        text: "Five-dimension explainable scorer (skills, experience, education, relevance, location), each dimension returning a reason, not just a number — so the UI can answer \"why is this person ranked third?\"",
        metric: null,
        highlight: true,
      },
      {
        text: "Live weight tuning: drag a slider, watch the ranking reorder instantly with ▲▼ deltas, nothing saved until applied.",
        metric: null,
        highlight: true,
      },
      {
        text: "Semantic matching via sentence-transformers, with an automatic TF-IDF fallback so scores stay comparable even offline.",
        metric: null,
        highlight: false,
      },
      {
        text: "Kanban hiring pipeline with drag-and-drop, a bias-reduced \"blind review\" mode that redacts names/contact/university server-side, and a full audit log.",
        metric: null,
        highlight: false,
      },
    ],
    links: { site: "https://frontend-lake-phi-56.vercel.app", repo: "https://github.com/animesh8787/TalentRank" },
  },
  {
    id: "arthsetu",
    name: "ArthSetu",
    tagline:
      "A team-built government platform that resolves the same business scattered across labour, municipal, pollution, and utility records into one trusted identity — built with 2 teammates for a hackathon.",
    stack: ["FastAPI", "React", "TypeScript", "SQLAlchemy", "RapidFuzz", "Docker"],
    featured: true,
    points: [
      {
        text: "Built as Product & Governance Workflow Engineer on a 3-person team, owning the review-queue workflow, business-profile views, and district analytics.",
        metric: null,
        highlight: true,
      },
      {
        text: "Explainable UBID identity resolution: every auto-link stores a confidence score and its evidence (GSTIN match, name similarity, PIN code), never silently merging uncertain records.",
        metric: null,
        highlight: true,
      },
      {
        text: "Human-in-the-loop review queue: reviewers approve, reject, split, or override every medium-confidence match, with the outcome feeding back into calibration.",
        metric: null,
        highlight: false,
      },
      {
        text: "Activity-inference engine classifies each business as Active, Dormant, or Closed from inspections, filings, and utility signals, with a plain-language reason attached to every status.",
        metric: null,
        highlight: false,
      },
    ],
    links: { site: "https://arth-setu-six.vercel.app", repo: "https://github.com/animesh8787/ArthSetu" },
  },
  {
    id: "crack-detection",
    name: "Infrastructure Crack Detection",
    tagline:
      "Research internship work on real-time structural health monitoring. Benchmarked deep learning models for crack detection, co-authored into a paper now under review at Elsevier.",
    stack: ["PyTorch", "ResNet50", "VGG19-UNet", "YOLOv7", "OpenCV"],
    featured: false,
    points: [
      {
        text: "Benchmarked a custom DCNN, VGG19-UNet, and ResNet50-UNet for binary crack classification on a 40,000-image dataset.",
        metric: "99.9% val accuracy",
        highlight: true,
      },
      {
        text: "Built the augmentation pipeline that got the model there: CLAHE, RandomResizedCrop, Otsu thresholding, ColorJitter.",
        metric: null,
        highlight: false,
      },
      {
        text: "Integrated the winning model into a real-time detection pipeline on an RTX 2080 Ti.",
        metric: "97.7% mAP · 100+ epochs",
        highlight: true,
      },
      {
        text: "Automated crack-width measurement with IRC:SP:83-aligned alerting through contour analysis.",
        metric: null,
        highlight: false,
      },
    ],
    links: { site: "", repo: "" },
  },
  {
    id: "nexus-os",
    name: "Nexus OS",
    tagline:
      "A personal engineering dashboard: auto-tracks LeetCode and GitHub activity, auto-commits solved problems via a browser extension, and aggregates a live job feed from 38+ company ATS boards.",
    stack: ["JavaScript", "GitHub Actions", "GitHub API", "Chrome/Firefox Extension"],
    featured: false,
    points: [
      {
        text: "Browser extension reads accepted LeetCode submissions and auto-commits the solution to GitHub, zero clicks, so every solve counts toward a real contribution graph.",
        metric: null,
        highlight: true,
      },
      {
        text: "Job feed polls 38+ Greenhouse/Ashby company boards plus aggregators, scores each posting against skills pulled from my resume, and links straight to the real application page.",
        metric: null,
        highlight: true,
      },
      {
        text: "A daily GitHub Actions agent refreshes the feed and redeploys the static site at 08:00 IST, replacing what used to be a Windows scheduled task.",
        metric: null,
        highlight: false,
      },
    ],
    links: { site: "https://animesh8787.github.io/nexus-os", repo: "https://github.com/animesh8787/nexus-os" },
  },
  {
    id: "opsbrain",
    name: "OPSBRAIN",
    tagline:
      "An AI-powered industrial knowledge platform: turns engineering manuals and inspection reports into a searchable, citation-backed RAG system. Built for the ET AI Hackathon 2026.",
    stack: ["FastAPI", "Next.js", "LangGraph", "ChromaDB", "Groq", "Ollama"],
    featured: false,
    points: [
      {
        text: "Two-tier inference: primary responses through the Groq API, with automatic, transparent fallback to a locally hosted Ollama model on outage or rate limit.",
        metric: null,
        highlight: true,
      },
      {
        text: "Document pipeline (OCR → parsing → semantic chunking → entity extraction → embeddings) runs as independently upgradeable stages over PostgreSQL and a ChromaDB vector store.",
        metric: null,
        highlight: false,
      },
      {
        text: "Every generated answer maps back to the exact source page it was grounded in, through a citation-aware RAG pipeline.",
        metric: null,
        highlight: true,
      },
    ],
    links: { site: "", repo: "https://github.com/animesh8787/AI-powered-Industrial-Knowledge-Intelligence-Platform" },
  },
  {
    id: "solar",
    name: "Solar Panel Efficiency Predictor",
    tagline: "A regression pipeline predicting panel efficiency from environmental sensor data.",
    stack: ["XGBoost", "LightGBM", "CatBoost", "Optuna", "SHAP"],
    featured: false,
    points: [
      {
        text: "Ensemble stacking across three gradient-boosting models, with SHAP-driven feature selection to cut overfitting.",
        metric: "89.89% R²",
        highlight: true,
      },
      {
        text: "GPU-accelerated Bayesian hyperparameter search with Optuna.",
        metric: "60%+ faster tuning",
        highlight: true,
      },
    ],
    links: { site: "", repo: "" },
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "C++", "C", "SQL"],
  "ML / Deep Learning": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Optuna", "SHAP"],
  "Vision & GenAI": ["CNNs", "ResNet50", "YOLOv7", "VGG19", "UNet", "OpenCV", "HuggingFace Transformers", "spaCy", "NLTK", "LangGraph", "Sentence-Transformers"],
  "Backend & Data": ["FastAPI", "Next.js", "REST APIs", "WebSockets", "PostgreSQL", "SQLite", "MySQL", "SQLAlchemy", "ChromaDB", "Firebase Auth"],
  "Tools & Infra": ["Git", "GitHub Actions", "Electron", "PyInstaller", "Docker", "Vercel", "Render", "Groq / Ollama"],
};

export const experience = [
  {
    company: "Thapar Institute of Engineering and Technology",
    role: "Research Intern",
    location: "Patiala, Punjab",
    period: "Jun 2024 – Jul 2024",
    points: [
      "Benchmarked custom DCNN, VGG19-UNet, and ResNet50-UNet architectures for binary crack classification on a 40,000-image dataset; ResNet50 reached 99.9% validation accuracy.",
      "Designed an augmentation pipeline (CLAHE, RandomResizedCrop, Otsu thresholding, ColorJitter) to improve generalization on the crack-classification dataset.",
      "Integrated the best-performing model into a real-time YOLOv7 detection pipeline on an NVIDIA RTX 2080 Ti, reaching 97.7% mAP over 100+ training epochs.",
      "Automated crack-width measurement and alerting via OpenCV contour analysis, aligned with IRC:SP:83 infrastructure-inspection standards.",
      "Co-authored a paper on deep learning-based infrastructure monitoring, submitted to Elsevier and currently under review.",
    ],
  },
];

// Add an `href` to any stat to make it clickable (opens in a new tab) — e.g.
// point "LeetCode problems solved" at your real profile URL below. Stats
// without an `href` just render as plain text, same as before.
export const stats: { value: string; label: string; href?: string }[] = [
  { value: "4", label: "Products shipped\n& deployed live" },
  { value: "99.9%", label: "peak model\nvalidation accuracy" },
  { value: "1", label: "Research Paper\nUnder Review" },
  { value: "200+", label: "LeetCode problems\nsolved" },
];

export const contact = {
  email: "workreachoutanimesh@gmail.com",
  phone: "+91 94181 79744",
  location: "Una, Himachal Pradesh, India",
  linkedin: "https://www.linkedin.com/in/animesh-dhiman-658250311/",
  github: "https://github.com/animesh8787",
  resume: "/Animesh_Dhiman_Resume.pdf",
};
