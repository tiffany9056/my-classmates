# Assignment 2: My Classmates App
## The GitHub page link of My Classmates App webpage
https://tiffany9056.github.io/my-classmates/

## Project Description
This is a web application with ReactJS that will displays a list of classmates, their favorite foods, and colors. Users can clicking the Like button of the classmate.

## Generative AI Usage in This Project
- **How I used it:** Generative AI was used 90% to my My Classmates App deployment, since I did not learn React before. However, I have write the code comment and their meanings, and also some Bootstrap Classes meanings.
- **AI-generated vs. Own Code:** The main logic and coding were by Generative AI, however, since it didnot generate the perfict webpage I expect, some detail styling and the Bootstrap class I modify and change by myself, while AI helped with debugging.

## Technologies I Used
- **ReactJS** for building components
- **Bootstrap** for responsive styling
- **GitHub Pages** for hosting

## Project Structure
```
my-classmates/
├─ src/                       # React source code
    ├─ components/            # Reusable React components
        ├── ClassMateCard.js  # Classmate card component
        ├── PeopleData.js     # Data file for classmates
    ├── App.js                # Main React component
    ├── index.js              # Entry point for the app
├─ public/                    # Static assets
├─ build/                     # Deployment files (auto-generated)
├── package.json              # Dependencies and scripts
├── package-lock.json         # Lock file for dependencies
└── README.md                 # Project documentation
```

## How I Install
1. Install Node.js and npm:
   ```bash
   ## Install Node.js and npm 
   brew install node
   ## Verify installation
   node -v
   npm -v
   ```
2. Clone the repository:
   ```bash
   git clone https://github.com/tiffany9056/my-classmates.git
   ```
3. Install required npm packages
   ```bash
   ## Install Project Dependencies
   npm install
   npm install bootstrap react-bootstrap
   ```
4. Install GitHub Pages package
   ```bash
   npm install gh-pages --save-dev
   ```
6. Modify package.json:
   ```md
   ## Add a "homepage" field, ensures the app is deployed to the correct URL.:
   "homepage": "https://tiffany9056.github.io/my-classmates" 
   ## Modify "scripts":
   # Automatically builds the project before deployment.
   # Pushes the build/ folder to the gh-pages branch.
   "predeploy": "npm run build", 
   "deploy": "gh-pages -d build" 
   ```
7. Start the Development Server (For Local Testing):
   ```sh
   npm start
   ```
8. Deploy to GitHub Pages:
   ```sh
   npm run deploy
   ```
