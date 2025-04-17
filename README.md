# Building a Full-Stack & DevOps Masterpiece chat-app: A 14-Day Journey to Real-World Skills
## Day 1 of our 14-Day Dev Journey!

## Tools We’ll Use:

- Node.js

- Express

- Git & GitHub

- VSCode or any code editor

- Basic terminal/CLI knowledge

### Step-by-Step Breakdown:

**Step 1: Create Your Project Folder**

```
mkdir chat-app

cd chat-app
```

**Why?** This gives our entire project a root directory to stay organized. All code and configurations will live here.

### Step 2: Initialize Git

```
git init
```

**Why?**  Git tracks your changes over time. It’s essential for version control, collaborating with others, and pushing to GitHub.

Optional: Create a .gitignore file to avoid tracking node_modules, .env, etc.

```
echo "node_modules/\n.env" > .gitignore
```

### Step 3: Initialize Node.js & Install Express

```
npm init -y

npm install express
```

**Why?**  Node.js allows you to run JavaScript on the server. Express is a fast, minimalist framework to handle routes, middleware, and APIs efficiently.

<img width="1370" alt="Screenshot 2025-04-17 at 18 56 54" src="https://github.com/user-attachments/assets/bcc0fe4b-5215-43ad-af05-34b641e5e3c6" />

### Step 4: Create Basic Server File

Create a file index.js, and iside the file insert the following commands

```
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {

  res.send('Welcome to the Real-Time Chat App API');

});

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}`);

});
```

<img width="1095" alt="Screenshot 2025-04-17 at 19 02 51" src="https://github.com/user-attachments/assets/5fbbb696-f910-4c47-8d07-35e2d0e171ab" />

**Why?** This sets up a basic backend server that listens to requests. The root route / confirms your API is running.

### Step 5: Run Your App

```
node index.js
```

<img width="959" alt="Screenshot 2025-04-17 at 19 05 15" src="https://github.com/user-attachments/assets/18f4b14b-4990-44b5-b7e2-0bd73a6e095a" />

Open your browser or Postman and go to:

```
http://localhost:3000
```

<img width="898" alt="Screenshot 2025-04-17 at 19 05 54" src="https://github.com/user-attachments/assets/6b1f49ba-c9c7-4139-94a2-1d0bd1bb1d99" />

### Step 6: Commit changes

```
git add .

git commit -m "chore(setup): initialized backend with Express server"
```

**Why?** Frequent commits help you track changes and avoid losing work.

## Conclusion

As we wrap up Day 1 of our 14-Day Dev Journey, we've successfully laid the foundation for our real-time chat application by setting up a basic backend server. 
This initial step is crucial as it establishes the core structure upon which we'll build more complex features in the coming days. 
By organizing our project, initializing version control, and creating a simple server, we've taken significant strides in our full-stack and DevOps learning adventure. 
Stay tuned for Day 2, where we'll continue to expand on this foundation and delve deeper into the exciting world of development and operations. Let's keep learning and building together!
