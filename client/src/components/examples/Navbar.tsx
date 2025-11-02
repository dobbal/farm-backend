import Navbar from '../Navbar';
import { useState } from 'react';

export default function NavbarExample() {
  const [darkMode, setDarkMode] = useState(false);
  
  return <Navbar cartItemCount={3} darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />;
}
