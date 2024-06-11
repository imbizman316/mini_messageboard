import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-us"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-us"),
  },
];

app.get("/", (req, res) => {
  res.render("home", {
    messages,
  });
});

app.post("/message", (req, res) => {
  messages.push({
    text: req.body.content,
    user: req.body.name,
    added: new Date().toLocaleDateString("en-us"),
  });
  res.redirect("/");
});

app.delete("/message", (req, res) => {
  console.log(req.name);
});

app.listen(8000, () => {
  console.log(`listening on http://localhost:8000`);
});
