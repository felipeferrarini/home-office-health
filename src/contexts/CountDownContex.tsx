import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountDownContexProps {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  resetCountDown: () => void;
  startCountDown: () => void;
}

export const CountDownContext = createContext({} as CountDownContexProps);

interface CountDownProviderProps {
  children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;
export const CountDownProvider: React.FC<CountDownProviderProps> = ({
  children
}) => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function resetCountDown() {
    setIsActive(false);
    clearTimeout(countdownTimeout);
    setHasFinished(false);
    setTime(25 * 60);
  }

  function startCountDown() {
    setIsActive(true);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountDown,
        startCountDown
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
};
