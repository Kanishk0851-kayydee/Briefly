"use client";
import React, { useState } from 'react';
import { 
  ChefHat, ArrowRight, Sparkles, ShieldCheck, Target, 
  UtensilsCrossed, Camera, TrendingUp, Search, 
  CheckCircle2, ChevronRight, ChevronLeft, LayoutDashboard,
  User, Briefcase, MessageSquare, PieChart, Info, Globe, 
  GraduationCap, IndianRupee, FileText, Star, Quote, Lock, FileCode
} from 'lucide-react';

export default function App() {
  const [view, setView] = useState('landing'); 
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', niche: '', goal: '', vibe: '', budget: '' });

  const navigate = (newView) => {
    window.scrollTo(0, 0);
    setView(newView);
  };

  // --- Components ---

  const Navbar = () => (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('landing')}>
          <div className="bg-emerald-700 p-2 rounded-xl">
            <ChefHat className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 italic">Briefly.in</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">
          <button onClick={() => navigate('landing')} className="hover:text-emerald-700 transition-colors">Home</button>
          <button onClick={() => navigate('why-us')} className="hover:text-emerald-700 transition-colors">Why Us</button>
          <button onClick={() => navigate('reviews')} className="hover:text-emerald-700 transition-colors">Reviews</button>
          <button onClick={() => navigate('about')} className="hover:text-emerald-700 transition-colors">The Creator</button>
        </nav>

        <div className="flex gap-4">
          <button 
            onClick={() => navigate('role-select')}
            className="hidden sm:block border-2 border-slate-900 text-slate-900 px-5 py-2 rounded-full text-xs font-black hover:bg-slate-900 hover:text-white transition-all"
          >
            Enter Portal
          </button>
          <button 
            onClick={() => navigate('architect')}
            className="bg-emerald-700 text-white px-6 py-2.5 rounded-full text-xs font-black hover:shadow-lg hover:shadow-emerald-100 transition-all"
          >
            Build a Brief
          </button>
        </div>
      </div>
    </header>
  );

  const RoleSelect = () => (
    <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-4 tracking-tighter">Choose your path.</h2>
      <p className="text-center text-slate-500 mb-12 font-medium">Select the interface that matches your professional objective.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div 
          onClick={() => navigate('dashboard')}
          className="bg-white p-10 rounded-[40px] border-2 border-slate-100 hover:border-emerald-600 cursor-pointer transition-all group"
        >
          <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all">
            <UtensilsCrossed className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-3">I am a Chef / Founder</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Manage your restaurant branding projects, track agency milestones, and view AI-architected briefs.</p>
        </div>
        <div 
          onClick={() => navigate('consultant')}
          className="bg-white p-10 rounded-[40px] border-2 border-slate-100 hover:border-slate-900 cursor-pointer transition-all group"
        >
          <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-3">I am a Consultant</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Access high-intent culinary leads, review detailed project requirements, and submit strategic proposals.</p>
        </div>
      </div>
    </div>
  );

  const AboutView = () => (
    <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
      <div className="bg-white rounded-[40px] p-12 md:p-20 shadow-sm border border-slate-100">
        <h1 className="text-5xl font-black mb-4 tracking-tighter">Kanishk Dawar</h1>
        <p className="text-xl font-bold text-emerald-700 mb-10 flex items-center gap-2">
          Founder & Product Strategist | <strong>SP Jain MGB '26</strong>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-600 text-lg leading-relaxed mb-12">
          <div>
            Born from a fusion of <strong>Culinary Arts</strong> and <strong>Global Business Strategy</strong>, Briefly was developed by Kanishk Dawar—a <strong>full-time Master of Global Business (MGB) student</strong> at <strong>SP Jain School of Global Management</strong>.
          </div>
          <div>
            Having worked on <strong>various restaurant concepts</strong> across the hospitality spectrum, Kanishk leverages 2.5 years of industry experience to solve the trust deficit in the Indian F&B marketing space.
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl font-bold text-xs text-slate-500 border border-slate-100">
             <GraduationCap className="w-4 h-4" /> Full-Time MGB Student
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl font-bold text-xs text-slate-500 border border-slate-100">
             <Globe className="w-4 h-4" /> Based in Gurgaon / Dubai
          </div>
          <a 
            href="https://www.linkedin.com/in/kanishk-dawar-63b112169" 
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-2xl font-bold text-xs text-white hover:bg-blue-700 transition-all"
          >
             <User className="w-4 h-4" /> View LinkedIn
          </a>
        </div>
      </div>
    </div>
  );

  const CaseStudyView = () => (
    <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
      <div className="bg-slate-900 text-white rounded-[40px] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[120px]" />
        <h2 className="text-5xl font-black mb-8 tracking-tighter leading-none">The Genesis of Briefly.</h2>
        <div className="space-y-8 text-slate-400 text-lg">
          <p>
            During <strong>various restaurant concept</strong> developments in India, a recurring theme emerged: the disconnect between a chef's vision and an agency's execution.
          </p>
          <p>
            The <strong>Delhi NCR market</strong> is one of the most competitive F&B landscapes globally. Briefly was built as a capstone of academic rigor and operational experience to ensure that founders aren't just "spending" on marketing, but <strong>investing in growth</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-white/10">
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-widest mb-3">The Problem</h4>
              <p className="text-sm italic">"Vague briefs leading to 40% wasted marketing budget in SME hospitality."</p>
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-widest mb-3">The Solution</h4>
              <p className="text-sm italic">"AI-driven requirement architecture that speaks both 'Kitchen' and 'Marketing'."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ReviewsView = () => (
    <div className="pt-40 pb-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-16 tracking-tighter">Echoes of Excellence.</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Vikram Mehta", role: "Founder, Spice Lab India", text: "Briefly transformed how we talk to agencies. The AI brief felt like it was written by someone who actually knows the pressure of a Delhi Friday night service." },
          { name: "Priya Sharma", role: "Creative Director, Bloom Digital", text: "As a consultant, receiving a 'Briefly Architected' project is a dream. No guesswork. Pure strategy." },
          { name: "Chef Ananya", role: "Artisanal Bakery Concept", text: "Finally, a platform that understands that a bakery's vibe is just as important as its SEO." }
        ].map((rev, i) => (
          <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm relative">
            <Quote className="absolute top-6 right-6 text-slate-100 w-12 h-12" />
            <div className="flex gap-1 text-amber-400 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-slate-600 italic mb-8 font-medium">"{rev.text}"</p>
            <div>
              <p className="font-black text-slate-900">{rev.name}</p>
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest">{rev.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ArchitectView = () => (
    <div className="pt-40 pb-20 min-h-screen bg-slate-50 flex items-center px-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-16 relative">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-black tracking-tighter">Brief Architect</h2>
            <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Step {step} of 4</span>
          </div>

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h3 className="text-xl font-bold mb-6">Identify your Concept.</h3>
              <input 
                type="text" 
                placeholder="Restaurant or Brand Name" 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-emerald-700 focus:bg-white outline-none transition-all font-bold" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
            </div>
          )}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h3 className="text-xl font-bold mb-6">Choose your Objective.</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Brand Identity', 'Growth Marketing', 'Launch PR', 'Design Refresh'].map(g => (
                  <button key={g} onClick={() => setFormData({...formData, goal: g})} className={`p-6 rounded-2xl border-2 text-left transition-all ${formData.goal === g ? 'border-emerald-700 bg-emerald-50' : 'border-slate-50'}`}>
                    <p className="font-black text-xs uppercase tracking-widest">{g}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
               <h3 className="text-xl font-bold mb-6">Select your Investment Range.</h3>
               <div className="grid grid-cols-2 gap-4">
                {['₹50k - ₹1L', '₹1L - ₹3L', '₹3L - ₹5L', '₹5L+ Premium'].map(b => (
                  <button key={b} onClick={() => setFormData({...formData, budget: b})} className={`p-6 rounded-2xl border-2 text-left flex items-center gap-3 ${formData.budget === b ? 'border-emerald-700 bg-emerald-50 font-black' : 'border-slate-50 font-bold'}`}>
                    <IndianRupee className="w-4 h-4" /> {b}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-8">
               <h3 className="text-xl font-bold mb-6">The Aesthetic Vision.</h3>
               <div className="space-y-3">
                {['Modern India', 'Minimalist', 'Loud & Vibrant', 'Rustic Heritage'].map(v => (
                  <button key={v} onClick={() => setFormData({...formData, vibe: v})} className={`w-full p-5 rounded-2xl border-2 text-left transition-all ${formData.vibe === v ? 'border-emerald-700 bg-emerald-50 font-black' : 'border-slate-50 font-bold'}`}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-16">
            {step > 1 ? <button onClick={() => setStep(s => s-1)} className="font-black text-slate-300 text-xs uppercase tracking-widest">Back</button> : <div />}
            <button 
              onClick={() => step < 4 ? setStep(s => s+1) : navigate('loading')} 
              className="bg-slate-900 text-white px-10 py-3.5 rounded-2xl font-black text-xs tracking-widest shadow-xl active:scale-95 transition-all"
            >
              {step < 4 ? 'NEXT' : 'FINALIZE BRIEF'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-emerald-100">
      <Navbar />
      
      {view === 'landing' && (
        <main className="pt-48 pb-20 px-4">
          <section className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Precision in every <br />
              <span className="text-emerald-700 italic">partnership.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
              India’s first strategic bridge between <strong>Culinary Founders</strong> and high-performance marketing consultants in the <strong>Delhi NCR</strong> landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => navigate('architect')}
                className="bg-emerald-700 text-white px-12 py-5 rounded-3xl text-lg font-black shadow-2xl hover:shadow-emerald-200 transition-all hover:-translate-y-1"
              >
                Start My Brief Architect
                <ArrowRight className="inline ml-2" />
              </button>
              <button 
                onClick={() => navigate('case-study')}
                className="text-slate-900 font-black text-lg border-b-4 border-slate-900 pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-all"
              >
                The Case Study
              </button>
            </div>
          </section>
        </main>
      )}

      {view === 'why-us' && (
        <div className="pt-40 pb-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 tracking-tighter">Why Briefly?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-6">
                 <div className="bg-emerald-50 text-emerald-700 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"><FileCode className="w-7 h-7" /></div>
                 <div>
                    <h4 className="text-xl font-black mb-2">India-First Strategy</h4>
                    <p className="text-slate-500 text-sm">We focus on the unique unit economics and consumer behavior of the <strong>Indian F&B market</strong>.</p>
                 </div>
              </div>
              <div className="flex gap-6">
                 <div className="bg-slate-50 text-slate-900 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"><ShieldCheck className="w-7 h-7" /></div>
                 <div>
                    <h4 className="text-xl font-black mb-2">Vetted Integrity</h4>
                    <p className="text-slate-500 text-sm">Every agency on our portal undergoes a 24-point audit to ensure they can deliver on <strong>culinary branding</strong>.</p>
                 </div>
              </div>
            </div>
            <div className="bg-emerald-700 text-white p-12 rounded-[40px] flex items-center justify-center text-center">
               <div>
                  <Sparkles className="w-12 h-12 mb-6 mx-auto opacity-50" />
                  <p className="text-2xl font-black mb-4 italic">"Briefly is the missing recipe for restaurant marketing success."</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">Kanishk Dawar | Founder</p>
               </div>
            </div>
          </div>
        </div>
      )}

      {view === 'architect' && <ArchitectView />}
      {view === 'about' && <AboutView />}
      {view === 'case-study' && <CaseStudyView />}
      {view === 'reviews' && <ReviewsView />}
      {view === 'role-select' && <RoleSelect />}
      
      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ChefHat className="text-emerald-700 w-6 h-6" />
                <span className="text-xl font-black tracking-tighter">Briefly.in</span>
              </div>
              <p className="text-slate-400 text-xs font-bold leading-relaxed max-w-sm uppercase tracking-widest">
                Developed by <strong>Kanishk Dawar</strong> | Full-Time MGB Student at <strong>SP Jain School of Global Management</strong> | Gurgaon • Dubai
              </p>
            </div>
            <div className="flex flex-wrap gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] md:justify-end">
              <button onClick={() => alert("Privacy Policy: Briefly maintains zero-footprint data standards.")} className="hover:text-emerald-700 transition-colors flex items-center gap-2"><Lock className="w-3 h-3" /> Privacy</button>
              <button onClick={() => alert("Terms: Projects are milestone-based and trust-first.")} className="hover:text-emerald-700 transition-colors flex items-center gap-2"><FileText className="w-3 h-3" /> Terms</button>
              <a href="https://www.linkedin.com/in/kanishk-dawar-63b112169" target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
