# Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL | Full Course 2023

This is a repository for Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL | Full Course 2023. If you want to access the course (completely free), can you visit [Antonio's web page](https://www.codewithantonio.com/)

![](./screenshot.gif)

Features:

- [x] Real-time messaging using Socket.io
- [x] Send attachments as messages using UploadThing
- [x] Delete & Edit messages in real time for all users
- [x] Create Text, Audio and Video call Channels
- [x] 1:1 conversation between members
- [x] 1:1 video calls between members
- [x] Member management (Kick, Role change Guest / Moderator)
- [x] Unique invite link generation & full working invite system
- [x] Infinite loading for messages in batches of 10 (tanstack/query)
- [x] Server creation and customization
- [x] Beautiful UI using TailwindCSS and ShadcnUI
- [x] Full responsivity and mobile UI
- [x] Light / Dark mode
- [x] Websocket fallback: Polling with alerts
- [x] ORM using Prisma
- [x] MySQL database using Planetscale
- [x] Authentication with Clerk

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-discord-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
