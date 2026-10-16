# Use a Node.js version supported by Angular 16 to compile the application in a temporary build stage.
FROM node:18-alpine AS build

# Make /app the working directory for every command in the build stage.
WORKDIR /app

# Copy the dependency manifests first so Docker can reuse the dependency layer when application code changes.
COPY package.json package-lock.json ./

# Install the exact dependency versions recorded in package-lock.json, including the Angular build tooling.
RUN npm ci --no-audit --no-fund

# Copy the Angular workspace configuration and all TypeScript configuration files into the build stage.
COPY angular.json tsconfig*.json ./

# Copy the custom-domain file because angular.json includes it in the generated site.
COPY CNAME ./

# Copy the application source code and static assets into the build stage.
COPY src ./src

# Compile an optimized production build into the docs directory configured in angular.json.
RUN npm run build -- --configuration production

# Start a fresh Nginx stage so the final image does not contain Node.js, source files, or build dependencies.
FROM nginx:1.27-alpine AS runtime

# Configure Nginx to serve the static build and return index.html for Angular client-side routes.
RUN printf '%s\n' 'server {' '    listen 80;' '    listen [::]:80;' '    server_name _;' '    root /usr/share/nginx/html;' '    index index.html;' '    location / {' '        try_files $uri $uri/ /index.html;' '    }' '}' > /etc/nginx/conf.d/default.conf

# Copy only the compiled application from the build stage into Nginx's document root.
COPY --from=build /app/docs/ /usr/share/nginx/html/

# Document that the web server accepts HTTP traffic on port 80 inside the container.
EXPOSE 80

# Check periodically that Nginx can serve the application from inside the container.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget --quiet --tries=1 --spider http://127.0.0.1/ || exit 1

# Keep Nginx in the foreground so its process controls the lifetime of the container.
CMD ["nginx", "-g", "daemon off;"]
