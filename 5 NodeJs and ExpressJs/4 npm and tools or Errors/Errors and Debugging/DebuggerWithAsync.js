console.log("Here");
req.on("end", () => {
  const parseBody = Buffer.concat(body).toString();
  console.log(parseBody);
  const params = new URLSearchParams(parseBody);
  const jsonObject = {};
  for (const [key, value] of params.entries()) {
    jsonObject[key] = value;
  }
  const jsonString = JSON.stringify(jsonObject);
  console.log(jsonString);
  // Async Operation
  fs.writeFile("user-details.txt", jsonString, (error) => {
    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  });
});
