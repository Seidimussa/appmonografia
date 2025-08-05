const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcrypt');

const app = express();
// Converter dados para formato JSON
app.use(express.json());
// Servir arquivos estáticos da pasta "public"
app.use(express.static("public"));
// Servir arquivos do diretório "interface"
app.use("/interface", express.static(path.resolve(__dirname, '..', '..', 'interface')));

app.use(express.urlencoded({ extended: false }));
// Usar EJS como o view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup", { errorMessage: null }); // Passa null para evitar erros na primeira renderização
});

// Registrar Usuário
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };

    // Verificar se o nome de usuário já existe
    const existingUser = await collection.findOne({ name: data.name });

    if (existingUser) {
        // Se o usuário já existe, renderiza a página de cadastro com uma mensagem de erro
        res.render('signup', { errorMessage: 'Usuário já existe. Por favor, escolha um nome de usuário diferente.' });
    } else {
        // Criptografar a senha
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword;

        await collection.insertMany(data);
        console.log('Usuário registrado com sucesso!');

        // Renderiza a página de login com a flag de sucesso
        res.render("login", { successMessage: "Usuário registrado com sucesso!" });
    }
});

// Login do Usuário 
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            res.send("Nome de usuario não encontrado");
        }
        // Comparar a senha
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            res.send("Senha incorreta");
        } else {
            // Redireciona para a página da interface após o login
            res.redirect("/interface/index.html");
        }
    } catch {
        res.send("Detalhes incorretos");
    }
});

// Definir a porta
const port = 5000;
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});