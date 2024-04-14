import authRoute from "./auth";
import userRouter from "./user";
import postRouter from "./post";
import friendRouter from "./friend";


function routes(app) {
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRouter); 
  app.use("/api/posts", postRouter);
  app.use("/api/friends", friendRouter);
}

export default routes;
