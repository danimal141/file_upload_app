function route(handle, pathname, res, req) {
  console.log("About to route a request for " + pathname);

  if (typeof handle[pathname] === "function") {
    return handle[pathname](res, req);
  } else {
    console.log("No Request handler found for "+ pathname);
    res.writeHead(404, {"Content-Type" : "text/plain"});
    res.write("404 Not Found");
    res.end();
  }
}

exports.route = route;
