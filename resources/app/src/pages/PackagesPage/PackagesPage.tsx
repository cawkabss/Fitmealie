import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Package as PackageType} from 'types/interfaces/Package';

import { useInitQuery } from 'queries/useInitQuery';

import { Checkbox } from 'UI/Checkbox';
import { Button } from 'UI/Button';

import { SimpleHeader } from 'components/SimpleHeader';
import { Copyright } from 'components/Copyright';

import { Package } from './submodules/Package';

import preview from './images/preview.jpg';

import css from './PackagesPage.module.sass';

export const PackagesPage = () => {
  const navigate = useNavigate();

  const { data } = useInitQuery();

  const [activePackage, setActivePackage] = useState(() => data?.packages?.find((pack) => pack.default));
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handlePackageClick = (pack: PackageType) => {
    setActivePackage(pack);
  };

  const handleTermsToggle = () => {
    setIsTermsAccepted((prev) => !prev);
  };

  const handleSubmit = () => {
    navigate(`/payment/${activePackage?.id}`);
  };

  return (
    <div className={css.root}>
      <SimpleHeader />
      <main className={css.main}>
        <div className={css.container}>
          <h1 className={css.title}>
            <span className={css.highlight}>Get</span> your personal Diet
          </h1>
          <div className={css.row}>
            <section className={css.column}>
              <ul className={css.packages}>
                {data?.packages.map((pack) => {
                  return (
                    <li
                      key={pack.id}
                      className={css.package}
                    >
                      <Package
                        key={pack.id}
                        pack={pack}
                        isActive={activePackage?.id === pack.id}
                        onClick={() => handlePackageClick(pack)}
                      />
                    </li>
                  );
                })}
              </ul>

              <Button
                className={css.submit}
                type='button'
                onClick={handleSubmit}
                disabled={!isTermsAccepted}
                fullWidth
              >
                Get my plan
              </Button>

              <Checkbox
                className={css.terms}
                checked={isTermsAccepted}
                onChange={handleTermsToggle}
              >
                I agree and accept
                &nbsp;
                <Link
                  className={css.link}
                  to='/terms-of-use'
                >
                  Terms and Conditions
                </Link>
                &nbsp;
                 and
                 &nbsp;
                 <Link
                  className={css.link}
                  to='/privacy-policy'
                >
                  Privacy Policy
                </Link>
              </Checkbox>
            </section>
            <section className={css.column}>
              <img
                className={css.preview}
                src={preview}
                alt=""
              />
            </section>
          </div>
        </div>
      </main>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
};
