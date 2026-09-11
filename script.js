/* ============================================================
   SITE ROMÂNTICO DE ANIVERSÁRIO
   JavaScript Principal

   ╔══════════════════════════════════════════════════════════╗
   ║  ÁREA DE CONFIGURAÇÃO - EDITE AQUI SEUS DADOS PESSOAIS  ║
   ╚══════════════════════════════════════════════════════════╝
   ============================================================ */

const CONFIG = {

  // ── 1. NOME DELA ──────────────────────────────────────────
  nomeDela: "Meu Amor",

  // ── 2. SEU NOME ───────────────────────────────────────────
  seuNome: "Gabriel Weber",

  // ── 3. DATA QUE COMEÇARAM A NAMORAR (formato: Ano, Mês-1, Dia, Hora, Minuto)
  //    ⚠️ O mês começa em 0! (Janeiro = 0, Fevereiro = 1, ..., Dezembro = 11)
  dataInicioNamoro: new Date(2023, 5, 7, 19, 40), // 7 de Junho de 2023 às 19:40
  dataInicioNamero: null, // compatibilidade com versões anteriores

  // ── 4. DATA DO ANIVERSÁRIO DELA (formato: Ano, Mês-1, Dia)
  aniversarioDela: new Date(2026, 7, 23), // Exemplo: 23 de Agosto de 2026

  // ── 5. MÚSICA DO YOUTUBE ─────────────────────────────────
  musicaYoutube: "5OoOIgMCaBE",

  // ── 6. FOTOS DA GALERIA ───────────────────────────────────
  //    Coloque suas fotos na mesma pasta e edite os dados abaixo.
  //    Para cada foto: { src: "nome-do-arquivo.jpg", legenda: "Legenda" }
  fotos: [
    { src: "foto1.jpg", legenda: "O nosso melhor momento ❤️" },
    { src: "foto2.jpg", legenda: "Um dos nossos melhores cliques." },
    { src: "foto3.jpg", legenda: "Você é a pessoa mais especial da minha vida." },
    { src: "foto4.jpg", legenda: "Cada foto nossa guarda um pedaço do nosso amor." },
    { src: "foto5.jpg", legenda: "Essas lembranças são as que eu mais quero preservar." },
    { src: "foto6.jpeg", legenda: "Nós na Oktoberfest de Igrejinha 🍻❤️" },
    { src: "foto7.jpeg", legenda: "Aproveitando a vista incrível nesse balanço 🌳💑" },
    { src: "foto8.jpeg", legenda: "Prontos para uma noite muito especial ✨❤️" },
    { src: "foto9.jpeg", legenda: "Relâmpago McQueen e Sally 🚗❤️" },
  ],

  // ── 7. MOMENTOS DA LINHA DO TEMPO ─────────────────────────
  //    Edite as datas, títulos e descrições abaixo
  timeline: [
    {
      data: "Junho de 2023",
      titulo: "Foi o mês aonde nossa historia começou",
      texto: "Hoje, olhando para trás, vejo o quanto aquele mês foi especial e como uma simples decisão mudou completamente nossas vidas. Junho sempre será o nosso mês em que começou a nossa história de amor.."
    },
    {
      data: "Junho de 2023",
      titulo: "Nosso primeiro encontro",
      texto: "Lembro de cada detalhe daquele dia. O nervosismo, as risadas, a certeza de que eu queria te ver de novo."
    },
    {
      data: "7 de Junho de 2023",
      titulo: "O começo do nosso relacionamento",
      texto: "Oficialmente juntos. O começo de uma história que eu mal podia esperar para viver."
    },
    {
      data: "Março de 2024",
      titulo: "Primeira vez que veio na minha casa e desde então virou nossa parada de final de semana ",
      texto: "Eu lembro de você chorando porque achava que não conseguiria vir, e eu fiz de tudo para que desse certo. Até precisei pedir para minha mãe sair de casa para que você pudesse vir.Pode parecer uma coisa simples, mas aquele momento ficou guardado na minha memória. Foi mais um daqueles pequenos momentos que, sem perceber, foram construindo a nossa história e deixando nosso amor ainda mais especial"
    },
    {
      data: "Junho 2024",
      titulo: "Nosso primeiro aniversario de namoro",
      texto: "Foi incrível olhar para tudo o que vivemos desde junho de 2023 e perceber o quanto nossa história já tinha crescido. Nosso primeiro ano foi apenas o começo de muitos outros que ainda quero viver ao seu lado ."
    },
    {
      data: "Julho de 2024",
      titulo: "Primeira vez que foi na igreja ",
      texto: "Julho de 2024 foi especial porque foi a primeira vez que você foi comigo à igreja. Fiquei muito feliz em ver que você gostou de estar lá e, mais ainda, por perceber que aquele momento acabou se tornando algo nosso."
    },
    {
      data: "Novembro de 2024 ",
      titulo: "Quando começamos a olhar outer banks juntos",
      texto: "Em novembro de 2024, começamos a assistir Outer Banks juntos. Mesmo você já tendo assistido algumas temporadas sem mim, foi muito especial poder acompanhar a série ao seu lado."
    },
    {
      data: "Março de 2025",
      titulo: "Primeira viagem junto ",
      texto: "Março de 2025 marcou nossa primeira viagem juntos para a praia, um momento que guardarei para sempre com muito carinho. Que seja apenas o começo de muitas aventuras ao seu lado.."
    },
    {
      data: "Junho de 2025",
      titulo: "Comemoração de dois anos de nós",
      texto: "Junho de 2025 marcou nossos dois anos juntos. Comemoramos nosso amor em Gramado, saboreando um fondue e vivendo mais um momento especial que ficará para sempre na minha memória.."
    },
    {
      data: "Setembro de 2025",
      titulo: "Seu aniversario de 15",
      texto: "Setembro de 2025 foi marcado pelo seu aniversário de 15 anos, um momento cheio de emoções e acontecimentos. Foi também quando, finalmente, seu pai autorizou nosso namoro, tornando aquele momento ainda mais especial para nós.."
    },
    {
      data: "Dezembro de 2025",
      titulo: "Sua formatura",
      texto: "Dezembro de 2025 foi um mês muito especial, pois tive a felicidade de estar ao seu lado na sua formatura. Ver você conquistando mais essa etapa me encheu de orgulho e felicidade.."
    },
    {
      data: "Setembro de 2026",
      titulo: "Hoje seu aniversario de 16",
      texto: "Hoje, 11 de setembro de 2026, comemoramos seus 16 anos. É muito especial poder estar ao seu lado em mais um aniversário e acompanhar cada fase da pessoa incrível que você está se tornando. Sou muito feliz por ter você na minha vida e espero continuar vivendo muitos momentos ao seu lado. Eu te amo muito e sempre vou estar ao seu lado.."
    },
  ],

  // ── 8. CARTAS PARA ELA ────────────────────────────────────
  //    Cada carta tem: título (exibido no card), mensagem (exibida ao clicar)
  cartas: [
    {
      titulo: "Nosso começo",
      mensagem: `Meu amor,

Aquele dia no Igrejinha, olhando o Sub-15 jogar, foi um dia que ficou marcado para mim. Depois de meses tentando finalmente conseguir sair contigo, deu certo! 😂❤️

Claro que a Carol estava lá segurando vela e atrapalhando um pouquinho o nosso momento, mas, mesmo assim, foi muito especial estar contigo.

Depois daquele dia, eu tive ainda mais certeza de que era você quem eu queria ao meu lado. Eu comecei a imaginar um futuro contigo, construir uma família e viver muitos momentos juntos.

E esse é um dos motivos que me fazem te amar tanto e querer continuar contigo: porque quando penso no meu futuro, é você que eu imagino nele. ❤️`
    },
    {
      titulo: "Você",
      mensagem: `Meu amor,

Eu amo seu sorriso, seu jeito, sua voz, suas manias e até as pequenas coisas que você acha que ninguém percebe.

Mas, acima de tudo, amo a pessoa que você é.

Você é única para mim e eu sou muito feliz por ter você. ❤️`
    },
    {
      titulo: "Nossas lembranças",
      mensagem: `Meu amor,

Cada abraço, cada risada, cada passeio e cada conversa fazem parte da nossa história.

São momentos que eu guardarei para sempre no coração.

E o melhor de tudo é saber que ainda temos muitas lembranças para criar juntos.

Eu amo nossa história. ❤️`
    },
    {
      titulo: "Se pudesse voltar",
      mensagem: `Meu amor,

Se eu pudesse voltar no tempo, faria tudo novamente.

Cada escolha, cada momento e cada caminho que me trouxe até você valeu a pena.

Porque no final de tudo, encontrei a pessoa que eu mais amo.

Você. ❤️`
    },
    {
      titulo: "Nosso futuro",
      mensagem: `Meu amor,

Eu não sei exatamente o que o futuro nos reserva, mas sei que quero continuar vivendo muitos momentos ao seu lado.

Quero acompanhar seus sonhos, suas conquistas e construir novas lembranças com você.

Que nosso futuro seja ainda mais bonito que o nosso passado. ❤️`
    },
    {
      titulo: "Hoje",
      mensagem: `Meu amor,

Hoje, no seu aniversário, quero apenas lembrar você do quanto é importante para mim.

Obrigado por cada momento, cada carinho e cada sorriso.

Espero continuar ao seu lado por muitos e muitos anos.

Feliz aniversário, meu amor. Eu te amo mais do que palavras conseguem explicar. ❤️`
    },
  ],

  // ── 10. MENSAGEM SURPRESA ─────────────────────────────────
  mensagemSurpresa: "Não tenho pernas, mas acompanho todas as viagens.\nNão vou na frente, mas sempre vou junto.\nGuardo segredos sem nunca contar nenhum.\nOnde estou?",

  // ── 11. CARTA DE AMOR FINAL ───────────────────────────────
  cartaFinal: `Meu amor,

Hoje é o seu aniversário, mas quem sente que ganhou um presente sou eu por ter você na minha vida.

Já são 3 anos compartilhando momentos, risadas, planos, dificuldades, conquistas e tantos outros momentos que fizeram nossa história ser única.

Talvez eu nem sempre consiga colocar em palavras tudo o que sinto, mas quero que você saiba que sou muito feliz por ter você ao meu lado.

Espero que esse novo ano da sua vida seja cheio de coisas boas, sonhos realizados e momentos inesquecíveis.

E espero poder estar ao seu lado para viver muitos deles com você.

Feliz aniversário, meu amor. ❤️

Eu te amo.`,
};

/* ============================================================
   FIM DA ÁREA DE CONFIGURAÇÃO
   ============================================================ */


// ── Variáveis globais ─────────────────────────────────────
let musicPlaying = false;
const hasMusicSource = Boolean(CONFIG.musicaYoutube && CONFIG.musicaYoutube.trim());
const youtubePlayer = document.getElementById('youtube-player');

function sendYoutubeCommand(command) {
  if (!youtubePlayer || !hasMusicSource) return;

  youtubePlayer.contentWindow.postMessage(JSON.stringify({
    event: 'command',
    func: command,
    args: [],
  }), '*');
}

const dataInicioNamoro = CONFIG.dataInicioNamoro || CONFIG.dataInicioNamero || new Date(2023, 5, 7);

// ── Inicialização ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  buildTimeline();
  buildGallery();
  buildCards();
  buildLetter();
  initCounter();
  initScrollReveal();
  initNavigation();
  initSurprise();
  initFinaleHearts();
});

// ============================================================
// PARTÍCULAS DE FUNDO
// ============================================================
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const maxParticles = 35;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.isHeart = Math.random() > 0.7;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity += Math.sin(Date.now() * 0.001 + this.x) * 0.003;

      if (this.x < -10 || this.x > canvas.width + 10 ||
          this.y < -10 || this.y > canvas.height + 10) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);

      if (this.isHeart) {
        this.drawHeart();
      } else {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#c9304a';
        ctx.fill();
      }

      ctx.restore();
    }

    drawHeart() {
      const s = this.size * 2;
      ctx.fillStyle = '#c9304a';
      ctx.beginPath();
      ctx.moveTo(this.x, this.y + s / 4);
      ctx.quadraticCurveTo(this.x, this.y, this.x + s / 4, this.y);
      ctx.quadraticCurveTo(this.x + s / 2, this.y, this.x + s / 2, this.y + s / 4);
      ctx.quadraticCurveTo(this.x + s / 2, this.y + s / 2, this.x, this.y + s * 0.7);
      ctx.quadraticCurveTo(this.x - s / 2, this.y + s / 2, this.x - s / 2, this.y + s / 4);
      ctx.quadraticCurveTo(this.x - s / 2, this.y, this.x - s / 4, this.y);
      ctx.quadraticCurveTo(this.x, this.y, this.x, this.y + s / 4);
      ctx.fill();
    }
  }

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

// ============================================================
// CONSTRUIR LINHA DO TEMPO
// ============================================================
function buildTimeline() {
  const container = document.getElementById('timeline-container');
  CONFIG.timeline.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item reveal';
    div.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${item.data}</div>
        <h3 class="timeline-heading">${item.titulo}</h3>
        <p class="timeline-text">${item.texto}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

// ============================================================
// CONSTRUIR GALERIA
// ============================================================
function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  CONFIG.fotos.forEach((foto, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item reveal';
    div.onclick = () => openLightbox(foto.src, foto.legenda);

    if (foto.src) {
      const img = document.createElement('img');
      img.src = foto.src;
      img.alt = foto.legenda;
      img.loading = 'lazy';
      img.onerror = () => {
        const fallback = document.createElement('div');
        fallback.className = 'photo-placeholder';
        fallback.innerHTML = `
          <span class="icon">📷</span>
          <span>Foto ${i + 1}</span>
          <span style="font-size:0.75rem;opacity:0.6">Arquivo não encontrado</span>
        `;
        div.innerHTML = '';
        div.appendChild(fallback);
        div.onclick = null;
      };

      div.appendChild(img);
      div.insertAdjacentHTML('beforeend', `<div class="gallery-caption">${foto.legenda}</div>`);
    } else {
      div.innerHTML = `
        <div class="photo-placeholder">
          <span class="icon">📷</span>
          <span>Foto ${i + 1}</span>
          <span style="font-size:0.75rem;opacity:0.6">Adicione sua foto aqui</span>
        </div>
        <div class="gallery-caption">${foto.legenda}</div>
      `;
    }
    grid.appendChild(div);
  });
}

// Lightbox
function openLightbox(src, caption) {
  if (!src) return;
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = caption;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================================
// CONSTRUIR CARTAS
// ============================================================
function buildCards() {
  const grid = document.getElementById('cards-grid');
  CONFIG.cartas.forEach((carta, i) => {
    const div = document.createElement('div');
    div.className = 'love-card reveal';
    div.onclick = () => openCardModal(carta);
    div.innerHTML = `
      <div class="love-card-icon">💌</div>
      <div class="love-card-title">${carta.titulo}</div>
      <div class="love-card-hint">Clique para ler ❤️</div>
    `;
    grid.appendChild(div);
  });
}

function openCardModal(carta) {
  const modal = document.getElementById('card-modal');
  document.getElementById('card-modal-text').textContent = carta.mensagem;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCardModal() {
  document.getElementById('card-modal').classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================================
// CONSTRUIR CARTA FINAL
// ============================================================
function buildLetter() {
  document.getElementById('letter-text').textContent = CONFIG.cartaFinal;
  document.getElementById('letter-signature').textContent = `Com todo meu amor, ${CONFIG.seuNome}`;
}

// ============================================================
// CONTADOR EM TEMPO REAL
// ============================================================
function initCounter() {
  function update() {
    const now = new Date();
    const diff = now - dataInicioNamoro;

    if (diff < 0) {
      // Se a data for no futuro, mostra zeros
      setCounter(0, 0, 0, 0, 0, 0);
      return;
    }

    // Calcular anos, meses e dias
    let years = now.getFullYear() - dataInicioNamoro.getFullYear();
    let months = now.getMonth() - dataInicioNamoro.getMonth();
    let days = now.getDate() - dataInicioNamoro.getDate();
    let hours = now.getHours() - dataInicioNamoro.getHours();
    let minutes = now.getMinutes() - dataInicioNamoro.getMinutes();
    let seconds = now.getSeconds() - dataInicioNamoro.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setCounter(years, months, days, hours, minutes, seconds);
  }

  function setCounter(y, m, d, h, min, s) {
    animateNumber('counter-years', y);
    animateNumber('counter-months', m);
    animateNumber('counter-days', d);
    animateNumber('counter-hours', h);
    animateNumber('counter-minutes', min);
    animateNumber('counter-seconds', s);
  }

  function animateNumber(id, value) {
    const el = document.getElementById(id);
    if (el && el.textContent !== String(value)) {
      el.textContent = value;
    }
  }

  update();
  setInterval(update, 1000);
}

// ============================================================
// SCROLL REVEAL (ANIMAÇÃO AO ROLAR)
// ============================================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================================
// NAVEGAÇÃO
// ============================================================
function initNavigation() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  // Scroll handler
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Toggle mobile
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  // Fechar ao clicar em link
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && links.classList.contains('open')) {
      toggle.classList.remove('active');
      links.classList.remove('open');
    }
  });
}

// ============================================================
// MÚSICA
// ============================================================
function toggleMusic() {
  const btn = document.getElementById('music-btn');

  if (!hasMusicSource) {
    btn.title = 'Configure uma música do YouTube em CONFIG.musicaYoutube';
    btn.textContent = '♫';
    btn.classList.remove('playing');
    return;
  }

  if (musicPlaying) {
    sendYoutubeCommand('pauseVideo');
    btn.textContent = '♫';
    btn.classList.remove('playing');
  } else {
    sendYoutubeCommand('playVideo');
    btn.textContent = '⏸';
    btn.classList.add('playing');
  }
  musicPlaying = !musicPlaying;
}

function startExperience() {
  // Inicia a música somente se existir um vídeo configurado
  if (hasMusicSource) {
    sendYoutubeCommand('playVideo');
    musicPlaying = true;
    const btn = document.getElementById('music-btn');
    btn.textContent = '⏸';
    btn.classList.add('playing');
  }

  // Esconde hero suavemente e rola
  const hero = document.getElementById('hero');
  hero.style.opacity = '0';
  hero.style.transform = 'translateY(-30px)';
  hero.style.transition = 'all 0.8s ease';

  setTimeout(() => {
    document.getElementById('historia').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }, 1000);
  }, 400);
}

// ============================================================
// SURPRESA
// ============================================================
function initSurprise() {
  document.getElementById('surprise-message').textContent = CONFIG.mensagemSurpresa;
}

function revealSurprise() {
  const btn = document.getElementById('surprise-btn-container');
  const reveal = document.getElementById('surprise-reveal');

  btn.style.opacity = '0';
  btn.style.transform = 'scale(0.9)';
  btn.style.transition = 'all 0.5s ease';

  setTimeout(() => {
    btn.style.display = 'none';
    reveal.classList.add('visible');
    // Lançar confete de corações
    launchHeartBurst();
  }, 500);
}

function launchHeartBurst() {
  const container = document.getElementById('surprise-section');
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement('span');
      heart.className = 'floating-heart';
      heart.textContent = ['❤️', '💕', '💗', '💖', '🤍'][Math.floor(Math.random() * 5)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
      heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    }, i * 150);
  }
}

// ============================================================
// CORAÇÕES NO FINAL
// ============================================================
function initFinaleHearts() {
  const container = document.getElementById('hearts-container');
  if (!container) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        spawnFinaleHearts(container);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(container.parentElement);
}

function spawnFinaleHearts(container) {
  const hearts = ['❤️', '💕', '💗', '💖', '🤍', '💘'];
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement('span');
      heart.className = 'floating-heart';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
      heart.style.animationDuration = (Math.random() * 4 + 5) + 's';
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 9000);
    }, i * 300);
  }
}

// ── Fechar lightbox/modal com ESC ───────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeCardModal();
  }
});
