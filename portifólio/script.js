// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar fixa e mudança de cor no scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#001219';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '#005f73';
        navbar.style.boxShadow = 'none';
    }
});

// Modal da galeria
function openModal(img) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Fechar modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Aqui você pode adicionar o código para enviar o formulário
    // Por exemplo, usando fetch() para uma API ou EmailJS
    
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`);
    this.reset();
});

// Animação ao rolar a página
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project-card, .gallery-item, .profile');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Define as propriedades iniciais para a animação
window.onload = function() {
    const elements = document.querySelectorAll('.project-card, .gallery-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Anima o perfil separadamente
    const profile = document.querySelector('.profile');
    if (profile) {
        profile.style.opacity = '0';
        profile.style.transform = 'translateY(20px)';
        profile.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
    }
    
    // Dispara a animação inicial
    animateOnScroll();
};

window.addEventListener('scroll', animateOnScroll);

// Personagem falante
const characterMessages = [
    "Olá! Sou a Dory. Vamos explorar os oceanos juntos?",
    "Sabia que os oceanos cobrem 71% da superfície da Terra?",
    "Os recifes de coral são os 'berçários do mar'!",
    "As baleias azuis são os maiores animais que já existiram!",
    "Proteger os oceanos é proteger nosso futuro!",
    "Você sabia que menos de 5% dos oceanos foram explorados?",
    "As tartarugas marinhas existem há mais de 100 milhões de anos!",
    "O oceano produz mais de 50% do oxigênio do planeta!",
    "O maior animal do mundo não é a baleia azul, mas sim uma colônia de corais na Austrália!",
    "A vida começou no oceano há cerca de 3,5 bilhões de anos!"
];

function showRandomMessage() {
    const speechBubble = document.getElementById('speech-bubble');
    const speechText = document.getElementById('speech-text');
    
    // Seleciona uma mensagem aleatória
    const randomMessage = characterMessages[Math.floor(Math.random() * characterMessages.length)];
    speechText.textContent = randomMessage;
    
    // Mostra o balão de fala
    speechBubble.style.display = 'block';
    
    // Esconde o balão após 7 segundos
    setTimeout(() => {
        speechBubble.style.display = 'none';
    }, 7000);
}

// Mostra a primeira mensagem quando a página carrega
window.addEventListener('load', function() {
    setTimeout(showRandomMessage, 1500);
    
    // Mostra novas mensagens a cada 30 segundos
    setInterval(showRandomMessage, 30000);
});

// Eventos de clique
document.getElementById('floating-character').addEventListener('click', showRandomMessage);
document.getElementById('close-bubble').addEventListener('click', function() {
    document.getElementById('speech-bubble').style.display = 'none';
});