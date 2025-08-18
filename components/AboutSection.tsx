import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AboutSection() {
  const stats = [
    { label: 'Height', value: '5\'2"' },
    { label: 'Bust', value: '32"' },
    { label: 'Waist', value: '26"' },
    { label: 'Hips', value: '35"' },
    { label: 'Shoe', value: 'IN 5' },
    { label: 'Hair', value: 'Black' },
    { label: 'Eyes', value: 'Hazel' }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl tracking-wider mb-6">About Sup</h2>
              <p className="text-lg leading-relaxed mb-6">
                With over 7 years of experience in the modeling industry, Sup Zan has worked 
                with prestigious brands and photographers in India. Her versatility and 
                professionalism have made her a sought-after talent in fashion and commercial modeling.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Based in West Bengal, Sup brings a unique blend of sophistication and 
                natural beauty to every project. She specializes in high-fashion editorial work, 
                commercial campaigns, and artistic collaborations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl tracking-wide mb-6">Measurements</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-background rounded-lg border border-border">
                    <div className="text-sm text-muted-foreground mb-1 tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-lg">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src="/images/vitals.jpg"
                alt="Sup Zan - About Portrait"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}