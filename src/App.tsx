import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Send,
  Mail,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

/* ==========================================================================
   PRIMITIVES & ICONS
   ========================================================================== */

const WhatsAppLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.886 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LogoMark: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden="true">
    <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
  </svg>
);

const ActionButton: React.FC<{
  label?: string;
  full?: boolean;
  href?: string;
  onClick?: () => void;
}> = ({ label = "Iniciar Proyecto", full = false, href = "#contacto", onClick }) => {
  const content = (
    <>
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </>
  );

  const className = `group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-semibold text-sm px-6 py-3.5 transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.2)] ${
    full ? "w-full" : ""
  }`;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
};

const WhatsAppButton: React.FC<{
  label?: string;
  className?: string;
}> = ({ label = "Escríbenos por WhatsApp", className = "" }) => (
  <a
    href="https://wa.me/5219990000000?text=Hola%20Arcxtek,%20quiero%20cotizar%20un%20proyecto%20de%20software"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25d366] text-black font-semibold text-sm px-6 py-3.5 transition-all hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(37,211,102,0.35)] ${className}`}
    aria-label="WhatsApp"
  >
    <WhatsAppLogo className="w-5 h-5 text-black" />
    <span>{label}</span>
  </a>
);

const SectionEyebrow: React.FC<{ label: string; tag?: string }> = ({ label, tag }) => (
  <div className="inline-flex items-center gap-2">
    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00e5ff]" />
    <span className="text-xs uppercase tracking-widest text-white/70 font-semibold">{label}</span>
    {tag && (
      <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-[11px] font-medium bg-white/[0.03]">
        {tag}
      </span>
    )}
  </div>
);

const gradientStyle: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
};

/* ==========================================================================
   APP COMPONENT
   ========================================================================== */

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  // Proyectos reales desarrollados por Arcxtek
  const projects = [
    {
      client: "Coloso Energy",
      logo: "/assets/clients/coloso_transparent.png",
      tag: "IoT & Monitoreo Energético",
      title: "Telemetría y Analítica en Tiempo Real",
      desc: "Ingesta y procesamiento masivo de más de 18,400 lecturas por minuto en subestaciones y microredes eléctricas con alertas preventivas y dashboards en vivo.",
      impact: "Cero latencia anómala · Uptime 99.99%",
      tech: ["IoT Core", "WebSockets", "TimescaleDB", "Microservicios"]
    },
    {
      client: "Liupana del Sureste",
      logo: "/assets/clients/liupana_transparent.png",
      tag: "ERP & Construcción",
      title: "Control de Obra y Finanzas Inmobiliarias",
      desc: "Digitalización integral del avance físico y financiero de obras, estimaciones de contratistas y control presupuestal sin discrepancias contables en 12 desarrollos activos.",
      impact: "Trazabilidad 100% de costos de obra",
      tech: ["React", "Node.js", "PostgreSQL", "Cloud RBAC"]
    },
    {
      client: "Papá Colchón",
      logo: "/assets/clients/papacolchon_transparent.png",
      tag: "E-Commerce & Retail",
      title: "Plataforma Omnicanal y Despacho Logístico",
      desc: "Sincronización de inventario multi-sucursal en milisegundos, motor de ruteo de entregas automatizado y checkout acelerado con carga en menos de 0.7s.",
      impact: "Cero sobreventas en temporadas altas",
      tech: ["Next.js", "Algolia", "Redis", "Logistics API"]
    },
    {
      client: "Montessori Quinto Sol",
      logo: "/assets/clients/montessori.png",
      tag: "FinTech & Educación",
      title: "Ecosistema Escolar y Cobranza Automatizada",
      desc: "Portal administrativo institucional con conciliación bancaria SPEI inmediata, facturación CFDI en automático y gestión escolar para familias.",
      impact: "96% de adopción de tutores y cobranza puntual",
      tech: ["SPEI Webhooks", "Facturación CFDI", "Portal Web"]
    },
    {
      client: "Bek de Santa Lilia",
      logo: "/assets/clients/bek_transparent.png",
      tag: "Gestión Inmobiliaria",
      title: "Control de Accesos y Gestión Residencial",
      desc: "Sistema centralizado de control de accesos, gestión comunitaria, reservaciones y administración de cuotas para desarrollo residencial de alto nivel.",
      impact: "Operación de accesos automatizada",
      tech: ["App Móvil", "IoT Gateways", "Cloud Dashboard"]
    },
    {
      client: "Monte de Guadalupe",
      logo: "/assets/clients/monteguadalupe_transparent.png",
      tag: "Operaciones & Trazabilidad",
      title: "Sistema Operativo y Control de Inventarios",
      desc: "Plataforma de coordinación de procesos, trazabilidad y control de inventarios agroindustriales con reportería ejecutiva en la nube.",
      impact: "Control total de mermas y existencias",
      tech: ["PWA Offline-first", "GraphQL", "PostgreSQL"]
    }
  ];

  const clientLogos = [
    { name: "Coloso Energy", src: "/assets/clients/coloso_transparent.png" },
    { name: "Liupana del Sureste", src: "/assets/clients/liupana_transparent.png" },
    { name: "Papá Colchón", src: "/assets/clients/papacolchon_transparent.png" },
    { name: "Montessori Quinto Sol", src: "/assets/clients/montessori.png" },
    { name: "EVA", src: "/assets/clients/eva.png" },
    { name: "Bek de Santa Lilia", src: "/assets/clients/bek_transparent.png" },
    { name: "Monte de Guadalupe", src: "/assets/clients/monteguadalupe_transparent.png" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white selection:bg-brand/30">
      
      {/* 1. Global Background Video (Fixed, behind everything) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none opacity-40 mix-blend-screen"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-[#0c0c0c]/90 to-[#0c0c0c]" />
      </div>

      {/* 2. Hidden-on-mobile fixed vertical guide lines at 36rem container edges */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      {/* 3. Global SVG noise filter at root level for shiny headline */}
      <svg className="fixed top-0 left-0 w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-[#0c0c0c]/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group" aria-label="Arcxtek Home">
            <LogoMark className="w-7 h-7 text-white transition-transform group-hover:scale-105" />
            <span className="font-semibold text-lg tracking-tight">arcxtek</span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#proyectos" className="text-white/70 text-sm font-medium hover:text-white transition-colors">
              Proyectos
            </a>
            <a href="#clientes" className="text-white/70 text-sm font-medium hover:text-white transition-colors">
              Clientes
            </a>
            <a href="#contacto" className="text-white/70 text-sm font-medium hover:text-white transition-colors">
              Contacto
            </a>
          </div>

          {/* Right desktop: WhatsApp + Iniciar Proyecto */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5219990000000?text=Hola%20Arcxtek,%20quiero%20cotizar%20un%20proyecto%20de%20software"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#25d366]/40 bg-[#25d366]/10 text-[#25d366] flex items-center justify-center transition-all hover:bg-[#25d366]/25 hover:scale-105 hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppLogo className="w-5 h-5" />
            </a>
            <ActionButton label="Contactar" href="#contacto" />
          </div>

          {/* Mobile Right */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/5219990000000?text=Hola%20Arcxtek,%20quiero%20cotizar%20un%20proyecto%20de%20software"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#25d366]/40 bg-[#25d366]/10 text-[#25d366] flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <WhatsAppLogo className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0c0c0c] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
            <a
              href="#proyectos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              Proyectos
            </a>
            <a
              href="#clientes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              Clientes
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              Contacto
            </a>
            <div className="pt-2">
              <ActionButton label="Contactar Ahora" full href="#contacto" onClick={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </motion.nav>

      {/* HERO SECTION */}
      <section id="hero" className="pt-20 md:pt-32 pb-20 text-center flex flex-col items-center max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <SectionEyebrow label="Ingeniería de Software a la Medida" tag="AI-Native" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95] max-w-4xl"
        >
          <span className="block text-white mb-2">Tu software.</span>
          <span className="inline-block animate-shiny" style={gradientStyle}>
            A la medida.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-white/70 max-w-xl text-base md:text-lg leading-[1.6]"
        >
          Diseñamos, programamos y desplegamos plataformas web, aplicaciones móviles y arquitecturas cloud para resolver los retos operativos más exigentes. Código 100% propietario.
        </motion.p>

        {/* CTA BUTTONS (PRIORITY: CONTACT) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <WhatsAppButton label="Platicar por WhatsApp" className="w-full sm:w-auto" />
          <ActionButton label="Cotizar Proyecto" href="#contacto" full={false} />
        </motion.div>

        {/* Proof metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 tracking-wide"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 100% Propiedad Intelectual
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Cero Rentas de Software
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> SLA 99.99% en Producción
          </span>
        </motion.div>
      </section>

      {/* SECTION: PROYECTOS QUE HEMOS HECHO */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionEyebrow label="Casos Reales" tag="En Producción" />
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Proyectos que hemos hecho
            </h2>
            <p className="mt-3 text-white/60 text-sm md:text-base max-w-xl leading-relaxed">
              Sistemas en operación real que procesan millones de datos, automatizan cadenas de valor y eliminan fricciones operativas.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            <span>¿Tienes un requerimiento similar? Hablemos</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid de proyectos reales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.client}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="liquid-glass rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-400/40 transition-all duration-300"
            >
              <div>
                {/* Header: Client Logo + Tag */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="h-10 flex items-center">
                    <img
                      src={project.logo}
                      alt={project.client}
                      className="max-h-8 max-w-[130px] w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10 text-white/50 bg-white/[0.02]">
                    {project.tag}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="mt-5 text-lg font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-white/65 leading-relaxed">
                  {project.desc}
                </p>

                {/* Impact Highlight */}
                <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-cyan-400 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{project.impact}</span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SECTION: CLIENTES / LOGOS */}
      <section id="clientes" className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10 border-t border-white/10">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">
            Empresas líderes impulsadas por Arcxtek
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5 items-center">
          {clientLogos.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center justify-center p-3 h-16 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all group"
              title={client.name}
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-8 max-w-[110px] w-auto object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION: CONTACTO (OBJETIVO PRINCIPAL) */}
      <section id="contacto" className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="liquid-glass relative overflow-hidden rounded-3xl p-8 md:p-14 border border-white/10"
        >
          {/* Radial Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: 'radial-gradient(600px circle at 50% 0%, rgba(37,211,102,0.15), transparent 70%)'
            }}
          />

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Left info column */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <SectionEyebrow label="Contacto Directo" tag="Respuesta &lt; 24h" />
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.05]">
                  ¿Tienes un proyecto en mente?
                </h2>
                <p className="mt-4 text-white/65 text-sm md:text-base leading-relaxed">
                  Platica directamente con nuestro equipo de ingeniería. Evaluamos la arquitectura técnica y te entregamos un estimado sin compromiso.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 pt-2">
                {/* Big WhatsApp Card */}
                <a
                  href="https://wa.me/5219990000000?text=Hola%20Arcxtek,%20quiero%20cotizar%20un%20proyecto%20de%20software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/30 hover:bg-[#25d366]/20 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25d366] text-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                    <WhatsAppLogo className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#25d366] transition-colors">
                      Escríbenos por WhatsApp
                    </div>
                    <div className="text-xs text-white/50">Respuesta inmediata &middot; Atención personalizada</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#25d366] ml-auto transition-transform group-hover:translate-x-1" />
                </a>

                {/* Email Direct */}
                <a
                  href="mailto:contacto@arcxtek.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">contacto@arcxtek.com</div>
                    <div className="text-xs text-white/50">Envíanos un brief o requerimiento por correo</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right form column */}
            <div className="md:col-span-7 bg-[#0a0c10]/70 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white mb-2">Cuéntanos sobre tu proyecto</h3>
              <p className="text-xs text-white/50 mb-6">
                Completa este formulario breve y te contactaremos el mismo día.
              </p>

              {formSent ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-base font-semibold text-white">¡Mensaje recibido con éxito!</h4>
                  <p className="text-xs text-white/70 mt-1 max-w-sm mx-auto">
                    Un arquitecto de software de Arcxtek analizará tu proyecto y se comunicará contigo a la brevedad.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSent(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/50 font-medium mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Roberto Martínez"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/50 font-medium mb-1.5">
                        Correo corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Ej. roberto@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/50 font-medium mb-1.5">
                      Teléfono o WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. +52 999 123 4567"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/50 font-medium mb-1.5">
                      ¿Qué software necesita construir tu empresa? *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Ej. Necesitamos un ERP para coordinar almacenes, o una aplicación móvil con telemetría en tiempo real..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.2)] cursor-pointer active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>Enviar y Agendar Diagnóstico Técnico</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-white/10 py-10 relative z-10 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-3">
            <LogoMark className="w-5 h-5 text-white/60" />
            <span>&copy; {new Date().getFullYear()} Arcxtek. Software a la medida de alto rendimiento.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#clientes" className="hover:text-white transition-colors">Clientes</a>
            <a href="mailto:contacto@arcxtek.com" className="hover:text-white transition-colors">contacto@arcxtek.com</a>
            <a
              href="https://wa.me/5219990000000?text=Hola%20Arcxtek,%20quiero%20cotizar%20un%20proyecto%20de%20software"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25d366] hover:underline flex items-center gap-1.5"
            >
              <WhatsAppLogo className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
