import {
  createDomain,
  deleteDomain,
  findDomainBySlug,
  getAllDomains,
  getDomainById,
  updateDomain,
} from "./domain.repository";

import {
  CreateDomainInput,
  UpdateDomainInput,
} from "./domain.validator";

export const domainService = {
  async create(data: CreateDomainInput) {
    const existing = await findDomainBySlug(data.slug);

    if (existing) {
      throw new Error("Domain already exists");
    }

    return createDomain(data);
  },

  async findAll() {
    return getAllDomains();
  },

  async findById(id: string) {
    const domain = await getDomainById(id);

    if (!domain) {
      throw new Error("Domain not found");
    }

    return domain;
  },

  async update(
    id: string,
    data: UpdateDomainInput
  ) {
    const domain = await getDomainById(id);

    if (!domain) {
      throw new Error("Domain not found");
    }

    if (data.slug) {
      const existing = await findDomainBySlug(
        data.slug
      );

      if (
        existing &&
        existing.id !== id
      ) {
        throw new Error("Slug already exists");
      }
    }

    return updateDomain(id, data);
  },

  async delete(id: string) {
    const domain = await getDomainById(id);

    if (!domain) {
      throw new Error("Domain not found");
    }

    await deleteDomain(id);

    return {
      message: "Domain deleted successfully",
    };
  },
};