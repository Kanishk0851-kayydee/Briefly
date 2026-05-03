"use client";
import React, { useState, useEffect } from 'react';
import { 
  ChefHat, ArrowRight, Sparkles, ShieldCheck, Target, 
  UtensilsCrossed, Camera, TrendingUp, Search, 
  CheckCircle2, ChevronRight, ChevronLeft, LayoutDashboard,
  User, Briefcase, MessageSquare, PieChart, Info, Globe, 
  GraduationCap, IndianRupee, FileText, Star, Quote, Lock, 
  FileCode, Users, Zap, Award, ExternalLink, Headset, Database, Link2,
  PenLine, Wand2, BrainCircuit, BarChart3
} from 'lucide-react';

export default function App() {
  const [view, setView] = useState('landing'); 
  const [step, setStep] = useState(1);
  const [briefMode, setBriefMode] = useState('guided'); // 'guided' or 'written'
  const [formData, setFormData] = useState({ 
    name: '', 
    goals: [], 
    vibe: '', 
    budget: '',
    rawBrief: ''
  });

  // Keyboard 'Enter' Listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && view === 'architect') {
        if (step === 1 && formData.name) setStep(2);
        else if (step === 2) return; // Wait for mode selection
        else if (step >= 3 && step < 5) setStep(s => s + 1);
        else if (step === 5) handleStartRefining();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view, step, formData]);

  const navigate = (v) => { window.scrollTo(0, 0); setView(v); };

  const handleStartRefining = () => {
    navigate('loading');
    setTimeout(() => navigate('refining'), 2000);
    setTimeout(() => navigate('results'), 4500);
  };

  // --- Views ---

  const Navbar = () => (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b z-50 px-4">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('landing')}>
          <div className="bg-emerald-800 p-2 rounded-xl"><ChefHat className="text-white w-6 h-6" /></div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 italic">Briefly</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">
          <button onClick={() => navigate('landing')} className="hover:text-emerald-800">Home</button>
          <button onClick={() => navigate('why-us')} className="hover:text-emerald-800">Strategy</button>
          <button onClick={() => navigate('case-study')} className="hover:text-emerald-800">Case Study</button>
          <button onClick={() => navigate('about')} className="hover:text-emerald-800">The Creator</button>
        </nav>
        <div className="flex gap-3">
          <button onClick={() => navigate('role-select')} className="border-2 border-slate-900 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Portals</button>
          <button onClick={() => navigate('architect')} className="bg-emerald-800 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest">Start Brief</button>
        </div>
      </div>
    </header>
  );

  const HomeView = () => (
    <main className="pt-32">
      <section className="max-w-7xl mx-auto px-4 text-center py-20">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10"><Sparkles className="w-4 h-4" /> India's Premium Culinary Bridge</div>
        <h1 className="text-6xl md:text-[90px] font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">Precision in <br/><span className="text-emerald-800 italic">partnership.</span></h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">Connecting <strong>Chef Personal Brands</strong> and <strong>F&B Founders</strong> with specialized growth consultants in <strong>Delhi NCR</strong>.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button onClick={() => navigate('architect')} className="bg-emerald-800 text-white px-12 py-5 rounded-3xl text-xl font-black shadow-2xl flex items-center gap-3">Start My Brief <ArrowRight/></button>
          <button onClick={() => navigate('about')} className="bg-white border-2 border-slate-200 px-12 py-5 rounded-3xl text-xl font-black">Meet the Founder</button>
        </div>
      </section>

      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Influenced by Market Expertise</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 grayscale opacity-50">
            <span className="text-3xl font-black tracking-tighter italic">Nestlé India</span>
            <span className="text-3xl font-black tracking-tighter">ArihantPlus</span>
            <span className="text-3xl font-black tracking-tighter italic">Delhi NCR Market</span>
          </div>
        </div>
      </section>
    </main>
  );

  const WhyUsView = () => (
    <div className="pt-40 pb-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black mb-16 tracking-tighter">The Strategy Hub.</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Personal Branding", icon: <User/>, desc: "Specialized architecture for independent chefs looking to scale their digital presence." },
          { title: "NPD Framework", icon: <PieChart/>, desc: "Applying New Product Development logic derived from Nestlé India collaborations." },
          { title: "Growth Funnels", icon: <TrendingUp/>, desc: "Implementing TOFU/MOFU/BOFU strategies for restaurant customer acquisition." },
          { title: "Data-Driven Entry", icon: <Database/>, desc: "Launching F&B concepts in Delhi NCR with validated demand analysis." },
          { title: "App-First Growth", icon: <Zap/>, desc: "Leveraging digital-first growth logic from ArihantPlus industry projects." },
          { title: "MGB Standards", icon: <GraduationCap/>, desc: "Backed by the global academic rigor of SP Jain School of Global Management." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="text-emerald-700 mb-6 w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">{item.icon}</div>
            <h4 className="text-2xl font-black mb-4">{item.title}</h4>
            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const CaseStudyView = () => (
    <div className="pt-40 pb-20 px-4 max-w-5xl mx-auto">
      <div className="bg-slate-900 text-white rounded-[60px] p-12 md:p-24 shadow-2xl relative overflow-hidden">
        <h2 className="text-5xl font-black mb-10 tracking-tighter">Growth Architecture.</h2>
        <div className="space-y-12 text-slate-400 text-lg">
          <p>Briefly solves the <strong>"Trust Deficit"</strong> in Indian F&B marketing. Most founders lose budget on vague briefs. Briefly uses structured architecture to ensure every ₹ spent is backed by a precise objective.</p>
          <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-white/10">
            <div><h4 className="text-white font-black text-xs uppercase mb-4 tracking-widest">B2B Demand</h4><p className="text-sm">Derived from analyzing demand in the B2B space during Nestlé India projects.</p></div>
            <div><h4 className="text-white font-black text-xs uppercase mb-4 tracking-widest">App Growth</h4><p className="text-sm">Applying App-First Growth strategies from ArihantPlus industry projects.</p></div>
          </div>
        </div>
      </div>
    </div>
  );

  const ArchitectView = () => (
    <div className="pt-40 pb-20 min-h-screen bg-slate-50 flex items-center px-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-16">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-3xl font-black mb-8">What is the Brand Name?</h2>
              <input autoFocus type="text" placeholder="e.g. Chef Kanishk's Table" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-emerald-800 outline-none font-black text-2xl" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <button onClick={() => setStep(2)} className="mt-8 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs tracking-widest">CONTINUE</button>
            </div>
          )}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-3xl font-black mb-8">How would you like to brief us?</h2>
              <div className="grid gap-4">
                <button onClick={() => {setBriefMode('guided'); setStep(3);}} className="p-8 rounded-3xl border-2 border-slate-50 hover:border-emerald-800 text-left flex items-center justify-between group"><div><h4 className="font-black text-lg">Guided Architect</h4><p className="text-xs text-slate-400">Step-by-step objective selection</p></div><ChevronRight/></button>
                <button onClick={() => {setBriefMode('written'); setStep(3);}} className="p-8 rounded-3xl border-2 border-slate-50 hover:border-emerald-800 text-left flex items-center justify-between group"><div><h4 className="font-black text-lg">Free-Flow Narrative</h4><p className="text-xs text-slate-400">Type your brief manually</p></div><ChevronRight/></button>
              </div>
            </div>
          )}
          {step === 3 && briefMode === 'written' && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-3xl font-black mb-4">Your Vision.</h2>
              <textarea placeholder="Tell us about your brand, goals, and what you need..." className="w-full h-48 px-8 py-6 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-emerald-800 outline-none font-medium" value={formData.rawBrief} onChange={(e) => setFormData({...formData, rawBrief: e.target.value})} />
              <button onClick={() => setStep(4)} className="mt-8 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs tracking-widest">NEXT</button>
            </div>
          )}
          {(step === 3 && briefMode === 'guided') && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-3xl font-black mb-8">Objectives.</h2>
              <div className="grid grid-cols-2 gap-3">
                {['Chef Branding', 'Concept Launch', 'Performance Ads', 'UI/UX Design'].map(g => (
                  <button key={g} onClick={() => setFormData({...formData, goals: [g]})} className={`p-5 rounded-2xl border-2 text-xs font-black ${formData.goals.includes(g) ? 'border-emerald-800 bg-emerald-50' : 'border-slate-50'}`}>{g}</button>
                ))}
              </div>
              <button onClick={() => setStep(4)} className="mt-8 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs tracking-widest uppercase">Continue</button>
            </div>
          )}
          {step === 4 && (
             <div className="animate-in fade-in slide-in-from-bottom-8">
               <h2 className="text-3xl font-black mb-8">Monthly Budget.</h2>
               <div className="grid gap-3">
                 {['₹50k - ₹1L', '₹1.5L - ₹3L', '₹3L+ Enterprise'].map(b => (
                   <button key={b} onClick={() => setFormData({...formData, budget: b})} className={`p-6 rounded-2xl border-2 text-left font-black ${formData.budget === b ? 'border-emerald-800 bg-emerald-50' : 'border-slate-50'}`}><IndianRupee className="inline w-4 h-4 mr-2"/> {b} / month</button>
                 ))}
               </div>
               <button onClick={() => setStep(5)} className="mt-8 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs tracking-widest">CONTINUE</button>
             </div>
          )}
          {step === 5 && (
            <div className="text-center animate-in zoom-in-95">
              <Sparkles className="w-16 h-16 text-emerald-800 mx-auto mb-6"/>
              <h2 className="text-3xl font-black mb-4">Lead Architecture Ready.</h2>
              <button onClick={handleStartRefining} className="w-full bg-emerald-800 text-white py-5 rounded-3xl font-black text-xl shadow-xl">GENERATE AI BRIEF</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const RefineView = () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="bg-emerald-50 p-12 rounded-[60px] text-center max-w-lg shadow-2xl border border-emerald-100">
        <Wand2 className="w-16 h-16 text-emerald-800 mx-auto mb-8 animate-pulse" />
        <h2 className="text-4xl font-black mb-4 tracking-tighter">Refining Your Brief...</h2>
        <p className="text-slate-500 font-medium mb-10 italic">"Our AI is structuring your vision into a professional strategic requirement document."</p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-emerald-800 font-black text-xs uppercase tracking-widest"><CheckCircle2 className="w-5 h-5"/> Identifying Market Funnels</div>
          <div className="flex items-center gap-4 text-emerald-800 font-black text-xs uppercase tracking-widest"><CheckCircle2 className="w-5 h-5"/> Aligning Brand Aesthetic</div>
        </div>
      </div>
    </div>
  );

  const ResultsView = () => (
    <div className="pt-40 pb-20 px-4 max-w-6xl mx-auto">
      <div className="bg-white rounded-[56px] border border-slate-100 shadow-2xl p-12 md:p-20 relative">
        <div className="absolute top-0 right-0 bg-emerald-800 text-white px-8 py-4 rounded-bl-[40px] font-black text-xs tracking-widest">AI ARCHITECTED BRIEF</div>
        <h2 className="text-5xl font-black mb-4 tracking-tighter">{formData.name} Strategy</h2>
        <p className="text-emerald-700 font-black text-xs uppercase tracking-[0.2em] mb-12">Structured by Briefly Engine</p>
        
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div><h4 className="font-black text-slate-400 text-xs uppercase mb-4 tracking-widest">Project Scope</h4><div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 font-bold">{briefMode === 'written' ? "Free-flow narrative refined into Chef Personal Brand Growth Funnel." : formData.goals[0] + " Architecture"}</div></div>
          <div><h4 className="font-black text-slate-400 text-xs uppercase mb-4 tracking-widest">Investment Scope</h4><div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 font-bold">{formData.budget} per month</div></div>
        </div>

        <button onClick={() => navigate('role-select')} className="bg-slate-900 text-white px-12 py-5 rounded-3xl font-black shadow-xl flex items-center gap-3">Access Full Dashboard <LayoutDashboard/></button>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="pt-40 pb-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black mb-12 tracking-tighter italic">Chef Dashboard.</h2>
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white p-10 rounded-[40px] border-2 border-emerald-50 shadow-sm flex justify-between items-center">
              <div><h4 className="font-black text-xl mb-1">Active: Brand Identity</h4><p className="text-xs font-black text-emerald-700 uppercase">Consultant: The Alchemists</p></div>
              <div className="text-right"><p className="text-[10px] font-black text-slate-400 uppercase">Progress</p><p className="text-2xl font-black">72%</p></div>
           </div>
           <button onClick={() => navigate('architect')} className="w-full py-10 rounded-[40px] border-4 border-dashed border-slate-100 text-slate-300 font-black text-xl hover:border-emerald-200 hover:text-emerald-300 transition-all">+ NEW BRIEF ARCHITECTURE</button>
        </div>
        <div className="bg-slate-900 text-white p-10 rounded-[40px] shadow-2xl">
           <Headset className="w-12 h-12 mb-8 text-emerald-400"/>
           <h3 className="text-2xl font-black mb-4">Strategic Advisor</h3>
           <p className="text-slate-400 font-medium mb-10">Get expert guidance from an <strong>SP Jain MGB Advisor</strong> to refine your entry into the Delhi NCR market.</p>
           <button className="w-full bg-emerald-800 py-4 rounded-2xl font-black text-xs uppercase tracking-widest">Connect Now</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-sans text-slate-900 selection:bg-emerald-100">
      <Navbar />
      {view === 'landing' && <HomeView />}
      {view === 'why-us' && <WhyUsView />}
      {view === 'about' && <AboutView name="Kanishk Dawar" school="SP Jain School of Global Management" linkedin="63b112169" />}
      {view === 'case-study' && <CaseStudyView />}
      {view === 'architect' && <ArchitectView />}
      {view === 'loading' && <div className="min-h-screen flex items-center justify-center animate-pulse"><ChefHat className="w-20 h-20 text-emerald-800"/></div>}
      {view === 'refining' && <RefineView />}
      {view === 'results' && <ResultsView />}
      {view === 'role-select' && (
        <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div onClick={() => navigate('dashboard')} className="bg-white p-12 rounded-[56px] border-2 border-slate-50 hover:border-emerald-800 cursor-pointer shadow-sm"><ChefHat className="w-12 h-12 text-emerald-800 mb-8"/><h3 className="text-3xl font-black mb-2">Chef Portal</h3><p className="text-slate-500 font-medium italic">Manage concept architecture.</p></div>
            <div onClick={() => navigate('consultant')} className="bg-white p-12 rounded-[56px] border-2 border-slate-50 hover:border-slate-900 cursor-pointer shadow-sm"><Briefcase className="w-12 h-12 text-slate-900 mb-8"/><h3 className="text-3xl font-black mb-2">Consultant Hub</h3><p className="text-slate-500 font-medium italic">Review high-intent leads.</p></div>
          </div>
        </div>
      )}
      {view === 'dashboard' && <DashboardView />}
      {view === 'consultant' && <div className="pt-40 text-center font-black opacity-10 text-6xl italic">LEAD PORTAL ACTIVE</div>}
      
      <footer className="bg-white border-t border-slate-100 py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Developed by <strong>Kanishk Dawar</strong> | SP Jain School of Global Management</p>
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-400">
            <button onClick={() => alert("Privacy enabled.")}>Privacy</button>
            <button onClick={() => alert("Terms active.")}>Terms</button>
            <a href="https://www.linkedin.com/in/kanishk-dawar-63b112169" target="_blank">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AboutView({ name, school, linkedin }) {
  return (
    <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
      <div className="bg-white rounded-[56px] p-12 md:p-20 shadow-2xl border border-slate-100">
        <h1 className="text-6xl font-black mb-4 tracking-tighter">{name}.</h1>
        <p className="text-2xl font-bold text-emerald-800 mb-12">Product Strategist | <strong>Full-Time {school} Student</strong></p>
        <div className="grid md:grid-cols-2 gap-10 text-slate-600 text-xl leading-relaxed mb-12">
          <p>Master of Global Business candidate with 2.5 years of experience in the <strong>hospitality and education sectors</strong>.</p>
          <p>Consulted on <strong>various restaurant concepts</strong> across Delhi NCR and Dubai, focusing on culinary marketing and strategic growth.</p>
        </div>
        <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" className="inline-flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-2xl font-black text-sm text-white shadow-xl">LinkedIn Profile</a>
      </div>
    </div>
  );
}
