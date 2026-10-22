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

const ArcxtekLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => (
  <img
    src="/assets/brand/logo_arcxtek_horizontal.png"
    alt="Arcxtek"
    className={`${className} object-contain select-none`}
  />
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

const SectionEyebrow: React.FC<{ label: string }> = ({ label }) => (
  <div className="text-xs uppercase tracking-widest text-white/50 font-semibold">
    {label}
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

  // Proyectos reales desarrollados por Arcxtek (Conciso y Elegante)
  const projects = [
    {
      client: "Coloso Energy",
      logo: "/assets/clients/coloso_transparent.png",
      title: "Telemetría y Monitoreo IoT",
      desc: "Ingesta masiva de 18,400 lecturas/min en microredes eléctricas con alertas preventivas y analítica en tiempo real."
    },
    {
      client: "Liupana del Sureste",
      logo: "/assets/clients/liupana_transparent.png",
      title: "ERP de Control de Obra",
      desc: "Digitalización integral del avance constructivo, estimaciones de contratistas y finanzas en desarrollos activos."
    },
    {
      client: "Papá Colchón",
      logo: "/assets/clients/papacolchon_transparent.png",
      title: "E-Commerce y Despacho Logístico",
      desc: "Sincronización de inventario multi-sucursal en milisegundos y ruteo automatizado de entregas."
    },
    {
      client: "Montessori Quinto Sol",
      logo: "/assets/clients/montessori.png",
      title: "Plataforma de Pagos y Gestión",
      desc: "Automatización de cobranza con conciliación bancaria SPEI en tiempo real y facturación institucional."
    },
    {
      client: "Bek de Santa Lilia",
      logo: "/assets/clients/bek_transparent.png",
      title: "Control de Accesos Residencial",
      desc: "Sistema centralizado de accesos, gestión comunitaria y administración de cuotas de mantenimiento."
    },
    {
      client: "Monte de Guadalupe",
      logo: "/assets/clients/monteguadalupe_transparent.png",
      title: "Sistema Operativo e Inventarios",
      desc: "Control de trazabilidad y coordinación de procesos operativos agroindustriales en la nube."
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
          className="w-full h-full object-cover pointer-events-none opacity-35 mix-blend-screen"
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
          <a href="#hero" className="flex items-center group" aria-label="Arcxtek Home">
            <ArcxtekLogo className="h-7 md:h-8 w-auto transition-transform group-hover:scale-105" />
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
          className="mb-6"
        >
          <SectionEyebrow label="Ingeniería de Software a la Medida" />
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
          className="mt-8 text-white/70 max-w-lg text-base md:text-lg leading-[1.6]"
        >
          Diseñamos y construimos plataformas web, aplicaciones móviles y arquitecturas cloud para empresas líderes.
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
      </section>

      {/* SECTION: PROYECTOS QUE HEMOS HECHO */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10 border-t border-white/10">
        <div className="mb-14 text-center md:text-left">
          <SectionEyebrow label="Casos de Estudio" />
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Proyectos que hemos hecho
          </h2>
          <p className="mt-2 text-white/50 text-sm md:text-base max-w-lg">
            Sistemas propietarios construidos para operar a escala.
          </p>
        </div>

        {/* Grid de proyectos reales (Limpio y Elegante) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="liquid-glass rounded-2xl p-7 flex flex-col justify-between group hover:border-cyan-400/30 transition-all duration-300"
            >
              <div>
                {/* Header: Client Logo */}
                <div className="h-12 flex items-center mb-6">
                  <img
                    src={project.logo}
                    alt={project.client}
                    className="max-h-9 max-w-[140px] w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Title & Desc */}
                <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-xs md:text-sm text-white/60 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SECTION: CLIENTES / LOGOS EN CARRUSEL */}
      <section id="clientes" className="py-16 md:py-24 relative z-10 border-t border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <SectionEyebrow label="Validación" />
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Empresas que confían en Arcxtek
          </h2>
        </div>

        {/* Carousel Container with fade masks */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-44 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-44 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10" />

          {/* Continuous scrolling marquee track */}
          <div className="flex animate-marquee gap-6 py-4 items-center">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="liquid-glass rounded-2xl px-8 py-5 h-24 min-w-[200px] md:min-w-[240px] flex items-center justify-center border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-cyan-400/30 transition-all duration-300 group cursor-default flex-shrink-0"
                title={client.name}
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-10 max-w-[150px] w-auto object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
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
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(600px circle at 50% 0%, rgba(37,211,102,0.12), transparent 70%)'
            }}
          />

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Left info column */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <SectionEyebrow label="Contacto Directo" />
                <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.05]">
                  Hablemos de tu proyecto.
                </h2>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  Evaluamos tus requerimientos técnicos y te entregamos una propuesta sin compromiso.
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
                  <div className="w-11 h-11 rounded-full bg-[#25d366] text-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                    <WhatsAppLogo className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#25d366] transition-colors">
                      Escríbenos por WhatsApp
                    </div>
                    <div className="text-xs text-white/50">Respuesta inmediata</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#25d366] ml-auto transition-transform group-hover:translate-x-1" />
                </a>

                {/* Email Direct */}
                <a
                  href="mailto:contacto@arcxtek.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">contacto@arcxtek.com</div>
                    <div className="text-xs text-white/50">Envíanos un correo directo</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right form column */}
            <div className="md:col-span-7 bg-[#0a0c10]/70 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              <h3 className="text-base font-semibold text-white mb-1">Cotizar proyecto</h3>
              <p className="text-xs text-white/50 mb-5">
                Te responderemos el mismo día hábil.
              </p>

              {formSent ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-white">¡Mensaje enviado con éxito!</h4>
                  <p className="text-xs text-white/60 mt-1">
                    Un ingeniero de Arcxtek se comunicará contigo a la brevedad.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSent(true);
                  }}
                  className="space-y-3.5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Nombre *"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Correo electrónico *"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Teléfono o WhatsApp *"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe brevemente qué software necesitas construir..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer active:scale-[0.99]"
                  >
                    <Send className="w-3.5 h-3.5 text-black" />
                    <span>Enviar Consulta</span>
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
            <ArcxtekLogo className="h-5 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <span>&copy; {new Date().getFullYear()} Arcxtek. Software a la medida.</span>
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
