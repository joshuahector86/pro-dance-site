export type WorkEntry = {
  id: string;
  organization: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  category: "company" | "freelance" | "teaching" | "performance" | "media";
  highlights: string[];
  link?: string;
};

export const workHistory: WorkEntry[] = [
  {
    id: "nydp-company",
    organization: "New York Dance Project",
    role: "Company Member",
    location: "New York, NY",
    startDate: "June 2025",
    endDate: "Present",
    category: "company",
    highlights: [
      "Active company dancer with New York Dance Project.",
      "Repertoire includes works by Joffrey, Robert Battle, contemporary ballet, modern, and more.",
    ],
  },
  {
    id: "freelance-artist",
    organization: "Freelance",
    role: "Freelance Dance Artist and Performer",
    location: "New York, NY",
    startDate: "September 2019",
    endDate: "Present",
    category: "freelance",
    highlights: [
      "Freelance dance artist working on varying projects and performing across NYC.",
      "Collaborated with Alvin Ailey American Dance Theater Extension, Broadway Dance Center, Danse En L'air Ballet Company, Gatsby Entertainment, Steps on Broadway, Earl Mosley Diversity of Dance, and more.",
    ],
  },
  {
    id: "freelance-wcs-instructor",
    organization: "West Coast Swing",
    role: "International West Coast Swing Dance Instructor and Performer",
    location: "New York, NY",
    startDate: "September 2019",
    endDate: "Present",
    category: "teaching",
    highlights: [
      "Judge at West Coast Swing contests internationally.",
      "Lead group instruction for dancers across varying backgrounds and skill levels.",
      "Organizes and runs group classes and critiques for students at international events and home base.",
      "Private instruction available upon request.",
    ],
  },
  {
    id: "ailey-whitney-figure-drawing",
    organization: "Alvin Ailey American Dance Theater Extension",
    role: "Dance Model — Whitney Museum Edges of Ailey Figure Drawing",
    location: "New York, NY",
    startDate: "January 2025",
    endDate: "January 2025",
    category: "performance",
    highlights: [
      "Dance model representing Alvin Ailey at the Whitney Museum for the Edges of Ailey exhibition.",
      "Modeling and performance expertise used to capture the iconic Alvin Ailey style of movement and dance.",
    ],
  },
  {
    id: "ailey-ny1-news",
    organization: "Alvin Ailey American Dance Theater Extension",
    role: "Dancer — NY1 Alvin Ailey News Feature",
    location: "New York, NY",
    startDate: "July 2024",
    endDate: "July 2024",
    category: "media",
    highlights: [
      "Performed with a group of Alvin Ailey Extension dancers for a NY1 news feature.",
      "Selected as one of four dancers to learn choreography on location and perform on camera.",
    ],
    link: "https://ny1.com/nyc/all-boroughs/news/2024/07/22/the-whitney--alivin-ailey--dance--museum--culture",
  },
  {
    id: "danse-en-lair",
    organization: "Danse En L'air Ballet Company",
    role: "Dancer",
    location: "New York, NY",
    startDate: "September 2024",
    endDate: "October 2024",
    category: "company",
    highlights: [
      "Performed with Danse En L'air Ballet Company in their annual show.",
    ],
  },
  {
    id: "gatsby-entertainment",
    organization: "Gatsby Entertainment",
    role: "Dancer",
    location: "New York, NY",
    startDate: "September 2024",
    endDate: "September 2024",
    category: "performance",
    highlights: [
      "Gig performance presenting authentic Lindy Hop dancing from the Jazz era.",
    ],
  },
  {
    id: "earl-mosley",
    organization: "Earl Mosley Diversity of Dance",
    role: "Dancer — Hearts of Men 2024",
    location: "New York, NY",
    startDate: "September 2024",
    endDate: "September 2024",
    category: "performance",
    highlights: [
      "Performed in the Hearts of Men 2024 show.",
      "Received recognition and job offers based on performance skills.",
    ],
  },
  {
    id: "cornell-swing-ta",
    organization: "Cornell University",
    role: "Swing Dance Teaching Assistant",
    location: "Ithaca, NY",
    startDate: "September 2016",
    endDate: "May 2019",
    category: "teaching",
    highlights: [
      "Teaching assistant for Cornell University's Physical Education department.",
      "Collaborated with the head instructor to ensure curriculum completion across all Swing dance courses.",
      "Regularly directed and independently taught classes when the head teacher had other commitments.",
    ],
  },
];

export type Award = {
  id: string;
  title: string;
  description?: string;
};

export const awards: Award[] = [
  {
    id: "allstar-champion",
    title: "All-Star / Champion Level Swing Competitor",
  },
  {
    id: "wcs-hall-of-fame",
    title: "WCS Hall of Fame Nominee",
  },
  {
    id: "intl-placements",
    title: "Numerous Top 5 Placements at International WCS Contests",
  },
];

export type PersonalStats = {
  height: string;
  weight: string;
  bodyType: string;
  instagram: string;
  email: string;
};

export const personalStats: PersonalStats = {
  height: "6'1\"",
  weight: "180 lbs",
  bodyType: "Lean / Muscular",
  instagram: "@dimkandel",
  email: "dimitriswings@gmail.com",
};
