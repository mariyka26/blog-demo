import React, { type ReactElement, type ComponentType } from 'react'
import { locales } from '../../config/locales'
import { useAppSelector } from '../../redux/store';

interface FooterProps {
  container: ComponentType<{ children: React.ReactNode }>
}

export function Footer({ container: Container }: FooterProps): ReactElement {
  const lang = useAppSelector((state) => state.language.language);

  return (
    <Container>
      <footer>
        <div className="d-flex align-items-center justify-content-between py-4 border-top text-secondary">
          <p className="mb-0">{locales[lang].footer.copyright}</p>
          <p className="mb-0">
            {locales[lang].footer.rights} <strong>{lang}</strong>{' '}
          </p>
        </div>
      </footer>
    </Container>
  )
}
