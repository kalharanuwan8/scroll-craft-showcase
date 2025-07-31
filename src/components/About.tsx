import aboutImage from '@/assets/about-workspace.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated software developer with a passion for creating innovative digital solutions. 
                My journey in technology began during my university years, where I discovered the power of 
                code to solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in full-stack development, with expertise in modern frameworks like React, 
                Node.js, and cloud technologies. I believe in writing clean, maintainable code and 
                creating user experiences that make a difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-first md:order-last">
              <img
                src={aboutImage}
                alt="Developer workspace"
                className="rounded-lg shadow-soft w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;