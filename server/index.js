const express = require('express');
const loginRoutes = require('./routes/login');
const labTestRoutes = require('./routes/lab-test');
const { connectDB } = require( './config/db' );
require('dotenv').config();
const path = require("path");
const multer = require("multer");
const { createTest } = require( './controllers/lab-test' );


const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads");
	},
	filename: function (req, file, cb) {
		const fileName =
			path.basename(file.originalname, path.extname(file.originalname)) +
			Date.now().toString() +
			path.extname(file.originalname);
		cb(null, fileName);
	},
});

const upload = multer({ storage: storage });


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/uploads", express.static("./uploads"));
app.use("/", express.static("./uploads/build"));
app.use("/create", express.static("./uploads/build"));
app.use("/details", express.static("./uploads/build"));


const PORT = 4000 || process.env.PORT

app.use('/api/details', labTestRoutes)
app.use('/api/login', loginRoutes)
app.post('/api/create', upload.single("image"), createTest)

app.use('*', (req,res)=>{
    res.send("error resource doesn't exist")
})



app.listen(PORT, async ()=>{
    await connectDB(process.env.MONGO_URI)
    console.log(`server is running at port: ${PORT}`);
})