import { Camera, Palette, ShoppingBag, Star } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Fashion Modeling',
      description: 'High-fashion runway shows, designer campaigns, and luxury brand collaborations with international fashion houses.'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Editorial Work',
      description: 'Magazine spreads, artistic photography, and creative editorial projects for leading publications.'
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: 'Commercial Campaigns',
      description: 'Product launches, brand ambassadorships, and commercial advertising for lifestyle and beauty brands.'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Beauty & Cosmetics',
      description: 'Skincare campaigns, makeup artistry collaborations, and beauty product endorsements.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-wider mb-6">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional modeling services across multiple disciplines with a focus on quality and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 bg-background rounded-lg border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary text-primary-foreground rounded-full group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl mb-4 tracking-wide">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background p-8 rounded-lg border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl tracking-wide mb-4">Professional Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">50+</div>
                <div className="text-muted-foreground">Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">25+</div>
                <div className="text-muted-foreground">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">7+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}