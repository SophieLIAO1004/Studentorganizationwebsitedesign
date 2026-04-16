import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { activities } from '../data/activities';
import { Lightbox } from './Lightbox';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Language = 'zh' | 'jp';

interface ActivityDetailProps {
  language: Language;
}

const translations = {
  zh: {
    backToActivities: '返回過往活動',
    date: '活動日期',
    category: '活動類別',
    photoGallery: '活動相簿',
    notFound: '找不到此活動',
    notFoundDesc: '抱歉，您要查看的活動不存在。',
    goBack: '返回首頁'
  },
  jp: {
    backToActivities: '過去の活動に戻る',
    date: 'イベント日付',
    category: 'カテゴリー',
    photoGallery: 'フォトギャラリー',
    notFound: 'アクティビティが見つかりません',
    notFoundDesc: '申し訳ございませんが、お探しのアクティビティは存在しません。',
    goBack: 'ホームに戻る'
  }
};

export function ActivityDetail({ language }: ActivityDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = translations[language];

  const activity = activities.find(a => a.id === id);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: 'var(--warm-cream)', fontFamily: "'Swei Spring CJK TC', sans-serif" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl mb-4" style={{ color: 'var(--dark-text)' }}>{t.notFound}</h1>
          <p className="mb-8" style={{ color: 'var(--medium-text)' }}>{t.notFoundDesc}</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full text-white transition-all shadow-lg hover:shadow-xl"
            style={{ backgroundColor: 'var(--rose-pink)' }}
          >
            {t.goBack}
          </button>
        </motion.div>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return language === 'zh'
      ? `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`
      : `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activity.gallery.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activity.gallery.length) % activity.gallery.length);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--warm-cream)', fontFamily: "'Swei Spring CJK TC', sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/#activities')}
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full hover:bg-white/50 transition-all"
          style={{ color: 'var(--dark-text)' }}
        >
          <ArrowLeft className="w-5 h-5" />
          {t.backToActivities}
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 600,
              color: 'var(--dark-text)',
              lineHeight: 1.2
            }}
          >
            {activity.title[language]}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-8 rounded-3xl"
          style={{ backgroundColor: 'white' }}
        >
          <p
            className="leading-relaxed"
            style={{ fontSize: '1.125rem', color: 'var(--dark-text)', lineHeight: 1.8 }}
          >
            {activity.description[language]}
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 600,
              color: 'var(--dark-text)'
            }}
          >
            {t.photoGallery}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activity.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(index)}
                className="aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${activity.title[language]} - 照片 ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={activity.gallery}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}