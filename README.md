# Strive Frontend Speedrun - Web Prototype

This repository contains the web frontend prototype for the **Strive Frontend Speedrun**, built using React, TypeScript, Vite, and Tailwind CSS. The development environment is managed using **VS Code Dev Containers** for consistency and ease of setup.

> **Note:** This is a frontend-only prototype. Backend integration is planned for future phases.

---

## Project Structure

The repository uses a modern development setup orchestrated by Docker and VS Code Dev Containers.

    Strive_Frontend_Speedrun/
    ├── .devcontainer/
    │   └── devcontainer.json    # VS Code Dev Container configuration (defines env, extensions, setup commands)
    ├── web/                       # React web application source code
    │   ├── public/                # Static assets (e.g., index.html template, favicons)
    │   │   └── vite.svg
    │   ├── src/                   # Main application source
    │   │   ├── lib/               # Utility functions (e.g., cn for Tailwind)
    │   │   │   └── utils.ts
    │   │   ├── components/        # UI components (e.g., shadcn/ui)
    │   │   │   └── ui/
    │   │   ├── App.tsx            # Root React component
    │   │   ├── index.css          # Main CSS file with Tailwind directives
    │   │   └── main.tsx           # React entry point (renders App)
    │   ├── Dockerfile             # Defines the Node.js image for the dev container
    │   ├── index.html             # HTML entry point used by Vite
    │   ├── package.json           # Node.js dependencies & scripts
    │   ├── postcss.config.js      # PostCSS configuration (for Tailwind)
    │   ├── tailwind.config.js     # Tailwind CSS configuration
    │   ├── tsconfig.json          # Main TypeScript configuration for the app
    │   ├── tsconfig.node.json     # TypeScript configuration for Node scripts (like vite.config.ts)
    │   └── vite.config.ts         # Vite build tool configuration
    ├── docker-compose.yml         # Defines the Docker services (frontend container, volumes)
    ├── setup.sh                   # Script to generate this entire project structure (run once initially)
    └── .gitignore                 # Specifies intentionally untracked files for Git

---

## Getting Started with Dev Containers

This project is designed to be developed inside a container, ensuring everyone uses the same tools and environment.

### Prerequisites

- **Docker Desktop:** Install and ensure it's running. ([Docker Desktop](https://www.docker.com/products/docker-desktop/))
- **Visual Studio Code (VS Code):** ([VS Code](https://code.visualstudio.com/))
- **VS Code Dev Containers Extension:** Install this extension from the VS Code Marketplace. ([Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers))
- **Git:** For cloning the repository. ([Git](https://git-scm.com/))
- **(Windows Users): WSL2:** Highly recommended for performance with Docker Desktop. Ensure it's installed and integrated with Docker Desktop. ([WSL Installation](https://docs.microsoft.com/windows/wsl/install))
- **(Optional) Node.js/npm on Host:** Only needed if you want to run the initial `setup.sh` script yourself. Not required for day-to-day development *after* setup.

---

### Windows-Specific Setup (WSL2 & Docker)

If you’re developing on Windows, follow these steps for the best experience:

1.  **Install WSL2:**
    *   Open PowerShell as Administrator: `wsl --install`. Choose a distribution like Ubuntu if prompted.
    *   Ensure your distribution runs in WSL 2 mode: `wsl --list --verbose`. If not, upgrade: `wsl --set-version <DistroName> 2`.
    *   Update your Linux distribution: Open its terminal (e.g., Ubuntu) and run `sudo apt update && sudo apt full-upgrade -y`.

2.  **Install Docker Desktop:** Use the official installer for Windows.

3.  **Enable WSL Integration in Docker Desktop:**
    *   Open Docker Desktop Settings > Resources > WSL Integration.
    *   Ensure "Enable integration with my default WSL distro" is checked.
    *   Explicitly enable integration for your installed distro (e.g., Ubuntu). Apply & Restart.

4.  **Install VS Code & Dev Containers Extension:** Install VS Code on Windows and add the "Dev Containers" extension from the Marketplace.

---

### Development Workflow

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/mykolas-perevicius/Strive-Docker-Frontend.git
    cd Strive-Docker-Frontend # Navigate into the project root directory
    ```
    *(Note: If you ran `setup.sh` earlier, you'd `cd Strive_Frontend_Speedrun` instead)*

2.  **Open in VS Code:**
    *   Open the project's root folder (`Strive-Docker-Frontend` or `Strive_Frontend_Speedrun`) in VS Code.
    *   `File > Open Folder...`

3.  **Reopen in Container:**
    *   VS Code should detect the `.devcontainer/devcontainer.json` file and show a notification asking: **"Reopen in Container"**. Click it.
    *   (If you don't see the prompt, open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P) and select "Dev Containers: Reopen in Container".)

4.  **Wait for Build & Setup:**
    *   The first time, Docker will build the image defined in `web/Dockerfile`.
    *   Once the container starts, the `postCreateCommand` defined in `devcontainer.json` will automatically run. This command cleans the npm cache and installs all necessary dependencies (`npm install ...`).
    *   **Monitor Progress:** You can view the detailed logs by clicking on "Show Logs" in the "Starting Dev Container" notification, or later via Command Palette > "Dev Containers: Show Container Log". **Wait until you see messages indicating the `postCreateCommand` has finished successfully.**

5.  **Start the Development Server:**
    *   Once VS Code is fully attached and the setup is complete, open the integrated terminal in VS Code (Ctrl+\` or Cmd+\`). It will be running *inside* the container as the `node` user in the `/app` directory.
    *   Run the Vite development server:
        ```bash
        npm run dev
        ```

6.  **Access the Application:**
    *   Open your web browser and navigate to [http://localhost:5173](http://localhost:5173).
    *   Changes you make to the code in `web/src` will trigger hot module replacement (HMR).

---

## Git Workflow Guidelines

-   **Branching Strategy:** Use feature branches (e.g., `feature/login-page`) based off `main`.
-   **Commits:** Write clear, concise commit messages describing the changes.
-   **Pull Requests:** Merge feature branches into `main` via Pull Requests after review.
-   **.gitignore:** The provided `.gitignore` should prevent common build artifacts and environment files (`node_modules`, `dist`, `.env`) from being committed.

---

## Development Notes

-   **Adding Dependencies:** Run `npm install <package-name>` or `npm install -D <package-name>` inside the VS Code integrated terminal (which is inside the container).
-   **Shadcn/ui:** To add shadcn/ui components, run `npx shadcn-ui@latest add <component-name>` inside the VS Code integrated terminal.
-   **Tailwind CSS:** Configuration is in `tailwind.config.js`. The PostCSS plugin handles integration during the Vite build/dev process.