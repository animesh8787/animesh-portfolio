export const interests = [
  "AI Safety",
  "Mechanistic Interpretability",
  "Adversarial Robustness",
  "LLM Evaluation",
  "Scalable Oversight",
  "Empirical ML Research",
];

export const projects = [
  {
    id: "jarvis",
    name: "Ashwatthama",
    tagline: "A local-first AI desktop assistant — nothing you say to it ever leaves your machine.",
    stack: ["Electron", "React", "TypeScript", "FastAPI", "Vosk", "Coqui XTTS v2", "ChromaDB"],
    featured: true,
    points: [
      { text: "Three-layer architecture — Electron/React frontend, Python FastAPI backend, and a local AI inference layer, wired together over WebSockets and a JWT-authenticated IPC bridge with renderer context isolation.", metric: null },
      { text: "Offline streaming speech recognition with a WebRTC VAD noise gate, plus wake-word detection", metric: "sub-200ms ASR latency" },
      { text: "Voice-cloned text-to-speech from a 3-second sample", metric: "<300ms TTS latency" },
      { text: "Semantic memory over conversation history using vector search", metric: "ChromaDB · top-K cosine" },
      { text: "Session security hardened with authenticated encryption, OS-level key storage, and per-session token rotation", metric: "Fernet · AES-128-CBC + HMAC-SHA256" },
    ],
    links: { site: "https://ashwatthama.dev" },
  },
  {
    id: "crack-detection",
    name: "Infrastructure Crack Detection",
    tagline: "Research internship work benchmarking deep learning models for real-time structural health monitoring, co-authored into a paper under review at Elsevier.",
    stack: ["PyTorch", "ResNet50", "VGG19-UNet", "YOLOv7", "OpenCV"],
    featured: true,
    points: [
      { text: "Benchmarked a custom DCNN, VGG19-UNet, and ResNet50-UNet for binary crack classification on a 40,000-image dataset", metric: "99.9% val accuracy" },
      { text: "Built the augmentation pipeline (CLAHE, RandomResizedCrop, Otsu thresholding, ColorJitter) that got the model there", metric: null },
      { text: "Integrated the winning model into a real-time detection pipeline on an RTX 2080 Ti", metric: "97.7% mAP · 100+ epochs" },
      { text: "Automated crack-width measurement with IRC:SP:83-aligned alerting via contour analysis", metric: null },
    ],
    links: {},
  },
  {
    id: "resume-screening",
    name: "AI-Driven Resume Screening System",
    tagline: "An NLP pipeline that reads unstructured resumes and scores candidates against a role — built twice, once in Python/FastAPI and once in Java/Spring, to compare architectures.",
    stack: ["Python", "FastAPI", "HuggingFace Transformers", "spaCy", "PostgreSQL"],
    featured: false,
    points: [
      { text: "Transformer embeddings + spaCy NER extract skills, experience, and projects from raw resume text", metric: null },
      { text: "Custom scoring pipeline cut manual screening time", metric: "70%+ reduction" },
      { text: "Stateless, horizontally scalable FastAPI service with a PostgreSQL backend, optimized indexes and CTEs", metric: null },
    ],
    links: {},
  },
  {
    id: "devrelease",
    name: "DevRelease Tracker",
    tagline: "A release-management dashboard mirroring real DevSecOps workflows — versioning, deployment states, environment tracking.",
    stack: ["Java", "Spring Boot", "REST API", "React", "Hibernate/JPA"],
    featured: false,
    points: [
      { text: "Layered Controller–Service–Repository backend with full CRUD across Projects, Releases, and Deployments", metric: null },
      { text: "Deployment state machine (PENDING → IN_PROGRESS → SUCCESS/FAILED) with semantic versioning enforced via Bean Validation", metric: null },
      { text: "React dashboard visualizing pipeline and deployment status in real time; H2 in dev, MySQL-ready for production", metric: null },
    ],
    links: {},
  },
  {
    id: "solar",
    name: "Solar Panel Efficiency Predictor",
    tagline: "A regression pipeline predicting panel efficiency from environmental sensor data.",
    stack: ["XGBoost", "LightGBM", "CatBoost", "Optuna", "SHAP"],
    featured: false,
    points: [
      { text: "Ensemble stacking across three gradient-boosting models, with SHAP-driven feature selection to cut overfitting", metric: "89.89% R²" },
      { text: "GPU-accelerated Bayesian hyperparameter search with Optuna", metric: "60%+ faster tuning" },
    ],
    links: {},
  },
];

export const skills = {
  "Languages": ["Python", "Java", "C++", "C", "SQL", "TypeScript"],
  "ML / Deep Learning": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Optuna", "SHAP"],
  "Vision & NLP": ["CNNs", "ResNet50", "YOLOv7", "VGG19", "UNet", "OpenCV", "HuggingFace Transformers", "spaCy", "NLTK"],
  "Backend & Data": ["FastAPI", "Spring Boot", "REST APIs", "WebSockets", "PostgreSQL", "MySQL", "SQLAlchemy", "Hibernate/JPA"],
  "Tooling": ["Git", "GitHub Actions", "Electron", "PyInstaller", "Docker-adjacent workflows"],
};

export const stats = [
  { value: "200+", label: "LeetCode problems solved" },
  { value: "99.9%", label: "peak model validation accuracy" },
  { value: "1", label: "paper under review at Elsevier" },
  { value: "2027", label: "graduating, Thapar Institute" },
];

export const contact = {
  email: "animeshdhiman10@gmail.com",
  phone: "+91 94181 79744",
  location: "Una, Himachal Pradesh, India",
  linkedin: "#", // TODO: paste real LinkedIn URL
  github: "#", // TODO: paste real GitHub URL
};
