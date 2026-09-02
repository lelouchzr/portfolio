import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "oriel",
    title: "Oriel",
    period: {
      start: "07.2026",
    },
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
    period: {
      start: "07.2026",
    },
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
    period: {
      start: "04.2026",
    },
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
    isExpanded: true,
  },
  {
    id: "losthaven",
    title: "LostHaven",
    period: {
      start: "09.2025",
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
    description: `Single-player game built with Godot as part of a team project with a commercialization objective.
- Co-founded the project and contributed to the commercial release strategy.
- Designed the project's technical architecture and core systems.
- Developed gameplay systems with Godot and web-based features around the game.
- Maintained the official website and related web services.
- Participated in project management, technical planning and team coordination.`,
  },
  {
    id: "lightweight-rag-framework",
    title: "Python RAG Framework",
    period: {
      start: "06.2026",
      end: "07.2026",
    },
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
    period: {
      start: "06.2026",
      end: "07.2026",
    },
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
    period: {
      start: "06.2026",
    },
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
    period: {
      start: "20.03.2023",
      end: "16.04.2023",
    },
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
    period: {
      start: "24.04.2023",
      end: "28.05.2023",
    },
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
