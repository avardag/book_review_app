const express = require("express"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  mongoose = require("mongoose"),
  config = require("../config/config").get(process.env.NODE_ENV),
  app = express();

// /mongo settings
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);
//db models
const { User } = require("./models/user");
const { Book } = require("./models/book");

app.use(bodyParser.json());
app.use(cookieParser());

// ROUTES // // // //
// GET
// app.get("/api/book/:id", (req, res)=>{
//   let id = req.params.id;

//   Book.findById(id, (err, doc)=>{
//     if (err) return res.status(400).send(err);
//     res.json(doc);
//   })
// })
app.get("/api/book", (req, res)=>{
  // localhost:3001/api/book/?id=5b720f575056d522f20fbe2a
  let id = req.query.id;

  Book.findById(id, (err, doc)=>{
    if (err) return res.status(400).send(err);
    res.send(doc);
  })
})

app.get("/api/books", (req, res)=>{
  //localhost:3001/api/books?skip=3&limit=2&order=asc
  let skip = parseInt(req.query.skip);
  let limit = parseInt(req.query.limit);
  let order = req.query.order; // order = asc || desc

  Book.find().skip(skip).sort({_id:order}).limit(limit).exec((err, doc)=>{
    if (err) return res.status(400).send(err);
    res.send(doc);
  })

})
//POST
app.post("/api/book", (req, res) => {
  const book = new Book(req.body);

  book.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(400).json({
      post: true,
      bookId: doc._id
    });
  });
});
//UPDATE
app.put("/api/book", (req, res)=>{
  Book.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, doc)=>{
    if (err) return res.status(400).send(err);
    res.json({
      success: true,
      doc: doc
    })
  })
})

// DELETE
app.delete("/api/book", (req, res)=>{
  // /api/book/?id
  let id = req.query.id;
  Book.findByIdAndRemove(id, (err, doc)=>{
    if (err) return res.status(400).send(err);
    res.json(true)
  })
})

// USER ROUTES ///
//POST
app.post("/api/register", (req, res)=>{
  const user = new User(req.body);

  user.save((err, doc)=>{
    if (err) return res.json({success:false});
    res.status(200).json({
      success: true,
      user: doc
    })
  })
})


//SERVER
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
