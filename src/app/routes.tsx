import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";
import { ActivityDetail } from "./components/ActivityDetail";

// This will be passed from App.tsx
export const createRouter = (language: 'zh' | 'jp', setLanguage: (lang: 'zh' | 'jp') => void) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <HomePage language={language} setLanguage={setLanguage} />,
    },
    {
      path: "/activity/:id",
      element: <ActivityDetail language={language} />,
    },
  ]);
};