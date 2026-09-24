import lesson1 from "./lesson1";
import lesson2 from "./lesson2";
import lesson3 from "./lesson3";
import lesson4 from "./lesson4";
import lesson5 from "./lesson5";
import lesson6 from "./lesson6";
import lesson7 from "./lesson7";
import lesson8 from "./lesson8";

import practice from "./practice";
import project from "./project";

export const module1Lessons = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
];

export {
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  practice,
  project,
};

export default {
  id: "module1",
  title: "Deep Learning Foundations",
  description:
    "Build the mathematical, computational, and conceptual foundations required to understand and implement deep learning systems.",
  lessons: module1Lessons,
  practice,
  project,
};