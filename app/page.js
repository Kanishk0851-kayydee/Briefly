"use client";
import React, { useState } from 'react';
import { 
  ChefHat, ArrowRight, Sparkles, ShieldCheck, Target, 
  UtensilsCrossed, Camera, TrendingUp, Search, 
  CheckCircle2, ChevronRight, ChevronLeft, LayoutDashboard,
  User, Briefcase, MessageSquare, PieChart, Info, Globe, GraduationCap
} from 'lucide-react';

// --- Professional Data ---
const AGENCIES = [
  { id: 1, name: "The Alchemists", specialty: "High-End Fine Dining Branding", rating: 4.9, image: "https://images.unsplash.com/photo-1550966841-3ee32289668e?q=80&w=200", tags: ["Visual Identity", "Menu Design"] },
  { id: 2, name: "Metric Move", specialty: "Performance Marketing for D2C Brands", rating: 4.8, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200", tags: ["Ad Strategy", "SEO"] },
  { id: 3, name: "Plate & Palette", specialty: "Social Media & Food Photography", rating: 5.0, image: "https://images.unsplash.com/photo-1542034825-75117aded8b3?q=80&w=200", tags: ["Reels", "Content Production"] }
];

export default function App() {
  const [view, setView] = useState('landing'); // landing, architect, loading, results, dashboard, consultant, about
  const [userRole, setUserRole] = useState('client'); // client, consultant
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', niche: '', goal: '', vibe: '' });

  // Navigation Logic
  const navigate = (newView) => {
    window.scrollTo(0, 0);
    setView(newView);
  };

  const finishArchitect = () => {
    setView('loading');
    setTimeout(() => setView('results'), 2000);
  };

  // --- Components ---

  const Navbar = () => (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('landing')}>
          <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-100">
            <ChefHat className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">Briefly</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-10 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <button onClick={() => navigate('landing')} className="hover:text-emerald-600 transition-colors">Home</button>
          <button onClick={() => navigate('about')} className="hover:text-emerald-600 transition-colors">About Kanishk</button>
          <button onClick={() => navigate('dashboard')} className="hover:text-emerald-600 transition-colors">Client Hub</button>
          <button onClick={() => navigate('consultant')} className="hover:text-emerald-600 transition-colors">Consultant Portal</button>
        </nav>

        <button 
          onClick={() => navigate('architect')}
          className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-emerald-600 transition-all shadow-xl hover:shadow-emerald-200 active:scale-95"
        >
          Build a Brief
        </button>
      </div>
    </header>
  );

  const AboutView = () => (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-slate-100">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="w-48 h-48 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0 border-4 border-emerald-50 shadow-inner">
              <User className="w-24 h-24" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 mb-2">Kanishk Dawar</h1>
              <p className="text-xl text-emerald-600 font-bold mb-4">Founder & Product Strategist</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-slate-100 px-4 py-1.5 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5" /> SP Jain MGB '26
                </span>
                <span className="bg-slate-100 px-4 py-1.5 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5" /> Dubai Based
                </span>
                <span className="bg-slate-100 px-4 py-1.5 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2">
                  <UtensilsCrossed className="w-3.5 h-3.5" /> Culinary Expert
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
            <p>
              Born from a fusion of **Culinary Arts** and **Global Business Strategy**, Briefly was developed by Kanishk Dawar—a Master of Global Business (MGB) student at **SP Jain School of Global Management**.
            </p>
            <p>
              Kanishk’s 2.5 years of professional experience in hospitality and education revealed a massive trust deficit in the F&B marketing sector. Briefly is his solution: an AI-driven bridge that helps high-end chefs and founders launch data-driven enterprises in competitive markets like Delhi NCR and Dubai.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-black text-slate-900 mb-2 uppercase text-xs tracking-widest">Academic Excellence</h4>
                <p className="text-sm">Trained under global mentors to apply emerging tech (AI & IoT) to traditional supply chain and marketing challenges.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-black text-slate-900 mb-2 uppercase text-xs tracking-widest">The Vision</h4>
                <p className="text-sm">To democratize professional branding for independent chefs, ensuring that world-class flavor is matched with world-class digital presence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ClientDashboard = () => (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black">Chef Dashboard</h1>
          <p className="text-slate-500">Welcome back, Managing your brand growth.</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Status</p>
            <p className="text-emerald-600 font-bold">Verfied Partner</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar stats */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <Sparkles className="absolute -right-4 -top-4 w-32 h-32 opacity-10 rotate-12" />
            <h3 className="text-xl font-bold mb-6">Brief Performance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/60">Active Briefs</span>
                <span className="font-black text-2xl">04</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/60">Agency Matches</span>
                <span className="font-black text-2xl text-emerald-400">12</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-white/60">In Negotiations</span>
                <span className="font-black text-2xl">02</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-emerald-600" /> Active Partnerships
          </h2>
          {AGENCIES.slice(0, 2).map(a => (
            <div key={a.id} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center justify-between group hover:border-emerald-200 transition-all shadow-sm">
              <div className="flex items-center gap-6">
                <img src={a.image} className="w-16 h-16 rounded-2xl object-cover" />
                <div>
                  <h4 className="font-black text-slate-900">{a.name}</h4>
                  <p className="text-sm text-slate-500">Project: Visual Identity Refresh</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-400">NEXT MILESTONE</p>
                  <p className="text-sm font-bold">Logo Review (May 15)</p>
                </div>
                <button className="bg-slate-100 p-3 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ConsultantDashboard = () => (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
       <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
             <Briefcase className="text-emerald-600" /> Consultant Portal
          </h1>
          <p className="text-slate-500 font-medium">Analyze high-intent leads and culinary briefs.</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-emerald-100">
           Find New Briefs
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Leads', val: '48', color: 'bg-blue-50 text-blue-600' },
          { label: 'Win Rate', val: '24%', color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Brief Accuracy', val: '98%', color: 'bg-orange-50 text-orange-600' },
          { label: 'Active Rev', val: '$12k', color: 'bg-purple-50 text-purple-600' },
        ].map(stat => (
          <div key={stat.label} className={`${stat.color} p-6 rounded-3xl border border-white/50 shadow-sm`}>
            <p className="text-xs font-black uppercase tracking-widest opacity-70 mb-1">{stat.label}</p>
            <p className="text-3xl font-black">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
        <h3 className="text-xl font-bold mb-6">Incoming Project Briefs</h3>
        <table className="w-full text-left">
          <thead className="text-xs font-black text-slate-400 uppercase tracking-widest border-b pb-4">
            <tr>
              <th className="pb-4">Client/Brand</th>
              <th className="pb-4">Goal</th>
              <th className="pb-4">Budget Level</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[
              { name: 'Kanishk\'s Bistro', goal: 'Market Entry Strategy', budget: 'Premium' },
              { name: 'Urban Spices', goal: 'Packaging Design', budget: 'Mid-Range' },
              { name: 'The Vegan Chef', goal: 'Influencer Growth', budget: 'High' },
            ].map(row => (
              <tr key={row.name} className="hover:bg-slate-50 transition-colors">
                <td className="py-6 font-bold">{row.name}</td>
                <td className="py-6 text-slate-500">{row.goal}</td>
                <td className="py-6">
                  <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600">{row.budget}</span>
                </td>
                <td className="py-6">
                  <button className="text-emerald-600 font-bold hover:underline">Review AI-Brief</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      
      {view === 'landing' && (
        <main className="pt-40 pb-20">
          <section className="max-w-7xl mx-auto px-4 text-center">
             <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-sm font-bold shadow-xl border border-slate-100 mb-10 animate-bounce">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-slate-800">Designed by Kanishk Dawar | SP Jain MGB</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
              Precision in every <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">partnership.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              The first AI-powered platform bridging the gap between <span className="text-slate-900 font-bold underline decoration-emerald-400 decoration-4">Culinary Founders</span> and specialized marketing consultants.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => navigate('architect')}
                className="group relative bg-emerald-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-emerald-700 transition-all hover:-translate-y-1 active:translate-y-0"
              >
                Start My Brief Architect
                <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('about')}
                className="text-slate-600 font-black text-lg hover:text-emerald-600 transition-colors flex items-center gap-2"
              >
                Meet the Founder <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* Social Proof */}
          <section className="max-w-6xl mx-auto px-4 mt-32 grid md:grid-cols-3 gap-12 text-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="p-8 border-r border-slate-200">
                <p className="text-5xl font-black mb-2">12+</p>
                <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Vetted Agencies</p>
             </div>
             <div className="p-8 border-r border-slate-200">
                <p className="text-5xl font-black mb-2">48</p>
                <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Successful Briefs</p>
             </div>
             <div className="p-8">
                <p className="text-5xl font-black mb-2">9.2</p>
                <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Trust Rating</p>
             </div>
          </section>
        </main>
      )}

      {view === 'architect' && (
        <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center px-4">
          <div className="max-w-2xl mx-auto w-full">
            <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-16 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-50">
                <div className="h-full bg-emerald-500 transition-all duration-700" style={{ width: `${(step/3)*100}%` }} />
              </div>

              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-8">
                  <h2 className="text-4xl font-black mb-4">Start your mission.</h2>
                  <p className="text-slate-500 mb-10 font-medium italic">"In the kitchen, prep is 90% of the work. In branding, the brief is the prep."</p>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Brand or Chef Name</label>
                  <input 
                    autoFocus
                    type="text" 
                    placeholder="e.g. Chef Kanishk's Table" 
                    className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-emerald-600 focus:bg-white outline-none transition-all text-xl font-bold" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
              )}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-8">
                  <h2 className="text-4xl font-black mb-10">What's the goal?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Visual Identity', 'Social Growth', 'Launch Strategy', 'Influencer PR'].map(g => (
                      <button 
                        key={g} 
                        onClick={() => setFormData({...formData, goal: g})} 
                        className={`p-8 rounded-3xl border-2 text-left transition-all ${formData.goal === g ? 'border-emerald-600 bg-emerald-50 shadow-inner' : 'border-slate-50 hover:border-slate-200'}`}
                      >
                        <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${formData.goal === g ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                           <Target className="w-5 h-5" />
                        </div>
                        <p className="font-black text-slate-900">{g}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-8">
                   <h2 className="text-4xl font-black mb-10">The Vibe.</h2>
                   <div className="space-y-4">
                    {['Minimalist & Modern', 'Rustic & Earthy', 'Bold & Futuristic', 'Elegant & Classic'].map(v => (
                      <button 
                        key={v} 
                        onClick={() => setFormData({...formData, vibe: v})} 
                        className={`w-full p-6 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${formData.vibe === v ? 'border-emerald-600 bg-emerald-50' : 'border-slate-50 hover:border-slate-200'}`}
                      >
                        <span className="font-bold text-lg">{v}</span>
                        {formData.vibe === v && <CheckCircle2 className="text-emerald-600 w-6 h-6" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-16">
                {step > 1 && <button onClick={() => setStep(s => s-1)} className="font-black text-slate-400 hover:text-slate-900 tracking-widest text-xs uppercase">Back</button>}
                <button 
                  onClick={() => step < 3 ? setStep(s => s+1) : finishArchitect()} 
                  className="bg-slate-900 text-white px-12 py-4 rounded-2xl font-black ml-auto shadow-2xl active:scale-95 transition-all"
                >
                  {step < 3 ? 'NEXT STEP' : 'GENERATE AI BRIEF'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {view === 'loading' && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
          <div className="relative">
             <div className="w-24 h-24 border-8 border-slate-100 border-t-emerald-600 rounded-full animate-spin" />
             <ChefHat className="absolute inset-0 m-auto w-8 h-8 text-slate-200 animate-pulse" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mt-10">Briefly AI is Architecting...</h2>
          <p className="text-slate-500 font-medium animate-pulse mt-2">Matching your vision with culinary marketing experts</p>
        </div>
      )}

      {view === 'results' && (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-black mb-2 text-slate-900">Matches for {formData.name}</h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Vetted specifically for {formData.vibe} Vibe
                </p>
              </div>
              <button className="bg-white border-2 border-slate-900 px-6 py-3 rounded-2xl font-black text-sm hover:bg-slate-900 hover:text-white transition-all">
                 Download Full AI Brief (PDF)
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {AGENCIES.map(a => (
                <div key={a.id} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-10 items-center hover:shadow-xl transition-all duration-500 group">
                  <div className="relative shrink-0">
                     <img src={a.image} className="w-40 h-40 rounded-3xl object-cover shadow-2xl" alt="" />
                     <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white p-3 rounded-2xl shadow-xl font-black text-sm">
                        {a.rating} ★
                     </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h4 className="font-black text-2xl mb-2 text-slate-900 group-hover:text-emerald-600 transition-colors">{a.name}</h4>
                    <p className="text-slate-500 text-lg font-medium mb-6">{a.specialty}</p>
                    <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                      {a.tags.map(tag => <span key={tag} className="px-5 py-2 bg-slate-50 rounded-xl text-xs font-black text-slate-500 border border-slate-100">{tag}</span>)}
                    </div>
                  </div>
                  <div className="shrink-0 space-y-3 w-full lg:w-auto">
                    <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black w-full hover:bg-emerald-600 transition-all shadow-xl">Connect Now</button>
                    <button className="text-slate-400 font-black text-xs uppercase tracking-widest w-full py-2 hover:text-slate-900">View Portfolio</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {view === 'about' && <AboutView />}
      {view === 'dashboard' && <ClientDashboard />}
      {view === 'consultant' && <ConsultantDashboard />}
      
      {/* Global Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
              <div className="bg-slate-200 p-1.5 rounded-lg">
                <ChefHat className="text-slate-500 w-4 h-4" />
              </div>
              <span className="text-lg font-black tracking-tighter text-slate-400">Briefly</span>
            </div>
            <p className="text-slate-400 text-sm font-bold">
              © 2026 Kanishk Dawar | Student Project | SP Jain School of Global Management
            </p>
            <div className="flex gap-8 text-xs font-black text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Case Study</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
