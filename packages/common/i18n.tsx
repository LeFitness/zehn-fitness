enum Languages {
  English,
  Spanish,
}

export enum Messages {
  Home = "Home",
  CreateWorkout = "CreateWorkout",
  EnterWorkoutName = "EnterWorkoutName",
  WorkoutSuccessfullyCreated = "WorkoutSuccessfullyCreated",
  ExerciseList = "ExerciseList",
}

type i18nLanguage = {
  [key in Messages]: string;
};

const en: i18nLanguage = {
  Home: "Home",
  CreateWorkout: "Create Workout",
  EnterWorkoutName: "Enter workout name",
  WorkoutSuccessfullyCreated: "Workout successfully created!",
  ExerciseList: "Exercise List",
};

const es: i18nLanguage = {
  Home: "Hogar",
  CreateWorkout: "Crear Entrenamiento",
  EnterWorkoutName: "Ingrese el nombre del entrenamiento",
  WorkoutSuccessfullyCreated: "¡Entrenamiento creado con éxito!",
  ExerciseList: "Lista de ejercicios",
};

export default function i18nString(key: Messages): string {
  const curLang: Languages = Languages.English;
  let language: i18nLanguage;
  switch (curLang) {
    // @ts-ignore: eventually curLang will not be hardcoded to english
    case Languages.Spanish:
      language = es;
      break;
    case Languages.English:
    default:
      language = en;
      break;
  }

  return language[key];
}
