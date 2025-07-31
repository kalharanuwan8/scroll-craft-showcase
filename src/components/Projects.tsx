import project2ndYear from '@/assets/project-2nd-year.jpg';
import projectFinalYear from '@/assets/project-final-year.jpg';

const Projects = () => {
  const projects = [
    {
      id: 'second-year',
      title: 'Analytics Dashboard Platform',
      description: 'A comprehensive web application built during my second year that provides real-time analytics and data visualization. Features include interactive charts, user management, and responsive design.',
      image: project2ndYear,
      technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
      githubLink: '#',
      demoLink: '#',
    },
    {
      id: 'final-year',
      title: 'Smart Commerce Mobile App',
      description: 'My final year project - a sophisticated e-commerce mobile application with AI-powered recommendations, real-time chat support, and seamless payment integration.',
      image: projectFinalYear,
      technologies: ['React Native', 'Firebase', 'Python', 'TensorFlow'],
      githubLink: '#',
      demoLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="card-gradient rounded-lg p-8 shadow-soft">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.githubLink}
                        className="px-6 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        View Code
                      </a>
                      <a
                        href={project.demoLink}
                        className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-smooth"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-soft w-full h-[400px] object-cover hover:shadow-glow transition-smooth"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;