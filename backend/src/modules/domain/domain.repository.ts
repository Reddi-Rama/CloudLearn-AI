import { prisma } from "../../lib/prisma";

export const createDomain = (data: {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}) => {
  return prisma.domain.create({
    data,
  });
};

export const findDomainBySlug = (slug: string) => {
  return prisma.domain.findUnique({
    where: {
      slug,
    },
  });
};

export const getAllDomains = () => {
  return prisma.domain.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getDomainById = (id: string) => {
  return prisma.domain.findUnique({
    where: {
      id,
    },
  });
};

export const updateDomain = (
  id: string,
  data: {
    name?: string;
    slug?: string;
    description?: string;
    icon?: string;
  }
) => {
  return prisma.domain.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteDomain = (id: string) => {
  return prisma.domain.delete({
    where: {
      id,
    },
  });
};