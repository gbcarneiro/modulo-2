const express = require("express");
const path = require("path");
const port = 3001;

const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{ 
	res.render("index")
});

app.listen(port,()=>{ 
	console.log(`Servidor iniciado na porta http://localhost:${port}/`)
});