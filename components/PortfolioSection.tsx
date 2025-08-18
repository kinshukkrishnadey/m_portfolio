import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'editorial', name: 'Editorial' },
    { id: 'ethnic', name: 'Ethnic' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'fashion',
      image: '/images/IMG-20250815-WA0004.jpg',
      title: 'Haute Couture Collection',
      description: 'Paris Fashion Week 2024'
    },
    {
      id: 2,
      category: 'editorial',
      image: '/images/about-9.jpg',
      title: 'Vogue Editorial',
      description: 'Modern Minimalism Series'
    },
    {
      id: 3,
      category: 'fashion',
      image: '/images/IMG-20250815-WA0005.jpg',
      title: 'Luxury Brand Campaign',
      description: 'International Beauty Brand'
    },
    {
      id: 4,
      category: 'ethnic',
      image: '/images/IMG-20201130-WA0051.jpg',
      title: 'Beauty Portrait',
      description: 'Natural Glow Campaign'
    },
    {
      id: 5,
      category: 'editorial',
      image: '/images/about.jpg',
      title: 'Art Direction',
      description: 'Creative Collaboration'
    },
    {
      id: 6,
      category: 'fashion',
      image: '/images/IMG-20250815-WA0007.jpg',
      title: 'Lifestyle Brand',
      description: 'Wellness Campaign'
    },
    {
      id: 7,
      category: 'ethnic',
      image: '/images/portfolio-1.jpg',
      title: 'Cosmetics Line',
      description: 'Product Campaign'
    },
    {
      id: 8,
      category: 'fashion',
      image: '/images/portfolio-2.jpg',
      title: 'Cosmetics Line',
      description: 'Product Campaign'
    },
    {
      id: 9,
      category: 'fashion',
      image: '/images/portfolio-3.jpg',
      title: 'Cosmetics Line',
      description: 'Product Campaign'
    },
    {
      id: 10,
      category: 'fashion',
      image: '/images/portfolio-4.jpg',
      title: 'Cosmetics Line',
      description: 'Product Campaign'
    },
    {
      id: 11,
      category: 'editorial',
      image: '/images/portfolio-6.jpg',
      title: 'Cosmetics Line',
      description: 'Product Campaign'
    },
    
    
    
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-wider mb-6">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my professional modeling work across various genres and campaigns.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="tracking-wide"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-background border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}