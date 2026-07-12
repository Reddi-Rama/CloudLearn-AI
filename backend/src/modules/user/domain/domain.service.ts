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

export async function createDomainService(
  data: CreateDomainInput
) {
  const existing = await findDomainBySlug(data.slug);

  if (existing) {
    throw new Error("Domain already exists");
  }

  return createDomain(data);
}

export async function getAllDomainsService() {
  return getAllDomains();
}

export async function getDomainService(
  id: string
) {
  const domain = await getDomainById(id);

  if (!domain) {
    throw new Error("Domain not found");
  }

  return domain;
}

export async function updateDomainService(
  id: string,
  data: UpdateDomainInput
) {
  const domain = await getDomainById(id);

  if (!domain) {
    throw new Error("Domain not found");
  }

  if (data.slug) {
    const existing = await findDomainBySlug(data.slug);

    if (
      existing &&
      existing.id !== id
    ) {
      throw new Error(
        "Slug already exists"
      );
    }
  }

  return updateDomain(id, data);
}

export async function deleteDomainService(
  id: string
) {
  const domain = await getDomainById(id);

  if (!domain) {
    throw new Error("Domain not found");
  }

  await deleteDomain(id);

  return {
    message: "Domain deleted successfully",
  };
}