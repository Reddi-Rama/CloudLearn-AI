const lesson12 = {
  id: "lesson12",

  title: "Python Environment for Machine Learning",

  content: `
Lesson 12

Python Environment for Machine Learning


Machine learning requires more than a learning algorithm.

A practical workflow also needs tools for data loading, numerical computation, visualization, experimentation, and model development.

Python is widely used for these tasks because it combines general-purpose programming with a large ecosystem of scientific and data-analysis libraries.

The machine learning environment introduced in this course is based on Python and the scientific Python ecosystem.


1. Why Python for Machine Learning

Python is a general-purpose programming language that is also widely used for scientific and data-analysis applications.

Its ecosystem provides libraries for:

Data loading

Data analysis

Visualization

Statistics

Scientific computing

Machine learning

Natural language processing

Image processing

Python also makes it easy to interact with code through a terminal or an interactive environment such as Jupyter Notebook.

Machine learning and data analysis are iterative activities, so being able to quickly change code, inspect results, and repeat experiments is extremely useful.


2. The Python Machine Learning Ecosystem

A practical environment can contain:

Python
↓
NumPy
↓
SciPy
↓
Pandas
↓
Matplotlib
↓
scikit-learn
↓
Jupyter Notebook

Each tool has a different responsibility.

Python provides the programming language.

NumPy provides numerical arrays and scientific operations.

SciPy provides additional scientific computing functionality.

Pandas provides data structures and data-analysis tools.

Matplotlib provides visualization.

scikit-learn provides machine learning algorithms.

Jupyter Notebook provides an interactive development environment.


3. Python Version

Machine learning projects should use a modern Python 3 environment.

For a new project, use a currently supported Python 3 version rather than relying on old Python releases.

The source discusses the transition from Python 2 to Python 3 and recommends Python 3 for new projects. :contentReference[oaicite:3]{index=3}


4. Checking the Python Installation

Open a terminal and run:

Python

python --version

Output

The command displays the installed Python version.

On some systems, the command may be:

Python

python3 --version

The exact command depends on the operating system and Python installation.


5. Creating a Simple Python Program

Before installing machine learning libraries, verify that Python itself is working.

Python

print("Python environment is ready")

Output

Python environment is ready

This confirms that Python can execute a simple program successfully.


6. Installing Machine Learning Libraries

A basic environment needs several scientific Python packages.

The source lists:

NumPy

SciPy

matplotlib

IPython

Jupyter Notebook

pandas

scikit-learn

A package manager such as pip can be used to install them.

Python

pip install numpy scipy matplotlib ipython scikit-learn pandas jupyter

The exact installation process can vary depending on the operating system and Python environment.


7. Virtual Environments

A virtual environment isolates project dependencies from other Python projects.

A typical workflow is:

Create Environment
↓
Activate Environment
↓
Install Libraries
↓
Run Project

This reduces conflicts between packages used by different projects.


8. Creating a Virtual Environment

Python

python -m venv ml-env

On Windows, activate it with:

Python

ml-env\\Scripts\\activate

On macOS or Linux:

Python

source ml-env/bin/activate

The terminal prompt normally changes after activation, indicating that the environment is active.


9. Installing the Main Libraries

After activating the environment:

Python

pip install numpy pandas matplotlib scipy scikit-learn jupyter

This installs the primary packages used in the course.

After installation, the environment can be tested by importing the libraries.


10. Testing the Libraries

Python

import numpy
import pandas
import matplotlib
import scipy
import sklearn

print("NumPy:", numpy.__version__)
print("Pandas:", pandas.__version__)
print("Matplotlib:", matplotlib.__version__)
print("SciPy:", scipy.__version__)
print("scikit-learn:", sklearn.__version__)

Output

The program displays the installed versions of the imported packages.


11. Jupyter Notebook

Jupyter Notebook is an interactive programming environment that runs through a browser.

It is particularly useful for:

Exploratory data analysis

Small experiments

Visualization

Documentation

Interactive coding

A notebook allows code, explanations, and visual output to appear together.

The source describes Jupyter Notebook as an interactive environment that makes it easy to combine code, text, and images. :contentReference[oaicite:4]{index=4}


12. Starting Jupyter Notebook

After installing Jupyter:

Python

jupyter notebook

A browser window or local notebook interface will normally open.

A notebook can then be used to execute Python code interactively.


13. Notebook Cells

A notebook is divided into cells.

Code cells contain executable Python.

Text cells can contain explanations.

The workflow becomes:

Write Code
↓
Run Cell
↓
Inspect Output
↓
Modify Code
↓
Run Again

This rapid feedback cycle is useful during machine learning experiments.


14. Terminal vs Notebook

Terminal

Useful for:

Running scripts

Installing packages

Checking versions

Managing environments

Jupyter Notebook

Useful for:

Exploration

Visualization

Experiments

Combining code and explanations


15. VS Code

VS Code can also be used as a machine learning development environment.

A project may contain:

Python files

Jupyter notebooks

Datasets

Configuration files

Documentation

This is useful when a project grows beyond simple experiments.


16. Environment Verification

A machine learning environment should be checked before beginning model development.

Verify:

Python works

pip works

NumPy imports

Pandas imports

Matplotlib imports

SciPy imports

scikit-learn imports

Jupyter starts successfully


17. Basic Environment Test

Python

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import scipy
import sklearn

print("Environment test successful")

Output

Environment test successful


This provides a quick check that the core machine learning environment is ready.


18. Why Dependency Management Matters

Machine learning projects often rely on many libraries.

Different projects may require different versions.

For example:

Project A → Library Version A

Project B → Library Version B

A virtual environment helps keep project dependencies isolated.

This becomes increasingly important as projects become larger.


19. Reproducible Environments

A reproducible environment allows another developer to install approximately the same dependency set.

One common approach is:

Python

pip freeze > requirements.txt

This records installed Python packages.

Another environment can later install them with:

Python

pip install -r requirements.txt


20. Environment Workflow

A practical setup process is:

Install Python
↓
Create Virtual Environment
↓
Activate Environment
↓
Install Scientific Libraries
↓
Verify Imports
↓
Launch Jupyter or VS Code
↓
Begin Machine Learning Work


21. Practical Experiment

Create a virtual environment named:

ml-env

Activate it.

Install:

numpy

pandas

matplotlib

scipy

scikit-learn

jupyter

Then create a small Python file that imports all five scientific libraries and prints a success message.


22. Troubleshooting

If Python is not recognized:

Check whether Python is installed and available through the system PATH.

If pip is not recognized:

Try:

Python

python -m pip --version

If a library cannot be imported:

Install the missing package in the active environment.

If Jupyter does not start:

Verify that Jupyter is installed in the current environment.


Common Mistakes

Installing packages into a different Python environment

Using an unsupported or outdated Python installation for a new project

Forgetting to activate the virtual environment

Installing libraries globally when project isolation is required

Using one environment for unrelated projects without dependency management

Failing to verify imports before beginning development


Practice

Set up a new virtual environment for Machine Learning.

Install the required libraries.

Verify each import.

Record the Python version and installed library versions.


Quick Check

Question

Why is Python widely used for machine learning?

Answer

Python combines a general-purpose programming language with a large ecosystem of libraries for numerical computing, data analysis, visualization, scientific computing, and machine learning.


Summary

Python provides the programming environment used throughout the course.

Machine learning development commonly combines Python with NumPy, SciPy, Pandas, Matplotlib, Jupyter, and scikit-learn.

Virtual environments help isolate project dependencies.

Jupyter Notebook supports interactive experimentation.

The environment should be tested before beginning machine learning development.


Extended Study

A machine learning project normally contains more than model-training code.

The overall environment may include:

Data Files

Python Code

Scientific Libraries

Machine Learning Libraries

Visualization Tools

Experiment Notebooks

Configuration

Dependencies

The quality of the development environment affects how easily experiments can be repeated and maintained.

As the course progresses, the environment introduced here will be used to load datasets, inspect data, visualize patterns, train models, and evaluate predictions.

Reflection

Think about a project that requires multiple Python libraries.

What could happen if two projects require incompatible versions of the same library?

How could a virtual environment help?

Why is it useful to record the software versions used during an experiment?
`
};

export default lesson12;