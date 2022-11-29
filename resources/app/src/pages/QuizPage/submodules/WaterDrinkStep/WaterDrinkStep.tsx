import { Step } from '../Step';
import { QuizSelect } from '../QuizSelect';

const OPTIONS = [
  {
    label: 'Less than 1 glass',
    value: 'Less than 1 glass',
  },
  {
    label: '1-2 glasses',
    value: '1-2 glasses',
  },
  {
    label: '3-4 glasses',
    value: '3-4 glasses',
  },
  {
    label: '5-6 glasses',
    value: '5-6 glasses',
  },
  {
    label: 'More than 6 glasses',
    value: 'More than 6 glasses',
  },
];

interface Props {
  onSubmit: () => void,
}

export const WaterDrinkStep = ({
  onSubmit,
}: Props) => {
  return (
    <Step title='How much water do you drink per day?'>
      <QuizSelect
        options={OPTIONS}
        onChange={onSubmit}
      />
    </Step>
  );
};
