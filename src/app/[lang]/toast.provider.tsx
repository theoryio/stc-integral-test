"use client";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";
import { useContext } from 'react';
import useTranslation from 'next-translate/useTranslation'

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const { t, lang } = useTranslation('common')
  return (
    <>
      {children}
      <ToastContainer rtl={lang === "ar"} position={lang === "ar" ? "top-left" : "top-right"} theme={"colored"} style={{ fontSize: 12, lineHeight: 1.5 }} />
    </>
  );
}