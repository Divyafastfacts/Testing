import React from 'react';

interface DashboardProps {
  onStartRecording: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onStartRecording }) => {
  const recentPatients = [
    { name: "Anjali Sharma", age: 34, condition: "Viral Fever", time: "2 hours ago", status: "Synced" },
    { name: "Rahul Verma", age: 45, condition: "Hypertension", time: "5 hours ago", status: "Draft" },
    { name: "Lakshmi Narayanan", age: 62, condition: "Type 2 Diabetes", time: "Yesterday", status: "Synced" },
    { name: "Joseph Thomas", age: 28, condition: "Acute Bronchitis", time: "Yesterday", status: "Synced" },
  ];

  return (
    <div className="flex-1 bg-gray-50 h-full overflow-y-auto font-sans">
      <div className="max-w-6xl mx-auto p-8 md:p-12">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-12 animate-fade-in">
           <div>
               <p className="text-gray-500 text-sm font-medium mb-1">Wednesday, 24 Jan</p>
               <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome back, Dr. Smith</h1>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-600 border border-gray-200 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  System Operational
              </div>
              <div className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold border border-teal-100 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  20 Credits Left
              </div>
           </div>
        </div>

        {/* Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          
          {/* Record Card */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer" onClick={onStartRecording}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full translate-x-1/3 -translate-y-1/3 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-bbh-red flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-bbh-red transition-colors">Start New Consultation</h2>
                <p className="text-gray-500 mb-8 leading-relaxed max-w-sm">
                    Record patient interactions in real-time. Our AI will handle the documentation, generating precise SOAP notes instantly.
                </p>
                <div className="flex items-center text-bbh-red font-semibold group-hover:gap-2 transition-all">
                    Begin Session
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
          </div>

          {/* Quick Stats/Tutorial Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-soft text-white flex flex-col justify-between border border-gray-700 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <svg width="100%" height="100%">
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
               </div>
               
               <div className="relative z-10">
                   <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                       <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                   </div>
                   <h2 className="text-2xl font-bold mb-2">Weekly Summary</h2>
                   <div className="flex gap-8 mt-6">
                       <div>
                           <p className="text-3xl font-bold">42</p>
                           <p className="text-sm text-gray-400">Patients</p>
                       </div>
                       <div>
                           <p className="text-3xl font-bold">12hrs</p>
                           <p className="text-sm text-gray-400">Time Saved</p>
                       </div>
                   </div>
               </div>
               
               <button className="mt-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm py-3 px-6 rounded-xl text-sm font-semibold transition-colors w-fit border border-white/10">
                   View Analytics
               </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
           <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-bold text-gray-900">Recent Consultations</h3>
               <button className="text-sm text-bbh-red hover:text-bbh-darkRed font-semibold flex items-center gap-1">
                   View All 
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </button>
           </div>
           
           <div className="bg-white rounded-3xl shadow-soft border border-gray-100 overflow-hidden">
               <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse">
                       <thead>
                           <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                               <th className="p-6">Patient Name</th>
                               <th className="p-6">Diagnosis / Note</th>
                               <th className="p-6">Date</th>
                               <th className="p-6">Status</th>
                               <th className="p-6 text-right">Action</th>
                           </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-50">
                           {recentPatients.map((patient, idx) => (
                               <tr key={idx} className="hover:bg-gray-50/80 transition-colors group cursor-pointer">
                                   <td className="p-6">
                                       <div className="font-semibold text-gray-900">{patient.name}</div>
                                       <div className="text-xs text-gray-400">{patient.age} Y/O</div>
                                   </td>
                                   <td className="p-6 text-gray-600">{patient.condition}</td>
                                   <td className="p-6 text-gray-500 text-sm">{patient.time}</td>
                                   <td className="p-6">
                                       <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                                           patient.status === 'Synced' 
                                           ? 'bg-green-50 text-green-700 border-green-100' 
                                           : 'bg-amber-50 text-amber-700 border-amber-100'
                                       }`}>
                                           {patient.status}
                                       </span>
                                   </td>
                                   <td className="p-6 text-right">
                                       <button className="p-2 rounded-lg text-gray-400 hover:text-bbh-red hover:bg-red-50 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                       </button>
                                   </td>
                               </tr>
                           ))}
                       </tbody>
                   </table>
               </div>
           </div>
        </div>
        
      </div>
    </div>
  );
};