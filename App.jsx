import React, { useState, useEffect } from 'react';
import { 
  ChefHat, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  UtensilsCrossed, 
  Camera, 
  TrendingUp,
  Search,
  CheckCircle2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// --- Mock Data ---
const AGENCIES = [
  {
    id: 1,
    name: "The Alchemists",
    specialty: "High-End Fine Dining Branding",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1550966841-3ee32289668e?auto=format&fit=crop&q=80&w=200",
    tags: ["Visual Identity", "Menu Design"]
  },
  {
    id: 2,
    name: "Metric Move",
    specialty: "Performance Marketing for D2C Brands",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200",
    tags: ["Ad Strategy", "SEO"]
  },
  {
    id: 3,
    name: "Plate & Palette",
    specialty: "Social Media & Food Photography",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1542034825-75117aded8b3?auto=format&fit=crop&q=80&w=200",
    tags: ["Reels", "Content Production"]
  }
];

export default function App() {
  const [view, setView] = useState('landing'); // 'landing', 'architect', 'results'
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    niche: '',
    goal: '',
    vibe: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const startArchitect = () => setView('architect');
  
  const finishArchitect = () => {
    setView('loading');
    setTimeout(() => setView('results'), 2000);
  };

  // --- Components ---

  const Header = () => (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
          <div className="bg-emerald-600 p-1.5 rounded-lg">
            <ChefHat className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Briefly</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-emerald-600 transition-colors">How it works</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Agencies</a>
          <button 
            onClick={startArchitect}
            className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm"
          >
            Build a Brief
          </button>
        </nav>
      </div>
    </header>
  );

  const LandingView = () => (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 text-center py-20">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>The Future of Culinary Branding</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Precision in every <span className="text-emerald-600">partnership.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          The first AI-powered platform connecting Chefs and Food Founders with specialized agencies to build world-class digital brands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={startArchitect}
            className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-700 hover:shadow-xl transition-all"
          >
            Start My Brief Architect
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center gap-2 border border-slate-200 bg-white text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:border-slate-400 transition-all">
            View Agencies
          </button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-slate-50 py-20 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Briefing</h3>
            <p className="text-slate-500">Stop guessing. Our AI extracts your culinary vision and builds a professional project scope in minutes.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Vetted Network</h3>
            <p className="text-slate-500">Access a curated pool of marketing agencies that specifically understand food, flavor, and culinary trends.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Seamless Growth</h3>
            <p className="text-slate-500">From milestone-based payments to project management, we keep your collaboration on track.</p>
          </div>
        </div>
      </section>
    </div>
  );

  const ArchitectView = () => (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 flex items-center">
      <div className="max-w-2xl mx-auto px-4 w-full">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Progress Bar */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-2 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-emerald-500' : 'bg-slate-100'}`} />
            ))}
          </div>

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Tell us about your brand</h2>
              <p className="text-slate-500 mb-8">Let's start with the basics of your culinary mission.</p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">What is your Brand Name?</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Chef Kanishk's Table"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">What is your culinary niche?</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                    onChange={(e) => setFormData({...formData, niche: e.target.value})}
                  >
                    <option>Select Niche</option>
                    <option>Modern Indian Fine Dining</option>
                    <option>Plant-Based Fast Casual</option>
                    <option>Artisanal Bakery & Patisserie</option>
                    <option>D2C Sauce/Spice Brand</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Define your goal</h2>
              <p className="text-slate-500 mb-8">What do you want to achieve with this partnership?</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: 'visual', label: 'Visual Identity', icon: <Camera className="w-5 h-5"/> },
                  { id: 'social', label: 'Social Growth', icon: <TrendingUp className="w-5 h-5"/> },
                  { id: 'launch', label: 'Product Launch', icon: <UtensilsCrossed className="w-5 h-5"/> },
                  { id: 'strategy', label: 'General Strategy', icon: <Search className="w-5 h-5"/> },
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => setFormData({...formData, goal: item.id})}
                    className={`p-6 rounded-2xl border-2 text-left transition-all ${formData.goal === item.id ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-100 hover:border-slate-300'}`}
                  >
                    <div className="mb-3">{item.icon}</div>
                    <div className="font-bold">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Final Polish</h2>
              <p className="text-slate-500 mb-8">One last thing: What is the "Vibe" of your brand?</p>
              <div className="space-y-4">
                {['Minimalist & Premium', 'Rustic & Homegrown', 'Bold & Futuristic', 'Elegant & Traditional'].map((v) => (
                  <button 
                    key={v}
                    onClick={() => setFormData({...formData, vibe: v})}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${formData.vibe === v ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{v}</span>
                      {formData.vibe === v && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-12">
            {step > 1 ? (
              <button onClick={prevStep} className="flex items-center gap-2 text-slate-600 font-bold">
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
            ) : <div />}
            
            {step < 3 ? (
              <button 
                onClick={nextStep}
                disabled={!formData.name && step === 1}
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50"
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={finishArchitect}
                className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2"
              >
                Generate Brief <Sparkles className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const LoadingView = () => (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="w-20 h-20 border-4 border-slate-100 border-t-emerald-600 rounded-full animate-spin mb-6" />
      <h2 className="text-2xl font-bold text-slate-900">Briefly Architect is building...</h2>
      <p className="text-slate-500">Analyzing culinary trends and agency portfolios...</p>
    </div>
  );

  const ResultsView = () => (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Brief Preview Card */}
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 sticky top-24">
              <div className="bg-emerald-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Your Project Brief</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <label className="text-slate-400 font-medium">Brand</label>
                  <p className="font-bold text-slate-900">{formData.name || 'Chef Artisan'}</p>
                </div>
                <div>
                  <label className="text-slate-400 font-medium">Niche</label>
                  <p className="font-bold text-slate-900">{formData.niche || 'Fine Dining'}</p>
                </div>
                <div>
                  <label className="text-slate-400 font-medium">Strategy</label>
                  <p className="font-bold text-slate-900">{formData.vibe || 'Minimalist & Premium'}</p>
                </div>
              </div>
              <button className="w-full mt-6 py-3 border-2 border-slate-900 rounded-xl font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                Download PDF Brief
              </button>
            </div>
          </div>

          {/* Agency Recommendations */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Recommended Agencies</h2>
            <div className="space-y-6">
              {AGENCIES.map(agency => (
                <div key={agency.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
                  <div className="flex gap-6">
                    <img src={agency.image} className="w-24 h-24 rounded-2xl object-cover" alt={agency.name} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">{agency.name}</h4>
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <Sparkles className="w-4 h-4 fill-amber-500" />
                          {agency.rating}
                        </div>
                      </div>
                      <p className="text-slate-600 mb-4">{agency.specialty}</p>
                      <div className="flex gap-2 flex-wrap">
                        {agency.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-emerald-600 font-bold text-sm">Best match for your "Vibe"</span>
                    <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-slate-800 transition-all">
                      Connect via Briefly
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      {view === 'landing' && <LandingView />}
      {view === 'architect' && <ArchitectView />}
      {view === 'loading' && <LoadingView />}
      {view === 'results' && <ResultsView />}
    </div>
  );
}
