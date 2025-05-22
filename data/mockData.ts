export const availableSpecialties = [
  {
    id: "maths",
    name: "Mathématiques",
    category: "Scientifique",
    description: "Algèbre, analyse, géométrie, probabilités",
    popularity: 95,
  },
  {
    id: "physique-chimie",
    name: "Physique-Chimie",
    category: "Scientifique",
    description: "Mécanique, thermodynamique, chimie organique",
    popularity: 78,
  },
  {
    id: "svt",
    name: "Sciences de la Vie et de la Terre",
    category: "Scientifique",
    description: "Biologie, géologie, écologie",
    popularity: 65,
  },
  {
    id: "ses",
    name: "Sciences Économiques et Sociales",
    category: "Sciences Humaines",
    description: "Économie, sociologie, sciences politiques",
    popularity: 62,
  },
  {
    id: "hggsp",
    name: "Histoire-Géographie, Géopolitique et Sciences Politiques",
    category: "Sciences Humaines",
    description: "Histoire contemporaine, géopolitique mondiale",
    popularity: 58,
  },
  {
    id: "hlp",
    name: "Humanités, Littérature et Philosophie",
    category: "Littéraire",
    description: "Littérature, philosophie, rhétorique",
    popularity: 45,
  },
  {
    id: "llcer-anglais",
    name: "LLCER Anglais",
    category: "Langues",
    description: "Littérature et civilisation anglaise/américaine",
    popularity: 42,
  },
  {
    id: "nsi",
    name: "Numérique et Sciences Informatiques",
    category: "Scientifique",
    description: "Programmation, algorithmique, bases de données",
    popularity: 38,
  },
  {
    id: "arts-plastiques",
    name: "Arts Plastiques",
    category: "Artistique",
    description: "Dessin, peinture, sculpture, art numérique",
    popularity: 25,
  },
  {
    id: "llcer-espagnol",
    name: "LLCER Espagnol",
    category: "Langues",
    description: "Littérature et civilisation hispanophone",
    popularity: 22,
  },
  {
    id: "biologie-ecologie",
    name: "Biologie-Écologie",
    category: "Scientifique",
    description: "Écosystèmes, biodiversité, développement durable",
    popularity: 15,
  },
  {
    id: "theatre",
    name: "Théâtre",
    category: "Artistique",
    description: "Jeu dramatique, mise en scène, histoire du théâtre",
    popularity: 12,
  },
];

export const schoolSubjects = [
  {
    id: "francais",
    name: "Français",
    category: "Tronc commun",
    coefficient: 5,
    hasOralExam: true,
    isRequired: true,
  },
  {
    id: "philosophie",
    name: "Philosophie",
    category: "Tronc commun",
    coefficient: 4,
    hasOralExam: false,
    isRequired: true,
  },
  {
    id: "histoire-geo",
    name: "Histoire-Géographie",
    category: "Tronc commun",
    coefficient: 3,
    hasOralExam: false,
    isRequired: true,
  },
  {
    id: "lv1-anglais",
    name: "LV1 Anglais",
    category: "Langues",
    coefficient: 3,
    hasOralExam: true,
    isRequired: true,
  },
  {
    id: "lv2-espagnol",
    name: "LV2 Espagnol",
    category: "Langues",
    coefficient: 2,
    hasOralExam: true,
    isRequired: true,
  },
  {
    id: "eps",
    name: "EPS",
    category: "Sport",
    coefficient: 2,
    hasOralExam: false,
    isRequired: true,
  },
  {
    id: "enseignement-scientifique",
    name: "Enseignement Scientifique",
    category: "Tronc commun",
    coefficient: 2,
    hasOralExam: false,
    isRequired: true,
  },
  {
    id: "maths-spe",
    name: "Mathématiques (spé)",
    category: "Spécialité",
    coefficient: 16,
    hasOralExam: false,
    isRequired: false,
  },
  {
    id: "physique-chimie-spe",
    name: "Physique-Chimie (spé)",
    category: "Spécialité",
    coefficient: 16,
    hasOralExam: false,
    isRequired: false,
  },
];

export const bacResultsTemplate = {
  anticipatedExams: [
    {
      id: "francais-ecrit",
      name: "Français écrit",
      coefficient: 5,
      grade: null,
      session: "Juin 2024",
      status: "completed", // completed, pending, not-taken
    },
    {
      id: "francais-oral",
      name: "Français oral",
      coefficient: 5,
      grade: null,
      session: "Juin 2024",
      status: "completed",
    },
  ],

  terminalExams: [
    {
      id: "philosophie",
      name: "Philosophie",
      coefficient: 8,
      grade: null,
      session: "Juin 2025",
      status: "pending",
    },
    {
      id: "grand-oral",
      name: "Grand Oral",
      coefficient: 10,
      grade: null,
      session: "Juin 2025",
      status: "pending",
    },
    {
      id: "specialite-1",
      name: "Spécialité 1",
      coefficient: 16,
      grade: null,
      session: "Juin 2025",
      status: "pending",
    },
    {
      id: "specialite-2",
      name: "Spécialité 2",
      coefficient: 16,
      grade: null,
      session: "Juin 2025",
      status: "pending",
    },
  ],

  continuousAssessment: {
    totalCoefficient: 40,
    averageGrade: null,
    subjects: [],
  },
};

export const availableSchools = [
  {
    id: "gaston-berger",
    name: "Lycée Gaston Berger",
    location: "Lille",
    type: "Lycée Public",
    region: "Hauts-de-France",
    ranking: 145,
    studentCount: 1250,
    specialties: ["Sciences", "Économie", "Littéraire"],
    isCurrentSchool: true,
  },
  {
    id: "faidherbe",
    name: "Lycée Faidherbe",
    location: "Lille",
    type: "Lycée Public",
    region: "Hauts-de-France",
    ranking: 89,
    studentCount: 1800,
    specialties: ["CPGE", "Sciences", "Économie"],
    isCurrentSchool: false,
  },
  {
    id: "montebello",
    name: "Lycée International Montebello",
    location: "Lille",
    type: "Lycée Public",
    region: "Hauts-de-France",
    ranking: 56,
    studentCount: 950,
    specialties: ["International", "Langues", "Sciences"],
    isCurrentSchool: false,
  },
  {
    id: "saint-paul",
    name: "Institution Saint-Paul",
    location: "Lille",
    type: "Lycée Privé",
    region: "Hauts-de-France",
    ranking: 32,
    studentCount: 650,
    specialties: ["Excellence", "Sciences", "Humanités"],
    isCurrentSchool: false,
  },
  {
    id: "notre-dame-paix",
    name: "Lycée Notre-Dame de la Paix",
    location: "Lille",
    type: "Lycée Privé",
    region: "Hauts-de-France",
    ranking: 78,
    studentCount: 820,
    specialties: ["Sciences", "Arts", "Économie"],
    isCurrentSchool: false,
  },
];

export const gradeTerms = [
  { id: "term1", name: "1er Trimestre", period: "Sept - Déc 2024" },
  { id: "term2", name: "2ème Trimestre", period: "Jan - Mars 2025" },
  { id: "term3", name: "3ème Trimestre", period: "Avril - Juin 2025" },
];

export const bacMentions = [
  {
    id: "passable",
    name: "Passable",
    minGrade: 10,
    maxGrade: 11.99,
    color: "gray",
  },
  {
    id: "assez-bien",
    name: "Assez Bien",
    minGrade: 12,
    maxGrade: 13.99,
    color: "blue",
  },
  { id: "bien", name: "Bien", minGrade: 14, maxGrade: 15.99, color: "green" },
  {
    id: "tres-bien",
    name: "Très Bien",
    minGrade: 16,
    maxGrade: 20,
    color: "gold",
  },
];

export const sampleStudentProfile = {
  personal: {
    firstName: "Marie",
    lastName: "Dupont",
    birthDate: "2006-03-15",
    email: "marie.dupont@lycee-gaston-berger.fr",
  },

  academic: {
    currentGrade: "Terminale",
    bacType: "Générale",
    school: availableSchools[0],

    specialties: ["maths", "physique-chimie", "nsi"],

    languages: {
      lv1: "anglais",
      lv2: "espagnol",
      lv3: null,
    },

    options: ["latin", "arts-plastiques-option"],

    grades: {
      term1: {
        "maths-spe": 15.5,
        "physique-chimie-spe": 14.2,
        nsi: 16.8,
        francais: 13.5,
        "histoire-geo": 14.0,
        "lv1-anglais": 15.2,
        "lv2-espagnol": 12.8,
        eps: 16.0,
        philosophie: 12.5,
      },
      term2: {
        "maths-spe": 16.2,
        "physique-chimie-spe": 15.1,
        nsi: 17.2,
        philosophie: 13.8,
        "histoire-geo": 14.5,
        "lv1-anglais": 15.8,
        "lv2-espagnol": 13.2,
        eps: 15.5,
      },
    },

    bacResults: {
      anticipatedExams: [
        { id: "francais-ecrit", grade: 14 },
        { id: "francais-oral", grade: 16 },
      ],
      terminalExams: [], // À remplir en Terminale
      continuousAssessment: {
        averageGrade: 14.8,
      },
    },
  },

  preferences: {
    targetFormations: [
      "Classe Préparatoire Scientifique",
      "École d'Ingénieur",
      "Licence Informatique",
    ],
    preferredRegions: ["Hauts-de-France", "Île-de-France"],
    maxDistance: 300, // km
    acceptsPrivateSchools: true,
    budgetRange: "moins_5000",
  },
};

export default {
  availableSpecialties,
  schoolSubjects,
  bacResultsTemplate,
  availableSchools,
  gradeTerms,
  bacMentions,
  sampleStudentProfile,
};
