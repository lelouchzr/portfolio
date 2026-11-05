import {
  ArcadeProjectIcon,
  FrameclueProjectIcon,
  HandwritingProjectIcon,
  MnistCalculatorProjectIcon,
  NanotekspiceProjectIcon,
  OrielProjectIcon,
  RaytracerProjectIcon,
  SentinelProjectIcon,
} from "../components/project-icons"
import { sortProjectsByDate } from "../lib/sort-projects"
import type { Project } from "../types/projects"

const projects: Project[] = [
  {
    id: "mnist-handwriting-calculator",
    title: "MNIST Handwriting Calculator — SVM & CNN",
    icon: <MnistCalculatorProjectIcon />,
    period: { start: "03.03.2026", end: "22.03.2026", source: "commits" },
    link: "https://github.com/lelouchzr/MNIST-Handwriting-Calculator-SVM-CNN",
    skills: [
      "Python",
      "FastAPI",
      "React 19",
      "TypeScript",
      "PyTorch",
      "scikit-learn",
      "SVM",
      "CNN",
      "HOG",
      "MNIST",
      "Computer Vision",
    ],
    description: `Local handwritten arithmetic calculator comparing a calibrated HOG + SVM model with a convolutional neural network.
- Built a React drawing workspace and FastAPI backend to recognize handwritten digits and operators, review predictions and evaluate arithmetic expressions.
- Implemented stroke segmentation, interrupted-stroke repair and centered 28 × 28 symbol preprocessing, with geometric handling of decimal marks and division signs.
- Trained both models on MNIST digits and generated symbols, with reproducible training and separate validation and evaluation datasets.
- Added per-symbol scores, bounding boxes, occlusion maps and regression benchmarks to inspect predictions and compare both recognition pipelines.`,
  },
  {
    id: "sentinel",
    title: "Sentinel",
    icon: <SentinelProjectIcon />,
    period: { start: "04.11.2026", end: "05.11.2026", source: "commits" },
    link: "https://github.com/lelouchzr/sentinel",
    skills: [
      "Python",
      "Textual",
      "DuckDB",
      "Meta AI",
      "MCP",
      "AI Agents",
      "Typer",
      "Security",
    ],
    description: `Interactive terminal workspace for investigating security logs, built for the Meta Global AI Developer Hackathon 2026.
- Import CSV and JSONL records, detect rule-based signals and inspect original evidence in a Textual interface.
- Connect Meta AI to real local MCP tools for focused evidence searches and structured investigation findings.
- Persist cases, notes and activity locally with DuckDB; export Markdown and JSON reports and resume investigations later.
- Keep manual investigations available without an API key, with explicit provider states and bounded AI requests.`,
  },
  {
    id: "frameclue",
    title: "Frameclue",
    icon: <FrameclueProjectIcon />,
    period: { start: "01.09.2026" },
    skills: [
      "Creative Intelligence",
      "Product Engineering",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Gemini",
      "Vercel Workflow",
      "Docker",
      "Vitest",
      "Playwright",
      "i18n",
    ],
    description: `Entrepreneurial Creative Intelligence product that helps solo founders and small brands understand video creatives and decide what to test next.
- Building the full-stack product with Next.js 16, React 19, TypeScript and Tailwind CSS.
- Implemented private video uploads, validation and storage with Supabase Auth, PostgreSQL, Storage and Row Level Security.
- Designed durable Gemini analysis workflows that produce structured, versioned reports grounded in evidence from each creative.
- Added French and English localization, automated tests and security-focused access controls for a private alpha.
- Developing the product as a holder of France's National Student-Entrepreneur Status (SNEE).`,
  },
  {
    id: "nanotekspice",
    title: "NanoTekSpice",
    icon: <NanotekspiceProjectIcon />,
    period: { start: "01.08.2026", end: "31.08.2026", source: "commits" },
    link: "https://github.com/lelouchzr/nanotekspice",
    skills: [
      "C++20",
      "Digital Circuits",
      "Simulation",
      "SDL2",
      "CMake",
      "SUBLEQ",
      "Testing",
    ],
    description: `Enhanced remake of a second-year EPITECH project: a digital circuit simulator in C++20.
- Parse .nts circuit descriptions and simulate linked components with 0, 1 and unknown logic states.
- Implement CMOS gates, counters, flip-flops, RAM and ROM using shared electrical nets and clocked simulation steps.
- Add a native SDL2 circuit viewer, display devices and a programmable SUBLEQ computer.
- Share the same simulation engine between the interactive shell and graphical viewer, with automated tests.`,
  },
  {
    id: "raytracer",
    title: "Raytracer — Atelier",
    icon: <RaytracerProjectIcon />,
    period: { start: "20.04.2026", end: "28.05.2026", source: "commits" },
    link: "https://github.com/lelouchzr/raytracer",
    skills: [
      "C++20",
      "Ray Tracing",
      "PBR",
      "SDL2",
      "ImGui",
      "BVH",
      "Multithreading",
      "TCP",
    ],
    description: `Enhanced remake of a second-year EPITECH project: a C++20 rendering engine and native scene editor.
- Generate images from configurable 3D scenes with extensible geometry, lights, materials and transformations.
- Add reflections, refraction, PBR path tracing, HDR lighting and photon caustics.
- Build a native SDL2/ImGui editor with progressive previews, scene editing and PNG export.
- Accelerate rendering with a BVH, multiple threads and distributed TCP workers.`,
  },
  {
    id: "arcade",
    title: "Arcade",
    icon: <ArcadeProjectIcon />,
    period: { start: "28.03.2026", end: "11.04.2026", source: "commits" },
    link: "https://github.com/lelouchzr/arcade",
    skills: [
      "C++20",
      "Plugins",
      "Shared Libraries",
      "SDL2",
      "SFML",
      "ncurses",
      "RAII",
      "CMake",
    ],
    description: `Enhanced remake of a second-year EPITECH project: a modular C++20 gaming platform.
- Load games and graphics backends as shared libraries through a common plugin contract.
- Switch graphics backends while preserving the running game's state and score.
- Include seven games and up to thirteen graphics backends, depending on installed dependencies.
- Add persistent leaderboards, game modes and RAII-based plugin lifetime management.`,
  },
  {
    id: "oriel",
    title: "Oriel",
    icon: <OrielProjectIcon />,
    period: { start: "23.07.2026", end: "23.07.2026", source: "commits" },
    link: "https://github.com/lelouchzr/Oriel",
    skills: [
      "macOS",
      "Swift 6",
      "SwiftUI",
      "AppKit",
      "WebKit",
      "WKWebView",
      "HTML",
      "CSS",
      "JavaScript",
      "Swift Package Manager",
      "CLI",
      "Local-first",
      "Security",
    ],
    description: `Oriel is an open-source native macOS application for placing lightweight HTML, CSS, and JavaScript widgets directly on the desktop, with a local-first and security-conscious architecture.
- Developed the application with Swift 6, SwiftUI, AppKit, and WebKit, using isolated non-persistent WKWebViews to render each widget.
- Built a desktop-window system that keeps widgets behind regular windows, with multi-display support, explicit edit mode, and position and resize controls.
- Designed local persistence for every widget instance, including its position, size, enabled state, and user configuration, without accounts, telemetry, or cloud services.
- Implemented widget installation from local folders and signed directory packages, with previews of requested domains, author details, and signature state before installation.
- Added in-app source editing and previewing for package-contained HTML, CSS, and JavaScript, plus live reloads when widget files change through FSEvents.
- Created a secure widget SDK with a CLI, JSON Schema, and TypeScript declarations; widgets receive only bounded read-only context and network access is denied by default.
- Added an explicit per-domain consent flow for declared network permissions, preventing unrestricted filesystem access, shell execution, native bridges, and secret exposure.`,
  },
  {
    id: "handwriting-recognition",
    title: "Python Handwriting Recognition",
    icon: <HandwritingProjectIcon />,
    period: { start: "17.05.2026", end: "08.06.2026", source: "commits" },
    link: "https://github.com/lelouchzr/Handwriting-Recognition",
    skills: [
      "Python",
      "OCR",
      "Computer Vision",
      "Tesseract",
      "Pillow",
      "Typer",
      "CLI",
      "Image Processing",
      "Testing",
    ],
    description: `Local handwriting recognition pipeline built in Python for exploring a complete OCR workflow.
- Built image loading, grayscale and threshold preprocessing, optional deskewing and text-region segmentation.
- Added selectable fake and Tesseract OCR backends behind a typed interface, with confidence metadata where available.
- Created a Typer CLI and public Python API with text, JSON and Markdown exports, plus debug images and region visualizations.
- Covered the package with tests, linting, type checking, examples and focused documentation.`,
  },
  {
    id: "flashcardstudy",
    title: "FlashCardStudy",
    period: { start: "11.04.2026", end: "06.09.2026", source: "commits" },
    link: "https://flashcardstudy.com",
    logo: "/images/portfolio/flashcardstudy-logo.png",
    invertLogoInDarkMode: true,
    skills: [
      "Full-stack SaaS",
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "React Router",
      "Framer Motion",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Vercel",
      "SEO",
      "i18n",
    ],
    description: `Full-stack SaaS web application for language learning, built around flashcards, public deck sharing, image-backed cards and spaced repetition.
- Developed a React 19 + TypeScript + Vite frontend with Tailwind CSS, shadcn/ui, TanStack Query, React Router and Framer Motion.
- Built a Supabase backend using Auth, PostgreSQL, Row Level Security, Storage, Edge Functions and database migrations.
- Implemented deck and card CRUD, optimistic UI updates, study sessions, review history, streak tracking and FSRS-inspired spaced repetition scheduling.
- Added public deck sharing, import flows, multilingual i18n and prerendered SEO pages for public decks, collections, topics and pricing.
- Integrated Stripe Checkout, Billing Portal, webhooks, subscription plans, quotas and feature gates across frontend and database policies.
- Added analytics-focused pages including daily progress, due cards, recent activity, hardest cards and plan-based advanced stats.
- Deployed on Vercel with Supabase production infrastructure, sitemap generation, robots.txt and performance monitoring.`,
  },
  {
    id: "losthaven",
    title: "LostHaven",
    period: {
      start: "09.2025",
      end: "08.2026",
    },
    link: "https://lost-haven.com",
    logo: "/images/portfolio/losthaven-logo-rune.png",
    skills: [
      "Game Development",
      "Godot",
      "Gameplay Programming",
      "Game Design",
      "Team Project",
      "Commercialization",
    ],
    description: `Single-player game built with Godot as part of a team project that ran until August 2026.
- Co-founded the project and contributed to the commercial release strategy.
- Designed the project's technical architecture and core systems.
- Developed gameplay systems with Godot and web-based features around the game.
- Maintained the official website and related web services.
- Participated in project management, technical planning and team coordination.`,
  },
  {
    id: "lightweight-rag-framework",
    title: "Python RAG Framework",
    period: { start: "10.06.2026", end: "15.06.2026", source: "commits" },
    link: "https://github.com/lelouchzr/python-rag-framework",
    logo: "/images/portfolio/python-rag-framework-logo.png",
    invertLogoInDarkMode: true,
    skills: [
      "AI",
      "RAG",
      "Python",
      "Python 3.12",
      "LLM",
      "Embeddings",
      "Vector Search",
      "SQLite",
      "OpenAI",
      "Anthropic",
      "CLI",
      "Typed Library",
    ],
    description: `Lightweight Python framework for building retrieval-augmented generation applications with clean architecture, strong typing and minimal dependencies.
- Built composable primitives for document loading, deterministic chunking, retrieval, prompt construction and answer generation.
- Added local hashing and n-gram hashing embeddings, in-memory and SQLite vector stores, metadata filtering and lexical reranking.
- Implemented callable, OpenAI and Anthropic LLM adapters with streaming responses, source citations and conversation history.
- Added a local CLI for inspecting files, chunking documents and testing retrieval workflows.`,
  },
  {
    id: "python-agent-runtime",
    title: "Python Agent Runtime",
    period: { start: "17.06.2026", end: "22.06.2026", source: "commits" },
    link: "https://github.com/lelouchzr/python-agent-runtime",
    logo: "/images/portfolio/python-agent-runtime-logo.png",
    invertLogoInDarkMode: true,
    skills: [
      "AI Agents",
      "Python",
      "Python 3.12",
      "LLM",
      "RAG",
      "Tools",
      "Streaming",
      "Pydantic",
      "OpenAI",
      "Typed Library",
    ],
    description: `Lightweight Python runtime for executing AI agents cleanly and predictably.
- Built core abstractions for Agent, Runtime, PromptBuilder, ConversationHistory, Memory, ToolRegistry and ToolExecutor.
- Added callback support, streaming responses, Pydantic-based configuration and callable / OpenAI LLM adapters.
- Integrated optional retrieval through python-rag-framework without duplicating ingestion, embeddings or vector-store concerns.
- Focused the implementation on clean architecture, type-safe APIs and practical runtime behavior.`,
  },
  {
    id: "python-doc-generator",
    title: "Python Doc Generator",
    period: { start: "24.06.2026", end: "30.06.2026", source: "commits" },
    link: "https://github.com/lelouchzr/python-doc-generator",
    logo: "/images/portfolio/python-doc-generator-logo.png",
    invertLogoInDarkMode: true,
    skills: [
      "AI",
      "Python",
      "CLI",
      "RAG",
      "Agents",
      "Typer",
      "Markdown",
      "Documentation",
      "OpenAI",
      "Anthropic",
      "Gemini",
    ],
    description: `CLI that analyzes local Python repositories and generates useful Markdown documentation drafts.
- Built repository scanning, light static analysis, RAG-backed repository Q&A and agent-driven documentation generation.
- Generates README, architecture, API, diagrams, questions, roadmap and project summary drafts.
- Uses python-rag-framework for repository indexing and python-agent-runtime for prompt execution, history, tools and RAG plumbing.
- Supports dry-runs, config files, section selection, Mermaid diagram generation and optional hosted LLM providers.`,
  },
  {
    id: "lem-in",
    title: "Lem_in",
    period: { start: "11.06.2025", end: "11.06.2025", source: "commits" },
    link: "https://github.com/lelouchzr/lem_in",
    logo: "/images/portfolio/lem-in-logo.png",
    invertLogoInDarkMode: true,
    skills: [
      "EPITECH Project",
      "C",
      "Graph",
      "Pathfinding",
      "BFS",
      "Hashmap",
      "Optimization",
      "Python",
      "Pygame",
    ],
    description: `Pathfinding simulation in C where ants must travel from the entrance to the exit of an anthill in the fewest possible turns.
- Built strict map parsing for rooms, tunnels and special start/end commands.
- Modeled the anthill as a graph and used BFS to find shortest viable paths.
- Implemented ant scheduling to avoid collisions and optimize total turns.
- Added a Python / Pygame visualizer for movement simulation.`,
  },
  {
    id: "corewar",
    title: "Corewar",
    period: { start: "12.05.2025", end: "10.06.2025", source: "commits" },
    link: "https://github.com/lelouchzr/corewar",
    logo: "/images/portfolio/corewar-logo.png",
    invertLogoInDarkMode: true,
    skills: [
      "EPITECH Project",
      "C",
      "Virtual Machine",
      "Assembler",
      "Redcode",
      "ncurses",
      "Criterion",
      "CMake",
    ],
    description: `Computer simulation game where programs called Champions fight inside a shared virtual machine memory.
- Built an assembler to convert Redcode source files into binary champion files.
- Developed the virtual machine used to load and execute champions.
- Implemented command-line execution flows and memory dump support.
- Added a bonus ncurses visualizer for the simulation.`,
  },
]

export const PROJECTS: Project[] = sortProjectsByDate(projects)
