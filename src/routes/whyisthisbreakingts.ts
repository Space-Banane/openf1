import { fileRouter } from "../index";
export = new fileRouter.Path("/").http("GET", "/hello", (http) =>
  http.onRequest((ctr) => {
    ctr.print("Hello");
  })
);
