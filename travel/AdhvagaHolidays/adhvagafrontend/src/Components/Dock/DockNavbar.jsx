import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Info, MapPin, Globe, Briefcase, Phone, FileText } from 'lucide-react';
import Dock from './Dock';

export default function DockNavbar() {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const updateHidden = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    lastScrollY.current = currentScrollY;
    ticking.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateHidden);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateHidden]);

  const items = [
    { 
      icon: <Home size={18} />, 
      label: 'Home', 
      onClick: () => navigate('/Home') 
    },
    { 
      icon: <Info size={18} />, 
      label: 'About Us', 
      onClick: () => navigate('/About') 
    },
    { 
      icon: <MapPin size={18} />, 
      label: 'Domestic Holidays', 
      onClick: () => navigate('/Domestic') 
    },
    { 
      icon: <Globe size={18} />, 
      label: 'International Holidays', 
      onClick: () => navigate('/International') 
    },
    { 
      icon: <Briefcase size={18} />, 
      label: 'Services', 
      onClick: () => navigate('/Services') 
    },
    { 
      icon: <Phone size={18} />, 
      label: 'Support', 
      onClick: () => navigate('/Support') 
    },
    { 
      icon: <FileText size={18} />, 
      label: 'Terms & Conditions', 
      onClick: () => navigate('/terms') 
    },
  ];

  return (
    <Dock 
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
      hidden={hidden}
    />
  );
}
