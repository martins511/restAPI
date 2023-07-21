const Sequelize = require("sequelize");

const express = require("express");

const db = require("./models");
//const { get } = require("express/lib/response");
//const rope = require("./control")
const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  try {
   
    const result = await db.User.create(req.body);
    if (result) {
      res.status(200).json({ message: "Create successfull", post: result });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong", error: error });
  }
});

//app.use("/ade",rope)

app.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const updatePost = req.body;
  try {
    const result = await db.User.update(updatePost, { where: { id: id } });
    if (result) {
      res
        .status(200)
        .json({ message: "Post updated successfully", post: result });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong", error: error });
  }
});

app.get("/fetchAll", async (req, res) => {
  try {
    const result = await db.User.findAll();
    if (result) {
      res.status(200).json({ get: result });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong", error: error });
  }
});

app.get("/find/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const result = await db.User.findAll({ where: { name: name } });
    if (result) {
      res.status(200).json({ get: result });
    }else{
        res.status(200).json({message:"Something went wrong"})
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong", error: error });
  }
});

app.listen(1210, () => {
  console.log("Listening to port 1210");
});
