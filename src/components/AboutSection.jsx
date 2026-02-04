import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Backend & Full-Stack · AI Systems
            </h3>

            <p className="text-muted-foreground">
              I design and build backend services, APIs, and data pipelines—from
              FastAPI and Node/Express to MongoDB, PostgreSQL, and Supabase. I
              can ship full-stack applications with JWT/RBAC, validation, and
              scalable ingestion workflows so products run reliably end to end.
            </p>

            <p className="text-muted-foreground">
              On the AI side, I build RAG pipelines with LangChain and FAISS,
              chunking and embedding strategies, and LLM integrations for
              search, Q&A, and code intelligence. I can also implement ML models
              (TensorFlow, scikit-learn), vision architectures, and data quality
              and validation pipelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="public/prathamesh__.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend & Full-Stack</h4>
                  <p className="text-muted-foreground">
                    REST/GraphQL APIs (FastAPI, Node, Express), auth (JWT,
                    RBAC), databases (MongoDB, PostgreSQL, Supabase), and
                    frontends (React, Next.js). End-to-end apps from API to UI.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & RAG</h4>
                  <p className="text-muted-foreground">
                    RAG pipelines with LangChain and FAISS, chunking and
                    embeddings, and LLM integration for search, Q&A, and
                    code intelligence.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">ML & Data</h4>
                  <p className="text-muted-foreground">
                    ML models (TensorFlow, scikit-learn), vision (ResNet, ViT),
                    quantum ML (PennyLane), and data pipelines with validation
                    and quality checks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
