import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Copy, Coffee, Check, Sparkles, Stethoscope, ClipboardList } from 'lucide-react';
import { genAI } from '@/lib/gemini';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SupportBox = () => (
  <Card className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 border-2 border-neutral-200 mb-8">
    <div className="text-center space-y-4">
      <Coffee className="h-12 w-12 mx-auto text-teal-500" />
      <h2 className="text-2xl font-bold">Support Our Work ❤️</h2>
      <p className="text-neutral-600 max-w-xl mx-auto">
        Help us maintain and improve our AI tools by supporting our API & hosting costs. 
        Your contribution helps keep this tool free for healthcare providers worldwide! 🙏
      </p>
      <a
        href="https://roihacks.gumroad.com/coffee"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button 
          size="lg" 
          className="text-lg px-8 bg-teal-500 hover:bg-teal-600 text-white"
        >
          <Coffee className="mr-2 h-5 w-5" />
          Buy Us a Coffee ☕
        </Button>
      </a>
    </div>
  </Card>
);

export default function Home() {
  const [context, setContext] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateNote = async () => {
    if (!context.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      if (!genAI) {
        throw new Error("API key not configured. Please add your Gemini API key to continue.");
      }
      
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Generate a professional progress note based on this input: ${context}. 
      Follow these requirements:
      - Use standard SOAP format (Subjective, Objective, Assessment, Plan)
      - Include relevant clinical observations
      - Maintain professional medical terminology
      - Focus on patient progress and current status
      - Include treatment recommendations
      - Note any changes in condition
      - Document any medications or interventions
      - Include follow-up plans
      - Add any relevant warnings or precautions
      - Maintain HIPAA-compliant language
      The note should be professional, comprehensive, and clinically appropriate.`;
      
      const result = await model.generateContent(prompt);
      setNote(result.response.text().trim());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while generating the progress note');
      setNote('');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(note);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 py-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-neutral-800 leading-tight">
            AI Progress Note Generator 📋
          </h1>
          <p className="text-xl text-neutral-600">
            Create professional progress notes with the power of AI ⚡
          </p>
        </div>
        
        <div className="gradient-border mb-8">
          <div className="p-4 sm:p-8">
            <div className="space-y-6">
              <Textarea
                placeholder="✍️ Describe the patient encounter (symptoms, observations, treatments, progress)..."
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className="min-h-[200px] text-lg border-2 focus:border-neutral-400"
              />
              
              <Button 
                onClick={generateNote}
                disabled={loading || !context.trim()}
                className="w-full text-lg py-6 bg-teal-600 hover:bg-teal-700 text-white"
              >
                {loading ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Creating Your Progress Note...
                  </>
                ) : (
                  <>
                    <Stethoscope className="mr-2 h-5 w-5" />
                    Generate Progress Note 📝
                  </>
                )}
              </Button>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {note && (
          <div className="space-y-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-neutral-200">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Your Progress Note</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 hover:bg-neutral-50"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-teal-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {note}
                  </ReactMarkdown>
                </div>
              </div>
            </Card>
          </div>
        )}

        <SupportBox />

        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl shadow-xl p-8 mb-16">
          <article className="prose prose-neutral max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-neutral-800">
              AI Progress Note Generator: Your Documentation Assistant 📋
            </h2>
            
            <div className="space-y-8">
              <p className="text-neutral-600 leading-relaxed">
                Transform your clinical documentation with our AI Progress Note Generator. 
                At AIProgressNoteGenerator.com, we've revolutionized medical documentation 
                by combining cutting-edge AI technology with healthcare expertise. Our AI-powered 
                tool helps thousands of healthcare providers create comprehensive progress notes 
                efficiently and professionally.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <ClipboardList className="h-6 w-6 text-neutral-600" />
                  Why Choose Our AI Progress Note Generator? 📝
                </h2>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2">🎯</span>
                    <span>Smart AI-powered note customization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📝</span>
                    <span>SOAP format compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⚡</span>
                    <span>Instant note creation for any specialty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔍</span>
                    <span>Professional medical terminology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🛡️</span>
                    <span>HIPAA-compliant language</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Stethoscope className="h-6 w-6 text-neutral-600" />
                  AI Progress Note Features ⚡
                </h2>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Comprehensive SOAP format</li>
                  <li>• Smart medical terminology</li>
                  <li>• Treatment plan generation</li>
                  <li>• Follow-up recommendations</li>
                  <li>• Clinical assessment support</li>
                  <li>• Progress tracking</li>
                  <li>• Documentation compliance</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  AI Progress Notes for Everyone 🎯
                </h2>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Primary Care Physicians</li>
                  <li>• Mental Health Professionals</li>
                  <li>• Physical Therapists</li>
                  <li>• Occupational Therapists</li>
                  <li>• Nurse Practitioners</li>
                  <li>• Clinical Social Workers</li>
                  <li>• Healthcare Specialists</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  AI-Powered Quality Standards ⚡
                </h2>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Professional medical terminology</li>
                  <li>• HIPAA compliance</li>
                  <li>• Clinical accuracy</li>
                  <li>• Documentation standards</li>
                  <li>• Treatment tracking</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Clinical Documentation Best Practices 💡
                </h2>
                <ol className="list-decimal pl-5 space-y-2 text-neutral-600">
                  <li>Review your AI-generated progress note thoroughly</li>
                  <li>Verify all clinical information</li>
                  <li>Customize to your specific needs</li>
                  <li>Maintain patient confidentiality</li>
                  <li>Follow documentation guidelines</li>
                </ol>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Benefits of AI Progress Note Generation 🚀
                </h2>
                <p className="text-neutral-600">
                  Our advanced AI progress note generator provides:
                </p>
                <ul className="mt-4 space-y-2 text-neutral-600">
                  <li>• Time-saving documentation</li>
                  <li>• Professional formatting</li>
                  <li>• Comprehensive coverage</li>
                  <li>• Clinical accuracy</li>
                  <li>• Compliance support</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <SupportBox />
      </div>
    </div>
  );
}