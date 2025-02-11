const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const logger = require("morgan");
const fs = require("fs").promises;

const multer = require("multer");

//* Config Multer
// const upload = multer({ dest: "uploads/" }); // config simple por defecto 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  // * ACA usamos este filename para renombrar el path 82376786981243 -> img-44-simple.jpg
  filename: (req, file, cb) => {
    const originalName = `img-${req.params.id}-${file.originalname}`;
      cb(null, originalName);
  }
});
const upload = multer({ storage: storage });

//* MIDDELWARE - EL ORDEN ES ESCENCIAL
app.use(logger("dev"));
app.use(express.json()); // DATA x BODY  {} -> {...}
app.use(express.urlencoded({ extended: false })); // DATA FORM {} {...}

app.use("/static", express.static(path.join(__dirname, "public")));

function miMiddelware(req, res, next) {
  console.log("Time:", Date());
  // console.log("Soy el middelware casero");
  next();
}

app.use(miMiddelware);

app.get("/", (req, res) => {
  res.json({ HULK: "APLASTA" });
});

app.post("/upload/single/:id", upload.single("image"), async (req, res) => {
  try {
    console.log("---> ", req.file) //* en File está la data de la img 
    res.send(`imagen del Usuario guardada ${req.file.originalname}`)
  } catch (error) {
    res.send(`imagen ERROR ${error}`);
  }
});

module.exports = app;

/*
!IMPORTANTE

*MULTER PARA DB
const multer = require("multer");
const storage = multer.memoryStorage();
 
const upload = multer({
  // storage: storage,
  limits: {
    fieldSize: 4000000, //* son 4 mb
  },
  fileFilter: (_req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" 
      // || file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error(
          "Formato de archivo inválido. Sólo se permiten: .png, .jpg, .jpeg "
        )
      );
    }
  },
});

module.exports = { upload };

app.post("/upload/single/:id", upload.single("image"), async (req, res) => {
  console.log(req.file.buffer);


*/
