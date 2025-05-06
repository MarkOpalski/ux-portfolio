import ProjectCard from "./ProjectCard";

const Work = () => {
  const projects = [
    {
      title: "Benchmark Analysis & Modeling",
      client: "Gartner",
      description:
        "Lead the redesign of the benchmark tools UX to help business leaders compare critical performance data against the competition.",
      metrics: [
        { label: "Reduction in Analysis Time", value: "45%" },
        { label: "Increase User Adoption", value: "3.2x" },
      ],
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/case-study/gartner-benchmarks",
    },
    {
      title: "Interactive Hype Cycle",
      client: "Gartner",
      description:
        "Created an interactive version of Gartner's famous Hype Cycle to improve user engagement and insight delivery.",
      metrics: [
        { label: "Engagement Increase", value: "37%" },
        { label: "User Satisfaction", value: "4.8/5" },
      ],
      image:
        "https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/case-study/hype-cycle",
    },
    {
      title: "Decision Matrices Redesign",
      client: "Lockheed Martin",
      description:
        "Redesigned critical decision matrices using cognitive load analysis for improved operator performance.",
      metrics: [
        { label: "Error Reduction", value: "37%" },
        { label: "Decision Speed", value: "+42%" },
      ],
      image:
        "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/case-study/decision-matrices",
    },
  ];

  return (
    <section id="work" className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 relative max-w-4xl mx-auto">
          <span className="text-[#4ECDC4]">/</span> Selected Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              client={project.client}
              description={project.description}
              metrics={project.metrics}
              image={project.image}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
