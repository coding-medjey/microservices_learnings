import express from "express";
import { currentUserRouter } from "./routes/currentUser";
import { siginRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();

app.use(express.json());

app.use(currentUserRouter);
app.use(siginRouter);
app.use(siginRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
