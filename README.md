### Ngx-Admin Angular 14 application from akveo.com and bondar-artem 

This is a modified and lightweight version of the original application, designed for practicing UI Automation with Playwright.

---

### Original Repositories

- [Ngx-Admin by Akveo](https://github.com/akveo/ngx-admin)
- [Playwright Practice App by bondar-artem](https://github.com/bondar-artem/pw-practice-app)

---

### Setup Instructions for Installing Playwright

To set up the project, run the following command:

```bash
npm init playwright@latest --force
```

When prompted, select the following options:

1. **Where to put your end-to-end tests?**: `.` (current directory)
2. **Choose a language**: `TypeScript`
3. **Add a GitHub Actions workflow?**: `Yes`
4. **Install Playwright browsers?**: `Yes`

---

### Running the Application

To run the app, open a terminal, navigate to the repository root directory (`pw-practice-app`), and execute the following command:

```bash
npm start
```

If everything is set up correctly, you should see:

```
✔ Compiled successfully.
```

You can then open the app at [http://localhost:4200/](http://localhost:4200/).

---

### Docker Commands

Make sure docker is installed on your system .

#### Build the Docker Image

Run the following command to build the Docker image that has npm and playwrigth installed:

```bash
docker build -t firsttest-test .
```

#### Start the Application with Docker Compose

Use the following command to build, start the web application and then run the tests:

```bash
docker-compose up --build
```

#### Optional: Enable Docker Compose Bake

You can export the `COMPOSE_BAKE=true` environment variable to enable Docker Compose to delegate builds to Docker Buildx Bake for improved performance:

```bash
export COMPOSE_BAKE=true
```