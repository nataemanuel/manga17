// ================= MENU MOBILE =================
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Fecha o menu ao clicar em qualquer link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

// ================= ANIMAÇÃO DE ENTRADA (FADE) =================
const fadeEls = document.querySelectorAll('.fade');

if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => observer.observe(el));
}

// ================= TOAST =================
function mostrarToast(mensagem) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  if (mensagem) toast.textContent = mensagem;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ================= FORMULÁRIO DE CONTATO =================
const formContato = document.getElementById('formContato');

if (formContato) {
  formContato.addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarToast('Mensagem enviada com sucesso!');
    formContato.reset();
  });
}

// ================= FORMULÁRIO DE ORÇAMENTO =================
const formOrcamento = document.getElementById('formOrcamento');

if (formOrcamento) {
  formOrcamento.addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarToast('Orçamento solicitado com sucesso!');
    formOrcamento.reset();
  });
}