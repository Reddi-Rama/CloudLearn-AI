import { prisma } from "../../lib/prisma";
import {
  CreateModuleInput,
  UpdateModuleInput,
} from "./module.validator";

export const moduleRepository = {
  create(data: CreateModuleInput) {
    return prisma.module.create({
      data,
      include: {
        course: true,
      },
    });
  },

  findAll() {
    return prisma.module.findMany({
      include: {
        course: true,
      },
      orderBy: {
        position: "asc",
      },
    });
  },

  findById(id: string) {
    return prisma.module.findUnique({
      where: {
        id,
      },
      include: {
        course: true,
      },
    });
  },

  findByCourse(courseId: string) {
    return prisma.module.findMany({
      where: {
        courseId,
      },
      include: {
        course: true,
      },
      orderBy: {
        position: "asc",
      },
    });
  },

  update(
    id: string,
    data: UpdateModuleInput
  ) {
    return prisma.module.update({
      where: {
        id,
      },
      data,
      include: {
        course: true,
      },
    });
  },

  delete(id: string) {
    return prisma.module.delete({
      where: {
        id,
      },
    });
  },
};