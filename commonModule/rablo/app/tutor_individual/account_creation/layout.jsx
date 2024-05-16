'use client'
import React, { Suspense } from 'react';

 
function Layout({ children }) {
    
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>      
    </main>
  );
};      

export default Layout;