# React Learning

It's a library to generate component based applications.
React stablished its model to MVVM / [[mvc]]

Component =>

- HTML
- CSS
- Typescript / Javascript  
  Controller -> Typescript -> Model -> View -> Model

As being a Library, React has third party code to improve its functionality.

**When is convenient to use React?**

- Personalized App.
- Simplicity.
- Lightweight.
- Prototype.
- SPA (Single Page Application) -> CSR (Client Side Rendering).

There are React Frameworks:

- SolidJS -> how React should be from start.
  - Real Reactivity (signals).
  - There's no laboral field.
- NextJS -> Great for people that already knows.
  - A lot of functionalities.
  - Everything is SSR (Server Side Rendering).
- Remix -> full SSR
  - For SEO.
  - Performance.
  - Data Fetching.
  - Routing.
  - There's no laboral field.

## How to start

First of all we should create a react project, the best direct way is
with ViteJS (a bundler):

```bash
pnpm create vite project-name

# Then switch to the project folder
cd project-name
```

Once inside the project folder, all the dependencies must be installed, running:

```bash
pnpm install
```

The project can be ran with:

```bash
pnpm dev
```

## React Basics

### Project Structure

A React Project, made with ViteJS use to have the next structure:

project-name/

├── public/

│ └── index.html

├── src/

│ ├── App.css

│ ├── App.tsx

│ ├── index.css

│ └── main.tsx

├── vite.config.js

└── package.json

#### Explanation of Folders and Files

- **public**: Contains static assets that will be served directly, such as the main HTML file (index.html).
- **src**: Contains the source code of your React application.
  - **App.css**: Stylesheet for the main app component.
  - **App.js**: The main component of the application.
  - **index.css**: Global styles for the application.
  - **main.js**: The entry point of the application, where the main component is rendered.
- **vite.config.js**: Vite configuration file, where options such as aliases, plugins, and development servers are configured.
- **package.json**: File containing metadata about the project, such as dependencies, scripts, and npm configuration.

#### More Complex Structure (Optional)

For larger projects, you might consider a more detailed structure:

project-name/

├── public/

│ └── index.html

├── src/

│ ├── components/

│ │ ├── Button/

│ │ │ ├── Button.tsx

│ │ │ └── Button.css

│ │ ├── Input/

│ │ │ ├── Input.tsx

│ │ │ └── Input.css

│ │ └── ...

│ ├── pages/

│ │ ├── Home.tsx

│ │ ├── About.tsx

│ │ └── ...

│ ├── assets/

│ │ ├── images/

│ │ └── styles/

│ ├── services/

│ │ └── api.tsx

│ ├── utils/

│ │ └── helpers.js

│ ├── App.css

│ ├── App.tsx

│ ├── index.css

│ └── main.tsx

├── vite.config.js

└── package.json

- **components**: Contains reusable components.
- **pages**: Contains components that represent individual pages.
- **assets**: Stores assets such as images, fonts, etc.
- **services**: Contains logic for interacting with external APIs and services.
- **utils**: Contains utility functions.

##### Customization

This structure is just a guideline. You can customize it based on your project's needs and preferences. Some considerations to keep in mind:

- **Project** size: For smaller projects, a simpler structure may suffice.
- **Team** conventions: If you're working on a team, it's important to establish naming conventions and structure conventions to maintain consistency.
- **Application** type: The structure may vary slightly depending on whether you're building a web app, mobile app, or component library.

The first file will check is `main.tsx`

It contains the principal call for our application.

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

The `StrictMode` is in charge to check if the Application runs correctly.
The `createRoot` instantiate the root of our application, calling the `App` component.

This architecture is called Single Page Application.

### Changes Detection

React works with a Dom and a Virtual Dom. In the Doom,
writes, render, then after the trigger, looks for changes
inside the Virtual Dom.

A react component is wrote as a function that return HTML.
The render execute that 'function'.

A commit in react is apply the changes detected in the Dom.

### React Components

A `.tsx` or `.jsx` means that the file contains HTML with typescript or Javascript logic.

A component is always the minimum logic unit possible.
And should contain only the logic that belong to it.

For a good practice in development, don't put anything as a main component directly.

Put every component in a folder with a `.tsx` and a `.css`.

### useState

There are 3 things that trigger changes:

1. Mount, when the component loads.
2. When user interacts (change of state)
3. By asynchronous part

Because of this, we must use `hooks` from React.

There's a rule inside React called `batching` it check for properties/changes
and nest them, and the render is made after all the logic.
