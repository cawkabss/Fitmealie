import { Step } from '../Step';
import { QuizSelect } from '../QuizSelect';

const OPTIONS = [
  {
    label: 'I don`t exercise',
    value: 'I don`t exercise',
  },
  {
    label: 'I exercise occassionally',
    value: 'I exercise occassionally',
  },
  {
    label: 'I exercise regularly',
    value: 'I exercise regularly',
  },
];

interface Props {
  onSubmit: () => void,
}

export const ExerciseStep = ({
  onSubmit,
}: Props) => {
  return (
    <Step title='How often do you exercise?'>
      <QuizSelect
        options={OPTIONS}
        onChange={onSubmit}
      />
    </Step>
  );
};
