import css from './ProgressBar.module.sass';

interface Props {
  progress: number,
}

export const ProgressBar = ({
  progress,
}: Props) => {
  return (
    <div className={css.root}>
      <span
        className={css.progress}
        style={{
          width: `${progress}%`
        }}
      />
    </div>
  );
};
