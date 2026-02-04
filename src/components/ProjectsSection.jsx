import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AGILITY – Agile Developer Productivity Platform",
    description:
      "VS Code–integrated code intelligence pipeline using AST-based function and module-level semantic chunking. RAG workflow with FAISS-embedded code chunks to ground LLM-based code review suggestions.",
    image: "/projects/project1.png",
    tags: ["VS Code", "Next.js", "FastAPI", "AST", "RAG", "LangChain", "FAISS"],
    demoUrl: null,
    githubUrl: "https://github.com/Prathameshworks247/AGILITY",
  },
  {
    id: 2,
    title: "DiagnosAI – AI-Powered Clinical Management System",
    description:
      "End-to-end clinical portal with real-time transcription, automated medical document ingestion, and AI-powered diagnosis. Multi-modal RAG with MongoDB patient context and FAISS-powered PDF search, JWT-based RBAC.",
    image: "/projects/project2.png",
    tags: ["React", "FastAPI", "MongoDB", "RAG", "FAISS", "Gemini", "Med42", "Sarvam STT", "LSTM"],
    demoUrl: "https://drive.google.com/file/d/1YwQbtY9xqeKUDBclJnBX5pRcBdu5sLtX/view?usp=sharing",
    githubUrl: "https://github.com/Prathameshworks247/DiagnosAI",
  },
  {
    id: 3,
    title: "MOODIT – Reddit-powered Sentiment Intelligence",
    description:
      "Sentiment analysis using RoBERTa and time-series forecasting to predict trends. RAG pipeline grounding Gemini-based analytical Q&A with embedded Reddit discussions and interactive dashboards.",
    image: "/projects/project3.png",
    tags: ["FastAPI", "React", "RoBERTa", "RAG", "Gemini API", "Time-Series"],
    demoUrl: "https://mooddit.vercel.app/",
    githubUrl: "https://github.com/Prathameshworks247/Mooddit",
  },
  {
    id: 4,
    title: "SheWanders",
    description:
      "Initiative to help women explore the world safely by connecting them with trusted travel companions. Fosters a supportive community for women travelers to share journeys.",
    image: null,
    tags: ["Python", "MERN"],
    demoUrl: null,
    githubUrl: "https://github.com/Prathameshworks247/SheWanders",
  },
  {
    id: 5,
    title: "Taskopolis",
    description:
      "Gamified to-do list app where every completed task helps you grow your own miniature city. Replaces traditional streaks and checkboxes with a city-building experience.",
    image: null,
    tags: ["TypeScript", "React", "Firebase"],
    demoUrl: null,
    githubUrl: "https://github.com/Prathameshworks247/Taskopolis",
  },
  {
    id: 6,
    title: "Cre8Hub",
    description:
      "AI platform for content creators: analyzes your style and tone, and auto-generates content tailored to give small creators the same creative advantages as top YouTubers.",
    image: null,
    tags: ["MERN","LangChain", "FastAPI", "MongoDB", "JWT", "RBAC"],
    demoUrl: "https://cre8-hub.vercel.app/",
    githubUrl: "https://github.com/Prathameshworks247/Cre8Hub",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {project.demoUrl && <ExternalLink size={20} />}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Prathameshworks247"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
