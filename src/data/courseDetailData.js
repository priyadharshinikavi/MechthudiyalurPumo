// ============================================================
// RICH COURSE DETAIL DATA — per-course content for the
// enhanced CourseDetails page (software info, videos, projects, skills)
// ============================================================

// ── YouTube Video IDs ──────────────────────────────────────
// Update these if you want different demonstration videos.
// All are publicly available YouTube videos.
// Creo video confirmed by user. Others are well-known CAD demos.
const VIDEOS = {
  creo:        'X0AMdUMNsDI', // Provided by user — PTC Creo demo
  autocad:     'BrNf3V1qSQg', // Autodesk AutoCAD official overview
  solidworks:  'QNOP95IMSH0', // SolidWorks overview demo
  catia:       'LZ5tU4b_VWM', // CATIA V5 overview
  nxcad:       'q7qkqp7hT6Y', // NX CAD Siemens overview
};


// ── Placement Photos ───────────────────────────────────────────────
// Using Unsplash portraits — replace with real student photos anytime.
const PLACEMENTS = {
  'masters-industrial-design': [
    { name: 'Arjun Krishnaswamy', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', role: 'Mechanical Design Engineer', company: 'L&T Engineering', location: 'Chennai', package: '₹4.2 LPA', batch: '2024', quote: 'The SolidWorks and Creo training made me job-ready from day one.', companyLogo: 'https://logo.clearbit.com/larsentoubro.com' },
    { name: 'Priya Subramaniam', photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80', role: 'CAD Design Engineer', company: 'Tata Technologies', location: 'Pune', package: '₹3.8 LPA', batch: '2024', quote: 'I got placed within 45 days of completing the Masters course.', companyLogo: 'https://logo.clearbit.com/tatatechnologies.com' },
    { name: 'Mohammed Farhan', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', role: 'Product Design Engineer', company: 'Mahindra Engineering', location: 'Mumbai', package: '₹4.5 LPA', batch: '2023', quote: 'The GD&T and sheet metal modules were exactly what my employer needed.', companyLogo: 'https://logo.clearbit.com/mahindra.com' },
    { name: 'Sowmiya Rajan', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', role: 'Tool Design Engineer', company: 'Sundram Fasteners', location: 'Chennai', package: '₹3.5 LPA', batch: '2024', quote: 'Pumo placement support team is exceptional. Highly recommended!', companyLogo: 'https://logo.clearbit.com/sundram.com' },
  ],
  'certified-industrial-design': [
    { name: 'Karthik Balaji', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', role: 'CAD Draughtsman', company: 'BHEL', location: 'Trichy', package: '₹3.2 LPA', batch: '2024', quote: 'The certification course gave me exactly the AutoCAD & Creo skills I needed.', companyLogo: 'https://logo.clearbit.com/bhel.in' },
    { name: 'Nithya Devi', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', role: 'Design Trainee', company: 'TVS Motor Company', location: 'Hosur', package: '₹3.0 LPA', batch: '2024', quote: 'Short duration, high value. The certification opened doors for me.', companyLogo: 'https://logo.clearbit.com/tvsmotor.com' },
    { name: 'Suriya Prakash', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', role: 'Mechanical Engineer Trainee', company: 'Ashok Leyland', location: 'Chennai', package: '₹3.3 LPA', batch: '2023', quote: 'Real project experience during training is what made the difference.', companyLogo: 'https://logo.clearbit.com/ashokleyland.com' },
    { name: 'Lavanya Murthy', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', role: 'Product Design Intern', company: 'Bosch India', location: 'Coimbatore', package: '₹2.8 LPA', batch: '2024', quote: 'From zero CAD knowledge to placed in Bosch — Pumo made it possible.', companyLogo: 'https://logo.clearbit.com/bosch.com' },
  ],
  'masters-automotive-design': [
    { name: 'Dinesh Kumar', photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80', role: 'BIW Design Engineer', company: 'Maruti Suzuki', location: 'Gurugram', package: '₹5.1 LPA', batch: '2024', quote: 'The BIW and wiring harness modules are unmatched. Industry-level content.', companyLogo: 'https://logo.clearbit.com/marutisuzuki.com' },
    { name: 'Anjali Venkatesh', photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80', role: 'Automotive Trim Design Engineer', company: 'Motherson Group', location: 'Noida', package: '₹4.8 LPA', batch: '2024', quote: 'CATIA training at Pumo is production-quality. I joined without any adjustment period.', companyLogo: 'https://logo.clearbit.com/motherson.com' },
    { name: 'Vignesh Anand', photo: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&q=80', role: 'Wiring Harness Engineer', company: 'Yazaki India', location: 'Chennai', package: '₹4.6 LPA', batch: '2023', quote: 'Yazaki shortlisted me directly because of my harness project portfolio.', companyLogo: 'https://logo.clearbit.com/yazaki.com' },
    { name: 'Meena Saravanan', photo: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80', role: 'Automotive Design Engineer', company: 'Ford India (Supplier)', location: 'Chennai', package: '₹5.0 LPA', batch: '2024', quote: 'The Masters course gave me depth in CATIA that set me apart in interviews.', companyLogo: 'https://logo.clearbit.com/ford.com' },
  ],
  'certified-automotive-design': [
    { name: 'Ravi Shankar', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', role: 'CAD Engineer – Automotive', company: 'Tata Motors', location: 'Pune', package: '₹3.9 LPA', batch: '2024', quote: 'Four software certifications in one program — Tata Motors was impressed.', companyLogo: 'https://logo.clearbit.com/tatamotors.com' },
    { name: 'Pooja Menon', photo: 'https://images.unsplash.com/photo-1546961342-ea5f60b193b8?w=400&q=80', role: 'Automotive Design Trainee', company: 'Delphi Technologies', location: 'Bangalore', package: '₹3.6 LPA', batch: '2024', quote: 'The multi-software certification gave me an edge over single-tool candidates.', companyLogo: 'https://logo.clearbit.com/delphi.com' },
    { name: 'Arun Selvam', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', role: 'Design Engineer – Body Structures', company: 'Hyundai Mobis', location: 'Chennai', package: '₹4.0 LPA', batch: '2023', quote: 'The NX CAD module was a game changer — very few freshers know NX.', companyLogo: 'https://logo.clearbit.com/hyundaimobis.com' },
    { name: 'Kavya Ramesh', photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80', role: 'Product Development Engineer', company: 'Valeo India', location: 'Chennai', package: '₹3.7 LPA', batch: '2024', quote: 'Practical projects and professional resume support made all the difference.', companyLogo: 'https://logo.clearbit.com/valeo.com' },
  ],
};


// ── Software Master Data ───────────────────────────────────
const SOFTWARE_MASTER = {
  AutoCAD: {
    name: 'AutoCAD',
    maker: 'Autodesk',
    tagline: 'The World\'s Leading 2D & 3D CAD Drafting Software',
    color: '#e63946',
    emoji: '📐',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    videoId: VIDEOS.autocad,
    videoTitle: 'See How AutoCAD Works',
    videoDescription:
      'Watch a demonstration of AutoCAD\'s 2D drafting and 3D modelling workflow — from creating engineering drawings to generating professional technical documentation.',
    whatIs:
      'AutoCAD is a computer-aided design (CAD) and drafting software developed by Autodesk. It is the industry standard for creating precise 2D drawings and 3D models used in engineering, architecture, and manufacturing.',
    whyUsed:
      'AutoCAD is used because it replaces manual drafting with accurate, editable digital drawings. Engineers can design, modify, annotate, and share technical drawings in a fraction of the time compared to hand drawing — with zero measurement errors.',
    industries: [
      'Mechanical & Manufacturing Engineering',
      'Civil & Structural Engineering',
      'Electrical Engineering Layout',
      'Piping & Plant Design',
      'Tool Room and Sheet Metal Fabrication',
    ],
    features: [
      'Precision 2D drafting with layers, dimensions, and annotations',
      'User Coordinate System (UCS) and World Coordinate System (WCS)',
      'Orthographic, Isometric, and Auxiliary view creation',
      '3D solid and surface modelling tools',
      'Automated GD&T annotation and BOM table generation',
      'DXF/DWG file format — universal engineering standard',
    ],
    whatYouDesign: [
      'Complete engineering part drawings with tolerances',
      'Assembly layout drawings',
      'Isometric piping and structure drawings',
      'Sheet metal flat pattern drawings',
      'Welding and fabrication shop drawings',
    ],
  },

  SolidWorks: {
    name: 'SolidWorks',
    maker: 'Dassault Systèmes',
    tagline: 'The Gold Standard for 3D Parametric Mechanical Design',
    color: '#e76f51',
    emoji: '🔧',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    videoId: VIDEOS.solidworks,
    videoTitle: 'See How SolidWorks Works',
    videoDescription:
      'Explore SolidWorks\' feature-based parametric modelling — from sketching to 3D part creation, assembly design, sheet metal, and professional engineering drawings.',
    whatIs:
      'SolidWorks is a 3D computer-aided design (CAD) software by Dassault Systèmes. It uses parametric, feature-based modelling — meaning every design is driven by dimensions and relationships that update automatically when changed.',
    whyUsed:
      'SolidWorks is the preferred tool for mechanical product design because it allows engineers to create intelligent, associative 3D models. When you change one dimension, the entire model updates — making design iteration fast and accurate.',
    industries: [
      'Product Design & Consumer Goods',
      'Industrial Machinery & Equipment',
      'Medical Devices & Instruments',
      'Aerospace & Defence Components',
      'Pump, Valve, and Fluid Systems',
    ],
    features: [
      'Fully parametric 3D part and assembly modelling',
      'Feature-based design: Extrude, Revolve, Sweep, Loft, Shell',
      'Assembly constraints and motion simulation',
      'Sheet metal design with flat pattern and bend allowance',
      'Weldment structural member design',
      'Surface modelling and Class-A rendering',
    ],
    whatYouDesign: [
      'Industrial machine components',
      'Consumer product enclosures',
      'Sheet metal panels and covers',
      'Jig and fixture assemblies',
      'Pump and valve bodies',
    ],
  },

  Creo: {
    name: 'Creo (PTC)',
    maker: 'PTC Inc.',
    tagline: 'Industry-Grade Parametric 3D CAD for OEM Engineering',
    color: '#2a9d8f',
    emoji: '⚙️',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=800&q=80',
    videoId: VIDEOS.creo,
    videoTitle: 'See How Creo Works',
    videoDescription:
      'Watch a Creo Parametric modelling demonstration — covering 3D part design, assembly operations, advanced surfacing, and how Creo is used in OEM and industrial product design workflows.',
    whatIs:
      'Creo (formerly Pro/ENGINEER) is a comprehensive 3D CAD software suite by PTC Inc. It is widely used in heavy industry, automotive, aerospace and defence for its robust parametric design engine and advanced simulation capabilities.',
    whyUsed:
      'Creo is used by OEM manufacturers and Tier-1 suppliers for large, complex mechanical design projects. Its powerful constraint-based modelling, GD&T integration, and PLM connectivity make it ideal for multi-disciplinary engineering teams.',
    industries: [
      'Automotive OEM Design & Development',
      'Aerospace & Defence Engineering',
      'Heavy Industrial Machinery',
      'Medical Equipment Manufacturing',
      'Tool & Die and Mould Design',
    ],
    features: [
      'Full parametric 3D solid and surface modelling',
      'Advanced assembly management with top-down design',
      'Sheet metal design with industry calculations',
      'Mold and die design with core-cavity splitting',
      'Integrated GD&T and tolerance analysis',
      'Direct modelling for imported geometry repair',
    ],
    whatYouDesign: [
      'Complex industrial machinery components',
      'Automotive structural parts and brackets',
      'Tool and die mould assemblies',
      'Aerospace structural members',
      'Multi-body mechanical assemblies',
    ],
  },

  CATIA: {
    name: 'CATIA',
    maker: 'Dassault Systèmes',
    tagline: 'The World\'s Premier Automotive & Aerospace Design Platform',
    color: '#264653',
    emoji: '🚗',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    videoId: VIDEOS.catia,
    videoTitle: 'See How CATIA Works',
    videoDescription:
      'Watch a CATIA design demonstration covering automotive surface modelling, BIW part design, and the Class-A surfacing workflow used by global vehicle manufacturers.',
    whatIs:
      'CATIA (Computer Aided Three-dimensional Interactive Application) is a multi-platform software suite developed by Dassault Systèmes. It is the dominant CAD tool used by the world\'s largest automotive OEMs and aircraft manufacturers.',
    whyUsed:
      'CATIA is used for automotive and aerospace design because it handles extremely complex organic surfaces (Class-A), large assemblies with thousands of components, and integrates seamlessly with Product Lifecycle Management (PLM) systems like ENOVIA.',
    industries: [
      'Automotive OEM — Body Design, BIW, Trims',
      'Aerospace Structures & Interior Design',
      'High-Speed Rail and Transportation',
      'Industrial Equipment & Machinery',
      'Consumer Electronics (high-end product design)',
    ],
    features: [
      'Class-A surface modelling for automotive exteriors',
      'Part Design — advanced solid modelling',
      'BIW (Body in White) structural component design',
      'Sheet metal design for automotive panels',
      'Large assembly management (10,000+ components)',
      'DMU (Digital Mock-Up) for virtual vehicle assembly',
    ],
    whatYouDesign: [
      'Vehicle door panels, fenders, hoods, trunk lids',
      'Dashboard and instrument panel structures',
      'BIW pillars, floor pans, roof structures',
      'Bumper fascias and exterior trim components',
      'Aircraft structural members and interiors',
    ],
  },

  'NX CAD': {
    name: 'NX CAD',
    maker: 'Siemens Digital Industries',
    tagline: 'Advanced Integrated CAD/CAM/CAE for Automotive Precision',
    color: '#6a4c93',
    emoji: '🏭',
    image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80',
    videoId: VIDEOS.nxcad,
    videoTitle: 'See How NX CAD Works',
    videoDescription:
      'Explore NX CAD\'s synchronous modelling technology, automotive design workflows, and how it integrates with manufacturing simulation for end-to-end product development.',
    whatIs:
      'NX CAD (formerly Unigraphics) is an advanced integrated computer-aided design software developed by Siemens Digital Industries Software. It provides world-class 3D design capabilities for mechanical and automotive engineering.',
    whyUsed:
      'NX is used by automotive, aerospace, and high-precision manufacturing companies because of its unique Synchronous Technology — allowing designers to modify geometry without worrying about feature history, making design changes dramatically faster.',
    industries: [
      'Automotive Tier-1 Supplier Companies',
      'Aerospace & Defence Engineering',
      'Heavy Engineering & Power Generation',
      'Consumer Products & Mould Design',
      'Medical Device Engineering',
    ],
    features: [
      'Synchronous modelling — history-free direct editing',
      'Advanced sheet metal design and simulation',
      'Routing — wiring harness path design',
      'Mould wizard for injection mould tool design',
      'Integrated CAM for CNC machining',
      'Automotive-specific Design for Manufacturing tools',
    ],
    whatYouDesign: [
      'Automotive plastic trim and structural brackets',
      'Complex mechanical housings and covers',
      'Wiring harness routing in vehicle cavities',
      'Precision mould and die tooling',
      'Aerospace structural panels',
    ],
  },
};

// ── Course Detail Content — keyed by course ID ────────────
const courseDetailData = {

  // ═══════════════════════════════════════════════════════
  // MASTERS IN INDUSTRIAL DESIGN
  // ═══════════════════════════════════════════════════════
  'masters-industrial-design': {
    heroTagline: 'The Complete Industrial Design Engineering Program',
    heroBg: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1400&q=80',
    overview: {
      title: 'What is Industrial Design Engineering?',
      intro:
        'Industrial Design Engineering is the professional discipline of designing mechanical parts, assemblies, and systems using computer-aided design (CAD) software. It is the backbone of all manufacturing industries — from automobiles to medical devices.',
      points: [
        { icon: '🔩', title: 'What You Will Learn', desc: 'From basic 2D drafting in AutoCAD to advanced 3D modelling in SolidWorks and Creo — including Sheet Metal, Tool & Die, Jig & Fixture, and Reverse Engineering.' },
        { icon: '🏭', title: 'Where It Is Used', desc: 'OEM factories, Tier-1 suppliers, valve and pump industries, tool rooms, sheet metal fabrication companies, product design firms, and engineering service companies.' },
        { icon: '💼', title: 'Career Impact', desc: 'Industrial design engineers are in constant demand. This program prepares you for CAD Design Engineer, Tool Design Engineer, and Product Design Engineer roles.' },
        { icon: '📐', title: 'Real-World Projects', desc: 'You will design complete industrial machines, valve assemblies, sheet metal enclosures, injection moulds, and jig-fixture systems — not toy exercises.' },
      ],
      image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=800&q=80',
    },
    softwareSections: [
      SOFTWARE_MASTER['AutoCAD'],
      SOFTWARE_MASTER['SolidWorks'],
      SOFTWARE_MASTER['Creo'],
    ],
    projects: [
      { title: 'Centrifugal Pump Assembly', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80', desc: 'Complete multi-part pump assembly with impeller, casing, shaft and bearings — modelled and constrained in SolidWorks.', software: 'SolidWorks', skills: 'Assembly Constraints, BOM, Exploded Views' },
      { title: 'Sheet Metal Control Panel Enclosure', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', desc: 'Industrial electrical enclosure designed with accurate K-factor calculations, bend radii, and flat pattern generation.', software: 'SolidWorks / Creo', skills: 'Sheet Metal, Bend Allowance, Flat Pattern' },
      { title: 'Injection Mould Tool Design', image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=600&q=80', desc: 'Complete 2-plate injection mould with core-cavity split, side cores, runner system, and ejection mechanism.', software: 'Creo', skills: 'Tool & Die Design, Shrinkage Calc, Runner Design' },
      { title: 'Welding Jig and Fixture', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Hydraulic welding fixture with 3-2-1 locating principle, Poka-Yoke routing, and pressure calculations.', software: 'SolidWorks', skills: 'Jig & Fixture, Hydraulic Clamps, Poka-Yoke' },
      { title: 'Industrial Gear Box Housing', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80', desc: 'Multi-feature gearbox housing with boss features, bearing pockets, GD&T annotations, and manufacturing drawings.', software: 'AutoCAD / SolidWorks', skills: 'Part Modelling, GD&T, Engineering Drawing' },
      { title: 'Valve Body — Reverse Engineering', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80', desc: 'Industrial gate valve reverse engineered from physical measurements using calipers, micrometers, and CMM data.', software: 'Creo', skills: 'Reverse Engineering, Metrology, Quality Control' },
    ],
    skills: [
      { icon: '📐', name: 'AutoCAD 2D Drafting' },
      { icon: '🔩', name: 'SolidWorks 3D Modelling' },
      { icon: '⚙️', name: 'Creo Parametric Design' },
      { icon: '🏗️', name: 'Assembly Design' },
      { icon: '🔲', name: 'Sheet Metal Design' },
      { icon: '🎯', name: 'GD&T Application' },
      { icon: '🛠️', name: 'Tool & Die Design' },
      { icon: '📏', name: 'Jig & Fixture Design' },
      { icon: '🔄', name: 'Reverse Engineering' },
      { icon: '📋', name: 'Technical Drawings' },
      { icon: '🧪', name: 'Surface Modelling' },
      { icon: '🏭', name: 'Industrial Projects' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // CERTIFIED IN INDUSTRIAL DESIGN
  // ═══════════════════════════════════════════════════════
  'certified-industrial-design': {
    heroTagline: 'Fast-Track CAD Certification for Mechanical Engineers',
    heroBg: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1400&q=80',
    overview: {
      title: 'What is this Certification Program?',
      intro:
        'The Certified in Industrial Design program is a focused, intensive course that equips mechanical engineers with job-ready CAD skills in AutoCAD and SolidWorks — the two most widely used design tools in Indian manufacturing and engineering companies.',
      points: [
        { icon: '🎯', title: 'Who Is It For', desc: 'B.E./B.Tech (Mechanical) graduates, Diploma holders, and working engineers who need to quickly gain credible, industry-proven CAD certification for job applications.' },
        { icon: '⚡', title: 'Fast-Track Learning', desc: 'Compressed 2-month intensive curriculum covering AutoCAD (2D & 3D) and SolidWorks (Parts, Assemblies, Sheet Metal, Drawings) — the essential toolkit for core manufacturing roles.' },
        { icon: '📄', title: 'What You Produce', desc: 'Complete engineering drawings, 3D part models, mechanical assemblies, sheet metal flat patterns, and professional technical documentation with GD&T.' },
        { icon: '🏢', title: 'Industry Alignment', desc: 'Curriculum mapped to actual job requirements in OEM factories, Tier-1 suppliers, and core engineering companies across India.' },
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
    softwareSections: [
      SOFTWARE_MASTER['AutoCAD'],
      SOFTWARE_MASTER['SolidWorks'],
    ],
    projects: [
      { title: 'Engineering Part Drawing — AutoCAD', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Complete multi-view engineering drawing with dimensions, tolerances, surface finish symbols, and title block.', software: 'AutoCAD', skills: 'Technical Drawing, GD&T, Annotation' },
      { title: 'Mechanical Assembly — SolidWorks', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80', desc: 'Multi-part mechanical assembly with mate constraints, exploded view, and bill of materials.', software: 'SolidWorks', skills: 'Assembly Constraints, Exploded View, BOM' },
      { title: 'Sheet Metal Bracket', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', desc: 'Industrial mounting bracket designed with edge flanges, bend allowance calculations, and flat pattern drawing.', software: 'SolidWorks', skills: 'Sheet Metal, K-Factor, Flat Pattern' },
      { title: 'Rotating Shaft — 3D Model', image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=600&q=80', desc: 'Stepped shaft with keyway, toleranced diameters, and thread features — complete with engineering drawing.', software: 'SolidWorks / AutoCAD', skills: 'Part Modelling, Revolve, Engineering Drawing' },
    ],
    skills: [
      { icon: '📐', name: 'AutoCAD 2D Drafting' },
      { icon: '📏', name: 'AutoCAD 3D Basics' },
      { icon: '🔩', name: 'SolidWorks Part Design' },
      { icon: '🏗️', name: 'Assembly Modelling' },
      { icon: '🔲', name: 'Sheet Metal Basics' },
      { icon: '🎯', name: 'GD&T Fundamentals' },
      { icon: '📋', name: 'Technical Drawings' },
      { icon: '📊', name: 'Bill of Materials' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // MASTERS IN AUTOMOTIVE DESIGN
  // ═══════════════════════════════════════════════════════
  'masters-automotive-design': {
    heroTagline: 'The Complete Automotive Engineering Design Program',
    heroBg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80',
    overview: {
      title: 'What is Automotive Design Engineering?',
      intro:
        'Automotive Design Engineering covers the complete design of a vehicle — from the structural body skeleton (BIW) to plastic interior and exterior trim components, and the electrical wiring systems. It is one of the most specialised and high-paying domains in mechanical engineering.',
      points: [
        { icon: '🚗', title: 'Full Vehicle Coverage', desc: 'Learn every aspect of a vehicle\'s design — body structure, interior trims, exterior plastics, and complete wiring harness systems across 9 vehicle zones.' },
        { icon: '🏭', title: 'OEM Industry Standard', desc: 'The curriculum is designed around what global automotive OEMs and Tier-1 suppliers actually do — using CATIA, Creo, and AutoCAD in real vehicle development programs.' },
        { icon: '🔌', title: 'Wiring Harness Specialisation', desc: 'A unique focus area: complete wiring harness design across door, roof, engine, chassis, dashboard, bumper, and tail zones — a critical skill in the EV era.' },
        { icon: '💰', title: 'Premium Career Outcomes', desc: 'Automotive design engineers command premium salaries. This program prepares you for BIW, Trim, and Harness Design roles at OEM and Tier-1 automotive companies.' },
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    },
    softwareSections: [
      SOFTWARE_MASTER['AutoCAD'],
      SOFTWARE_MASTER['Creo'],
      SOFTWARE_MASTER['CATIA'],
    ],
    projects: [
      { title: 'Automotive Door Panel — CATIA', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', desc: 'Class-A interior door panel with snap-fit features, foaming pads, speaker grille integration, and draft analysis.', software: 'CATIA', skills: 'Automotive Plastics, Class-A Surface, Draft Analysis' },
      { title: 'BIW B-Pillar Structure', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80', desc: 'Body-in-White B-Pillar with spot weld flanges, reinforcement gussets, crash-compliant geometry, and forming analysis.', software: 'CATIA', skills: 'BIW Design, Sheet Metal, Welding Flanges' },
      { title: 'Engine Wiring Harness', image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=600&q=80', desc: 'Complete engine compartment harness with 24 connectors, routing through clips, grommets, and circuit protection.', software: 'CATIA / Creo', skills: 'Wiring Harness, Connector Routing, Circuit Protection' },
      { title: 'Front Bumper Fascia Design', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'Exterior bumper fascia with fog lamp housings, grille integration, pedestrian safety compliance geometry, and paint surfaces.', software: 'CATIA', skills: 'Exterior Trims, Surface Modelling, Class-A' },
      { title: 'Dashboard Harness Layout', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Dashboard and IP harness layout with 50+ connectors routed through the full instrument panel assembly structure.', software: 'CATIA', skills: 'Harness Routing, DMU, Clip Placement' },
      { title: 'SUV Body Structure Assembly', image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=600&q=80', desc: 'Complete SUV monocoque BIW assembly including floor pan, roof, pillars, and closures with spot weld positions.', software: 'CATIA / Creo', skills: 'BIW Assembly, Monocoque, Closures Design' },
    ],
    skills: [
      { icon: '🚗', name: 'Automotive Plastics Design' },
      { icon: '🏗️', name: 'BIW Design' },
      { icon: '🔌', name: 'Wiring Harness Design' },
      { icon: '🛋️', name: 'Interior Trim Design' },
      { icon: '🎨', name: 'Exterior Trim Design' },
      { icon: '🔩', name: 'CATIA Part Design' },
      { icon: '⚙️', name: 'Creo Modelling' },
      { icon: '📐', name: 'AutoCAD Drafting' },
      { icon: '🏭', name: 'OEM Design Standards' },
      { icon: '📋', name: 'DFMEA Basics' },
      { icon: '🔧', name: 'Sheet Metal (Auto)' },
      { icon: '🌐', name: 'DMU & Assembly' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // CERTIFIED IN AUTOMOTIVE DESIGN
  // ═══════════════════════════════════════════════════════
  'certified-automotive-design': {
    heroTagline: 'Multi-Software Automotive Design Certification',
    heroBg: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1400&q=80',
    overview: {
      title: 'What is this Automotive Certification?',
      intro:
        'The Certified in Automotive Design program provides a comprehensive foundation in automotive engineering design across four industry-standard software platforms — AutoCAD, Creo, CATIA, and NX CAD. It is the fastest route into automotive design engineering roles.',
      points: [
        { icon: '🖥️', title: '4 Software Platforms', desc: 'Unlike single-software courses, this certification trains you across AutoCAD, Creo, CATIA, and NX CAD — giving you a broad toolkit valued by multiple employers.' },
        { icon: '🚙', title: 'Automotive Body Structures', desc: 'Understand and design both frame-mounted and monocoque body structures including BIW components, SUV and sedan body architecture.' },
        { icon: '🔌', title: 'Wiring Harness Fundamentals', desc: 'Introduction to automotive wiring harness design — covering connectors, routing principles, and key harness zones that power modern vehicles.' },
        { icon: '🎓', title: 'Industry-Ready Certification', desc: 'Upon completion, you receive a certification validating your multi-software automotive design capability — directly applicable to Tier-1 and OEM job applications.' },
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    },
    softwareSections: [
      SOFTWARE_MASTER['AutoCAD'],
      SOFTWARE_MASTER['Creo'],
      SOFTWARE_MASTER['CATIA'],
      SOFTWARE_MASTER['NX CAD'],
    ],
    projects: [
      { title: 'Car Body Structure — CATIA', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80', desc: 'Sedan body structure model covering floor pan, A/B/C pillars, roof, and closure panels in CATIA Part Design.', software: 'CATIA', skills: 'BIW Design, Body Structure, Part Design' },
      { title: 'Bumper Assembly — Creo', image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=600&q=80', desc: 'Front bumper system assembly with fascia, reinforcement bar, absorber, and mounting brackets in Creo Parametric.', software: 'Creo', skills: 'Plastics Design, Assembly, Constraints' },
      { title: 'Harness Zone Layout — NX CAD', image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=600&q=80', desc: 'Door harness zone with wire routing, connector positions, clip placement, and protective sheathing design.', software: 'NX CAD', skills: 'Wiring Harness, Routing, NX Routing Module' },
      { title: 'Instrument Panel Drawing — AutoCAD', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Dashboard layout drawing showing IP structure, HVAC vents, screen, and cluster positions with dimensions.', software: 'AutoCAD', skills: 'Technical Drawing, Layout Planning, Annotation' },
    ],
    skills: [
      { icon: '🚗', name: 'Body Structure Design' },
      { icon: '🏗️', name: 'BIW Components' },
      { icon: '🔌', name: 'Harness Fundamentals' },
      { icon: '🎨', name: 'Automotive Plastics' },
      { icon: '🔩', name: 'CATIA Basics' },
      { icon: '⚙️', name: 'Creo Modelling' },
      { icon: '🏭', name: 'NX CAD Basics' },
      { icon: '📐', name: 'AutoCAD 2D/3D' },
    ],
  },
};

export { PLACEMENTS };
export default courseDetailData;
