import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Facebook, Phone, MapPin, Clock, UtensilsCrossed, CalendarDays, Camera, Info, X } from "lucide-react";
import { FolkFlower, Rooster, Sunflower } from "./components/FolkIcons";

const IMAGES = [
  "https://i.postimg.cc/P5g6G7P3/671646548-1618083446127554-3624071238533770825-n.jpg",
  "https://i.postimg.cc/pLw0NSp0/673122668-122095234358630489-2424980875314490869-n.jpg",
  "https://i.postimg.cc/FHdPBvsw/684646729-122100752864630489-1409393346565052774-n.jpg",
  "https://i.postimg.cc/YC5XcPhb/693604939-122102206466630489-2613040799815561279-n.jpg"
];

const SectionTitle = ({ children, subtitle }: { children: string, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="font-mono text-red tracking-[0.2em] uppercase text-sm block mb-4"
    >
      — {subtitle || "Tradycja"}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl lg:text-6xl text-text-main"
    >
      {children}
    </motion.h2>
    <div className="embroidery-divider mx-auto max-w-xs mt-6" />
  </div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="min-h-screen selection:bg-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-bg/80 backdrop-blur-sm border-b border-brown/10">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-xl tracking-tight">Gospoda Śląska</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest text-text-muted">
          <a href="#o-nas" className="hover:text-red transition-colors">O nas</a>
          <a href="#galeria" className="hover:text-red transition-colors">Galeria</a>
          <a href="#kontakt" className="hover:text-red transition-colors">Kontakt</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={IMAGES[3]} 
            alt="Wnętrze Gospody" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-transparent to-bg" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: -5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <span className="badge-tradition">Tradycyjna Kuchnia Śląska</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl text-white mb-6 drop-shadow-2xl">
            {["Gospoda", "Śląska"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
                className="inline-block mx-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/80 text-xl md:text-2xl font-serif italic max-w-2xl mx-auto mb-12"
          >
            Nowe miejsce na mapie Śląska. U nas zjesz domowe obiady i zorganizujesz niezapomniane przyjęcie.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#kontakt" 
              className="px-8 py-4 bg-red text-white font-mono uppercase tracking-widest hover:bg-red-light transition-all rounded-sm flex items-center justify-center gap-2 group"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              Zadzwoń do nas
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61568914676386" 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-navy text-white font-mono uppercase tracking-widest hover:bg-navy-light transition-all rounded-sm flex items-center justify-center gap-2"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-24 px-6 overflow-hidden bg-bg-section linen-texture">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src={IMAGES[1]} 
              alt="Posiłek w Gospodzie" 
              className="rounded-sm shadow-2xl relative z-10 border-8 border-white"
            />
            <div className="absolute -top-10 -left-10 w-full h-full bg-navy/5 -z-0 border border-navy/10 rounded-sm" />
            <FolkFlower className="absolute -bottom-6 -right-6 w-24 h-24 text-red z-20" />
          </motion.div>

          <div>
            <SectionTitle subtitle="Gościnność">Nasza Historia</SectionTitle>
            <div className="space-y-6 text-xl text-text-main leading-relaxed">
              <p>
                Gospoda Śląska to połączenie pasji do regionalnej kuchni i pragnienia stworzenia miejsca, 
                gdzie każdy poczuje się jak w domu. Nasze wnętrza nawiązują do najlepszych tradycji śląskich domów, 
                gdzie wspólne biesiadowanie było sercem życia rodzinnego.
              </p>
              <p className="font-serif italic text-brown">
                "U nas czas płynie wolniej, a smak prawdziwego, domowego rosołu czy rolady z modrą kapustą 
                przywołuje najpiękniejsze wspomnienia."
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-mono text-red uppercase tracking-tighter">
                  <UtensilsCrossed className="w-5 h-5" />
                  Domowe obiady
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-navy uppercase tracking-tighter">
                  <CalendarDays className="w-5 h-5" />
                  Przyjęcia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Rzut oka">Galeria Smaków</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8 }}
                transition={{ delay: i * 0.1 }}
                className="parchment-card group overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img src={img} alt={`Zdjęcie ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 px-6 bg-bg-section linen-texture">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Zapraszamy">Kontakt i Lokalizacja</SectionTitle>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="parchment-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red/10 rounded-sm text-red">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">Nasza Lokalizacja</h4>
                    <p className="text-text-muted">Księdza Pawła Skwary 44</p>
                    <p className="text-text-muted">Pszów 44-370</p>
                  </div>
                </div>
              </div>

              <div className="parchment-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navy/10 rounded-sm text-navy">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">Rezerwacje</h4>
                    <p className="text-3xl font-serif text-text-main">731 595 867</p>
                    <p className="text-text-muted text-sm mt-1 uppercase font-mono">Zadzwoń i zarezerwuj stolik</p>
                  </div>
                </div>
              </div>

              <div className="parchment-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-sm text-gold">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">Godziny Otwarcia</h4>
                    <p className="text-text-muted">Poniedziałek - Niedziela</p>
                    <p className="text-text-main font-serif italic text-lg">Zapraszamy na świeże obiady!</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="https://www.facebook.com/profile.php?id=61568914676386" 
                  className="flex items-center gap-3 text-navy font-bold hover:text-navy-light transition-colors group"
                >
                  <div className="p-3 rounded-full border-2 border-navy group-hover:bg-navy group-hover:text-white transition-all">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <span className="uppercase font-mono tracking-widest">Śledź nas na Facebooku</span>
                </a>
              </div>
            </div>

            <div className="h-[500px] rounded-sm overflow-hidden border-8 border-white shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.2588804924935!2d18.38780649353779!3d50.043981543113965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711452cd72a12ef%3A0x8b8393d3648ab4b7!2sKsi%C4%99dza%20Paw%C5%82a%20Skwary%2044%2C%2044-370%20Psz%C3%B3w!5e0!3m2!1spl!2spl!4v1779172068927!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-darker text-white/60 py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-6 mb-8 opacity-20">
            {[...Array(5)].map((_, i) => <FolkFlower key={i} className="w-8 h-8" />)}
          </div>
          
          <div className="mb-12">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl text-white mb-2">Gospoda Śląska</h2>
              <p className="font-serif italic text-white/40">Z miłości do gościnności</p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 font-mono text-[10px] tracking-widest uppercase flex flex-col items-center gap-4">
            <p>© {new Date().getFullYear()} Gospoda Śląska. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-5 pointer-events-none">
          <FolkFlower className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
          <FolkFlower className="w-full h-full" />
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-darker/95 p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 p-3 bg-red text-white rounded-full hover:bg-red-light transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Powiększone zdjęcie"
              className="max-w-full max-h-full object-contain shadow-2xl border-4 border-white rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
