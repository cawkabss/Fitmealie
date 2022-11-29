import { Step } from '../Step';
import { QuizSelect } from '../QuizSelect';

const OPTIONS = [
  {
    label: 'I usually stay at home',
    value: 'I usually stay at home',
  },
  {
    label: 'I go to the office regularly',
    value: 'I go to the office regularly',
  },
  {
    label: 'I go out a lot',
    value: 'I go out a lot',
  },
  {
    label: 'I do manual labor',
    value: 'I do manual labor',
  },
];

interface Props {
  onSubmit: () => void,
}

export const DayModeStep = ({
  onSubmit,
}: Props) => {
  return (
    <Step title='What does your typical day look like?'>
      <QuizSelect
        options={OPTIONS}
        onChange={onSubmit}
      />
    </Step>
  );
};
