import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'editorial', name: 'Editorial' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'beauty', name: 'Beauty' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop',
      title: 'Haute Couture Collection',
      description: 'Paris Fashion Week 2024'
    },
    {
      id: 2,
      category: 'editorial',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
      title: 'Vogue Editorial',
      description: 'Modern Minimalism Series'
    },
    {
      id: 3,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop',
      title: 'Luxury Brand Campaign',
      description: 'International Beauty Brand'
    },
    {
      id: 4,
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=400&h=600&fit=crop',
      title: 'Beauty Portrait',
      description: 'Natural Glow Campaign'
    },
    {
      id: 5,
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop',
      title: 'Street Style',
      description: 'Urban Fashion Shoot'
    },
    {
      id: 6,
      category: 'editorial',
      image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=600&fit=crop',
      title: 'Art Direction',
      description: 'Creative Collaboration'
    },
    {
      id: 7,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop',
      title: 'Lifestyle Brand',
      description: 'Wellness Campaign'
    },
    {
      id: 8,
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=600&fit=crop',
      title: 'Cosmetics Line',
      description: 'Product Campaign'
    }
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