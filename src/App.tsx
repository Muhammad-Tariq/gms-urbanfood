import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Map } from './components/Map';
import { ObjectsPage } from './components/objects/ObjectsPage';
import { ContactPage } from './components/contact/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'map' | 'objects' | 'contact'>(
    'map'
  );

  const handlePageChange = (page: 'map' | 'objects' | 'contact') => {
    setCurrentPage(page);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar onPageChange={handlePageChange} currentPage={currentPage} />
        {currentPage === 'map' && <Map />}
        {currentPage === 'objects' && <ObjectsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </div>
    </div>
  );
}

export default App;
