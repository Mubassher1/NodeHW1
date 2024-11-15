const fs = require("fs/promises");
const path = require("path");

(async () => {
  const CREATE_BANNER = "CreateBanner";
  const DELETE_BANNER = "DeleteBanner";
  const CREATE_NAVBAR = "CreateNavbar";
  const DELETE_NAVBAR = "DeleteNavbar";
  const CREATE_ABOUT = "CreateAbout";
  const DELETE_ABOUT = "DeleteAbout";

  const indexPath = "./index.html";

  const initializeHTMLFile = async () => {
    try {
      await fs.access(indexPath);
    } catch (e) {
      const initialContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Backend Mastery with Node.js</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

        <style>
    * {
  box-sizing: border-box;
}

/* Style the body */
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

/* Header/logo Title */
.header {
  padding: 80px;
  text-align: center;
  background: #1abc9c;
  color: white;
}

/* Increase the font size of the heading */
.header h1 {
  font-size: 40px;
}

/* Style the top navigation bar */
.navbar {
  overflow: hidden;
  background-color: #333;
}

/* Style the navigation bar links */
.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

/* Right-aligned link */
.navbar a.right {
  float: right;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Banner Section */
    .bannerD {
      width: 100%;
      height: 300px;
      background-color: #333;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 20px;
    }

    </style>
      </head>
      <body class="bg-gray-100">
      </body>
      </html>
         `;
      await fs.writeFile(indexPath, initialContent, "utf-8");
    }
  };

  const appendToBody = async (content) => {
    const html = await fs.readFile(indexPath, "utf-8");
    const updatedHTML = html.replace("</body>", `${content}\n</body>`);
    await fs.writeFile(indexPath, updatedHTML, "utf-8");
  };

  //==================================
  const createBanner = async () => {
    const banner = `
    <div class="bannerD">
          <img src="https://nabeesaammal.com/wp-content/uploads/2023/08/education.jpg" alt="Exquisite Cuisine" class="w-full h-full object-cover" />
    </div>`;
    await appendToBody(banner);
    console.log(`Banner created on ${indexPath}`);
  };

  const deleteBanner = async () => {
    const html = await fs.readFile(indexPath, "utf-8");
    const start = '<div class="bannerD">';
    const end = "</div>";

    const heroIndexStart = html.indexOf(start);
    const heroIndexEnd = html.indexOf(end, heroIndexStart);

    if (heroIndexStart !== -1 && heroIndexEnd !== -1) {
      const updatedHTML =
        html.slice(0, heroIndexStart) + html.slice(heroIndexEnd + end.length);
      await fs.writeFile(indexPath, updatedHTML, "utf-8");
      console.log("Banner section has been deleted.");
    } else {
      console.log("No Banner section found to delete.");
    }
  };

  const createNavbar = async () => {
    const navbar = `
<div class="navbar">
  <a href="https://www.oneyear.academy/" target="_blank">Home</a>
  <a href="https://www.oneyear.academy/about-us" target="_blank">About</a>
  <a href="https://www.oneyear.academy/contact" target="_blank">contact</a>
  <a href="#Sitemap" class="right">Sitemap</a>
</div>`;
    await appendToBody(navbar);
    console.log(`Navbar created on ${indexPath}`);
  };

  const deleteNavbar = async () => {
    const html = await fs.readFile(indexPath, "utf-8");

    const navbarStart = '<div class="navbar">';
    const navbarEnd = "</div>";

    const navbarIndexStart = html.indexOf(navbarStart);
    const navbarIndexEnd = html.indexOf(navbarEnd, navbarIndexStart);

    if (navbarIndexStart !== -1 && navbarIndexEnd !== -1) {
      const updatedHTML =
        html.slice(0, navbarIndexStart) +
        html.slice(navbarIndexEnd + navbarEnd.length);
      await fs.writeFile(indexPath, updatedHTML, "utf-8");
      console.log("Navbar has been deleted.");
    } else {
      console.log("No navbar found to delete.");
    }
  };

  const createAbout = async () => {
    const aboutHTML = `
    <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fostering Excellence through Dedication</h2>
            <p class="mb-4">In today’s rapidly evolving world, the pursuit of excellence is more important than ever. At One Year Academy, we are dedicated to fostering excellence in every aspect of our education and training programs. Through our unwavering commitment to innovation and dedication to our students, we strive to empower individuals to reach their full potential and achieve their goals.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://www.oneyear.academy/_next/image?url=%2Fimages%2FMERN.jpg&w=640&q=75" alt="office content 1">
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://www.oneyear.academy/_next/image?url=%2Fimages%2FMERNWebiner.jpg&w=640&q=75" alt="office content 2">
        </div>
    </div>   
    </section>
    `;
    await appendToBody(aboutHTML);
    console.log(`About section created on ${indexPath}`);
  };

  const deleteAbout = async () => {
    const html = await fs.readFile(indexPath, "utf-8");
    const start = '<section class="bg-white dark:bg-gray-900">';
    const end = "</section>";

    const heroIndexStart1 = html.indexOf(start);
    const heroIndexEnd1 = html.indexOf(end, heroIndexStart1);

    if (heroIndexStart1 !== -1 && heroIndexEnd1 !== -1) {
      const updatedHTML =
        html.slice(0, heroIndexStart1) + html.slice(heroIndexEnd1 + end.length);
      await fs.writeFile(indexPath, updatedHTML, "utf-8");
      console.log("About section has been deleted.");
    } else {
      console.log("No about section found to delete.");
    }
  };

  const myFileSystem = await fs.open("./command.txt", "r");
  myFileSystem.on("change", async function () {
    let size = (await myFileSystem.stat()).size;
    let buffer = Buffer.alloc(size);
    let offset = 0;
    let length = buffer.byteLength;
    let position = 0;

    await myFileSystem.read(buffer, offset, length, position);

    const command = buffer.toString("utf-8");

    await initializeHTMLFile();

    if (command.startsWith(CREATE_BANNER)) {
      await createBanner();
    } else if (command.startsWith(DELETE_BANNER)) {
      await deleteBanner();
    } else if (command.startsWith(CREATE_NAVBAR)) {
      await createNavbar();
    } else if (command.startsWith(DELETE_NAVBAR)) {
      await deleteNavbar();
    } else if (command.startsWith(CREATE_ABOUT)) {
      await createAbout();
    } else if (command.startsWith(DELETE_ABOUT)) {
      await deleteAbout();
    } else {
      console.log("Invalid Command");
    }
  });

  // watcher
  const watcher = fs.watch("./command.txt");
  for await (const event of watcher) {
    if (event.eventType == "change") {
      myFileSystem.emit("change");
    }
  }
})();
