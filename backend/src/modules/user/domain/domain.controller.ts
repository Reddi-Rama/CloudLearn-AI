import { Request, Response } from "express";

import {
  createDomainService,
  getAllDomainsService,
  getDomainService,
  updateDomainService,
  deleteDomainService,
} from "./domain.service";

export async function createDomain(
  req: Request,
  res: Response
) {
  try {
    const domain = await createDomainService(req.body);

    return res.status(201).json({
      success: true,
      message: "Domain created successfully",
      data: domain,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to create domain",
    });
  }
}

export async function getAllDomains(
  req: Request,
  res: Response
) {
  try {
    const domains = await getAllDomainsService();

    return res.status(200).json({
      success: true,
      data: domains,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch domains",
    });
  }
}

export async function getDomain(
  req: Request,
  res: Response
) {
  try {
    const domain = await getDomainService(req.params.id);

    return res.status(200).json({
      success: true,
      data: domain,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Domain not found",
    });
  }
}

export async function updateDomain(
  req: Request,
  res: Response
) {
  try {
    const domain = await updateDomainService(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Domain updated successfully",
      data: domain,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to update domain",
    });
  }
}

export async function deleteDomain(
  req: Request,
  res: Response
) {
  try {
    const result = await deleteDomainService(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to delete domain",
    });
  }
}