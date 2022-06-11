const express = require('express'); 
const port = 3001
const bodyParser = require('body-parser'); 

const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('./config/smtp')

const app = express(); 
const cors = require('cors');

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

app.use(cors());
app.use(express.static('../frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//middleware
app.use(express.json());

app.post('/contato', (req, res) => {

	const { name, phone, email, text } = req.body
 
	async function sendEmail() {
		const transporter =  nodemailer.createTransport({
			host: SMTP_CONFIG.host,
			port: SMTP_CONFIG.port,
			secure: false,
			auth: {
				user: SMTP_CONFIG.user,
				pass: SMTP_CONFIG.pass,
			},
			tls: {
				rejectUnauthorized: false
			}
		});

		let sendMessage = await transporter.sendMail({
			text: "olá", 
			subject: "Assunto do email", 
			from: 'Gabriel <gabriel.carneiro@sou.inteli.edu.br>',
			to: ["gabriel.carneiro@sou.inteli.edu.br", "gabrielcarneiro.geek@gmail.com"], 
		})


		console.log("Message sent: ", sendMessage.messageId, sendMessage)
	}


	sendEmail()
})

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