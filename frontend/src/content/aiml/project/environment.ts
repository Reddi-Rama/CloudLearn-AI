export const projectEnvironment = {
  title: "Development Environment",
  recommended: {
    operatingSystem: "Windows, Linux, or macOS",
    python: "Python 3.x",
    editor: "VS Code",
    notebook: "Jupyter Notebook or JupyterLab"
  },
  commands: {
    createEnvironment: "python -m venv .venv",
    windowsActivate: ".venv\\Scripts\\activate",
    installLibraries: "pip install numpy pandas matplotlib scikit-learn jupyter"
  },
  notes: [
    "Use a virtual environment.",
    "Record dependencies in requirements.txt.",
    "Do not commit secrets to the repository."
  ]
};

