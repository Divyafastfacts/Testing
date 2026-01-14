import React from 'react';

interface DashboardProps {
  onStartRecording: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onStartRecording }) => {
  const recentPatients = [
    { name: "Anjali Sharma", age: 34, condition: "Viral Fever", time: "2h ago", status: "Synced" },
    { name: "Rahul Verma", age: 45, condition: "Hypertension", time: "5h ago", status: "Draft" },
    { name: "Lakshmi N.", age: 62, condition: "Type 2 Diabetes", time: "Yesterday", status: "Synced" },
  ];

  const stickyNotes = [
    { color: 'bg-yellow-50 border-yellow-100', text: "Remember to follow up with Dr. Kumar regarding the new cardio protocols.", date: "Today" },
    { color: 'bg-blue-50 border-blue-100', text: "Department meeting scheduled for Friday at 2 PM in Hall B.", date: "Upcoming" },
    { color: 'bg-purple-50 border-purple-100', text: "Check inventory for pediatric vaccines before next shift.", date: "Task" },
  ];

  return (
    <div className="flex-1 bg-gray-50 h-full overflow-y-auto font-sans">
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10 animate-fade-in">
           <div>
               <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Good Morning, Dr. Smith</h1>
               <p className="text-gray-500 mt-2 text-lg">Ready to transform patient care today?</p>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="bg-white px-4 py-2 rounded-xl text-xs font-bold text-gray-600 border border-gray-200 shadow-sm flex items-center gap-2 uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Online
              </div>
              <div className="bg-white px-4 py-2 rounded-xl text-xs font-bold text-gray-600 border border-gray-200 shadow-sm flex items-center gap-2 uppercase tracking-wide">
                  <svg className="w-4 h-4 text-bbh-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Shift: 08:00 - 16:00
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Main Actions & Stats (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
                
                {/* Hero Action Card */}
                <div 
                    onClick={onStartRecording}
                    className="group relative bg-white rounded-[2rem] p-8 shadow-soft border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl hover:border-red-100 transition-all duration-300"
                >
                    <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-red-50 to-transparent opacity-50 rounded-r-[2rem]"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="w-20 h-20 rounded-2xl bg-bbh-red text-white flex items-center justify-center shadow-lg shadow-red-200 group-hover:scale-110 transition-transform duration-300">
                             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-bbh-red transition-colors">Start New Consultation</h2>
                            <p className="text-gray-500 leading-relaxed max-w-md">
                                AI-powered listening is ready. Click here to begin a secure recording session and generate SOAP notes instantly.
                            </p>
                        </div>
                        <div className="ml-auto">
                            <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-bbh-red group-hover:border-bbh-red group-hover:text-white transition-all text-gray-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Table */}
                <div className="bg-white rounded-[2rem] shadow-soft border border-gray-100 p-8 flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <span className="w-1.5 h-6 rounded-full bg-gray-900"></span>
                            Recent Consultations
                        </h3>
                        <button className="text-sm font-semibold text-bbh-red hover:underline">View All History</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                                    <th className="pb-4 pl-2">Patient</th>
                                    <th className="pb-4">Condition</th>
                                    <th className="pb-4">Time</th>
                                    <th className="pb-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentPatients.map((p, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                                        <td className="py-4 pl-2 font-semibold text-gray-900">{p.name} <span className="text-gray-400 font-normal text-xs ml-1">{p.age}y</span></td>
                                        <td className="py-4 text-sm text-gray-600">{p.condition}</td>
                                        <td className="py-4 text-xs text-gray-500">{p.time}</td>
                                        <td className="py-4">
                                            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                                                p.status === 'Synced' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                                            }`}>{p.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            {/* Right Column: Bulletin & Workflow (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
                
                {/* Workflow Steps */}
                <div className="bg-gray-900 text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-gray-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                    <h3 className="text-lg font-bold mb-6 relative z-10">Scribe Workflow</h3>
                    <div className="space-y-6 relative z-10">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-sm shadow-lg shadow-red-900/50">1</div>
                                <div className="w-0.5 h-full bg-gray-700 my-1"></div>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Listen & Record</h4>
                                <p className="text-xs text-gray-400 mt-1">Capture audio securely in any supported language.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center font-bold text-sm text-gray-300">2</div>
                                <div className="w-0.5 h-full bg-gray-700 my-1"></div>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-400">AI Processing</h4>
                                <p className="text-xs text-gray-500 mt-1">Extracts symptoms, meds, and vitals automatically.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center font-bold text-sm text-gray-300">3</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-400">Review & Sync</h4>
                                <p className="text-xs text-gray-500 mt-1">Verify generated SOAP note and upload to EHR.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bulletin Board / Sticky Notes */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">Bulletin Board</h3>
                    {stickyNotes.map((note, idx) => (
                        <div key={idx} className={`${note.color} border p-5 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300 cursor-default`}>
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-wide opacity-60 bg-white/50 px-2 py-0.5 rounded">{note.date}</span>
                                <svg className="w-3 h-3 opacity-40" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg>
                            </div>
                            <p className="text-sm font-medium text-gray-800 leading-relaxed font-serif italic">"{note.text}"</p>
                        </div>
                    ))}
                    <button className="w-full py-3 rounded-xl border-2 border-dashed border-gray-200 text-gray-400 text-sm font-bold hover:border-bbh-red hover:text-bbh-red hover:bg-red-50 transition-all">
                        + Add Reminder
                    </button>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
}