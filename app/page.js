"use client";
import React, { useState, useEffect } from 'react';
import { 
  ChefHat, ArrowRight, Sparkles, ShieldCheck, Target, 
  UtensilsCrossed, Camera, TrendingUp, Search, 
  CheckCircle2, ChevronRight, ChevronLeft, LayoutDashboard,
  User, Briefcase, MessageSquare, PieChart, Info, Globe, 
  GraduationCap, IndianRupee, FileText, Star, Quote, Lock, 
  FileCode, Users, Zap, Award, ExternalLink, Headset, Database, Link2
} from 'lucide-react';

export default function App() {
  const [view, setView] = useState('landing'); 
  const [step, setStep] = useState(1);
  const [crmStatus, setCrmStatus] = useState('disconnected'); // disconnected, connecting, connected
  const [formData, setFormData] = useState({ 
    name: '', 
    niche: '', 
    goals: [], 
    vibe: '', 
    budget: '' 
  });

  // Global Keyboard Listener for 'Enter'
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if (view === 'architect') {
          if (step < 5 && (step !== 1 || formData.name)) {
            setStep(s => s + 1);
          } else if (step === 5) {
            handleFinishArchitect();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view, step, formData]);

  const navigate = (newView) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView(newView);
  };

  const toggleGoal = (goal) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal) 
        ? prev.goals.filter(g => g !== goal) 
        : [...prev.goals, goal]
    }));
  };

  const handleFinishArchitect = () => {
    navigate('loading');
    setTimeout(() => navigate('results'), 2500);
  };

  // --- Components ---

  const Navbar = () => (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b z-50 px-4">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('landing')}>
          <div className="bg-emerald-800 p-2 rounded-xl shadow-lg shadow-emerald-100">
            <ChefHat className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 italic">Briefly</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">
          <button onClick={() => navigate('landing')} className="hover:text-emerald-800 transition-colors">Home</button>
          <button onClick={() => navigate('why-us')} className="hover:text-emerald-800 transition-colors">Strategy</button>
          <button onClick={() => navigate('about')} className="hover:text-emerald-800 transition-colors">The Creator</button>
          <button onClick={() => navigate('case-study')} className="hover:text-emerald-800 transition-colors">Case Study</button>
        </nav>

        <div className="flex gap-3">
          <button 
            onClick={() => navigate('role-select')}
            className="hidden sm:flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-6 py-2.5 rounded-full text-[10px] font-black hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest"
          >
            Portals
          </button>
          <button 
            onClick={() => navigate('architect')}
            className="bg-emerald-800 text-white px-6 py-2.5 rounded-full text-[10px] font-black hover:shadow-xl hover:shadow-emerald-100 transition-all uppercase tracking-widest"
          >
            Build a Brief
          </button>
        </div>
      </div>
    </header>
  );

  const HomeView = () => (
    <main className="pt-32">
      <section className="max-w-7xl mx-auto px-4 text-center py-20">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-10">
          <Sparkles className="w-4 h-4" />
          <span>India's Premium Culinary Bridge</span>
        </div>
        <h1 className="text-6xl md:text-[100px] font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">
          Precision in <br />
          <span className="text-emerald-800 italic font-serif">partnership.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
          The first AI-architected ecosystem connecting <strong>Chef Personal Brands</strong> and <strong>F&B Founders</strong> with specialized growth consultants in <strong>Delhi NCR</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button onClick={() => navigate('architect')} className="bg-emerald-800 text-white px-12 py-5 rounded-3xl text-xl font-black shadow-2xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-3">
            Start My Brief <ArrowRight className="w-6 h-6" />
          </button>
          <button onClick={() => navigate('crm')} className="bg-white border-2 border-slate-200 text-slate-900 px-12 py-5 rounded-3xl text-xl font-black hover:border-slate-900 transition-all flex items-center gap-3">
            <Database className="w-6 h-6" /> Connect CRM
          </button>
        </div>
      </section>

      {/* Collaborations */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Inspired by Collaborations with Global Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 grayscale opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex flex-col items-center"><span className="text-2xl font-black italic">Nestlé India</span><span className="text-[8px] uppercase tracking-widest mt-1">NPD Strategy</span></div>
            <div className="flex flex-col items-center"><span className="text-2xl font-black">ArihantPlus</span><span className="text-[8px] uppercase tracking-widest mt-1">Growth Architecture</span></div>
            <div className="flex flex-col items-center"><span className="text-2xl font-black italic">SP Jain School</span><span className="text-[8px] uppercase tracking-widest mt-1">Global Management</span></div>
            <div className="flex flex-col items-center"><span className="text-2xl font-black">Eco-Thrive</span><span className="text-[8px] uppercase tracking-widest mt-1">Sustainability</span></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all">
              <User className="text-emerald-700 w-12 h-12 mb-8" />
              <h3 className="text-2xl font-black mb-4">Chef Personal Branding</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Transition from the kitchen to a digital powerhouse through structured identity architecture.</p>
           </div>
           <div className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all">
              <UtensilsCrossed className="text-emerald-700 w-12 h-12 mb-8" />
              <h3 className="text-2xl font-black mb-4">Restaurant Concepts</h3>
              <p className="text-slate-500 font-medium leading-relaxed">End-to-end strategic launches for specialty cafés and high-end dining concepts in Delhi NCR.</p>
           </div>
           <div className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all">
              <Globe className="text-emerald-700 w-12 h-12 mb-8" />
              <h3 className="text-2xl font-black mb-4">Global Strategy</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Bridging Gurgaon-local insights with Dubai's luxury standards for international scale.</p>
           </div>
        </div>
      </section>
    </main>
  );

  const CRMView = () => (
    <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
      <div className="bg-white rounded-[56px] p-12 md:p-20 shadow-2xl border border-slate-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-800">
             <Database className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tighter">CRM Sync Portal.</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Connect Briefly to your Sales Ecosystem</p>
          </div>
        </div>

        {crmStatus === 'disconnected' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
               Sync your <strong>Briefly Architected leads</strong> directly into your existing CRM. We support HubSpot, Salesforce, and Zoho integrations for high-end culinary consultants.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
               <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Preferred CRM Platform</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-emerald-800 outline-none font-bold">
                     <option>HubSpot</option>
                     <option>Salesforce</option>
                     <option>Zoho CRM</option>
                     <option>Custom Webhook</option>
                  </select>
               </div>
               <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Sync Frequency</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-emerald-800 outline-none font-bold">
                     <option>Real-Time</option>
                     <option>Every 12 Hours</option>
                     <option>Daily Digest</option>
                  </select>
               </div>
            </div>
            <button 
              onClick={() => {
                setCrmStatus('connecting');
                setTimeout(() => setCrmStatus('connected'), 3000);
              }}
              className="w-full bg-slate-900 text-white py-5 rounded-3xl font-black text-lg shadow-xl flex items-center justify-center gap-3"
            >
               Authorize CRM Connection <Link2 className="w-5 h-5" />
            </button>
          </div>
        )}

        {crmStatus === 'connecting' && (
           <div className="py-20 text-center animate-pulse">
              <div className="w-16 h-16 border-4 border-slate-100 border-t-emerald-800 rounded-full animate-spin mx-auto mb-8" />
              <h3 className="text-2xl font-black">Establishing Secure Bridge...</h3>
              <p className="text-slate-400">Verifying API credentials with global CRM standards.</p>
           </div>
        )}

        {crmStatus === 'connected' && (
           <div className="py-10 text-center animate-in zoom-in-95">
              <div className="bg-emerald-50 text-emerald-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                 <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-black mb-2">CRM Synchronized.</h3>
              <p className="text-slate-500 font-medium mb-10 italic">"Precision data flow established."</p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left max-w-sm mx-auto mb-10">
                 <div className="flex justify-between mb-2">
                    <span className="text-[10px] font-black uppercase text-slate-400">System Status</span>
                    <span className="text-[10px] font-black uppercase text-emerald-600">Active</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-[10px] font-black uppercase text-slate-400">Last Sync</span>
                    <span className="text-[10px] font-black uppercase text-slate-900 italic">Just Now</span>
                 </div>
              </div>
              <button onClick={() => setView('landing')} className="text-emerald-800 font-black text-xs uppercase tracking-[0.3em]">Return to Strategy</button>
           </div>
        )}
      </div>
    </div>
  );

  const AboutView = () => (
    <div className="pt-40 pb-20 px-4 max-w-5xl mx-auto">
      <div className="bg-white rounded-[56px] p-12 md:p-20 shadow-2xl border border-slate-100 relative overflow-hidden">
        <h1 className="text-6xl font-black mb-4 tracking-tighter text-slate-900">Kanishk Dawar.</h1>
        <p className="text-2xl font-bold text-emerald-800 mb-12 flex items-center gap-3">
          Product Strategist | <strong>Full-Time SP Jain MGB Student</strong>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-slate-600 text-xl leading-relaxed mb-16">
          <p>
            Briefly was developed by Kanishk Dawar—a <strong>full-time Master of Global Business (MGB) student</strong> at <strong>SP Jain School of Global Management</strong>.
          </p>
          <p>
            Leveraging 2.5 years of experience across <strong>various restaurant concepts</strong>, Kanishk bridges kitchen passion with business precision in the <strong>Delhi NCR market</strong>.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 mb-16">
          <a href="https://www.linkedin.com/in/kanishk-dawar-63b112169" target="_blank" className="flex items-center gap-3 bg-[#0077b5] px-8 py-4 rounded-2xl font-black text-sm text-white hover:opacity-90 transition-all shadow-xl shadow-blue-100">
             <User className="w-5 h-5" /> View LinkedIn Profile
          </a>
          <button onClick={() => navigate('why-us')} className="flex items-center gap-3 bg-slate-900 px-8 py-4 rounded-2xl font-black text-sm text-white hover:bg-slate-800 transition-all">
             <Briefcase className="w-5 h-5" /> View Strategy
          </button>
        </div>
      </div>
    </div>
  );

  const ArchitectView = () => (
    <div className="pt-40 pb-20 min-h-screen bg-slate-50 flex items-center px-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-[48px] shadow-2xl p-10 md:p-16 border border-slate-100 relative">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-black tracking-tighter">Brief Architect</h2>
            <div className="bg-slate-900 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
               Step {step} of 5
            </div>
          </div>

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h3 className="text-2xl font-black mb-8">What is the Brand or Chef Name?</h3>
              <input 
                autoFocus
                type="text" 
                placeholder="e.g. Chef Kanishk's Table" 
                className="w-full px-8 py-6 rounded-[32px] bg-slate-50 border-2 border-transparent focus:border-emerald-800 focus:bg-white outline-none transition-all font-black text-2xl shadow-inner" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
              <p className="mt-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 italic">
                <Sparkles className="w-4 h-4 text-emerald-800" /> Pro-Tip: Tap 'Enter' to continue
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h3 className="text-2xl font-black mb-2">Project Objectives.</h3>
              <p className="text-slate-400 mb-8 font-bold text-[10px] uppercase tracking-widest">Select multiple</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Chef Personal Branding', 'Concept Strategy', 'Performance Growth', 'UI/UX Design', 'PR & Networking', 'Menu Engineering'].map(g => (
                  <button 
                    key={g} 
                    onClick={() => toggleGoal(g)} 
                    className={`p-6 rounded-[24px] border-2 text-left transition-all ${formData.goals.includes(g) ? 'border-emerald-800 bg-emerald-50' : 'border-slate-50 hover:border-slate-200'}`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-black text-[10px] uppercase tracking-[0.15em]">{g}</span>
                      {formData.goals.includes(g) && <CheckCircle2 className="w-5 h-5 text-emerald-800" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
               <h3 className="text-2xl font-black mb-10">Monthly Investment Scope.</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['₹50k - ₹1L / mo', '₹1.5L - ₹3L / mo', '₹3L - ₹5L / mo', '₹5L+ Enterprise'].map(b => (
                  <button key={b} onClick={() => setFormData({...formData, budget: b})} className={`p-6 rounded-[24px] border-2 text-left flex items-center gap-4 transition-all ${formData.budget === b ? 'border-emerald-800 bg-emerald-50' : 'border-slate-50'}`}>
                    <IndianRupee className="w-5 h-5 text-emerald-800" /> 
                    <span className="font-black text-[10px] uppercase tracking-widest">{b}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
               <h3 className="text-2xl font-black mb-10">The Design Vibe.</h3>
               <div className="grid grid-cols-2 gap-4">
                {['Modern India', 'Minimalist', 'Loud & Pop', 'Rustic Luxury'].map(v => (
                  <button key={v} onClick={() => setFormData({...formData, vibe: v})} className={`p-6 rounded-[24px] border-2 text-left transition-all ${formData.vibe === v ? 'border-emerald-800 bg-emerald-50' : 'border-slate-50'}`}>
                    <span className="font-black text-[10px] uppercase tracking-widest">{v}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-in fade-in zoom-in-95 text-center">
              <div className="bg-emerald-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-800">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tighter">Architect Lead Ready.</h3>
              <p className="text-slate-500 mb-12 font-medium">Briefly will now match {formData.name} with vetted partners.</p>
              <button 
                onClick={handleFinishArchitect}
                className="w-full bg-emerald-800 text-white py-6 rounded-[28px] font-black text-xl shadow-2xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-3"
              >
                GENERATE AI BRIEF <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {step < 5 && (
            <div className="flex justify-between mt-20">
              {step > 1 ? <button onClick={() => setStep(s => s-1)} className="font-black text-slate-300 text-[10px] uppercase tracking-[0.3em] hover:text-slate-900">Back</button> : <div />}
              <button 
                onClick={() => setStep(s => s+1)} 
                disabled={step === 1 && !formData.name}
                className="bg-slate-900 text-white px-12 py-4 rounded-[20px] font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:bg-emerald-800 disabled:opacity-20 transition-all ml-auto"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-sans text-slate-900 selection:bg-emerald-100">
      <Navbar />
      
      {view === 'landing' && <HomeView />}
      {view === 'crm' && <CRMView />}
      {view === 'architect' && <ArchitectView />}
      {view === 'about' && <AboutView />}
      {view === 'role-select' && (
        <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter">Select Ecosystem Portal.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div onClick={() => navigate('dashboard')} className="bg-white p-12 rounded-[56px] border-2 border-slate-50 hover:border-emerald-800 cursor-pointer transition-all shadow-sm group">
               <ChefHat className="w-14 h-14 text-emerald-800 mb-8 group-hover:scale-110 transition-transform" />
               <h3 className="text-3xl font-black mb-2">Chef Portal</h3>
               <p className="text-slate-500 font-medium italic leading-relaxed">Manage project milestones and concept architecture.</p>
            </div>
            <div onClick={() => navigate('consultant')} className="bg-white p-12 rounded-[56px] border-2 border-slate-50 hover:border-slate-900 cursor-pointer transition-all shadow-sm group">
               <Briefcase className="w-14 h-14 text-slate-900 mb-8 group-hover:scale-110 transition-transform" />
               <h3 className="text-3xl font-black mb-2">Consultant Hub</h3>
               <p className="text-slate-500 font-medium italic leading-relaxed">Access high-intent culinary leads and detailed AI briefs.</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Strategic Advisor */}
      <div className="fixed bottom-10 right-10 z-[100] flex items-center gap-4 group">
         <div className="bg-white text-slate-900 px-6 py-3 rounded-2xl shadow-2xl border border-slate-100 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-x-4 group-hover:translate-x-0">
            Talk to Strategic Advisor
         </div>
         <button 
           onClick={() => alert("Connecting you with an MGB Strategic Advisor from SP Jain...")}
           className="bg-slate-900 text-white p-6 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
         >
           <Headset className="w-7 h-7" />
         </button>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
               <div className="flex items-center gap-2 mb-10">
                <ChefHat className="text-emerald-800 w-8 h-8" />
                <span className="text-3xl font-black tracking-tighter italic">Briefly</span>
              </div>
              <p className="text-slate-400 text-[11px] font-black leading-relaxed max-w-sm uppercase tracking-[0.2em] mb-8">
                A Strategic Platform by <strong>Kanishk Dawar</strong> | Master of Global Business Student at <strong>SP Jain School of Global Management</strong> | Gurgaon • Dubai.
              </p>
            </div>
            <div>
              <h5 className="font-black uppercase text-[10px] tracking-widest text-slate-300 mb-8 italic">Strategy</h5>
              <div className="flex flex-col gap-5 text-xs font-black uppercase tracking-widest text-slate-500">
                <button onClick={() => navigate('why-us')} className="text-left hover:text-emerald-800 transition-colors">Precision Focus</button>
                <button onClick={() => navigate('case-study')} className="text-left hover:text-emerald-800 transition-colors">Blue Ocean Case</button>
                <button onClick={() => navigate('about')} className="text-left hover:text-emerald-800 transition-colors">Founder Identity</button>
              </div>
            </div>
            <div>
               <h5 className="font-black uppercase text-[10px] tracking-widest text-slate-300 mb-8 italic">Legal</h5>
               <div className="flex flex-col gap-5 text-xs font-black uppercase tracking-widest text-slate-500">
                <button onClick={() => alert("Privacy Standards: Briefly uses enterprise-grade encryption.")} className="text-left hover:text-emerald-800 transition-colors">Privacy</button>
                <button onClick={() => alert("Academic Integrity: Briefly is a capstone project for SP Jain MGB.")} className="text-left hover:text-emerald-800 transition-colors">Terms</button>
                <a href="https://www.linkedin.com/in/kanishk-dawar-63b112169" target="_blank" className="hover:text-[#0077b5] transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="pt-16 border-t border-slate-100 text-center opacity-30">
             <p className="text-[10px] font-black uppercase tracking-[0.8em]">Precision in Every Partnership • 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
