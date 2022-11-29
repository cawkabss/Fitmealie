import css from './Copyright.module.sass';

export const Copyright = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <section className={css.root}>
      {`Copyright ® ${year} Fitmealie. All Rights Reserved`}
    </section>
  );
};
