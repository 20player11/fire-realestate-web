'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, MapPin, TrendingUp, Check, 
  Building, ChevronRight, Calculator, Shield, 
  Mail, Phone, Sun, Moon, Menu, X 
} from 'lucide-react';

// Zvětšená a přesně zarovnaná komponenta Logo
const Logo = ({ darkMode, className = "h-11 sm:h-12" }: { darkMode?: boolean; className?: string }) => (
  <div className="flex items-center gap-3.5">
    <img 
      src="/logo.svg" 
      alt="FIRE Logo" 
      className={`w-auto object-contain transition-all ${className} ${
        darkMode ? 'brightness-0 invert' : ''
      }`}
    />
    <div className="flex flex-col justify-center leading-none">
      <span className={`font-extrabold tracking-wider text-xl sm:text-2xl ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
        FIRE
      </span>
      <span className={`text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold uppercase mt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
        REAL ESTATE
      </span>
    </div>
  </div>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const PROPERTIES = [
  {
    id: 'p1',
    title: 'Rezidence Letná',
    location: 'Praha 7',
    type: '2+kk',
    area: '54 m²',
    price: '8 450 000 Kč',
    yield: '5.2 %',
    roi: '14 let',
    status: 'V prodeji',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Po rekonstrukci', 'Balkon', 'Sklep']
  },
  {
    id: 'p2',
    title: 'Apartmány Klínovec',
    location: 'Krušné hory',
    type: '1+kk',
    area: '32 m²',
    price: '3 900 000 Kč',
    yield: '7.8 %',
    roi: '9 let',
    status: 'Rezervace',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    tags: ['Krátkodobý pronájem', 'Parkování', 'Wellness v budově']
  },
  {
    id: 'p3',
    title: 'Palác Trnitá',
    location: 'Brno - střed',
    type: '3+kk',
    area: '82 m²',
    price: '11 200 000 Kč',
    yield: '4.9 %',
    roi: '16 let',
    status: 'Předprodej',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Novostavba', 'Garáž', 'Energetická třída A']
  }
];

export default function FireRealEstatePremium() {
  const [activeView, setActiveView] = useState<'home' | 'portfolio' | 'about' | 'contact'>('home');
  const [contactStep, setContactStep] = useState(1);
  const [contactData, setContactData] = useState({ intent: '' });
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = {
    bg: darkMode ? 'bg-zinc-950 text-zinc-300' : 'bg-zinc-50 text-zinc-700',
    header: darkMode ? 'bg-zinc-950/80 border-white/5' : 'bg-white/80 border-zinc-200',
    card: darkMode ? 'bg-zinc-900/40 border-white/5' : 'bg-white border-zinc-200 shadow-sm',
    cardAlt: darkMode ? 'bg-zinc-900/30 border-white/5' : 'bg-zinc-100 border-zinc-200',
    heading: darkMode ? 'text-white' : 'text-zinc-900',
    muted: darkMode ? 'text-zinc-400' : 'text-zinc-600',
    subtle: darkMode ? 'text-zinc-500' : 'text-zinc-500',
    btnPrimary: darkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800',
    btnSecondary: darkMode ? 'bg-zinc-900 text-white border-white/5' : 'bg-zinc-100 text-zinc-900 border-zinc-200',
    btnNavActive: darkMode ? 'bg-white text-black shadow-sm' : 'bg-zinc-900 text-white shadow-sm',
    btnNavInactive: darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900',
    innerCard: darkMode ? 'bg-zinc-950/50' : 'bg-zinc-50',
    iconBg: darkMode ? 'bg-white text-black' : 'bg-zinc-900 text-white',
    footer: darkMode ? 'bg-zinc-950 border-white/5' : 'bg-white border-zinc-200',
    mobileMenuBg: darkMode ? 'bg-zinc-950/95 border-white/10' : 'bg-white/95 border-zinc-200',
  };

  const navItems = [
    { id: 'home', label: 'Přehled' },
    { id: 'portfolio', label: 'Investiční nabídka' },
    { id: 'about', label: 'Metodika & O nás' }
  ];

  const handleNavClick = (view: 'home' | 'portfolio' | 'about' | 'contact') => {
    setActiveView(view);
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-amber-500 selection:text-white flex flex-col transition-colors duration-300 ${theme.bg}`}>
      
      {/* Navigace */}
      <header className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${theme.header}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <button onClick={() => handleNavClick('home')} className="flex items-center text-left focus:outline-none">
            <Logo darkMode={darkMode} className="h-10 sm:h-11" />
          </button>
          
          {/* Desktop Navigace */}
          <nav className={`hidden md:flex rounded-full border p-1 ${darkMode ? 'bg-zinc-900/50 border-white/5' : 'bg-zinc-200/50 border-zinc-300/50'}`}>
            {navItems.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleNavClick(tab.id as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeView === tab.id ? theme.btnNavActive : theme.btnNavInactive
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dark / Light mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full border transition-colors ${
                darkMode ? 'bg-zinc-900 border-white/10 text-amber-400 hover:bg-zinc-800' : 'bg-zinc-100 border-zinc-300 text-zinc-700 hover:bg-zinc-200'
              }`}
              title={darkMode ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button 
              onClick={() => handleNavClick('contact')}
              className={`hidden sm:block text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${theme.btnPrimary}`}
            >
              Sjednat schůzku
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-full border transition-colors ${
                darkMode ? 'bg-zinc-900 border-white/10 text-white' : 'bg-zinc-100 border-zinc-300 text-zinc-900'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigace */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-b px-6 py-6 backdrop-blur-2xl ${theme.mobileMenuBg}`}
            >
              <div className="flex flex-col gap-3">
                {navItems.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => handleNavClick(tab.id as any)}
                    className={`py-3 px-4 rounded-xl text-left font-medium text-base transition-colors ${
                      activeView === tab.id ? theme.btnNavActive : theme.btnNavInactive
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`mt-2 py-3 px-4 rounded-xl text-center font-medium text-base transition-colors ${theme.btnPrimary}`}
                >
                  Sjednat schůzku
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hlavní obsah */}
      <main className="flex-1 pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 max-w-[1400px] mx-auto w-full">
        <AnimatePresence mode="wait">
          
          {/* VIEW: Přehled */}
          {activeView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-20 sm:space-y-32"
            >
              <section className="max-w-4xl pt-4 sm:pt-8">
                <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 sm:mb-8 leading-[1.1] ${theme.heading}`}>
                  Architektura. Čísla. <br />
                  <span className={darkMode ? 'text-zinc-600' : 'text-zinc-400'}>Prokazatelný výnos.</span>
                </h1>
                <p className={`text-base sm:text-xl max-w-2xl font-light leading-relaxed ${theme.muted}`}>
                  Zastřešujeme nákup, analýzu i správu investičních bytů a apartmánů po celé ČR. Eliminujeme emoce, rozhodujeme na základě tvrdých dat a analýzy lokalit.
                </p>
                <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
                  <button onClick={() => handleNavClick('portfolio')} className={`w-full sm:w-auto px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 ${theme.btnPrimary}`}>
                    Prohlédnout portfolio <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </section>

              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: Calculator, t: 'Datová analýza', d: 'Každou nemovitost hodnotíme metrikami hrubého výnosu, ROI a potenciálu růstu lokality.' },
                  { icon: Building, t: 'Prémiové nemovitosti', d: 'Soustředíme se výhradně na byty a apartmány s čistou architekturou a nízkým CAPEX.' },
                  { icon: Shield, t: 'Kompletní správa', d: 'Od právního auditu po obsazení nájemníkem. Pasivní investice v pravém slova smyslu.' }
                ].map((f, i) => (
                  <div key={i} className={`p-6 sm:p-8 rounded-[2rem] border transition-colors ${theme.cardAlt}`}>
                    <f.icon className={`w-6 h-6 mb-6 ${theme.heading}`} />
                    <h3 className={`text-lg sm:text-xl font-medium mb-3 ${theme.heading}`}>{f.t}</h3>
                    <p className={`text-sm leading-relaxed ${theme.subtle}`}>{f.d}</p>
                  </div>
                ))}
              </section>
            </motion.div>
          )}

          {/* VIEW: Nabídka */}
          {activeView === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8 sm:space-y-12"
            >
              <div>
                <h2 className={`text-3xl sm:text-4xl font-medium tracking-tight mb-2 sm:mb-4 ${theme.heading}`}>Investiční příležitosti</h2>
                <p className={theme.muted}>Aktuální nabídka prověřených nemovitostí.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROPERTIES.map(prop => (
                  <div key={prop.id} className={`group rounded-[2rem] border overflow-hidden flex flex-col transition-all ${theme.card}`}>
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white">
                        {prop.status}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4 gap-2">
                        <div>
                          <h3 className={`text-xl sm:text-2xl font-medium ${theme.heading}`}>{prop.title}</h3>
                          <div className={`flex items-center gap-1 text-sm mt-1 ${theme.subtle}`}>
                            <MapPin className="w-3.5 h-3.5" /> {prop.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-base sm:text-lg font-medium whitespace-nowrap ${theme.heading}`}>{prop.price}</div>
                          <div className={`text-xs mt-1 ${theme.subtle}`}>{prop.type} • {prop.area}</div>
                        </div>
                      </div>

                      <div className={`grid grid-cols-2 gap-4 py-4 border-y mb-4 rounded-xl px-4 mt-auto border-white/5 ${theme.innerCard}`}>
                        <div>
                          <div className={`text-[10px] uppercase tracking-wider mb-1 ${theme.subtle}`}>Oček. výnos</div>
                          <div className={`text-base sm:text-lg font-medium flex items-center gap-2 ${theme.heading}`}>
                            <TrendingUp className="w-4 h-4 text-emerald-500" /> {prop.yield}
                          </div>
                        </div>
                        <div>
                          <div className={`text-[10px] uppercase tracking-wider mb-1 ${theme.subtle}`}>Návratnost</div>
                          <div className={`text-base sm:text-lg font-medium ${theme.heading}`}>{prop.roi}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {prop.tags.map(tag => (
                          <span key={tag} className={`px-2.5 py-1 rounded-md text-xs ${darkMode ? 'bg-white/5 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* VIEW: O nás */}
          {activeView === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl space-y-12 sm:space-y-16"
            >
              <div>
                <h2 className={`text-3xl sm:text-4xl font-medium tracking-tight mb-6 ${theme.heading}`}>Nejsme jen katalog.</h2>
                <div className={`space-y-6 text-base sm:text-lg font-light leading-relaxed ${theme.muted}`}>
                  <p>
                    Název <strong className={theme.heading}>FIRE (Flats Investment Real Estate)</strong> nevznikl náhodou. Specializujeme se na úzký segment trhu – investiční byty a apartmány. Nevěnujeme se prodeji pozemků, komerčních hal ani rodinných domů. Děláme jednu věc, ale s maximální datovou oporou.
                  </p>
                  <p>
                    Společnost FIRE Reality s.r.o. byla založena s vizí přinést na český realitní trh analytický přístup. Každá nemovitost, kterou zařadíme do portfolia, prochází sítem výnosových ukazatelů. Pokud čísla nedávají smysl, nemovitost nenabízíme.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className={`p-6 sm:p-8 rounded-[2rem] border transition-colors ${darkMode ? 'bg-white text-black border-transparent' : 'bg-zinc-900 text-white border-transparent'}`}>
                  <h3 className="text-2xl font-medium tracking-tight mb-2">Pro investory</h3>
                  <p className={`mb-6 text-sm ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>Hledáte způsob, jak chránit kapitál před inflací a generovat pasivní příjem.</p>
                  <ul className="space-y-3 font-medium text-sm">
                    <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Výpočet čistého cashflow</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Zajištění financování</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Následná správa pronájmu</li>
                  </ul>
                </div>
                
                <div className={`p-6 sm:p-8 rounded-[2rem] border ${theme.cardAlt}`}>
                  <h3 className={`text-2xl font-medium tracking-tight mb-2 ${theme.heading}`}>Pro rezidenty</h3>
                  <p className={`mb-6 text-sm ${theme.subtle}`}>Kupujete byt pro vlastní bydlení a požadujete vysoký standard a čistý design.</p>
                  <ul className={`space-y-3 font-medium text-sm ${theme.muted}`}>
                    <li className="flex items-center gap-3"><Check className={`w-4 h-4 ${theme.heading}`} /> Technická inspekce stavu</li>
                    <li className="flex items-center gap-3"><Check className={`w-4 h-4 ${theme.heading}`} /> Právní servis v ceně</li>
                    <li className="flex items-center gap-3"><Check className={`w-4 h-4 ${theme.heading}`} /> Úsporná energetická řešení</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW: Kontakt */}
          {activeView === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="max-w-2xl mx-auto"
            >
              <div className={`p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border ${theme.card}`}>
                {contactStep === 1 ? (
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h3 className={`text-2xl sm:text-3xl font-medium tracking-tight ${theme.heading}`}>Jaký je váš cíl?</h3>
                      <p className={`mt-2 text-sm sm:text-base ${theme.subtle}`}>Pomůže nám to připravit relevantní data pro naši schůzku.</p>
                    </div>
                    
                    <div className="grid gap-3">
                      {[
                        'Chci investovat do bytu za účelem pronájmu', 
                        'Hledám vlastní prémiové bydlení',
                        'Mám zájem o konkrétní projekt z portfolia',
                        'Potřebuji zkonzultovat správu majetku'
                      ].map(intent => (
                        <button
                          key={intent}
                          onClick={() => { setContactData({ intent }); setContactStep(2); }}
                          className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex justify-between items-center group ${theme.btnSecondary}`}
                        >
                          <span className="font-medium text-sm sm:text-base pr-2">{intent}</span>
                          <ChevronRight className="w-5 h-5 shrink-0 opacity-60 group-hover:opacity-100" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 sm:py-8 space-y-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${theme.iconBg}`}>
                      <Check className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-medium ${theme.heading}`}>Rozumíme vašemu záměru</h3>
                      <p className={`mt-2 text-sm sm:text-base max-w-sm mx-auto ${theme.muted}`}>
                        Přesměrujeme vás do rezervačního systému, kde si vyberete vyhovující termín online hovoru či osobní schůzky v Praze.
                      </p>
                    </div>
                    <button 
                      onClick={() => alert('Otevírá se rezervační kalendář...')}
                      className={`w-full py-4 rounded-2xl font-medium transition-colors mt-4 ${theme.btnPrimary}`}
                    >
                      Vybrat termín schůzky
                    </button>
                    <button onClick={() => setContactStep(1)} className={`text-sm ${theme.subtle} hover:underline block mx-auto`}>
                      ← Zpět k výběru
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Patička */}
      <footer className={`border-t py-12 px-4 sm:px-6 transition-colors duration-300 ${theme.footer}`}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 space-y-4">
            <Logo darkMode={darkMode} className="h-9 sm:h-10" />
            <p className={`text-sm max-w-sm ${theme.subtle}`}>
              Specializujeme se na prodej, analýzu a správu investičních bytů a prémiového rezidenčního bydlení.
            </p>
          </div>
          <div>
            <h4 className={`font-medium mb-4 ${theme.heading}`}>Kontakt</h4>
            <ul className={`space-y-3 text-sm ${theme.subtle}`}>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> fiktivnifirma@gcbrod.cz</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> +420 000 000 000</li>
              <li className="flex items-center gap-2 mt-4 cursor-pointer hover:opacity-80"><InstagramIcon className="w-4 h-4 shrink-0" /> @fire.s.r.o</li>
            </ul>
          </div>
          <div>
            <h4 className={`font-medium mb-4 ${theme.heading}`}>Fakturační údaje</h4>
            <ul className={`space-y-2 text-sm ${theme.subtle}`}>
              <li>FIRE Reality s.r.o.</li>
              <li>IČO: 1234567</li>
              <li>Sídlo: Český Brod, Kolín</li>
            </ul>
          </div>
        </div>
        <div className={`max-w-[1400px] mx-auto pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-white/5 ${theme.subtle}`}>
          <p>© {new Date().getFullYear()} FIRE Reality s.r.o. Všechna práva vyhrazena.</p>
          <div className="flex gap-6">
            <span className="hover:underline cursor-pointer">Ochrana osobních údajů</span>
            <span className="hover:underline cursor-pointer">Obchodní podmínky</span>
          </div>
        </div>
      </footer>
    </div>
  );
}