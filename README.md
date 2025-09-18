# 0xBot website
This is the official 0xBot website available at https://0xbot.smartshub.dev/

## How to run
**1. Clone proyect**
> Run `git clone https://github.com/Smarts-Hub/0xBot.git` then `cd 0xBot`

**2. Install dependencies**
> Run `npm install`

**3. Modify .env.example**
> Set a DB Url

**4. Generate Prisma Client**
> Run `npx prisma generate` & `npx prisma db push` (Not fully required on MongoDB)

**5. Start the dev-server**
> Run `npm run dev`

**Optionally**
> Generate the prisma client by running `npm run gen-prisma-client`

## Contributing
Feel free to contribute! We are open to new UI desings or functionalities!

## Building to run with docker
**Create docker image**
> Run `npx run build-docker`

It will create a 0xbotweb.tar which you can use to run the container.