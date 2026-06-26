import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Baby,
  Building2,
  CalendarHeart,
  CheckCircle2,
  ChevronRight,
  Clipboard,
  Gift,
  HandHeart,
  Heart,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X
} from "lucide-react";
import "./styles.css";

const PIX_KEY = "solidariosiq@yahoo.com";
const WHATSAPP_URL = "https://wa.me/5543984220843";
const WHATSAPP_MESSAGE_URL =
  "https://wa.me/5543984220843?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20ACOS%20-%20Associa%C3%A7%C3%A3o%20Cora%C3%A7%C3%A3o%20Solid%C3%A1rio";
const ADDRESS =
  "Av. Brasil, 649 - loja B - Vila Nova, Siqueira Campos - PR, 84940-000";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";

const navItems = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Atuação", "#atuacao"],
  ["Como ajudar", "#ajudar"],
  ["Colaborador", "#colaborador"],
  ["Localização", "#localizacao"],
  ["Contato", "#contato"]
];

const stats = [
  ["Crianças", "Apoio, acolhimento e cuidado comunitário"],
  ["Famílias", "Orientação, escuta e assistência solidária"],
  ["Cidade", "Projetos e eventos que aproximam pessoas"]
];

const workCards = [
  {
    title: "Apoio a crianças",
    text: "Ações voltadas ao bem-estar, proteção, convivência e desenvolvimento infantil.",
    icon: Baby
  },
  {
    title: "Assistência a famílias",
    text: "Acolhimento respeitoso a famílias em situação de vulnerabilidade econômica e social.",
    icon: Home
  },
  {
    title: "Projetos sociais",
    text: "Mobilizações solidárias para transformar doações em cuidado real e organizado.",
    icon: HandHeart
  },
  {
    title: "Cultura e comunidade",
    text: "Iniciativas que fortalecem vínculos, pertencimento e participação local.",
    icon: Sparkles
  },
  {
    title: "Inclusão e dignidade",
    text: "Atuação humana para ampliar acesso, respeito, escuta e oportunidade.",
    icon: ShieldCheck
  },
  {
    title: "Eventos solidários",
    text: "Ações que movimentam Siqueira Campos e unem colaboradores em torno da causa.",
    icon: CalendarHeart
  }
];

const helpWays = [
  {
    title: "Doação via Pix",
    text: "Contribua com qualquer valor pela chave Pix oficial da associação.",
    icon: Gift
  },
  {
    title: "Voluntariado",
    text: "Participe de ações, eventos e campanhas conforme sua disponibilidade.",
    icon: UsersRound
  },
  {
    title: "Parcerias",
    text: "Empresas e grupos podem apoiar projetos, campanhas e necessidades específicas.",
    icon: Building2
  }
];

const processSteps = [
  "A ACOS identifica necessidades da comunidade e organiza prioridades.",
  "Voluntários e colaboradores mobilizam recursos, tempo e parcerias.",
  "As ações chegam às crianças, famílias e projetos sociais com acompanhamento."
];

const faqItems = [
  {
    question: "Como posso ajudar de forma rápida?",
    answer:
      "A forma mais simples é contribuir pela chave Pix ou chamar no WhatsApp para saber quais itens e apoios estão sendo necessários no momento."
  },
  {
    question: "Empresas podem colaborar?",
    answer:
      "Sim. Empresas podem participar como parceiras em campanhas, eventos, doações, serviços e mobilização de equipes."
  },
  {
    question: "O formulário já envia para Google Sheets?",
    answer:
      "Sim. Basta publicar o Apps Script incluso no projeto e colocar a URL em VITE_GOOGLE_SCRIPT_URL."
  }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="ACOS - Início">
        <img src="/logo-acos.webp" alt="Logo da ACOS" />
        <span>ACOS </span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={open ? "nav open" : "nav"} aria-label="Menu principal">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="whatsapp-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <Phone size={18} />
          WhatsApp
        </a>
      </nav>
    </header>
  );
}

function PixBox({ compact = false }) {
  const [copied, setCopied] = useState(false);

  async function copyPix() {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      alert(`Copie a chave Pix: ${PIX_KEY}`);
    }
  }

  return (
    <div className={compact ? "pix-box compact" : "pix-box"}>
      <span>Chave Pix oficial</span>
      <strong>{PIX_KEY}</strong>
      <button type="button" onClick={copyPix}>
        <Clipboard size={18} />
        Copiar chave Pix
      </button>
      {copied && (
        <p className="success" role="status">
          Chave Pix copiada com sucesso!
        </p>
      )}
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section-anchor">
      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow">Solidariedade que transforma vidas</span>
          <h1>ACOS - Associação Coração Solidário</h1>
          <p className="subtitle">Entidade sem fins lucrativos de apoio a crianças.</p>
          <p>
            Uma iniciativa acolhedora de Siqueira Campos que conecta cuidado,
            voluntariado, doações e parcerias para apoiar crianças e famílias.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#ajudar">
              <HeartHandshake size={20} />
              Quero ajudar
            </a>
            <a className="button secondary" href="#colaborador">
              <UsersRound size={20} />
              Seja colaborador
            </a>
          </div>
          <div className="trust-row" aria-label="Principais frentes da ACOS">
            {stats.map(([label, text]) => (
              <div key={label}>
                <strong>{label}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Identidade visual e acolhimento da ACOS">
          <div className="hero-logo-card">
            <img src="/logo-acos.webp" alt="Logo da ACOS com pomba, mãos e coração" />
          </div>
          <img
            className="hero-illustration"
            src="/images/01.png"
            alt="Ilustração de voluntários em ação solidária"
          />
          <PixBox compact />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section section-anchor about-section">
      <div className="about-copy">
        <span className="eyebrow">Sobre a ACOS</span>
        <h2>Cuidado social com presença, respeito e compromisso.</h2>
        <p>
          A ACOS (Associação Coração Solidário) é uma organização sem fins
          lucrativos atuante em Siqueira Campos, Paraná, dedicada a promover o
          bem-estar social, a inclusão e a dignidade na comunidade local.
        </p>
        <div className="values-grid">
          <article>
            <Heart size={22} />
            <strong>Missão</strong>
            <span>Acolher e fortalecer crianças e famílias por meio de ações solidárias.</span>
          </article>
          <article>
            <ShieldCheck size={22} />
            <strong>Valores</strong>
            <span>Transparência, respeito, cuidado, colaboração e responsabilidade social.</span>
          </article>
        </div>
      </div>
      <figure className="image-frame">
        <img src="/images/criancas-comunidade.svg" alt="Ilustração de crianças e comunidade acolhida" />
      </figure>
    </section>
  );
}

function Work() {
  return (
    <section id="atuacao" className="section section-anchor soft-band">
      <SectionHeading
        eyebrow="Atuação principal"
        title="Projetos que aproximam pessoas e transformam realidades."
        text="A instituição realiza projetos sociais, culturais e de apoio assistencial, com foco no atendimento às famílias em situação de vulnerabilidade econômica e na promoção de eventos que movimentam a cidade."
      />
      <div className="card-grid">
        {workCards.map(({ title, text, icon: Icon }) => (
          <article className="work-card" key={title}>
            <div className="icon-badge">
              <Icon size={26} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section process-section">
      <SectionHeading
        eyebrow="Como o apoio acontece"
        title="Uma corrente organizada: necessidade, mobilização e cuidado."
        text="O objetivo é transformar boa vontade em ação concreta, com comunicação simples e participação acessível."
      />
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article key={step} className="process-card">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Donate() {
  return (
    <section id="ajudar" className="section section-anchor donate">
      <div className="donate-copy">
        <span className="eyebrow">Como ajudar</span>
        <h2>Sua ajuda pode transformar vidas.</h2>
        <p>
          Contribua com a ACOS e participe dessa corrente de solidariedade.
          Doações, parcerias e voluntariado ajudam a manter projetos vivos.
        </p>
        <div className="help-list">
          {helpWays.map(({ title, text, icon: Icon }) => (
            <article key={title}>
              <Icon size={22} />
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="donate-panel">
        <img src="/images/doacao-pix.svg" alt="Ilustração de doação via Pix" />
        <PixBox />
      </div>
    </section>
  );
}

function Transparency() {
  return (
    <section className="section transparency">
      <div className="transparency-panel">
        <div>
          <span className="eyebrow">Confiança e transparência</span>
          <h2>Doar também é participar de uma rede de cuidado.</h2>
          <p>
            A ACOS valoriza uma comunicação clara com colaboradores. Sempre que
            possível, converse com a equipe, acompanhe as ações e entenda quais
            necessidades estão sendo priorizadas.
          </p>
        </div>
        <ul>
          <li>Chave Pix destacada e fácil de copiar.</li>
          <li>WhatsApp sempre visível para tirar dúvidas.</li>
          <li>Cadastro de colaboradores integrado ao Google Sheets.</li>
          <li>Endereço e mapa para contato presencial.</li>
        </ul>
      </div>
    </section>
  );
}

function CollaboratorForm() {
  const [isCompanyMember, setIsCompanyMember] = useState("Não");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const requiredFields = useMemo(
    () => ["fullName", "address", "phone", "email", "companyMember"],
    []
  );

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const missing = requiredFields.some((field) => !String(data[field] || "").trim());
    if (missing) {
      setStatus({
        type: "error",
        message: "Preencha todos os campos obrigatórios antes de enviar."
      });
      return;
    }

    if (!GOOGLE_SCRIPT_URL) {
      setStatus({
        type: "error",
        message: "Configure a variável VITE_GOOGLE_SCRIPT_URL para enviar o cadastro."
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submittedAt: new Date().toISOString(),
          ...data
        })
      });

      if (response.type !== "opaque" && !response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setIsCompanyMember("Não");
      setStatus({
        type: "success",
        message: "Cadastro enviado com sucesso! Em breve entraremos em contato."
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Não foi possível enviar o cadastro. Tente novamente ou fale pelo WhatsApp."
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="colaborador" className="section section-anchor collaborator">
      <div className="collaborator-layout">
        <div className="collaborator-intro">
          <span className="eyebrow">Seja colaborador</span>
          <h2>Participe de uma rede de apoio que cuida de pessoas.</h2>
          <p>
            Preencha o cadastro e a equipe da ACOS entrará em contato para
            conversar sobre formas de colaboração, voluntariado ou parceria.
          </p>
          <img src="/images/voluntariado.svg" alt="Ilustração de voluntariado organizado" />
        </div>

        <form className="collaborator-form" onSubmit={handleSubmit}>
          <label>
            Nome completo *
            <input name="fullName" type="text" autoComplete="name" required />
          </label>
          <label>
            Endereço completo *
            <input name="address" type="text" autoComplete="street-address" required />
          </label>
          <label>
            Telefone *
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            E-mail *
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <fieldset>
            <legend>Faz parte de alguma empresa? *</legend>
            <label className="radio">
              <input
                name="companyMember"
                type="radio"
                value="Sim"
                checked={isCompanyMember === "Sim"}
                onChange={() => setIsCompanyMember("Sim")}
              />
              Sim
            </label>
            <label className="radio">
              <input
                name="companyMember"
                type="radio"
                value="Não"
                checked={isCompanyMember === "Não"}
                onChange={() => setIsCompanyMember("Não")}
              />
              Não
            </label>
          </fieldset>

          {isCompanyMember === "Sim" && (
            <>
              <label>
                Nome da empresa associada
                <input name="companyName" type="text" />
              </label>
              <label>
                Endereço da empresa
                <input name="companyAddress" type="text" />
              </label>
            </>
          )}

          <button className="button primary form-button" type="submit" disabled={loading}>
            <Send size={20} />
            {loading ? "Enviando..." : "Enviar cadastro"}
          </button>

          {status.message && (
            <p className={`form-status ${status.type}`} role="status">
              {status.type === "success" && <CheckCircle2 size={18} />}
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="localizacao" className="section section-anchor location">
      <div className="location-info">
        <span className="eyebrow">Localização</span>
        <h2>Estamos em Siqueira Campos, Paraná.</h2>
        <p>{ADDRESS}</p>
        <a className="button secondary" href={MAP_URL} target="_blank" rel="noreferrer">
          <MapPin size={20} />
          Ver no Google Maps
        </a>
      </div>
      <iframe
        title="Mapa com a localização da ACOS"
        src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

function Faq() {
  return (
    <section className="section faq-section">
      <SectionHeading
        eyebrow="Dúvidas frequentes"
        title="Informações rápidas para quem quer ajudar."
      />
      <div className="faq-grid">
        {faqItems.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <ChevronRight size={18} />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="section section-anchor contact soft-band">
      <SectionHeading
        eyebrow="Contato"
        title="Fale com a ACOS e caminhe junto nesta causa."
      />
      <div className="contact-grid">
        <article>
          <Phone size={24} />
          <h3>WhatsApp</h3>
          <p>+55 43 98422-0843</p>
          <a className="button primary" href={WHATSAPP_MESSAGE_URL} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
        </article>
        <article>
          <MapPin size={24} />
          <h3>Endereço</h3>
          <p>{ADDRESS}</p>
        </article>
        <article>
          <Mail size={24} />
          <h3>Chave Pix</h3>
          <p>{PIX_KEY}</p>
        </article>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <img src="/logo-acos.webp" alt="Logo da ACOS" />
      <div>
        <strong>ACOS - Associação Coração Solidário</strong>
        <p>ACOS - Associação Coração Solidário. Solidariedade que transforma vidas.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <HowItWorks />
        <Donate />
        <Transparency />
        <CollaboratorForm />
        <Location />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={WHATSAPP_MESSAGE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar ACOS no WhatsApp"
      >
        <Phone size={26} />
      </a>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
