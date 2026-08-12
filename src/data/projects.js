const projects = [
  {
    id: "zerodha-clone",

    title: "Zerodha Clone",

    description:
      "A full-stack trading platform inspired by Zerodha, featuring simulated order placement, watchlists, holdings, and portfolio management.",

    image: "../public/zerodha-prev.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],

    github: "https://github.com/rajvircodes/zerodha-clone",

    live: "https://zerodha-clone-two-phi.vercel.app/",

    details: {
      problem:
        "Understanding how trading platforms structure watchlists, simulated order workflows, holdings, and portfolio data while keeping the frontend and backend synchronized.",

      solution:
        "Built a full-stack MERN application inspired by Zerodha that implements simulated trading workflows, watchlists, order placement, holdings, and portfolio management.",

      features: [
        "Interactive stock watchlists with simulated market data",
        "Buy and sell order placement with portfolio updates",
        "Holdings and portfolio balance management",
        "User authentication and session management",
        "Responsive trading dashboard",
      ],

      challenges: [
        "Designing database models for users, orders, holdings, and portfolio data",
        "Maintaining accurate portfolio calculations after simulated trades",
        "Synchronizing frontend state with backend trading operations",
      ],

      learning:
        "Strengthened my understanding of full-stack MERN architecture, business logic, state synchronization, database modeling, and building complex dashboard workflows.",
    },
  },

  {
    id: "filmio",

    title: "filmIO",

    description:
      "A movie discovery application powered by the TMDB API, featuring search, trending titles, genre filtering, detailed movie information, and trailer previews.",

    image: "../public/filmio-prev.png",

    technologies: ["React", "TMDB API", "JavaScript", "Tailwind CSS"],

    github: "https://github.com/rajvircodes/movie-app-react",

    live: "https://movie-app-react-opal-two.vercel.app/",

    details: {
      problem:
        "Creating a fast and responsive movie discovery experience capable of browsing a large media catalog while keeping search and filtering interactions smooth.",

      solution:
        "Built a React application that integrates the TMDB REST API with asynchronous data fetching, debounced search, genre filtering, and detailed movie views.",

      features: [
        "Movie and TV series search with debouncing",
        "Trending and top-rated content",
        "Genre-based catalog filtering",
        "Detailed movie pages with cast and ratings",
        "Trailer previews",
        "Responsive movie grid optimized for mobile",
      ],

      challenges: [
        "Optimizing API requests to avoid unnecessary calls and re-renders",
        "Handling missing poster images and incomplete API data",
        "Managing asynchronous API states across different views",
      ],

      learning:
        "Improved my understanding of third-party REST API integration, asynchronous state management, debounced search, error handling, and component-based React architecture.",
    },
  },

  {
    id: "ai-code-reviewer",

    title: "AI Code Reviewer",

    description:
      "An AI-powered developer tool that reviews submitted code, identifies potential issues, and provides structured suggestions for improving code quality and performance.",

    image: "../public/code-review-prev.png",

    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Gemini API"],

    github: "https://github.com/rajvircodes/AI-code-reviewer",

    live: "https://ai-code-reviewer-sooty-ten.vercel.app/",

    details: {
      problem:
        "Developers can spend significant time manually reviewing code for potential bugs, maintainability issues, and opportunities for improvement.",

      solution:
        "Built a MERN application integrated with the Google Gemini API that analyzes submitted code and generates structured AI-powered review feedback.",

      features: [
        "AI-powered code review and issue detection",
        "Code improvement and refactoring suggestions",
        "Syntax-highlighted code editor",
        "Structured Markdown review output",
        "Review history for authenticated users",
      ],

      challenges: [
        "Designing prompts that produce consistent and useful review responses",
        "Handling different programming languages and code formats",
        "Rendering AI-generated Markdown and code blocks reliably",
      ],

      learning:
        "Gained practical experience integrating generative AI APIs into a full-stack application, designing effective prompts, handling AI-generated content, and building developer-focused tools.",
    },
  },
];

export default projects;
