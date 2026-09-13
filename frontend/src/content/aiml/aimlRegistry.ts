import * as module1Index from "./lessons/module1";
import * as module2Index from "./lessons/module2";
import * as module3Index from "./lessons/module3";
import * as module4Index from "./lessons/module4";
import * as module5Index from "./lessons/module5";
import * as module6Index from "./lessons/module6";

import * as module1About from "./lessons/module1/about";
import * as module2About from "./lessons/module2/about";
import * as module3About from "./lessons/module3/about";
import * as module4About from "./lessons/module4/about";
import * as module5About from "./lessons/module5/about";
import * as module6About from "./lessons/module6/about";

type AnyRecord = Record<string, unknown>;

export interface AIMLLessonMeta {
  id: string;
  number: number;
  title: string;
  href: string;
}

export interface AIMLModule {
  id: string;
  number: number;
  title: string;
  description: string;
  lessons: AIMLLessonMeta[];
}

export interface AIMLContent {
  title: string;
  content: string;
}

const indexMap: Record<string, AnyRecord> = {
  module1: module1Index as AnyRecord,
  module2: module2Index as AnyRecord,
  module3: module3Index as AnyRecord,
  module4: module4Index as AnyRecord,
  module5: module5Index as AnyRecord,
  module6: module6Index as AnyRecord,
};

const aboutMap: Record<string, AnyRecord> = {
  module1: module1About as AnyRecord,
  module2: module2About as AnyRecord,
  module3: module3About as AnyRecord,
  module4: module4About as AnyRecord,
  module5: module5About as AnyRecord,
  module6: module6About as AnyRecord,
};

function isRecord(value: unknown): value is AnyRecord {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

function findLessonArray(
  value: unknown,
  depth = 0
): AnyRecord[] | null {
  if (depth > 8) {
    return null;
  }

  if (Array.isArray(value)) {
    const lessonItems = value.filter(
      (item): item is AnyRecord =>
        isRecord(item) &&
        typeof item.number === "number" &&
        typeof item.title === "string"
    );

    return lessonItems.length > 0
      ? lessonItems
      : null;
  }

  if (!isRecord(value)) {
    return null;
  }

  for (const child of Object.values(value)) {
    const result = findLessonArray(
      child,
      depth + 1
    );

    if (result) {
      return result;
    }
  }

  return null;
}

function findContentObject(
  value: unknown,
  depth = 0
): AnyRecord | null {
  if (depth > 8) {
    return null;
  }

  if (!isRecord(value)) {
    return null;
  }

  if (
    typeof value.title === "string" &&
    typeof value.content === "string"
  ) {
    return value;
  }

  for (const child of Object.values(value)) {
    const result = findContentObject(
      child,
      depth + 1
    );

    if (result) {
      return result;
    }
  }

  return null;
}

function normalizeLessons(
  moduleId: string,
  source: AnyRecord
): AIMLLessonMeta[] {

  const rawLessons =
    findLessonArray(source) ?? [];

  return rawLessons
    .sort(
      (a, b) =>
        Number(a.number) -
        Number(b.number)
    )
    .map((lesson) => {

      const number =
        Number(lesson.number);

      return {
        id: `lesson${number}`,
        number,
        title: String(lesson.title),
        href:
          `/lesson/aiml/${moduleId}/lesson${number}`,
      };
    });
}

function getAbout(
  moduleId: string
): AnyRecord {
  return (
    findContentObject(
      aboutMap[moduleId]
    ) ?? {}
  );
}

export const AIML_MODULES: AIMLModule[] =
  [1, 2, 3, 4, 5, 6].map(
    (number) => {

      const id = `module${number}`;

      const about = getAbout(id);

      return {
        id,
        number,

        title:
          typeof about.title === "string"
            ? about.title
            : `Module ${String(number).padStart(2, "0")}`,

        description:
          typeof about.description === "string"
            ? about.description
            : `AI & Machine Learning Module ${number}`,

        lessons:
          normalizeLessons(
            id,
            indexMap[id]
          ),
      };
    }
  );

export function getAIMLModule(
  moduleId: string
): AIMLModule | null {
  return (
    AIML_MODULES.find(
      (module) =>
        module.id === moduleId
    ) ?? null
  );
}

function resolveLoadedContent(
  loaded: AnyRecord,
  requestedId?: string
): AIMLContent | null {

  const candidates: unknown[] = [];

  if (requestedId) {
    candidates.push(
      loaded[requestedId]
    );
  }

  candidates.push(
    loaded.default
  );

  candidates.push(
    loaded.lesson
  );

  candidates.push(
    ...Object.values(loaded)
  );

  for (const candidate of candidates) {

    if (!isRecord(candidate)) {
      continue;
    }

    if (
      typeof candidate.title === "string" &&
      typeof candidate.content === "string"
    ) {
      return {
        title: candidate.title,
        content: candidate.content,
      };
    }
  }

  return null;
}

async function loadLessonFile(
  moduleId: string,
  lessonId: string
): Promise<AnyRecord> {

  switch (moduleId) {

    case "module1":
      return (await import(
        `./lessons/module1/${lessonId}`
      )) as AnyRecord;

    case "module2":
      return (await import(
        `./lessons/module2/${lessonId}`
      )) as AnyRecord;

    case "module3":
      return (await import(
        `./lessons/module3/${lessonId}`
      )) as AnyRecord;

    case "module4":
      return (await import(
        `./lessons/module4/${lessonId}`
      )) as AnyRecord;

    case "module5":
      return (await import(
        `./lessons/module5/${lessonId}`
      )) as AnyRecord;

    case "module6":
      return (await import(
        `./lessons/module6/${lessonId}`
      )) as AnyRecord;

    default:
      throw new Error(
        `Unknown AI/ML module: ${moduleId}`
      );
  }
}

async function loadAboutFile(
  moduleId: string
): Promise<AnyRecord> {

  switch (moduleId) {

    case "module1":
      return (await import(
        "./lessons/module1/about"
      )) as AnyRecord;

    case "module2":
      return (await import(
        "./lessons/module2/about"
      )) as AnyRecord;

    case "module3":
      return (await import(
        "./lessons/module3/about"
      )) as AnyRecord;

    case "module4":
      return (await import(
        "./lessons/module4/about"
      )) as AnyRecord;

    case "module5":
      return (await import(
        "./lessons/module5/about"
      )) as AnyRecord;

    case "module6":
      return (await import(
        "./lessons/module6/about"
      )) as AnyRecord;

    default:
      throw new Error(
        `Unknown AI/ML module: ${moduleId}`
      );
  }
}

async function loadPracticeFile(
  moduleId: string
): Promise<AnyRecord> {

  switch (moduleId) {

    case "module1":
      return (await import(
        "./lessons/module1/practice"
      )) as AnyRecord;

    case "module2":
      return (await import(
        "./lessons/module2/practice"
      )) as AnyRecord;

    case "module3":
      return (await import(
        "./lessons/module3/practice"
      )) as AnyRecord;

    case "module4":
      return (await import(
        "./lessons/module4/practice"
      )) as AnyRecord;

    case "module5":
      return (await import(
        "./lessons/module5/practice"
      )) as AnyRecord;

    case "module6":
      return (await import(
        "./lessons/module6/practice"
      )) as AnyRecord;

    default:
      throw new Error(
        `Unknown AI/ML module: ${moduleId}`
      );
  }
}

async function loadProjectFile(
  moduleId: string
): Promise<AnyRecord> {

  switch (moduleId) {

    case "module1":
      return (await import(
        "./lessons/module1/project"
      )) as AnyRecord;

    case "module2":
      return (await import(
        "./lessons/module2/project"
      )) as AnyRecord;

    case "module3":
      return (await import(
        "./lessons/module3/project"
      )) as AnyRecord;

    case "module4":
      return (await import(
        "./lessons/module4/project"
      )) as AnyRecord;

    case "module5":
      return (await import(
        "./lessons/module5/project"
      )) as AnyRecord;

    case "module6":
      return (await import(
        "./lessons/module6/project"
      )) as AnyRecord;

    default:
      throw new Error(
        `Unknown AI/ML module: ${moduleId}`
      );
  }
}

export async function loadAIMLContent(
  moduleId: string,
  itemId: string
): Promise<AIMLContent | null> {

  let loaded: AnyRecord;

  if (itemId === "about") {

    loaded =
      await loadAboutFile(
        moduleId
      );

  } else if (
    itemId === "practice"
  ) {

    loaded =
      await loadPracticeFile(
        moduleId
      );

  } else if (
    itemId === "project"
  ) {

    loaded =
      await loadProjectFile(
        moduleId
      );

  } else {

    loaded =
      await loadLessonFile(
        moduleId,
        itemId
      );
  }

  return resolveLoadedContent(
    loaded,
    itemId
  );
}
