import React, { useState } from 'react';

export const NotesView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Data
  const notes = [
    { id: 1, patient: "Anjali Sharma", date: "Jan 24, 2024", diagnosis: "Viral Fever", type: "SOAP", status: "Synced" },
    { id: 2, patient: "Rahul Verma", date: "Jan 24, 2024", diagnosis: "Hypertension", type: "Comprehensive", status: "Draft" },
    { id: 3, patient: "Lakshmi Narayanan", date: "Jan 23, 2024", diagnosis: "Type 2 Diabetes", type: "Follow-up", status: "Synced" },
    { id: 4, patient: "Joseph Thomas", date: "Jan 23, 2024", diagnosis: "Acute Bronchitis", type: "SOAP", status: "Synced" },
    { id: 5, patient: "Priya Krishna", date: "Jan 22, 2024", diagnosis: "Migraine", type: "SOAP", status: "Synced" },
    { id: 6, patient: "Amit Patel", date: "Jan 21, 2024", diagnosis: "Gastroenteritis", type: "Emergency", status: "Flagged" },
  ];

  const filteredNotes = notes.filter(note => 
    note.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 bg-gray-50 h-full overflow-y-auto p-8 md:p-12 font-sans animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">My Notes</h1>
                <p className="text-gray-500 mt-1">Manage and review your patient documentation history.</p>
            </div>
            <div className="bg-white p-1 rounded-xl border border-gray-200 shadow-sm flex items-center w-64">
                <div className="pl-3 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input 
                    type="text" 
                    placeholder="Search patient or diagnosis..." 
                    className="w-full p-2 bg-transparent outline-none text-sm font-medium text-gray-700 placeholder-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        <div className="bg-white rounded-3xl shadow-soft border border-gray-100 overflow-hidden">
             <table className="w-full text-left border-collapse">
               <thead>
                   <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                       <th className="p-6">Patient Name</th>
                       <th className="p-6">Diagnosis</th>
                       <th className="p-6">Note Type</th>
                       <th className="p-6">Date</th>
                       <th className="p-6">Status</th>
                       <th className="p-6 text-right">Action</th>
                   </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                   {filteredNotes.map((note) => (
                       <tr key={note.id} className="hover:bg-gray-50/80 transition-colors group cursor-pointer">
                           <td className="p-6 font-bold text-gray-900">{note.patient}</td>
                           <td className="p-6 text-gray-600">{note.diagnosis}</td>
                           <td className="p-6">
                               <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">{note.type}</span>
                           </td>
                           <td className="p-6 text-gray-500 text-sm">{note.date}</td>
                           <td className="p-6">
                               <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                                   note.status === 'Synced' ? 'bg-green-50 text-green-700 border-green-100' : 
                                   note.status === 'Draft' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                   'bg-red-50 text-red-700 border-red-100'
                               }`}>
                                   {note.status}
                               </span>
                           </td>
                           <td className="p-6 text-right">
                               <button className="text-bbh-red font-bold text-sm hover:underline">View</button>
                           </td>
                       </tr>
                   ))}
                   {filteredNotes.length === 0 && (
                       <tr>
                           <td colSpan={6} className="p-12 text-center text-gray-400">
                               No records found matching "{searchTerm}"
                           </td>
                       </tr>
                   )}
               </tbody>
           </table>
        </div>
      </div>
    </div>
  );
};