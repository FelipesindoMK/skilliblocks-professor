// ══════════════════════════════════════════
//  SKILLIU — Painel de Gestão — painel.js
//  Comunidade, Biblioteca e Radar já vêm do Supabase (dados reais, ao vivo).
//  As demais seções (Time, Financeiro, Agenda, Identidade, Configurações) ainda
//  são internas/mock, pois não têm origem no sistema de cadastro do site.
// ══════════════════════════════════════════
let paginaAtual = 'dashboard';

// ══════════════════════════════════════════
//  GUARD DE ACESSO — só entra quem tem sessão válida E role='admin' em "perfis".
//  Enquanto isso roda, o CSS mantém o painel escondido (tela de carregando).
// ══════════════════════════════════════════
(async function protegerPainel() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) { window.location.href = 'login.html'; return; }

  const { data: perfil, error } = await sb
    .from('perfis')
    .select('nome, foto_url, role')
    .eq('id', session.user.id)
    .single();

  if (error || !perfil || perfil.role !== 'admin') {
    await sb.auth.signOut();
    window.location.href = 'login.html';
    return;
  }

  // Libera a tela e personaliza o cabeçalho com quem está logado
  document.body.classList.remove('auth-pendente');
  const primeiroNome = (perfil.nome || 'Admin').split(' ')[0];
  document.querySelector('#tbUser span').innerHTML = `Olá, <strong>${escapeHtml(primeiroNome)}</strong>`;
  if (perfil.foto_url) {
    document.querySelector('.tb-avatar').outerHTML = `<img src="${perfil.foto_url}" class="tb-avatar" style="object-fit:cover;">`;
  } else {
    document.querySelector('.tb-avatar').textContent = iniciais(perfil.nome || 'Admin');
  }
})();

sb.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_OUT') window.location.href = 'login.html';
});

// ── Sidebar colapsável ──────────────────────
const sidebar = document.getElementById('sidebar');
document.getElementById('sbToggle').addEventListener('click', () => sidebar.classList.toggle('collapsed'));

// ── Menu mobile (hamburguer + overlay) ──
const sidebarOverlay = document.getElementById('sidebarOverlay');
function abrirMenuMobile() { sidebar.classList.add('mobile-aberta'); sidebarOverlay.classList.add('aberto'); }
function fecharMenuMobile() { sidebar.classList.remove('mobile-aberta'); sidebarOverlay.classList.remove('aberto'); }
document.getElementById('tbHamburger').addEventListener('click', abrirMenuMobile);
sidebarOverlay.addEventListener('click', fecharMenuMobile);

// ── Helpers gerais ───────────────────────────
let uid = 200;
const novoId = () => ++uid;
function iniciais(nome) { return nome.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase(); }
function escapeHtml(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
function badge(texto, tipo) { return `<span class="badge badge-${tipo}">${texto}</span>`; }
function tabelaWrap(theadHtml, tbodyHtml) { return `<div class="tabela-wrap"><table class="tabela"><thead><tr>${theadHtml}</tr></thead><tbody>${tbodyHtml}</tbody></table></div>`; }
function linhaVazia(colspan, texto) { return `<tr class="linha-vazia"><td colspan="${colspan}">${texto}</td></tr>`; }
function addDias(n) { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + n); return { ano: d.getFullYear(), mes: d.getMonth() + 1, dia: d.getDate() }; }
function diasRestantes(ev) {
  const alvo = new Date(ev.ano, ev.mes - 1, ev.dia);
  const hoje0 = new Date(); hoje0.setHours(0, 0, 0, 0);
  return Math.round((alvo - hoje0) / 86400000);
}

// ── Modal genérico ───────────────────────────
const modalBackdrop = document.getElementById('modalBackdrop');
const modalBox = document.getElementById('modalBox');
function abrirModal(html) {
  modalBox.innerHTML = `<button class="modal-close" onclick="fecharModal()"><i class="fa-solid fa-xmark"></i></button>${html}`;
  modalBackdrop.classList.add('aberto');
}
function fecharModal() { modalBackdrop.classList.remove('aberto'); }
modalBackdrop.addEventListener('click', (e) => { if (e.target === modalBackdrop) fecharModal(); });
window.fecharModal = fecharModal;

// ══════════════════════════════════════════
//  DADOS MOCK
// ══════════════════════════════════════════

// ── Time (equipe interna) ──
const MEMBROS_TIME = [
  { id: 1, nome: 'Katia Ferraz', reporta_para: null, cargo: 'Diretora Executiva', setor: 'Direção', vinculo: 'Sócia-diretora',
    profissao: 'Pedagoga', area: 'Direção Executiva', cpf: '111.222.333-44', telefone: '(18) 99111-2233',
    endereco: 'Rua das Acácias, 120 — Presidente Epitácio/SP', email: 'katia@skilliu.com.br',
    funcoes: ['Direção geral', 'Relações institucionais'], atividades: ['Fechamento do planejamento trimestral'],
    responsabilidades: ['Estruturação da Skilliu desde a fundação'], acessosPessoais: [{ ferramenta: 'Gmail', login: 'katia@skilliu.com.br', senha: 'Ktf#2026Sk' }] },
  { id: 2, nome: 'Adiane Nogueira', reporta_para: null, cargo: 'Diretora Operacional', setor: 'Direção', vinculo: 'Sócia-diretora',
    profissao: 'Administradora', area: 'Direção Operacional', cpf: '222.333.444-55', telefone: '(18) 99222-3344',
    endereco: 'Av. Brasil, 480 — Presidente Epitácio/SP', email: 'adiane@skilliu.com.br',
    funcoes: ['Operações internas', 'Gestão de equipe'], atividades: ['Revisão da hierarquia do time'],
    responsabilidades: ['Implantação do RH e financeiro internos'], acessosPessoais: [{ ferramenta: 'Gmail', login: 'adiane@skilliu.com.br', senha: 'Adn#2026Sk' }] },
  { id: 3, nome: 'Jean Oliveira', reporta_para: 1, cargo: 'Coordenador Comercial', setor: 'Coordenação', vinculo: 'CLT',
    profissao: 'Publicitário', area: 'Comercial', cpf: '333.444.555-66', telefone: '(18) 99333-4455',
    endereco: 'Rua Sete de Setembro, 210 — Presidente Epitácio/SP', email: 'jean@skilliu.com.br',
    funcoes: ['Prospecção de escolas', 'Negociação com redes municipais'], atividades: ['Proposta comercial — Rede de Bauru'],
    responsabilidades: ['12 contratos fechados em 2025'], acessosPessoais: [{ ferramenta: 'CRM', login: 'jean@skilliu.com.br', senha: 'Jn#Crm2026' }] },
  { id: 4, nome: 'Felipe Andrade', reporta_para: 2, cargo: 'Coordenador de Tecnologia', setor: 'Coordenação', vinculo: 'CLT',
    profissao: 'Engenheiro de Software', area: 'Tecnologia', cpf: '444.555.666-77', telefone: '(18) 99444-5566',
    endereco: 'Rua das Palmeiras, 88 — Presidente Epitácio/SP', email: 'felipe@skilliu.com.br',
    funcoes: ['Arquitetura do sistema', 'Gestão do painel de gestão'], atividades: ['Construção do painel de gestão Skilliu'],
    responsabilidades: ['Migração da comunidade para o Supabase'], acessosPessoais: [{ ferramenta: 'Supabase', login: 'felipe@skilliu.com.br', senha: 'Fa#Supa26' }, { ferramenta: 'Claude', login: 'felipe@skilliu.com.br', senha: 'Fa#Claude26' }] },
  { id: 5, nome: 'Yuri Martins', reporta_para: 4, cargo: 'Analista de Tecnologia', setor: 'Coordenação', vinculo: 'Estagiário',
    profissao: 'Estudante de Ciência da Computação', area: 'Tecnologia', cpf: '454.546.562-70', telefone: '(18) 99743-8589',
    endereco: 'Rua Ana Neri, 340 — Presidente Epitácio/SP — Brasil', email: 'yuri@skilliu.com.br',
    funcoes: ['Suporte ao desenvolvimento', 'Testes do sistema'], atividades: ['Testes do painel de gestão', 'Documentação de bugs'],
    responsabilidades: ['Correção do bug de gráficos do dashboard'], acessosPessoais: [{ ferramenta: 'Drive', login: 'yuri@skilliu.com.br', senha: 'Yu#Drive26' }, { ferramenta: 'Claude', login: 'yuri@skilliu.com.br', senha: 'Yu#Claude26' }] },
  { id: 6, nome: 'Brenda Castro', reporta_para: 1, cargo: 'Coordenadora de Marketing', setor: 'Coordenação', vinculo: 'CLT',
    profissao: 'Social media', area: 'Marketing', cpf: '555.666.777-88', telefone: '(18) 99555-6677',
    endereco: 'Rua Bahia, 55 — Presidente Epitácio/SP', email: 'brenda@skilliu.com.br',
    funcoes: ['Redes sociais', 'Identidade visual'], atividades: ['Campanha de lançamento da biblioteca digital'],
    responsabilidades: ['Crescimento de 32% nas redes em 12 meses'], acessosPessoais: [{ ferramenta: 'Instagram', login: '@skilliu.oficial', senha: 'Br#Insta26' }] },
  { id: 7, nome: 'Junior Barbosa', reporta_para: 1, cargo: 'Analista de Produção', setor: 'Produção', vinculo: 'CLT',
    profissao: 'Designer gráfico', area: 'Produção', cpf: '666.777.888-99', telefone: '(18) 99666-7788',
    endereco: 'Rua Minas Gerais, 145 — Presidente Epitácio/SP', email: 'junior@skilliu.com.br',
    funcoes: ['Produção de materiais didáticos', 'Diagramação de ebooks'], atividades: ['Diagramação do próximo ebook'],
    responsabilidades: ['Diagramação de Robótica Descomplicada'], acessosPessoais: [{ ferramenta: 'Canva', login: 'junior@skilliu.com.br', senha: 'Jb#Canva26' }] },
  { id: 8, nome: 'Renata Souza', reporta_para: 2, cargo: 'Analista de RH', setor: 'RH', vinculo: 'CLT',
    profissao: 'Psicóloga', area: 'Recursos Humanos', cpf: '777.888.999-00', telefone: '(18) 99777-8899',
    endereco: 'Rua São Paulo, 302 — Presidente Epitácio/SP', email: 'renata@skilliu.com.br',
    funcoes: ['Recrutamento', 'Clima organizacional'], atividades: ['Processo seletivo — novo estagiário de marketing'],
    responsabilidades: ['Estruturação do onboarding da equipe'], acessosPessoais: [{ ferramenta: 'Gupy', login: 'renata@skilliu.com.br', senha: 'Rs#Gupy26' }] },
  { id: 9, nome: 'Karol Mendes', reporta_para: 1, cargo: 'Analista Financeira', setor: 'Financeiro', vinculo: 'CLT',
    profissao: 'Contadora', area: 'Financeiro', cpf: '888.999.000-11', telefone: '(18) 99888-9900',
    endereco: 'Av. Paraná, 77 — Presidente Epitácio/SP', email: 'karol@skilliu.com.br',
    funcoes: ['Contas a pagar e receber', 'Emissão de notas'], atividades: ['Fechamento do trimestre'],
    responsabilidades: ['Organização do financeiro desde 2024'], acessosPessoais: [{ ferramenta: 'Conta Azul', login: 'karol@skilliu.com.br', senha: 'Km#Azul26' }] },
];

const ACESSOS_TIME = [
  { ferramenta: 'Supabase', usuario: 'admin@skilliu.com.br', senha: 'Sk1ll1u#2026', responsavel: 'Felipe Andrade' },
  { ferramenta: 'Google Workspace', usuario: 'equipe@skilliu.com.br', senha: 'Gw@skl2026', responsavel: 'Katia Ferraz' },
  { ferramenta: 'Hotmart', usuario: 'financeiro@skilliu.com.br', senha: 'Htm#Vendas1', responsavel: 'Karol Mendes' },
  { ferramenta: 'Claude', usuario: 'time@skilliu.com.br', senha: 'Cld#Skl2026', responsavel: 'Felipe Andrade' },
];

// ── Comunidade (dado real — tabela "perfis" no Supabase) ──
let COMUNIDADE_MEMBROS = [];
let comunidadeCarregada = false;

// ── Produtos ──
const PRODUTOS_FISICOS = [
  { nome: 'SkilliBlocks', descricao: 'Kit de blocos de madeira para ensinar lógica de programação sem tela, base da metodologia Skilliu.', preco: 189.90, estoque: 120, destaque: true },
  { nome: 'Kit Robótica Educacional', descricao: 'Kit de montagem para oficinas de robótica STEAM em sala de aula.', preco: 249.90, estoque: 35, destaque: false },
];
// ── Biblioteca / Produtos digitais (dado real — tabela "ebooks" + "ebook_downloads") ──
let PRODUTOS_DIGITAIS = [];
let bibliotecaCarregada = false;
const VENDAS_RECENTES = [
  { produto: 'Robótica Descomplicada', comprador: 'Ana Souza', valor: 0, status: 'concluida', data: '11/05/2026' },
  { produto: 'Robótica Descomplicada', comprador: 'Carlos Lima', valor: 0, status: 'concluida', data: '09/05/2026' },
];

// ── Radar (dado real — tabela "radar_verificacoes") / Formação / Workshop / Palestras ──
let RADAR_RESPOSTAS = [];
let radarCarregado = false;
const FORMACOES = [
  { escola: 'Escola Alpha', trilha: 'Pensamento Computacional', progresso: 100, mentor: 'Felipe Andrade', status: 'Concluído', data_conclusao: '10/05/2026' },
  { escola: 'Escola Beta', trilha: 'Didática Inclusiva', progresso: 60, mentor: 'Katia Ferraz', status: 'Em andamento', data_conclusao: '—' },
];
const WORKSHOPS = [
  { titulo: 'Introdução ao Pensamento Computacional', data: '20/05/2026', hora: '10:00',
    local: 'Escola Alpha — Presidente Epitácio/SP', responsavel: 'Felipe Andrade', equipe: ['Felipe Andrade', 'Yuri Martins'],
    assunto: 'Lógica de programação sem tela', didatica: 'Blocos de madeira SkilliBlocks' },
];
const PALESTRAS = [
  { titulo: 'STEAM na prática municipal', data: '22/05/2026', hora: '09:00',
    local: 'Secretaria de Educação — Bauru/SP', responsavel: 'Katia Ferraz', equipe: ['Katia Ferraz'],
    assunto: 'Panorama STEAM para gestores', didatica: 'Apresentação + estudo de caso' },
];

// ── Contatos ──
const CONTATOS_POLITICOS = [
  { nome: 'Marcos Vinícius', cargo: 'Prefeito', orgao: 'Prefeitura de Presidente Epitácio', telefone: '(18) 99999-3333', email: 'gabinete@pepitacio.sp.gov.br', tipo: 'Prefeitura' },
  { nome: 'Fernanda Reis', cargo: 'Secretária de Educação', orgao: 'Secretaria Municipal de Educação — Bauru', telefone: '(14) 99999-0000', email: 'fernanda@bauru.sp.gov.br', tipo: 'Secretaria da Educação' },
];
const CONTATOS_COLABORADORES = [
  { nome: 'Estúdio Verde Design', tipo: 'Associado', area: 'Design gráfico', telefone: '(11) 98888-2222', email: 'contato@estudioverde.com.br' },
  { nome: 'Paulo Andrade', tipo: 'Colaborador', area: 'Consultoria pedagógica', telefone: '(18) 97777-1111', email: 'paulo.andrade@gmail.com' },
];
const CONTATOS_ESCOLAS = [
  { nome: 'Fernanda Reis', escola: 'Escola Alpha', tipo: 'Direção', telefone: '(18) 99999-2222', email: 'contato@escolaalpha.com.br' },
  { nome: 'João Martins', escola: 'Escola Beta', tipo: 'Direção', telefone: '(14) 98888-1111', email: 'joao@escolabeta.com.br' },
  { nome: 'Renato Costa', escola: 'Escola Alpha', tipo: 'Professor', telefone: '(18) 99999-4444', email: 'renato@escolaalpha.com.br' },
  { nome: 'Suporte de TI', escola: 'Escola Beta', tipo: 'Técnico', telefone: '(14) 98888-5555', email: 'ti@escolabeta.com.br' },
];
const CONTATOS_EMPRESAS = [
  { nome: 'Bracell Celulose', local: 'Bataguaçu, MS', regiaoResponsavel: 'Região de Bataguaçu/MS',
    responsavelExterno: { nome: 'Marcelo Tavares', cargo: 'Analista de Relações Externas', telefone: '(67) 99999-1234', email: 'marcelo.tavares@bracell.com' },
    projeto: { descricao: 'Repasse de parte do investimento local para educação do município', percentual: '5% do investimento social local', areaBeneficiada: 'Educação básica de Bataguaçu/MS' } },
];

// ── Agenda (datas geradas em relação a hoje, pra reflexão do lembrete fazer sentido) ──
const AGENDA_DIRECAO = [
  { ...addDias(2), titulo: 'Reunião de diretoria', hora: '09:00' },
  { ...addDias(9), titulo: 'Planejamento trimestral', hora: '14:00' },
  { ...addDias(-4), titulo: 'Fechamento financeiro do mês', hora: '10:00' },
];
const AGENDA_FORMACAO = [
  { ...addDias(5), titulo: 'Workshop — Escola Alpha', hora: '10:00' },
  { ...addDias(12), titulo: 'Palestra — Secretaria de Educação de Bauru', hora: '09:00' },
];
const AGENDA_COMERCIAL = [
  { ...addDias(6), titulo: 'Reunião — Secretaria de Educação de Bauru', hora: '14:00' },
  { ...addDias(20), titulo: 'Visita técnica — Escola Beta', hora: '11:00' },
];
const AGENDA_EQUIPE = [
  { ...addDias(15), titulo: 'Confraternização mensal', hora: '18:00' },
  { ...addDias(1), titulo: 'Reunião de equipe', hora: '09:30' },
];
const TODAS_AGENDAS = [
  { label: 'Direção', eventos: AGENDA_DIRECAO },
  { label: 'Formação', eventos: AGENDA_FORMACAO },
  { label: 'Comercial', eventos: AGENDA_COMERCIAL },
  { label: 'Equipe', eventos: AGENDA_EQUIPE },
];
function todosLembretes() {
  let lista = [];
  TODAS_AGENDAS.forEach(a => a.eventos.forEach(e => lista.push({ ...e, agenda: a.label })));
  return lista.sort((a, b) => new Date(a.ano, a.mes - 1, a.dia) - new Date(b.ano, b.mes - 1, b.dia));
}

// ── Identidade Skilliu ──
const IDENTIDADE_CORES = [
  { nome: 'Verde principal', hex: '#32a557' }, { nome: 'Verde escuro', hex: '#28904a' },
  { nome: 'Verde claro', hex: '#8de6a7' }, { nome: 'Azul marinho', hex: '#152b55' },
  { nome: 'Azul médio', hex: '#3a5f95' }, { nome: 'Fundo', hex: '#f4faf6' },
];
const REDES_SOCIAIS = [
  { rede: 'Instagram', icone: 'fa-instagram', usuario: '@skilliu.oficial', senha: 'Insta#Skl26', seguidores: '8.420', unidade: 'Seguidores', crescimento: 12, link: 'instagram.com/skilliu.oficial' },
  { rede: 'TikTok', icone: 'fa-tiktok', usuario: '@skilliu', senha: 'Tikt#Skl26', seguidores: '3.150', unidade: 'Seguidores', crescimento: 28, link: 'tiktok.com/@skilliu' },
  { rede: 'LinkedIn', icone: 'fa-linkedin', usuario: 'skilliu-steam-education', senha: 'Link#Skl26', seguidores: '1.980', unidade: 'Seguidores', crescimento: 9, link: 'linkedin.com/company/skilliu' },
  { rede: 'YouTube', icone: 'fa-youtube', usuario: 'Skilliu STEAM Education', senha: 'Ytb#Skl26', seguidores: '640', unidade: 'Inscritos', crescimento: -4, link: 'youtube.com/@skilliu' },
  { rede: 'Facebook', icone: 'fa-facebook', usuario: 'Skilliu', senha: 'Face#Skl26', seguidores: '2.210', unidade: 'Seguidores', crescimento: 6, link: 'facebook.com/skilliu' },
];

// ── Minha conta (admin logado) ──
const MINHA_CONTA = {
  nome: 'Admin', cargo: 'Administrador geral', email: 'admin@skilliu.com.br', senha: 'Adm#Skl2026',
  ultimoAcesso: new Date().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
  notificacoesEmail: true,
};
const REPOSITORIOS = {
  ideias: ['Gamificação da trilha de Formação', 'Selo Skilliu para escolas parceiras', 'Podcast STEAM municipal'],
  documentacao: ['Especificação do painel de gestão', 'Fluxo de moderação da comunidade', 'Guia de onboarding do time'],
  imagens: ['Logo — versão principal (SVG)', 'Mascote Skilliu — variações', 'Fotos do workshop Escola Alpha'],
};

// ── Estados / regiões ──
const UF_DATA = [
  { sigla: 'AC', regiao: 'Norte' }, { sigla: 'AP', regiao: 'Norte' }, { sigla: 'AM', regiao: 'Norte' }, { sigla: 'PA', regiao: 'Norte' }, { sigla: 'RO', regiao: 'Norte' }, { sigla: 'RR', regiao: 'Norte' }, { sigla: 'TO', regiao: 'Norte' },
  { sigla: 'AL', regiao: 'Nordeste' }, { sigla: 'BA', regiao: 'Nordeste' }, { sigla: 'CE', regiao: 'Nordeste' }, { sigla: 'MA', regiao: 'Nordeste' }, { sigla: 'PB', regiao: 'Nordeste' }, { sigla: 'PE', regiao: 'Nordeste' }, { sigla: 'PI', regiao: 'Nordeste' }, { sigla: 'RN', regiao: 'Nordeste' }, { sigla: 'SE', regiao: 'Nordeste' },
  { sigla: 'DF', regiao: 'Centro-Oeste' }, { sigla: 'GO', regiao: 'Centro-Oeste' }, { sigla: 'MT', regiao: 'Centro-Oeste' }, { sigla: 'MS', regiao: 'Centro-Oeste' },
  { sigla: 'ES', regiao: 'Sudeste' }, { sigla: 'MG', regiao: 'Sudeste' }, { sigla: 'RJ', regiao: 'Sudeste' }, { sigla: 'SP', regiao: 'Sudeste' },
  { sigla: 'PR', regiao: 'Sul' }, { sigla: 'RS', regiao: 'Sul' }, { sigla: 'SC', regiao: 'Sul' },
];
const ESTADOS_PINTADOS = ['SP', 'MS', 'SC'];
const MUNICIPIOS_MOCK = {
  SP: ['São Paulo', 'Bauru', 'Presidente Epitácio'], MS: ['Campo Grande', 'Bataguaçu', 'Dourados'], SC: ['Florianópolis', 'Joinville', 'Blumenau'],
};

// ══════════════════════════════════════════
//  NAVEGAÇÃO
// ══════════════════════════════════════════
const pageTitle = document.getElementById('pageTitle');
const pageContent = document.getElementById('pageContent');
const TITULOS = {
  dashboard: 'Dashboard', time: 'Time', financeiro: 'Financeiro', agenda: 'Agenda',
  comunidade: 'Comunidade', produtos: 'Produtos', biblioteca: 'Biblioteca', radar: 'Radar', formacao: 'Formação',
  workshop: 'Workshop', palestras: 'Palestras', contatos: 'Contatos', configuracoes: 'Configurações', identidade: 'Identidade Skilliu',
};

document.querySelectorAll('.sb-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const pagina = btn.dataset.page;
    if (pagina === 'sair') { sb.auth.signOut(); window.location.href = 'login.html'; return; }
    document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    pageTitle.textContent = TITULOS[pagina] || '';
    paginaAtual = pagina;
    fecharMenuMobile();
    (RENDERERS[pagina] || RENDERERS.placeholder)(pagina);
  });
});
document.getElementById('sbLogo').addEventListener('click', () => {
  document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('active'));
  pageTitle.textContent = TITULOS.identidade;
  RENDERERS.identidade();
});
document.getElementById('tbBell').addEventListener('click', abrirModalLembretes);
document.getElementById('tbUser').addEventListener('click', abrirPainelMinhaConta);

// ── Painel lateral genérico ──
const sideBackdrop = document.getElementById('sideBackdrop');
const sidePanel = document.getElementById('sidePanel');
function abrirPainelLateral(html) {
  sidePanel.innerHTML = html;
  sideBackdrop.classList.add('aberto');
}
function fecharPainelLateral() { sideBackdrop.classList.remove('aberto'); }
sideBackdrop.addEventListener('click', (e) => { if (e.target === sideBackdrop) fecharPainelLateral(); });
window.fecharPainelLateral = fecharPainelLateral;

// ── Minha conta ──
function abrirPainelMinhaConta() {
  abrirPainelLateral(`
    <div class="side-panel-head">
      <h3>Minha conta</h3>
      <button class="side-panel-close" onclick="fecharPainelLateral()"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="side-conta-head">
      <div class="avatar-lg">A</div>
      <strong style="font-size:1rem;">${escapeHtml(MINHA_CONTA.nome)}</strong>
      <p>${escapeHtml(MINHA_CONTA.cargo)}</p>
    </div>
    <div class="side-bloco">
      <h4>Acesso</h4>
      <div class="perfil-lista">
        <div class="perfil-lista-item"><i class="fa-solid fa-envelope"></i>${escapeHtml(MINHA_CONTA.email)}</div>
        <div class="perfil-lista-item"><i class="fa-solid fa-clock"></i>Último acesso: ${MINHA_CONTA.ultimoAcesso}</div>
      </div>
      <div class="rede-detalhe-linha" style="margin-top:.6rem;">
        <span>Senha</span>
        <div class="senha-cel"><span id="conta-senha">••••••••••</span><button onclick="revelarSenhaConta()"><i class="fa-solid fa-eye"></i></button></div>
      </div>
    </div>
    <div class="side-bloco" id="contaTrocarSenhaArea"></div>
    <div class="side-bloco">
      <h4>Preferências</h4>
      <div class="switch-linha">
        <span>Notificar lembretes por e-mail</span>
        <label class="switch"><input type="checkbox" id="toggleNotifEmail" ${MINHA_CONTA.notificacoesEmail ? 'checked' : ''} onchange="MINHA_CONTA.notificacoesEmail=this.checked"><span class="track"></span></label>
      </div>
    </div>
    <button class="btn-acao ghost" style="width:100%;justify-content:center;margin-bottom:.6rem;" onclick="mostrarTrocarSenha()"><i class="fa-solid fa-key"></i> Trocar senha</button>
    <button class="btn-acao" style="width:100%;justify-content:center;background:var(--red);" onclick="fecharPainelLateral()"><i class="fa-solid fa-right-from-bracket"></i> Sair</button>
  `);
}
window.abrirPainelMinhaConta = abrirPainelMinhaConta;
window.revelarSenhaConta = function () {
  const el = document.getElementById('conta-senha');
  el.textContent = el.textContent === '••••••••••' ? MINHA_CONTA.senha : '••••••••••';
};
window.mostrarTrocarSenha = function () {
  document.getElementById('contaTrocarSenhaArea').innerHTML = `
    <h4>Trocar senha</h4>
    <div class="form-grupo"><label>Nova senha</label><input id="nova-senha" type="password"></div>
    <button class="btn-acao" style="width:100%;justify-content:center;" onclick="salvarNovaSenha()"><i class="fa-solid fa-check"></i> Salvar nova senha</button>
  `;
};
window.salvarNovaSenha = function () {
  const v = document.getElementById('nova-senha').value.trim();
  if (!v) return;
  MINHA_CONTA.senha = v;
  document.getElementById('contaTrocarSenhaArea').innerHTML = '<p style="font-size:.8rem;color:var(--g2);font-weight:800;">Senha atualizada.</p>';
};

// ══════════════════════════════════════════
//  RENDERERS
// ══════════════════════════════════════════
// ══════════════════════════════════════════
//  CONEXÃO COM O SUPABASE — Comunidade, Biblioteca e Radar
//  Cada função busca os dados reais e redesenha a tela se o admin
//  estiver olhando pra ela. Além disso, cada tabela tem um "ouvinte"
//  de tempo real: quando algo muda no banco (cadastro, download,
//  resposta do radar), o painel atualiza sozinho, sem precisar de F5.
// ══════════════════════════════════════════

async function carregarComunidade() {
  const { data, error } = await sb
    .from('perfis')
    .select('id, nome, email, escola, cidade, uf, status, denuncias, criado_em')
    .order('criado_em', { ascending: false });
  if (error) { console.error('Erro ao carregar comunidade:', error.message); return; }
  comunidadeCarregada = true;
  COMUNIDADE_MEMBROS = (data || []).map(p => ({
    id: p.id,
    nome: p.nome || '(sem nome)',
    email: p.email || '—',
    cidade: p.cidade || '—',
    estado: p.uf || '—',
    status: p.status || 'ativo',
    denuncias: p.denuncias || 0,
  }));
  if (paginaAtual === 'comunidade') desenharComunidade();
}

async function carregarBiblioteca() {
  const { data, error } = await sb
    .from('ebooks_com_metricas')
    .select('*')
    .order('titulo', { ascending: true });
  if (error) { console.error('Erro ao carregar biblioteca:', error.message); return; }
  bibliotecaCarregada = true;
  PRODUTOS_DIGITAIS = (data || []).map(e => ({
    nome: e.titulo,
    tipo: 'Ebook',
    preco: 0,
    vendas: e.total_downloads || 0,
    downloads: e.total_downloads || 0,
    ativo: !!e.publicado,
  }));
  if (paginaAtual === 'biblioteca') RENDERERS.biblioteca();
  if (paginaAtual === 'produtos') desenharProdutos();
}

async function carregarRadar() {
  const { data, error } = await sb
    .from('radar_com_perfil')
    .select('*')
    .order('criado_em', { ascending: false });
  if (error) { console.error('Erro ao carregar radar:', error.message); return; }
  radarCarregado = true;
  RADAR_RESPOSTAS = (data || []).map(r => ({
    id: r.id,
    escola: r.escola || '—',
    respondente: r.nome || '—',
    cargo: r.cargo || '—',
    data: r.criado_em ? new Date(r.criado_em).toLocaleDateString('pt-BR') : '—',
    pontuacao: r.pontuacao || 0,
    status: r.status === 'aprovado' ? 'Concluído' : (r.status === 'recusado' ? 'Recusado' : 'Em análise'),
  }));
  if (paginaAtual === 'radar') RENDERERS.radar();
}

// Assim que a página abre, já busca tudo uma vez...
carregarComunidade();
carregarBiblioteca();
carregarRadar();

// ...e depois fica ouvindo mudanças em tempo real nas três tabelas.
sb.channel('painel-comunidade')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'perfis' }, carregarComunidade)
  .subscribe();
sb.channel('painel-biblioteca')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'ebooks' }, carregarBiblioteca)
  .on('postgres_changes', { event: '*', schema: 'public', table: 'ebook_downloads' }, carregarBiblioteca)
  .subscribe();
sb.channel('painel-radar')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'radar_verificacoes' }, carregarRadar)
  .subscribe();

const RENDERERS = {};

RENDERERS.placeholder = function (pagina) {
  pageContent.innerHTML = `
    <div class="card placeholder-card">
      <i class="fa-solid fa-gear"></i>
      <h3>${TITULOS[pagina] || 'Em construção'}</h3>
      <p>Essa tela ainda não foi detalhada. Me conta o que precisa estar aqui que eu monto junto.</p>
    </div>`;
};

// ── DASHBOARD ──
let mapaNivel = 'pais';
RENDERERS.dashboard = function () {
  pageContent.innerHTML = `
    <div class="row-top">
      <div class="card">
        <div class="card-head">
          <span class="card-eyebrow">Mapa de atuação</span>
          <div class="mapa-toggle">
            <button class="active" data-nivel="pais">País</button>
            <button data-nivel="estados">Estados</button>
            <button data-nivel="municipios">Municípios</button>
          </div>
        </div>
        <div class="pais-indicador"><span class="flag">🇧🇷</span> Brasil</div>
        <div id="mapaArea"></div>
      </div>
      <div class="card">
        <div class="card-head">
          <span class="card-eyebrow">Crescimento</span>
          <span class="card-badge"><i class="fa-solid fa-arrow-trend-up"></i> +32%</span>
        </div>
        <p style="font-size:.76rem;color:var(--b3);font-weight:700;margin-bottom:.6rem;">Últimos 12 meses</p>
        <div class="chart-box chart-box-lg"><canvas id="chartCrescimento"></canvas></div>
      </div>
    </div>

    <div class="card">
      <span class="card-eyebrow">Resumo geral</span>
      <div class="resumo-grid" style="margin-top:1rem;">
        <div class="resumo-item"><div class="resumo-icon"><i class="fa-solid fa-user-group"></i></div><div><div class="resumo-num">1.232</div><div class="resumo-label">Usuários</div></div></div>
        <div class="resumo-item"><div class="resumo-icon"><i class="fa-solid fa-building-columns"></i></div><div><div class="resumo-num">256</div><div class="resumo-label">Instituições</div></div></div>
        <div class="resumo-item"><div class="resumo-icon"><i class="fa-solid fa-file-contract"></i></div><div><div class="resumo-num">189</div><div class="resumo-label">Contratos ativos</div></div></div>
        <div class="resumo-item"><div class="resumo-icon"><i class="fa-solid fa-sack-dollar"></i></div><div><div class="resumo-num">R$ 245.890</div><div class="resumo-label">Faturamento</div></div></div>
      </div>
    </div>

    <div class="row-mini">
      <div class="card mini-card">
        <div class="mini-top"><span class="mini-label">Usuários</span><span style="font-size:.68rem;color:var(--b3);">30 dias</span></div>
        <div class="mini-value">+188</div>
        <div class="chart-box"><canvas data-spark="usuarios"></canvas></div>
      </div>
      <div class="card mini-card">
        <div class="mini-top"><span class="mini-label">Instituições</span><span style="font-size:.68rem;color:var(--b3);">30 dias</span></div>
        <div class="mini-value">+18</div>
        <div class="chart-box"><canvas data-spark="instituicoes"></canvas></div>
      </div>
      <div class="card mini-card">
        <div class="mini-top"><span class="mini-label">Contratos</span><span style="font-size:.68rem;color:var(--b3);">30 dias</span></div>
        <div class="mini-value">+24</div>
        <div class="chart-box"><canvas data-spark="contratos"></canvas></div>
      </div>
      <div class="card">
        <span class="card-eyebrow">Próximos eventos</span>
        <div class="agenda-list" id="proximosEventos" style="margin-top:.9rem;"></div>
        <a href="#" class="agenda-link" onclick="document.querySelector('[data-page=agenda]').click();return false;">Ver toda agenda <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  `;
  renderProximosEventos();
  mapaNivel = 'pais';
  desenharMapa();
  initDashboardCharts();
};

function renderProximosEventos() {
  const alvo = document.getElementById('proximosEventos');
  const top3 = todosLembretes().filter(e => diasRestantes(e) >= 0).slice(0, 3);
  alvo.innerHTML = top3.length ? top3.map(e => `
    <div class="agenda-item"><span class="agenda-dot"></span><div class="agenda-txt"><strong>${escapeHtml(e.titulo)}</strong><span>${String(e.dia).padStart(2, '0')}/${String(e.mes).padStart(2, '0')} · ${e.hora} · ${e.agenda}</span></div></div>
  `).join('') : '<p style="font-size:.8rem;color:var(--b3);">Nenhum evento futuro cadastrado.</p>';
}

function desenharMapa() {
  const area = document.getElementById('mapaArea');
  if (mapaNivel === 'pais') {
    area.innerHTML = `
      <div class="mapa-wrap">
        <svg class="mapa-svg mundi-svg" viewBox="0 0 760 420" role="img" aria-label="Mapa múndi com o Brasil destacado">
          <path d="M40,60 Q120,20 200,60 Q230,140 150,200 Q60,180 40,60 Z"/>
          <path d="M150,220 Q210,200 220,280 Q210,380 160,400 Q120,340 130,260 Z"/>
          <path class="brasil" onclick="alert('Brasil — atuação nacional Skilliu')" d="M163,248 Q206,238 212,290 Q202,332 168,322 Q152,282 163,248 Z"/>
          <path d="M420,50 Q480,30 520,70 Q500,110 450,100 Q410,90 420,50 Z"/>
          <path d="M430,140 Q500,120 520,220 Q500,320 440,300 Q400,220 430,140 Z"/>
          <path d="M540,40 Q680,20 720,120 Q700,220 600,200 Q540,140 540,40 Z"/>
          <path d="M650,300 Q720,290 730,340 Q700,370 660,350 Z"/>
        </svg>
        <div>
          <div class="mapa-legenda">
            <div class="li"><span class="sw" style="background:#32a557"></span>Brasil — atuação nacional</div>
            <div class="li"><span class="sw" style="background:#c9cdd6"></span>Demais países</div>
          </div>
          <p class="mapa-tip">Atuação alinhada às diretrizes da BNCC e do PNE (Plano Nacional de Educação).</p>
        </div>
      </div>`;
  } else if (mapaNivel === 'estados') {
    const regioes = ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'];
    area.innerHTML = `
      <div>
        ${regioes.map(r => `
          <div class="uf-regiao">
            <div class="uf-regiao-label">${r}</div>
            <div class="uf-grid">${UF_DATA.filter(u => u.regiao === r).map(u => {
              const pintado = ESTADOS_PINTADOS.includes(u.sigla);
              return `<div class="uf-tile ${pintado ? 'pintado' : ''}" title="${u.sigla} — ${r}">${u.sigla}</div>`;
            }).join('')}</div>
          </div>`).join('')}
        <p class="mapa-tip">Mapa simplificado agrupado por região (não é uma malha geográfica exata). Estados com atuação ativa: <strong>São Paulo, Mato Grosso do Sul e Santa Catarina</strong>.</p>
      </div>`;
  } else {
    area.innerHTML = `
      <div>
        <div class="form-grupo" style="max-width:280px;">
          <label>Escolha um estado</label>
          <select id="municipioUf">${UF_DATA.map(u => `<option value="${u.sigla}">${u.sigla}</option>`).join('')}</select>
        </div>
        <button class="btn-acao ghost" onclick="listarMunicipios()"><i class="fa-solid fa-list"></i> Listar municípios</button>
        <div id="municipiosLista" style="margin-top:1rem;"></div>
      </div>`;
  }
}
window.listarMunicipios = function () {
  const uf = document.getElementById('municipioUf').value;
  const lista = MUNICIPIOS_MOCK[uf];
  document.getElementById('municipiosLista').innerHTML = lista
    ? tabelaWrap('<th>Município</th><th>Estado</th>', lista.map(m => `<tr><td>${m}</td><td>${uf}</td></tr>`).join(''))
    : `<p style="font-size:.82rem;color:var(--b3);">Nenhum município cadastrado ainda para ${uf}.</p>`;
};

function initDashboardCharts() {
  document.querySelectorAll('.mapa-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mapa-toggle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      mapaNivel = btn.dataset.nivel;
      desenharMapa();
    });
  });

  const MESES = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const CRESCIMENTO = [12, 18, 22, 30, 38, 45, 52, 61, 70, 78, 88, 96];
  new Chart(document.getElementById('chartCrescimento'), {
    type: 'line',
    data: { labels: MESES, datasets: [{ data: CRESCIMENTO, borderColor: '#32a557', backgroundColor: 'rgba(50,165,87,.12)', borderWidth: 2, pointRadius: 3, pointBackgroundColor: '#32a557', tension: .35, fill: true }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
      scales: { y: { display: false }, x: { grid: { display: false }, ticks: { font: { size: 10 }, color: '#3a5f95' } } } }
  });
  const SPARK_DADOS = { usuarios: [5, 9, 7, 14, 12, 18, 22, 19, 26, 30], instituicoes: [1, 2, 1, 3, 2, 4, 3, 5, 4, 6], contratos: [2, 3, 2, 5, 4, 6, 5, 8, 7, 9] };
  document.querySelectorAll('[data-spark]').forEach(canvas => {
    const chave = canvas.dataset.spark;
    new Chart(canvas, {
      type: 'line',
      data: { labels: SPARK_DADOS[chave].map((_, i) => i), datasets: [{ data: SPARK_DADOS[chave], borderColor: '#32a557', backgroundColor: 'rgba(50,165,87,.1)', borderWidth: 2, pointRadius: 0, tension: .4, fill: true }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { y: { display: false }, x: { display: false } } }
    });
  });
}

// ── LEMBRETES (modal global, também via sino) ──
function abrirModalLembretes() {
  const itens = todosLembretes();
  abrirModal(`
    <h3><i class="fa-solid fa-bell" style="color:var(--g2);margin-right:.4rem;"></i>Lembretes</h3>
    ${itens.map(e => {
      const d = diasRestantes(e);
      let txt, tipo;
      if (d < 0) { txt = 'Já ocorreu'; tipo = 'cinza'; }
      else if (d === 0) { txt = 'Hoje'; tipo = 'vermelho'; }
      else if (d <= 7) { txt = `Em ${d} dias`; tipo = 'amber'; }
      else { txt = `Em ${d} dias`; tipo = 'verde'; }
      return `<div class="lembrete-item"><div class="txt"><strong>${escapeHtml(e.titulo)}</strong><span>${String(e.dia).padStart(2, '0')}/${String(e.mes).padStart(2, '0')}/${e.ano} · ${e.hora} · Agenda ${e.agenda}</span></div>${badge(txt, tipo)}</div>`;
    }).join('')}
    <p style="font-size:.72rem;color:var(--b3);margin-top:1rem;">Isso é uma lista de próximos eventos calculada na hora. Notificação de verdade (push/e-mail) precisa de um agendador no backend — dá pra plugar depois com um cron do Supabase.</p>
  `);
}
window.abrirModalLembretes = abrirModalLembretes;

// ── TIME ──
let timeAba = 'membros';
RENDERERS.time = function () { timeAba = 'membros'; desenharTime(); };
function desenharTime() {
  pageContent.innerHTML = `
    <div class="tabs">
      <button class="tab-btn ${timeAba === 'membros' ? 'active' : ''}" data-aba="membros">Membros</button>
      <button class="tab-btn ${timeAba === 'hierarquia' ? 'active' : ''}" data-aba="hierarquia">Hierarquia</button>
      <button class="tab-btn ${timeAba === 'acessos' ? 'active' : ''}" data-aba="acessos">Acessos</button>
    </div>
    <div id="timeTabContent"></div>
  `;
  document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => { timeAba = b.dataset.aba; desenharTime(); }));
  if (timeAba === 'membros') desenharTimeMembros();
  if (timeAba === 'hierarquia') desenharTimeHierarquia();
  if (timeAba === 'acessos') desenharTimeAcessos();
}
function desenharTimeMembros() {
  const alvo = document.getElementById('timeTabContent');
  alvo.innerHTML = `
    <div class="stat-row" style="margin-bottom:1.2rem;">
      <div class="stat-pill"><div class="num">${MEMBROS_TIME.length}</div><div class="lbl">Total de membros</div></div>
      <div class="stat-pill"><div class="num">${MEMBROS_TIME.filter(m => m.setor === 'Direção').length}</div><div class="lbl">Direção</div></div>
      <div class="stat-pill"><div class="num">${MEMBROS_TIME.filter(m => m.setor === 'Coordenação').length}</div><div class="lbl">Coordenação</div></div>
      <div class="stat-pill"><div class="num">${MEMBROS_TIME.filter(m => !['Direção', 'Coordenação'].includes(m.setor)).length}</div><div class="lbl">Produção / RH / Financeiro</div></div>
    </div>
    <div class="card">
      <div class="toolbar">
        <div class="search-box"><i class="fa-solid fa-search"></i><input placeholder="Buscar por nome ou cargo" oninput="filtrarTimeMembros(this.value)"></div>
        <button class="btn-acao" onclick="abrirModalNovoMembro()"><i class="fa-solid fa-plus"></i> Novo membro</button>
      </div>
      <div id="timeMembrosTabela"></div>
    </div>
  `;
  renderTimeMembrosTabela(MEMBROS_TIME);
}
function renderTimeMembrosTabela(lista) {
  const linhas = lista.length ? lista.map(m => `
    <tr class="clicavel" onclick="abrirPerfilMembro(${m.id})">
      <td><div class="pessoa-cel"><div class="avatar-sm">${iniciais(m.nome)}</div><div><strong>${escapeHtml(m.nome)}</strong><span>${escapeHtml(m.email)}</span></div></div></td>
      <td>${escapeHtml(m.setor)}</td>
      <td>${escapeHtml(m.cargo)}</td>
      <td>${badge(m.vinculo, m.setor === 'Direção' ? 'verde' : 'cinza')}</td>
    </tr>`).join('') : linhaVazia(4, 'Nenhum membro encontrado.');
  document.getElementById('timeMembrosTabela').innerHTML = tabelaWrap('<th>Membro</th><th>Setor</th><th>Cargo</th><th>Vínculo</th>', linhas);
}
window.filtrarTimeMembros = function (termo) {
  const t = termo.trim().toLowerCase();
  renderTimeMembrosTabela(MEMBROS_TIME.filter(m => m.nome.toLowerCase().includes(t) || m.cargo.toLowerCase().includes(t)));
};
window.abrirPerfilMembro = function (id) {
  const m = MEMBROS_TIME.find(x => x.id === id);
  if (!m) return;
  const chefe = MEMBROS_TIME.find(x => x.id === m.reporta_para);
  document.getElementById('timeTabContent').innerHTML = `
    <button class="perfil-voltar" onclick="desenharTimeMembros()"><i class="fa-solid fa-arrow-left"></i> Voltar para membros</button>
    <div class="card">
      <div class="perfil-head">
        <div class="avatar-lg">${iniciais(m.nome)}</div>
        <div><h2>${escapeHtml(m.nome)}</h2><p>${escapeHtml(m.cargo)} · ${escapeHtml(m.setor)}${chefe ? ' · reporta a ' + escapeHtml(chefe.nome) : ''}</p></div>
      </div>
      <div class="perfil-grid">
        <div class="perfil-bloco">
          <h4>Dados pessoais</h4>
          <div class="perfil-lista">
            <div class="perfil-lista-item"><i class="fa-solid fa-id-card"></i>CPF: ${escapeHtml(m.cpf)}</div>
            <div class="perfil-lista-item"><i class="fa-solid fa-phone"></i>${escapeHtml(m.telefone)}</div>
            <div class="perfil-lista-item"><i class="fa-solid fa-location-dot"></i>${escapeHtml(m.endereco)}</div>
            <div class="perfil-lista-item"><i class="fa-solid fa-envelope"></i>${escapeHtml(m.email)}</div>
          </div>
        </div>
        <div class="perfil-bloco">
          <h4>Dados profissionais</h4>
          <div class="perfil-lista">
            <div class="perfil-lista-item"><i class="fa-solid fa-briefcase"></i>${escapeHtml(m.profissao)}</div>
            <div class="perfil-lista-item"><i class="fa-solid fa-layer-group"></i>Área: ${escapeHtml(m.area)}</div>
            <div class="perfil-lista-item"><i class="fa-solid fa-file-signature"></i>Vínculo: ${escapeHtml(m.vinculo)}</div>
          </div>
        </div>
        <div class="perfil-bloco">
          <h4>Funções</h4>
          <div class="perfil-lista">${m.funcoes.map(f => `<div class="perfil-lista-item"><i class="fa-solid fa-check"></i>${escapeHtml(f)}</div>`).join('') || '<span style="color:var(--b3);font-size:.8rem;">Nenhuma cadastrada.</span>'}</div>
        </div>
        <div class="perfil-bloco">
          <h4>Atividades sendo realizadas</h4>
          <div class="perfil-lista">${m.atividades.map(a => `<div class="perfil-lista-item"><i class="fa-solid fa-spinner"></i>${escapeHtml(a)}</div>`).join('') || '<span style="color:var(--b3);font-size:.8rem;">Nenhuma no momento.</span>'}</div>
        </div>
        <div class="perfil-bloco" style="grid-column:1/-1;">
          <h4>Responsabilidades / o que já foi feito</h4>
          <div class="perfil-lista">${m.responsabilidades.map(r => `<div class="perfil-lista-item"><i class="fa-solid fa-flag-checkered"></i>${escapeHtml(r)}</div>`).join('') || '<span style="color:var(--b3);font-size:.8rem;">Nada registrado ainda.</span>'}</div>
        </div>
        <div class="perfil-bloco" style="grid-column:1/-1;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <h4>Acessos pessoais</h4>
            <button class="btn-icone" onclick="abrirModalNovoAcessoPessoal(${m.id})"><i class="fa-solid fa-plus"></i></button>
          </div>
          <div id="acessosPessoaisTabela"></div>
        </div>
      </div>
    </div>
  `;
  renderAcessosPessoais(m);
};
function renderAcessosPessoais(m) {
  const linhas = m.acessosPessoais.length ? m.acessosPessoais.map((a, i) => `
    <tr>
      <td><strong>${escapeHtml(a.ferramenta)}</strong></td>
      <td>${escapeHtml(a.login)}</td>
      <td><div class="senha-cel"><span id="ap-senha-${m.id}-${i}">••••••••••</span><button onclick="revelarSenhaPessoal(${m.id},${i})"><i class="fa-solid fa-eye"></i></button></div></td>
    </tr>`).join('') : linhaVazia(3, 'Nenhum acesso pessoal cadastrado.');
  document.getElementById('acessosPessoaisTabela').innerHTML = tabelaWrap('<th>Ferramenta</th><th>Login</th><th>Senha</th>', linhas);
}
window.revelarSenhaPessoal = function (mid, i) {
  const m = MEMBROS_TIME.find(x => x.id === mid);
  const el = document.getElementById(`ap-senha-${mid}-${i}`);
  el.textContent = el.textContent === '••••••••••' ? m.acessosPessoais[i].senha : '••••••••••';
};
window.abrirModalNovoAcessoPessoal = function (mid) {
  abrirModal(`
    <h3>Novo acesso pessoal</h3>
    <div class="form-grupo"><label>Ferramenta</label><input id="ap-ferramenta"></div>
    <div class="form-grupo"><label>Login</label><input id="ap-login"></div>
    <div class="form-grupo"><label>Senha</label><input id="ap-senha"></div>
    <div class="modal-acoes">
      <button class="btn-cancelar" onclick="fecharModal()">Cancelar</button>
      <button class="btn-acao" onclick="salvarAcessoPessoal(${mid})"><i class="fa-solid fa-check"></i> Salvar</button>
    </div>
  `);
};
window.salvarAcessoPessoal = function (mid) {
  const ferramenta = document.getElementById('ap-ferramenta').value.trim();
  if (!ferramenta) return;
  const m = MEMBROS_TIME.find(x => x.id === mid);
  m.acessosPessoais.push({ ferramenta, login: document.getElementById('ap-login').value.trim(), senha: document.getElementById('ap-senha').value.trim() });
  fecharModal();
  renderAcessosPessoais(m);
};
window.abrirModalNovoMembro = function () {
  abrirModal(`
    <h3>Novo membro do time</h3>
    <div class="form-grupo"><label>Nome completo</label><input id="nm-nome"></div>
    <div class="form-row2">
      <div class="form-grupo"><label>CPF</label><input id="nm-cpf"></div>
      <div class="form-grupo"><label>Telefone</label><input id="nm-telefone"></div>
    </div>
    <div class="form-grupo"><label>Endereço completo</label><input id="nm-endereco"></div>
    <div class="form-grupo"><label>E-mail</label><input id="nm-email" type="email"></div>
    <div class="form-row2">
      <div class="form-grupo"><label>Setor</label>
        <select id="nm-setor"><option>Direção</option><option>Coordenação</option><option>Produção</option><option>RH</option><option>Financeiro</option></select>
      </div>
      <div class="form-grupo"><label>Vínculo</label>
        <select id="nm-vinculo"><option>CLT</option><option>Estagiário</option><option>Prestador de serviço</option><option>Sócio-diretor</option></select>
      </div>
    </div>
    <div class="form-row2">
      <div class="form-grupo"><label>Cargo</label><input id="nm-cargo"></div>
      <div class="form-grupo"><label>Profissão</label><input id="nm-profissao"></div>
    </div>
    <div class="form-grupo"><label>Área</label><input id="nm-area"></div>
    <div class="form-grupo"><label>Reporta a</label>
      <select id="nm-reporta"><option value="">Nenhum (topo da hierarquia)</option>${MEMBROS_TIME.map(m => `<option value="${m.id}">${escapeHtml(m.nome)}</option>`).join('')}</select>
    </div>
    <div class="modal-acoes">
      <button class="btn-cancelar" onclick="fecharModal()">Cancelar</button>
      <button class="btn-acao" onclick="salvarNovoMembro()"><i class="fa-solid fa-check"></i> Salvar</button>
    </div>
  `);
};
window.salvarNovoMembro = function () {
  const nome = document.getElementById('nm-nome').value.trim();
  if (!nome) return;
  const reportaVal = document.getElementById('nm-reporta').value;
  MEMBROS_TIME.push({
    id: novoId(), nome, cpf: document.getElementById('nm-cpf').value.trim() || '—',
    telefone: document.getElementById('nm-telefone').value.trim() || '—', endereco: document.getElementById('nm-endereco').value.trim() || '—',
    email: document.getElementById('nm-email').value.trim() || '—', setor: document.getElementById('nm-setor').value,
    vinculo: document.getElementById('nm-vinculo').value, cargo: document.getElementById('nm-cargo').value.trim() || '—',
    profissao: document.getElementById('nm-profissao').value.trim() || '—', area: document.getElementById('nm-area').value.trim() || '—',
    reporta_para: reportaVal ? Number(reportaVal) : null, funcoes: [], atividades: [], responsabilidades: [], acessosPessoais: [],
  });
  fecharModal();
  desenharTimeMembros();
};
function desenharTimeHierarquia() {
  const alvo = document.getElementById('timeTabContent');
  function nodeHtml(m) {
    const filhos = MEMBROS_TIME.filter(x => x.reporta_para === m.id);
    return `<li>
      <div class="org-card ${m.reporta_para === null ? 'raiz' : ''}" onclick="document.querySelector('[data-aba=membros]').click();setTimeout(()=>abrirPerfilMembro(${m.id}),0)">
        <div class="avatar-sm">${iniciais(m.nome)}</div><strong>${escapeHtml(m.nome)}</strong><span>${escapeHtml(m.cargo)}</span>
      </div>
      ${filhos.length ? `<ul>${filhos.map(nodeHtml).join('')}</ul>` : ''}
    </li>`;
  }
  const raizes = MEMBROS_TIME.filter(m => m.reporta_para === null);
  alvo.innerHTML = `<div class="card"><div class="org-scroll"><ul class="org-tree">${raizes.map(nodeHtml).join('')}</ul></div></div>`;
}
function desenharTimeAcessos() {
  const alvo = document.getElementById('timeTabContent');
  alvo.innerHTML = `
    <div class="card">
      <div class="toolbar">
        <span style="font-size:.8rem;color:var(--b3);font-weight:700;">Logins e senhas da empresa / direção (ferramentas compartilhadas).</span>
        <button class="btn-acao" onclick="abrirModalNovoAcesso()"><i class="fa-solid fa-plus"></i> Novo acesso</button>
      </div>
      <div id="acessosTabela"></div>
      <p style="font-size:.74rem;color:var(--b3);margin-top:.8rem;">Isso é uma lista de teste. No banco real, senha deve ficar num cofre criptografado (ex: Supabase Vault), não em texto puro. Acessos pessoais de cada membro ficam no perfil dele, na aba Membros.</p>
    </div>
  `;
  renderAcessosTabela();
}
function renderAcessosTabela() {
  const linhas = ACESSOS_TIME.length ? ACESSOS_TIME.map((a, i) => `
    <tr>
      <td><strong>${escapeHtml(a.ferramenta)}</strong></td>
      <td>${escapeHtml(a.usuario)}</td>
      <td><div class="senha-cel"><span id="senha-${i}">••••••••••</span><button onclick="revelarSenha(${i})"><i class="fa-solid fa-eye"></i></button></div></td>
      <td>${escapeHtml(a.responsavel)}</td>
    </tr>`).join('') : linhaVazia(4, 'Nenhum acesso cadastrado.');
  document.getElementById('acessosTabela').innerHTML = tabelaWrap('<th>Ferramenta</th><th>Usuário</th><th>Senha</th><th>Responsável</th>', linhas);
}
window.revelarSenha = function (i) {
  const el = document.getElementById(`senha-${i}`);
  el.textContent = el.textContent === '••••••••••' ? ACESSOS_TIME[i].senha : '••••••••••';
};
window.abrirModalNovoAcesso = function () {
  abrirModal(`
    <h3>Novo acesso da empresa</h3>
    <div class="form-grupo"><label>Ferramenta</label><input id="na-ferramenta"></div>
    <div class="form-grupo"><label>Usuário / e-mail</label><input id="na-usuario"></div>
    <div class="form-grupo"><label>Senha</label><input id="na-senha"></div>
    <div class="form-grupo"><label>Responsável</label>
      <select id="na-responsavel">${MEMBROS_TIME.map(m => `<option>${escapeHtml(m.nome)}</option>`).join('')}</select>
    </div>
    <div class="modal-acoes">
      <button class="btn-cancelar" onclick="fecharModal()">Cancelar</button>
      <button class="btn-acao" onclick="salvarNovoAcesso()"><i class="fa-solid fa-check"></i> Salvar</button>
    </div>
  `);
};
window.salvarNovoAcesso = function () {
  const ferramenta = document.getElementById('na-ferramenta').value.trim();
  if (!ferramenta) return;
  ACESSOS_TIME.push({ ferramenta, usuario: document.getElementById('na-usuario').value.trim(), senha: document.getElementById('na-senha').value.trim(), responsavel: document.getElementById('na-responsavel').value });
  fecharModal();
  renderAcessosTabela();
};

// ── FINANCEIRO ──
RENDERERS.financeiro = function () {
  const totalVendas = VENDAS_RECENTES.filter(v => v.status === 'concluida').length;
  pageContent.innerHTML = `
    <div class="stat-row">
      <div class="stat-pill"><div class="num">R$ 245.890</div><div class="lbl">Faturamento total</div></div>
      <div class="stat-pill"><div class="num">${totalVendas}</div><div class="lbl">Vendas concluídas</div></div>
      <div class="stat-pill"><div class="num">0</div><div class="lbl">Reembolsos</div></div>
    </div>
    <div class="card">
      <span class="card-eyebrow">Vendas recentes</span>
      <div style="margin-top:.9rem;">${tabelaWrap(
        '<th>Produto</th><th>Comprador</th><th>Valor</th><th>Status</th><th>Data</th>',
        VENDAS_RECENTES.map(v => `<tr><td>${escapeHtml(v.produto)}</td><td>${escapeHtml(v.comprador)}</td><td>${v.valor === 0 ? 'Gratuito' : 'R$ ' + v.valor}</td><td>${badge('Concluída', 'verde')}</td><td>${v.data}</td></tr>`).join('')
      )}</div>
    </div>
  `;
};

// ── AGENDA (4 calendários + lembretes) ──
const CAL_STATE = {};
const AGENDA_EVENTOS = { 'cal-direcao': AGENDA_DIRECAO, 'cal-formacao': AGENDA_FORMACAO, 'cal-comercial': AGENDA_COMERCIAL, 'cal-equipe': AGENDA_EQUIPE };
const MESES_NOME = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

RENDERERS.agenda = function () {
  const hoje = new Date();
  ['cal-direcao', 'cal-formacao', 'cal-comercial', 'cal-equipe'].forEach(id => { CAL_STATE[id] = { ano: hoje.getFullYear(), mes: hoje.getMonth() + 1 }; });
  pageContent.innerHTML = `
    <div class="card cal-card">
      <div class="card-head">
        <span class="card-eyebrow">Agenda da direção</span>
        <button class="btn-acao ghost" onclick="abrirModalLembretes()"><i class="fa-solid fa-bell"></i> Lembretes</button>
      </div>
      <div style="max-width:360px;" id="cal-direcao"></div>
    </div>
    <div class="row-mini" style="grid-template-columns:repeat(3,1fr);">
      <div class="card cal-card"><span class="card-eyebrow">Formação / Workshop / Palestras</span><div style="margin-top:.8rem;" id="cal-formacao"></div></div>
      <div class="card cal-card"><span class="card-eyebrow">Encontros comerciais / políticos</span><div style="margin-top:.8rem;" id="cal-comercial"></div></div>
      <div class="card cal-card"><span class="card-eyebrow">Equipe (reuniões / confraternizações)</span><div style="margin-top:.8rem;" id="cal-equipe"></div></div>
    </div>
  `;
  Object.keys(AGENDA_EVENTOS).forEach(id => desenharCalendario(id));
};
function desenharCalendario(id) {
  const st = CAL_STATE[id];
  const cont = document.getElementById(id);
  const primeiroDia = new Date(st.ano, st.mes - 1, 1).getDay();
  const diasNoMes = new Date(st.ano, st.mes, 0).getDate();
  const diasMesAnterior = new Date(st.ano, st.mes - 1, 0).getDate();
  let celulas = [];
  for (let i = primeiroDia - 1; i >= 0; i--) celulas.push({ dia: diasMesAnterior - i, fora: true });
  for (let d = 1; d <= diasNoMes; d++) celulas.push({ dia: d, fora: false });
  while (celulas.length < 42) celulas.push({ dia: celulas.length - (primeiroDia + diasNoMes) + 1, fora: true });
  celulas = celulas.slice(0, 42);

  const hoje = new Date();
  const ehHojeMes = hoje.getFullYear() === st.ano && (hoje.getMonth() + 1) === st.mes;
  const dowHtml = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(d => `<div class="cal-dow">${d}</div>`).join('');
  const eventos = AGENDA_EVENTOS[id];
  const diasHtml = celulas.map(c => {
    const temEvento = !c.fora && eventos.some(e => e.dia === c.dia && e.mes === st.mes && e.ano === st.ano);
    const ehHoje = ehHojeMes && !c.fora && c.dia === hoje.getDate();
    const classes = ['cal-day'];
    if (c.fora) classes.push('fora');
    if (ehHoje) classes.push('hoje');
    if (temEvento) classes.push('tem-evento');
    return `<div class="${classes.join(' ')}" ${temEvento ? `onclick="mostrarEventosDia('${id}', ${c.dia})"` : ''}>${c.dia}</div>`;
  }).join('');

  cont.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem;">
      <button class="cal-nav-btn" onclick="navegarMes('${id}',-1)" style="border:none;background:var(--off);width:26px;height:26px;border-radius:50%;color:var(--b1);cursor:pointer;"><i class="fa-solid fa-chevron-left"></i></button>
      <span style="font-size:.82rem;font-weight:800;">${MESES_NOME[st.mes - 1]} ${st.ano}</span>
      <button class="cal-nav-btn" onclick="navegarMes('${id}',1)" style="border:none;background:var(--off);width:26px;height:26px;border-radius:50%;color:var(--b1);cursor:pointer;"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    <div class="cal-grid">${dowHtml}${diasHtml}</div>
    <div class="cal-eventos-dia" id="${id}-eventos" style="display:none;"></div>
  `;
}
window.navegarMes = function (id, delta) {
  const st = CAL_STATE[id];
  st.mes += delta;
  if (st.mes > 12) { st.mes = 1; st.ano++; }
  if (st.mes < 1) { st.mes = 12; st.ano--; }
  desenharCalendario(id);
};
window.mostrarEventosDia = function (id, dia) {
  const st = CAL_STATE[id];
  const eventos = AGENDA_EVENTOS[id].filter(e => e.dia === dia && e.mes === st.mes && e.ano === st.ano);
  const alvo = document.getElementById(`${id}-eventos`);
  alvo.style.display = 'block';
  alvo.innerHTML = eventos.map(e => `<div class="item"><b>${e.hora}</b><span>${escapeHtml(e.titulo)}</span></div>`).join('');
};

// ── COMUNIDADE ──
RENDERERS.comunidade = function () { desenharComunidade(); };
function desenharComunidade() {
  const banidos = COMUNIDADE_MEMBROS.filter(m => m.status === 'banido').length;
  const denuncias = COMUNIDADE_MEMBROS.reduce((s, m) => s + m.denuncias, 0);
  pageContent.innerHTML = `
    <div class="stat-row">
      <div class="stat-pill"><div class="num">${COMUNIDADE_MEMBROS.length}</div><div class="lbl">Membros da comunidade</div></div>
      <div class="stat-pill warn"><div class="num">${banidos}</div><div class="lbl">Banidos</div></div>
      <div class="stat-pill warn"><div class="num">${denuncias}</div><div class="lbl">Denúncias em aberto</div></div>
    </div>
    <div class="card">
      <div class="toolbar"><div class="search-box"><i class="fa-solid fa-search"></i><input placeholder="Buscar por nome ou e-mail" oninput="filtrarComunidade(this.value)"></div></div>
      <div id="comunidadeTabela"></div>
    </div>
  `;
  renderComunidadeTabela(COMUNIDADE_MEMBROS);
}
function renderComunidadeTabela(lista) {
  const linhas = lista.length ? lista.map(m => `
    <tr>
      <td><div class="pessoa-cel"><div class="avatar-sm">${iniciais(m.nome)}</div><strong>${escapeHtml(m.nome)}</strong></div></td>
      <td>${escapeHtml(m.email)}</td><td>${escapeHtml(m.cidade)}/${m.estado}</td>
      <td>${badge(m.status === 'ativo' ? 'Ativo' : 'Banido', m.status === 'ativo' ? 'verde' : 'vermelho')}</td>
      <td>${m.denuncias > 0 ? badge(m.denuncias, 'amber') : '—'}</td>
      <td><div class="acoes-cel">
        <button class="btn-icone perigo" onclick="alternarBanimento('${m.id}')"><i class="fa-solid fa-ban"></i></button>
        <button class="btn-icone perigo" onclick="excluirDaComunidade('${m.id}')"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`).join('') : linhaVazia(6, comunidadeCarregada ? 'Nenhum membro cadastrado ainda.' : 'Carregando...');
  document.getElementById('comunidadeTabela').innerHTML = tabelaWrap('<th>Nome</th><th>E-mail</th><th>Localidade</th><th>Status</th><th>Denúncias</th><th>Ações</th>', linhas);
}
window.filtrarComunidade = function (termo) {
  const t = termo.trim().toLowerCase();
  renderComunidadeTabela(COMUNIDADE_MEMBROS.filter(m => m.nome.toLowerCase().includes(t) || m.email.toLowerCase().includes(t)));
};
window.alternarBanimento = async function (id) {
  const m = COMUNIDADE_MEMBROS.find(x => x.id === id);
  if (!m) return;
  const novoStatus = m.status === 'ativo' ? 'banido' : 'ativo';
  const { error } = await sb.from('perfis').update({ status: novoStatus }).eq('id', id);
  if (error) { alert('Não deu pra atualizar: ' + error.message); return; }
  m.status = novoStatus;
  desenharComunidade();
};
window.excluirDaComunidade = async function (id) {
  const m = COMUNIDADE_MEMBROS.find(x => x.id === id);
  if (!m) return;
  if (!confirm(`Remover ${m.nome} da comunidade? Isso só apaga o perfil da tabela "perfis" — o login continua existindo no Supabase Auth, e pra remover de vez precisa de uma função com a chave service_role (não deve rodar no navegador).`)) return;
  const { error } = await sb.from('perfis').delete().eq('id', id);
  if (error) { alert('Não deu pra excluir: ' + error.message); return; }
  COMUNIDADE_MEMBROS = COMUNIDADE_MEMBROS.filter(x => x.id !== id);
  desenharComunidade();
};

// ── PRODUTOS (Físicos / Digitais) ──
let produtosAba = 'fisicos';
RENDERERS.produtos = function () { produtosAba = 'fisicos'; desenharProdutos(); };
function desenharProdutos() {
  pageContent.innerHTML = `
    <div class="tabs">
      <button class="tab-btn ${produtosAba === 'fisicos' ? 'active' : ''}" data-aba="fisicos">Produtos físicos</button>
      <button class="tab-btn ${produtosAba === 'digitais' ? 'active' : ''}" data-aba="digitais">Produtos digitais</button>
    </div>
    <div id="produtosTabContent"></div>
  `;
  document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => { produtosAba = b.dataset.aba; desenharProdutos(); }));
  produtosAba === 'fisicos' ? desenharProdutosFisicos() : desenharProdutosDigitais();
}
function desenharProdutosFisicos() {
  document.getElementById('produtosTabContent').innerHTML = `
    <div class="card">
      <div class="toolbar"><span class="card-eyebrow">Catálogo físico</span><button class="btn-acao" onclick="abrirModalNovoFisico()"><i class="fa-solid fa-plus"></i> Novo produto físico</button></div>
      <div class="resumo-grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-top:1rem;">
        ${PRODUTOS_FISICOS.map((p, i) => `
          <div class="hier-card" style="width:100%;justify-content:space-between;" onclick="verProdutoFisico(${i})">
            <div style="display:flex;align-items:center;gap:.6rem;">
              <div class="resumo-icon"><i class="fa-solid fa-cube"></i></div>
              <div><strong>${escapeHtml(p.nome)}</strong><span>${p.preco === 0 ? 'Gratuito' : 'R$ ' + p.preco.toFixed(2)}</span></div>
            </div>
            ${p.destaque ? badge('Carro-chefe', 'verde') : ''}
          </div>`).join('')}
      </div>
    </div>
  `;
}
window.verProdutoFisico = function (i) {
  const p = PRODUTOS_FISICOS[i];
  abrirModal(`
    <h3>${escapeHtml(p.nome)} ${p.destaque ? badge('Carro-chefe', 'verde') : ''}</h3>
    <p style="font-size:.85rem;color:var(--b1);margin-bottom:.8rem;">${escapeHtml(p.descricao)}</p>
    <div class="stat-row">
      <div class="stat-pill"><div class="num">R$ ${p.preco.toFixed(2)}</div><div class="lbl">Preço</div></div>
      <div class="stat-pill"><div class="num">${p.estoque}</div><div class="lbl">Em estoque</div></div>
    </div>
  `);
};
window.abrirModalNovoFisico = function () {
  abrirModal(`
    <h3>Novo produto físico</h3>
    <div class="form-grupo"><label>Nome</label><input id="pf-nome"></div>
    <div class="form-grupo"><label>Descrição</label><textarea id="pf-descricao" rows="3"></textarea></div>
    <div class="form-row2">
      <div class="form-grupo"><label>Preço (R$)</label><input id="pf-preco" type="number" min="0" step="0.01" value="0"></div>
      <div class="form-grupo"><label>Estoque</label><input id="pf-estoque" type="number" min="0" value="0"></div>
    </div>
    <div class="modal-acoes"><button class="btn-cancelar" onclick="fecharModal()">Cancelar</button><button class="btn-acao" onclick="salvarProdutoFisico()"><i class="fa-solid fa-check"></i> Salvar</button></div>
  `);
};
window.salvarProdutoFisico = function () {
  const nome = document.getElementById('pf-nome').value.trim();
  if (!nome) return;
  PRODUTOS_FISICOS.push({ nome, descricao: document.getElementById('pf-descricao').value.trim(), preco: Number(document.getElementById('pf-preco').value) || 0, estoque: Number(document.getElementById('pf-estoque').value) || 0, destaque: false });
  fecharModal();
  desenharProdutosFisicos();
};
function desenharProdutosDigitais() {
  document.getElementById('produtosTabContent').innerHTML = `
    <div class="card">
      <div class="toolbar"><span class="card-eyebrow">Ebooks</span><button class="btn-acao" onclick="abrirModalNovoEbook()"><i class="fa-solid fa-plus"></i> Novo ebook</button></div>
      <div id="digitaisTabela"></div>
    </div>
  `;
  renderDigitaisTabela();
}
function renderDigitaisTabela() {
  const linhas = PRODUTOS_DIGITAIS.length ? PRODUTOS_DIGITAIS.map(p => `
    <tr><td><strong>${escapeHtml(p.nome)}</strong></td><td>${p.preco === 0 ? 'Gratuito' : 'R$ ' + p.preco}</td><td>${p.vendas}</td><td>${p.downloads}</td>
    <td>${badge(p.ativo ? 'Ativo' : 'Inativo', p.ativo ? 'verde' : 'cinza')}</td></tr>`).join('') : linhaVazia(5, 'Nenhum ebook cadastrado.');
  document.getElementById('digitaisTabela').innerHTML = tabelaWrap('<th>Ebook</th><th>Preço</th><th>Vendas</th><th>Downloads</th><th>Status</th>', linhas);
}
window.abrirModalNovoEbook = function () {
  abrirModal(`
    <h3>Novo ebook</h3>
    <div class="form-grupo"><label>Nome</label><input id="pd-nome"></div>
    <div class="form-grupo"><label>Preço (R$, 0 = gratuito)</label><input id="pd-preco" type="number" min="0" value="0"></div>
    <div class="modal-acoes"><button class="btn-cancelar" onclick="fecharModal()">Cancelar</button><button class="btn-acao" onclick="salvarEbook()"><i class="fa-solid fa-check"></i> Salvar</button></div>
  `);
};
window.salvarEbook = function () {
  const nome = document.getElementById('pd-nome').value.trim();
  if (!nome) return;
  PRODUTOS_DIGITAIS.push({ nome, tipo: 'Ebook', preco: Number(document.getElementById('pd-preco').value) || 0, vendas: 0, downloads: 0, ativo: true });
  fecharModal();
  renderDigitaisTabela();
};

// ── BIBLIOTECA ──
RENDERERS.biblioteca = function () {
  const totalVendas = PRODUTOS_DIGITAIS.reduce((s, p) => s + p.vendas, 0);
  const totalDownloads = PRODUTOS_DIGITAIS.reduce((s, p) => s + p.downloads, 0);
  pageContent.innerHTML = `
    <div class="stat-row">
      <div class="stat-pill"><div class="num">${PRODUTOS_DIGITAIS.length}</div><div class="lbl">Produtos na biblioteca</div></div>
      <div class="stat-pill"><div class="num">${totalVendas}</div><div class="lbl">Vendas / liberações</div></div>
      <div class="stat-pill"><div class="num">${totalDownloads}</div><div class="lbl">Downloads</div></div>
    </div>
    <div class="card">
      <span class="card-eyebrow">Ebooks e produtos digitais</span>
      <div style="margin-top:.9rem;">${tabelaWrap(
        '<th>Produto</th><th>Preço</th><th>Vendas</th><th>Downloads</th><th>Status</th>',
        PRODUTOS_DIGITAIS.length ? PRODUTOS_DIGITAIS.map(p => `<tr><td><strong>${escapeHtml(p.nome)}</strong></td><td>${p.preco === 0 ? 'Gratuito' : 'R$ ' + p.preco}</td><td>${p.vendas}</td><td>${p.downloads}</td><td>${badge(p.ativo ? 'Ativo' : 'Inativo', p.ativo ? 'verde' : 'cinza')}</td></tr>`).join('') : linhaVazia(5, bibliotecaCarregada ? 'Nenhum ebook cadastrado ainda.' : 'Carregando...')
      )}</div>
    </div>
  `;
};

// ── RADAR ──
RENDERERS.radar = function () {
  const media = Math.round(RADAR_RESPOSTAS.reduce((s, r) => s + r.pontuacao, 0) / (RADAR_RESPOSTAS.length || 1));
  pageContent.innerHTML = `
    <div class="stat-row">
      <div class="stat-pill"><div class="num">${RADAR_RESPOSTAS.length}</div><div class="lbl">Respostas recebidas</div></div>
      <div class="stat-pill"><div class="num">${media}</div><div class="lbl">Pontuação média</div></div>
      <div class="stat-pill"><div class="num">${RADAR_RESPOSTAS.filter(r => r.status === 'Concluído').length}</div><div class="lbl">Escolas aprovadas</div></div>
    </div>
    <div class="card">
      <span class="card-eyebrow">Diagnósticos Radar Sky</span>
      <div style="margin-top:.9rem;">${tabelaWrap(
        '<th>Escola</th><th>Respondente</th><th>Cargo</th><th>Data</th><th>Pontuação</th><th>Status</th><th>Ações</th>',
        RADAR_RESPOSTAS.length ? RADAR_RESPOSTAS.map((r, i) => `<tr><td><strong>${escapeHtml(r.escola)}</strong></td><td>${escapeHtml(r.respondente)}</td><td>${escapeHtml(r.cargo)}</td><td>${r.data}</td><td>${r.pontuacao}</td><td>${badge(r.status, r.status === 'Concluído' ? 'verde' : (r.status === 'Recusado' ? 'vermelho' : 'amber'))}</td><td><div class="acoes-cel">
          <button class="btn-icone" onclick="verRespostaRadar(${i})"><i class="fa-solid fa-eye"></i></button>
          ${r.status === 'Em análise' ? `<button class="btn-icone" title="Aprovar" onclick="resolverRadar('${r.id}','aprovado')"><i class="fa-solid fa-check"></i></button><button class="btn-icone perigo" title="Recusar" onclick="resolverRadar('${r.id}','recusado')"><i class="fa-solid fa-xmark"></i></button>` : ''}
        </div></td></tr>`).join('') : linhaVazia(7, radarCarregado ? 'Nenhuma resposta recebida ainda.' : 'Carregando...')
      )}</div>
    </div>
  `;
};
window.verRespostaRadar = function (i) {
  const r = RADAR_RESPOSTAS[i];
  abrirModal(`
    <h3>Respostas — ${escapeHtml(r.escola)}</h3>
    <p style="font-size:.83rem;color:var(--b3);margin-bottom:.8rem;">Respondido por ${escapeHtml(r.respondente)} (${escapeHtml(r.cargo)}) em ${r.data}.</p>
    <div class="perfil-lista">
      <div class="perfil-lista-item"><i class="fa-solid fa-check"></i>STEAM Education: nível intermediário</div>
      <div class="perfil-lista-item"><i class="fa-solid fa-check"></i>BNCC: alinhamento parcial</div>
      <div class="perfil-lista-item"><i class="fa-solid fa-check"></i>Infraestrutura: sem laboratório dedicado</div>
      <div class="perfil-lista-item"><i class="fa-solid fa-check"></i>Pontuação final: ${r.pontuacao}/100</div>
    </div>
  `);
};
window.resolverRadar = async function (id, novoStatus) {
  const { error } = await sb.from('radar_verificacoes').update({ status: novoStatus, resolvido_em: new Date().toISOString() }).eq('id', id);
  if (error) { alert('Não deu pra atualizar: ' + error.message); return; }
  fecharModal();
  carregarRadar();
};

// ── FORMAÇÃO ──
RENDERERS.formacao = function () {
  pageContent.innerHTML = `
    <div class="stat-row">
      <div class="stat-pill"><div class="num">${FORMACOES.filter(f => f.status === 'Concluído').length}</div><div class="lbl">Formações concluídas</div></div>
      <div class="stat-pill"><div class="num">${FORMACOES.filter(f => f.status === 'Em andamento').length}</div><div class="lbl">Em andamento</div></div>
    </div>
    <div class="card">
      <span class="card-eyebrow">Trilhas de formação por escola</span>
      <div style="margin-top:.9rem;">${tabelaWrap(
        '<th>Escola</th><th>Trilha</th><th>Progresso</th><th>Mentor</th><th>Status</th><th>Conclusão</th>',
        FORMACOES.map(f => `<tr><td><strong>${escapeHtml(f.escola)}</strong></td><td>${escapeHtml(f.trilha)}</td><td>${f.progresso}%</td><td>${escapeHtml(f.mentor)}</td><td>${badge(f.status, f.status === 'Concluído' ? 'verde' : 'amber')}</td><td>${f.data_conclusao}</td></tr>`).join('')
      )}</div>
    </div>
  `;
};

// ── WORKSHOP / PALESTRAS ──
function paginaEventoTecnico(lista, rotulo) {
  return `
    <div class="stat-row"><div class="stat-pill"><div class="num">${lista.length}</div><div class="lbl">${rotulo}s agendados</div></div></div>
    <div class="card">
      <div class="toolbar"><span class="card-eyebrow">${rotulo}s</span><button class="btn-acao" onclick="abrirModalEvento('${rotulo}')"><i class="fa-solid fa-plus"></i> Novo ${rotulo.toLowerCase()}</button></div>
      <div id="eventoTecnicoTabela"></div>
    </div>
  `;
}
function renderEventoTecnicoTabela(lista) {
  const linhas = lista.length ? lista.map(w => `
    <tr><td><strong>${escapeHtml(w.titulo)}</strong><div style="font-size:.72rem;color:var(--b3);">${escapeHtml(w.assunto)}</div></td>
    <td>${w.data}<br><span style="font-size:.72rem;color:var(--b3);">${w.hora}</span></td><td>${escapeHtml(w.local)}</td><td>${escapeHtml(w.responsavel)}</td>
    <td><div class="chips">${w.equipe.map(e => `<span class="chip">${escapeHtml(e)}</span>`).join('')}</div></td><td>${escapeHtml(w.didatica)}</td></tr>`).join('') : linhaVazia(6, 'Nenhum registro ainda.');
  document.getElementById('eventoTecnicoTabela').innerHTML = tabelaWrap('<th>Título</th><th>Data / hora</th><th>Local</th><th>Responsável</th><th>Equipe</th><th>Didática</th>', linhas);
}
RENDERERS.workshop = function () { pageContent.innerHTML = paginaEventoTecnico(WORKSHOPS, 'Workshop'); renderEventoTecnicoTabela(WORKSHOPS); };
RENDERERS.palestras = function () { pageContent.innerHTML = paginaEventoTecnico(PALESTRAS, 'Palestra'); renderEventoTecnicoTabela(PALESTRAS); };
window.abrirModalEvento = function (rotulo) {
  abrirModal(`
    <h3>Novo ${rotulo.toLowerCase()}</h3>
    <div class="form-grupo"><label>Título / assunto</label><input id="ev-titulo"></div>
    <div class="form-row2"><div class="form-grupo"><label>Data</label><input id="ev-data" type="date"></div><div class="form-grupo"><label>Hora</label><input id="ev-hora" type="time"></div></div>
    <div class="form-grupo"><label>Local</label><input id="ev-local" placeholder="Escola / cidade / UF"></div>
    <div class="form-grupo"><label>Responsável</label><select id="ev-responsavel">${MEMBROS_TIME.map(m => `<option>${escapeHtml(m.nome)}</option>`).join('')}</select></div>
    <div class="form-grupo"><label>Equipe participante</label><div class="chips" id="ev-equipe">${MEMBROS_TIME.map(m => `<span class="chip chip-select" data-nome="${escapeHtml(m.nome)}" onclick="this.classList.toggle('selecionado')">${escapeHtml(m.nome)}</span>`).join('')}</div></div>
    <div class="form-grupo"><label>Didática usada</label><input id="ev-didatica"></div>
    <div class="modal-acoes"><button class="btn-cancelar" onclick="fecharModal()">Cancelar</button><button class="btn-acao" onclick="salvarEvento('${rotulo}')"><i class="fa-solid fa-check"></i> Salvar</button></div>
  `);
};
window.salvarEvento = function (rotulo) {
  const titulo = document.getElementById('ev-titulo').value.trim();
  if (!titulo) return;
  const equipe = Array.from(document.querySelectorAll('#ev-equipe .chip.selecionado')).map(c => c.dataset.nome);
  const dataVal = document.getElementById('ev-data').value;
  const registro = { titulo, data: dataVal ? dataVal.split('-').reverse().join('/') : '—', hora: document.getElementById('ev-hora').value || '—', local: document.getElementById('ev-local').value.trim() || '—', responsavel: document.getElementById('ev-responsavel').value, equipe, assunto: titulo, didatica: document.getElementById('ev-didatica').value.trim() || '—' };
  if (rotulo === 'Workshop') { WORKSHOPS.push(registro); RENDERERS.workshop(); } else { PALESTRAS.push(registro); RENDERERS.palestras(); }
  fecharModal();
};

// ── CONTATOS (Políticos / Colaboradores e associados / Escolas / Empresas) ──
let contatosAba = 'politicos';
let contatosFiltro = 'Todos';
RENDERERS.contatos = function () { contatosAba = 'politicos'; contatosFiltro = 'Todos'; desenharContatos(); };
function desenharContatos() {
  pageContent.innerHTML = `
    <div class="tabs">
      <button class="tab-btn ${contatosAba === 'politicos' ? 'active' : ''}" data-aba="politicos">Políticos</button>
      <button class="tab-btn ${contatosAba === 'colaboradores' ? 'active' : ''}" data-aba="colaboradores">Colaboradores e associados</button>
      <button class="tab-btn ${contatosAba === 'escolas' ? 'active' : ''}" data-aba="escolas">Escolas</button>
      <button class="tab-btn ${contatosAba === 'empresas' ? 'active' : ''}" data-aba="empresas">Empresas</button>
    </div>
    <div class="card">
      <div class="toolbar"><div class="search-box"><i class="fa-solid fa-search"></i><input placeholder="Buscar por nome ou cargo" oninput="filtrarContatos(this.value)"></div>
        ${contatosAba !== 'empresas' ? `<button class="btn-acao" onclick="abrirModalNovoContato()"><i class="fa-solid fa-plus"></i> Novo contato</button>` : `<button class="btn-acao" onclick="abrirModalNovaEmpresa()"><i class="fa-solid fa-plus"></i> Nova empresa</button>`}
      </div>
      <div id="contatosFiltros"></div>
      <div id="contatosTabela"></div>
    </div>
  `;
  document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => { contatosAba = b.dataset.aba; contatosFiltro = 'Todos'; desenharContatos(); }));
  renderContatosAtual();
}
function renderContatosAtual() {
  const filtrosEl = document.getElementById('contatosFiltros');
  if (contatosAba === 'politicos') {
    filtrosEl.innerHTML = renderChipsFiltro(['Todos', 'Prefeitura', 'Secretaria da Educação', 'Outros']);
    renderPoliticos(CONTATOS_POLITICOS);
  } else if (contatosAba === 'colaboradores') {
    filtrosEl.innerHTML = '';
    renderColaboradores(CONTATOS_COLABORADORES);
  } else if (contatosAba === 'escolas') {
    filtrosEl.innerHTML = renderChipsFiltro(['Todos', 'Direção', 'Professor', 'Técnico']);
    renderEscolas(CONTATOS_ESCOLAS);
  } else {
    filtrosEl.innerHTML = '';
    renderEmpresas(CONTATOS_EMPRESAS);
  }
}
function renderChipsFiltro(opcoes) {
  return `<div class="chip-filtros">${opcoes.map(o => `<span class="chip-filtro ${contatosFiltro === o ? 'active' : ''}" onclick="filtrarPorTipoContato('${o}')">${o}</span>`).join('')}</div>`;
}
window.filtrarPorTipoContato = function (op) { contatosFiltro = op; renderContatosAtual(); };
function renderPoliticos(lista) {
  const filtrada = contatosFiltro === 'Todos' ? lista : lista.filter(c => c.tipo === contatosFiltro);
  const linhas = filtrada.length ? filtrada.map(c => `<tr><td><strong>${escapeHtml(c.nome)}</strong></td><td>${escapeHtml(c.cargo)}</td><td>${escapeHtml(c.orgao)}</td><td>${escapeHtml(c.telefone)}</td><td>${escapeHtml(c.email)}</td><td>${badge(c.tipo, 'cinza')}</td></tr>`).join('') : linhaVazia(6, 'Nenhum contato encontrado.');
  document.getElementById('contatosTabela').innerHTML = tabelaWrap('<th>Nome</th><th>Cargo</th><th>Órgão</th><th>Telefone</th><th>E-mail</th><th>Tipo</th>', linhas);
}
function renderColaboradores(lista) {
  const linhas = lista.length ? lista.map(c => `<tr><td><strong>${escapeHtml(c.nome)}</strong></td><td>${badge(c.tipo, 'cinza')}</td><td>${escapeHtml(c.area)}</td><td>${escapeHtml(c.telefone)}</td><td>${escapeHtml(c.email)}</td></tr>`).join('') : linhaVazia(5, 'Nenhum colaborador cadastrado.');
  document.getElementById('contatosTabela').innerHTML = tabelaWrap('<th>Nome</th><th>Tipo</th><th>Área</th><th>Telefone</th><th>E-mail</th>', linhas);
}
function renderEscolas(lista) {
  const filtrada = contatosFiltro === 'Todos' ? lista : lista.filter(c => c.tipo === contatosFiltro);
  const linhas = filtrada.length ? filtrada.map(c => `<tr><td><strong>${escapeHtml(c.nome)}</strong></td><td>${escapeHtml(c.escola)}</td><td>${badge(c.tipo, 'cinza')}</td><td>${escapeHtml(c.telefone)}</td><td>${escapeHtml(c.email)}</td></tr>`).join('') : linhaVazia(5, 'Nenhum contato encontrado.');
  document.getElementById('contatosTabela').innerHTML = tabelaWrap('<th>Nome</th><th>Escola</th><th>Tipo</th><th>Telefone</th><th>E-mail</th>', linhas);
}
function renderEmpresas(lista) {
  const linhas = lista.length ? lista.map((e, i) => `<tr class="clicavel" onclick="verEmpresa(${i})"><td><strong>${escapeHtml(e.nome)}</strong></td><td>${escapeHtml(e.local)}</td><td>${escapeHtml(e.regiaoResponsavel)}</td><td>${escapeHtml(e.responsavelExterno.nome)}</td></tr>`).join('') : linhaVazia(4, 'Nenhuma empresa cadastrada.');
  document.getElementById('contatosTabela').innerHTML = tabelaWrap('<th>Empresa</th><th>Localização</th><th>Região responsável</th><th>Contato externo</th>', linhas);
}
window.verEmpresa = function (i) {
  const e = CONTATOS_EMPRESAS[i];
  abrirModal(`
    <h3>${escapeHtml(e.nome)}</h3>
    <p style="font-size:.83rem;color:var(--b3);margin-bottom:.9rem;"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(e.local)} · Responsável pela ${escapeHtml(e.regiaoResponsavel)}</p>
    <div class="perfil-bloco" style="margin-bottom:1rem;">
      <h4>Responsável por conexões externas</h4>
      <div class="perfil-lista">
        <div class="perfil-lista-item"><i class="fa-solid fa-user"></i>${escapeHtml(e.responsavelExterno.nome)} — ${escapeHtml(e.responsavelExterno.cargo)}</div>
        <div class="perfil-lista-item"><i class="fa-solid fa-phone"></i>${escapeHtml(e.responsavelExterno.telefone)}</div>
        <div class="perfil-lista-item"><i class="fa-solid fa-envelope"></i>${escapeHtml(e.responsavelExterno.email)}</div>
      </div>
    </div>
    <div class="perfil-bloco">
      <h4>Projeto social</h4>
      <div class="perfil-lista">
        <div class="perfil-lista-item"><i class="fa-solid fa-hand-holding-heart"></i>${escapeHtml(e.projeto.descricao)}</div>
        <div class="perfil-lista-item"><i class="fa-solid fa-percent"></i>${escapeHtml(e.projeto.percentual)}</div>
        <div class="perfil-lista-item"><i class="fa-solid fa-school"></i>${escapeHtml(e.projeto.areaBeneficiada)}</div>
      </div>
    </div>
  `);
};
window.abrirModalNovaEmpresa = function () {
  abrirModal(`
    <h3>Nova empresa financiadora</h3>
    <div class="form-grupo"><label>Nome da empresa</label><input id="ne-nome"></div>
    <div class="form-grupo"><label>Localização</label><input id="ne-local" placeholder="Cidade/UF"></div>
    <div class="form-grupo"><label>Região responsável</label><input id="ne-regiao"></div>
    <div class="form-row2">
      <div class="form-grupo"><label>Responsável externo</label><input id="ne-resp-nome"></div>
      <div class="form-grupo"><label>Cargo</label><input id="ne-resp-cargo"></div>
    </div>
    <div class="form-row2">
      <div class="form-grupo"><label>Telefone</label><input id="ne-resp-telefone"></div>
      <div class="form-grupo"><label>E-mail</label><input id="ne-resp-email"></div>
    </div>
    <div class="form-grupo"><label>Descrição do projeto social</label><textarea id="ne-projeto" rows="2"></textarea></div>
    <div class="form-row2">
      <div class="form-grupo"><label>Percentual revertido</label><input id="ne-percentual" placeholder="Ex: 5% do investimento local"></div>
      <div class="form-grupo"><label>Área beneficiada</label><input id="ne-area"></div>
    </div>
    <div class="modal-acoes"><button class="btn-cancelar" onclick="fecharModal()">Cancelar</button><button class="btn-acao" onclick="salvarEmpresa()"><i class="fa-solid fa-check"></i> Salvar</button></div>
  `);
};
window.salvarEmpresa = function () {
  const nome = document.getElementById('ne-nome').value.trim();
  if (!nome) return;
  CONTATOS_EMPRESAS.push({
    nome, local: document.getElementById('ne-local').value.trim() || '—', regiaoResponsavel: document.getElementById('ne-regiao').value.trim() || '—',
    responsavelExterno: { nome: document.getElementById('ne-resp-nome').value.trim() || '—', cargo: document.getElementById('ne-resp-cargo').value.trim() || '—', telefone: document.getElementById('ne-resp-telefone').value.trim() || '—', email: document.getElementById('ne-resp-email').value.trim() || '—' },
    projeto: { descricao: document.getElementById('ne-projeto').value.trim() || '—', percentual: document.getElementById('ne-percentual').value.trim() || '—', areaBeneficiada: document.getElementById('ne-area').value.trim() || '—' },
  });
  fecharModal();
  renderEmpresas(CONTATOS_EMPRESAS);
};
window.filtrarContatos = function (termo) {
  const t = termo.trim().toLowerCase();
  if (contatosAba === 'politicos') renderPoliticos(CONTATOS_POLITICOS.filter(c => c.nome.toLowerCase().includes(t) || c.cargo.toLowerCase().includes(t)));
  else if (contatosAba === 'colaboradores') renderColaboradores(CONTATOS_COLABORADORES.filter(c => c.nome.toLowerCase().includes(t)));
  else if (contatosAba === 'escolas') renderEscolas(CONTATOS_ESCOLAS.filter(c => c.nome.toLowerCase().includes(t) || c.escola.toLowerCase().includes(t)));
  else renderEmpresas(CONTATOS_EMPRESAS.filter(e => e.nome.toLowerCase().includes(t)));
};
window.abrirModalNovoContato = function () {
  const camposPoliticos = `
    <div class="form-row2"><div class="form-grupo"><label>Cargo</label><input id="nc-cargo" placeholder="Ex: Secretário de Educação"></div><div class="form-grupo"><label>Órgão</label><input id="nc-orgao"></div></div>
    <div class="form-grupo"><label>Tipo</label><select id="nc-tipo-politico"><option>Prefeitura</option><option>Secretaria da Educação</option><option>Outros</option></select></div>`;
  const camposColab = `<div class="form-row2"><div class="form-grupo"><label>Tipo</label><select id="nc-tipo-colab"><option>Colaborador</option><option>Associado</option></select></div><div class="form-grupo"><label>Área</label><input id="nc-area-colab"></div></div>`;
  const camposEscola = `<div class="form-row2"><div class="form-grupo"><label>Escola</label><input id="nc-escola"></div><div class="form-grupo"><label>Tipo</label><select id="nc-tipo-escola"><option>Direção</option><option>Professor</option><option>Técnico</option></select></div></div>`;
  abrirModal(`
    <h3>Novo contato</h3>
    <div class="form-grupo"><label>Nome</label><input id="nc-nome"></div>
    ${contatosAba === 'politicos' ? camposPoliticos : contatosAba === 'colaboradores' ? camposColab : camposEscola}
    <div class="form-row2"><div class="form-grupo"><label>Telefone</label><input id="nc-telefone"></div><div class="form-grupo"><label>E-mail</label><input id="nc-email"></div></div>
    <div class="modal-acoes"><button class="btn-cancelar" onclick="fecharModal()">Cancelar</button><button class="btn-acao" onclick="salvarNovoContato()"><i class="fa-solid fa-check"></i> Salvar</button></div>
  `);
};
window.salvarNovoContato = function () {
  const nome = document.getElementById('nc-nome').value.trim();
  if (!nome) return;
  const telefone = document.getElementById('nc-telefone').value.trim() || '—';
  const email = document.getElementById('nc-email').value.trim() || '—';
  if (contatosAba === 'politicos') {
    CONTATOS_POLITICOS.push({ nome, cargo: document.getElementById('nc-cargo').value.trim() || '—', orgao: document.getElementById('nc-orgao').value.trim() || '—', telefone, email, tipo: document.getElementById('nc-tipo-politico').value });
  } else if (contatosAba === 'colaboradores') {
    CONTATOS_COLABORADORES.push({ nome, tipo: document.getElementById('nc-tipo-colab').value, area: document.getElementById('nc-area-colab').value.trim() || '—', telefone, email });
  } else {
    CONTATOS_ESCOLAS.push({ nome, escola: document.getElementById('nc-escola').value.trim() || '—', tipo: document.getElementById('nc-tipo-escola').value, telefone, email });
  }
  fecharModal();
  desenharContatos();
};

// ── IDENTIDADE SKILLIU (clique no logo) ──
function textoIdentidadeCompleta() {
  let txt = `🎨 Identidade visual — Skilliu\n\n`;
  txt += `Cores da marca:\n`;
  IDENTIDADE_CORES.forEach(c => txt += `• ${c.nome}: ${c.hex}\n`);
  txt += `\nLogo, uniformes e crachás: fala com a Brenda (Marketing) ou acessa a aba Identidade no painel de gestão.\n`;
  txt += `\nRedes sociais:\n`;
  REDES_SOCIAIS.forEach(r => txt += `• ${r.rede}: ${r.seguidores} seguidores (${r.crescimento} nos últimos 12 meses)\n`);
  return txt;
}
window.compartilharIdentidadeWhatsApp = function () { window.open(`https://wa.me/?text=${encodeURIComponent(textoIdentidadeCompleta())}`, '_blank'); };
window.copiarTextoIdentidade = function () {
  navigator.clipboard.writeText(textoIdentidadeCompleta()).then(() => alert('Texto copiado! Agora é só colar onde quiser.'));
};
window.emailIdentidade = function () {
  window.location.href = `mailto:?subject=${encodeURIComponent('Identidade visual Skilliu')}&body=${encodeURIComponent(textoIdentidadeCompleta())}`;
};
window.abrirModalCompartilharIdentidade = function () {
  abrirModal(`
    <h3>Compartilhar identidade</h3>
    <p style="font-size:.82rem;color:var(--b3);margin-bottom:1rem;">Isso monta um resumo em texto com as cores, redes sociais e onde buscar os arquivos. Pra imagens (logo, uniforme, crachá) em si, ainda precisa anexar o arquivo à mão — o navegador não deixa anexar automático num link de compartilhamento.</p>
    <div style="display:flex;flex-direction:column;gap:.6rem;">
      <button class="btn-acao" onclick="compartilharIdentidadeWhatsApp()"><i class="fa-brands fa-whatsapp"></i> Compartilhar no WhatsApp</button>
      <button class="btn-acao ghost" onclick="emailIdentidade()"><i class="fa-solid fa-envelope"></i> Enviar por e-mail</button>
      <button class="btn-acao ghost" onclick="copiarTextoIdentidade()"><i class="fa-solid fa-copy"></i> Copiar texto</button>
    </div>
  `);
};
window.compartilharLogoWhatsApp = function () {
  const t = `🎨 Skilliu — Logo oficial\n\nPede o arquivo em SVG/PNG direto com a Brenda (Marketing) ou pela aba Identidade no painel de gestão.\nCor principal: ${IDENTIDADE_CORES[0].hex}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(t)}`, '_blank');
};
RENDERERS.identidade = function () {
  pageContent.innerHTML = `
    <div class="card">
      <div class="card-head">
        <span class="card-eyebrow">Identidade visual</span>
        <button class="btn-acao" onclick="abrirModalCompartilharIdentidade()"><i class="fa-brands fa-whatsapp"></i> Compartilhar tudo</button>
      </div>
      <div class="identidade-grid">
        ${IDENTIDADE_CORES.map(c => `<div class="cor-swatch" style="background:${c.hex};color:${c.hex === '#f4faf6' ? '#152b55' : '#fff'}">${c.nome}<br>${c.hex}</div>`).join('')}
      </div>
      <div class="resumo-grid" style="margin-top:1.2rem;">
        <div class="resumo-item">
          <div class="resumo-icon"><i class="fa-solid fa-image"></i></div>
          <div><strong>Logo</strong><div style="font-size:.76rem;color:var(--b3);">Versões SVG / PNG</div></div>
          <button class="btn-icone" style="margin-left:auto;" title="Compartilhar logo no WhatsApp" onclick="compartilharLogoWhatsApp()"><i class="fa-brands fa-whatsapp"></i></button>
        </div>
        <div class="resumo-item"><div class="resumo-icon"><i class="fa-solid fa-shirt"></i></div><div><strong>Uniformes</strong><div style="font-size:.76rem;color:var(--b3);">Referência da equipe</div></div></div>
        <div class="resumo-item"><div class="resumo-icon"><i class="fa-solid fa-id-badge"></i></div><div><strong>Crachás</strong><div style="font-size:.76rem;color:var(--b3);">Modelo padrão</div></div></div>
      </div>
      <p style="font-size:.74rem;color:var(--b3);margin-top:.8rem;">Assim que você subir os arquivos reais (logo, uniforme, crachá), eu troco esses cartões por miniaturas clicáveis com download — e o compartilhamento passa a levar o arquivo junto, não só o texto.</p>
    </div>

    <div class="card">
      <span class="card-eyebrow">Redes sociais</span>
      <p style="font-size:.76rem;color:var(--b3);margin:.4rem 0 1rem;">Clique numa rede pra ver login, senha e os números da conta.</p>
      <div style="margin-top:.2rem;">
        ${REDES_SOCIAIS.map((r, i) => `
          <div class="rede-card-wrap">
            <div class="rede-card" onclick="alternarRedeDetalhe(${i})" style="display:flex;align-items:center;gap:.9rem;">
              <div class="rede-icone"><i class="fa-brands ${r.icone}"></i></div>
              <div style="flex:1;"><div class="rede-num">${r.seguidores}</div><div style="font-size:.76rem;color:var(--b3);">${r.rede} · ${r.unidade}</div></div>
              <span class="rede-crescimento ${r.crescimento >= 0 ? 'up' : 'down'}"><i class="fa-solid fa-arrow-${r.crescimento >= 0 ? 'up' : 'down'}"></i>${Math.abs(r.crescimento)}%</span>
              <i class="fa-solid fa-chevron-down" id="rede-seta-${i}" style="color:var(--b3);font-size:.75rem;transition:transform .2s;"></i>
            </div>
            <div class="rede-detalhe" id="rede-detalhe-${i}">
              <div class="rede-detalhe-linha"><span>Usuário / login</span><strong>${escapeHtml(r.usuario)}</strong></div>
              <div class="rede-detalhe-linha"><span>Senha</span><div class="senha-cel"><span id="rede-senha-${i}">••••••••••</span><button onclick="event.stopPropagation();revelarSenhaRede(${i})"><i class="fa-solid fa-eye"></i></button></div></div>
              <div class="rede-detalhe-linha"><span>${r.unidade}</span><strong>${r.seguidores}</strong></div>
              <div class="rede-detalhe-linha"><span>Crescimento (12 meses)</span><span class="rede-crescimento ${r.crescimento >= 0 ? 'up' : 'down'}"><i class="fa-solid fa-arrow-${r.crescimento >= 0 ? 'up' : 'down'}"></i>${Math.abs(r.crescimento)}%</span></div>
              <div class="rede-detalhe-linha"><span>Perfil</span><strong>${escapeHtml(r.link)}</strong></div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <div class="row-mini" style="grid-template-columns:repeat(3,1fr);">
      <div class="card">
        <span class="card-eyebrow">Novas ideias</span>
        <div class="repo-lista">${REPOSITORIOS.ideias.map(i => `<div class="repo-item"><i class="fa-solid fa-lightbulb"></i>${escapeHtml(i)}</div>`).join('')}</div>
        <button class="btn-acao ghost" onclick="abrirModalRepo('ideias','Nova ideia')"><i class="fa-solid fa-plus"></i> Adicionar</button>
      </div>
      <div class="card">
        <span class="card-eyebrow">Documentação do sistema e site</span>
        <div class="repo-lista">${REPOSITORIOS.documentacao.map(i => `<div class="repo-item"><i class="fa-solid fa-file-lines"></i>${escapeHtml(i)}</div>`).join('')}</div>
        <button class="btn-acao ghost" onclick="abrirModalRepo('documentacao','Nova documentação')"><i class="fa-solid fa-plus"></i> Adicionar</button>
      </div>
      <div class="card">
        <span class="card-eyebrow">Imagens Skilliu</span>
        <div class="repo-lista">${REPOSITORIOS.imagens.map(i => `<div class="repo-item"><i class="fa-solid fa-image"></i>${escapeHtml(i)}</div>`).join('')}</div>
        <button class="btn-acao ghost" onclick="abrirModalRepo('imagens','Nova imagem')"><i class="fa-solid fa-plus"></i> Adicionar</button>
      </div>
    </div>
  `;
};
window.alternarRedeDetalhe = function (i) {
  const detalhe = document.getElementById(`rede-detalhe-${i}`);
  const seta = document.getElementById(`rede-seta-${i}`);
  const abrindo = !detalhe.classList.contains('aberto');
  detalhe.classList.toggle('aberto', abrindo);
  seta.style.transform = abrindo ? 'rotate(180deg)' : 'rotate(0deg)';
};
window.revelarSenhaRede = function (i) {
  const el = document.getElementById(`rede-senha-${i}`);
  el.textContent = el.textContent === '••••••••••' ? REDES_SOCIAIS[i].senha : '••••••••••';
};
window.abrirModalRepo = function (chave, titulo) {
  abrirModal(`
    <h3>${titulo}</h3>
    <div class="form-grupo"><label>Título / descrição</label><input id="repo-titulo"></div>
    <div class="modal-acoes"><button class="btn-cancelar" onclick="fecharModal()">Cancelar</button><button class="btn-acao" onclick="salvarRepo('${chave}')"><i class="fa-solid fa-check"></i> Salvar</button></div>
  `);
};
window.salvarRepo = function (chave) {
  const v = document.getElementById('repo-titulo').value.trim();
  if (!v) return;
  REPOSITORIOS[chave].push(v);
  fecharModal();
  RENDERERS.identidade();
};

// ── CONFIGURAÇÕES ──
RENDERERS.configuracoes = function () {
  pageContent.innerHTML = `<div class="card placeholder-card"><i class="fa-solid fa-gear"></i><h3>Configurações</h3><p>Preferências gerais da plataforma, permissões de acesso por nível e integrações. Me fala o que precisa ter aqui.</p></div>`;
};

// ── Inicialização ──
RENDERERS.dashboard();
