import authRoute from "./auth";
import userRouter from "./user";
import postRouter from "./post";
import friendRouter from "./friend";
import actionRouter from "./action";

function routes(app) {
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRouter); 
  app.use("/api/posts", postRouter);
  app.use("/api/friends", friendRouter);
  app.use("/api/action", actionRouter)
}

export default routes;
