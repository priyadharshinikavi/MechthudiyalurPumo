// ============================================================
// MASTERS IN INDUSTRIAL DESIGN — Design Showcase
// Images live in /public/courses/masters-industrial-design/
// Each item: image, title, tag (software / area), 2 highlight points
// ============================================================

const IMG = (name) => `${import.meta.env.BASE_URL}courses/masters-industrial-design/${name}.webp`;

export const MID_HERO_IMAGE = IMG('engineering-components-blueprint');
export const MID_OVERVIEW_IMAGE = IMG('creo-gearbox-mechanism');

// Intro block: software logos (left) + feature machine image (right)
export const midIntro = {
  logos: [
    { src: IMG('autocad-logo'), alt: 'AutoCAD' },
    { src: IMG('solidworks-logo'), alt: 'SolidWorks' },
    { src: IMG('creo-parametric-logo'), alt: 'Creo Parametric' },
  ],
  image: IMG('engineering-components-blueprint'),
  imageAlt: 'Precision engineering components on technical blueprints',
  // "2D Sketch Dimensions With Constraints" section
  sketchImage: IMG('2d-sketch-dimensions'),
  // "1st & 3rd Angle of Projection" section
  showProjection: true,
  // "Concept of Isometric / Concept of Part Model" section
  partModelling: {
    isoImages: [IMG('extrude-feature-preview'), IMG('extruded-link-part')],
    partImages: [IMG('bracket-counterbore-part'), IMG('slotted-clamp-part')],
    advImages: [IMG('surface-loft-link'), IMG('pipe-fitting-body')],
  },
  // "Concept Of Assembly" section
  assembly: {
    assembledImage: IMG('drone-assembly'),
    explodedImage: IMG('drone-exploded-view'),
    pistonImage: IMG('piston-connecting-rod'),
  },
  // "Concept of Sheet Metal" section (order: materials, flat pattern, enclosure, parts, vented, formed)
  sheetMetal: [
    { src: IMG('sheet-metal-materials'), alt: 'Sheet metal coils, sheets and profiles', label: 'Sheet metal materials' },
    { src: IMG('sheet-metal-flat-pattern'), alt: 'Flat pattern with bend notes', label: 'Flat pattern' },
    { src: IMG('sheet-metal-enclosure'), alt: 'Folded vented sheet metal enclosure', label: 'Folded enclosure' },
    { src: IMG('sheet-metal-components'), alt: 'Assorted industrial sheet metal components', label: 'Industrial components' },
    { src: IMG('sheet-metal-vented-bracket'), alt: 'Cable tray with fan grille and ribs', label: 'Cable tray with grille' },
    { src: IMG('sheet-metal-formed-bracket'), alt: 'Formed bracket with embossed ribs', label: 'Formed bracket' },
  ],
  // "Weldments" section (order: profiles, frame groups, staircase model, drawing, steel frame, tower)
  weldments: [
    { src: IMG('weldment-structural-profiles'), alt: 'Standard structural profiles', label: 'Profiles' },
    { src: IMG('weldment-frame-groups'), alt: 'Frame built from structural member groups', label: 'Frame with member groups' },
    { src: IMG('weldment-staircase-model'), alt: 'Staircase platform weldment model', label: 'Staircase platform' },
    { src: IMG('weldment-frame-drawing'), alt: 'Frame fabrication drawing with cut list', label: 'Fabrication drawing & cut list' },
    { src: IMG('weldment-steel-frame'), alt: 'Weldment steel base frame', label: 'Steel base frame' },
    { src: IMG('staircase-tower-structure'), alt: 'Multi-level staircase tower structure', label: 'Staircase tower' },
  ],
  // "Concept of Drafting" section
  drafting: [
    { src: IMG('orthographic-drawing'), alt: 'Dimensioned orthographic drawing of a bracket', label: 'Orthographic Drawing', block: 'PART DRAWING' },
    { src: IMG('ball-valve-exploded-bom'), alt: 'Sectioned ball valve assembly with balloons and BOM', label: 'Assembly Drawing & BOM', block: 'ASSEMBLY + BOM' },
  ],
  // "Universal Coupling" project drawing inspector (logo removed from title block)
  // box = [left%, top%, width%, height%] of each region on the sheet
  projectDrawing: {
    image: IMG('universal-coupling-sheet'),
    title: { lead: 'Universal Coupling', accent: 'Project Drawing' },
    regions: [
      { name: 'Exploded View', desc: 'All 7 parts separated along their axes with numbered balloons.', box: [4.5, 7, 35, 70] },
      { name: 'Orthographic Views', desc: 'TV, FV, BV, LSV and RSV arranged around the front view.', box: [32, 5, 35, 44] },
      { name: 'Isometric View', desc: 'Shaded 3D view of the fully assembled coupling.', box: [71, 6.5, 26.5, 29] },
      { name: 'Bill of Materials', desc: 'Item number, part number and quantity for every component.', box: [57, 37.5, 30.5, 37] },
      { name: 'Title Block', desc: 'Material, weight, scale, A3 sheet size and drawn / checked / approved.', box: [3.5, 76.5, 93.5, 20.5] },
    ],
  },
  // "Concept Of Surface" section — origin = point the surface reveal grows from
  surface: [
    { src: IMG('mouse-surface-model'), alt: 'Computer mouse modelled with smooth surfaces', label: 'Computer Mouse — Surface Model', origin: ['35%', '60%'] },
    { src: IMG('valve-body-surface'), alt: 'Valve body flow passage built with surfaces', label: 'Valve Body — Surface Model', origin: ['50%', '40%'] },
  ],
  // "Tool & Die Design Concept" section (order: mould, press tool, die sets)
  toolDie: [
    { src: IMG('press-tool-exploded'), alt: 'Exploded injection mould with core and cavity plates', label: 'Injection Mould — Core & Cavity' },
    { src: IMG('progressive-die-strip'), alt: 'Exploded press tool with strip layout', label: 'Press Tool with Strip Layout' },
    { src: IMG('press-die-sets'), alt: 'Manufactured die sets with guide pillars', label: 'Manufactured Die Sets' },
  ],
  // "Jig & Fixture Design Concept" section (order: comparison, jig, fixture)
  jigFixture: [
    { src: IMG('jig-vs-fixture'), alt: 'Diagram comparing a jig and a fixture', label: 'Jig vs Fixture' },
    { src: IMG('drill-jig'), alt: 'Drill jig with hardened bushes guiding a drill', label: 'Drill Jig' },
    { src: IMG('welding-fixture'), alt: 'Welding fixture with toggle clamps on a base plate', label: 'Welding Fixture' },
  ],
  // "Reverse Engineering" section (order: instruments, Pumo lab photo)
  reverseEng: [
    { src: IMG('measuring-instruments'), alt: 'Vernier caliper, micrometer and bevel protractor in use', label: 'Precision Measuring Instruments' },
    { src: IMG('pumo-metrology-lab'), alt: 'Students measuring components in the Pumo metrology lab', label: 'Practical Metrology at Pumo' },
  ],
  // "Study Of GD&T" section (feature control frame is rebuilt as an interactive element)
  gdt: {
    symbolsImage: IMG('gdt-symbols'),
    drawingImage: IMG('gdt-applied-drawing'),
  },
  // "Project" section — hotspots are % positions on the gearbox screenshot
  project: {
    image: IMG('creo-gearbox-mechanism'),
    windowTitle: '297-M-CS (Active) — Creo Parametric',
    hotspots: [
      { label: 'Gear Train', x: 52.5, y: 57 },
      { label: 'Shift Forks', x: 61.5, y: 48.5 },
      { label: 'Output Gear & Shaft', x: 75.7, y: 64 },
      { label: 'Housing — Section View', x: 35, y: 74 },
      { label: 'Kinematic Analysis Setup', x: 11, y: 85.5 },
    ],
  },
  // "Where Our Engineers Work" industries section
  industries: [
    { name: 'Pump Industries', icon: 'pump', src: IMG('centrifugal-pump'), alt: 'Centrifugal pump with motor', fit: 'contain', roles: ['Pump Design Engineer', 'Product Development Engineer', 'CAD Draughtsman'] },
    { name: 'Valve Industries', icon: 'valve', src: IMG('industrial-valves'), alt: 'Range of industrial valves', roles: ['Valve Design Engineer', 'Casting Design Engineer', 'Detailing Engineer'] },
    { name: 'Engineering Service Companies', icon: 'services', src: IMG('design-engineers-review'), alt: 'Design engineers reviewing a 3D model', roles: ['CAD Engineer', 'Design Consultant', 'Project Engineer'] },
    { name: 'Special Purpose Machines', icon: 'spm', src: IMG('special-purpose-machine'), alt: 'Special purpose automation machine', fit: 'contain', roles: ['Machine Design Engineer', 'Automation Design Engineer', 'Jig & Fixture Designer'] },
    { name: 'Fabrication Industries', icon: 'fabrication', src: IMG('laser-cutting'), alt: 'CNC laser cutting sheet metal', roles: ['Sheet Metal Design Engineer', 'Structural Detailer', 'Weldment Designer'] },
    { name: 'Product Based Industries', icon: 'product', src: IMG('manufacturing-processes'), alt: 'Gears, laser cutting, machining and welding processes', roles: ['Product Design Engineer', 'R&D Engineer', 'Tool Design Engineer'] },
  ],
};

export const midShowcase = [
  {
    id: 'software',
    number: '01',
    title: 'Industry Software Suite',
    intro: 'Three professional CAD platforms used by OEMs, Tier-1 suppliers and design service companies worldwide.',
    items: [
      {
        image: IMG('autocad-logo'), title: 'AutoCAD', tag: 'Autodesk', fit: 'contain',
        points: [
          'Industry standard for 2D drafting, layouts and manufacturing drawings',
          'Layers, blocks, dimension styles and plotting to ISO / BIS standards',
        ],
      },
      {
        image: IMG('solidworks-logo'), title: 'SolidWorks', tag: 'Dassault Systèmes', fit: 'contain',
        points: [
          'Feature-based 3D parametric modelling for parts and assemblies',
          'Dedicated Sheet Metal, Weldments and Drawing environments',
        ],
      },
      {
        image: IMG('creo-parametric-logo'), title: 'Creo Parametric', tag: 'PTC', fit: 'contain',
        points: [
          'Robust parametric design used across heavy engineering and automotive',
          'Advanced surfacing, mechanism simulation and top-down assembly design',
        ],
      },
    ],
  },
  {
    id: 'fundamentals',
    number: '02',
    title: 'CADD Fundamentals & Projections',
    intro: 'Strong drafting basics: sketching, constraints and the projection systems every engineer must read and draw.',
    items: [
      {
        image: IMG('2d-sketch-dimensions'), title: 'Fully Defined 2D Sketch', tag: 'SolidWorks Sketch',
        points: [
          'Geometric relations and smart dimensions to fully constrain every entity',
          'Construction lines and design intent that keep the model easy to edit',
        ],
      },
      {
        image: IMG('first-third-angle-projection'), title: '1st & 3rd Angle Projection', tag: 'Engineering Graphics',
        points: [
          'Difference between opposite-side (1st) and same-side (3rd) view placement',
          'Correct arrangement of FV, TV, BV, LSV and RSV on a drawing sheet',
        ],
      },
      {
        image: IMG('orthographic-drawing'), title: 'Orthographic Drawing', tag: 'AutoCAD 2D',
        points: [
          'Front, top and side views derived from a 3D component with hidden lines',
          'Complete dimensioning with radii, diameters and centre lines',
        ],
      },
    ],
  },
  {
    id: 'part-modelling',
    number: '03',
    title: 'Part Modelling',
    intro: 'Turning 2D sketches into solid, manufacturable 3D components with clean feature trees.',
    items: [
      {
        image: IMG('extrude-feature-preview'), title: 'Sketch to Solid — Extrude', tag: 'SolidWorks',
        points: [
          'Extrude boss and cut features driven directly from the base sketch',
          'Live preview with direction, depth and end-condition control',
        ],
      },
      {
        image: IMG('extruded-link-part'), title: 'Finished Link Component', tag: 'SolidWorks',
        points: [
          'Through holes and U-slot created with clean, editable features',
          'Ready for material assignment, mass properties and drawing output',
        ],
      },
      {
        image: IMG('bracket-counterbore-part'), title: 'Bracket with Counterbore', tag: 'SolidWorks',
        points: [
          'Multi-feature part combining extrudes, cuts and a counterbored boss',
          'Twin lugs with aligned pin holes for assembly with mating parts',
        ],
      },
      {
        image: IMG('slotted-clamp-part'), title: 'Slotted Clamp Body', tag: 'SolidWorks',
        points: [
          'Split cylindrical boss with a slot to create a clamping action',
          'Concave cradle cut that locates round stock precisely',
        ],
      },
    ],
  },
  {
    id: 'surface',
    number: '04',
    title: 'Surface Modelling',
    intro: 'Freeform and Class-A style surfaces for consumer products, castings and fluid-flow bodies.',
    items: [
      {
        image: IMG('surface-loft-link'), title: 'Lofted Surface Link', tag: 'Surface Design',
        points: [
          'Twisted transition built with loft and boundary surfaces',
          'Surfaces knitted and thickened into a watertight solid',
        ],
      },
      {
        image: IMG('mouse-surface-model'), title: 'Computer Mouse', tag: 'Product Surfacing',
        points: [
          'Smooth ergonomic shell modelled with curvature-continuous surfaces',
          'Split lines define separate buttons, scroll wheel and grip parts',
        ],
      },
      {
        image: IMG('valve-body-surface'), title: 'Valve Body Surface', tag: 'Surface Design',
        points: [
          'Organic flow passage blended between two flanged ends',
          'Reference planes used to trim and cap the internal cavity',
        ],
      },
      {
        image: IMG('pipe-fitting-body'), title: 'Multi-Port Pipe Fitting', tag: 'Solid + Surface',
        points: [
          'Spherical core with threaded, flanged and plain branch ports',
          'Realistic cosmetic threads and photo-realistic rendering',
        ],
      },
    ],
  },
  {
    id: 'assembly',
    number: '05',
    title: 'Assembly & Product Design',
    intro: 'Bringing parts together with mates, motion and exploded views for complete products.',
    items: [
      {
        image: IMG('drone-exploded-view'), title: 'Agri-Drone — Exploded View', tag: 'Assembly Design',
        points: [
          'Every sub-assembly separated to show the build sequence clearly',
          'Arms, motors, propellers, tank and landing gear as individual parts',
        ],
      },
      {
        image: IMG('drone-assembly'), title: 'Agri-Drone — Final Assembly', tag: 'Product Design',
        points: [
          'Fully mated assembly with folding arms and spray-tank integration',
          'Rendered for design reviews and customer presentations',
        ],
      },
      {
        image: IMG('piston-connecting-rod'), title: 'Piston & Connecting Rod', tag: 'Automotive Assembly',
        points: [
          'Rings, wrist pin, bearing shells and cap modelled as separate parts',
          'Labelled exploded view explains the function of each component',
        ],
      },
      {
        image: IMG('creo-gearbox-mechanism'), title: 'Gearbox Mechanism', tag: 'Creo Mechanism',
        points: [
          'Section view exposes gears, shafts, shift forks and bearings',
          'Kinematic analysis with servo motors, gears and connections',
        ],
      },
    ],
  },
  {
    id: 'sheet-metal',
    number: '06',
    title: 'Sheet Metal Design',
    intro: 'From raw coil to formed component: bends, flat patterns and manufacturing-ready sheet metal parts.',
    items: [
      {
        image: IMG('sheet-metal-materials'), title: 'Sheet Metal Materials', tag: 'Material Basics',
        points: [
          'GI, CRCA, stainless, aluminium and pre-painted sheets and coils',
          'Gauges, perforated sheets and roll-formed profiles used in industry',
        ],
      },
      {
        image: IMG('sheet-metal-flat-pattern'), title: 'Flat Pattern with Bend Notes', tag: 'SolidWorks Sheet Metal',
        points: [
          'Unfolded blank with UP / DOWN bend direction, angle and radius',
          'Overall blank size calculated using K-factor and bend allowance',
        ],
      },
      {
        image: IMG('sheet-metal-enclosure'), title: 'Vented Enclosure', tag: 'SolidWorks Sheet Metal',
        points: [
          'Edge flanges, hems and mounting tabs formed from a single blank',
          'Louvres and fan grille cut-outs for ventilation',
        ],
      },
      {
        image: IMG('sheet-metal-components'), title: 'Industrial Sheet Metal Parts', tag: 'Industry Applications',
        points: [
          'Brackets, clips, mounts and covers used in automotive and electrical products',
          'Shows the range of parts produced by press shops and fabricators',
        ],
      },
      {
        image: IMG('sheet-metal-vented-bracket'), title: 'Cable Tray with Grille', tag: 'Forming Tools',
        points: [
          'Rolled hinges, stiffening ribs and lanced features',
          'Perforation pattern and circular grille made with forming tools',
        ],
      },
      {
        image: IMG('sheet-metal-formed-bracket'), title: 'Formed Mounting Bracket', tag: 'Forming Tools',
        points: [
          'Embossed ribs and drawn pockets that add stiffness without weight',
          'Relief cuts and bends planned for press-tool manufacturing',
        ],
      },
    ],
  },
  {
    id: 'weldments',
    number: '07',
    title: 'Weldments & Structural Design',
    intro: 'Steel structures, frames and platforms built from standard profiles, with cut lists and fabrication drawings.',
    items: [
      {
        image: IMG('weldment-structural-profiles'), title: 'Standard Structural Profiles', tag: 'Weldments',
        points: [
          'Angle, channel, I-beam, pipe, square and rectangular tube sections',
          'Profiles selected to ISO / IS sizes from the weldment library',
        ],
      },
      {
        image: IMG('weldment-frame-groups'), title: 'Frame with Member Groups', tag: 'SolidWorks Weldments',
        points: [
          'Structural members placed on 3D sketch paths in organised groups',
          'Corner treatment, trim / extend and mitre joints applied automatically',
        ],
      },
      {
        image: IMG('weldment-staircase-model'), title: 'Staircase Platform Model', tag: 'SolidWorks Weldments',
        points: [
          'Landing platforms, stringers, steps and handrails in one weldment',
          'Square-tube members sized and trimmed for fabrication',
        ],
      },
      {
        image: IMG('weldment-frame-drawing'), title: 'Frame Fabrication Drawing', tag: 'Engineering Drawing',
        points: [
          'Orthographic and isometric views with balloons and dimensions',
          'Weldment cut list with member description, quantity and length',
        ],
      },
      {
        image: IMG('weldment-steel-frame'), title: 'Steel Base Frame', tag: 'SolidWorks Weldments',
        points: [
          'Machine base frame with gussets and bolted foot plates',
          'Model and drawing linked, so design changes update automatically',
        ],
      },
      {
        image: IMG('staircase-tower-structure'), title: 'Multi-Level Staircase Tower', tag: 'Structural Design',
        points: [
          'Columns, beams, landings and roof designed as a complete structure',
          'Real-world fabrication project covering layout to detailing',
        ],
      },
    ],
  },
  {
    id: 'drawings',
    number: '08',
    title: 'Production Drawings & BOM',
    intro: 'Shop-floor ready documentation that manufacturing, purchase and quality teams can work from.',
    items: [
      {
        image: IMG('ball-valve-exploded-bom'), title: 'Ball Valve — Sectioned Assembly', tag: 'Assembly Drawing',
        points: [
          'Section view reveals ball, seats, stem, springs and seals',
          '31 balloons linked to a complete bill of materials with quantities',
        ],
      },
      {
        image: IMG('universal-coupling-drawing'), title: 'Universal Coupling — A3 Sheet', tag: 'Student Project',
        points: [
          'Exploded, orthographic and isometric views on a standard A3 sheet',
          'Title block with material, weight, scale and drawn / checked / approved',
        ],
      },
    ],
  },
  {
    id: 'gdt',
    number: '09',
    title: 'GD&T — Geometric Dimensioning & Tolerancing',
    intro: 'The language of precision manufacturing, applied to real components per ASME Y14.5.',
    items: [
      {
        image: IMG('gdt-symbols'), title: 'GD&T Symbols & Control Types', tag: 'ASME Y14.5',
        points: [
          'Form, orientation, location and runout characteristics explained',
          'When a datum reference is required, and when it is not allowed',
        ],
      },
      {
        image: IMG('feature-control-frame'), title: 'Feature Control Frame', tag: 'GD&T Basics',
        points: [
          'How to read the characteristic, tolerance zone and material modifiers',
          'Primary, secondary and tertiary datum order and its effect',
        ],
      },
      {
        image: IMG('gdt-applied-drawing'), title: 'GD&T on a Flanged Part', tag: 'Applied GD&T',
        points: [
          'Position, profile, flatness and perpendicularity applied to real features',
          'Datum scheme built around the part’s function and assembly',
        ],
      },
    ],
  },
  {
    id: 'tool-die',
    number: '10',
    title: 'Press Tool & Die Design',
    intro: 'Design of blanking, piercing and progressive dies used in high-volume sheet metal production.',
    items: [
      {
        image: IMG('press-tool-exploded'), title: 'Injection Mould — Exploded Design', tag: 'Mould Design',
        points: [
          'Mould base with core and cavity plates split along the parting line',
          'Guide pillars, ejector system and cooling planned for production',
        ],
      },
      {
        image: IMG('progressive-die-strip'), title: 'Progressive Die with Strip Layout', tag: 'Tool Design',
        points: [
          'Strip layout planned station by station for material economy',
          'Pilots, stoppers and stripper arranged for continuous production',
        ],
      },
      {
        image: IMG('press-die-sets'), title: 'Manufactured Die Sets', tag: 'Shop Floor',
        points: [
          'Real hardened die sets with ball-bearing guide pillars',
          'Connects CAD design to tool-room manufacturing and assembly',
        ],
      },
    ],
  },
  {
    id: 'jig-fixture',
    number: '11',
    title: 'Jig & Fixture Design',
    intro: 'Workholding that locates, clamps and guides, for accurate and repeatable machining and welding.',
    items: [
      {
        image: IMG('jig-vs-fixture'), title: 'Jig vs Fixture', tag: 'Concepts',
        points: [
          'A jig holds the work and guides the tool; a fixture holds and locates only',
          'Selection based on the operation, accuracy and production volume',
        ],
      },
      {
        image: IMG('drill-jig'), title: 'Drill Jig', tag: 'Machining',
        points: [
          'Hardened drill bushes position every hole without marking out',
          'Repeatable hole patterns for batch production',
        ],
      },
      {
        image: IMG('welding-fixture'), title: 'Welding Fixture', tag: 'Fixture Design',
        points: [
          'Toggle clamps and locators follow the 3-2-1 locating principle',
          'Holds parts in position against weld distortion for consistent quality',
        ],
      },
    ],
  },
  {
    id: 'metrology',
    number: '12',
    title: 'Metrology & Reverse Engineering',
    intro: 'Measuring physical parts accurately and rebuilding them as precise CAD models.',
    items: [
      {
        image: IMG('measuring-instruments'), title: 'Precision Measuring Instruments', tag: 'Metrology',
        points: [
          'Vernier caliper, micrometer and bevel protractor techniques',
          'Measuring outside, inside, depth and angle dimensions correctly',
        ],
      },
      {
        image: IMG('pumo-metrology-lab'), title: 'Hands-On Lab at Pumo', tag: 'Pumo Campus',
        points: [
          'Students measure real automotive and industrial components',
          'Measured data is turned into CAD models and drawings: reverse engineering',
        ],
      },
    ],
  },
  {
    id: 'industry',
    number: '13',
    title: 'Industry Applications',
    intro: 'Where these skills are used: the products, machines and processes our graduates design for.',
    items: [
      {
        image: IMG('engineering-components-blueprint'), title: 'Precision Engineering Components', tag: 'Product Engineering',
        points: [
          'Complex machined housings, gears and bearings designed from drawings',
          'The link between design intent and the manufactured part',
        ],
      },
      {
        image: IMG('centrifugal-pump'), title: 'Centrifugal Pump', tag: 'Pump Industry',
        points: [
          'Volute casing, impeller and motor coupling designed as one assembly',
          'Major employer of CAD engineers in the Coimbatore pump cluster',
        ],
      },
      {
        image: IMG('industrial-valves'), title: 'Industrial Valves', tag: 'Valve Industry',
        points: [
          'Gate, globe, ball, butterfly and check valves in many sizes',
          'Castings, sealing and pressure ratings designed to standards',
        ],
      },
      {
        image: IMG('design-engineers-review'), title: 'Design Office Review', tag: 'Career',
        points: [
          'Design engineers review 3D models with senior engineers before release',
          'Teamwork and communication that is practised throughout the program',
        ],
      },
      {
        image: IMG('special-purpose-machine'), title: 'Special Purpose Machine', tag: 'Automation',
        points: [
          'Custom SPM with conveyors, fixtures and aluminium profile frames',
          'Combines part, assembly, sheet metal and weldment skills',
        ],
      },
      {
        image: IMG('laser-cutting'), title: 'CNC Laser Cutting', tag: 'Manufacturing',
        points: [
          'Flat patterns from CAD are cut directly on fibre laser machines',
          'Accurate DXF output is critical for a perfect cut',
        ],
      },
      {
        image: IMG('manufacturing-processes'), title: 'Manufacturing Processes', tag: 'Manufacturing',
        points: [
          'Gear machining, laser cutting, CNC turning and welding',
          'Designing for manufacturability across every process',
        ],
      },
    ],
  },
];
