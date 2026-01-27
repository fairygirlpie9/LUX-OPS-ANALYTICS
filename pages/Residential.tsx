import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardEmbed from '../components/DashboardEmbed';
import { Home, Shield, Thermometer, Users, Smartphone, Database, Globe, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import clsx from 'clsx';

// Updated with client assets and accurate labels
const DEMO_SLIDES = [
  {
    url: "https://i.ibb.co/4hGPTx1/luxres1.png", 
    label: "LIVING ROOM // MAIN VIEW",
    alt: "Luxury living room environment"
  },
  {
    url: "https://i.ibb.co/FcnZcHF/luxres2.png",
    label: "LIVING ROOM // AMBIENT CONTROL",
    alt: "Luxury living room seating area"
  },
  {
    url: "https://i.ibb.co/9HCtFqrS/luxres3.png",
    label: "TABLET CONTROL // LIVING ROOM",
    alt: "Tablet interface in living room"
  },
  {
    url: "https://i.ibb.co/MysBQy1s/luxres4.png",
    label: "WALL INTERFACE // HALLWAY",
    alt: "Wall mounted control panel in hallway"
  }
];

const CONTENT = {
  en: {
    title: "RESIDENTIAL OPERATIONS",
    subtitle: "Private Estate Management",
    description: "Unified control systems for ultra-high-net-worth property portfolios. Security, environmental monitoring, and staff coordination in one interface.",
    dashboardTitle: "Residential Command",
    demoSectionTitle: "LIVE INTERACTIVE DEMO",
    customTitle: "CUSTOM INTEGRATION",
    customDesc: "Unlike our commercial dashboards, residential estate systems are bespoke installations tailored to your property portfolio. Pricing reflects the complexity of integration, custom hardware installation, and the white-glove service expected at this level.",
    investment: "Investment Range: £35K–£150K+ initial setup, plus monthly monitoring fee",
    influencesTitle: "WHAT INFLUENCES YOUR PRICE:",
    influences: [
      {
        icon: Home,
        title: "PROPERTY PORTFOLIO SIZE",
        desc: "Monitoring 1 estate vs. 5+ properties globally."
      },
      {
        icon: Shield,
        title: "ASSET PROTECTION SCOPE",
        desc: "Basic environmental monitoring vs. full RFID tracking for art collections and wine inventory."
      },
      {
        icon: Thermometer,
        title: "SYSTEM INTEGRATION DEPTH",
        desc: "Read-only monitoring vs. active control of HVAC, security, and access systems."
      },
      {
        icon: Users,
        title: "SUPPORT EXPECTATIONS",
        desc: "Standard business hours vs. 24/7 dedicated concierge."
      }
    ],
    configTitle: "TYPICAL CONFIGURATIONS",
    currencyNote: "All pricing in Great British Pounds (GBP)",
    configs: [
      {
        icon: Smartphone,
        title: "SINGLE ESTATE MONITORING",
        desc: "Real-time environmental data, security integration, staff tracking, and mobile access across your primary residence.",
        price: "From £35K",
        sub: "+ Monthly Monitoring",
        popular: false
      },
      {
        icon: Database,
        title: "MULTI-PROPERTY COMMAND",
        desc: "Centralized control across your property portfolio with advanced automation, wine cellar management, and priority support.",
        price: "From £75K",
        sub: "+ Monthly Monitoring",
        popular: true
      },
      {
        icon: Shield,
        title: "FULL CONCIERGE ESTATE",
        desc: "Unlimited properties, predictive AI, custom RFID installations for high-value assets, dedicated account manager, and 24/7 emergency response.",
        price: "From £150K",
        sub: "+ Monthly Monitoring",
        popular: false
      }
    ],
    cta: "SCHEDULE A CONFIDENTIAL CONSULTATION",
    footer: "All systems include professional installation, ongoing software updates, secure data retention, and our commitment to protecting your privacy and assets."
  },
  fr: {
    title: "OPÉRATIONS RÉSIDENTIELLES",
    subtitle: "Gestion de Domaines Privés",
    description: "Systèmes de contrôle unifiés pour portefeuilles immobiliers de luxe. Sécurité, surveillance environnementale et coordination du personnel dans une seule interface.",
    dashboardTitle: "Commandement Résidentiel",
    demoSectionTitle: "DÉMO INTERACTIVE EN DIRECT",
    customTitle: "INTÉGRATION SUR MESURE",
    customDesc: "Contrairement à nos tableaux de bord commerciaux, les systèmes résidentiels sont des installations sur mesure adaptées à votre portefeuille. La tarification reflète la complexité de l'intégration, l'installation de matériel personnalisé et le service haut de gamme attendu à ce niveau.",
    investment: "Fourchette d'investissement : 35 000 £ – 150 000 £ (installation initiale), plus frais de surveillance mensuels",
    influencesTitle: "CE QUI INFLUENCE VOTRE PRIX :",
    influences: [
      {
        icon: Home,
        title: "TAILLE DU PORTEFEUILLE",
        desc: "Surveillance d'un domaine contre 5+ propriétés dans le monde."
      },
      {
        icon: Shield,
        title: "PROTECTION DES ACTIFS",
        desc: "Surveillance environnementale de base contre suivi RFID complet pour les collections d'art et caves à vin."
      },
      {
        icon: Thermometer,
        title: "INTÉGRATION SYSTÈME",
        desc: "Surveillance passive contre contrôle actif des systèmes CVC, sécurité et accès."
      },
      {
        icon: Users,
        title: "NIVEAU DE SUPPORT",
        desc: "Heures de bureau standard contre conciergerie technique dédiée 24/7."
      }
    ],
    configTitle: "CONFIGURATIONS TYPIQUES",
    currencyNote: "Tous les prix en Livres Sterling (GBP)",
    configs: [
      {
        icon: Smartphone,
        title: "SURVEILLANCE DOMAINE UNIQUE",
        desc: "Données environnementales temps réel, sécurité, suivi du personnel et accès mobile pour votre résidence principale.",
        price: "Dès 35 000 £",
        sub: "+ Surveillance Mensuelle",
        popular: false
      },
      {
        icon: Database,
        title: "COMMANDEMENT MULTI-SITES",
        desc: "Contrôle centralisé de votre portefeuille avec automatisation avancée, gestion de cave à vin et support prioritaire.",
        price: "Dès 75 000 £",
        sub: "+ Surveillance Mensuelle",
        popular: true
      },
      {
        icon: Shield,
        title: "DOMAINE CONCIERGERIE COMPLÈTE",
        desc: "Propriétés illimitées, IA prédictive, RFID sur mesure pour actifs de valeur, gestionnaire dédié et urgence 24/7.",
        price: "Dès 150 000 £",
        sub: "+ Surveillance Mensuelle",
        popular: false
      }
    ],
    cta: "PLANIFIER UNE CONSULTATION CONFIDENTIELLE",
    footer: "Tous les systèmes incluent l'installation professionnelle, les mises à jour, la conservation sécurisée des données et notre engagement envers votre vie privée."
  },
  ar: {
    title: "العمليات السكنية",
    subtitle: "إدارة الأملاك الخاصة",
    description: "أنظمة تحكم موحدة للمحافظ العقارية الفاخرة. الأمن، والمراقبة البيئية، وتنسيق الموظفين في واجهة واحدة.",
    dashboardTitle: "القيادة السكنية",
    demoSectionTitle: "عرض تفاعلي مباشر",
    customTitle: "تكامل مخصص",
    customDesc: "على عكس لوحات المعلومات التجارية، فإن أنظمة العقارات السكنية لدينا مصممة خصيصًا لتناسب محفظتك العقارية. يعكس السعر تعقيد التكامل، وتركيب الأجهزة المخصصة، والخدمة الفاخرة المتوقعة في هذا المستوى.",
    investment: "نطاق الاستثمار: 35 ألف - 150 ألف جنيه إسترليني للإعداد الأولي، بالإضافة إلى رسوم المراقبة الشهرية",
    influencesTitle: "ما الذي يؤثر على السعر:",
    influences: [
      {
        icon: Home,
        title: "حجم المحفظة العقارية",
        desc: "مراقبة عقار واحد مقابل 5 عقارات أو أكثر عالمياً."
      },
      {
        icon: Shield,
        title: "نطاق حماية الأصول",
        desc: "المراقبة البيئية الأساسية مقابل تتبع RFID الكامل للمجموعات الفنية والساعات الفاخرة."
      },
      {
        icon: Thermometer,
        title: "عمق تكامل النظام",
        desc: "مراقبة للقراءة فقط مقابل التحكم النشط في أنظمة التدفئة والتكييف والأمن والدخول."
      },
      {
        icon: Users,
        title: "توقعات الدعم",
        desc: "ساعات العمل القياسية مقابل خدمة الكونسيرج المخصصة على مدار الساعة."
      }
    ],
    configTitle: "التكوينات النموذجية",
    currencyNote: "جميع الأسعار بالجنيه الإسترليني (GBP)",
    configs: [
      {
        icon: Smartphone,
        title: "مراقبة عقار واحد",
        desc: "بيانات بيئية في الوقت الفعلي، وتكامل أمني، وتتبع الموظفين، والوصول عبر الهاتف المحمول لمسكنك الأساسي.",
        price: "من 35 ألف £",
        sub: "+ مراقبة شهرية",
        popular: false
      },
      {
        icon: Database,
        title: "قيادة متعددة العقارات",
        desc: "تحكم مركزي عبر محفظتك العقارية مع أتمتة متقدمة، وإدارة المجموعات الخاصة، ودعم ذو أولوية.",
        price: "من 75 ألف £",
        sub: "+ مراقبة شهرية",
        popular: true
      },
      {
        icon: Shield,
        title: "عقار كونسيرج كامل",
        desc: "عقارات غير محدودة، وذكاء اصطناعي تنبؤي، وتركيبات RFID مخصصة للأصول عالية القيمة، ومدير حساب مخصص، واستجابة للطوارئ على مدار الساعة.",
        price: "من 150 ألف £",
        sub: "+ مراقبة شهرية",
        popular: false
      }
    ],
    cta: "جدولة استشارة سرية",
    footer: "تشمل جميع الأنظمة التثبيت الاحترافي، وتحديثات البرامج المستمرة، والاحتفاظ الآمن بالبيانات، والتزامنا بحماية خصوصيتك وأصولك."
  }
};

const Residential: React.FC = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState<'en' | 'fr' | 'ar'>('en');
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = CONTENT[lang];
  const isRTL = lang === 'ar';

  // Helper to handle font switching (English uses display/mono, Arabic uses defaults/sans)
  const displayFont = isRTL ? "font-sans font-bold" : "font-display";
  const monoFont = isRTL ? "font-sans" : "font-mono";

  // Preload images to prevent lag
  useEffect(() => {
    DEMO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.url;
    });
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DEMO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % DEMO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + DEMO_SLIDES.length) % DEMO_SLIDES.length);

  return (
    <div className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir={isRTL ? "rtl" : "ltr"}>
      
      {/* Language Toggle */}
      <div className="flex justify-end mb-8 gap-3">
        {[
          { id: 'en', label: 'ENGLISH' },
          { id: 'fr', label: 'FRANÇAIS' },
          { id: 'ar', label: 'ARABIC' }
        ].map((option) => (
          <button
            key={option.id}
            onClick={() => setLang(option.id as 'en' | 'fr' | 'ar')}
            className={clsx(
              "flex items-center gap-2 border px-4 py-2 rounded-full transition-all group",
              lang === option.id 
                ? "bg-lux-green border-lux-green text-black"
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-lux-green hover:text-white"
            )}
          >
            <Globe className={clsx("w-4 h-4", lang === option.id ? "text-black" : "text-gray-400 group-hover:text-lux-green")} />
            <span className={clsx("text-xs font-mono uppercase tracking-wider", lang === option.id ? "font-bold" : "")}>
              {option.label}
            </span>
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="mb-12">
         <h1 className={clsx("text-5xl md:text-7xl font-bold text-white mb-4 uppercase tracking-tight", displayFont)}>
            {content.title}
         </h1>
         <h2 className={clsx("text-xl md:text-2xl text-lux-green mb-6", monoFont)}>
            {content.subtitle}
         </h2>
         <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
           {content.description}
         </p>
      </div>

      {/* Hero Gallery Carousel */}
      <div className="mb-16 relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-white/10 group bg-[#050505]">
        {/* Slides */}
        {DEMO_SLIDES.map((slide, index) => (
          <div 
            key={index}
            className={clsx(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img 
              src={slide.url} 
              alt={slide.alt} 
              className="w-full h-full object-cover opacity-60 grayscale-[30%]"
            />
            {/* Tech Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
            
            {/* Slide Label */}
            <div className="absolute bottom-12 left-8 md:left-12 z-20">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-1.5 h-1.5 bg-lux-green animate-pulse rounded-full" />
                 <span className="text-lux-green font-mono text-xs uppercase tracking-widest">Live Integration</span>
               </div>
               <h3 className="text-white font-display font-bold text-2xl md:text-4xl uppercase tracking-wider">{slide.label}</h3>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-lux-green transition-colors hover:bg-black/50 rounded-full md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-lux-green transition-colors hover:bg-black/50 rounded-full md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Progress Bar / Index */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
           <div 
             className="h-full bg-lux-green transition-all duration-500 ease-out"
             style={{ width: `${((currentSlide + 1) / DEMO_SLIDES.length) * 100}%` }}
           />
        </div>
        
        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-lux-green z-20 opacity-50" />
        <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-lux-green z-20 opacity-50" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-lux-green z-20 opacity-50" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-lux-green z-20 opacity-50" />

        <div className="absolute bottom-4 right-8 font-mono text-xs text-white/50 z-20 hidden md:block">
           {String(currentSlide + 1).padStart(2, '0')} // {String(DEMO_SLIDES.length).padStart(2, '0')}
        </div>
      </div>

      {/* Dashboard */}
      <div className="mb-24">
        <div className="flex flex-col items-center mb-12">
          <h2 className={clsx("text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight text-center", displayFont)}>
            {content.demoSectionTitle}
          </h2>
          <div className="w-24 h-1 bg-lux-green"></div>
        </div>
        <DashboardEmbed url="https://majordomoresidential.netlify.app/" title={content.dashboardTitle} />
      </div>

      {/* Custom Integration Block */}
      <div className="bg-[#0b0c15] border border-white/10 rounded-xl p-8 md:p-12 mb-24">
        <h2 className={clsx("text-3xl font-bold text-white uppercase mb-6", displayFont)}>{content.customTitle}</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-4xl font-sans leading-relaxed">
          {content.customDesc}
        </p>
        
        <div className="border-t border-white/10 pt-8 mb-12">
          <p className={clsx("text-lux-green text-xl md:text-2xl uppercase font-bold leading-tight", displayFont)}>
            {content.investment}
          </p>
        </div>

        <h3 className={clsx("text-2xl font-bold text-white uppercase mb-8", displayFont)}>{content.influencesTitle}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {content.influences.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
               <item.icon className="w-8 h-8 text-lux-green mt-1 flex-shrink-0" />
               <div>
                 <h4 className="text-white font-bold uppercase mb-2">{item.title}</h4>
                 <p className="text-gray-400 text-sm">{item.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typical Configurations */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className={clsx("text-4xl md:text-5xl font-bold text-white mb-4 uppercase", displayFont)}>{content.configTitle}</h2>
          <p className={clsx("text-lux-green/70 text-sm uppercase tracking-widest", monoFont)}>{content.currencyNote}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {content.configs.map((config, idx) => (
              <div 
                key={idx}
                className={clsx(
                  "p-8 rounded-lg flex flex-col relative group transition-colors",
                  config.popular ? "bg-[#050505] border border-lux-green" : "bg-[#050505] border border-white/10 hover:border-white/20"
                )}
              >
                {config.popular && (
                  <div className={clsx(
                    "absolute top-0 bg-lux-green text-black px-3 py-1 text-xs font-bold uppercase tracking-widest font-mono",
                    isRTL ? "left-0 rounded-br-lg" : "right-0 rounded-bl-lg"
                  )}>
                    {lang === 'en' ? 'POPULAR' : lang === 'fr' ? 'POPULAIRE' : 'شائع'}
                  </div>
                )}
                
                <div className="mb-6">
                  <config.icon className="w-10 h-10 text-lux-green mb-6" />
                  <h3 className={clsx("text-2xl font-bold text-white uppercase mb-4", displayFont)}>{config.title}</h3>
                  <p className="text-gray-400 text-sm font-sans leading-relaxed mb-8">
                    {config.desc}
                  </p>
                </div>
                <div className="mt-auto border-t border-white/10 pt-6">
                   <div className="text-2xl font-bold text-white mb-1">{config.price}</div>
                   <div className={clsx("text-gray-500 text-sm", monoFont)}>{config.sub}</div>
                </div>
              </div>
           ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/contact')}
            className={clsx("bg-lux-green text-black px-8 py-5 font-bold text-xl uppercase hover:bg-white transition-colors tracking-widest", displayFont)}
          >
            {content.cta}
          </button>
           <p className="text-gray-500 text-xs mt-6 max-w-2xl mx-auto flex items-center justify-center gap-2">
             <Shield className="w-3 h-3" />
             {content.footer}
           </p>
        </div>
      </div>
    </div>
  );
};

export default Residential;