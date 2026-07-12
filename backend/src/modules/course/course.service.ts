import { prisma } from "../../lib/prisma";
import { courseRepository } from "./course.repository";
import {
  CreateCourseInput,
  UpdateCourseInput,
} from "./course.validator";

export const courseService = {
  async create(data: CreateCourseInput) {
    // Check duplicate slug
    const existing = await courseRepository.findBySlug(
      data.slug
    );

    if (existing) {
      throw new Error("Course slug already exists.");
    }

    // Check if domain exists
    const domain = await prisma.domain.findUnique({
      where: {
        id: data.domainId,
      },
    });

    if (!domain) {
      throw new Error("Domain not found.");
    }

    return courseRepository.create(data);
  },

  async findAll() {
    return courseRepository.findAll();
  },

  async findById(id: string) {
    const course = await courseRepository.findById(id);

    if (!course) {
      throw new Error("Course not found.");
    }

    return course;
  },

  async findByDomain(domainId: string) {
    return courseRepository.findByDomain(domainId);
  },

  async update(
    id: string,
    data: UpdateCourseInput
  ) {
    const course = await courseRepository.findById(id);

    if (!course) {
      throw new Error("Course not found.");
    }

    if (data.slug) {
      const existing = await courseRepository.findBySlug(
        data.slug
      );

      if (existing && existing.id !== id) {
        throw new Error("Course slug already exists.");
      }
    }

    return courseRepository.update(id, data);
  },

  async delete(id: string) {
    const course = await courseRepository.findById(id);

    if (!course) {
      throw new Error("Course not found.");
    }

    await courseRepository.delete(id);

    return {
      message: "Course deleted successfully.",
    };
  },
};