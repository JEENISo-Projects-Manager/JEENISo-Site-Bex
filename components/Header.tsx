import BookingWidget from "./BookingWidget";

export default function Header() {
  return (
    <>
      <header className="navbar" id="jeeniso-navbar">
        <div className="container navbar-container">
          <a href="/" className="nav-logo nav-logo-inline">
            JEENISo
          </a>
          <ul className="nav-links">
            <li className="nav-dropdown">
              <a href="/domaines" className="nav-link nav-link-with-icon">
                Nos Domaines{" "}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <ul className="nav-dropdown-menu">
                <li>
                  <a href="/domaines/mecatronique">Mécatronique</a>
                </li>
                <li>
                  <a href="/domaines/electronique-industrielle">Électronique Industrielle</a>
                </li>
                <li>
                  <a href="/domaines/informatique-appliquee">Informatique Appliquée</a>
                </li>
                <li>
                  <a href="/domaines/telecom-embarque">Télécom Embarqué</a>
                </li>
                <li>
                  <a href="/domaines/genie-de-production">Génie de Production</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/projets" className="nav-link">
                Projets
              </a>
            </li>
            <li>
              <a href="/equipe" className="nav-link">
                L'équipe
              </a>
            </li>
            <li>
              <a href="/actualites" className="nav-link">
                Actualités
              </a>
            </li>
          </ul>
          <div className="nav-actions">
            <div className="nav-dropdown rdv-dropdown">
              <button className="nav-cta nav-cta-dropdown" type="button" aria-expanded="false" aria-haspopup="true">
                Prendre rendez-vous
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="nav-dropdown-panel rdv-dropdown-panel" role="menu">
                <div className="rdv-dropdown-content">
                  <BookingWidget />
                </div>
              </div>
            </div>
            <a href="/devis" className="nav-cta">
              Devis
            </a>
          </div>
          <button className="burger-menu mobile-toggle" type="button" aria-label="Ouvrir le menu" aria-controls="mobile-nav" aria-expanded="false">
            <svg className="burger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg className="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" style={{ display: "none" }}>
              <line x1="6" y1="6" x2="18" y2="18"></line>
              <line x1="6" y1="18" x2="18" y2="6"></line>
            </svg>
          </button>
        </div>
      </header>
      <div className="mobile-overlay" aria-hidden="true"></div>
      <nav className="mobile-nav" id="mobile-nav" aria-hidden="true">
        <div className="mobile-cta-row">
          <a href="/devis" className="btn btn-secondary mobile-devis-cta">
            Devis
          </a>
          <a href="/rendez-vous" className="btn btn-primary mobile-rdv-cta">
            Prendre rendez-vous
          </a>
        </div>
        <div className="mobile-dropdown">
          <button type="button" className="mobile-dropdown-toggle" aria-expanded="false" aria-controls="mobile-expertises">
            Nos Domaines <span className="mobile-dropdown-arrow">+</span>
          </button>
          <div className="mobile-dropdown-content" id="mobile-expertises">
            <a href="/domaines/mecatronique" className="mobile-sub-link">
              ↳ Mécatronique
            </a>
            <a href="/domaines/electronique-industrielle" className="mobile-sub-link">
              ↳ Électronique Industrielle
            </a>
            <a href="/domaines/informatique-appliquee" className="mobile-sub-link">
              ↳ Informatique Appliquée
            </a>
            <a href="/domaines/telecom-embarque" className="mobile-sub-link">
              ↳ Télécom Embarqué
            </a>
            <a href="/domaines/genie-de-production" className="mobile-sub-link">
              ↳ Génie de Production
            </a>
          </div>
        </div>
        <a href="/projets">Projets</a>
        <a href="/equipe">L'équipe</a>
        <a href="/actualites">Actualités</a>
      </nav>
    </>
  );
}
