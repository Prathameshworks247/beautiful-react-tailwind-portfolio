import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Python", category: "languages" },
  { name: "JavaScript/TypeScript", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "FastAPI", category: "backend" },
  { name: "Node.js / Express", category: "backend" },
  { name: "RAG / LangChain", category: "ml" },
  { name: "FAISS", category: "ml" },
  { name: "TensorFlow / scikit-learn", category: "ml" },
  { name: "Gemini API / HuggingFace", category: "ml" },
  { name: "PennyLane (Quantum)", category: "ml" },
  { name: "Docker / Kubernetes", category: "tools" },
  { name: "Kafka / Redis / Git / CI/CD", category: "tools" },
  { name: "MongoDB / PostgreSQL", category: "tools" },
];

const categories = ["all", "languages", "frontend", "backend", "ml", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {filteredSkills.map((skill, key) => (
            <span
              key={key}
              className={cn(
                "inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium",
                "border border-primary/30 bg-card/80 backdrop-blur-sm",
                "hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20",
                "transition-all duration-300 hover:scale-105",
                "cursor-default"
              )}
              >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
