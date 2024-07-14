function showMember(memberId) {
    const intro = document.getElementById('intro');
    const memberContent = document.getElementById('member-content');

    if (intro && !intro.classList.contains('hidden')) {
        intro.style.animation = 'fadeOut 1s ease-out';
        intro.addEventListener('animationend', () => {
            intro.classList.add('hidden');
            intro.style.display = 'none';
            memberContent.style.display = 'block';
            memberContent.style.animation = 'fadeIn 1s ease-in';
            updateMemberContent(memberId);
        }, { once: true });
    } else {
        memberContent.style.animation = 'fadeOut 1s ease-out';
        memberContent.addEventListener('animationend', () => {
            memberContent.style.animation = 'fadeIn 1s ease-in';
            updateMemberContent(memberId);
        }, { once: true });
    }
}

function updateMemberContent(memberId) {
    const memberContent = document.getElementById('member-content');
    let content = '';

    if (memberId === 'member1') {
        content = `
            <img src="assets/profile-pic-lk.jpg" alt="Foto do Membro 1">
            <h2>Lyan Kaleu</h2>
            <p>Sou estudante de <i>ciência da computação</i>, com conhecimento intermediário em back-end e atualmente estou estudando front-end em busca de uma oportunidade no mercado.</p>
            <a href="portfolio-lk.html">Veja o portfólio</a>
        `;
    } else if (memberId === 'member2') {
        content = `
            <img src="assets/profile-pic-ghe.jpg" alt="Foto do Membro 2">
            <h2>Gerson Reis</h2>
            <p>Sou estudante de <i>técnico em desenvolvimento de sistemas</i>, tenho uma paixão por tecnologia e jogos. Estou sempre em busca de conhecimentos e experiências na minha jornada.</p>
            <a href="Portifolio - Gerson/index.html">Veja o portfólio</a>
        `;
    } else if (memberId === 'member3') {
        content = `
            <img src="assets/profile-pic-pa.png" alt="Foto do Membro 3">
            <h2>Pedro Augusto</h2>
            <p>Sou estudante do curso <i>técnico em desenvolvimento de sistemas</i>, comecei a estudar programação há um ano com intuito de ingressar no mercado de trabalho em TI e estou sempre buscando aprender e se desenvolver profissionalmente.</p>
            <a href="Portfolio - Pedro Augusto/portfolio.html">Veja o portfólio</a>
        `;
    }

    memberContent.innerHTML = content;
}

// Inicialmente, mostrar a introdução
document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    if (intro) {
        intro.style.display = 'block';
        intro.style.animation = 'fadeIn 1s ease-in';
    }
});