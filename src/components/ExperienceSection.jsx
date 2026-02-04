import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Hindustan Aeronautics Limited (HAL)",
    role: "AI Engineer Intern",
    location: "Bengaluru",
    period: "Summer 2025",
    bullets: [
      "Built a RAG-based Snag Rectification System (LangChain + FAISS) on 18,000+ historical records, achieving 90% retrieval accuracy",
      "Developed a secure MERN interface with JWT-based RBAC, reducing manual troubleshooting time by 60%",
      "Implemented metadata-aware chunking and vector indexing to minimize LLM hallucinations",
    ],
  },
  {
    id: 2,
    company: "Kleanify",
    role: "AI Automation Intern",
    location: "Remote",
    period: "Sep–Oct 2025",
    bullets: [
      "Built a scalable CSV ingestion pipeline (n8n, FastAPI, Supabase) handling 3+ weekly data sources",
      "Developed a React-based data mapping UI, reducing manual data preparation time by 88% (4+ hrs → 30 mins/week)",
      "Engineered staging workflows with fuzzy matching and validation rules, achieving 95%+ data quality",
    ],
  },
  {
    id: 3,
    company: "IIIT Dharwad",
    role: "Undergraduate Research Fellow",
    location: "Dharwad",
    period: "Jan 2025 – Present",
    bullets: [
      "Researching a hybrid architecture combining ResNet-50, Vision Transformer, and Quantum Neural Networks (PennyLane) for cyclone intensity estimation from multispectral satellite imagery",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Internships and research roles where I've built RAG systems, data
          pipelines, and hybrid ML architectures.
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="gradient-border p-6 md:p-8 rounded-lg card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground shrink-0">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <ul className="space-y-2 pl-4 list-disc text-muted-foreground">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
