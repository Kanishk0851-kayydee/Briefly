"use client";
import React, { useState } from 'react';
import { 
  ChefHat, ArrowRight, Sparkles, ShieldCheck, Target, 
  UtensilsCrossed, Camera, TrendingUp, Search, 
  CheckCircle2, ChevronRight, ChevronLeft 
} from 'lucide-react';

// --- Mock Data ---
const AGENCIES = [
  { id: 1, name: "The Alchemists", specialty: "High-End Fine Dining Branding", rating: 4.9, image: "https://images.unsplash.com/photo-1550966841-3ee32289668e?auto=format&fit=crop&q=80&w=200", tags: ["Visual Identity", "Menu Design"] },
  { id: 2, name: "Metric Move", specialty: "Performance Marketing for D2C Brands", rating: 4.8, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200", tags: ["Ad Strategy", "SEO"] },
  { id: 3, name: "Plate & Palette", specialty: "Social Media & Food Photography", rating: 5.0, image: "https://images.unsplash.com/photo-1542034825-75117aded8b3?auto=format&fit=crop&q=80&w=200", tags: ["Reels", "Content Production"] }
];

export default function App() {
  const [view, setView] = useState('landing'); 
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', niche: '', goal: '', vibe: '' });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);
  const startArchitect = () => setView('architect');
  const finishArchitect = () => { setView('loading'); setTimeout(() => setView('results'), 2000); };

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
          <button onClick={startArchitect} className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm">Build a Brief</button>
        </nav>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      {view === 'landing' && (
        <div className="pt-24 pb-20">
          <section className="max-w-7xl mx-auto px-4 text-center py-20">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" /> <span>The Future of Culinary Branding</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Precision in every <span className="text-emerald-600">partnership.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              The first AI-powered platform connecting Chefs and Food Founders with specialized agencies.
            </p>
            <button onClick={startArchitect} className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-700 mx-auto transition-all">
              Start My Brief Architect <ArrowRight className="w-5 h-5" />
            </button>
          </section>
        </div>
      )}

      {view === 'architect' && (
        <div className="pt-24 pb-20 min-h-screen bg-slate-50 flex items-center">
          <div className="max-w-2xl mx-auto px-4 w-full">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex gap-2 mb-8">
                {[1, 2, 3].map(i => <div key={i} className={`h-2 flex-1 rounded-full ${step >= i ? 'bg-emerald-500' : 'bg-slate-100'}`} />)}
              </div>
              {step === 1 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Tell us about your brand</h2>
                  <input type="text" placeholder="Brand Name" className="w-full px-4 py-3 rounded-xl border mb-4" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
              )}
              {step === 2 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Define your goal</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {['Visual Identity', 'Social Growth'].map(g => (
                      <button key={g} onClick={() => setFormData({...formData, goal: g})} className={`p-6 rounded-2xl border-2 ${formData.goal === g ? 'border-emerald-600 bg-emerald-50' : 'border-slate-100'}`}>{g}</button>
                    ))}
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Vibe</h2>
                  {['Minimalist', 'Bold', 'Rustic'].map(v => (
                    <button key={v} onClick={() => setFormData({...formData, vibe: v})} className={`w-full p-4 mb-2 rounded-xl border text-left ${formData.vibe === v ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200'}`}>{v}</button>
                  ))}
                </div>
              )}
              <div className="flex justify-between mt-8">
                {step > 1 && <button onClick={prevStep} className="font-bold">Back</button>}
                <button onClick={step < 3 ? nextStep : finishArchitect} className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold ml-auto">
                  {step < 3 ? 'Next' : 'Generate Brief'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {view === 'loading' && (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-emerald-600 rounded-full animate-spin mb-4" />
          <p className="font-bold">Architecting your brief...</p>
        </div>
      )}

      {view === 'results' && (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Matches for {formData.name}</h2>
            {AGENCIES.map(a => (
              <div key={a.id} className="bg-white p-6 rounded-3xl border mb-4 flex gap-6 items-center">
                <img src={a.image} className="w-20 h-20 rounded-xl" alt="" />
                <div className="flex-1">
                  <h4 className="font-bold text-xl">{a.name}</h4>
                  <p className="text-slate-500">{a.specialty}</p>
                </div>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold">Connect</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
