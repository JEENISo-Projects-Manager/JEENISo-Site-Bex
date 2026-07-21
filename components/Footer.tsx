export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta-strip">
          <div className="footer-cta-text">
            <h3>Parlons de votre projet</h3>
            <p>Un premier échange sous 48h avec l’équipe JEENISo.</p>
          </div>
          <a href="/devis" className="footer-cta-link">
            Demander un devis
          </a>
        </div>

        <div className="footer-logos">
          <a href="/" className="footer-wordmark">
            JEENISo
          </a>
          <span className="footer-tagline">Quality is our Business</span>
        </div>
        <div className="footer-grid">
          <div className="footer-contact">
            <h4>Nous contacter</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item footer-contact-item-address">
                <span>École Nationale d&apos;Ingénieurs de Sousse</span>
                <span>BP 264, 4023 Sousse Erriadh, Tunisie</span>
              </li>
              <li className="footer-contact-item">
                <a href="tel:+21600000000">+216 00 000 000</a>
              </li>
              <li className="footer-contact-item">
                <a href="mailto:contact@jeeniso.com">contact@jeeniso.com</a>
              </li>
            </ul>
            <div className="footer-social">
              <a href="https://www.facebook.com/Junior.Entreprise.ENISo/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4v2.2H7.9v3.2h2.7V21h2.9z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://tn.linkedin.com/company/junior-entreprise-eniso" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="footer-links-group">
            <div>
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="/">Accueil</a>
                </li>
                <li>
                  <a href="/projets">Projets</a>
                </li>
                <li>
                  <a href="/equipe">Équipe</a>
                </li>
                <li>
                  <a href="/devis">Devis</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Nos Domaines</h4>
              <ul>
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
            </div>
            <div>
              <h4>Légal</h4>
              <ul>
                <li>
                  <a href="/mentions-legales">Mentions Légales</a>
                </li>
                <li>
                  <a href="/politique-de-confidentialite">Confidentialité</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 JEENISo - Junior Entreprise ENISo. Tous droits réservés.</p>
          <span className="footer-bottom-tag">Membre de JET - Junior Enterprises of Tunisia</span>
        </div>
      </div>
    </footer>
  );
}
