import { Server } from "rjweb-server";
import { Runtime } from "@rjweb/runtime-node";
import { network } from "@rjweb/utils";

const server = new Server(Runtime, {
  port: 6756,
  proxy: {
    enabled: true,
    credentials: {
      authenticate: false,
    },
    ips: {
      validate: true,
      list: [new network.Subnet("192.168.96.2/32")],
    },
  },
});

server.path("/", (path) =>
  path.static("../content", {
    stripHtmlEnding: true,
  })
);

export const fileRouter = new server.FileLoader("/")
  .load("./routes", { fileBasedRouting: false })
  .export();



server.http(async (ctr) => {
  console.log(
    `${ctr.client.ip.usual()} --> (${ctr.url.method}) ${ctr.url.href}`
  );
});


server
  .start()
  .then(async (port) => {
    console.log(`Server started on port ${port}`);
  })
  .catch(console.error);
 // alexa what todo when you are bored?