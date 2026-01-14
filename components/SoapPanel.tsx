import React from 'react';
import { SoapNote } from '../types';

interface SoapPanelProps {
  soapData: SoapNote;
  setSoapData: (data: SoapNote) => void;
  isGenerating: boolean;
}

export const SoapPanel: React.FC<SoapPanelProps> = ({ soapData, setSoapData, isGenerating }) => {
  
  const handleChange = (field: keyof SoapNote, value: string) => {
    setSoapData({ ...soapData, [field]: value });
  };

  const sections: { key: keyof SoapNote; label: string; accentColor: string; textColor: string; placeholder: string }[] = [
    { key: 'subjective', label: 'Subjective', accentColor: 'bg-blue-600', textColor: 'text-blue-800', placeholder: 'Patient history, complaints...' },
    { key: 'objective', label: 'Objective', accentColor: 'bg-red-600', textColor: 'text-red-800', placeholder: 'Vitals, physical exam...' },
    { key: 'assessment', label: 'Assessment', accentColor: 'bg-amber-600', textColor: 'text-amber-800', placeholder: 'Diagnosis...' },
    { key: 'plan', label: 'Plan', accentColor: 'bg-green-600', textColor: 'text-green-800', placeholder: 'Medication, follow-up...' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 relative bg-white h-full">
         {isGenerating && (
             <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center animate-fade-in">
                 <div className="w-16 h-16 relative mb-4">
                     <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
                     <div className="absolute inset-0 rounded-full border-4 border-bbh-red border-t-transparent animate-spin"></div>
                 </div>
                 <h3 className="text-xl font-bold text-gray-800">Analyzing Transcript</h3>
                 <p className="text-gray-500">Generating SOAP Note...</p>
             </div>
         )}

         {sections.map((section) => (
             <div key={section.key} className="group">
                 <div className="flex items-center gap-3 mb-2">
                     {/* Vertical Accent Bar */}
                     <div className={`w-1.5 h-6 rounded-full ${section.accentColor}`}></div>
                     <h3 className={`text-sm font-bold uppercase tracking-wide ${section.textColor}`}>
                        {section.label}
                     </h3>
                 </div>
                 <textarea 
                     className="w-full min-h-[120px] p-3 -ml-3 text-base text-gray-900 leading-relaxed bg-white focus:bg-gray-50 focus:outline-none focus:ring-0 border-none rounded-lg transition-colors resize-y placeholder-gray-300"
                     value={soapData[section.key]}
                     onChange={(e) => handleChange(section.key, e.target.value)}
                     placeholder={section.placeholder}
                 />
             </div>
         ))}
    </div>
  );
};