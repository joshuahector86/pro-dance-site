export type WorkEntry = {
  id: string;
  organization: string;
  role: string;
  location: string;
  startDate: string;
  category: "company" | "freelance" | "teaching" | "performance" | "media";
  highlights: string[];
  endDate?: string | "Present";
  link?: string;
};

export const workHistory: WorkEntry[] = [
  {
    id: "nydp-company",
    organization: "New York Dance Project",
    role: "Company Member",
    location: "New York, NY",
    startDate: "2025",
    endDate: "- Present",
    category: "company",
    highlights: [
      "Soloist dancer with New York Dance Project.",
      "Repertoire: works by Roger C. Joffrey, Robert Battle, Davis Robertson and more.",
      "Debuting new works by Maleek Washing, Clifford Williams, Davis Robertson, and others.",
    ],
  },
  {
    id: "freelance-artist",
    organization: "Freelance Dance Artist",
    role: "Dance Artist and Performer",
    location: "New York, NY",
    startDate: "2019",
    endDate: "- Present",
    category: "freelance",
    highlights: [
      "Freelance dance artist working on a wide variety of projects and performing across NYC.",
      "Alvin Ailey American Dance Theater Extension.",
      "Broadway Dance Center.",
      "Labyrinth Dance Theater.",
      "Danse En L'air Ballet Company.",
      "Gatsby Entertainment.",
      "Steps on Broadway.",
      "Earl Mosley Diversity of Dance.",
    ],
  },
  {
    id: "freelance-wcs-instructor",
    organization: "West Coast Swing",
    role: "International West Coast Swing Dance Instructor and Performer",
    location: "New York, NY",
    startDate: "2019",
    endDate: "- Present",
    category: "teaching",
    highlights: [
      "Internationally recognized West Coast Swing dance instructor and performer.",
      "Regularly travels to teach, judge, and compete at international West Coast Swing events.",
      "NYC Swing community leader and instructor at various studios across the city.",
      "Numerous top placements at international West Coast Swing competitions, including All-Star and Champion level titles.",
    ],
  },
  {
    id: "ailey-whitney-figure-drawing",
    organization: "Alvin Ailey American Dance Theater Extension",
    role: "Freelance Dance Artist",
    location: "New York, NY",
    startDate: "2023",
    endDate: "- 2025",
    category: "performance",
    highlights: [
      "Dance model representing Alvin Ailey at the Whitney Museum for the Edges of Ailey exhibition.",
      "Modeling and performance expertise used to capture the iconic Alvin Ailey style of movement and dance.",
      "Performed with a group of Alvin Ailey Extension dancers for a NY1 news feature.",
      "Guest artist for performance workshops and Ailey Extension events.",
    ],
  },

  {
    id: "cornell-swing-ta",
    organization: "Cornell University",
    role: "Swing Dance Teaching Assistant",
    location: "Ithaca, NY",
    startDate: "2016",
    endDate: "- 2019",
    category: "teaching",
    highlights: [
      "Teaching assistant for Cornell University's Physical Education department.",
      "Collaborated with the head instructor to ensure curriculum completion across all Swing dance courses.",
      "Regularly directed and independently taught classes when the head teacher had other commitments.",
    ],
  },
];
