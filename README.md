## Naming conventions

- For files and directories use **kebab-case**

## Typescript

- This project includes typescript support and a tslint proposa

## Layers

- Pages (a.k.a: router)
    
    Represents the router and just mount components and plug it with routes data. Eg.: Route params

- State
    
    Model the app state and give access to app external resources like browser data, apis data, etc.

- Components
    
    Has business logic. Orchestrate UI components in order to create usable pieces. Are allowed to have an state

- UI
    No logical pieces. Pure/functional components. Not crossed dependencies allowed. It receive everything by **prop** including callbacks. 

