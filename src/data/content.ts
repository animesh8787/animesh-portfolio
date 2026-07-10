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
    links: { site: "https://ashwatthama.dev", repo: "" },
  },
  {
    id: "crack-detection",
    name: "Infrastructure Crack Detection",
    tagline:
      "Research internship work on real-time structural health monitoring. Benchmarked deep learning models for crack detection, co-authored into a paper now under review at Elsevier.",
    stack: ["PyTorch", "ResNet50", "VGG19-UNet", "YOLOv7", "OpenCV"],
    featured: true,
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
    id: "resume-screening",
    name: "AI-Driven Resume Screening System",
    tagline:
      "An NLP pipeline that reads unstructured resumes and scores candidates against a role. Built it twice, once in Python and FastAPI, once in Java and Spring, to compare how each architecture held up.",
    stack: ["Python", "FastAPI", "HuggingFace Transformers", "spaCy", "PostgreSQL"],
    featured: false,
    points: [
      {
        text: "Transformer embeddings and spaCy NER extract skills, experience, and projects from raw resume text.",
        metric: null,
        highlight: true,
      },
      {
        text: "Custom scoring pipeline cut manual screening time.",
        metric: "70%+ reduction",
        highlight: true,
      },
      {
        text: "Stateless, horizontally scalable FastAPI service with a PostgreSQL backend, optimized indexes and CTEs.",
        metric: null,
        highlight: false,
      },
    ],
    links: { site: "", repo: "" },
  },
  {
    id: "devrelease",
    name: "DevRelease Tracker",
    tagline:
      "A release-management dashboard that mirrors real DevSecOps workflows: versioning, deployment states, environment tracking.",
    stack: ["Java", "Spring Boot", "REST API", "React", "Hibernate/JPA"],
    featured: false,
    points: [
      {
        text: "Layered backend (Controller, Service, Repository) with full CRUD across projects, releases, and deployments.",
        metric: null,
        highlight: true,
      },
      {
        text: "Deployment state machine (PENDING → IN_PROGRESS → SUCCESS/FAILED) with semantic versioning enforced via Bean Validation.",
        metric: null,
        highlight: false,
      },
      {
        text: "React dashboard visualizes pipeline and deployment status in real time. Runs on H2 in development, MySQL-ready for production.",
        metric: null,
        highlight: true,
      },
    ],
    links: { site: "", repo: "" },
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
  Languages: ["Python", "Java", "C++", "C", "SQL", "TypeScript"],
  "ML / Deep Learning": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Optuna", "SHAP"],
  "Vision & NLP": ["CNNs", "ResNet50", "YOLOv7", "VGG19", "UNet", "OpenCV", "HuggingFace Transformers", "spaCy", "NLTK"],
  "Backend & Data": ["FastAPI", "Spring Boot", "REST APIs", "WebSockets", "PostgreSQL", "MySQL", "SQLAlchemy", "Hibernate/JPA"],
  Tooling: ["Git", "GitHub Actions", "Electron", "PyInstaller", "Docker-adjacent workflows"],
};

// Add an `href` to any stat to make it clickable (opens in a new tab) — e.g.
// point "LeetCode problems solved" at your real profile URL below. Stats
// without an `href` just render as plain text, same as before.
export const stats: { value: string; label: string; href?: string }[] = [
  { value: "200+", label: "LeetCode problems solved", href: "https://leetcode.com/u/your-username/" },
  { value: "99.9%", label: "peak model validation accuracy" },
  { value: "1", label: "Research Paper\nUnder Review" },
];

export const contact = {
  email: "workreachoutanimesh@gmail.com",
  phone: "+91 94181 79744",
  location: "Una, Himachal Pradesh, India",
  linkedin: "https://www.linkedin.com/in/animesh-dhiman-658250311/",
  github: "https://github.com/animesh8787",
};
