import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jsx": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);
  const cleanPath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = cleanPath === "\\" || cleanPath === "/" ? "index.html" : cleanPath.slice(1);
  const filePath = join(root, requestedPath);
  const finalPath = existsSync(filePath) && statSync(filePath).isFile() ? filePath : join(root, "index.html");

  response.writeHead(200, {
    "Content-Type": types[extname(finalPath)] || "application/octet-stream",
    "Cache-Control": "no-cache",
  });
  createReadStream(finalPath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Wedding invitation preview running at http://127.0.0.1:${port}`);
});
