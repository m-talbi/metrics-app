<!-- PROJECT DESCRIPTION -->

# 📖 League Challengers Tracker <a name="about-project"></a>

**League Challengers Tracker** is a basic application that aims to provide users with access to real-time statistics from Riot Games for the top challenger players in League of Legends. With this project, you can retrieve stats such as champion scores, KDA, and win rate for recent games played by these players, across all regions. You can also filter players to find the ones that best meet your needs.

<hr>
<br>

![alt text](/app_screenshot.jpg "app screenshot")

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- React
- Redux
- CSS/SCSS
- Javascript
- Jest

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Display real-time statistics of the top players from every region**
- **Display real-time statistics of players match history**
- **Filter the list of players to find the one that meet your needs**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Open live demo](https://league-challengers-tracker.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need to install these prerequisites:

- If you're running on Windows you can download the prerequisites from the links down below:

> [Nodejs](https://nodejs.org/en/)

> [Git](https://git-scm.com/)

- If you're running on Linux follow these steps down below:

- Install git.

```sh
 sudo apt install git
```

- Install nodejs and npm.

```sh
 sudo apt install nodejs
```

### Setup

Clone this repository to your desired folder:

```sh
  git clone git@github.com:Kweeka1/metrics-app.git
  cd metrics-app
```

### Install

Install this project with:

```sh
  npm install
```

### Usage

To run the project, follow below instructions:

- Create an account at https://developer.riotgames.com/

- Generate an api key

- Create a new file in root directory called `.env` and insert below code:

```sh
REACT_APP_API_KEY={API_KEY_GENERATED}
```

- Example:
```sh
REACT_APP_API_KEY=RGAPI-2a9e6e8c-917c-8394-a8f3-baa489cd9fe8
```

- Now you can run the app in development mode by executing:

```sh
npm run start
```

- To get a production build, execute the following command

```sh
npm run build
```

### Run tests

To run tests, run the following command:

```sh
  npm run test
```


### Deployment

You can deploy the production build of this project using npm library called `gh-pages`:

- First install the library

```sh
npm install gh-pages --save-dev
```

- Then follow the instructions provided in their readme file to deploy the app

[GH Pages README](https://www.npmjs.com/package/gh-pages)

- deploy the build folder after running `npm run build`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Mohamed Talbi**

- GitHub: [Mohamed Talbi](https://github.com/Kweeka1)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Improve User Interface**
- [ ] **Make a desktop design for the app**
- [ ] **Add expand button to match history card to show additional info**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Kweeka1/metrics-app/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for project inspiration.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **What version of nodejs does this project works on?**

  - The project runs well with nodejs 14+. you might face some issues while running this project in lower versions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Credit -->

## Credit

Original design is by [Nelson Sakwa on Behance](https://www.behance.net/sakwadesignstudio).
