import type { Locale } from "@/i18n/config"
import { DEFAULT_LOCALE } from "@/i18n/config"

import type { Education } from "../types/education"
import type { Experience } from "../types/experiences"
import type { Project } from "../types/projects"
import type { TechStack } from "../types/tech-stack"
import type { User } from "../types/user"
import { EDUCATION } from "./education"
import { EXPERIENCES } from "./experiences"
import { PROJECTS } from "./projects"
import { TECH_STACK } from "./tech-stack"
import { USER } from "./user"

export type PortfolioMessages = {
  metadata: {
    title: string
    description: string
  }
  overview: {
    title: string
    locationAriaLabel: string
    resume: string
    resumeAriaLabel: string
    websiteAriaLabel: string
    pronounsAriaLabel: string
  }
  hello: {
    fallback: string
    morning: string
    afternoon: string
    evening: string
  }
  sections: {
    stack: string
    experience: string
    education: string
    projects: string
  }
  actions: {
    showMore: string
    showLess: string
    present: string
    openProject: string
    copySectionLink: string
  }
  stackCategories: Record<string, string>
  commandMenu: {
    search: string
    noResults: string
    menu: string
    portfolio: string
    socialLinks: string
    brandAssets: string
    theme: string
    language: string
    other: string
    home: string
    hello: string
    stack: string
    experience: string
    education: string
    projects: string
    copyMark: string
    copyMarkSuccess: string
    copyLogotype: string
    copyLogotypeSuccess: string
    light: string
    dark: string
    system: string
    downloadResume: string
    downloadVCard: string
    runCommand: string
    goToPage: string
    openLink: string
    switchLanguage: string
  }
  footer: {
    craftedBy: string
    inspiredBy: string
    deployedOn: string
    sourceCode: string
    basedOn: string
    license: string
    githubProfile: string
    linkedinProfile: string
    dmcaStatus: string
  }
}

export type LocalizedPortfolio = {
  locale: Locale
  user: User
  experiences: Experience[]
  education: Education[]
  projects: Project[]
  techStack: TechStack[]
  messages: PortfolioMessages
}

const messages: Record<Locale, PortfolioMessages> = {
  en: {
    metadata: {
      title: "Adrien - Software Engineer",
      description: USER.bio,
    },
    overview: {
      title: "Overview",
      locationAriaLabel: "Location",
      resume: "Resume",
      resumeAriaLabel: "Download resume",
      websiteAriaLabel: "Personal website",
      pronounsAriaLabel: "Pronouns",
    },
    hello: {
      fallback: "Hello",
      morning: "Good morning",
      afternoon: "Good afternoon",
      evening: "Good evening",
    },
    sections: {
      stack: "Stack",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
    },
    actions: {
      showMore: "Show more",
      showLess: "Show less",
      present: "Present",
      openProject: "Open project",
      copySectionLink: "Copy link to section",
    },
    stackCategories: {},
    commandMenu: {
      search: "Type a command or search...",
      noResults: "No results found.",
      menu: "Menu",
      portfolio: "Portfolio",
      socialLinks: "Social Links",
      brandAssets: "Brand Assets",
      theme: "Theme",
      language: "Language",
      other: "Other",
      home: "Home",
      hello: "Hello",
      stack: "Stack",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      copyMark: "Copy Mark as SVG",
      copyMarkSuccess: "Mark as SVG copied",
      copyLogotype: "Copy Logotype as SVG",
      copyLogotypeSuccess: "Logotype as SVG copied",
      light: "Light",
      dark: "Dark",
      system: "System",
      downloadResume: "Download Resume",
      downloadVCard: "Download vCard",
      runCommand: "Run command",
      goToPage: "Go to page",
      openLink: "Open link",
      switchLanguage: "Switch language",
    },
    footer: {
      craftedBy: "Crafted by",
      inspiredBy: "Inspired by",
      deployedOn: "Deployed on",
      sourceCode: "Source code",
      basedOn: "Based on",
      license: "License",
      githubProfile: "GitHub Profile",
      linkedinProfile: "LinkedIn Profile",
      dmcaStatus: "DMCA.com Protection Status",
    },
  },
  fr: {
    metadata: {
      title: "Adrien - Software Engineer",
      description:
        "Étudiant en ingénierie logicielle intéressé par l'IA, les systèmes backend et les technologies émergentes.",
    },
    overview: {
      title: "Aperçu",
      locationAriaLabel: "Localisation",
      resume: "CV",
      resumeAriaLabel: "Télécharger le CV",
      websiteAriaLabel: "Site personnel",
      pronounsAriaLabel: "Pronoms",
    },
    hello: {
      fallback: "Bonjour",
      morning: "Bonjour",
      afternoon: "Bon après-midi",
      evening: "Bonsoir",
    },
    sections: {
      stack: "Stack",
      experience: "Expérience",
      education: "Formation",
      projects: "Projets",
    },
    actions: {
      showMore: "Voir plus",
      showLess: "Voir moins",
      present: "Aujourd'hui",
      openProject: "Ouvrir le projet",
      copySectionLink: "Copier le lien de la section",
    },
    stackCategories: {
      Language: "Langages",
      Frontend: "Frontend",
      "Backend & Database": "Backend & base de données",
      "AI & Developer Tools": "IA & outils développeur",
      "Tools & Platforms": "Outils & plateformes",
      "Workflow & Deployment": "Workflow & déploiement",
    },
    commandMenu: {
      search: "Tape une commande ou recherche...",
      noResults: "Aucun résultat.",
      menu: "Menu",
      portfolio: "Portfolio",
      socialLinks: "Réseaux",
      brandAssets: "Assets de marque",
      theme: "Thème",
      language: "Langue",
      other: "Autre",
      home: "Accueil",
      hello: "Bonjour",
      stack: "Stack",
      experience: "Expérience",
      education: "Formation",
      projects: "Projets",
      copyMark: "Copier le logo en SVG",
      copyMarkSuccess: "Logo SVG copié",
      copyLogotype: "Copier le logotype en SVG",
      copyLogotypeSuccess: "Logotype SVG copié",
      light: "Clair",
      dark: "Sombre",
      system: "Système",
      downloadResume: "Télécharger le CV",
      downloadVCard: "Télécharger la vCard",
      runCommand: "Exécuter",
      goToPage: "Aller à la page",
      openLink: "Ouvrir le lien",
      switchLanguage: "Changer de langue",
    },
    footer: {
      craftedBy: "Créé par",
      inspiredBy: "Inspiré par",
      deployedOn: "Déployé sur",
      sourceCode: "Code source",
      basedOn: "Basé sur",
      license: "Licence",
      githubProfile: "Profil GitHub",
      linkedinProfile: "Profil LinkedIn",
      dmcaStatus: "Statut de protection DMCA.com",
    },
  },
  kr: {
    metadata: {
      title: "Adrien - Software Engineer",
      description:
        "AI, 백엔드 시스템, 신기술에 관심이 있는 소프트웨어 공학 학생입니다.",
    },
    overview: {
      title: "개요",
      locationAriaLabel: "위치",
      resume: "이력서",
      resumeAriaLabel: "이력서 다운로드",
      websiteAriaLabel: "개인 웹사이트",
      pronounsAriaLabel: "대명사",
    },
    hello: {
      fallback: "안녕하세요",
      morning: "좋은 아침입니다",
      afternoon: "좋은 오후입니다",
      evening: "좋은 저녁입니다",
    },
    sections: {
      stack: "기술 스택",
      experience: "경력",
      education: "학력",
      projects: "프로젝트",
    },
    actions: {
      showMore: "더 보기",
      showLess: "접기",
      present: "현재",
      openProject: "프로젝트 열기",
      copySectionLink: "섹션 링크 복사",
    },
    stackCategories: {
      Language: "언어",
      Frontend: "프론트엔드",
      "Backend & Database": "백엔드 & 데이터베이스",
      "AI & Developer Tools": "AI & 개발 도구",
      "Tools & Platforms": "도구 & 플랫폼",
      "Workflow & Deployment": "워크플로우 & 배포",
    },
    commandMenu: {
      search: "명령어를 입력하거나 검색...",
      noResults: "결과가 없습니다.",
      menu: "메뉴",
      portfolio: "포트폴리오",
      socialLinks: "소셜 링크",
      brandAssets: "브랜드 에셋",
      theme: "테마",
      language: "언어",
      other: "기타",
      home: "홈",
      hello: "소개",
      stack: "기술 스택",
      experience: "경력",
      education: "학력",
      projects: "프로젝트",
      copyMark: "마크 SVG 복사",
      copyMarkSuccess: "마크 SVG가 복사되었습니다",
      copyLogotype: "로고타입 SVG 복사",
      copyLogotypeSuccess: "로고타입 SVG가 복사되었습니다",
      light: "라이트",
      dark: "다크",
      system: "시스템",
      downloadResume: "이력서 다운로드",
      downloadVCard: "vCard 다운로드",
      runCommand: "명령 실행",
      goToPage: "페이지로 이동",
      openLink: "링크 열기",
      switchLanguage: "언어 변경",
    },
    footer: {
      craftedBy: "제작",
      inspiredBy: "영감",
      deployedOn: "배포",
      sourceCode: "소스 코드",
      basedOn: "기반",
      license: "라이선스",
      githubProfile: "GitHub 프로필",
      linkedinProfile: "LinkedIn 프로필",
      dmcaStatus: "DMCA.com 보호 상태",
    },
  },
}

const userTranslations: Partial<Record<Locale, Partial<User>>> = {
  fr: {
    bio: messages.fr.metadata.description,
    jobTitle: "Ingénieur logiciel",
    flipSentences: [
      "Ingénieur logiciel.",
      "IA et systèmes backend.",
      "Technologies émergentes.",
      "Produits numériques utiles.",
    ],
    jobs: [
      {
        title: "Étudiant en ingénierie logicielle",
        company: "EPITECH",
        website: "https://epitech.eu",
        experienceId: "epitech",
      },
    ],
    about: `Je suis Adrien Lachambre, étudiant en ingénierie logicielle à EPITECH, intéressé par l'intelligence artificielle, les systèmes backend, les technologies émergentes et la création de produits numériques utiles.

À travers mes expériences chez Apimo, j'ai contribué au développement d'API REST et de solutions backend avec Symfony, PHP et SQL, au sein d'équipes Agile travaillant sur des projets logiciels à grande échelle.

J'aime aussi développer des projets personnels autour de l'IA, de l'apprentissage des langues, des outils développeur et des applications web. Ces projets me permettent de progresser techniquement tout en explorant de nouvelles technologies, idées produit et architectures logicielles propres.

Après un échange universitaire en Corée du Sud, j'ai développé un fort intérêt pour les environnements internationaux et la collaboration interculturelle. J'apprends activement le coréen et je prépare le TOPIK, le TOEIC et l'IELTS, avec l'objectif de travailler dans un contexte international.
`,
  },
  kr: {
    bio: messages.kr.metadata.description,
    jobTitle: "소프트웨어 엔지니어",
    flipSentences: [
      "소프트웨어 엔지니어.",
      "AI와 백엔드 시스템.",
      "신기술.",
      "의미 있는 디지털 제품 개발.",
    ],
    address: "프랑스 니스",
    jobs: [
      {
        title: "소프트웨어 공학 재학",
        company: "EPITECH",
        website: "https://epitech.eu",
        experienceId: "epitech",
      },
    ],
    about: `저는 EPITECH에서 소프트웨어 공학을 공부하는 Adrien Lachambre입니다. 인공지능, 백엔드 시스템, 신기술, 그리고 의미 있는 디지털 제품을 만드는 일에 관심이 있습니다.

Apimo에서의 경험을 통해 Symfony, PHP, SQL을 사용한 REST API와 백엔드 솔루션 개발에 참여했으며, 대규모 소프트웨어 프로젝트를 진행하는 Agile 팀에서 협업했습니다.

개인 프로젝트로는 AI, 언어 학습, 개발자 도구, 웹 애플리케이션을 주로 개발합니다. 이러한 프로젝트를 통해 기술 역량을 지속적으로 향상시키고 새로운 기술, 제품 아이디어, 깔끔한 소프트웨어 아키텍처를 탐구하고 있습니다.

한국 교환학생 경험 이후 국제적인 환경과 문화 간 협업에 큰 관심을 갖게 되었습니다. 현재 한국어를 공부하고 있으며 TOPIK, TOEIC, IELTS를 준비하면서 국제적인 환경에서 일하는 것을 목표로 하고 있습니다.
`,
  },
}

type PositionTranslation = Partial<
  Omit<Experience["positions"][number], "id" | "icon">
>
type ExperienceTranslation = Partial<Omit<Experience, "id" | "positions">> & {
  positions?: Record<string, PositionTranslation>
}

const experienceTranslations: Partial<
  Record<Locale, Record<string, ExperienceTranslation>>
> = {
  fr: {
    losthaven: {
      location: "À distance",
      locationType: "À distance",
      positions: {
        "1": {
          title: "Co-fondateur & Software Engineer",
          employmentType: "Freelance",
          description: `- Co-fondateur de LostHaven, projet indépendant de développement de jeu avec un objectif de sortie commerciale.
- Contribution au développement du jeu avec Godot et à la conception de l'architecture technique du projet.
- Développement et maintenance du site officiel et des services web liés.
- Conception et implémentation de systèmes de gameplay et de fonctionnalités web.
- Participation à la gestion de projet, à la planification technique et à la coordination d'équipe.
- Collaboration sur la stratégie logicielle, infrastructure et produit.`,
          skills: [
            "Godot",
            "Développement de jeu",
            "Ingénierie logicielle",
            "Architecture technique",
            "Tailwind CSS",
            "Développement web",
            "Gestion de projet",
            "Stratégie produit",
          ],
        },
      },
    },
    apimo: {
      location: "Cannes, France",
      locationType: "Sur site",
      positions: {
        "3": {
          title: "Développeur backend",
          employmentType: "Stage",
          description: `- Contribution à la refonte de l'API REST Apimo API v2 avec Symfony.
- Conception et implémentation de plusieurs endpoints GET, POST, PATCH et DELETE pour la gestion des utilisateurs et contacts.
- Refactorisation et amélioration d'endpoints existants pour renforcer la cohérence, la scalabilité et la maintenabilité.
- Implémentation de logique métier et de règles de validation dans les services backend.
- Utilisation de Propel ORM pour les opérations base de données et les requêtes complexes.
- Intégration d'OAuth2 et d'un contrôle d'accès basé sur les rôles.
- Participation aux cycles Agile : sprint planning, reviews et collaboration d'équipe.
- Amélioration de l'architecture API grâce à une conception modulaire et des composants réutilisables.`,
        },
        "2": {
          title: "Développeur backend à temps partiel",
          employmentType: "Stage à temps partiel",
          description: `- Contribution au développement de l'API REST Apimo API v2 avec Symfony.
- Conception et implémentation de nouveaux endpoints pour répondre aux besoins métier.
- Développement et amélioration de fonctionnalités backend pour les applications internes.
- Utilisation de PHP, Symfony et MySQL pour le développement applicatif et la gestion des données.
- Participation aux tests, validations et corrections de bugs.
- Travail dans un environnement Agile avec suivi des tâches et collaboration régulière avec l'équipe.
- Renforcement des compétences en architecture API, bonnes pratiques de développement et travail d'équipe.
- Expérience réalisée en parallèle de ma troisième année à EPITECH, les jeudis et vendredis.`,
        },
        "1": {
          title: "Développeur backend",
          employmentType: "Stage",
          description: `- Contribution au développement backend d'une plateforme logicielle immobilière utilisée par plus de 5 000 agences.
- Développement et amélioration de fonctionnalités et d'outils internes.
- Participation à la maintenance et à l'évolution des applications existantes.
- Contribution au monitoring, aux tests et aux activités de déploiement.
- Travail au sein d'une équipe Agile avec des cycles de développement par sprint.
- Collaboration avec des développeurs expérimentés dans un environnement professionnel.
- Acquisition de bonnes pratiques de développement logiciel et d'expérience en équipe sur des projets à grande échelle.`,
        },
      },
    },
    cassini: {
      location: "Nice, France",
      locationType: "Sur site",
      positions: {
        "1": {
          title: "Employé polyvalent",
          employmentType: "Temps partiel",
          description: `- Job étudiant réalisé en parallèle de mes études.
- Travail à temps partiel le week-end, avec une période temporaire à temps plein durant l'été 2024.
- Développement de compétences en relation client, fiabilité et gestion du temps dans un environnement professionnel.`,
          skills: [
            "Relation client",
            "Travail d'équipe",
            "Fiabilité",
            "Gestion du temps",
            "Adaptabilité",
          ],
        },
      },
    },
  },
  kr: {
    losthaven: {
      location: "원격",
      locationType: "원격",
      positions: {
        "1": {
          title: "공동 창업자 & 소프트웨어 엔지니어",
          employmentType: "프리랜스",
          description: `- 상업 출시를 목표로 하는 독립 게임 개발 프로젝트 LostHaven 공동 창업.
- Godot 기반 게임 개발과 프로젝트 기술 아키텍처 설계에 참여.
- 공식 웹사이트와 관련 웹 서비스 개발 및 유지보수.
- 게임플레이 시스템과 웹 기반 기능 설계 및 구현.
- 프로젝트 관리, 기술 계획, 팀 조율에 참여.
- 소프트웨어 엔지니어링, 인프라, 제품 전략에 기여.`,
          skills: [
            "Godot",
            "게임 개발",
            "소프트웨어 엔지니어링",
            "기술 아키텍처",
            "Tailwind CSS",
            "웹 개발",
            "프로젝트 관리",
            "제품 전략",
          ],
        },
      },
    },
    apimo: {
      location: "프랑스 칸",
      locationType: "현장",
      positions: {
        "3": {
          title: "백엔드 개발자",
          employmentType: "인턴십",
          description: `- Symfony 기반 REST API인 Apimo API v2 재개발에 참여.
- 사용자 및 연락처 관리를 위한 GET, POST, PATCH, DELETE API 엔드포인트 설계 및 구현.
- 일관성, 확장성, 유지보수성을 높이기 위해 기존 엔드포인트를 리팩터링.
- 백엔드 서비스 내 비즈니스 로직과 검증 규칙 구현.
- Propel ORM을 사용한 데이터베이스 작업과 복잡한 쿼리 관리.
- OAuth2 인증과 역할 기반 접근 제어 통합.
- 스프린트 계획, 리뷰, 팀 협업 등 Agile 개발 사이클 참여.
- 모듈식 설계와 재사용 가능한 컴포넌트를 통해 API 아키텍처 개선.`,
        },
        "2": {
          title: "백엔드 개발자 파트타임",
          employmentType: "파트타임 인턴십",
          description: `- Symfony를 사용한 Apimo API v2 개발에 참여.
- 비즈니스 요구사항을 지원하기 위한 신규 API 엔드포인트 설계 및 구현.
- 내부 애플리케이션을 위한 백엔드 기능 개발 및 개선.
- PHP, Symfony, MySQL을 사용한 애플리케이션 개발과 데이터 관리.
- 테스트, 검증, 버그 수정 프로세스 참여.
- 작업 관리와 정기적인 팀 협업이 있는 Agile 환경에서 근무.
- API 아키텍처, 개발 모범 사례, 팀워크 역량 강화.
- EPITECH 3학년 과정과 병행해 목요일과 금요일에 근무.`,
        },
        "1": {
          title: "백엔드 개발자",
          employmentType: "인턴십",
          description: `- 5,000개 이상의 부동산 중개사가 사용하는 소프트웨어 플랫폼의 백엔드 개발에 참여.
- 내부 기능과 도구 개발 및 개선.
- 기존 애플리케이션의 유지보수와 발전에 참여.
- 애플리케이션 모니터링, 테스트, 배포 활동에 기여.
- 스프린트 기반 Agile 개발 팀에서 근무.
- 전문적인 환경에서 경험 있는 개발자들과 협업.
- 대규모 프로젝트에서 소프트웨어 개발 모범 사례와 팀워크 경험을 쌓음.`,
        },
      },
    },
    cassini: {
      location: "프랑스 니스",
      locationType: "현장",
      positions: {
        "1": {
          title: "매장 직원",
          employmentType: "파트타임",
          description: `- 학업과 병행한 학생 아르바이트.
- 주말 파트타임 근무와 2024년 여름 단기 풀타임 근무.
- 고객 응대, 신뢰성, 시간 관리 역량을 전문적인 환경에서 향상.`,
          skills: ["고객 응대", "팀워크", "신뢰성", "시간 관리", "적응력"],
        },
      },
    },
  },
}

const educationTranslations: Partial<
  Record<Locale, Record<string, Partial<Education>>>
> = {
  fr: {
    epitech: {
      degree: "Master",
      fieldOfStudy: "Ingénierie logicielle / Informatique",
      description: `- Cursus par projets orienté ingénierie logicielle, développement logiciel et résolution de problèmes techniques complexes.
- Participation à de nombreux projets individuels et en équipe dans un environnement technique exigeant.
- Développement de compétences en web, programmation système, conception de bases de données, architecture logicielle et gestion de projet.
- Réalisation de projets collaboratifs favorisant l'autonomie, le travail d'équipe, l'adaptabilité et l'apprentissage continu.`,
      skills: [
        "Ingénierie logicielle",
        "Informatique",
        "Travail d'équipe",
        "Développement full-stack",
        "Programmation système",
        "Conception de bases de données",
        "Architecture logicielle",
        "Gestion de projet",
      ],
    },
    "inha-university": {
      degree: "Programme d'échange universitaire",
      fieldOfStudy: "Ingénierie logicielle / Informatique",
      description: `- Programme d'échange universitaire d'un an en Corée du Sud dans le domaine de l'ingénierie logicielle.
- Collaboration avec des étudiants de profils variés dans un environnement académique multiculturel.
- Cours et projets axés sur Python, C, C++, Linux, bases de données et intelligence artificielle.
- Renforcement de l'autonomie, de la collaboration interculturelle et de la résolution de problèmes tout en apprenant le coréen.`,
      skills: [
        "Python",
        "C",
        "C++",
        "Linux",
        "Bases de données",
        "Intelligence artificielle",
        "Programmation orientée objet",
        "Travail d'équipe",
      ],
    },
  },
  kr: {
    epitech: {
      degree: "석사 과정",
      fieldOfStudy: "소프트웨어 공학 / 컴퓨터 과학",
      description: `- 소프트웨어 공학, 소프트웨어 개발, 복잡한 기술 문제 해결에 초점을 둔 프로젝트 기반 커리큘럼.
- 높은 수준의 기술 환경에서 개인 및 팀 프로젝트 다수 수행.
- 웹 개발, 시스템 프로그래밍, 데이터베이스 설계, 소프트웨어 아키텍처, 프로젝트 관리 역량 개발.
- 협업 프로젝트를 통해 자율성, 팀워크, 적응력, 지속적인 학습 태도 강화.`,
      skills: [
        "소프트웨어 공학",
        "컴퓨터 과학",
        "팀워크",
        "풀스택 개발",
        "시스템 프로그래밍",
        "데이터베이스 설계",
        "소프트웨어 아키텍처",
        "프로젝트 관리",
      ],
    },
    "inha-university": {
      school: "인하대학교",
      degree: "교환학생 프로그램",
      fieldOfStudy: "소프트웨어 공학 / 컴퓨터 과학",
      description: `- 소프트웨어 공학 분야에서 진행한 한국 1년 교환학생 프로그램.
- 다양한 배경의 학생들과 다문화 학업 환경에서 협업.
- Python, C, C++, Linux, 데이터베이스, 인공지능 기술 중심의 수업과 프로젝트 수행.
- 한국어를 배우며 자율성, 문화 간 협업, 문제 해결 능력 강화.`,
      skills: [
        "Python",
        "C",
        "C++",
        "Linux",
        "데이터베이스",
        "인공지능",
        "객체지향 프로그래밍",
        "팀워크",
      ],
    },
  },
}

const projectTranslations: Partial<
  Record<Locale, Record<string, Partial<Project>>>
> = {
  fr: {
    flashcardstudy: {
      description: `Application web SaaS full-stack pour l'apprentissage des langues, construite autour de flashcards, du partage de decks publics, de cartes avec images et de la répétition espacée.
- Développement d'un frontend React 19 + TypeScript + Vite avec Tailwind CSS, shadcn/ui, TanStack Query, React Router et Framer Motion.
- Création d'un backend Supabase avec Auth, PostgreSQL, Row Level Security, Storage, Edge Functions et migrations.
- Implémentation du CRUD decks/cartes, mises à jour optimistes, sessions d'étude, historique de révision, streaks et planification de répétition espacée inspirée de FSRS.
- Ajout du partage de decks publics, imports, i18n multilingue et pages SEO pré-rendues.
- Intégration de Stripe Checkout, Billing Portal, webhooks, abonnements, quotas et feature gates.
- Ajout de pages analytiques : progression quotidienne, cartes dues, activité récente, cartes difficiles et statistiques avancées selon le plan.
- Déploiement sur Vercel avec infrastructure Supabase production, sitemap, robots.txt et monitoring performance.`,
    },
    losthaven: {
      description: `Jeu solo développé avec Godot au sein d'un projet d'équipe avec un objectif de commercialisation.
- Co-fondateur du projet et contribution à la stratégie de sortie commerciale.
- Conception de l'architecture technique et des systèmes principaux.
- Développement de systèmes de gameplay avec Godot et de fonctionnalités web autour du jeu.
- Maintenance du site officiel et des services web associés.
- Participation à la gestion de projet, à la planification technique et à la coordination d'équipe.`,
    },
    "lightweight-rag-framework": {
      title: "Framework RAG Python",
      description: `Framework Python léger pour créer des applications de retrieval-augmented generation avec une architecture propre, un typage fort et peu de dépendances.
- Création de primitives composables pour charger les documents, découper le contenu, récupérer le contexte, construire les prompts et générer les réponses.
- Ajout d'embeddings locaux par hashing et n-gram, vector stores en mémoire et SQLite, filtrage metadata et reranking lexical.
- Implémentation d'adaptateurs LLM callable, OpenAI et Anthropic avec streaming, citations des sources et historique conversationnel.
- Ajout d'une CLI locale pour inspecter les fichiers, découper les documents et tester les workflows de retrieval.`,
    },
    "python-agent-runtime": {
      title: "Runtime d'agents Python",
      description: `Runtime Python léger pour exécuter des agents IA de manière propre et prévisible.
- Création des abstractions Agent, Runtime, PromptBuilder, ConversationHistory, Memory, ToolRegistry et ToolExecutor.
- Ajout de callbacks, réponses streamées, configuration Pydantic et adaptateurs callable / OpenAI.
- Intégration optionnelle du retrieval via python-rag-framework sans dupliquer l'ingestion, les embeddings ou les vector stores.
- Implémentation centrée sur une architecture propre, des APIs typées et un comportement runtime pratique.`,
    },
    "python-doc-generator": {
      title: "Générateur de documentation Python",
      description: `CLI qui analyse des repositories Python locaux et génère des drafts de documentation Markdown utiles.
- Scan de repository, analyse statique légère, Q&A via RAG et génération de documentation pilotée par agents.
- Génération de README, architecture, API, diagrammes, questions, roadmap et résumé projet.
- Utilisation de python-rag-framework pour l'indexation et de python-agent-runtime pour l'exécution des prompts, l'historique, les tools et le RAG.
- Support des dry-runs, fichiers de configuration, sélection de sections, diagrammes Mermaid et fournisseurs LLM hébergés optionnels.`,
    },
    "lem-in": {
      description: `Simulation de pathfinding en C où des fourmis doivent aller de l'entrée à la sortie d'une fourmilière en un minimum de tours.
- Parsing strict des maps, salles, tunnels et commandes start/end.
- Modélisation de la fourmilière sous forme de graphe et utilisation de BFS pour trouver les chemins viables les plus courts.
- Implémentation d'un scheduling de fourmis pour éviter les collisions et optimiser le nombre total de tours.
- Ajout d'un visualiseur Python / Pygame pour simuler les déplacements.`,
    },
    corewar: {
      description: `Jeu de simulation informatique où des programmes appelés Champions s'affrontent dans une mémoire partagée de machine virtuelle.
- Création d'un assembleur pour convertir des fichiers source Redcode en champions binaires.
- Développement de la machine virtuelle chargée de charger et exécuter les champions.
- Implémentation des flux CLI et du support de dump mémoire.
- Ajout d'un visualiseur bonus ncurses pour la simulation.`,
    },
  },
  kr: {
    flashcardstudy: {
      description: `플래시카드, 공개 덱 공유, 이미지 기반 카드, 간격 반복 학습을 중심으로 만든 언어 학습용 풀스택 SaaS 웹 애플리케이션.
- React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui, TanStack Query, React Router, Framer Motion 기반 프론트엔드 개발.
- Supabase Auth, PostgreSQL, Row Level Security, Storage, Edge Functions, 데이터베이스 마이그레이션을 활용한 백엔드 구축.
- 덱/카드 CRUD, 낙관적 UI 업데이트, 학습 세션, 복습 히스토리, streak 추적, FSRS 기반 간격 반복 스케줄링 구현.
- 공개 덱 공유, import flow, 다국어 i18n, 공개 덱/컬렉션/토픽/가격 페이지의 SEO 프리렌더링 추가.
- Stripe Checkout, Billing Portal, webhooks, 구독 플랜, quotas, feature gates 통합.
- 일일 진행률, 복습 예정 카드, 최근 활동, 어려운 카드, 플랜별 고급 통계 페이지 추가.
- Vercel과 Supabase production 인프라로 배포하고 sitemap, robots.txt, 성능 모니터링 구성.`,
    },
    losthaven: {
      description: `상업 출시를 목표로 팀 프로젝트로 개발 중인 Godot 기반 싱글 플레이어 게임.
- 프로젝트 공동 창업 및 상업 출시 전략에 기여.
- 프로젝트 기술 아키텍처와 핵심 시스템 설계.
- Godot 기반 게임플레이 시스템과 게임 관련 웹 기능 개발.
- 공식 웹사이트와 관련 웹 서비스 유지보수.
- 프로젝트 관리, 기술 계획, 팀 조율에 참여.`,
    },
    "lightweight-rag-framework": {
      title: "Python RAG 프레임워크",
      description: `깔끔한 아키텍처, 강한 타입, 최소 의존성을 목표로 한 retrieval-augmented generation 애플리케이션용 경량 Python 프레임워크.
- 문서 로딩, deterministic chunking, retrieval, prompt 구성, 답변 생성을 위한 조합 가능한 primitives 구현.
- 로컬 hashing 및 n-gram hashing embeddings, in-memory/SQLite vector stores, metadata filtering, lexical reranking 추가.
- callable, OpenAI, Anthropic LLM 어댑터와 streaming responses, source citations, conversation history 구현.
- 파일 검사, 문서 chunking, retrieval workflow 테스트를 위한 로컬 CLI 추가.`,
    },
    "python-agent-runtime": {
      title: "Python Agent Runtime",
      description: `AI agent를 깔끔하고 예측 가능하게 실행하기 위한 경량 Python runtime.
- Agent, Runtime, PromptBuilder, ConversationHistory, Memory, ToolRegistry, ToolExecutor 핵심 추상화 구현.
- callback support, streaming responses, Pydantic 기반 설정, callable / OpenAI LLM 어댑터 추가.
- ingestion, embeddings, vector-store concerns를 중복하지 않고 python-rag-framework를 통한 optional retrieval 통합.
- 깔끔한 아키텍처, type-safe API, 실용적인 runtime behavior에 집중.`,
    },
    "python-doc-generator": {
      title: "Python 문서 생성기",
      description: `로컬 Python repository를 분석하고 유용한 Markdown documentation draft를 생성하는 CLI.
- repository scanning, light static analysis, RAG 기반 repository Q&A, agent-driven documentation generation 구현.
- README, architecture, API, diagrams, questions, roadmap, project summary 초안 생성.
- repository indexing에는 python-rag-framework, prompt execution/history/tools/RAG plumbing에는 python-agent-runtime 사용.
- dry-run, config file, section selection, Mermaid diagram generation, optional hosted LLM providers 지원.`,
    },
    "lem-in": {
      description: `개미들이 입구에서 출구까지 가능한 적은 턴으로 이동해야 하는 C 기반 pathfinding simulation.
- rooms, tunnels, special start/end commands에 대한 strict map parsing 구현.
- anthill을 graph로 모델링하고 BFS로 가장 짧은 viable path 탐색.
- 충돌을 피하고 총 턴 수를 최적화하기 위한 ant scheduling 구현.
- movement simulation을 위한 Python / Pygame visualizer 추가.`,
    },
    corewar: {
      description: `Champions라는 프로그램들이 공유 virtual machine memory 안에서 싸우는 컴퓨터 시뮬레이션 게임.
- Redcode source file을 binary champion file로 변환하는 assembler 구현.
- champion을 로드하고 실행하는 virtual machine 개발.
- command-line execution flow와 memory dump support 구현.
- simulation을 위한 bonus ncurses visualizer 추가.`,
    },
  },
}

export function getPortfolioData(locale: Locale): LocalizedPortfolio {
  return {
    locale,
    user: getLocalizedUser(locale),
    experiences: getLocalizedExperiences(locale),
    education: getLocalizedEducation(locale),
    projects: getLocalizedProjects(locale),
    techStack: getLocalizedTechStack(),
    messages: messages[locale] ?? messages[DEFAULT_LOCALE],
  }
}

export function getPortfolioMessages(locale: Locale): PortfolioMessages {
  return messages[locale] ?? messages[DEFAULT_LOCALE]
}

function getLocalizedUser(locale: Locale): User {
  return {
    ...USER,
    ...(userTranslations[locale] ?? {}),
  }
}

function getLocalizedExperiences(locale: Locale): Experience[] {
  const translations = experienceTranslations[locale] ?? {}

  return EXPERIENCES.map((experience) => {
    const translation = translations[experience.id]

    return {
      ...experience,
      ...translation,
      positions: experience.positions.map((position) => ({
        ...position,
        ...(translation?.positions?.[position.id] ?? {}),
      })),
    }
  })
}

function getLocalizedEducation(locale: Locale): Education[] {
  const translations = educationTranslations[locale] ?? {}

  return EDUCATION.map((item) => ({
    ...item,
    ...(translations[item.id] ?? {}),
  }))
}

function getLocalizedProjects(locale: Locale): Project[] {
  const translations = projectTranslations[locale] ?? {}

  return PROJECTS.map((project) => ({
    ...project,
    ...(translations[project.id] ?? {}),
  }))
}

function getLocalizedTechStack(): TechStack[] {
  return TECH_STACK
}
