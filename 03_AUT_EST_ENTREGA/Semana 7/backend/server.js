const express = require('express'); 
const port = 3001
const app = express(); 

const cors = require('cors');

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

app.use(cors());
app.use(express.static('../frontend'));

//middleware
app.use(express.json()); 

app.get('/dados', (req, res) => {
	async function insertDB() {
		let db = await sqlite.open({ filename: './curriculoDatabase.db', driver: sqlite3.Database});

		const dados = await db.get('SELECT * FROM dados');
		
		res.json(dados)
		db.close();
	}
	
	insertDB();
}); 


app.get('/experiencia', (req, res) => {
	async function insertDB() {
		let db = await sqlite.open({ filename: './curriculoDatabase.db', driver: sqlite3.Database});

		const experiencia = await db.get('SELECT * FROM experiencia');

		res.json(experiencia);
		db.close();
	}

	insertDB(); 
})

app.get('/formacao', (req, res) => {
	async function insertDB() {
		let db = await sqlite.open({ filename: './curriculoDatabase.db', driver: sqlite3.Database});
		const formacao = await db.get('SELECT * FROM formacao'); 
		res.json(formacao);
		db.close();
	}

	insertDB(); 
})

app.get('/idiomas', (req, res) => {
	async function insertDB() {
		let db = await sqlite.open({ filename: './curriculoDatabase.db', driver: sqlite3.Database});
		const idiomas = await db.get('SELECT * FROM idiomas');
		res.json(idiomas)
		db.close();
	}

	insertDB(); 
})
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
}); 