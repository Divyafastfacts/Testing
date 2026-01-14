import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ConsultationView } from './components/ConsultationView';
import { NotesView } from './components/NotesView';
import { TemplatesView } from './components/TemplatesView';
import { SupportView } from './components/SupportView';
import { CustomNoteView } from './components/CustomNoteView';
import { PatientDetailsModal } from './components/PatientDetailsModal';
import { PatientDetails } from './types';

type ViewType = 'dashboard' | 'consultation' | 'notes' | 'templates' | 'support' | 'custom-note';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false);
  const [activePatient, setActivePatient] = useState<PatientDetails | undefined>(undefined);

  const handleStartConsultClick = () => {
    setIsPatientModalOpen(true);
  };

  const handlePatientDetailsProceed = (details: PatientDetails) => {
    setActivePatient(details);
    setIsPatientModalOpen(false);
    setCurrentView('consultation');
  };

  const handleNavigation = (view: ViewType) => {
    if (view === 'consultation') {
        handleStartConsultClick();
    } else {
        setCurrentView(view);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onStartRecording={handleStartConsultClick} />;
      case 'consultation':
        return <ConsultationView patientDetails={activePatient} />;
      case 'notes':
        return <NotesView />;
      case 'templates':
        return <TemplatesView />;
      case 'support':
        return <SupportView />;
      case 'custom-note':
        return <CustomNoteView />;
      default:
        return <Dashboard onStartRecording={handleStartConsultClick} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      <Sidebar 
        currentView={currentView} 
        onNavigate={handleNavigation} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        {renderView()}
      </div>

      <PatientDetailsModal 
        isOpen={isPatientModalOpen}
        onClose={() => setIsPatientModalOpen(false)}
        onProceed={handlePatientDetailsProceed}
      />
    </div>
  );
}

export default App;