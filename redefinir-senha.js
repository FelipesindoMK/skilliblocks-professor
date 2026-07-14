// ══════════════════════════════════════════
//  SKILLIU — redefinir-senha.js
//  O Supabase, ao clicar no link do e-mail, já abre essa página com uma
//  sessão temporária de recuperação. Só falta o usuário digitar a senha nova.
// ══════════════════════════════════════════

const form = document.getElementById('formNovaSenha');
const erroBox = document.getElementById('loginErro');
const btn = document.getElementById('loginBtn');
const btnTexto = document.getElementById('loginBtnTexto');
const spinner = document.getElementById('loginSpinner');

function mostrarErro(msg) { erroBox.textContent = msg; erroBox.classList.add('aberto'); }
function carregando(ligado) {
  btn.disabled = ligado;
  btnTexto.textContent = ligado ? 'Salvando...' : 'Salvar nova senha';
  spinner.style.display = ligado ? 'inline-block' : 'none';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const senha = document.getElementById('novaSenha').value;
  if (senha.length < 8) { mostrarErro('A senha precisa ter pelo menos 8 caracteres.'); return; }

  carregando(true);
  const { error } = await sb.auth.updateUser({ password: senha });
  carregando(false);

  if (error) { mostrarErro('Não deu pra salvar: ' + error.message); return; }
  alert('Senha atualizada! Agora é só entrar de novo.');
  await sb.auth.signOut();
  window.location.href = 'login.html';
});

document.getElementById('senhaOlho').addEventListener('click', () => {
  const campo = document.getElementById('novaSenha');
  const icone = document.querySelector('#senhaOlho i');
  const mostrando = campo.type === 'text';
  campo.type = mostrando ? 'password' : 'text';
  icone.className = mostrando ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
});
