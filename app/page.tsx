import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

// NOTE: figures below are placeholders — replace with JEENISo's real numbers.
const stats = [
  { target: 2011, suffix: "", label: "Année de création" },
  { target: 15, suffix: "+", label: "Années d'expertise" },
  { target: 5, suffix: "", label: "Domaines d'expertise" },
];

const domaines = [
  {
    href: "/domaines/mecatronique",
    icon: "⚙️",
    badge: "Mécatronique",
    title: "Mécatronique",
    excerpt:
      "Conception et intégration de systèmes mécaniques, électroniques et informatiques pour des solutions automatisées et robotiques.",
  },
  {
    href: "/domaines/electronique-industrielle",
    icon: "🔌",
    badge: "Électronique",
    title: "Électronique Industrielle",
    excerpt:
      "Étude, conception et développement de cartes et systèmes électroniques pour des applications industrielles exigeantes.",
  },
  {
    href: "/domaines/informatique-appliquee",
    icon: "💻",
    badge: "Digital",
    title: "Informatique Appliquée",
    excerpt:
      "Développement d'applications web et mobiles, bases de données et solutions logicielles sur mesure pour vos besoins métier.",
  },
  {
    href: "/domaines/telecom-embarque",
    icon: "📡",
    badge: "Télécom",
    title: "Télécom Embarqué",
    excerpt:
      "Conception de systèmes de communication et de traitement du signal embarqués, pour des objets connectés et réseaux fiables.",
  },
  {
    href: "/domaines/genie-de-production",
    icon: "🏭",
    badge: "Production",
    title: "Génie de Production",
    excerpt:
      "Optimisation des processus industriels, gestion de la production et amélioration continue pour plus de performance.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <section className="home-hero-split">
        <div className="home-hero-left">
          <p className="home-hero-badge">JEENISo : Junior-Entreprise • ENISo, Sousse, Tunisie</p>
          <h1 className="home-hero-main-title">
            Travaillez <em>aujourd&apos;hui</em> avec les <br />
            <span className="hero-highlight">
              ingénieurs de <em>demain</em>
            </span>
          </h1>
          <p>
            La Junior-Entreprise de l&apos;École Nationale d&apos;Ingénieurs de Sousse, à votre service pour vos
            projets en mécatronique, digital, télécom et génie de production.
          </p>
          <div className="home-hero-actions">
            <a href="/devis" className="btn-primary-home">
              Parler de votre projet
            </a>
            <a href="/domaines" className="btn-secondary-home">
              Découvrir nos domaines
            </a>
          </div>
          <div className="home-hero-certifications">
            <span className="hero-cert-label">Membre de</span>
            <div className="hero-cert-logos">
              <div className="hero-l30-badge">
                <span className="l30-main">JET</span>
                <span className="l30-text">Junior Enterprises of Tunisia</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero-right">
          <div className="home-hero-visual" aria-hidden="true">
            <span>JEENISo</span>
          </div>
        </div>
      </section>

      <main id="main">
        <section className="stats home-stats-section">
          <div className="home-stats-container">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-counter home-stat-value" data-target={s.target} data-suffix={s.suffix}>
                  0
                </div>
                <div className="home-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="etudes-section home-section-block home-section-white">
          <div className="container home-container-wide">
            <div className="text-center home-section-intro">
              <span className="home-section-kicker">Ce que nous savons faire</span>
              <h2 className="home-section-title">Nos domaines d&apos;expertise</h2>
              <p className="home-section-text">
                Cinq domaines d&apos;ingénierie portés par les étudiants de l&apos;ENISo, au service de vos projets
                industriels et digitaux.
              </p>
            </div>

            <div className="home-etudes-clean-grid">
              {domaines.map((d) => (
                <a href={d.href} className="home-etude-clean-card" key={d.href}>
                  <div className="home-etude-clean-image">
                    <span className="home-etude-clean-icon">{d.icon}</span>
                    <span className="home-etude-clean-badge">{d.badge}</span>
                  </div>

                  <div className="home-etude-clean-content">
                    <h3 className="home-etude-clean-title">{d.title}</h3>
                    <p className="home-etude-clean-excerpt">{d.excerpt}</p>
                    <div className="home-etude-clean-more">
                      En savoir plus
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center home-section-footer">
              <a href="/projets" className="btn btn-secondary home-btn-light">
                Découvrir nos projets
              </a>
            </div>
          </div>
        </section>

        <section className="cta-section home-cta-section">
          <div className="container home-cta-container">
            <h2 className="home-cta-title">Prêt à façonner l&apos;avenir avec votre Junior-Entreprise Tunisienne ?</h2>
            <p className="home-cta-text">
              Discutons dès aujourd&apos;hui de vos besoins. L&apos;équipe d&apos;étudiants-ingénieurs de JEENISo est
              prête à concevoir la solution idéale pour votre entreprise.
            </p>
            <div className="home-cta-actions">
              <a href="/devis" className="btn btn-primary home-cta-button">
                Demander un devis
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CookieBanner />
    </>
  );
}
