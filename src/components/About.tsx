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
                I'm a passionate and driven Software Engineering undergraduate with hands-on experience in building scalable and impactful digital solutions. My journey in software development began during university, where I quickly realized how powerful technology can be in addressing real-world challenges.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past few years, I’ve worked on diverse projects that span across front-end and back-end development, sharpening my skills in frameworks like React, Node.js, and modern cloud platforms. I’m particularly drawn to creating seamless, user-centric applications backed by clean, efficient, and maintainable code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond the classroom, I actively seek out new opportunities to grow—whether it’s through internships, personal projects, or contributions to open-source software. I'm deeply enthusiastic about staying at the forefront of technology and continuously learning from the vibrant developer community around me.
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