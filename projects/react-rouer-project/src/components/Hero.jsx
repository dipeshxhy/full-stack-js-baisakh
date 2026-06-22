const Hero = () => {
  return (
    <div class="hero py-20 min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="/hero.png" class="w-1/2 rounded-lg shadow-2xl" />
        <div className="w-1/2">
          <h1 class="md:text-5xl text-md font-bold">
            Find Jobs, Employment & Career Opportunities
          </h1>
          <p class="py-6">Find Jobs, Employment & Career Opportunities</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
