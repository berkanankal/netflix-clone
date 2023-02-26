# Netflix Clone

A Netflix Clone project that I developed mainly to improve myself on Tailwind, Typescript and Next.js.

## Demo

https://netflix-clone-berkanankal.vercel.app

## Tech Stack
### Frontend
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/) - A React framework that gives you building blocks to create web applications.
- [Typescript](https://www.typescriptlang.org/) - A syntactic superset of JavaScript which adds static typing.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework designed to enable users to create applications faster and easier.
- [Material UI](https://mui.com/) - An open-source React component library that implements Google's Material Design.
- [Hero Icons](https://heroicons.com/) - Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
- [Firebase](https://firebase.google.com/) - A Google-backed application development software that enables developers to develop iOS, Android and Web apps.
- [React Hook Form](https://react-hook-form.com/) - A library that helps you validate forms in React.
- [React Icons](https://react-icons.github.io/react-icons/) - A small library that helps you add icons (from all different icon libraries) to your React apps.
- [React Player](https://github.com/CookPete/react-player) - A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura.
- [Recoil](https://recoiljs.org/) - A library written by Facebook to manage states in React.


### API
The data of this project was obtained using The Movie Database API. The TMDb API is a resource for any developers that want to integrate movie, TV show and cast data along with posters or movie fan art. [themoviedb.org](https://www.themoviedb.org/) is a free and community edited database.

## Environment Variables

To run this project you will need to add the following environment variables to your `.env.local` file in the project's home directory.

`NEXT_PUBLIC_TMDB_API_KEY`
<br/>
<br/>
To get TMDB API Key, you must follow the steps below after registering with TMDB.
<br/>
<br/>
<img src="https://user-images.githubusercontent.com/67144252/213520283-8f80119b-f949-48ee-be2f-4f943dceff8d.png" width="400" height="500">
<img src="https://user-images.githubusercontent.com/67144252/213521220-699a91cf-0632-44cf-a11e-67235461b0cf.png" width="300" height="500">
<img src="https://user-images.githubusercontent.com/67144252/213521236-6a25a605-d979-4a66-bc6e-511d5b0b289f.png"  height="500">
<br/>
<br/>

`NEXT_PUBLIC_FIREBASE_API_KEY`
`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
`NEXT_PUBLIC_FIREBASE_PROJECT_ID`
`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
`NEXT_PUBLIC_FIREBASE_APP_ID`

You can open the project in the [Firebase](https://firebase.google.com/), then you should click on the project overview, then go to project settings you will see the web API keys there.

![firebase](https://user-images.githubusercontent.com/67144252/204036824-a24bf906-076a-4a90-b3a6-a98186d987c8.png)

You should also configure the Authentication from the left menu.

![firebase-2](https://user-images.githubusercontent.com/67144252/213527816-38f3efd5-82fc-440a-8500-1bb439f70e32.png)



## Run Locally

First clone this repository.

```bash
git clone https://github.com/berkanankal/netflix-clone.git
```

Go to the project directory.
```bash
cd netflix-clone
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
npm install
```

Run the app.
```bash
npm run dev
```

## Screenshots

![1](https://user-images.githubusercontent.com/67144252/221413292-8529f5d1-b067-4051-90ac-7db8deec1664.png)
<br>
<br>
![2](https://user-images.githubusercontent.com/67144252/221413157-c4645b16-87a8-4d04-b62b-9d26b34e482a.png)
<br>
<br>
![3](https://user-images.githubusercontent.com/67144252/221413253-9d6890d4-67d7-40d8-bee8-e676f4daa06d.png)












