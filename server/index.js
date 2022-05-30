import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from './Routes/posts.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// MONGOOSE CONNECTION

const CONNECTION_URL =
  "mongodb+srv://kartikey11:kartikey11@cluster0.eylrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `MongoDB connected and server is running successfully on PORT: ${PORT}`
      )
    )
  )
  .catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);

// ROUTES MIDDLEWHERE

app.use('/posts',postRoutes);