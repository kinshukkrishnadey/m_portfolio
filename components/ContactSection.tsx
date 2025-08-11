import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'elena@elenarose.com',
      href: 'mailto:elena@elenarose.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'New York City, NY',
      href: null
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
      value: '@elenarose_model',
      href: 'https://instagram.com/elenarose_model'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-wider mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl tracking-wide mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2">Name *</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2">Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block mb-2">Company/Agency</label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full tracking-wide">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl tracking-wide mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-primary transition-colors duration-200"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="text-lg tracking-wide mb-4">Management</h4>
              <p className="text-muted-foreground mb-4">
                For booking inquiries and professional representation:
              </p>
              <div className="space-y-2">
                <p><strong>Agency:</strong> Elite Model Management</p>
                <p><strong>Agent:</strong> Sarah Johnson</p>
                <p><strong>Email:</strong> bookings@elitemodels.com</p>
                <p><strong>Phone:</strong> +1 (555) 987-6543</p>
              </div>
            </div> */}

            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="text-lg tracking-wide mb-4">Availability</h4>
              <p className="text-muted-foreground mb-4">
                Currently available for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Fashion campaigns and editorials</li>
                <li>Commercial advertising projects</li>
                <li>Beauty and lifestyle shoots</li>
                <li>International travel assignments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}