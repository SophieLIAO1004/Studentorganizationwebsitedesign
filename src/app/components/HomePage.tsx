import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronUp, Instagram, Facebook, Mail, Calendar, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { activities } from '../data/activities';
import { images } from '../data/images';

type Language = 'zh' | 'jp';

interface Translation {
  nav: {
    home: string;
    about: string;
    activities: string;
  };
  hero: {
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    mission: string;
    vision: string;
    followUs: string;
  };
  activities: {
    title: string;
    viewDetails: string;
  };
}

const translations: Record<Language, Translation> = {
  zh: {
    nav: {
      home: '首頁',
      about: '關於我們',
      activities: '過往活動'
    },
    hero: {
      tagline: '連結台灣與日本，促進文化交流與友誼的學生組織',
      cta: '加入我們'
    },
    about: {
      title: '關於台日',
      mission: '我們是台大的跨校性社團「台灣日本學生交流會」！透過定期舉辦語言交換等交流活動，搭建兩國學生友誼的橋樑，並在提升語言能力的同時，培養國際視野，創造難忘的跨文化經驗。',
      vision: '歡迎對台日交流有興趣的同學來參加我們的活動！',
      followUs: '追蹤我們'
    },
    activities: {
      title: '過往活動',
      viewDetails: '查看詳情'
    }
  },
  jp: {
    nav: {
      home: 'ホーム',
      about: '私たちについて',
      activities: '過去の活動'
    },
    hero: {
      tagline: '台湾と日本をつなぎ、文化交流と友情を促進する学生組織',
      cta: '参加する'
    },
    about: {
      title: '台日について',
      mission: '私たちは、台湾大学を拠点とするインカレサークル「台湾日本学生交流会」です。定期的に言語交換をはじめとする交流イベントを開催し、台湾と日本の学生の友情をつなぐ架け橋となることを目指しています。言語能力の向上だけでなく、国際的な視野を広げ、忘れられない異文化交流の経験を創出しています。',
      vision: '台湾と日本の交流に興味のある方、ぜひお気軽にご参加ください！',
      followUs: 'フォローする'
    },
    activities: {
      title: '過去の活動',
      viewDetails: '詳細を見る'
    }
  }
};

interface HomePageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function HomePage({ language, setLanguage }: HomePageProps) {
  const navigate = useNavigate();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [titleFontSize, setTitleFontSize] = useState(60);
  const t = translations[language];

  // Calculate optimal font size for title to fit in one line
  useEffect(() => {
    const calculateFontSize = () => {
      const container = document.getElementById('hero-title-container');
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const text = language === 'zh' ? '台灣日本學生交流會' : '台湾日本学生交流会';
      
      // Create a temporary element to measure text width
      const tempElement = document.createElement('span');
      tempElement.style.fontFamily = "'Swei Spring CJK TC', serif";
      tempElement.style.fontWeight = '600';
      tempElement.style.visibility = 'hidden';
      tempElement.style.position = 'absolute';
      tempElement.style.whiteSpace = 'nowrap';
      tempElement.textContent = text;
      document.body.appendChild(tempElement);

      // Binary search for the largest font size that fits
      let minSize = 20;
      let maxSize = window.innerWidth >= 768 ? 60 : 60;
      let optimalSize = maxSize;

      for (let i = 0; i < 10; i++) {
        const testSize = (minSize + maxSize) / 2;
        tempElement.style.fontSize = `${testSize}px`;
        const textWidth = tempElement.offsetWidth;

        if (textWidth <= containerWidth - 20) { // 20px padding for safety
          minSize = testSize;
          optimalSize = testSize;
        } else {
          maxSize = testSize;
        }
      }

      document.body.removeChild(tempElement);
      
      // On desktop, keep 60px max
      if (window.innerWidth >= 768) {
        setTitleFontSize(60);
      } else {
        setTitleFontSize(Math.floor(optimalSize));
      }
    };

    calculateFontSize();
    window.addEventListener('resize', calculateFontSize);
    return () => window.removeEventListener('resize', calculateFontSize);
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return language === 'zh'
      ? `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
      : `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Swei Spring CJK TC', sans-serif" }}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderColor: 'var(--border)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollToTop()}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--rose-pink)' }}>
              <img src={images.logo} alt="TJSEA Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-medium" style={{ color: 'var(--dark-text)' }}>TJSC</span>
          </motion.div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:opacity-70 transition-opacity"
              style={{ color: 'var(--dark-text)' }}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:opacity-70 transition-opacity"
              style={{ color: 'var(--dark-text)' }}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('activities')}
              className="hover:opacity-70 transition-opacity"
              style={{ color: 'var(--dark-text)' }}
            >
              {t.nav.activities}
            </button>

            <div className="flex items-center gap-2 ml-4 px-3 py-1.5 rounded-full" style={{ backgroundColor: '#FFF7F5' }}>
              <button
                onClick={() => setLanguage('zh')}
                className="px-2 py-0.5 rounded-full transition-all"
                style={{
                  backgroundColor: language === 'zh' ? 'var(--rose-pink)' : 'transparent',
                  color: language === 'zh' ? 'white' : 'var(--medium-text)'
                }}
              >
                ZH
              </button>
              <button
                onClick={() => setLanguage('jp')}
                className="px-2 py-0.5 rounded-full transition-all"
                style={{
                  backgroundColor: language === 'jp' ? 'var(--rose-pink)' : 'transparent',
                  color: language === 'jp' ? 'white' : 'var(--medium-text)'
                }}
              >
                JP
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - Hidden on desktop */}
          <div className="md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: '#FFF7F5' }}>
            <button
              onClick={() => setLanguage('zh')}
              className="px-2 py-0.5 rounded-full transition-all"
              style={{
                backgroundColor: language === 'zh' ? 'var(--rose-pink)' : 'transparent',
                color: language === 'zh' ? 'white' : 'var(--medium-text)'
              }}
            >
              ZH
            </button>
            <button
              onClick={() => setLanguage('jp')}
              className="px-2 py-0.5 rounded-full transition-all"
              style={{
                backgroundColor: language === 'jp' ? 'var(--rose-pink)' : 'transparent',
                color: language === 'jp' ? 'white' : 'var(--medium-text)'
              }}
            >
              JP
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            id="hero-title-container"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="mb-6"
              style={{
                fontFamily: "'Swei Spring CJK TC', serif",
                fontSize: `${titleFontSize}px`,
                lineHeight: '1.2',
                color: 'var(--dark-text)',
                fontWeight: 600
              }}
            >
              {language === 'zh' ? '台灣日本學生交流會' : '台湾日本学生交流会'}
            </motion.h1>
            <motion.p
              className="mb-2 opacity-60"
              style={{ color: 'var(--dark-text)' }}
            >
              {language === 'zh' ? '台北分會' : '台北支部'}
            </motion.p>
            <motion.p
              className="mb-8 leading-relaxed"
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                color: 'var(--medium-text)',
                maxWidth: '500px'
              }}
            >
              {t.hero.tagline}
            </motion.p>
            <motion.a
              href="https://linktr.ee/tjsc.tpe?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnVp5eX1AViLgbH-ceLhk19Q65hTAniHuP6IVKRgYoS6efJhwBKI0ZryZ-9wU_aem_VGErfrWXNcSgs8azhzwMEA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full text-white transition-all shadow-lg hover:shadow-xl inline-block"
              style={{ backgroundColor: 'var(--rose-pink)' }}
            >
              {t.hero.cta}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={images.welcome.event1}
                alt="Cultural exchange"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl"
              style={{ backgroundColor: 'var(--soft-pink)' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl"
              style={{ backgroundColor: 'var(--warm-beige)' }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
            style={{
              fontFamily: "'Swei Spring CJK TC', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--dark-text)',
              fontWeight: 600
            }}
          >
            {t.about.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 p-8 rounded-3xl"
            style={{ backgroundColor: 'white' }}
          >
            <p className="mb-6 leading-relaxed" style={{ fontSize: '1.125rem', color: 'var(--dark-text)' }}>
              {t.about.mission}
            </p>
            <p className="leading-relaxed" style={{ fontSize: '1.125rem', color: 'var(--dark-text)' }}>
              {t.about.vision}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="mb-4" style={{ color: 'var(--medium-text)' }}>{t.about.followUs}</p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://www.instagram.com/tjsc.tpe/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: 'var(--rose-pink)' }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/tjsc.tpe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: 'var(--rose-pink)' }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="mailto:tjsc.tpe.21@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: 'var(--rose-pink)' }}
              >
                <Mail className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-24 px-6" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
            style={{
              fontFamily: "'Swei Spring CJK TC', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--dark-text)',
              fontWeight: 600
            }}
          >
            {t.activities.title}
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => navigate(`/activity/${activity.id}`)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={activity.coverImage}
                    alt={activity.title[language]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 lg:p-5 backdrop-blur-sm transition-all duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(232, 90, 90, 0.95), rgba(232, 90, 90, 0))'
                  }}
                >
                  {/* Title */}
                  <h3 className="text-white font-semibold mb-1 text-[13px] lg:text-[15px]">
                    {activity.title[language]}
                  </h3>

                  {/* View Details Link */}
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-40 hover:shadow-xl transition-all"
        style={{ backgroundColor: 'var(--rose-pink)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </motion.button>
    </div>
  );
}