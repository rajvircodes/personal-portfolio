const projects = [
  {
    id: "devflow-api",
    title: "DevFlow API",
    description:
      "A production-focused backend API built with TypeScript, PostgreSQL and Prisma.",
    image:
      "https://i.pinimg.com/736x/ab/a6/a5/aba6a5eb45ce6507e58a13f7902383d2.jpg",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    github: "https://github.com/rajvircodes/devflow-api",
    live: "https://api.devflow-dummy.io/v1/health",
    details: {
      problem:
        "Building a structured backend project to practice production-oriented API development and scalable architecture.",
      solution:
        "Designed a REST API using TypeScript, Express.js, PostgreSQL and Prisma with a modular backend architecture.",
      features: [
        "REST API architecture",
        "User authentication",
        "Database integration",
        "Request validation",
      ],
      challenges: [
        "Designing a maintainable backend structure",
        "Working with Prisma and PostgreSQL",
        "Managing authentication and protected routes",
      ],
      learning:
        "This project helped strengthen my understanding of TypeScript, relational databases, Prisma and backend architecture.",
    },
  },
  {
    id: "pulse-metrics-dashboard",
    title: "Pulse Metrics Dashboard",
    description:
      "A real-time analytics dashboard monitoring server health, microservice latency, and system events.",
    image:
      "https://i.pinimg.com/736x/e7/6c/80/e76c802616f3488b82dbb4c943a007c5.jpg",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Chart.js",
      "WebSockets",
    ],
    github: "https://github.com/rajvircodes/pulse-metrics",
    live: "https://pulse-metrics-dummy.vercel.app",
    details: {
      problem:
        "DevOps teams lack unified, low-latency visibility into distributed system metrics and error logs.",
      solution:
        "Developed a responsive frontend dashboard powered by WebSocket streams for real-time visualization of key performance indicators.",
      features: [
        "Live WebSocket streaming charts",
        "Customizable widget drag-and-drop layout",
        "Dark/Light theme toggle",
        "Exportable PDF report generation",
      ],
      challenges: [
        "Preventing UI lag during high-frequency data updates",
        "Managing dynamic client-side layout states",
        "Handling sudden WebSocket disconnects gracefully",
      ],
      learning:
        "Gained deep experience in state management optimizations, WebSocket connection lifecycle, and data visualization libraries.",
    },
  },
  {
    id: "nexus-e-commerce",
    title: "Nexus E-Commerce Platform",
    description:
      "A full-stack e-commerce store featuring dynamic inventory management, secure payments, and order tracking.",
    image:
      "https://i.pinimg.com/736x/e2/06/96/e2069654422aa0e331666e148015bba6.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe API",
      "Tailwind CSS",
      "MongoDB",
    ],
    github: "https://github.com/rajvircodes/nexus-shop",
    live: "https://nexus-shop-dummy.vercel.app",
    details: {
      problem:
        "Small businesses struggle with slow checkout pipelines and complex multi-vendor product listings.",
      solution:
        "Built a server-side rendered store with seamless Stripe integration and an intuitive admin panel for product updates.",
      features: [
        "Stripe checkout integration",
        "Server-Side Rendering (SSR) for SEO",
        "Cart persistence using LocalStorage & Cookies",
        "Admin panel for product CRUD operations",
      ],
      challenges: [
        "Synchronizing frontend cart state with real-time stock levels",
        "Securing webhook endpoints for asynchronous payment verification",
      ],
      learning:
        "Mastered serverless database queries, Webhook handling with payment gateways, and Next.js App Router patterns.",
    },
  },
];

export default projects;
