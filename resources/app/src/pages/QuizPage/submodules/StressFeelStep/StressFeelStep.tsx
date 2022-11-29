import { Step } from '../Step';
import { QuizSelect } from '../QuizSelect';

const OPTIONS = [
  {
    label: 'Never',
    value: 'Never',
  },
  {
    label: 'Sometimes',
    value: 'Sometimes',
  },
  {
    label: 'Often',
    value: 'Often',
  },
  {
    label: 'Always',
    value: 'Always',
  },
];

interface Props {
  onSubmit: () => void,
}

export const StressFeelStep = ({
  onSubmit,
}: Props) => {
  return (
    <Step title='How often do you feel stress?'>
      <QuizSelect
        options={OPTIONS}
        onChange={onSubmit}
      />
    </Step>
  );
};
