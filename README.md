## Naming conventions

- For files and directories use **kebab-case**


## Typescript

- This project includes typescript support and a tslint proposal


## Typescript

- This project includes typescript support and a tslint proposal


## Layers

- Pages (a.k.a: router)
    
    Represents the router and just mount components and plug it with routes data. Eg.: Route params

- State
    
    Model the app state and give access to app external resources like browser data, APIs data, etc.

- Components
    
    Has business logic. Orchestrate UI components in order to create usable pieces. Are allowed to have an state

- UI
    No logical pieces. Pure/functional components. Not crossed dependencies allowed. It receive everything by **prop** including callbacks. 


## Styled

Use of styled-components is strongly recommended for styling in general. The general rule would be: **For every component a "styled components" module will be created with the same name and a .styled.tsx ending**. For example, in the case of an **index.tsx** file, all the styled components needed from this component will be placed on **styled.tsx** in the same directory and, in the case of a **example.tsx** component, we´ll have an **example.styled.tsx** file with this particular module styled components.

Eg.:

- component-dir
    - index.tsx
    - styled.tsx
    - another-subcomponent.tsx
    - another-subcomponent.styled.tsx
