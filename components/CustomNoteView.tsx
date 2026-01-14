import React, { useState } from 'react';

export const CustomNoteView: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('General');
  const [content, setContent] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!title || !content) return;
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const categories = ['General', 'Administrative', 'Personal Reminder', 'Research Idea', 'Meeting Note'];

  return (
    <div className="flex-1 bg-gray-50 h-full overflow-y-auto p-8 md:p-12 font-sans animate-fade-in">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        <div className="mb-8 flex justify-between items-end">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">New Custom Note</h1>
                <p className="text-gray-500 mt-1">Create personal memos, reminders, or administrative records.</p>
            </div>
            {saved && (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 animate-fade-in">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Saved Successfully
                </div>
            )}
        </div>

        <div className="bg-white rounded-3xl shadow-soft border border-gray-100 flex-1 flex flex-col overflow-hidden">
            {/* Toolbar */}
            <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Note Title</label>
                    <input 
                        type="text" 
                        placeholder="e.g., Department Meeting Notes"
                        className="w-full bg-white border border-gray-200 rounded-xl p-3 font-bold text-gray-900 focus:border-bbh-red focus:ring-1 focus:ring-bbh-red outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-64">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Category</label>
                    <select 
                        className="w-full bg-white border border-gray-200 rounded-xl p-3 font-medium text-gray-700 focus:border-bbh-red focus:ring-1 focus:ring-bbh-red outline-none"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 p-6 relative">
                <textarea 
                    className="w-full h-full resize-none outline-none text-gray-700 text-lg leading-relaxed placeholder-gray-300"
                    placeholder="Start typing your note here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-medium">
                    {content.split(/\s+/).filter(w => w.length > 0).length} words
                </span>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-xl font-bold text-gray-500 hover:bg-gray-200 transition-colors">
                        Discard
                    </button>
                    <button 
                        onClick={handleSave}
                        disabled={!title || !content}
                        className="px-8 py-2.5 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-100 transition-all transform active:scale-95 disabled:opacity-50 disabled:shadow-none"
                    >
                        Save Note
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};