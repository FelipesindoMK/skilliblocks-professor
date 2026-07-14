// ══════════════════════════════════════════
//  SKILLIU — Conexão com o Supabase
//  Preencha com os dados do SEU projeto (Project Settings > API no Supabase).
//  SUPABASE_URL   -> campo "Project URL"
//  SUPABASE_ANON_KEY -> campo "anon public" (NUNCA use a "service_role" aqui, ela é secreta)
// ══════════════════════════════════════════
const SUPABASE_URL = 'COLOQUE_AQUI_A_URL_DO_SEU_PROJETO';
const SUPABASE_ANON_KEY = 'COLOQUE_AQUI_A_CHAVE_ANON_PUBLIC';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
