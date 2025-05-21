import { CategoryService } from "../services/category.service";
import logger from "../helpers/logger.helper";

// LOAD SERVICES
const categoryService = new CategoryService();

export const seedCategories = async () => {
  try {
    // Define common categories for a citizen complaints system
    const categories = [
      {
        name: "Infrastructure",
        description:
          "Complaints related to roads, bridges, public buildings, and other physical infrastructure",
      },
      {
        name: "Public Services",
        description:
          "Complaints about government services like healthcare, education, and social services",
      },
      {
        name: "Public Safety",
        description:
          "Complaints regarding police, fire services, and emergency response",
      },
      {
        name: "Environmental",
        description:
          "Complaints about pollution, waste management, and environmental issues",
      },
      {
        name: "Transportation",
        description:
          "Complaints related to public transportation, traffic, and road safety",
      },
      {
        name: "Utilities",
        description:
          "Complaints about water, electricity, and other utility services",
      },
      {
        name: "Housing",
        description:
          "Complaints about public housing, property issues, and urban development",
      },
      {
        name: "Corruption",
        description:
          "Reports of corruption, fraud, or misuse of public resources",
      },
      {
        name: "Administrative",
        description:
          "Complaints about administrative processes, documentation, and bureaucracy",
      },
      {
        name: "Other",
        description: "Complaints that don't fit into other categories",
      },
    ];

    // Create each category
    for (const category of categories) {
      await categoryService.createCategory(category);
    }

    logger.info(`Categories seeded successfully`);
  } catch (error: any) {
    logger.error(
      `Error seeding categories: ${error?.message || "Unknown error"}`
    );
    throw error;
  }
};
