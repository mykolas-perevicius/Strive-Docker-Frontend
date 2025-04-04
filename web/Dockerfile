# Use an official Microsoft Dev Container image - pre-configured for Node dev
FROM mcr.microsoft.com/devcontainers/typescript-node:20

# Update npm globally (as root)
USER root
RUN npm install -g npm@latest

# Switch back to the non-root user 'node'
USER node

# Set working directory
WORKDIR /app

# Copy package files only initially (for build caching)
# Ensure correct ownership for the non-root user
COPY --chown=node:node package*.json ./

# NOTE: No 'npm install' here. It will be run by devcontainer.json's postCreateCommand.
# NOTE: No 'COPY . .' here. Source code is mounted via docker-compose.yml.

# Keep container alive command (overridden by docker-compose)
CMD ["sleep", "infinity"]
