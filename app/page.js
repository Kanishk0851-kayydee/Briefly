"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChefHat, ArrowRight, Sparkles, ShieldCheck, Target, 
  UtensilsCrossed, Camera, TrendingUp, Search, 
  CheckCircle2, ChevronRight, ChevronLeft, LayoutDashboard,
  User, Briefcase, MessageSquare, PieChart, Info, Globe, 
  GraduationCap, IndianRupee, FileText, Star, Quote, Lock, 
  FileCode, Users, Zap, Award, ExternalLink, Headset, Database, Link2,
  PenLine, Wand2, BrainCircuit, BarChart3, Clock, CheckCircle
} from 'lucide-react';

export default function App() {
  const [view, setView] = useState('landing'); 
  const [step, setStep] = useState(1);
  const [briefMode, setBriefMode] = useState('guided');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    goals: [], 
    vibe: '', 
    budget: '',
    rawBrief: ''
  });

  // --- Scroll Logic for Hero-to-Header Transition ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Keyboard Enter Logic ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && view === 'architect') {
        if (step === 1 && formData.name) setStep(2);
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
    setTimeout(() => navigate('refining'), 1500);
    setTimeout(() => navigate('results'), 4000);
  };

  // --- UI Components ---

  const Navbar = () => (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b h-20' : 'bg-transparent h-32'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className={`flex items-center gap-3 transition-all duration-1000 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
          <div className="bg-emerald-900 p-2 rounded-xl"><ChefHat className="text-white w-6 h-6" /></div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 italic uppercase">Briefly</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-10 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <button onClick={() => navigate('landing')} className="hover:text-emerald-800 transition-colors">Home</button>
          <button onClick={() => navigate('why-briefly')} className="hover:text-emerald-800 transition-colors">Why Briefly?</button>
          <button onClick={() => navigate('about')} className="hover:text-emerald-800 transition-colors">Creator</button>
        </nav>

        <div className="flex gap-4">
          <button onClick={() => navigate('role-select')} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all ${!scrolled && 'border-slate-300 text-slate-400'}`}>Portals</button>
          <button onClick={() => navigate('architect')} className="bg-emerald-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">Start Brief</button>
        </div>
      </div>
    </header>
  );

  const HomeView = () => (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-white">
        <div className={`transition-all duration-1000 transform ${scrolled ? 'scale-50 opacity-0 -translate-y-40' : 'scale-100 opacity-100'}`}>
          <h1 className="text-[120px] md:text-[220px] font-black tracking-tighter text-slate-900 leading-none italic uppercase">Briefly</h1>
        </div>
        <div className={`max-w-4xl text-center transition-all duration-1000 delay-300 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Precision in every <span className="text-emerald-700 italic">partnership.</span></h2>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 font-medium leading-relaxed">The AI-architected ecosystem connecting culinary excellence with specialized growth strategy.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => navigate('architect')} className="bg-emerald-900 text-white px-12 py-5 rounded-3xl text-xl font-black shadow-2xl hover:bg-black transition-all">Get Started</button>
            <button onClick={() => navigate('why-briefly')} className="bg-slate-50 border-2 border-slate-200 px-12 py-5 rounded-3xl text-xl font-black">Learn More</button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce"><ChevronDown className="w-8 h-8 text-slate-200"/></div>
      </section>

      {/* Featured Partnerships */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">Inspired by collaborations with</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 grayscale opacity-40 hover:opacity-100 transition-opacity">
            <span className="text-4xl font-black tracking-tighter italic">Nestlé India</span>
            <span className="text-4xl font-black tracking-tighter">ArihantPlus</span>
            <span className="text-4xl font-black tracking-tighter italic italic">Global Markets</span>
          </div>
        </div>
      </section>
    </main>
  );

  const WhyBrieflyView = () => (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-6xl font-black mb-20 tracking-tighter italic uppercase">Why Briefly?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "AI Project Briefs", icon: <Wand2/>, desc: "We translate culinary vision into structured, technical requirements that eliminate agency guesswork." },
          { title: "Vetted Network", icon: <ShieldCheck/>, desc: "Access a curated selection of agencies specifically audited for F&B and personal chef branding." },
          { title: "Escrow & Milestones", icon: <Lock/>, desc: "Secure payments where funds are only released upon your approval of specific project phases." },
          { title: "End-to-End Management", icon: <LayoutDashboard/>, desc: "A full ecosystem providing digital contracts and project management tools for seamless execution." }
        ].map((p, i) => (
          <div key={i} className="bg-white p-12 rounded-[48px] border-2 border-slate-50 shadow-sm hover:border-emerald-700 transition-all group">
             <div className="bg-emerald-50 text-emerald-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-900 group-hover:text-white transition-all">{p.icon}</div>
             <h4 className="text-2xl font-black mb-4 tracking-tight">{p.title}</h4>
             <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <ReviewsSection />
    </div>
  );

  const ReviewsSection = () => (
    <section className="mt-32">
       <h3 className="text-4xl font-black mb-16 tracking-tighter uppercase italic">Client Testimonials</h3>
       <div className="grid md:grid-cols-3 gap-8">
         {[
           { name: "Chef Vikram", role: "Fine Dining Expert", text: "Briefly solved my communication gap. The AI brief was so precise, my agency delivered in half the time." },
           { name: "Anita Roy", role: "Bakery Founder", text: "The escrow system gave me peace of mind. I knew exactly what I was paying for and when it would be done." },
           { name: "Rahul Singh", role: "Cloud Kitchen CEO", text: "Matching with an agency that actually understands kitchen unit economics was a game changer." },
           { name: "Chef Maya", role: "Pastry Artist", text: "Personal branding felt overwhelming until I used Briefly. It's built for creators like us." },
           { name: "Sumeet G.", role: "Restaurateur", text: "The most structured approach to F&B marketing I've seen in the Indian landscape." },
           { name: "Priya V.", role: "Agency Director", text: "Briefly briefs are a joy to work with. There's no back-and-forth—just execution." }
         ].map((r, i) => (
           <div key={i} className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 relative">
             <Quote className="absolute top-6 right-6 text-slate-200 w-10 h-10" />
             <p className="text-slate-600 font-bold italic mb-8 leading-relaxed">"{r.text}"</p>
             <div>
               <p className="font-black text-slate-900">{r.name}</p>
               <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">{r.role}</p>
             </div>
           </div>
         ))}
       </div>
    </section>
  );

  const ProjectPortal = () => (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-5xl font-black tracking-tighter uppercase italic">Chef Portal</h2>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Active Multi-Project Management</p>
        </div>
        <button onClick={() => navigate('architect')} className="bg-emerald-900 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest">New Project</button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { id: 1, name: "Visual Identity Redesign", agency: "The Alchemists", status: "Design Phase", progress: 65, type: "Branding" },
          { id: 2, name: "Reels Content Strategy", agency: "Metric Move", status: "Shooting", progress: 40, type: "Content" },
          { id: 3, name: "Menu Engineering 2026", agency: "Palate & Plate", status: "Review", progress: 90, type: "Operations" },
          { id: 4, name: "SEO Optimization", agency: "Growth Labs", status: "Keyword Mapping", progress: 20, type: "Digital" },
          { id: 5, name: "Packaging Design", agency: "Studio Box", status: "Prototypes", progress: 50, type: "Product" },
          { id: 6, name: "Influencer PR Launch", agency: "Buzz Makers", status: "Outreach", progress: 15, type: "PR" },
          { id: 7, name: "Website Re-Architecture", agency: "Code & Culinary", status: "Testing", progress: 85, type: "Tech" }
        ].map(p => (
          <div key={p.id} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="flex justify-between mb-6">
              <span className="bg-slate-100 px-4 py-1.5 rounded-full text-[10px] font-black text-slate-500 uppercase">{p.type}</span>
              <span className="text-emerald-700 font-black text-[10px] uppercase tracking-widest">{p.status}</span>
            </div>
            <h4 className="text-xl font-black mb-2">{p.name}</h4>
            <p className="text-slate-400 font-bold text-xs uppercase mb-6">{p.agency}</p>
            <div className="w-full bg-slate-50 h-2 rounded-full overflow-hidden">
               <div className="bg-emerald-900 h-full rounded-full transition-all duration-1000" style={{ width: `${p.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ConsultantHub = () => (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black tracking-tighter mb-16 uppercase italic">Consultant Hub</h2>
      <div className="bg-white rounded-[48px] border border-slate-100 overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
            <tr>
              <th className="p-8">Client Name</th>
              <th className="p-8">Project Type</th>
              <th className="p-8">Brief Score</th>
              <th className="p-8">Status</th>
              <th className="p-8">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { client: "Chef Vikram Adiga", project: "Brand Refresh", score: "98/100", status: "WIP", color: "text-amber-600" },
              { client: "Spice Kitchen Delhi", project: "Growth Marketing", score: "92/100", status: "Contracting", color: "text-emerald-600" },
              { client: "The Artisan Bakery", project: "Packaging NPD", score: "95/100", status: "Discovery", color: "text-blue-600" },
              { client: "Personal Chef Rahul", project: "Social Media Identity", score: "88/100", status: "WIP", color: "text-amber-600" },
              { client: "Cloud9 Meals", project: "App Growth Strategy", score: "94/100", status: "WIP", color: "text-amber-600" }
            ].map((c, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="p-8 font-black text-slate-900">{c.client}</td>
                <td className="p-8 font-bold text-slate-500">{c.project}</td>
                <td className="p-8 font-black text-emerald-700">{c.score}</td>
                <td className={`p-8 font-black uppercase text-[10px] tracking-widest ${c.color}`}>{c.status}</td>
                <td className="p-8"><button className="bg-slate-900 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase">Review</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const ArchitectView = () => (
    <div className="pt-40 pb-20 min-h-screen bg-slate-50 flex items-center px-6">
      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-[56px] shadow-2xl p-12 md:p-20 relative border border-slate-100">
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-4xl font-black mb-8 tracking-tight">What is the Project Name?</h2>
              <input 
                autoFocus 
                type="text" 
                placeholder="e.g. Artisanal Bakery Rebrand" 
                className="w-full px-8 py-6 rounded-[32px] bg-slate-50 border-4 border-transparent focus:border-emerald-900 outline-none font-black text-3xl shadow-inner transition-all" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
              <p className="mt-8 text-slate-300 font-black text-xs uppercase tracking-widest italic flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-800"/> Tap 'Enter' to proceed
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 text-center">
              <h2 className="text-4xl font-black mb-12 tracking-tight">How shall we architect your brief?</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <button onClick={() => {setBriefMode('guided'); setStep(3);}} className="p-12 rounded-[48px] border-4 border-slate-50 hover:border-emerald-800 transition-all text-center group">
                  <Target className="w-12 h-12 mx-auto mb-6 text-emerald-800 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-xl mb-2">Guided Path</h4>
                  <p className="text-xs text-slate-400 font-bold">Step-by-step selection</p>
                </button>
                <button onClick={() => {setBriefMode('written'); setStep(3);}} className="p-12 rounded-[48px] border-4 border-slate-50 hover:border-slate-900 transition-all text-center group">
                  <PenLine className="w-12 h-12 mx-auto mb-6 text-slate-900 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-xl mb-2">Free Narrative</h4>
                  <p className="text-xs text-slate-400 font-bold">Type your own story</p>
                </button>
              </div>
            </div>
          )}

          {step === 3 && briefMode === 'written' && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-4xl font-black mb-8 tracking-tight italic uppercase">The Vision.</h2>
              {/* FIXED TEXTAREA: Removed key/value conflicts to prevent letter-by-letter jumping */}
              <textarea 
                placeholder="Describe your brand, goals, and needs in your own words..." 
                className="w-full h-64 px-10 py-8 rounded-[40px] bg-slate-50 border-4 border-transparent focus:border-emerald-900 outline-none font-bold text-xl resize-none shadow-inner" 
                value={formData.rawBrief} 
                onChange={(e) => setFormData({...formData, rawBrief: e.target.value})} 
              />
              <button onClick={() => setStep(4)} className="mt-10 bg-slate-900 text-white px-12 py-5 rounded-3xl font-black tracking-widest w-full">CONTINUE</button>
            </div>
          )}

          {step >= 3 && step < 5 && briefMode === 'guided' && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
               <h2 className="text-4xl font-black mb-12 tracking-tight italic uppercase">Refining Details.</h2>
               {step === 3 && (
                 <div className="grid grid-cols-2 gap-4">
                   {['Personal Brand', 'Outlet Growth', 'Digital PR', 'Operations'].map(g => (
                     <button key={g} onClick={() => {setFormData({...formData, goals: [g]}); setStep(4);}} className="p-8 rounded-3xl border-2 border-slate-100 font-black text-xs hover:border-emerald-800 transition-all">{g}</button>
                   ))}
                 </div>
               )}
               {step === 4 && (
                 <div className="grid gap-4">
                    {['₹50k - ₹1L / mo', '₹1.5L - ₹3L / mo', '₹3L+ Custom'].map(b => (
                      <button key={b} onClick={() => {setFormData({...formData, budget: b}); setStep(5);}} className="p-8 rounded-3xl border-2 border-slate-100 font-black text-left flex items-center justify-between hover:border-emerald-800 transition-all"><span>{b}</span> <IndianRupee/></button>
                    ))}
                 </div>
               )}
            </div>
          )}

          {step === 5 && (
            <div className="text-center animate-in zoom-in-95">
              <Wand2 className="w-20 h-20 text-emerald-800 mx-auto mb-10 animate-pulse"/>
              <h2 className="text-5xl font-black mb-6 tracking-tighter">Architecture Lead Locked.</h2>
              <p className="text-slate-400 font-bold mb-12 italic uppercase text-xs tracking-widest">Ready to generate your AI-refined strategic requirement document</p>
              <button onClick={handleStartRefining} className="w-full bg-emerald-900 text-white py-6 rounded-[32px] font-black text-2xl shadow-2xl hover:scale-105 transition-all">GENERATE AI BRIEF</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
      <Navbar />
      {view === 'landing' && <HomeView />}
      {view === 'why-briefly' && <WhyBrieflyView />}
      {view === 'about' && (
        <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-[56px] p-16 shadow-2xl border border-slate-100 text-center">
             <div className="w-32 h-32 bg-emerald-50 rounded-full mx-auto mb-10 flex items-center justify-center text-emerald-800 border-4 border-white shadow-xl"><User className="w-16 h-16"/></div>
             <h1 className="text-6xl font-black mb-4 tracking-tighter italic uppercase">Kanishk Dawar</h1>
             <p className="text-xl font-bold text-emerald-800 mb-12">Product Strategist | Student of SP Jain School of Global Management</p>
             <p className="text-slate-500 text-xl leading-relaxed mb-16 max-w-2xl mx-auto">Master of Global Business candidate with 2.5 years of experience across <strong>various restaurant concepts</strong> and personal branding for world-class chefs.</p>
             <div className="flex justify-center">
                {/* FIXED LINKEDIN REDIRECT */}
                <a href="https://www.linkedin.com/in/kanishk-dawar-63b112169" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] text-white px-10 py-4 rounded-2xl font-black text-sm uppercase flex items-center gap-3 shadow-xl hover:bg-blue-800 transition-all">View LinkedIn Profile <ExternalLink className="w-4 h-4"/></a>
             </div>
          </div>
        </div>
      )}
      
      {view === 'loading' && (
        <div className="min-h-screen flex flex-col items-center justify-center animate-pulse">
          <ChefHat className="w-24 h-24 text-emerald-900 mb-6" />
          <p className="font-black text-xs uppercase tracking-[0.5em] text-slate-300 italic">Initiating Architecture</p>
        </div>
      )}

      {view === 'refining' && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-900 text-white px-6">
          <BrainCircuit className="w-24 h-24 mb-12 animate-spin-slow" />
          <h2 className="text-6xl font-black tracking-tighter italic uppercase mb-4">Refining Your Brief...</h2>
          <div className="flex gap-3 text-emerald-400 font-black text-xs tracking-widest uppercase">
             <span className="animate-pulse">Structuring Logic</span> • <span className="animate-pulse delay-150">Vetting Partners</span> • <span className="animate-pulse delay-300">Auditing Scope</span>
          </div>
        </div>
      )}

      {view === 'results' && (
        <div className="pt-40 pb-20 px-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-[64px] border border-slate-100 shadow-2xl p-16 md:p-24 relative">
             <div className="absolute top-0 right-0 bg-emerald-900 text-white px-12 py-6 rounded-bl-[64px] font-black text-xs tracking-[0.2em] italic uppercase">AI Strategic Result</div>
             <h2 className="text-6xl font-black mb-12 tracking-tighter text-slate-900 uppercase italic leading-none">{formData.name} <br/>Architecture</h2>
             <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div><h4 className="text-[10px] font-black text-slate-300 uppercase mb-4 tracking-widest">Project Summary</h4><p className="text-xl font-bold leading-relaxed">{formData.rawBrief ? "AI structured narrative focused on culinary brand growth." : formData.goals[0] + " focused strategy."}</p></div>
                <div><h4 className="text-[10px] font-black text-slate-300 uppercase mb-4 tracking-widest">Strategic Fit</h4><p className="text-xl font-bold italic leading-relaxed text-emerald-800">Perfectly matched for Premium Creative Boutiques in the Indian market.</p></div>
             </div>
             <div className="flex gap-6">
                <button onClick={() => navigate('dashboard')} className="bg-slate-900 text-white px-12 py-5 rounded-3xl font-black text-sm uppercase tracking-widest shadow-2xl">Access Chef Portal</button>
                <button onClick={() => setStep(1)} className="bg-slate-50 text-slate-400 px-12 py-5 rounded-3xl font-black text-sm uppercase tracking-widest">New Architecture</button>
             </div>
          </div>
        </div>
      )}

      {view === 'role-select' && (
        <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-20 tracking-tighter uppercase italic">Choose Portal.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div onClick={() => navigate('dashboard')} className="bg-white p-12 rounded-[56px] border-4 border-slate-50 hover:border-emerald-800 cursor-pointer shadow-sm group">
               <ChefHat className="w-16 h-16 text-emerald-800 mb-8 group-hover:scale-110 transition-transform"/>
               <h3 className="text-3xl font-black mb-2 uppercase italic tracking-tight">Chef Portal</h3>
               <p className="text-slate-400 font-bold italic text-sm">Manage multiple restaurant branding projects.</p>
            </div>
            <div onClick={() => navigate('consultant')} className="bg-white p-12 rounded-[56px] border-4 border-slate-50 hover:border-slate-900 cursor-pointer shadow-sm group">
               <Briefcase className="w-16 h-16 text-slate-900 mb-8 group-hover:scale-110 transition-transform"/>
               <h3 className="text-3xl font-black mb-2 uppercase italic tracking-tight">Consultant Hub</h3>
               <p className="text-slate-400 font-bold italic text-sm">Monitor high-intent briefs and client pipelines.</p>
            </div>
          </div>
        </div>
      )}

      {view === 'dashboard' && <ProjectPortal />}
      {view === 'consultant' && <ConsultantHub />}

      {/* Global Footer */}
      <footer className="bg-white border-t py-24 px-6 mt-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="text-emerald-900 w-6 h-6" />
              <span className="text-xl font-black italic uppercase tracking-tighter">Briefly</span>
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Created by <strong>Kanishk Dawar</strong> | SP Jain Student</p>
          </div>
          <div className="flex gap-12 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <button onClick={() => alert("Privacy standard active.")}>Privacy</button>
            <button onClick={() => alert("Student Project Integrity.")}>Terms</button>
            <a href="https://www.linkedin.com/in/kanishk-dawar-63b112169" target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Custom Icon for Scroll Transition
function ChevronDown(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  );
}
