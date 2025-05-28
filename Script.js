// Verificar se estamos na página de login antes de adicionar event listener
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Animação do botão
        const button = document.querySelector('.login-button');
        button.style.background = 'rgba(80, 200, 120, 0.8)';
        button.textContent = 'Entrando...';

        setTimeout(() => {
            button.style.background = 'rgba(100, 100, 100, 0.8)';
            button.textContent = 'Entrar';
            alert('Login realizado com sucesso!');
        }, 1500);

        const userInput = this.querySelector('input[type="text"]');
        const passwordInput = this.querySelector('input[type="password"]');

        let isValid = true;

        const userError = document.getElementById('userError');
        const passwordError = document.getElementById('passwordError');
        
        if (userError) userError.style.display = 'none';
        if (passwordError) passwordError.style.display = 'none';

        if (userInput.value.trim() === '') {
            if (userError) userError.style.display = 'block';
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            if (passwordError) passwordError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            setTimeout(() => {
                window.location.href = './Pages/Home.html';
            }, 1000);
        }
    });
}

// Funcionalidade da busca - verificar se existe
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', function () {
        const searchValue = document.querySelector('.search-input').value;
        if (searchValue.trim()) {
            alert(`Buscando por: ${searchValue}`);
        } else {
            alert('Digite algo para buscar!');
        }
    });
}

// Busca ao pressionar Enter
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const searchBtn = document.querySelector('.search-btn');
            if (searchBtn) searchBtn.click();
        }
    });
}

// Animação nos cards dos jogos
const gameItems = document.querySelectorAll('.game-item');
gameItems.forEach((item, index) => {
    // Animação de entrada
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';

    setTimeout(() => {
        item.style.transition = 'all 0.6s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, index * 200);

    // Efeito de hover melhorado
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.5)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
    });

    // Click nos jogos
    item.addEventListener('click', function () {
        const teams = this.querySelectorAll('.team-name');
        const date = this.querySelector('.game-date').textContent;
        alert(`Jogo: ${teams[0].textContent} vs ${teams[1].textContent}\nData: ${date}`);
    });
});

// Efeito no ícone do usuário
const userIcon = document.querySelector('.user-icon');
if (userIcon) {
    userIcon.addEventListener('click', function () {
        alert('Menu do usuário');
    });
}