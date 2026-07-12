import { prisma } from "../../lib/prisma";
import {
  CreateCourseInput,
  UpdateCourseInput,
} from "./course.validator";

export const courseRepository = {
  create(data: CreateCourseInput) {
    return prisma.course.create({
      data,
      include: {
        domain: true,
      },
    });
  },

  findAll() {
    return prisma.course.findMany({
      include: {
        domain: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  findById(id: string) {
    return prisma.course.findUnique({
      where: { id },
      include: {
        domain: true,
      },
    });
  },

  findBySlug(slug: string) {
    return prisma.course.findUnique({
      where: { slug },
    });
  },

  findByDomain(domainId: string) {
    return prisma.course.findMany({
      where: {
        domainId,
      },
      include: {
        domain: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  update(id: string, data: UpdateCourseInput) {
    return prisma.course.update({
      where: {
        id,
      },
      data,
      include: {
        domain: true,
      },
    });
  },

  delete(id: string) {
    return prisma.course.delete({
      where: {
        id,
      },
    });
  },
};