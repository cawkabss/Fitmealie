import { Step } from '../Step';
import { QuizSelect } from '../QuizSelect';

const OPTIONS = [
  {
    label: 'Male',
    value: 'Male',
  },
  {
    label: 'Female',
    value: 'Female',
  },
];

interface Props {
  onSubmit: () => void,
}

export const GenderStep = ({
  onSubmit,
}: Props) => {
  return (
    <Step title='Select your gender:'>
      <QuizSelect
        options={OPTIONS}
        onChange={onSubmit}
      />
    </Step>
  );
};
