type SkillCategory = "blockchain" | "frontend" | "backend" | "tools";

interface Skill {
  name: string;
  category: SkillCategory;
}

const skillStyles: Record<SkillCategory, string> = {
  blockchain: "bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30",
  frontend: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30",
  backend: "bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30",
  tools: "bg-slate-500/20 text-slate-300 border border-slate-500/30 hover:bg-slate-500/30",
};

export default function Home() {
  const skills: Skill[] = [
    { name: "Ethereum", category: "blockchain" },
    { name: "Solana", category: "blockchain" },
    { name: "Hyperledger", category: "blockchain" },
    { name: "Smart Contracts", category: "blockchain" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Rust", category: "backend" },
    { name: "Web3.js", category: "tools" },
    { name: "Hardhat", category: "tools" },
    { name: "Foundry", category: "tools" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold">
                KT
              </div>
            </div>
            <div className="absolute -bottom-2 right-1/2 translate-x-1/2 bg-green-500 text-xs px-3 py-1 rounded-full font-medium">
              Available for work
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            Kyros Tsourdinis
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
            <span className="text-purple-400">Blockchain</span> &{" "}
            <span className="text-cyan-400">Full-Stack</span> Developer
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Building the decentralized future with cutting-edge blockchain solutions.
            Specialized in Ethereum, Solana, and Hyperledger ecosystems with a passion
            for creating secure, scalable, and user-friendly Web3 applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="mailto:contact@example.com"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
            >
              Get in Touch
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#skills"
              className="px-8 py-4 border border-slate-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-slate-800 hover:border-slate-500"
            >
              View My Skills
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default ${skillStyles[skill.category]}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ktsourdi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-xl border border-slate-700 transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600 hover:scale-105"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-xl border border-slate-700 transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600 hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-xl border border-slate-700 transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600 hover:scale-105"
              aria-label="Twitter/X Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="font-medium">X</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Kyros Tsourdinis. Built with Next.js & Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
}
