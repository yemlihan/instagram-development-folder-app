const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: 'uploads/' }).array('files');

app.post("/upload", upload.array("files"), (req, res) => {
  const files = req.files;
  if (files.length === 0) {
    return res.status(200).send({ message: "Wrong File!!!" });
  }
  res.send({ items: req.files, message: "Successful" });
});

app.get("/gts", (req, res) => {
  const getFollowers = () => {
    return new Promise((resolve, reject) => {
      const jsonFilesFollowers = [];
      fs.readdir("./uploads", (err, files) => {
        if (err) {
          return reject(err);
        }
        files.forEach((file) => {
          if (path.extname(file) === ".json" && file === "followers_1.json") {
            const filePath = path.join("./uploads", file);
            const jsonData = fs.readFileSync(filePath, "utf-8");
            const newJsonData = JSON.parse(jsonData).map((item) => {
              return item.string_list_data;
            });
            newJsonData.map((item) => {
              jsonFilesFollowers.push(item[0]);
            });
          }
        });
        resolve(jsonFilesFollowers);
      });
    });
  };

  const getFollowing = () => {
    return new Promise((resolve, reject) => {
      const jsonFilesFollowing = [];
      fs.readdir("./uploads", (err, files) => {
        if (err) {
          return reject(err);
        }
        files.forEach((file) => {
          if (path.extname(file) === ".json" && file === "following.json") {
            const filePath = path.join("./uploads", file);
            const jsonData = fs.readFileSync(filePath, "utf-8");
            const followings = JSON.parse(jsonData).relationships_following;
            const newJsonData = followings.map((item) => {
              return item.string_list_data;
            });
            newJsonData.map((item) => {
              jsonFilesFollowing.push(item[0]);
            });
          }
        });
        resolve(jsonFilesFollowing);
      });
    });
  };

  Promise.all([getFollowers(), getFollowing()])
    .then((results) => {
      const followers = results[0];
      const following = results[1];
      const allUsers = [...followers, ...following];
      res.send(allUsers);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/recent", (req, res) => {
  fs.readFile("./uploads/recent_follow_requests.json", (err, data) => {
    if (err) return res.status(200).send({ message: "error File!!!" });
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});

app.get("/unfollow", (req, res) => {
  fs.readFile(
    "./uploads/recently_unfollowed_accounts.json",
    (err, data) => {
      if (err) return res.status(200).send({ message: "error File!!!" });
      const jsonData = JSON.parse(data);
      res.send(jsonData);
    }
  );
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
