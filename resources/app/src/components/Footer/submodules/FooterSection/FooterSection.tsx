import css from './FooterSection.module.sass';

interface Props {
  title?: string,
  children?: React.ReactNode
}

export const FooterSection: React.FC<Props> = ({
  title,
  children,
}) => {
  return (
    <section className={css.root}>
      {title && (
        <p className={css.title}>
          {title}
        </p>
      )}

      {children}
    </section>
  );
};
