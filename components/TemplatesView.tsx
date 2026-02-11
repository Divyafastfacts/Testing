import React, { useState } from 'react';

interface Template {
  id: string;
  title: string;
  category: string;
  text: string;
}

export const TemplatesView: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([
    { id: '1', title: "Normal Physical Exam", category: "General", text: "Patient is alert and oriented x3. No acute distress. Heart: RRR, no murmurs. Lungs: CTA bilaterally. Abdomen: Soft, non-tender, non-distended." },
    { id: '2', title: "Viral URI Plan", category: "Pediatrics", text: "1. Supportive care with fluids and rest.\n2. Acetaminophen 15mg/kg every 4-6 hours prn fever.\n3. Return if difficulty breathing or high fever persists > 3 days." },
    { id: '3', title: "Type 2 Diabetes Follow-up", category: "Chronic Care", text: "Review of systems negative for chest pain, SOB, vision changes, or numbness in feet. Med compliance reported as good. Diet: Struggling with carbohydrate restriction." },
    { id: '4', title: "Normal Psych Status", category: "Psychiatry", text: "Appearance: Well-groomed. Behavior: Cooperative. Speech: Normal rate/tone. Mood: 'Okay'. Affect: Congruent. Thought Process: Linear. Suicidal Ideation: Denied." },
    { id: '5', title: "Suture Removal", category: "Procedures", text: "Wound inspected: Clean, dry, intact. No signs of erythema or purulence. Sutures removed. Steri-strips applied. Wound care instructions given." },
    { id: '6', title: "Hypertension Plan", category: "Cardiology", text: "1. Continue Amlodipine 5mg daily.\n2. Check BP daily at home.\n3. Low salt diet (DASH diet).\n4. Follow up in 1 month with BP log." },
  ]);

  const categories = ['General', 'Pediatrics', 'Chronic Care', 'Psychiatry', 'Procedures', 'Cardiology', 'Other'];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // Simple toast-like feedback could go here
  };

  const updateField = (id: string, field: keyof Template, value: string) => {
    setTemplates(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this template?")) {
      setTemplates(prev => prev.filter(t => t.id !== id));
    }
  };

  const handleCreateTemplate = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    const newT: Template = {
      id: newId,
      title: "New Template",
      category: "General",
      text: ""
    };
    setTemplates(prev => [...prev, newT]);
    
    // Smooth scroll to bottom after state update
    setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="flex-1 bg-gray-50 h-full overflow-y-auto p-8 md:p-12 font-sans animate-fade-in relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-end">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Clinical Templates</h1>
                <p className="text-gray-500 mt-1">Standardized phrases and macros to speed up your documentation.</p>
            </div>
            <button 
                onClick={handleCreateTemplate}
                className="bg-bbh-red hover:bg-bbh-darkRed text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-red-100 transition-all flex items-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                Create New
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((t) => (
                <div key={t.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-[380px] animate-fade-in group">
                    {/* Header: Category & Actions */}
                    <div className="flex justify-between items-center mb-4">
                        <select 
                            className="bg-red-50 text-bbh-red text-[10px] uppercase font-bold px-2 py-1 rounded border border-red-100 outline-none focus:ring-1 focus:ring-bbh-red appearance-none cursor-pointer"
                            value={t.category}
                            onChange={(e) => updateField(t.id, 'category', e.target.value)}
                        >
                            {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                                onClick={() => handleCopy(t.text)}
                                className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors bg-gray-50 rounded-lg"
                                title="Copy to Clipboard"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 012 2v1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                            </button>
                            <button 
                                onClick={() => handleDelete(t.id)}
                                className="p-1.5 text-gray-400 hover:text-red-600 transition-colors bg-gray-50 rounded-lg"
                                title="Delete Template"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Title Input */}
                    <input 
                        type="text"
                        className="text-lg font-bold text-gray-900 mb-3 w-full bg-white border-b border-transparent focus:border-gray-200 outline-none transition-all placeholder-gray-300"
                        value={t.title}
                        placeholder="Template Title"
                        onChange={(e) => updateField(t.id, 'title', e.target.value)}
                    />

                    {/* Content Textarea */}
                    <textarea 
                        className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm text-gray-700 font-sans mb-4 flex-1 resize-none focus:outline-none focus:border-bbh-red focus:ring-4 focus:ring-bbh-red/5 focus:bg-white transition-all leading-relaxed placeholder-gray-300"
                        value={t.text}
                        placeholder="Type your template content here..."
                        onChange={(e) => updateField(t.id, 'text', e.target.value)}
                    />

                    {/* Footer Action */}
                    <button 
                        onClick={() => handleCopy(t.text)}
                        className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all shadow-sm active:scale-[0.98]"
                    >
                        Copy to Clipboard
                    </button>
                </div>
            ))}
            
            {/* Create New Template Card */}
            <div 
                onClick={handleCreateTemplate}
                className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-bbh-red hover:text-bbh-red hover:bg-red-50/30 transition-all cursor-pointer min-h-[380px] group"
            >
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 transition-all group-hover:bg-bbh-red group-hover:text-white group-hover:scale-110 shadow-sm">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </div>
                <span className="text-xl font-bold">Create New Template</span>
                <p className="text-sm mt-3 text-center opacity-60 px-8">Quickly add a custom medical macro to your personal documentation library.</p>
            </div>
        </div>
        
        {/* Bottom space for easier scrolling */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};