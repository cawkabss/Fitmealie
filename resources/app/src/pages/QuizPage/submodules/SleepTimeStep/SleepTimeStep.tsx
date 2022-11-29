import { Step } from '../Step';
import { QuizSelect } from '../QuizSelect';

const OPTIONS = [
  {
    label: 'Less than 5 hours',
    value: 'Less than 5 hours',
  },
  {
    label: '5-6 hours',
    value: '5-6 hours',
  },
  {
    label: '7-8 hours',
    value: '7-8 hours',
  },
  {
    label: 'More than 8 hours',
    value: 'More than 8 hours',
  },
];

interface Props {
  onSubmit: () => void,
}

export const SleepTimeStep = ({
  onSubmit,
}: Props) => {
  return (
    <Step title='How many hours of sleep do you get at night?'>
      <QuizSelect
        options={OPTIONS}
        onChange={onSubmit}
      />
    </Step>
  );
};
