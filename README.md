# API Authentication

A robust authentication and authorization API built with NestJS, featuring JWT-based authentication, role-based access control (RBAC), and resource-level permissions. Designed with security and scalability in mind, this API provides a solid foundation for building enterprise-grade applications.

## ✨ Features

- 🔐 **JWT Authentication** - Secure token-based authentication
- 👥 **Role-Based Access Control** - Multiple user roles (super, admin, moderator, user)
- 🎯 **Resource-Level Permissions** - Fine-grained access control
- 📝 **Audit Logging** - Track user actions and system events
- 🐳 **Docker Ready** - Fully containerized with Docker Compose
- 🗄️ **PostgreSQL** - Reliable and performant database
- 🔄 **TypeORM Migrations** - Database version control
- 🌱 **Database Seeding** - Pre-configured test users and permissions

## 🚀 Tech Stack

- **NestJS** - Progressive Node.js framework
- **TypeORM** - Powerful ORM for TypeScript
- **PostgreSQL** - Advanced open-source database
- **JWT** - JSON Web Token for authentication
- **Docker** - Container platform
- **pnpm** - Fast, disk space efficient package manager

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** - Version 20.x or higher
- **Docker** - Latest stable version
- **Docker Compose** - Latest stable version
- **pnpm** - Version 8.x or higher (recommended)

## 🔧 Installation & Setup

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/bruno-webdev/api-authentication.git
cd api-authentication
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start Docker containers

```bash
docker-compose up -d
```

### 4. Stop API container temporarily

```bash
docker-compose stop api
```

### 5. Run database migrations

```bash
pnpm run migration:run
```

### 6. Seed the database

```bash
pnpm run seed
```

### 7. Start API container

```bash
docker-compose start api
```

The API should now be running at `http://localhost:3000`

## 🎯 Test Users

After seeding, the following test users are available:

| Name | Username | Email | Role | Password |
|------|----------|-------|------|----------|
| Bruno Super | bruno.super | bruno.super@example.com | super | 123456 |
| Bruno Admin | bruno.admin | bruno.admin@example.com | admin | 123456 |
| Bruno Moderator | bruno.moderator | bruno.moderator@example.com | moderator | 123456 |
| Bruno User | bruno.user | bruno.user@example.com | user | 123456 |

> ⚠️ **Security Note**: Change these credentials in production environments!

## 🔐 Permission System

The API implements a resource-based permission system with the following resources:

- `users.findall` - List all users
- `users.findone` - Find specific user
- `users.myprofile` - Get current user profile
- `users.create` - Create new user
- `users.update` - Update user
- `users.delete` - Soft delete user
- `users.restore` - Restore deleted user
- `users.forceDelete` - Permanently delete user

## 📁 Project Structure

```
src/
├── modules/
│   ├── auth/          # Authentication logic
│   ├── users/         # User management
│   ├── resources/     # Permission resources
│   └── audit/         # Audit logging
├── database/
│   ├── migrations/    # Database migrations
│   └── seeds/         # Database seeds
├── common/            # Shared utilities
└── config/            # Configuration files
```

## 📝 Available Scripts

```bash
# Development
pnpm run start:dev

# Production
pnpm run build
pnpm run start:prod

# Migrations
pnpm run migration:generate
pnpm run migration:run
pnpm run migration:revert

# Seeds
pnpm run seed

# Tests
pnpm run test
pnpm run test:e2e
pnpm run test:cov
```

## 🐳 Docker Commands

```bash
# View API logs
docker-compose logs -f api

# View all logs
docker-compose logs -f

# Stop all containers
docker-compose stop

# Stop and remove containers
docker-compose down

# Restart containers
docker-compose restart

# Rebuild containers
docker-compose up -d --build
```

## 🧪 Testing

```bash
# Run unit tests
pnpm run test

# Run e2e tests
pnpm run test:e2e

# Generate coverage report
pnpm run test:cov
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Bruno**

- GitHub: [@bruno-webdev](https://github.com/bruno-webdev)
- Repository: [api-authentication](https://github.com/bruno-webdev/api-authentication)

## 🙏 Acknowledgments

- NestJS team for the amazing framework
- TypeORM contributors
- All open-source contributors

---

⭐ If you find this project useful, please consider giving it a star!