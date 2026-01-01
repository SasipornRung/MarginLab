import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, Target, Clock, Lock, CheckCircle2, X, ChevronRight } from 'lucide-react';

export default function MarginLab() {
  // --- STATE MANAGEMENT ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Choose Mode, 2: Form
  const [selectedMode, setSelectedMode] = useState(null);
  const [formData, setFormData] = useState({
    businessType: '',
    painPoint: '',
    solutionGoal: '',
    hasRevenue: 'Yes',
    decisionMaker: '',
    numbers: '',
    agreements: {
      scope: false,
      notDo: false,
      dataPurge: false,
      feedback: false
    }
  });

  // --- HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name) => {
    setFormData(prev => ({
      ...prev,
      agreements: { ...prev.agreements, [name]: !prev.agreements[name] }
    }));
  };

  const resetFlow = () => {
    setIsModalOpen(false);
    setStep(1);
    setSelectedMode(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Data:", { mode: selectedMode, ...formData });
    alert("Application Submitted! We'll review your case within 24 hours.");
    resetFlow();
  };

  // --- UI COMPONENTS ---
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <nav className="relative z-10 border-b border-slate-800/50 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/20">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase">Margin<span className="text-cyan-400">Lab</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#how" className="hover:text-cyan-400 transition-colors">How it works</a>
            <a href="#modes" className="hover:text-cyan-400 transition-colors">Analytical Modes</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 container mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
          <Zap className="w-3 h-3" /> SME Optimization Support
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
          Fix profit leaks <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            in 14 days.
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          Short-term analytical support for SME with urgent margin or cost problems. 
          <span className="text-slate-200"> No fluff. No long-term contracts.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-xl shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Apply for free case <span className="bg-slate-950/10 px-2 py-0.5 rounded text-sm tracking-tighter">3 Slots</span>
          </button>
          <button className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
            How it works <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Diagnose money leaks", desc: "Rapid forensic analysis of your current margin structure." },
            { icon: Target, title: "Identify leverage points", desc: "Focus on the 20% of actions that drive 80% of profit." },
            { icon: CheckCircle2, title: "Executable action plan", desc: "Clear steps you can implement tomorrow morning." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all group">
              <item.icon className="w-10 h-10 text-cyan-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 italic font-medium">"Not reports. Not slides. Just decisions."</p>
      </section>

      {/* 3-Case Rule & Footer - ย่อๆ */}
      <section className="container mx-auto px-6 py-32 text-center">
        <div className="max-w-2xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-transparent border border-slate-800">
          <Lock className="w-12 h-12 text-cyan-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4 text-slate-100">The 3-Case Rule</h2>
          <p className="text-slate-400 text-lg">We accept only <span className="text-cyan-400 font-bold">3 free cases</span>. Once the slots are filled, the lab is closed to maintain focus.</p>
        </div>
      </section>

      {/* --- MODAL FLOW --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-md" onClick={resetFlow} />
          
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-slate-900" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">Margin Lab Application</h3>
              </div>
              <button onClick={resetFlow} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="p-8 max-h-[75vh] overflow-y-auto">
              {step === 1 ? (
                /* Step 1: Choose Mode */
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Select Your Path</h2>
                    <p className="text-slate-400">Choose how deep you want to go.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button 
                      onClick={() => { setSelectedMode('quick'); setStep(2); }}
                      className="group p-6 rounded-2xl border-2 border-slate-800 hover:border-yellow-500/50 bg-slate-900 text-left transition-all hover:bg-yellow-500/5"
                    >
                      <Zap className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="text-xl font-bold text-white mb-1">Quick Insight</h4>
                      <p className="text-slate-400 text-sm mb-4">No sensitive data. Talk in analogies.</p>
                      <div className="text-xs font-bold text-yellow-500 flex items-center gap-1">GO QUICK <ChevronRight className="w-3 h-3" /></div>
                    </button>
                    <button 
                      onClick={() => { setSelectedMode('deep'); setStep(2); }}
                      className="group p-6 rounded-2xl border-2 border-slate-800 hover:border-red-500/50 bg-slate-900 text-left transition-all hover:bg-red-500/5"
                    >
                      <Target className="w-10 h-10 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="text-xl font-bold text-white mb-1">Deep Dive (NDA)</h4>
                      <p className="text-slate-400 text-sm mb-4">Full data visibility. Executable KPI plan.</p>
                      <div className="text-xs font-bold text-red-500 flex items-center gap-1">GO DEEP <ChevronRight className="w-3 h-3" /></div>
                    </button>
                  </div>
                </div>
              ) : (
                /* Step 2: Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className={`p-4 rounded-xl flex items-center gap-4 ${selectedMode === 'quick' ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                    {selectedMode === 'quick' ? <Zap className="w-6 h-6 text-yellow-500" /> : <Target className="w-6 h-6 text-red-500" />}
                    <div>
                      <h4 className="font-bold text-white capitalize">{selectedMode} Mode Selected</h4>
                      <p className="text-xs text-slate-400">{selectedMode === 'quick' ? 'Perfect for high-level strategy without data risk.' : 'Requires Digital NDA & specific data for precision.'}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Business Type</label>
                        <input required name="businessType" value={formData.businessType} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="e.g. Coffee Shop, Hostel" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Decision Maker</label>
                        <input required name="decisionMaker" value={formData.decisionMaker} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Who can say YES?" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">The "Burning" Pain Point</label>
                      <textarea required name="painPoint" value={formData.painPoint} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors h-24" placeholder="What keeps you awake?" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">The One Metric to Move</label>
                      <input required name="solutionGoal" value={formData.solutionGoal} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="e.g. Reduce Food Cost by 5%" />
                    </div>
                  </div>

                  {/* Trust Section */}
                  <div className="pt-6 border-t border-slate-800 space-y-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Trust Agreement</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: 'scope', label: '14-day Sprint Diagnostic' },
                        { id: 'dataPurge', label: 'Automatic Data Purge after 14 days' },
                        { id: 'feedback', label: 'I allow anonymized case study use' }
                      ].map(item => (
                        <label key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-800 cursor-pointer hover:border-slate-600 transition-colors">
                          <input required type="checkbox" checked={formData.agreements[item.id]} onChange={() => handleCheckboxChange(item.id)} className="w-4 h-4 accent-cyan-500" />
                          <span className="text-sm text-slate-300 font-medium">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button type="button" onClick={() => setStep(1)} className="px-6 py-4 font-bold text-slate-500 hover:text-white transition-colors">Back</button>
                    <button type="submit" className="flex-1 px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black rounded-xl shadow-lg shadow-cyan-500/20 transition-all">
                      SUBMIT CASE
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
