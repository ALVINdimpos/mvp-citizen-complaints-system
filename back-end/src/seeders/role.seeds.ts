import { RoleService } from "../services/role.service";
import logger from "../helpers/logger.helper";
import { PermissionsService } from "../services/permission.service";
import { RolePermissionService } from "../services/rolePermission.service";

// LOAD SERVICES
const roleService = new RoleService();
const permissionsService = new PermissionsService();
const rolePermissionService = new RolePermissionService();

export const seedRoles = async () => {
  try {
    // CHECK IF SUPER ADMIN ROLE EXISTS
    let superAdminRole = await roleService.getRoleByName("SUPER_ADMIN");

    // CREATE SUPER ADMIN ROLE IF IT DOESN'T EXIST
    if (!superAdminRole) {
      superAdminRole = await roleService.createRole({
        name: "SUPER_ADMIN",
        description: "Super admin role",
      });
    }

    // ASSIGN IT ALL PERMISSIONS
    const { rows: permissionsList } = await permissionsService.fetchPermissions(
      {
        page: 0,
        size: 1000,
        condition: {},
      }
    );

    // ASSIGN PERMISSIONS TO ROLE
    await rolePermissionService.assignPermissionsToRole({
      roleId: superAdminRole?.id,
      permissions: permissionsList.map((permission) => permission?.id),
    });

    logger.info(`Roles seeded successfully`);
  } catch (error: any) {
    logger.error(`Error seeding roles: ${error?.message || "Unknown error"}`);
    throw error;
  }
};
