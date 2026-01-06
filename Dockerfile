# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

ARG REACT_APP_GITHUB_TOKEN
ENV REACT_APP_GITHUB_TOKEN=$REACT_APP_GITHUB_TOKEN

ARG GITHUB_USERNAME
ENV GITHUB_USERNAME=$GITHUB_USERNAME

ARG USE_GITHUB_DATA
ENV USE_GITHUB_DATA=$USE_GITHUB_DATA

# Copy dependency manifests first (better caching)
COPY package*.json ./
RUN npm ci

# Copy the rest of the source
COPY . .

# Build static site
RUN npm run build


# ---- Run stage (Nginx static hosting) ----
FROM nginx:alpine

# Copy build output into Nginx web root
COPY --from=build /app/build /usr/share/nginx/html

# Optional: SPA routing support (prevents 404 on refresh for React routes)
RUN printf '%s\n' \
'server {' \
'  listen 80;' \
'  server_name _;' \
'  root /usr/share/nginx/html;' \
'  index index.html;' \
'  location / {' \
'    try_files $uri $uri/ /index.html;' \
'  }' \
'}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]