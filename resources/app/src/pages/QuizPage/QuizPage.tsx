import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import LogoIcon from 'assets/icons/logo.svg';
import ArrowIcon from 'assets/icons/arrow.svg';

import { useRegisterMutation } from 'queries/useRegisterMutation';

import { Copyright } from 'components/Copyright';

import { ProgressBar } from './submodules/ProgressBar';
import { GenderStep } from './submodules/GenderStep';
import { DayModeStep } from './submodules/DayModeStep';
import { ExerciseStep } from './submodules/ExerciseStep';
import { SleepTimeStep } from './submodules/SleepTimeStep';
import { StressFeelStep } from './submodules/StressFeelStep';
import { WaterDrinkStep } from './submodules/WaterDrinkStep';
import { BloodSugarStep } from './submodules/BloodSugarStep';
import { SizesStep } from './submodules/SizesStep';
import { WeightStep } from './submodules/WeightStep';
import { YearsStep } from './submodules/YearsStep';
import { EmailStep } from './submodules/EmailStep';
import { PasswordStep } from './submodules/PasswordStep';

import css from './QuizPage.module.sass';

const STEPS = [
  GenderStep,
  DayModeStep,
  ExerciseStep,
  SleepTimeStep,
  StressFeelStep,
  WaterDrinkStep,
  BloodSugarStep,
  SizesStep,
  WeightStep,
  YearsStep,
  EmailStep,
  PasswordStep,
];

export const QuizPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient()

  const { mutate } = useRegisterMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('init');
      navigate('/packages');
    },
  });

  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(0);

  const handleHistoryBack = () => {
    if (step === 0) {
      navigate(-1);
    } else {
      setStep((prev) => prev -1);
    }
  };

  const handleStepSubmit = (data?: any) => {
    if (data) {
      setFormData((prev) => ({
        ...prev,
        ...data,
      }))
    }

    if (step === STEPS.length - 1) {
      mutate(data);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const Step = STEPS[step];

  return (
    <div className={css.root}>
      <main className={css.main}>
        <div className={css.container}>
          <button
            type='button'
            className={css.backButton}
            onClick={handleHistoryBack}
          >
            <ArrowIcon
              className={css.arrow}
              width='35'
              height='35'
            />
            <LogoIcon
              className={css.logo}
              width='162'
              height='28'
            />
          </button>

          <div className={css.form}>
            <ProgressBar progress={(step + 1) / STEPS.length * 100} />

            <div className={css.step}>
              <Step onSubmit={handleStepSubmit} />
            </div>
          </div>
        </div>
      </main>
      <Copyright />
    </div>
  );
};
