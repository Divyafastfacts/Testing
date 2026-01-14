import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ConsultationView } from './components/ConsultationView';
import { PatientDetailsModal } from './components/PatientDetailsModal';
import { PatientDetails } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'consultation'>('dashboard');
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

  const handleNavigation = (view: 'dashboard' | 'consultation') => {
    if (view === 'consultation') {
        handleStartConsultClick();
    } else {
        setCurrentView(view);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      <Sidebar 
        currentView={currentView} 
        onNavigate={handleNavigation} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        {currentView === 'dashboard' ? (
          <Dashboard onStartRecording={handleStartConsultClick} />
        ) : (
          <ConsultationView patientDetails={activePatient} />
        )}
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