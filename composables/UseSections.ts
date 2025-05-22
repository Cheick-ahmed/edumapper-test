import {
  schoolSubjects,
  gradeTerms,
  bacResultsTemplate,
} from "~/data/mockData";

export interface ClassData {
  grade: string;
  bacType: string;
  gradeOptions: string[];
  bacTypeOptions: string[];
}

interface Specialty {
  id: string;
  name: string;
  category: string;
  description: string;
  popularity: number;
}

export interface SpecialtyData {
  selected: string[];
  available: Specialty[];
  previousYear: string[];
  maxSelections?: number;
}

interface Subject {
  id: string;
  name: string;
  isRequired: boolean;
}

interface GradesData {
  currentTerm: string;
  terms: Array<{ id: string; name: string }>;
  subjects: Subject[];
  grades: Record<string, Record<string, number>>;
  overall: {
    term1: number;
    term2: number;
    term3: number;
    yearly: number;
  };
}

interface ExamSubject {
  id: string;
  name?: string;
  coefficient?: number;
}

interface BacResultsData {
  anticipatedExams: Array<{
    id: string;
    name?: string;
    grade: number | null;
    coefficient?: number;
    session?: string;
    status?: string;
  }>;
  terminalExams: Array<{
    id: string;
    name?: string;
    grade: number | null;
    coefficient?: number;
    session?: string;
    status?: string;
  }>;
  continuousAssessment: {
    averageGrade: number | null;
    totalCoefficient?: number;
    subjects?: ExamSubject[];
  };
  simulatedGrade: number | null;
  targetGrade: number | null;
  mention: string | null;
}

export const saveClassData = (data: ClassData) => {
  try {
    if (import.meta.client) {
      localStorage.setItem("edumapper-class-data", JSON.stringify(data));
      console.log("Données de classe sauvegardées:", data);
    }
    return true;
  } catch (error) {
    console.error("Erreur lors de la sauvegarde des données de classe:", error);
    return false;
  }
};

export const loadClassData = (): ClassData | null => {
  try {
    if (import.meta.client) {
      const savedData = localStorage.getItem("edumapper-class-data");
      if (savedData) {
        const parsedData = JSON.parse(savedData) as ClassData;
        console.log("Données de classe chargées:", parsedData);
        return parsedData;
      }
    }
  } catch (error) {
    console.error("Erreur lors du chargement des données de classe:", error);
  }
  return null;
};

export const saveSpecialtiesData = (data: SpecialtyData) => {
  try {
    if (import.meta.client) {
      localStorage.setItem("edumapper-specialties-data", JSON.stringify(data));
      console.log("Données de spécialités sauvegardées:", data);
    }
    return true;
  } catch (error) {
    console.error(
      "Erreur lors de la sauvegarde des données de spécialités:",
      error
    );
    return false;
  }
};

export const loadSpecialtiesData = (): SpecialtyData | null => {
  try {
    if (import.meta.client) {
      const savedData = localStorage.getItem("edumapper-specialties-data");
      if (savedData) {
        const parsedData = JSON.parse(savedData) as SpecialtyData;
        console.log("Données de spécialités chargées:", parsedData);
        return parsedData;
      }
    }
  } catch (error) {
    console.error(
      "Erreur lors du chargement des données de spécialités:",
      error
    );
  }
  return null;
};

export const useSections = () => {
  const savedClassData = loadClassData();
  const savedSpecialtiesData = loadSpecialtiesData();

  const simplifiedSpecialties = [
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
      id: "ses",
      name: "Sciences Économiques",
      category: "Sciences Humaines",
      description: "Économie, sociologie, sciences politiques",
      popularity: 62,
    },
    {
      id: "hlp",
      name: "Littérature",
      category: "Littéraire",
      description: "Littérature, philosophie, rhétorique",
      popularity: 45,
    },
  ];

  const classSection = {
    id: "class",
    title: "Classe",
    subtitle: "En quelle classe es-tu ?",
    icon: "academic-cap",
    isRequired: true,
    locked: false,

    data: savedClassData
      ? {
          ...savedClassData,
          gradeOptions: savedClassData.gradeOptions || [
            "Seconde",
            "Première",
            "Terminale",
          ],
          bacTypeOptions: savedClassData.bacTypeOptions || [
            "Général",
            "Technologique",
            "Professionnel",
          ],
        }
      : {
          grade: "",
          bacType: "",
          gradeOptions: ["Seconde", "Première", "Terminale"],
          bacTypeOptions: ["Général", "Technologique", "Professionnel"],
        },

    validation: {
      isComplete: (data: ClassData) => !!data.grade && !!data.bacType,
      getMessage: (data: ClassData) => {
        if (!data.grade && !data.bacType)
          return "Aucune information renseignée";
        if (!data.grade) return "Niveau de classe non renseigné";
        if (!data.bacType) return "Type de bac non renseigné";
        return `${data.grade} ${data.bacType}${
          data.bacType === "Général" ? "e" : ""
        }${data.bacType === "Professionnel" ? "le" : ""}`;
      },
    },
  };

  const specialtiesSection = {
    id: "specialties",
    title: "Spécialités",
    subtitle: "Vos spécialités (max. 2)",
    icon: "academic-cap",
    isRequired: true,
    locked: false,
    maxSelections: 2,

    data: savedSpecialtiesData
      ? {
          ...savedSpecialtiesData,
          available: simplifiedSpecialties,
        }
      : {
          selected: [] as string[],
          available: simplifiedSpecialties,
          previousYear: [] as string[],
          maxSelections: 2,
        },

    validation: {
      isComplete: (data: SpecialtyData) =>
        data.selected.length === (data.maxSelections || 2),
      getMessage: (data: SpecialtyData) => {
        if (data.selected.length === 0) return "Aucune spécialité sélectionnée";
        if (data.selected.length < (data.maxSelections || 2))
          return `${data.selected.length}/${
            data.maxSelections || 2
          } spécialités sélectionnées`;

        const selectedNames = data.selected
          .map((id) => data.available.find((s) => s.id === id)?.name || id)
          .join(", ");

        return selectedNames;
      },
    },
  };

  const gradesSection = {
    id: "grades",
    title: "Notes",
    subtitle: "Moyennes par matière",
    icon: "chart-bar",
    isRequired: true,
    locked: true,

    data: {
      currentTerm: "term2",
      terms: gradeTerms,
      subjects: schoolSubjects,
      grades: {} as Record<string, Record<string, number>>,
      overall: {
        term1: 0,
        term2: 0,
        term3: 0,
        yearly: 0,
      },
    },

    validation: {
      isComplete: (data: GradesData) => {
        const currentTermGrades = data.grades[data.currentTerm] || {};
        const requiredSubjects = data.subjects.filter(
          (s: Subject) => s.isRequired
        );
        return requiredSubjects.every(
          (subject: Subject) => currentTermGrades[subject.id] !== undefined
        );
      },
      getMessage: (data: GradesData) => {
        const currentTermGrades = data.grades[data.currentTerm] || {};
        const filledSubjects = Object.keys(currentTermGrades).length;
        const totalSubjects = data.subjects.filter(
          (s: Subject) => s.isRequired
        ).length;

        if (filledSubjects === 0) return "Aucune note saisie";
        if (filledSubjects < totalSubjects)
          return `${filledSubjects}/${totalSubjects} matières complétées`;

        let average = 0;
        switch (data.currentTerm) {
          case "term1":
            average = data.overall.term1;
            break;
          case "term2":
            average = data.overall.term2;
            break;
          case "term3":
            average = data.overall.term3;
            break;
          default:
            average = data.overall.yearly;
        }

        return `Moyenne générale : ${average.toFixed(1)}/20`;
      },
    },
  };

  const bacResultsSection = {
    id: "bac-results",
    title: "Résultats au bac",
    subtitle: "Épreuves anticipées et terminales",
    icon: "trophy",
    isRequired: false,
    locked: true,

    data: {
      ...bacResultsTemplate,
      simulatedGrade: null as number | null,
      targetGrade: null as number | null,
      mention: null as string | null,
    },

    validation: {
      isComplete: (data: BacResultsData) => {
        return data.anticipatedExams.every(
          (exam) => exam.status === "completed" && exam.grade !== null
        );
      },
      getMessage: (data: BacResultsData) => {
        const completedAnticipated = data.anticipatedExams.filter(
          (e) => e.grade !== null
        ).length;
        const totalAnticipated = data.anticipatedExams.length;

        if (completedAnticipated === 0) return "Aucun résultat saisi";
        if (completedAnticipated < totalAnticipated) {
          return `${completedAnticipated}/${totalAnticipated} épreuves anticipées`;
        }

        const anticipatedSum = data.anticipatedExams.reduce(
          (sum: number, exam) => sum + (exam.grade || 0),
          0
        );
        const anticipatedAvg = anticipatedSum / data.anticipatedExams.length;

        return `Épreuves anticipées : ${anticipatedAvg.toFixed(1)}/20`;
      },
    },
  };

  const allSections = [
    classSection,
    specialtiesSection,
    gradesSection,
    bacResultsSection,
  ];

  return {
    allSections,
    classSection,
    specialtiesSection,
    gradesSection,
    bacResultsSection,
  };
};

export const getSectionsByCategory = () => {
  const { allSections } = useSections();

  return {
    essential: allSections.filter((s) => s.isRequired),
    optional: allSections.filter((s) => !s.isRequired),
    academic: allSections.filter((s) =>
      ["specialties", "grades", "languages", "class"].includes(s.id)
    ),
    personal: allSections.filter((s) =>
      ["options", "orientation"].includes(s.id)
    ),
    results: allSections.filter((s) => s.id === "bac-results"),
  };
};

export const getProfileCompletion = (): number => {
  const { allSections } = useSections();

  let completedSections = 0;
  let totalSections = 0;

  for (const section of allSections) {
    if (section.isRequired) {
      totalSections++;
      if (section.validation?.isComplete?.(section.data as any)) {
        completedSections++;
      }
    }
  }

  return totalSections > 0 ? (completedSections / totalSections) * 100 : 0;
};
