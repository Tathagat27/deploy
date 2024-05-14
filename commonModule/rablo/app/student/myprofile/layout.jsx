'use server'
import React from 'react';

 
const Layout  = async ({ children, data}) => {
    
  return (
    <main>
      {children}
    </main>
  );
};      

export default Layout;
