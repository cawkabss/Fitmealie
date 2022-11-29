import css from './SectionTitle.module.sass';

interface Props {
  title: string,
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  const words = title.split(' ');
  const firstWord = words[0];
  const restWords = words.slice(1).join(' ');

  return (
    <h3 className={css.root}>
      <span className={css.hightlight}>{firstWord}</span>&nbsp;
      {restWords}
    </h3>
  );
};
