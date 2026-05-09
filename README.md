# Lab-3 Grubhub (MySQL + React)

A multi-tier restaurant delivery system built with a focus on data relational modeling and modern React patterns.

## Stack

<a href="https://react.dev"><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=000" alt="React" /></a>
<a href="https://vite.dev"><img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" /></a>
<a href="https://expressjs.com"><img src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white" alt="Express" /></a>
<a href="https://www.mysql.com"><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL" /></a>
<a href="https://www.docker.com"><img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker" /></a>

## Modernization

- **NPM Workspaces**: Unified monorepo structure.
- **Vite**: Modern build pipeline for the React frontend.
- **Native ESM**: Clean ESM migration for the backend.
- **Dockerized DB**: Simplified local setup with Docker Compose.

## Getting Started

### Prerequisites

- Node.js (v20+)
- Docker

### Setup & Run

1. **DB**: `docker-compose up -d`
2. **Install**: `npm install --legacy-peer-deps`
3. **Backend**: `npm run start:server`
4. **Frontend**: `npm run start:client`
