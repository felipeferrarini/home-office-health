import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.levelupContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button className={styles.closeButton} type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>

        <button className={styles.shareButton}>
          Compartilhar no Twitter
          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 1.00005C21.0424 1.67552 19.9821 2.19216 18.86 2.53005C18.2577 1.83756 17.4573 1.34674 16.567 1.12397C15.6767 0.901206 14.7395 0.957242 13.8821 1.2845C13.0247 1.61176 12.2884 2.19445 11.773 2.95376C11.2575 3.71308 10.9877 4.61238 11 5.53005V6.53005C9.24263 6.57561 7.50127 6.18586 5.93101 5.39549C4.36074 4.60513 3.01032 3.43868 2 2.00005C2 2.00005 -2 11 7 15C4.94053 16.398 2.48716 17.099 0 17C9 22 20 17 20 5.50005C19.9991 5.2215 19.9723 4.94364 19.92 4.67005C20.9406 3.66354 21.6608 2.39276 22 1.00005Z" fill="#2AA9E0"/>
          </svg>
        </button>
      </div>
    </div>
  )
}