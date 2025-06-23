document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showLoginBtn = document.getElementById('showLogin');
    const showRegisterBtn = document.getElementById('showRegister');

    const loginRegisterBtn = document.getElementById('loginRegisterBtn'); // Botão "Entrar" do formulário de Login
    const registerSubmitBtn = document.getElementById('registerSubmitBtn'); // Botão "Cadastrar" do formulário de Cadastro

    const loginEmailInput = document.getElementById('loginEmail');
    const loginPasswordInput = document.getElementById('loginPassword');
    const registerEmailInput = document.getElementById('registerEmail');
    const registerPasswordInput = document.getElementById('registerPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const messageDisplay = document.getElementById('message');

    // Função para exibir mensagens de status
    function showMessage(msg, type) {
        messageDisplay.textContent = msg;
        messageDisplay.className = `auth-status show ${type}`; // Usa auth-status e show
        setTimeout(() => {
            messageDisplay.classList.remove('show');
            // Opcional: Limpar a mensagem após esconder
            setTimeout(() => {
                messageDisplay.textContent = '';
                messageDisplay.className = 'auth-status'; // Resetar a classe
            }, 500); // Pequeno delay para a transição
        }, 3000);
    }

    // Alternar entre formulários de Login e Cadastro
    showLoginBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        showLoginBtn.classList.add('active');
        showRegisterBtn.classList.remove('active');
        messageDisplay.classList.remove('show'); // Esconde a mensagem ao trocar de aba
        messageDisplay.textContent = ''; // Limpa o texto da mensagem
    });

    showRegisterBtn.addEventListener('click', () => {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        showRegisterBtn.classList.add('active');
        showLoginBtn.classList.remove('active');
        messageDisplay.classList.remove('show'); // Esconde a mensagem ao trocar de aba
        messageDisplay.textContent = ''; // Limpa o texto da mensagem
    });

    // Lógica para o botão "Entrar" (Login)
    loginRegisterBtn.addEventListener('click', () => {
        const email = loginEmailInput.value;
        const password = loginPasswordInput.value;

        if (email === '' || password === '') {
            showMessage('Por favor, preencha todos os campos.', 'error');
            return;
        }

        // Simulação de login
        if (email === 'admin@admin.gw' && password === 'admingw',email === 'teste@teste.com' && password === 'testecom') {
            showMessage('Login bem-sucedido! Redirecionando...', 'success');
            // Redireciona para a página de cursos (index.html) após um pequeno delay
            setTimeout(() => {
                window.location.href = '/interface/index.html'; // <<< Redireciona para a sua página de cursos
            }, 1500);
        } else {
            showMessage('Email ou senha inválidos.', 'error'); // Apenas para login
        }
    });

    // Lógica para o botão "Cadastrar" (Registro)
    registerSubmitBtn.addEventListener('click', () => {
        const email = registerEmailInput.value;
        const password = registerPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (email === '' || password === '' || confirmPassword === '') {
            showMessage('Por favor, preencha todos os campos.', 'error');
            return;
        }

        if (password.length < 6) {
            showMessage('A senha deve ter pelo menos 6 caracteres.', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showMessage('As senhas não coincidem.', 'error');
            return;
        }

        // Simulação de cadastro
        showMessage('Cadastro simulado com sucesso! Redirecionando...', 'success');
        // Redireciona para a página de cursos (index.html) após um pequeno delay
        setTimeout(() => {
            window.location.href = 'index.html'; // <<< Redireciona para a sua página de cursos
        }, 1500);
    });


    // Adicione eventos para os botões sociais (apenas exibir uma mensagem)
    document.querySelectorAll('.social-login .social-button').forEach(button => {
        button.addEventListener('click', () => {
            showMessage('Funcionalidade social não implementada neste exemplo.', 'error');
        });
    });
});