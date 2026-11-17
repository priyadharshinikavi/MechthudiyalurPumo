// ============================================================
// CENTRAL COURSE DATA — Edit all course info here
// ============================================================

export const courses = [
  {
    id: "masters-industrial-design",
    title: "Masters in Industrial Design",
    shortTitle: "M.ID",
    category: "industrial-design",
    categoryLabel: "Industrial Design",
    badge: "Master's Program",
    badgeType: "masters",
    duration: "2–3 Months",
    level: "Advanced",
    software: ["AutoCAD", "SolidWorks", "Creo"],
    topics: [
      "Part Modelling",
      "Assembly Design",
      "Sheet Metal",
      "Surface Modelling",
      "Tool & Die Design",
      "GD&T",
    ],
    description:
      "A comprehensive Master's program covering the complete spectrum of industrial design — from CADD fundamentals through advanced surface modelling, tool and die design, jig and fixture design, and real-world industrial projects.",
    shortDescription:
      "Master the complete industrial design workflow with AutoCAD, SolidWorks & Creo.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
    highlights: [
      "15 comprehensive modules",
      "Hands-on project-based learning",
      "Industry-standard software training",
      "GD&T and Reverse Engineering",
      "Tool & Die and Jig & Fixture Design",
    ],
    careerOpportunities: [
      "CAD Design Engineer",
      "Product Design Engineer",
      "Mechanical Design Engineer",
      "Tool Design Engineer",
      "Jig & Fixture Design Engineer",
      "Reverse Engineering Specialist",
    ],
    syllabusKey: "industrial",
  },
  {
    id: "certified-industrial-design",
    title: "Certified in Industrial Design",
    shortTitle: "C.ID",
    category: "industrial-design",
    categoryLabel: "Industrial Design",
    badge: "Certification Program",
    badgeType: "certified",
    duration: "2 Months",
    level: "Intermediate",
    software: ["AutoCAD", "SolidWorks"],
    topics: [
      "CADD Fundamentals",
      "Part Modelling",
      "Assembly Design",
      "Sheet Metal",
      "Drafting",
    ],
    description:
      "An intensive certification program for engineers looking to quickly gain industry-ready CAD skills using AutoCAD and SolidWorks. Covers core design workflows from sketching through part modelling, assemblies and professional drafting.",
    shortDescription:
      "Get industry-certified in Industrial Design using AutoCAD & SolidWorks.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=80",
    highlights: [
      "Core industrial design modules",
      "AutoCAD 2D & 3D workflow",
      "SolidWorks part & assembly",
      "Professional drawing creation",
      "Industry certification on completion",
    ],
    careerOpportunities: [
      "CAD Draughtsman",
      "Junior Design Engineer",
      "CAD Modelling Specialist",
      "Design Technician",
      "Manufacturing Support Engineer",
    ],
    syllabusKey: "industrial-cert",
  },
  {
    id: "masters-automotive-design",
    title: "Masters in Automotive Design",
    shortTitle: "M.AD",
    category: "automotive-design",
    categoryLabel: "Automotive Design",
    badge: "Master's Program",
    badgeType: "masters",
    duration: "4–5 Months",
    level: "Advanced",
    software: ["AutoCAD", "Creo", "CATIA"],
    topics: [
      "Automotive Trims",
      "BIW Design",
      "Wiring Harness",
      "Interior Trims",
      "Exterior Trims",
    ],
    description:
      "The most comprehensive automotive design program available, covering the full vehicle development lifecycle — from automotive plastics design through body-in-white structures, interior and exterior trims, and complete wiring harness design using industry-standard tools.",
    shortDescription:
      "Master automotive design from BIW structures to wiring harness with CATIA & Creo.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
    highlights: [
      "Complete automotive design lifecycle",
      "BIW & body structure engineering",
      "Interior & exterior trim design",
      "9-harness wiring design modules",
      "OEM & Tier-1 industry alignment",
    ],
    careerOpportunities: [
      "Automotive Design Engineer",
      "BIW Design Engineer",
      "Wiring Harness Design Engineer",
      "Interior Trim Designer",
      "Exterior Trim Designer",
      "Automotive Plastics Engineer",
    ],
    syllabusKey: "automotive",
  },
  {
    id: "certified-automotive-design",
    title: "Certified in Automotive Design",
    shortTitle: "C.AD",
    category: "automotive-design",
    categoryLabel: "Automotive Design",
    badge: "Certification Program",
    badgeType: "certified",
    duration: "3–4 Months",
    level: "Intermediate",
    software: ["AutoCAD", "Creo", "CATIA", "NX CAD"],
    topics: [
      "Automotive Body Structures",
      "Plastics Design",
      "BIW Components",
      "Harness Basics",
    ],
    description:
      "A focused certification program for engineers entering the automotive design industry. Covers automotive body structures, BIW design principles, and foundational wiring harness design across four leading industry software platforms.",
    shortDescription:
      "Earn your automotive design certification across CATIA, Creo, NX CAD & AutoCAD.",
    image:
      "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=600&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=400&q=80",
    highlights: [
      "4 industry-standard software tools",
      "Automotive body structure engineering",
      "BIW & plastic components",
      "Wiring harness fundamentals",
      "OEM-aligned curriculum",
    ],
    careerOpportunities: [
      "Junior Automotive Designer",
      "CAD Engineer (Automotive)",
      "BIW Support Engineer",
      "Harness Design Trainee",
      "Automotive Tooling Engineer",
    ],
    syllabusKey: "automotive-cert",
  },
];

export const getCourseById = (id) => courses.find((c) => c.id === id);

export const getCoursesByCategory = (category) => {
  if (!category || category === "all") return courses;
  return courses.filter((c) => c.category === category);
};
