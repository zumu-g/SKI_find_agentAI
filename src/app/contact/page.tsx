import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Kova team. We are here to help homeowners and estate agents.',
};

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@kova.ai', href: 'mailto:hello@kova.ai' },
  { icon: Phone, label: 'Phone', value: '0800 123 4567', href: 'tel:08001234567' },
  { icon: MapPin, label: 'Address', value: '71 Rivington Street, London, EC2A 3AY', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri, 9am - 6pm', href: '#' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-dark pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Get in touch</h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto font-normal">
              Have a question about our service? Whether you&apos;re a homeowner or an agent, we&apos;re here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="text-2xl font-bold text-text mb-6">Send us a message</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Name</label>
                      <input type="text" className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Email</label>
                      <input type="email" className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Subject</label>
                    <select className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage text-text bg-white">
                      <option value="">Select a subject</option>
                      <option value="seller">I&apos;m a homeowner with a question</option>
                      <option value="agent">I&apos;m an agent interested in joining</option>
                      <option value="support">Technical support</option>
                      <option value="press">Press enquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage resize-none" placeholder="How can we help?" />
                  </div>
                  <Button className="w-full sm:w-auto" size="lg">Send Message <ArrowRight size={18} /></Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-card p-8">
                  <h3 className="text-lg font-bold text-text mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-sage-50 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-sage" />
                        </div>
                        <div>
                          <div className="text-xs text-text-tertiary uppercase tracking-wider mb-0.5">{label}</div>
                          {href !== '#' ? (
                            <a href={href} className="text-sm text-text hover:text-sage transition-colors">{value}</a>
                          ) : (
                            <span className="text-sm text-text">{value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-sage-50 rounded-2xl p-8 border border-sage/10">
                  <h3 className="text-lg font-bold text-text mb-2">Are you an estate agent?</h3>
                  <p className="text-sm text-text-secondary font-normal mb-4">
                    Interested in joining Kova and receiving qualified leads? Visit our dedicated agent page.
                  </p>
                  <Button href="/for-agents" variant="secondary" size="sm">
                    Learn About Joining <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
