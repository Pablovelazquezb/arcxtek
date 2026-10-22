import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ChevronRight,
  Search,
  Check,
  Paperclip,
  Shield,
  Menu,
  X
} from 'lucide-react';

/* ==========================================================================
   PRIMITIVES & ICONS
   ========================================================================== */

const AppleLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

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

const AppleButton: React.FC<{
  label?: string;
  full?: boolean;
  href?: string;
  onClick?: () => void;
}> = ({ label = "Iniciar Proyecto", full = false, href = "#contacto", onClick }) => {
  const content = (
    <>
      <LogoMark className="w-4 h-4 text-black" />
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </>
  );

  const className = `group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.25)] ${
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
  const [yearlyPricing, setYearlyPricing] = useState(false);
  const [activePipeline, setActivePipeline] = useState(0);

  const clientLogos = [
    { name: "Coloso Energy", src: "/assets/clients/coloso_transparent.png" },
    { name: "Liupana del Sureste", src: "/assets/clients/liupana_transparent.png" },
    { name: "Papá Colchón", src: "/assets/clients/papacolchon_transparent.png" },
    { name: "Montessori Quinto Sol", src: "/assets/clients/montessori.png" },
    { name: "EVA", src: "/assets/clients/eva.png" },
    { name: "Bek de Santa Lilia", src: "/assets/clients/bek_transparent.png" },
    { name: "Monte de Guadalupe", src: "/assets/clients/monteguadalupe_transparent.png" },
  ];

  const pipelines = [
    {
      client: "Coloso Energy",
      title: "Telemetría IoT & Monitoreo en Tiempo Real",
      desc: "Ingesta masiva de 18,400 lecturas/min en microredes eléctricas con alertas preventivas.",
      time: "9:41 AM",
      badge: "IoT Core",
      avatarBg: "from-[#00d2ff] to-[#0B2551]",
      avatarLetter: "C",
      summary: "La red de 15 subestaciones mantiene 0% de latencia anómala. 3 variaciones de voltaje balanceadas automáticamente. Uptime: 99.99%.",
      file: "telemetry-stream-v3.ts"
    },
    {
      client: "Liupana del Sureste",
      title: "ERP de Control de Obra & Finanzas",
      desc: "Digitalización del avance de proyectos, estimaciones de obra y conciliación de compras.",
      time: "8:12 AM",
      badge: "ERP Cloud",
      avatarBg: "from-[#A4F4FD] to-[#0072ff]",
      avatarLetter: "L",
      summary: "Sincronización de bitácoras y órdenes de compra con ingenieros de campo en 12 desarrollos activos sin discrepancias contables.",
      file: "construction-erp-schema.prisma"
    },
    {
      client: "Papá Colchón",
      title: "E-Commerce Omnicanal & Logística",
      desc: "Sincronización de stock multi-sucursal en milisegundos con ruteo de entregas automatizado.",
      time: "Ayer",
      badge: "Omnichannel",
      avatarBg: "from-[#f59e0b] to-[#b45309]",
      avatarLetter: "P",
      summary: "Checkout acelerado con carga en 0.7s. Cero sobreventas durante picos de tráfico en promociones nacionales.",
      file: "dispatch-routing-engine.ts"
    },
    {
      client: "Montessori Quinto Sol",
      title: "Ecosistema Digital Escolar & Pagos",
      desc: "Portal administrativo, facturación automática y comunicación institucional para familias.",
      time: "Ayer",
      badge: "FinTech / Ed",
      avatarBg: "from-[#10b981] to-[#047857]",
      avatarLetter: "M",
      summary: "Cobranza automatizada vía SPEI y tarjetas con conciliación bancaria instantánea. 96% de adopción de tutores.",
      file: "billing-webhooks.go"
    },
    {
      client: "Vercel Edge Network",
      title: "Producción Global Arcxtek Cloud",
      desc: "Despliegues continuos automatizados con latencia menor a 30ms en servidores Edge globales.",
      time: "Lun",
      badge: "DevOps",
      avatarBg: "from-[#6366f1] to-[#312e81]",
      avatarLetter: "V",
      summary: "Todos los clusters y microservicios desplegados en AWS/Vercel con certificación SSL y blindaje perimetral.",
      file: "edge-routing.config.json"
    },
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
          className="w-full h-full object-cover pointer-events-none opacity-30 mix-blend-screen"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-[#0c0c0c]/90 to-[#0c0c0c]" />
      </div>

      {/* 2. Hidden-on-mobile fixed vertical guide lines at 36rem */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      {/* 3. Global SVG noise filter for shiny headline */}
      <svg className="fixed top-0 left-0 w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      {/* SECTION 1 — NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-[#0c0c0c]/70 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group" aria-label="Arcxtek Home">
            <LogoMark className="w-7 h-7 text-white transition-transform group-hover:scale-105" />
            <span className="font-semibold text-lg tracking-tight">arcxtek</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['Soluciones', 'Servicios', 'Arquitectura', 'Clientes', 'Contacto'].map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="text-white/70 text-sm font-medium hover:text-white transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5219990000000?text=Hola%20Arcxtek,%20quiero%20cotizar%20un%20proyecto%20de%20software"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#25d366]/30 bg-[#25d366]/10 text-[#25d366] flex items-center justify-center transition-all hover:bg-[#25d366]/20 hover:scale-105 hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppLogo className="w-5 h-5" />
            </a>
            <AppleButton label="Cotizar Proyecto" href="#contacto" />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/5219990000000?text=Hola%20Arcxtek,%20quiero%20cotizar%20un%20proyecto%20de%20software"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#25d366]/30 bg-[#25d366]/10 text-[#25d366] flex items-center justify-center"
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
          <div className="md:hidden bg-[#0c0c0c] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            {['Soluciones', 'Servicios', 'Arquitectura', 'Clientes', 'Contacto'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-white"
              >
                {link}
              </a>
            ))}
            <div className="pt-2">
              <AppleButton label="Cotizar Proyecto" full href="#contacto" onClick={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </motion.nav>

      {/* SECTION 2 — HERO */}
      <section id="hero" className="pt-16 md:pt-28 pb-16 text-center flex flex-col items-center max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <SectionEyebrow label="Arquitectura de Software" tag="AI-Native" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]"
        >
          <span className="block text-white mb-2">Tu software.</span>
          <span className="inline-block animate-shiny" style={gradientStyle}>
            Revitalizado
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 text-white/60 max-w-md text-base leading-[1.6]"
        >
          Arcxtek es la firma de ingeniería de software a la medida para la nueva era. Diseñamos plataformas web, aplicaciones móviles y arquitecturas cloud con IA nativa y código 100% propietario.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <AppleButton label="Iniciar tu Proyecto" href="#contacto" />
          <a
            href="https://wa.me/5219990000000?text=Hola%20Arcxtek,%20quiero%20platicar%20sobre%20un%20proyecto%20de%20software"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-[#25d366]/40 bg-[#25d366]/10 text-[#25d366] flex items-center justify-center transition-all hover:bg-[#25d366]/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.35)]"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <WhatsAppLogo className="w-5 h-5" />
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-4 text-xs text-white/40 tracking-wide"
        >
          100% Propiedad Intelectual &middot; SLA 99.99% en Producción &middot; Sin rentas de software
        </motion.div>
      </section>

      {/* SECTION 3 — macOS MENU BAR STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="w-full h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <AppleLogo className="w-3.5 h-3.5 text-white/80" />
            <span className="font-semibold text-white">Arcxtek Studio</span>
            {['Archivo', 'Desarrollo', 'Arquitectura', 'Cloud', 'Métricas', 'Ayuda'].map((item, idx) => (
              <span
                key={item}
                className={`text-white/60 hover:text-white cursor-pointer transition-colors ${
                  idx > 2 ? 'hidden sm:inline' : ''
                } ${idx > 3 ? 'hidden md:inline' : ''}`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-white/50 font-mono">
            <Search className="w-3.5 h-3.5 text-white/60" />
            <span>Mié Oct 22 &middot; 1:09 PM</span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 4 — WORKSPACE MOCKUP (ARCXTEK CLOUD PLATFORM) */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.85)]"
        >
          {/* macOS Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/50 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="text-xs text-white/50 font-mono">arcxtek-cloud-orchestrator — live telemetry</div>
            <div className="w-12 flex justify-end">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-12 h-[520px]">
            {/* Sidebar (3 cols) */}
            <div className="col-span-12 md:col-span-3 border-r border-white/10 bg-black/40 p-4 flex flex-col justify-between">
              <div>
                <button
                  type="button"
                  className="w-full rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-sm mb-5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Nuevo Sprint &middot; Arcxtek</span>
                </button>

                <div className="space-y-1">
                  {[
                    { label: "Pipelines Activos", count: 12, active: true },
                    { label: "Microservicios Cloud", count: 8 },
                    { label: "APIs en Producción" },
                    { label: "Repositorios Git", count: 7 },
                    { label: "Monitoreo 24/7" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                        item.active
                          ? 'bg-white/10 text-white'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.count && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 text-white/70">
                          {item.count}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-3">
                    Clientes en Producción
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Coloso Energy", color: "bg-[#00d2ff]" },
                      { name: "Liupana Sureste", color: "bg-[#A4F4FD]" },
                      { name: "Papá Colchón", color: "bg-[#f59e0b]" },
                      { name: "Montessori", color: "bg-[#10b981]" },
                    ].map((c) => (
                      <div key={c.name} className="flex items-center gap-2 text-xs text-white/70">
                        <span className={`w-2 h-2 rounded-full ${c.color}`} />
                        <span>{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-white/40">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero Trust Encryption</span>
              </div>
            </div>

            {/* Pipeline List (4 cols) */}
            <div className="hidden md:flex md:col-span-4 border-r border-white/10 flex-col bg-black/20">
              <div className="p-3 border-b border-white/10 flex items-center gap-2 text-xs text-white/40">
                <Search className="w-3.5 h-3.5" />
                <span>Filtrar servicios y telemetría...</span>
              </div>

              <div className="flex-1 overflow-y-auto divide-y divide-white/5">
                {pipelines.map((p, idx) => (
                  <div
                    key={p.client}
                    onClick={() => setActivePipeline(idx)}
                    className={`p-3.5 text-xs cursor-pointer transition-colors ${
                      activePipeline === idx
                        ? 'bg-white/10 border-l-2 border-cyan-400'
                        : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white">{p.client}</span>
                      <span className="text-[10px] text-white/40 font-mono">{p.time}</span>
                    </div>
                    <div className="font-medium text-white/80 line-clamp-1">{p.title}</div>
                    <div className="text-white/50 text-[11px] line-clamp-1 mt-0.5">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reader / Detail Inspector (5 cols) */}
            <div className="col-span-12 md:col-span-5 p-5 flex flex-col justify-between overflow-y-auto bg-[#0a0c10]/60">
              {(() => {
                const item = pipelines[activePipeline];
                return (
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-full bg-gradient-to-br ${item.avatarBg} flex items-center justify-center text-xs font-bold text-white shadow-sm`}
                        >
                          {item.avatarLetter}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">{item.client}</div>
                          <div className="text-[10px] text-white/40">En vivo &middot; {item.time}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-cyan-500/30 text-cyan-300 bg-cyan-500/10">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-semibold text-sm text-white">{item.title}</h3>

                    {/* AI Summary Card */}
                    <div className="mt-4 p-3.5 rounded-xl border border-cyan-400/20 bg-cyan-950/20 text-xs backdrop-blur-sm">
                      <div className="flex items-center gap-1.5 text-cyan-300 font-semibold mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#A4F4FD]" />
                        <span>Summary by Arcxtek AI Engine</span>
                      </div>
                      <p className="text-white/80 leading-relaxed text-[11px]">{item.summary}</p>
                    </div>

                    {/* Main Description */}
                    <div className="mt-4 text-xs text-white/70 space-y-2 leading-relaxed">
                      <p>{item.desc}</p>
                      <p className="text-white/50 text-[11px]">
                        Arquitectura desacoplada, redundancia multi-zona y monitoreo continuo de métricas operacionales.
                      </p>
                    </div>

                    {/* Attachment pill */}
                    <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] text-white/70 font-mono">
                      <Paperclip className="w-3 h-3 text-cyan-400" />
                      <span>{item.file}</span>
                    </div>
                  </div>
                );
              })()}

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
                <span>Latencia: 24ms &middot; Status: OK</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Producción
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 — FEATURE / TRIAGE ("LIQUID-GLASS" CARDS) */}
      <section id="soluciones" className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow label="Ingeniería de Software" tag="AI-Native" />
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Construye tu ventaja.
              <br />
              Sin rentas de software.
            </h2>
            <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
              Arcxtek diseña, programa y escala las herramientas propietarias de tu organización. Deja de adaptar tu operación a herramientas masivas: toma el control de tu infraestructura con código 100% tuyo.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "100% Propiedad del Código",
                "Cero Costos por Usuario",
                "SLA 99.99% en Producción",
                "Integración con Modelos LLM",
                "Desarrollo Ágil Quincenal",
              ].map((chip) => (
                <span
                  key={chip}
                  className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Liquid-Glass Card with 4 sub-cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="liquid-glass rounded-2xl p-6"
          >
            <div className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-4">
              Operaciones &middot; 42 módulos activos en producción
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "Plataformas Web & SaaS",
                  count: 4,
                  color: "#ffffff",
                  items: "Portales de clientes, dashboards analíticos y microfrontends reactivos."
                },
                {
                  title: "Aplicaciones Móviles",
                  count: 7,
                  color: "#e5e5e5",
                  items: "iOS y Android con sincronización en tiempo real y modo offline-first."
                },
                {
                  title: "Sistemas ERP & IoT Industrial",
                  count: 18,
                  color: "#a3a3a3",
                  items: "Automatización de almacenes, telemetría y control presupuestal."
                },
                {
                  title: "Infraestructura & Microservicios",
                  count: 13,
                  color: "#525252",
                  items: "Clusters Kubernetes, pipelines CI/CD y despliegues sin caída de servicio."
                },
              ].map((sub) => (
                <div key={sub.title} className="liquid-glass rounded-lg p-3.5 transition-all hover:bg-white/[0.03]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">{sub.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10" style={{ color: sub.color }}>
                      {sub.count} activos
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60 leading-relaxed">{sub.items}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — LOGOCLOUD / CLIENTS */}
      <section id="clientes" className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10 border-t border-white/10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">
            Empresas líderes impulsadas por Arcxtek
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {clientLogos.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center justify-center p-3 h-16 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all group"
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

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10 relative z-10">
        <div className="text-center mb-14">
          <SectionEyebrow label="Validación en Producción" />
          <h2 className="mt-3 text-3xl font-semibold text-white">Lo que dicen los fundadores y directores</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "Arcxtek nos entregó una arquitectura IoT capaz de procesar millones de datos de red eléctrica sin un solo minuto de inactividad.",
              name: "Ingeniería & Operaciones",
              role: "Dirección de Infraestructura",
              company: "COLOSO ENERGY"
            },
            {
              quote: "Digitalizar el control de obra y estimaciones eliminó las fricciones contables en todos nuestros proyectos inmobiliarios.",
              name: "Dirección General",
              role: "Desarrollo y Construcción",
              company: "LIUPANA DEL SURESTE"
            },
            {
              quote: "El sistema omnicanal redujo a cero los desajustes de inventario entre sucursales y la tienda en línea. Entrega impecable.",
              name: "E-Commerce Lead",
              role: "Operaciones y Retail",
              company: "PAPÁ COLCHÓN"
            },
          ].map((item, idx) => (
            <motion.figure
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="liquid-glass rounded-2xl p-6 flex flex-col justify-between"
            >
              <blockquote className="text-sm text-white/80 leading-[1.6]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <div className="text-sm font-semibold text-white">{item.name}</div>
                <div className="text-xs text-white/50">{item.role}</div>
                <div className="text-xs text-cyan-400 font-semibold tracking-wide mt-1">{item.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* SECTION 8 — PRICING / MODELOS DE INVERSIÓN (CINEMATIC PRICING) */}
      <section id="arquitectura" className="c3-pricing-section border-t border-white/10">
        {/* Pricing noise filter */}
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <filter id="c3-noise-pricing">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
            <feComponentTransfer><feFuncA type="linear" slope="0.075" /></feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
          </filter>
        </svg>

        {/* Giant Watermark */}
        <div className="c3-watermark-container">
          <div className="c3-watermark-main" style={{ filter: 'url(#c3-noise-pricing)' }}>
            <span className="c3-watermark-line-1">Tu software.</span>
            <span className="c3-watermark-line-2">Revitalizado</span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="c3-grid">
          {/* Card 1: MVP Sprint */}
          <div className="c3-card">
            <div className="c3-tier-small">Sprint MVP</div>
            <div className="c3-tier-large">
              {yearlyPricing ? "$3,800" : "$4,500"}
              <span className="text-xs font-normal text-white/40 ml-1">/ fase</span>
            </div>
            <div className="c3-desc">
              Para startups y equipos que necesitan validar un producto funcional con código limpio en 4 a 6 semanas.
            </div>
            <ul className="c3-list">
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-white" /></span>
                <span>Arquitectura inicial &amp; Prototipo UI/UX</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-white" /></span>
                <span>Plataforma Web React/Next o App Móvil</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-white" /></span>
                <span>Base de datos PostgreSQL &amp; Auth RBAC</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-white" /></span>
                <span>Propiedad 100% del código en tu GitHub</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-white" /></span>
                <span>Garantía de 90 días libre de defectos</span>
              </li>
            </ul>
            <a href="#contacto" className="c3-btn">Cotizar MVP</a>
          </div>

          {/* Card 2: Plataforma Completa */}
          <div className="c3-card">
            <div className="c3-tier-small">Plataforma Completa</div>
            <div className="c3-tier-large">
              {yearlyPricing ? "$8,900" : "$9,900"}
              <span className="text-xs font-normal text-white/40 ml-1">/ llave en mano</span>
            </div>
            <div className="c3-desc">
              Para empresas consolidadas que requieren un sistema propietario integral (ERP, SaaS o IoT) a gran escala.
            </div>
            <ul className="c3-list">
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-white" /></span>
                <span>Arquitectura de Microservicios &amp; Cloud</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-white" /></span>
                <span>Dashboards analíticos en tiempo real</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-white" /></span>
                <span>Integraciones con bancos, ERP o hardware IoT</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-white" /></span>
                <span>Infraestructura AWS/GCP con CI/CD automatizado</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-white" /></span>
                <span>SLA de Disponibilidad y entrega quincenal</span>
              </li>
            </ul>
            <a href="#contacto" className="c3-btn">Elegir Plan</a>
          </div>

          {/* Card 3: Pro / Equipo Dedicado */}
          <div className="c3-card c3-card-pro">
            <div className="c3-tier-small text-cyan-300">Equipo Dedicado &middot; Pro</div>
            <div className="c3-tier-large">
              {yearlyPricing ? "$14,500" : "$16,500"}
              <span className="text-xs font-normal text-white/40 ml-1">/ mes</span>
            </div>
            <div className="c3-desc">
              Un escuadrón completo de ingenieros senior, arquitecto cloud y DevOps asignados exclusivamente a tu empresa.
            </div>
            <ul className="c3-list">
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-cyan-300" /></span>
                <span>Ingenieros senior Full-stack &amp; Arquitecto</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-cyan-300" /></span>
                <span>Capacidad ilimitada de sprints y requerimientos</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-cyan-300" /></span>
                <span>Modelos de Inteligencia Artificial privados (LLMs)</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-cyan-300" /></span>
                <span>Monitoreo 24/7 y respuesta inmediata &lt; 2 hrs</span>
              </li>
              <li>
                <span className="c3-check"><Check className="w-3.5 h-3.5 text-cyan-300" /></span>
                <span>Transferencia de conocimiento a tu equipo interno</span>
              </li>
            </ul>
            <a href="#contacto" className="c3-btn bg-cyan-400 text-black hover:bg-cyan-300">Hablar con un Arquitecto</a>
          </div>
        </div>

        {/* Toggle */}
        <div className="c3-toggle-wrap">
          <span className="text-xs text-white/60 font-medium">Descuento Pago Anticipado</span>
          <button
            type="button"
            onClick={() => setYearlyPricing(!yearlyPricing)}
            className={`c3-toggle ${yearlyPricing ? 'active' : ''}`}
            aria-label="Toggle pricing"
          >
            <span className="c3-toggle-knob" />
          </button>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section id="contacto" className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center border border-white/10"
        >
          {/* Radial Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)'
            }}
          />

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Deja el software genérico.
            <br />
            Edifica tu propio activo.
          </h2>

          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            Únete a las organizaciones que tratan al software como un multiplicador estratégico de rentabilidad — no como un gasto de licencias mensuales.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AppleButton label="Solicitar Diagnóstico Técnico" href="#contacto-form" />
            <a
              href="https://wa.me/5219990000000?text=Hola%20Arcxtek,%20quiero%20cotizar%20un%20proyecto%20de%20software"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 text-white text-sm font-medium px-6 py-3 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <WhatsAppLogo className="w-4 h-4 text-[#25d366]" />
              <span>Platicar por WhatsApp</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </a>
          </div>

          {/* Quick Contact Form */}
          <div id="contacto-form" className="mt-12 max-w-lg mx-auto text-left">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Gracias por contactar a Arcxtek! Un arquitecto de software te responderá en menos de 24 horas.");
              }}
              className="space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Tu Nombre"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-cyan-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Correo Corporativo"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <textarea
                rows={3}
                required
                placeholder="¿Qué software necesita construir tu empresa?"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Enviar Especificación Técnica
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-white/10 py-10 relative z-10 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-2">
            <LogoMark className="w-4 h-4 text-white/60" />
            <span>&copy; {new Date().getFullYear()} Arcxtek. Software a la medida de alto rendimiento.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#soluciones" className="hover:text-white transition-colors">Soluciones</a>
            <a href="#clientes" className="hover:text-white transition-colors">Clientes</a>
            <a href="#arquitectura" className="hover:text-white transition-colors">Inversión</a>
            <a href="#contacto" className="text-cyan-400 hover:underline">Contacto &rarr;</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
