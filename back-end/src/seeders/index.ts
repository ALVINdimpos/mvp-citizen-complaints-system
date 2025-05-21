import { seedPermissions } from "./permission.seeds";
import { seedRoles } from "./role.seeds";
import { seedUsers } from "./user.seeds";
import { seedCategories } from "./category.seeds";
import logger from "../helpers/logger.helper";

export const seed = async () => {
  try {
    // Seed in order: permissions -> roles -> users -> categories
    await seedPermissions();
    await seedRoles();
    await seedUsers();
    await seedCategories();

    logger.info("All seeders completed successfully");
  } catch (error: any) {
    logger.error(`Error during seeding: ${error?.message || "Unknown error"}`);
    throw error;
  }
};
