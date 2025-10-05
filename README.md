# 🚀 React Frontend App — Dockerized with CI/CD (GitHub Actions + Render)

This project is a **React-based frontend** application that is fully **containerized using Docker** and automatically **built, tested, and deployed** through a **CI/CD pipeline** powered by **GitHub Actions** and **Render**.

##Link
https://portfolio-live-docker-ci-cd.onrender.com

## 🧱 Project Overview

This project demonstrates how to:
- Dockerize a React app for production using **Nginx**
- Automate build and deployment using **GitHub Actions**
- Host the containerized app on **Render** (free hosting)
- Implement a clean CI/CD workflow for frontend applications

## 🧩 Tech Stack

| Tool | Purpose |
|------|----------|
| **React** | Frontend framework |
| **Docker** | Containerization |
| **Nginx** | Web server for serving static React build |
| **GitHub Actions** | CI/CD automation |
| **Docker Hub** | Container image registry |
| **Render** | Deployment platform (auto pulls and runs container) |

## ⚙️ Folder Structure

```
my-react-app/
 ├── public/
 ├── src/
 ├── package.json
 ├── Dockerfile
 ├── .dockerignore
 ├── .github/
 │    └── workflows/
 │         └── deploy.yml
 └── README.md
```

## 🐳 Docker Setup

### 1️⃣ Build Docker Image
```bash
docker build -t my-react-app .
```

### 2️⃣ Run Container Locally
```bash
docker run -d -p 3000:80 my-react-app
```
Then open: 👉 [http://localhost:3000](http://localhost:3000)

## 📦 Dockerfile Explanation

```dockerfile
# Step 1: Build the React app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

✅ This two-stage Docker build:
- Compiles your React app in a Node.js environment
- Copies the optimized static files into a lightweight Nginx image
- Produces a **production-ready image** that can be deployed anywhere

## 🧠 CI/CD Pipeline (GitHub Actions)

### 📄 Workflow File: `.github/workflows/deploy.yml`

This workflow automates:
1. Installing dependencies  
2. Running tests  
3. Building the production bundle  
4. Building and pushing the Docker image to Docker Hub  
5. Triggering deployment on Render using a webhook  

```yaml
name: CI/CD for React App with Render Deploy

on:
  push:
    branches: [ "main" ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test -- --watchAll=false

      - name: Build project
        run: npm run build

      - name: Build Docker image
        run: docker build -t my-react-app .

      - name: Log in to DockerHub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Push image to DockerHub
        run: |
          docker tag my-react-app ${{ secrets.DOCKERHUB_USERNAME }}/my-react-app:latest
          docker push ${{ secrets.DOCKERHUB_USERNAME }}/my-react-app:latest

      - name: Trigger Render Deploy
        run: curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}
```

## 🔒 Required GitHub Secrets

| Secret Name | Description |
|--------------|--------------|
| `DOCKERHUB_USERNAME` | Your DockerHub username |
| `DOCKERHUB_TOKEN` | DockerHub access token (from DockerHub → Settings → Security) |
| `RENDER_DEPLOY_HOOK` | Render deploy webhook URL (from Render → Settings → Deploy Hooks) |

## 🌍 Deployment on Render

1. Go to [https://render.com](https://render.com)
2. Create a **New Web Service**
3. Connect your GitHub repo  
4. Choose **Environment: Docker**
5. Leave build/start commands empty (Render uses your Dockerfile)
6. Deploy manually once  
7. Copy your **Deploy Hook URL**
8. Add it to GitHub Secrets as `RENDER_DEPLOY_HOOK`

Now every push to `main` will:
- Build & push Docker image to DockerHub  
- Trigger Render deploy automatically  
- Update your live site ✨

## 🔁 Full CI/CD Flow

```
git push  →  GitHub Actions  →  DockerHub  →  Render Webhook  →  New Container Deployed
```

📦 **Built artifact:** Docker Image  
🚀 **Deployed artifact:** Running Docker **Container** (on Render)

## ✅ Result

Once deployed, your app is live at:
```
https://your-app-name.onrender.com
```

The site automatically updates every time you push changes to the `main` branch 🎉

## 🧠 What’s Deployed on Render?

Render runs your app as a **container** — an active instance of your Docker image.  
- The **image** is built by GitHub Actions  
- The **container** is created and run by Render’s infrastructure  
- Inside the container, **Nginx** serves your optimized React app from `/usr/share/nginx/html`

## 🧩 Summary

| Stage | Description |
|--------|--------------|
| **Local** | Develop React app |
| **Dockerfile** | Containerize app using Nginx |
| **GitHub Actions** | Automate build + test + push |
| **DockerHub** | Store built image |
| **Render** | Pull image → run container → serve live app |

## 🧰 Author

**Manav Gupta**  
M.Tech CSE | MERN Stack & AI Enthusiast  
📧 [LinkedIn Profile / Portfolio Link]

## ⭐ Contribute

If you find this setup useful, give it a ⭐ on GitHub!  
Feel free to fork and extend it for your own CI/CD learning or projects.
