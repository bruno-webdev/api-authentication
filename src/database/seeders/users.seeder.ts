import { User } from "src/modules/users/entities/user.entity";
import * as bcrypt from "bcrypt";
import { DataSource } from "typeorm";

export default class UsersSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    const users: Array<Partial<User>> = [
      {
        name: "Bruno Super",
        username: "bruno.super",
        role: "super",
        email: "bruno.super@example.com",
        password: await bcrypt.hash("123456", 10),
      },
      {
        name: "Bruno Admin",
        username: "bruno.admin",
        role: "admin",
        email: "bruno.admin@example.com",
        password: await bcrypt.hash("123456", 10),
      },
      {
        name: "Bruno Moderator",
        username: "bruno.moderator",
        role: "moderator",
        email: "bruno.moderator@example.com",
        password: await bcrypt.hash("123456", 10),
      },
      {
        name: "Bruno User",
        username: "bruno.user",
        role: "user",
        email: "bruno.user@example.com",
        password: await bcrypt.hash("123456", 10),
      },
    ];

    for (const user of users) {
      const existingUser = await userRepository.findOne({ where: { email: user.email } });
      if (existingUser) {
        continue;
      }
      const newUser = userRepository.create(user);
      await userRepository.save(newUser);
    }
  }
}