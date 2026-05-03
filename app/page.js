"use client";
import React, { useState, useEffect } from 'react';
import { 
  ChefHat, ArrowRight, Sparkles, ShieldCheck, Target, 
  UtensilsCrossed, Camera, TrendingUp, Search, 
  CheckCircle2, ChevronRight, ChevronLeft, LayoutDashboard,
  User, Briefcase, MessageSquare, PieChart, Info, Globe, 
  GraduationCap, IndianRupee, FileText, Star, Quote, Lock, 
  FileCode, Users, Zap, Award, ExternalLink, Headset, Database, Link2,
  PenLine, Wand2, BrainCircuit, BarChart3, Clock, CheckCircle, ChevronDown, Eye
} from 'lucide-react';

export default function App() {
  const [view, setView] = useState('landing'); 
  const [step, setStep] = useState(1);
  const [briefMode, setBriefMode] = useState('guided');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', goals: [], vibe: '', budget: '', rawBrief: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (v) => { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    setView(v); 
    setStep(1); // Reset architect steps on navigation
  };

  const handleStartRefining = () => {
    navigate('loading');
    setTimeout(() => navigate('refining'), 1500);
    setTimeout(() => navigate('results'), 4000);
  };

  // --- UI Components ---

  const Navbar = () => {
    // Show header if scrolled OR if we are not on the landing page
    const showHeader = scrolled || view !== 'landing';
    
    return (
      <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${showHeader ? 'bg-white/95 backdrop-blur-md border-b h-20 shadow-sm' : 'bg-transparent h-32'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className={`flex items-center gap-3 transition-all duration-500 ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="bg-emerald-900 p-2 rounded-xl"><ChefHat className="text-white w-5 h-5" /></div>
            <span className="text-xl font-black tracking-tighter text-slate-900 italic uppercase">Briefly</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <button onClick={() => navigate('landing')} className="hover:text-emerald-800 transition-colors">Home</button>
            <button onClick={() => navigate('why-briefly')} className="hover:text-emerald-800 transition-colors">Why Briefly?</button>
            <button onClick={() => navigate('advisor')} className="hover:text-emerald-800 flex items-center gap-2"><Headset className="w-3 h-3"/> Advisor</button>
            <button onClick={() => navigate('about')} className="hover:text-emerald-800 transition-colors">Creator</button>
          </nav>

          <div className="flex gap-4">
            <button onClick={() => navigate('role-select')} className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border-2 transition-all ${showHeader ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' : 'border-white/20 text-white hover:bg-white/10'}`}>Portals</button>
            <button onClick={() => navigate('architect')} className="bg-emerald-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-emerald-950 transition-all">Start Brief</button>
          </div>
        </div>
      </header>
    );
  };

  const HomeView = () => (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-slate-900 text-white">
        <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Culinary Background" />
        <div className={`text-center transition-all duration-1000 transform ${scrolled ? 'scale-75 opacity-0' : 'scale-100 opacity-100'}`}>
          <h1 className="text-8xl md:text-[180px] font-black tracking-tighter leading-none italic uppercase mb-6">Briefly</h1>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight opacity-80 italic">Precision in every partnership.</h2>
        </div>
        <div className="absolute bottom-10 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}><ChevronDown className="w-10 h-10 text-white/50"/></div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-emerald-700 font-black text-xs uppercase tracking-[0.3em] mb-6 block">The Vision</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none italic uppercase">Where Art <br/>Meets Strategy.</h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">Briefly is the first AI-architected ecosystem specifically designed for <strong>Chef Personal Brands</strong> and niche <strong>Restaurant Concepts</strong>.</p>
            <button onClick={() => navigate('architect')} className="bg-emerald-900 text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3">Get Started <ArrowRight className="w-5 h-5"/></button>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=800" className="rounded-[60px] shadow-2xl relative z-10" alt="Chef Plating" />
            <div className="absolute -bottom-10 -right-10 bg-emerald-900 text-white p-12 rounded-[40px] z-20 hidden md:block">
              <Sparkles className="w-10 h-10 mb-4" />
              <p className="text-2xl font-black">98%</p>
              <p className="text-[10px] font-black uppercase opacity-60">Brief Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />
    </main>
  );

  const ReviewsSection = () => (
    <section className="py-32 bg-slate-50">
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic">Client Testimonials</h2>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2">Vetted outcomes from the Briefly network</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Chef Vikram", role: "Fine Dining Expert", text: "Briefly solved my communication gap. The AI brief was so precise, my agency delivered in half the time." },
              { name: "Anita Roy", role: "Bakery Founder", text: "Matching with an agency that actually understands kitchen unit economics was a game changer." },
              { name: "Chef Maya", role: "Pastry Artist", text: "Personal branding felt overwhelming until I used Briefly. It's built for creators like us." }
            ].map((r, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
                <div className="flex gap-1 text-amber-400 mb-6"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                <p className="text-slate-600 font-bold italic mb-8 leading-relaxed">"{r.text}"</p>
                <div>
                  <p className="font-black text-slate-900">{r.name}</p>
                  <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );

  const ArchitectView = () => (
    <div className="pt-40 pb-20 min-h-screen bg-slate-50 flex items-center px-6">
      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-[56px] shadow-2xl p-12 md:p-20 border border-slate-100">
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-4xl font-black mb-8 tracking-tight italic uppercase">Brand or Project Name?</h2>
              <input 
                autoFocus 
                type="text" 
                placeholder="e.g. Chef Kanishk's Table" 
                className="w-full px-8 py-6 rounded-[32px] bg-slate-50 border-4 border-transparent focus:border-emerald-900 outline-none font-black text-3xl shadow-inner transition-all mb-8" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
              <button onClick={() => formData.name && setStep(2)} className="bg-emerald-900 text-white px-12 py-5 rounded-3xl font-black text-xs tracking-widest shadow-xl uppercase">Continue</button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-4xl font-black mb-12 tracking-tight italic uppercase">Choose Path</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <button onClick={() => {setBriefMode('guided'); setStep(3);}} className="p-12 rounded-[48px] border-4 border-slate-50 hover:border-emerald-800 transition-all text-center group">
                  <Target className="w-12 h-12 mx-auto mb-6 text-emerald-800" />
                  <h4 className="font-black text-xl mb-2">Guided</h4>
                  <p className="text-xs text-slate-400 font-bold">Step-by-step</p>
                </button>
                <button onClick={() => {setBriefMode('written'); setStep(3);}} className="p-12 rounded-[48px] border-4 border-slate-50 hover:border-slate-900 transition-all text-center group">
                  <PenLine className="w-12 h-12 mx-auto mb-6 text-slate-900" />
                  <h4 className="font-black text-xl mb-2">Narrative</h4>
                  <p className="text-xs text-slate-400 font-bold">Free text</p>
                </button>
              </div>
            </div>
          )}

          {step === 3 && briefMode === 'written' && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-4xl font-black mb-8 tracking-tight italic uppercase">Vision</h2>
              <textarea 
                placeholder="Type your brief narrative here..." 
                className="w-full h-64 px-10 py-8 rounded-[40px] bg-slate-50 border-4 border-transparent focus:border-emerald-900 outline-none font-bold text-xl shadow-inner mb-8" 
                value={formData.rawBrief} 
                onChange={(e) => setFormData({...formData, rawBrief: e.target.value})} 
              />
              <button onClick={() => setStep(5)} className="bg-emerald-900 text-white px-12 py-5 rounded-3xl font-black tracking-widest uppercase text-xs">Architect Result</button>
            </div>
          )}

          {step === 3 && briefMode === 'guided' && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-4xl font-black mb-8 tracking-tight italic uppercase">Objective</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Branding', 'Growth', 'Operations', 'PR'].map(g => (
                  <button key={g} onClick={() => {setFormData({...formData, goals: [g]}); setStep(4);}} className="p-8 rounded-3xl border-2 border-slate-100 font-black text-xs hover:border-emerald-800 transition-all uppercase">{g}</button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="text-slate-300 font-black text-xs uppercase tracking-widest">Back</button>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 text-center">
              <Sparkles className="w-20 h-20 text-emerald-800 mx-auto mb-10 animate-pulse"/>
              <h2 className="text-4xl font-black mb-12 tracking-tight">Generate Strategy</h2>
              <button onClick={handleStartRefining} className="w-full bg-emerald-900 text-white py-6 rounded-[32px] font-black text-xl shadow-2xl hover:scale-105 transition-all uppercase">Analyze Vision</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ConsultantHub = () => (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black tracking-tighter mb-16 uppercase italic">Consultant Portal</h2>
      <div className="bg-white rounded-[48px] border border-slate-100 overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
            <tr>
              <th className="p-8">Client Name</th>
              <th className="p-8">Brief Score</th>
              <th className="p-8">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { client: "Chef Vikram Adiga", score: "98/100" },
              { client: "Spice Kitchen Delhi", score: "92/100" }
            ].map((c, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-8 font-black text-slate-900">{c.client}</td>
                <td className="p-8 font-black text-emerald-700">{c.score}</td>
                <td className="p-8">
                  <button 
                    onClick={() => alert(`Opening Brief for ${c.client}...`)}
                    className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-900 transition-all flex items-center gap-2"
                  >
                    <Eye className="w-3 h-3"/> Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      {view === 'landing' && <HomeView />}
      {view === 'why-briefly' && (
        <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-16 italic uppercase">Why Briefly?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Vetted Partners", text: "We audit every consultant for F&B unit-economic understanding." },
              { title: "AI Precision", text: "Our architecture translates flavor into functional digital requirements." },
              { title: "Escrow Security", text: "Payment milestones protect both the chef and the consultant." }
            ].map(f => (
              <div key={f.title} className="bg-slate-50 p-12 rounded-[56px] border border-slate-100">
                <h4 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">{f.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {view === 'advisor' && (
        <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
          <div className="bg-emerald-900 text-white p-20 rounded-[60px] shadow-2xl relative overflow-hidden">
            <Headset className="w-20 h-20 mx-auto mb-8 text-emerald-400" />
            <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase italic">Connect with Advisor</h2>
            <p className="text-xl text-emerald-100/70 mb-12 font-medium">Refine your concept strategy with a student consultant.</p>
            <button className="bg-white text-emerald-950 px-12 py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all">Schedule Call</button>
          </div>
        </div>
      )}
      {view === 'about' && (
        <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-[56px] p-16 shadow-2xl border border-slate-100 text-center">
             <h1 className="text-6xl font-black mb-4 tracking-tighter italic uppercase">Kanishk Dawar</h1>
             <p className="text-xl font-bold text-emerald-800 mb-10">Product Strategist | Student of SP Jain School of Global Management</p>
             <p className="text-slate-500 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">Master of Global Business candidate with 2.5 years of professional experience across <strong>various restaurant concepts</strong>.</p>
             <a href="https://www.linkedin.com/in/kanishk-dawar-63b112169" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#0077b5] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase shadow-xl hover:bg-blue-800 transition-all">LinkedIn Profile <ExternalLink className="w-4 h-4"/></a>
          </div>
        </div>
      )}
      {view === 'architect' && <ArchitectView />}
      {view === 'role-select' && (
        <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
           <div onClick={() => navigate('dashboard')} className="bg-slate-50 p-12 rounded-[56px] border-4 border-transparent hover:border-emerald-800 cursor-pointer transition-all"><ChefHat className="w-16 h-16 text-emerald-800 mb-8"/><h3 className="text-3xl font-black mb-2 uppercase italic">Chef Portal</h3></div>
           <div onClick={() => navigate('consultant')} className="bg-slate-50 p-12 rounded-[56px] border-4 border-transparent hover:border-slate-900 cursor-pointer transition-all"><Briefcase className="w-16 h-16 text-slate-900 mb-8"/><h3 className="text-3xl font-black mb-2 uppercase italic">Consultant</h3></div>
        </div>
      )}
      {view === 'loading' && <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-900 text-white"><BrainCircuit className="w-20 h-20 animate-spin mb-6" /><h2 className="text-2xl font-black tracking-widest uppercase">Refining Brief...</h2></div>}
      {view === 'refining' && <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-950 text-white"><Sparkles className="w-20 h-20 animate-pulse mb-6" /><h2 className="text-2xl font-black tracking-widest uppercase italic">Architecting Strategy...</h2></div>}
      {view === 'results' && (
        <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
          <div className="bg-white p-20 rounded-[60px] border border-slate-100 shadow-2xl text-center">
            <h2 className="text-5xl font-black mb-6 italic uppercase tracking-tighter">Strategic Lead Active</h2>
            <p className="text-xl text-slate-500 mb-12 font-medium">Your vision for {formData.name} has been translated into an AI-vetted requirement.</p>
            <button onClick={() => navigate('landing')} className="bg-emerald-900 text-white px-12 py-5 rounded-3xl font-black text-xs uppercase tracking-widest">Return Home</button>
          </div>
        </div>
      )}
      {view === 'consultant' && <ConsultantHub />}

      <footer className="bg-white border-t py-20 px-6 mt-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex items-center gap-2"><ChefHat className="text-emerald-900 w-5 h-5" /><span className="text-lg font-black italic uppercase">Briefly</span></div>
            <button 
              onClick={() => alert("Market Gap Analysis: Identifies the 'Trust Deficit' in B2B hospitality marketing. Our goal is to provide a student-led pitch that bridges chef creativity with strategic execution.")}
              className="bg-slate-50 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-all border border-slate-100"
            >
              Why this project?
            </button>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Created by Kanishk Dawar | Student of SP Jain</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
