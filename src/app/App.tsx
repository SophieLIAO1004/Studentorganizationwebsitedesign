import { useState, useMemo } from 'react';
import { RouterProvider } from 'react-router';
import { createRouter } from './routes';

type Language = 'zh' | 'jp';

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');
  
  const router = useMemo(() => createRouter(language, setLanguage), [language]);

  return <RouterProvider router={router} />;
}