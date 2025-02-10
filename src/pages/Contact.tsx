import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Stethoscope, Phone, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-transparent bg-clip-text">
            Contact Us 📋
          </h1>
          <p className="text-xl text-gray-600">
            Need help with our AI Progress Note Generator? We're here to assist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="gradient-border">
              <Card className="p-8 space-y-4">
                <Mail className="h-8 w-8 text-teal-500" />
                <h3 className="text-xl font-semibold">Email Us ✉️</h3>
                <p className="text-gray-600">contact@aiprogressnotegenerator.com</p>
              </Card>
            </div>

            <div className="gradient-border">
              <Card className="p-8 space-y-4">
                <Stethoscope className="h-8 w-8 text-teal-500" />
                <h3 className="text-xl font-semibold">Support Hours ⚡</h3>
                <p className="text-gray-600">Available 24/7 for your documentation needs</p>
              </Card>
            </div>

            <div className="gradient-border">
              <Card className="p-8 space-y-4">
                <Phone className="h-8 w-8 text-teal-500" />
                <h3 className="text-xl font-semibold">Clinical Support 📞</h3>
                <p className="text-gray-600">Documentation guidance available</p>
              </Card>
            </div>
          </div>

          <div className="gradient-border">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name 👤
                  </label>
                  <Input 
                    id="name" 
                    required 
                    className="h-12 border-2 focus:border-teal-400" 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email ✉️
                  </label>
                  <Input 
                    type="email" 
                    id="email" 
                    required 
                    className="h-12 border-2 focus:border-teal-400" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message 💭
                  </label>
                  <Textarea 
                    id="message" 
                    required 
                    className="min-h-[150px] border-2 focus:border-teal-400"
                    placeholder="Let us know how we can help with your documentation needs..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message 📋
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}