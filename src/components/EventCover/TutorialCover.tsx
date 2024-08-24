import React from 'react';

import './cover.css';
import { useTranslation } from 'react-i18next';
import LogoImg from '../../assets/images/Logo.png';

interface TutorialCoverProps {
  onClose: () => void;
}

function TutorialCover({ onClose }: TutorialCoverProps) {
  const { t } = useTranslation();

  return (
    <div className="cover">
      <div className="cover-card">
        <div
          className="cover-info"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <img src={LogoImg} />
          <h2>{t('howto.buttonName')}</h2>
          <div
            style={{
              maxHeight: '45vh',
              overflowY: 'scroll',
            }}
          >
            <p
              style={{
                lineHeight: 2,
                fontSize: 14,
              }}
            >
              {t('howto.tutorial')}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
            }}
            className="styled-button"
          >
            {t('howto.close')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TutorialCover;
