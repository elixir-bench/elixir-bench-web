<img src="./public/images/logo.png" height="68" />

# ElixirBench Web

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

```bash
$ yarn start
```

This command runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```bash
$ yarn test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

```bash
$ yarn build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Use a http web server to serve your files under the build/ directory. Your app
is ready to be deployed!

## API Server 
You can set `REACT_APP_API_URL` environment variable to point for the desired API.
It defaults to `localhost:4000`.

## Deployment

You can easily deploy this project in Github Pages. To this, just create the 
pages repository for your project following the [github instructions](https://pages.github.com).

After that set the remote url to point to the url for your github pages repository

```bash
# Give another name to the origin remote
$ git remote rename origin another-name 

# Make origin remote point to github page repository url
$ git remote add origin your-gh-page-repo-url
```

To deploy the application to your gh page, simple run:

```bash
$ yarn deploy
```

This script builds the project and publishes it to gh pages of this repo. If 
the sever api is hosted on different domain name you must set `REACT_APP_API_URL`.

```bash
$ REACT_APP_API_URL=http://myapp.com yarn deploy
```

## License

ElixirBench Web is released under the Apache 2.0 License - see the [LICENSE](LICENSE.md) file.
