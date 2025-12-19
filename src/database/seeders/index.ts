import 'dotenv/config';
import dataSource from '../data-source';
import path from 'path';
import fs from 'fs/promises';

const runSeeders = async () => {
  try {
    await dataSource.initialize();
    console.log('Database initialized');

    const filesInPath = await fs.readdir(path.join(__dirname, '..', 'seeders'));
    const files = filesInPath.filter((file) => file.endsWith('.seeder.js'));
    console.log(`Found ${files.length === 1 ? '1 seeder' : `${files.length} seeders`}`);

    for (const file of files) {
      console.log(`Loading seeder: ${file}`);
      const seederModule = await import(path.join(__dirname, '..', 'seeders', file));
      const SeederClass = seederModule.default?.default ?? seederModule.default ?? seederModule;
      
      if (!SeederClass || typeof SeederClass !== 'function') {
        console.error(`Invalid seeder module: ${file}`);
        continue;
      }

      const seederInstance = new SeederClass();
      console.log(`Seeder loaded: ${file}`);

      await seederInstance.run(dataSource);
      console.log(`Seeder completed: ${file}`);
    }
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await dataSource.destroy();
  }
};

runSeeders();