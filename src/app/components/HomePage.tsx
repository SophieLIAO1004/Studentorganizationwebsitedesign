import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronUp, Instagram, Facebook, Mail, Calendar, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { activities } from '../data/activities';

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
      title: '關於我們',
      mission: '台日學生交流協會（台北分會）致力於促進台灣與日本學生之間的文化交流與相互理解。透過定期舉辦各種活動，我們為兩國學生搭建友誼的橋樑，創造難忘的跨文化體驗。',
      vision: '我們相信，青年之間的交流是促進兩國友好關係的石。期��與你一起，開啟精彩的台日交流之旅。',
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
      title: '私たちについて',
      mission: '台日学生交流協会（台北支部）は、台湾と日本の学生間の文化交流と相互理解を促進することに力を注いでいます。定期的に様々なイベントを開催し、両国の学生が友情の橋を築き、忘れられない異文化体験を創り出します。',
      vision: '若者同士の交流は、両国の友好関係を促進する重要な基盤であると信じています。一緒に素晴らしい台日交流の旅を始めましょう。',
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
  const t = translations[language];

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
              <img src="/src/imports/images-1.png" alt="TJSEA Logo" className="w-full h-full object-cover" />
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
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="mb-6"
              style={{
                fontFamily: "'Swei Spring CJK TC', serif",
                fontSize: 'clamp(1.75rem, 8vw, 65px)',
                lineHeight: '1.2',
                color: 'var(--dark-text)',
                fontWeight: 600
              }}
            >
              {language === 'zh' ? '台灣日本學生交流會' : '台日学生交流協会'}
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
                src="/src/imports/LINE_ALBUM_2026315_新歓活動！_260414_1-1.jpg"
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