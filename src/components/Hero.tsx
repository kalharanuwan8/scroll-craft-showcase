import profileImage from '@/assets/me.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-100 h-100 md:w-80 md:h-80 rounded-full mx-auto shadow-glow animate-float object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to My{' '}
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm a passionate developer creating innovative digital experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-smooth"
            >
              Learn More
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;