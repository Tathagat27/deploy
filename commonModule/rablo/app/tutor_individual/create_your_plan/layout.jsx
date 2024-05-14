'use server'
import React from 'react';

 
const Layout  = async ({ children, data}) => {
    
  return (
    <div>
      {children}
    </div>
  );
};      

export default Layout;
