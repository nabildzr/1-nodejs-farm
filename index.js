// "file system" = fs
const fs = require("fs");

// "node http server" = http
const http = require("http");

//
const url = require("url");


// "module" = replaceTemplate from replaceTemplate.js
const replaceTemplate = require('./modules/replaceTemplate.js')
//////////////////////////////////
// server



// overview
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);

// card
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);

// product
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

// data
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
 
 
  const {query, pathname} = url.parse(req.url, true);
 

  // overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const cardsHTML = dataObj.map((el) => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML)


    res.end(output);

    // product page
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });


    // mengambil id dari query string
    const product = dataObj[query.id];

    const output = replaceTemplate(tempProduct, product)
    
    // result
    res.end(output)

    // api
  } else if (pathname === "/api") {
    res.writeHead(200, {
      // set content type ke application/json, agar data yang dikirimkan dapat dibaca oleh client sebagai data dalam format json
      "Content-type": "application/json",
    });
    res.end(data);

    // not found
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
