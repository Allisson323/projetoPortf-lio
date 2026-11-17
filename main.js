const data = {
  name: "Allisson Cavalcanti Campos",
  title: "Estudante de Análise e Desenvolvimento de Sistemas | Interesse em Python",
  email: "allissoncavalcanti56@gmail.com",
  phone: "(11) 99132-6760",
  location: "Suzano, SP — Brasil",
  github: "https://github.com/Allisson323",
  summary: "Estudante de Análise e Desenvolvimento de Sistemas, com conhecimentos básicos em Python, HTML, CSS, lógica de programação e banco de dados SQLite. Tenho interesse em programação Python e busco minha primeira oportunidade na área de Tecnologia da Informação para aplicar meus conhecimentos, desenvolver novas habilidades e crescer profissionalmente.",
  specialization: "Programação Python",
  objective: "Primeira oportunidade na área de Tecnologia da Informação",
  availability: "Busca oportunidade de estágio ou contratação CLT na área de tecnologia.",

  experience: [
    { role: "Em busca de oportunidades", company: "Estágio ou CLT na área de Tecnologia da Informação", period: "Atualmente",
      description: "Em busca da primeira oportunidade profissional na área de tecnologia, para aplicar meus conhecimentos em Python, HTML, CSS e banco de dados, aprender na prática e crescer junto com a equipe." }
  ],
  education: [
    { course: "Análise e Desenvolvimento de Sistemas", institution: "Faculdade UniPiaget", period: "2º semestre · Em andamento",
      description: "Ensino superior em andamento, com foco em programação, lógica, banco de dados e desenvolvimento de sistemas." },
    { course: "Infoworks", institution: "Curso de informática", period: "Concluído",
      description: "Curso de informática voltado ao aprendizado do uso de computadores, sistemas e ferramentas digitais, desenvolvendo a base prática para atuar na área de tecnologia." },
    { course: "Suporte Técnico", institution: "Curso profissionalizante", period: "Concluído",
      description: "Curso voltado ao suporte técnico em informática, abordando manutenção e montagem de computadores, instalação e configuração de sistemas operacionais e programas, noções de redes e atendimento ao usuário na resolução de problemas." }
  ],
  skills: ["Python", "HTML", "CSS", "SQLite / Banco de dados", "Lógica de programação", "Git e GitHub"], // todos Básico
  behavioral: ["Comunicação", "Atendimento ao cliente"],
  tools: ["Visual Studio Code", "GitHub", "SQLite", "Microsoft Word"],
  languages: [["Português", "Nativo"], ["Inglês", "Básico"]],
  projects: [
    { name: "Desenvolvimento de site com HTML e CSS", tech: "HTML, CSS",
      description: "Desenvolvimento de uma página web utilizando HTML para estruturar o conteúdo e CSS para estilização e organização visual." },
    { name: "Sistema de cadastro de usuários com Python e SQLite", tech: "Python, SQLite",
      description: "Desenvolvimento de um sistema para cadastro e gerenciamento de usuários, utilizando Python e banco de dados SQLite." }
  ],
  courses: []
};


const $ = id => document.getElementById(id);
const tag = texto => `<span class="tag">${texto}</span>`;


document.querySelectorAll("[data-field]").forEach(el => el.textContent = data[el.dataset.field]);

$("email").textContent = data.email;
$("email").href = "mailto:" + data.email;
$("phone").textContent = data.phone;
$("social").innerHTML = `<a href="${data.github}" target="_blank">GitHub ↗</a>`;


const cards = {
  experience: x => `<article class="timeline-item"><span class="item-meta">${x.period}</span><h3>${x.role}</h3><div class="company">${x.company}</div><p>${x.description}</p></article>`,
  education: x => `<article class="info-card"><span class="item-meta">${x.period}</span><h3>${x.course}</h3><p><strong>${x.institution}</strong></p><p>${x.description}</p></article>`,
  skills: x => `<div class="skill-row"><strong>${x}</strong><small>Básico</small><div class="skill-track"><div class="skill-fill" style="width:30%"></div></div></div>`,
  behavioral: tag,
  tools: tag,
  languages: ([nome, nivel]) => `<div class="language-row"><strong>${nome}</strong><span>${nivel}</span></div>`,
  courses: x => x,
  projects: x => `<article class="info-card project"><h3>${x.name}</h3><p>${x.description}</p><div class="tag-list">${x.tech.split(",").map(t => tag(t.trim())).join("")}</div><p><a class="text-link" href="${data.github}" target="_blank">Ver no GitHub ↗</a></p></article>`
};

for (const id in cards) {
  $(id).innerHTML = data[id].map(cards[id]).join("") || '<p class="empty">Nenhum item.</p>';
}
