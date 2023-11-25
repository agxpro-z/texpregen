# texpregen
Test Expression Generator (texpregen) is a [Next.js](https://nextjs.org) based web app for generating random test expressions (cases) for data structures and algorithms problems.

## Getting started
### Prerequisite
- Node.js
- Next.js

### How to run
- Installing ```node.js```

    To install **node.js** follow **nvm** guide or your machine platform specific guide.

- Cloning the repository
    ```
    git clone https://github.com/agxpro-z/texpregen
    ```

- Switching to 'texpregen' directory
    ```
    cd texpregen
    ```

- Installing all dependencies and modules
    ```
    npm i
    ```

- Running web app
    ```
    export NEXT_PUBLIC_API_URL=<texpregen-api URL>
    npm run dev
    ```

    or

    ```
    NEXT_PUBLIC_API_URL=<texpregen-api URL> npm run dev
    ```

- Open [http://localhost:3000](http://localhost:3000) in browser to see the web app.

## texpregen-api
texpregen-api must be running for texpregen app to function.

https://github.com/agxpro-z/texpregen-api
