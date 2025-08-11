import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=1600&fit=crop&crop=face"
          alt="Sup Zan - Professional Model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl tracking-wider mb-6">Sup Zan</h1>
        <p className="text-xl md:text-2xl mb-8 tracking-wide opacity-90">
          Professional Model & Creative Artist
        </p>
        <p className="text-lg mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">
          Bringing elegance and sophistication to every shoot. 
          Specializing in fashion, editorial, and commercial modeling.
        </p>
        <div className="space-x-4">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <a href="#portfolio">View Portfolio</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}