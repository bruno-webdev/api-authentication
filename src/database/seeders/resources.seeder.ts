import { User } from "src/modules/users/entities/user.entity";
import * as bcrypt from "bcrypt";
import { DataSource } from "typeorm";
import { Resource } from "src/modules/resource/entities/resource.entity";

export default class ResourcesSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const resourceRepository = dataSource.getRepository(Resource);

    const resources: Array<Partial<Resource>> = [
      {
        name: "users.findall",
        description: "Find all users",
      },
      {
        name: "users.findone",
        description: "Find one user",
      },
      {
        name: "users.myprofile",
        description: "Find the current user's profile",
      },
      {
        name: "users.create",
        description: "Create a new user",
      },
      {
        name: "users.update",
        description: "Update a user",
      },
      {
        name: "users.delete",
        description: "Delete a user",
      },
      {
        name: "users.restore",
        description: "Restore a user",
      },
      {
        name: "users.forceDelete",
        description: "Force delete a user",
      },
    ];

    for (const resource of resources) {
      const existingResource = await resourceRepository.findOne({ where: { name: resource.name } });
      if (existingResource) {
        continue;
      }
      const newResource = resourceRepository.create(resource);
      await resourceRepository.save(newResource);
    }
  }
}