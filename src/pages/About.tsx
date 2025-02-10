import { Card } from "@/components/ui/card";
import { Stethoscope, Heart, Sparkles, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-transparent bg-clip-text">
            About Us 📋
          </h1>
          <p className="text-xl text-gray-600">
            Empowering healthcare providers with AI-powered progress note generation
          </p>
        </div>
        
        <div className="gradient-border mb-16">
          <div className="p-8 text-center">
            <p className="text-xl leading-relaxed text-gray-700">
              Welcome to AIProgressNoteGenerator.com, where we combine advanced AI technology
              with healthcare expertise to help you create comprehensive progress notes tailored to
              your clinical documentation needs. 📝
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-teal-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-teal-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Mission 🎯</h2>
              <p className="text-gray-600">
                Making clinical documentation effortless and professional by combining
                AI technology with healthcare expertise.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-teal-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-teal-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Values ❤️</h2>
              <p className="text-gray-600">
                We believe in making healthcare documentation efficient and accurate while
                maintaining the highest standards of patient care.
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-12 mb-16">
          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-teal-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">How It Works ⚡</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our AI-powered platform analyzes your input to generate
              professional progress notes. Each note follows the SOAP format
              and includes all necessary clinical documentation elements.
            </p>
          </section>

          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-teal-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Our Commitment 🤝</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're dedicated to supporting healthcare providers in creating efficient,
              accurate documentation. Our tool is continuously refined to ensure it
              generates professional, compliant progress notes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}