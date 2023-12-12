# Hive

A social network platform using RwactJs for client side and ASP Core Web API 8 for backend

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Brief introduction about your project, its purpose, and key features.

## Prerequisites

List of prerequisites or dependencies required to run the project. Include links to installation guides if needed.

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Swagger](https://swagger.io/)

## Getting Started

Instructions on how to set up and run the project on a local machine.

```bash
# Clone the repository
git clone https://github.com/yourusername/yourproject.git
```

# Navigate to the project directory
``` cd yourproject ```

# Restore dependencies
``` dotnet restore ```

# Apply database migrations
``` dotnet ef database update ```

# Run the project
``` dotnet run ```

## Project Structure

The project is organized into several key directories, each serving a specific purpose:

- **API**: This directory contains controllers and middleware responsible for handling API requests. Controllers define the API endpoints, while middleware handles tasks such as exception handling and logging.

- **Application**: The `Application` directory houses the application logic and use case implementations. Here, you'll find the core functionality that processes and orchestrates business logic.

- **Domain**: The `Domain` directory is dedicated to defining domain models and entities. These models represent the core business entities and their relationships, providing a conceptual framework for the application.

- **Persistence**: In the `Persistence` directory, you'll find code related to data access and the database context. This includes the Entity Framework Core configurations, migrations, and the database context class.

- **Application.Core**: This directory contains shared core functionality that is used across the application. It might include utility classes, extension methods, or other shared components.


## API Endpoints

The API exposes the following endpoints:

- **GET /api/activities**: Retrieve a list of activities.
- **GET /api/activities/{id}**: Retrieve details of a specific activity by its unique ID.
- **POST /api/activities**: Create a new activity.
- **PUT /api/activities/{id}**: Edit an existing activity by specifying its ID.
- **DELETE /api/activities/{id}**: Delete an activity using its ID.

These endpoints allow users to interact with the application, perform CRUD operations on activities, and retrieve relevant information.
