// ══════════════════════════════════════════
//  SKILLIU — login.js
//  Login com Supabase Auth + checagem de que a conta é admin
//  (só quem tem role='admin' na tabela "perfis" entra no painel).
// ══════════════════════════════════════════

const form = document.getElementById('formLogin');
const erroBox = document.getElementById('loginErro');
const btn = document.getElementById('loginBtn');
const btnTexto = document.getElementById('loginBtnTexto');
const spinner = document.getElementById('loginSpinner');

function mostrarErro(msg) {
  erroBox.textContent = msg;
  erroBox.classList.add('aberto');
}
function limparErro() { erroBox.classList.remove('aberto'); erroBox.textContent = ''; }
function carregando(ligado) {
  btn.disabled = ligado;
  btnTexto.textContent = ligado ? 'Entrando...' : 'Entrar';
  spinner.style.display = ligado ? 'inline-block' : 'none';
}

// Se já tiver uma sessão válida de admin, pula direto pro painel
(async function checarSessaoExistente() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) return;
  const { data: perfil } = await sb.from('perfis').select('role').eq('id', session.user.id).single();
  if (perfil && perfil.role === 'admin') window.location.href = 'painel.html';
})();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  limparErro();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const senha = document.getElementById('loginSenha').value;
  if (!email || !senha) return;

  carregando(true);

  const { data: authData, error: authError } = await sb.auth.signInWithPassword({ email, password: senha });
  if (authError) {
    carregando(false);
    mostrarErro('E-mail ou senha incorretos.');
    return;
  }

  const { data: perfil, error: perfilError } = await sb
    .from('perfis')
    .select('role')
    .eq('id', authData.user.id)
    .single();

  if (perfilError || !perfil || perfil.role !== 'admin') {
    await sb.auth.signOut();
    carregando(false);
    mostrarErro('Essa conta não tem acesso ao painel de gestão.');
    return;
  }

  window.location.href = 'painel.html';
});

document.getElementById('senhaOlho').addEventListener('click', () => {
  const campo = document.getElementById('loginSenha');
  const icone = document.querySelector('#senhaOlho i');
  const mostrando = campo.type === 'text';
  campo.type = mostrando ? 'password' : 'text';
  icone.className = mostrando ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
});

document.getElementById('linkEsqueci').addEventListener('click', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  if (!email) { mostrarErro('Digite seu e-mail no campo acima primeiro, aí clique em "Esqueci minha senha" de novo.'); return; }
  limparErro();
  const { error } = await sb.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + window.location.pathname.replace('login.html', 'redefinir-senha.html'),
  });
  if (error) { mostrarErro('Não deu pra enviar o e-mail de redefinição: ' + error.message); return; }
  alert('Se esse e-mail estiver cadastrado, chega um link de redefinição de senha em instantes.');
});
