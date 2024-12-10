// "file system" = fs
const fs = require("fs");

// "node http server" = http
const http = require("http");

//
const url = require("url");

//////////////////////////////////
// server


fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
    const productData = JSON.parse(data)

});



const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {

    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
        const productData = JSON.parse(data)
        res.writeHead(200, {
            // set content type ke application/json, agar data yang dikirimkan dapat dibaca oleh client sebagai data dalam format json
            'content-type': 'application/json'
        })        
        res.end(data);
    });

  } else {
    // status code
    // http header pada dasarnya adalah informasi tentang response yang kita kirimkan kembali
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>Page Not Found Lol</h1>");
  }

  // req adalah object yang berisi informasi tentang request yang dikirimkan oleh client
  // seperti alamat url, method, header, dan body

  // sedangkan res adalah object yang digunakan untuk mengirim response kepada client

  // mengirim kembali request ke client
  // Maksud dari res.end disini adalah untuk mengakhiri response yang dikirimkan ke client.
  // Mengapa harus menggunakan .end?
  // Karena res.end() menandakan akhir dari response, dan harus digunakan agar client mengetahui bahwa seluruh data telah diterima.
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});

// / / / / / / /
// routing


