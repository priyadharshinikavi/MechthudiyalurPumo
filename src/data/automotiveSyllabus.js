// ============================================================
// AUTOMOTIVE DESIGN SYLLABUS — 4 Modules
// ============================================================

export const automotiveSyllabus = [
  {
    id: 1,
    module: "Module 1",
    title: "Introduction to Automotive Design",
    duration: "Week 1–2",
    topics: [
      "Automotive Design Overview — Industry Landscape and Career Scope",
      "Introduction to Automotive Plastics Design",
      "Types of Plastics Used in Automotive Industry",
      "Interior Trims — Dashboard, Door Panels, Console, Pillars",
      "Exterior Trims — Bumpers, Fenders, Claddings, Spoilers",
      "Automotive Design Process — Concept to Production",
      "Design for Manufacturability (DFM) in Automotive",
      "Class-A Surface Principles for Automotive Parts",
      "Automotive Material Selection and Standards",
    ],
  },
  {
    id: 2,
    module: "Module 2",
    title: "Automotive Body Structures",
    duration: "Week 2–4",
    topics: [
      "Introduction to Automotive Body Structures",
      "SUV Car Body Structure and Architecture",
      "Sedan Car Body Structure and Architecture",
      "Frame Mounted Body Structure (Body-on-Frame)",
      "Monocoque Body Structure (Unibody)",
      "Body in White (BIW) — Overview and Components",
      "BIW Structural Members — A-Pillar, B-Pillar, C-Pillar",
      "Floor Pan and Underbody Structure",
      "Roof Structure and Roof Reinforcement",
      "Door Structure — Inner and Outer Panel",
      "Hood, Trunk Lid and Closures Design",
      "Crash Safety Structures in BIW",
      "BIW Manufacturing Processes — Stamping, Welding, Assembly",
    ],
  },
  {
    id: 3,
    module: "Module 3",
    title: "Wiring Harness Design",
    duration: "Week 4–7",
    topics: [
      "Introduction to Automotive Wiring Harness Design",
      "Wiring Harness Components — Connectors, Terminals, Clips, Grommets",
      "Door Harness Design — Driver and Passenger Doors",
      "Roof Harness Design — Lighting and Sensor Circuits",
      "Bumper Harness Design — Front Bumper Systems",
      "Engine Harness Design — Engine Management Systems",
      "Engine Compartment Harness Design",
      "Tail Harness Design — Lighting and Rear Camera",
      "Chassis Harness Design — ABS, Suspension Sensors",
      "Dashboard Harness Design — Instrument Cluster, Infotainment",
      "Rear Bumper Harness Design — Parking Sensors, Tow Hitch",
      "Harness Routing and Clip Placement",
      "Wire Gauge Selection and Circuit Protection",
      "Harness Documentation — Schematic, Topology, BOM",
    ],
  },
  {
    id: 4,
    module: "Module 4",
    title: "Automotive Industry Overview",
    duration: "Week 7–8",
    topics: [
      "Automotive Industry Structure and Supply Chain",
      "OEM Companies — Major Global Automotive Manufacturers",
      "Tier-1 Supplier Companies — Roles and Responsibilities",
      "Tier-2 and Tier-3 Supplier Ecosystem",
      "Design and Development Process in OEM vs Tier-1",
      "APQP — Advanced Product Quality Planning",
      "PPAP — Production Part Approval Process",
      "DFMEA and PFMEA in Automotive Design",
      "Career Pathways in the Automotive Industry",
      "Industry Interview Preparation and Portfolio Building",
    ],
  },
];

// Shorter syllabus for Certification course (Modules 1-3)
export const automotiveCertSyllabus = automotiveSyllabus.slice(0, 3);
