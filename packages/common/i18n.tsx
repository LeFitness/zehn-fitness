enum Languages {
  English,
  Spanish,
}

export enum Messages {
  CreateWorkout = "CreateWorkout",
  EnterWorkoutName = "EnterWorkoutName",
  WorkoutSuccessfullyCreated = "WorkoutSuccessfullyCreated",
}

type i18nLanguage = {
  [key in Messages]: string;
};

const en: i18nLanguage = {
  CreateWorkout: "Create Workout",
  EnterWorkoutName: "Enter workout name",
  WorkoutSuccessfullyCreated: "Workout successfully created!",
};

const es: i18nLanguage = {
  CreateWorkout: "Crear Entrenamiento",
  EnterWorkoutName: "Ingrese el nombre del entrenamiento",
  WorkoutSuccessfullyCreated: "¡Entrenamiento creado con éxito!",
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
