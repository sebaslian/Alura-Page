import React, { useEffect } from 'react';
import { useModal } from '../contexts/ModalContext';

export const NewsletterModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();

  useEffect(() => {
    // Si el modal de React intenta abrirse...
    if (isModalOpen) {
      // 1. Llamamos inmediatamente al cuadro oficial de MailerLite
      if ((window as any).ml) {
        (window as any).ml('show', 'uHKCPJ', true);
      }
      
      // 2. Cerramos el modal de React al instante para que no se vea nada detrás
      closeModal();
    }
  }, [isModalOpen, closeModal]);

  // No renderizamos nada, porque queremos usar el cuadro de MailerLite
  return null;
};

declare global {
  interface Window {
    ml: any;
  }
}