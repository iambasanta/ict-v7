## Getting started

- Fork the repository and clone it

```bash
git clone git@github.com:{username}/ICTv7-Backend.git ict-v7-backend
```

- Change directory to the project directory

```bash
cd ict-v7-backend
```

- Install dependencies

```bash
npm install
```

- Copy the `.env.example` file to `.env`

```bash
cp .env.example .env
```

Open the `.env` file and update the `PORT` value to your preferred port number.

- Start the API in development mode

```bash
npm run dev
```

- Build api

```bash
npm run build
```

- Start the API in production mode

```bash
npm start
```

## Use docker

Make sure you have installed `docker` in your system.

- Build and start docker container

```bash
docker-compose  up -d --build
```

- Access database via terminal

```bash
docker exec -it ict_pg psql -U root -d ict_meetup_v7
```
