import ping from "ping";
import dotenv from "dotenv";
dotenv.config();

setInterval(() => {
  ping.sys.probe(process.env.IP, function (isAlive) {
    const msg = isAlive
      ? "host " + process.env.IP + " is alive"
      : "host " + process.env.IP + " is dead";
    console.log(msg);
  });
}, process.env.INTERVAL * 1000);
