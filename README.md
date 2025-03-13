# React Learning

It's a library to generate component based applications.
React established its model to MVVM / MVC
React is an Open Source view library created and maintained by Meta. It's a great tool to render the User Interface (UI) of modern web applications.

Component =>

- HTML
- CSS
- Typescript / JavaScript  
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

### Rendering

When a user visits a web page, the server returns an HTML file to the browser. The browser then reads the HTML and constructs the Document Object Model (DOM).

The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.

You can use DOM methods and JavaScript, to listen to user events and manipulate the DOM
by selecting, adding, updating, and deleting specific elements in the user interface. DOM manipulation allows you to not only target specific elements, but also change their style and content.

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

### Component

User interfaces can be broken down into smaller building blocks called components.

Components allow you to build self-contained, reusable snippets of code.
If you think of components as LEGO bricks, you can take these individual
bricks and combine them together to form larger structures. If you need
to update a piece of the UI, you can update the specific component or brick.

This modularity allows your code to be more maintainable as it grows because
you can add, update, and delete components without touching the rest of
our application.

The nice thing about React components is that they are just JavaScript.

The names of the components should be in `PascalCase`.

### Props

Regular HTML elements have attributes that you can use to pass pieces
of information that change the behavior of those elements. For example,
changing the `src` attribute of an `<img>` element changes the image that
is shown. Changing the `href` attribute of an `<a>` tag changes the
destination of the link.

In the same way, you can pass pieces of information as properties to
React components. These are called `props`.

Similar to a JavaScript function, you can design components that accept
custom arguments (or props) that change the component's behavior or what
is visibly shown when it's rendered to the screen. Then, you can pass
down these props from parent components to child components.

Props should be inmutable. It is better to make copies and change the copies.

There is an special prop called `children` is a prop to wrap everything between
the component:

```tsx
<Component>
  <div>Anything here is children.</div>
</Component>;

// How is called:

function yourFunction({ children, otherProps }) {}
```

Props can have default values.

```tsx
export function MyFunction(prop1 = "defaultValue1", prop2 = "defaultValue2") {}
```

You can use propagation to implement the props in your main, but is
not a good practice in most of the cases.

```tsx
function App() {
  const variable = { prop1: value1, prop2: value2 };
  return <Component {...variable} />;
}
```

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

The components are factories of elements, and React render the elements.

### useState

There are 3 things that trigger changes:

1. Mount, when the component loads.
2. When user interacts (change of state)
3. By asynchronous part

Because of this, we must use `hooks` from React.

There's a rule inside React called `batching` it check for properties/changes
and nest them, and the render is made after all the logic.

You can use state to store and increment the number of times a user has
clicked the "Like" button. In fact, the React hook used to manage
state is called: `useState()`.

It returns an array, and you can access
and use those array values inside your component using array destructuring.
The first item in the array is the state value, which you can name anything.
It's recommended to name it something descriptive. The second item in the
array is a function to update the value. You can name the update function
anything, but it's common to prefix it with set followed by the name of
the state variable you're updating.

Always, initialize the state with the data type you'll going to use, or null

### useEffect

When we get data, we should communicate with an endpoint. An endpoint is an
entity external to the component

A hook always start with the word `use`, like `useState()`

`useEffect()` is literally a method. It accepts a method, and a dependencies array.

This hook executes first, when the component is mounted, second, every
time an state value is modified, the value inside the dependencies array.

If I don't use the dependencies array, the hook will execute any time any
value change inside the component.

The real use of `useEffect()` is to synchronize with external entities.

```tsx
useEffect(codeToExecute, listOfDependencies);
useEffect({console.log("Code to execute")}, ["optional array"])
```

If you don't set he 'optional array' in the `useEffect()` means that the
'Code to execute' would be executed every time a component renders.

The effect always must be a synchronize function.

### Custom Hooks

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. For example, `useFriendStatus` below is our first custom Hook:

```javascript
import { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it.
