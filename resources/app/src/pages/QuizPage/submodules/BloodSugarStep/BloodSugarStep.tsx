import { Step } from '../Step';
import { QuizSelect } from '../QuizSelect';

const OPTIONS = [
  {
    label: 'Yes',
    value: 'Yes',
  },
  {
    label: 'I have an increased blood sugar level',
    value: 'I have an increased blood sugar level',
  },
  {
    label: 'No, I suffer from diabetes',
    value: 'No, I suffer from diabetes',
  },
  {
    label: 'I am not sure',
    value: 'I am not sure',
  },
];

interface Props {
  onSubmit: () => void,
}

export const BloodSugarStep = ({
  onSubmit,
}: Props) => {
  return (
    <Step title='Is your blood sugar level in the normal range?'>
      <QuizSelect
        options={OPTIONS}
        onChange={onSubmit}
      />
    </Step>
  );
};
