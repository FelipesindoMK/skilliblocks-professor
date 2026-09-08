/* ══════════════════════════════════════════════════════════════
   SKILLIBLOCKS — Área do Professor (material integrado)
   Todo o código abaixo é o mesmo do site auxiliar do SkilliBlocks,
   sem alterações de lógica — roda dentro do container #skilliblocksHub.
   ══════════════════════════════════════════════════════════════ */

window.TURMAS = {
  "1": {
    "nome": "1º Ano",
    "aulas": [
      {
        "titulo": "Aula 01 — A grande fuga da floresta",
        "paginas": [
          [
            {
              "tipo": "sumario",
              "itens": [
                {
                  "n": 1,
                  "titulo": "A grande fuga da floresta",
                  "pc": "Sequenciamento básico (Início, Avançar, Fim)",
                  "desc": "Contagem de passos (blocos de Avançar) e comparação de grupos de árvores (3 x 5). Desafio bônus: expressão de sentimentos após o tropeço de Kyro."
                },
                {
                  "n": 2,
                  "titulo": "O mapa do lugar novo",
                  "pc": "Blocos de direção (Virar à Direita/Esquerda) e lateralidade",
                  "desc": "Contagem de locais no tabuleiro (até 10) e ordenação numérica crescente (1 a 5). Desafio bônus de Geografia: lateralidade na neblina."
                },
                {
                  "n": 3,
                  "titulo": "Quem mora aqui?",
                  "pc": "Classificação (organizar objetos por atributos)",
                  "desc": "Comparação entre grupos de esquilos e coelhos e classificação de animais grandes e pequenos. Desafio bônus de História: diferentes tipos de família."
                },
                {
                  "n": 4,
                  "titulo": "O encontro com Lia",
                  "pc": "Loop (Repetição) — o bloco que substitui vários comandos repetidos",
                  "desc": "Sequência numérica crescente no chão (1 a 6) e uso do bloco de repetição para andar 3 passos. Desafio bônus de Ciências: partes do corpo."
                },
                {
                  "n": 5,
                  "titulo": "Hélio e a base de pesquisa",
                  "pc": "Planejamento de algoritmos mais longos, com várias etapas",
                  "desc": "Contagem dos cristais de Hélio (10) e contagem regressiva (10 a 4). Desafio bônus de Ciências: materiais dos objetos ao redor."
                },
                {
                  "n": 6,
                  "titulo": "O brilho estranho na floresta",
                  "pc": "Condicional Simples (Se/Então)",
                  "desc": "Problema de juntar plantinhas (3 + 2) e cristais (4 + 3). Desafio bônus de Ciências: necessidades básicas das plantas."
                },
                {
                  "n": 7,
                  "titulo": "A descoberta da Veridia",
                  "pc": "Gatilho (Sequência de Ativação) — um evento que inicia um programa",
                  "desc": "Problemas de retirar folhas da Veridia (5 - 2 e 7 - 3). Desafio bônus de Ciências: alimentação e bons hábitos."
                },
                {
                  "n": 8,
                  "titulo": "Os superpoderes acordam",
                  "pc": "Loops para controle de precisão no tabuleiro",
                  "desc": "Prática no tabuleiro controlando velocidade com Loops e sequência do Kyro de 2 em 2 (2, 4, 6, 8...). Desafio bônus de Artes: desenho dos poderes."
                },
                {
                  "n": 9,
                  "titulo": "A casa nova",
                  "pc": "Sequência e mudança de roteiro (blocos de ação Pegar/Guardar)",
                  "desc": "Roteiro de organização da casa e associação de objetos a figuras geométricas planas. Desafio bônus de Geografia: função dos cômodos."
                },
                {
                  "n": 10,
                  "titulo": "Missão: Encontrar o caminho de volta",
                  "pc": "Otimização de Algoritmos (avaliação intermediária)",
                  "desc": "Comparação e otimização de três caminhos no tabuleiro e leitura de mapa com lateralidade. Desafio bônus: revisão oral combinando tudo o que foi aprendido."
                }
              ]
            }
          ],
          [
            {
              "tipo": "orientacoes",
              "paragrafos": [
                "\"A Grande Aventura de Kyro e Kyra: O Jogo do Mundo Novo\" é um jogo físico de blocos de madeira, desenvolvido para alunos do 1º ano do Ensino Fundamental. O material integra o ensino de lógica de programação e pensamento computacional com as habilidades matemáticas da BNCC, tudo dentro de uma narrativa envolvente protagonizada pelos mascotes da Skilliu.",
                "A proposta é 100% desplugada (sem telas), estimulando o aprendizado tátil, colaborativo e narrativo. As crianças manipulam blocos de madeira encaixáveis para construir algoritmos físicos e, ao mesmo tempo, resolvem desafios matemáticos contextualizados na história de Kyro e Kyra no \"Mundo Novo\"."
              ],
              "destaque": "<strong>Faixa etária:</strong> 6 a 7 anos (1º Ano do Ensino Fundamental)<br><strong>Número de jogadores:</strong> 2 a 4 alunos por grupo<br><strong>Duração de cada sessão:</strong> 30 a 50 minutos<br><strong>Total de missões:</strong> 20 (alinhadas ao semestre letivo)"
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Objetivos de Aprendizagem",
              "instrucao": "",
              "texto": "O jogo foi concebido para desenvolver competências em duas dimensões complementares: o Pensamento Computacional e as Habilidades Matemáticas previstas na BNCC para o 1º ano. No âmbito do Pensamento Computacional, o jogo desenvolve as habilidades EF01CO01, EF01CO02 e EF01CO03 da BNCC da Computação, trabalhando as seguintes capacidades ao longo das 20 missões:"
            },
            {
              "tipo": "tabela",
              "legenda": "Pensamento Computacional — Conceitos por Missão",
              "colunas": [
                "Conceito",
                "Quando é Trabalhado",
                "Descrição"
              ],
              "linhas": [
                [
                  "Sequenciamento",
                  "Missões 1 a 3",
                  "Ordenar instruções para guiar os personagens de um ponto a outro."
                ],
                [
                  "Loops (Repetição)",
                  "Missões 4, 5 e 8",
                  "Usar o bloco \"Repetir\" para executar uma ação múltiplas vezes."
                ],
                [
                  "Condicionais",
                  "Missões 6, 7 e 16",
                  "Usar o bloco \"Se/Então\" para tomar decisões baseadas em condições."
                ],
                [
                  "Classificação",
                  "Missões 3, 9, 12 e 18",
                  "Organizar objetos e informações por atributos e categorias."
                ],
                [
                  "Depuração (Debug)",
                  "Todas as missões",
                  "Identificar e corrigir erros na sequência de blocos."
                ],
                [
                  "Decomposição",
                  "Missões 10, 14 e 19",
                  "Dividir um problema complexo em partes menores e resolvíveis."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Matemática (BNCC)",
              "instrucao": "",
              "texto": "No âmbito da Matemática (BNCC), as habilidades trabalhadas são as seguintes, mapeadas por código e missões relacionadas:"
            },
            {
              "tipo": "tabela",
              "legenda": "Habilidades da BNCC — Matemática",
              "colunas": [
                "Código BNCC",
                "Habilidade",
                "Missões Relacionadas"
              ],
              "linhas": [
                [
                  "EF01MA01",
                  "Utilizar números naturais como indicador de quantidade ou ordem",
                  "1, 2, 3"
                ],
                [
                  "EF01MA02",
                  "Contar de maneira exata ou aproximada",
                  "1, 2, 3, 4"
                ],
                [
                  "EF01MA03",
                  "Estimar e comparar quantidades de dois conjuntos",
                  "3, 13, 18"
                ],
                [
                  "EF01MA04",
                  "Contar coleções até 100 unidades",
                  "4, 5"
                ],
                [
                  "EF01MA05",
                  "Comparar números naturais de até duas ordens",
                  "5, 10"
                ],
                [
                  "EF01MA06",
                  "Construir fatos básicos da adição",
                  "6, 7, 14, 16"
                ],
                [
                  "EF01MA08",
                  "Resolver problemas de adição e subtração",
                  "6, 7, 14, 16, 17"
                ],
                [
                  "EF01MA09",
                  "Organizar e ordenar objetos por atributos",
                  "3, 9, 12"
                ],
                [
                  "EF01MA10",
                  "Descrever padrões e regularidades em sequências",
                  "4, 5, 8, 15"
                ],
                [
                  "EF01MA11",
                  "Descrever localização no espaço (direita, esquerda, frente, atrás)",
                  "2, 10, 17"
                ],
                [
                  "EF01MA14",
                  "Identificar e nomear figuras planas",
                  "9, 11"
                ],
                [
                  "EF01MA15",
                  "Comparar comprimentos, capacidades ou massas",
                  "11, 12"
                ],
                [
                  "EF01MA16",
                  "Relatar sequência de acontecimentos de um dia",
                  "15"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Componentes do Jogo — Tabuleiro do Mundo Novo",
              "instrucao": "",
              "texto": "O tabuleiro é um tapete ou painel modular dividido em uma grade de 8 × 8 casas, onde os personagens se movem de casa em casa. O cenário ilustra os principais locais da narrativa, dispostos nos cantos e bordas do tabuleiro: <strong>Floresta Mágica</strong> (canto superior esquerdo) — ponto de partida da aventura, onde Kyro e Kyra iniciam sua jornada. <strong>Base de Pesquisa do Hélio</strong> (centro superior) — laboratório do cientista Hélio, repleto de descobertas. <strong>Casa Nova</strong> (canto superior direito) — o lar que os gêmeos precisam organizar. <strong>Escola dos Descobridores</strong> (canto inferior direito) — onde Kyro e Kyra aprendem as regras do Mundo Novo. <strong>Mercado das Trocas</strong> (canto inferior esquerdo) — local de desafios de contagem e troca."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Componentes do Jogo — Personagens (Peões)",
              "instrucao": "",
              "texto": "O jogo inclui quatro personagens em formato de peão de madeira ou acrílico:"
            },
            {
              "tipo": "tabela",
              "legenda": "Personagens",
              "colunas": [
                "Personagem",
                "Descrição",
                "Papel no Jogo"
              ],
              "linhas": [
                [
                  "Kyro",
                  "Esquilo verde com óculos e mochila",
                  "Personagem jogável principal"
                ],
                [
                  "Kyra",
                  "Esquila verde com jaleco de cientista",
                  "Personagem jogável principal"
                ],
                [
                  "Hélio",
                  "Cientista explorador",
                  "Personagem de missões de investigação"
                ],
                [
                  "Lia",
                  "Professora acolhedora",
                  "Personagem de missões de aprendizado"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Componentes do Jogo — Blocos de Programação",
              "instrucao": "",
              "texto": "Os blocos são peças de madeira com encaixes tipo quebra-cabeça, que se conectam em sequência para formar o algoritmo. Cada bloco possui um ícone intuitivo e uma cor que identifica sua categoria, dispensando a necessidade de leitura para crianças em processo de alfabetização."
            },
            {
              "tipo": "tabela",
              "legenda": "Blocos de Movimento (Azul)",
              "colunas": [
                "Bloco",
                "Ícone",
                "Função"
              ],
              "linhas": [
                [
                  "Avançar",
                  "Seta para cima",
                  "Move o personagem 1 casa para frente"
                ],
                [
                  "Recuar",
                  "Seta para baixo",
                  "Move o personagem 1 casa para trás"
                ],
                [
                  "Virar à Direita",
                  "Seta curva direita",
                  "Gira o personagem 90° para a direita"
                ],
                [
                  "Virar à Esquerda",
                  "Seta curva esquerda",
                  "Gira o personagem 90° para a esquerda"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Blocos de Ação (Amarelo)",
              "colunas": [
                "Bloco",
                "Ícone",
                "Função"
              ],
              "linhas": [
                [
                  "Pegar",
                  "Mãozinha",
                  "Coleta um objeto ou interage com um elemento do tabuleiro"
                ]
              ]
            },
            {
              "tipo": "tabela",
              "legenda": "Blocos de Controle (Verde e Laranja)",
              "colunas": [
                "Bloco",
                "Cor",
                "Ícone",
                "Função"
              ],
              "linhas": [
                [
                  "Início",
                  "Verde",
                  "Bandeira verde",
                  "Marca o começo do algoritmo (obrigatório)"
                ],
                [
                  "Fim",
                  "Verde",
                  "Sinal de pare",
                  "Marca o fim do algoritmo (obrigatório)"
                ],
                [
                  "Repetir (Loop)",
                  "Laranja",
                  "Seta circular com slot numérico",
                  "Repete a sequência interna N vezes"
                ],
                [
                  "Se/Então",
                  "Laranja",
                  "Losango com bifurcação",
                  "Executa uma ação apenas se uma condição for verdadeira"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Material do Aluno",
              "instrucao": "",
              "texto": "<strong>4.1 Aula/Missão</strong><br>O jogo possui 20 Aulas/Missões, uma para cada aula do semestre. Cada missão contém: cabeçalho colorido com o número da missão e um ícone temático; ilustração narrativa mostrando a cena da história correspondente; texto da narrativa em linguagem acessível para a faixa etária; Seção de Programação, que descreve o conceito de Pensamento Computacional a ser trabalhado e mostra um exemplo visual de como usar os blocos; e Seção de Desafio Matemático, que apresenta o problema matemático alinhado à BNCC, com suporte visual (ícones, números, figuras).<br><br><strong>4.2 Fichas de Registro do Aventureiro</strong><br>Folhas de atividade individuais onde cada aluno registra seu nome, desenha ou escreve sua missão, anota seu código (sequência de blocos), resolve o desafio matemático e avalia seu próprio desempenho. O professor pode carimbar estrelas de conquista ao final de cada sessão."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Mecânica e Regras do Jogo",
              "instrucao": "",
              "texto": "O jogo segue um ciclo de 5 etapas que simula o processo de desenvolvimento de software de forma lúdica e acessível.<br><br><strong>Etapa 1 — Apresentação da Missão.</strong> O educador lê a Carta de Missão correspondente à aula do dia em voz alta, contextualizando a narrativa e definindo o objetivo que Kyro e Kyra precisam alcançar no tabuleiro. Neste momento, é importante criar suspense e engajamento emocional com a história.<br><br><strong>Etapa 2 — Planejamento.</strong> Os alunos, trabalhando em grupos de 2 a 4, observam o tabuleiro e discutem qual é o melhor caminho ou sequência de ações necessária. Eles devem considerar os obstáculos no percurso e os requisitos do desafio matemático. O educador pode fazer perguntas guiadoras como: \"Quantos passos Kyro precisa dar?\", \"Para qual lado ele deve virar primeiro?\".<br><br><strong>Etapa 3 — Programação.</strong> Utilizando os Blocos de Programação de madeira, as crianças montam fisicamente a sequência de comandos (o algoritmo). A regra fundamental é: sempre comece com o bloco INÍCIO e termine com o bloco FIM. Os blocos devem ser conectados de cima para baixo.<br><br><strong>Etapa 4 — Execução.</strong> Um aluno é escolhido para ser o \"computador humano\". Ele deve mover o peão de Kyro ou Kyra no tabuleiro seguindo estritamente as instruções montadas com os blocos, passo a passo, sem interpretar ou improvisar. Se o bloco diz \"Avançar\", o personagem avança uma casa. Se diz \"Virar à Direita\", o personagem gira 90° para a direita.<br><br><strong>Etapa 5 — Validação e Depuração.</strong> Se o personagem chegar ao destino correto e o desafio matemático for resolvido com sucesso, a missão é completada e o grupo recebe estrelas de conquista. Caso o personagem acabe em um local errado ou a ação não seja a esperada, o grupo deve analisar a sequência de blocos, identificar o erro (chamado de \"bug\"), corrigir a programação e executar novamente. Este processo de depuração é tão valioso quanto o sucesso imediato."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "As 20 Missões: Narrativa, Programação e Matemática",
              "instrucao": "",
              "texto": "A seguir, apresentamos o mapeamento completo das 20 missões do semestre, com seus objetivos de programação e habilidades matemáticas da BNCC."
            },
            {
              "tipo": "tabela",
              "legenda": "Bloco 1 — Chegada e Descoberta (Aulas 1 a 7)",
              "colunas": [
                "Missão",
                "Título da Narrativa",
                "Conceito de PC",
                "Habilidade BNCC",
                "Desafio"
              ],
              "linhas": [
                [
                  "1",
                  "A Grande Fuga da Floresta",
                  "Sequência básica (Início, Avançar, Fim)",
                  "EF01MA01, EF01MA02",
                  "Contar até 5 passos para chegar a um lugar seguro."
                ],
                [
                  "2",
                  "O Mapa do Lugar Novo",
                  "Sequência com direções (direita/esquerda)",
                  "EF01MA11",
                  "Usar blocos de virar para mapear o território."
                ],
                [
                  "3",
                  "Quem Mora Aqui?",
                  "Identificação e classificação",
                  "EF01MA03, EF01MA09",
                  "Comparar grupos de moradores: quem tem mais?"
                ],
                [
                  "4",
                  "O Encontro com Lia",
                  "Loops simples (Repetir)",
                  "EF01MA10",
                  "Continuar a sequência: 1, 2, 3, _, _, _."
                ],
                [
                  "5",
                  "Hélio e a Base de Pesquisa",
                  "Algoritmos com mais etapas",
                  "EF01MA04, EF01MA10",
                  "Sequências descendentes: 10, 9, 8, 7…"
                ],
                [
                  "6",
                  "O Brilho Estranho na Floresta",
                  "Condicionais simples (Se/Então)",
                  "EF01MA0a, EF01MA08",
                  "Kyro achou 3 plantas + Kyra achou 2. Quantas juntas?"
                ],
                [
                  "7",
                  "A Descoberta da Veridia",
                  "Sequência de ativação",
                  "EF01MA08",
                  "Tinha 5 frutos, comeu 2. Quantos sobraram?"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Bloco 2 — Exploração e Pertencimento (Aulas 8 a 14)",
              "colunas": [
                "Missão",
                "Título da Narrativa",
                "Conceito de PC",
                "Habilidade BNCC",
                "Desafio"
              ],
              "linhas": [
                [
                  "8",
                  "Os Superpoderes Acordam",
                  "Loops para controle de precisão",
                  "EF01MA10",
                  "Padrões: 2, 4, 6, 8... Complete a sequência."
                ],
                [
                  "9",
                  "A Casa Nova",
                  "Classificação em categorias",
                  "EF01MA14",
                  "Leve Kyro até o objeto em forma de círculo."
                ],
                [
                  "10",
                  "Missão: Encontrar o Caminho",
                  "Avaliação — combina todos os conceitos",
                  "EF01MA05, EF01MA11",
                  "Usar sequências, mapas e contagem para voltar para casa."
                ],
                [
                  "11",
                  "A Escola dos Descobridores",
                  "Algoritmo de comportamento",
                  "EF01MA15",
                  "Comparar medidas: qual objeto é mais alto?"
                ],
                [
                  "12",
                  "Os Materiais Mágicos",
                  "Classificação e ordenação por atributos",
                  "EF01MA15",
                  "Ordenar objetos do mais pesado ao mais leve."
                ],
                [
                  "13",
                  "A Família de Kyro e Kyra",
                  "Árvore de decisão simples",
                  "EF01MA03",
                  "Contar membros de diferentes famílias e comparar."
                ],
                [
                  "14",
                  "Os Heróis do Lugar Novo",
                  "Sequência de tarefas por função",
                  "EF01MA0a, EF01MA08",
                  "Problemas de juntar e retirar com contexto de profissões."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Bloco 3 — Consolidação e Desafio Final (Aulas 15 a 20)",
              "colunas": [
                "Missão",
                "Título da Narrativa",
                "Conceito de PC",
                "Habilidade BNCC",
                "Desafio"
              ],
              "linhas": [
                [
                  "15",
                  "O Dia e a Noite se Misturaram",
                  "Sequência temporal",
                  "EF01MA1a, EF01MA17",
                  "Ordenar as atividades do dia: manhã, tarde, noite."
                ],
                [
                  "16",
                  "O Mercado das Trocas",
                  "Condicionais (Se tenho X, posso trocar por Y)",
                  "EF01MA0a, EF01MA08",
                  "Contar e trocar quantidades para conseguir ingredientes."
                ],
                [
                  "17",
                  "Os Sentidos em Ação",
                  "Algoritmo de busca com pistas",
                  "EF01MA03",
                  "Seguir pistas e comparar quantidades para encontrar a Veridia."
                ],
                [
                  "18",
                  "Somos Todos Diferentes",
                  "Classificação por múltiplos atributos",
                  "EF01MA09",
                  "Agrupar personagens por 2 características diferentes."
                ],
                [
                  "19",
                  "O Grande Desafio do Mundo Novo",
                  "Avaliação final — todos os conceitos",
                  "EF01MA01 a EF01MA18",
                  "Missão complexa combinando lógica, matemática e narrativa."
                ],
                [
                  "20",
                  "Bem-vindos ao Mundo Novo!",
                  "Celebração e revisão",
                  "Todas",
                  "Relembrar e celebrar o aprendizado do semestre."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Orientações para o Educador",
              "instrucao": "",
              "texto": "O papel do educador é fundamental para o sucesso do jogo. Mais do que um árbitro de regras, o professor atua como um facilitador da aprendizagem, guiando as crianças pelo processo de pensamento sem dar as respostas diretamente.<br><br><strong>Antes da aula:</strong> separe a Carta de Missão correspondente, organize os blocos por categoria e posicione o seu tabuleiro de forma que todos os alunos do grupo possam vê-lo e alcançá-lo. Leia a narrativa com antecedência para criar uma apresentação envolvente.<br><br><strong>Durante a aula:</strong> incentive o diálogo entre os alunos durante o planejamento. Perguntas como \"Por que você escolheu esse bloco?\", \"O que acontece se Kyro virar para a esquerda aqui?\" estimulam o raciocínio lógico. Não corrija os erros antes da execução, deixe o \"bug\" aparecer e use-o como oportunidade de aprendizado.<br><br><strong>Após a aula:</strong> reserve 5 a 10 minutos para a reflexão coletiva. Pergunte: \"O que foi mais difícil?\", \"Como vocês descobriram o erro?\", \"O que fariam diferente?\". Distribua as estrelas nas Fichas de Registro e celebre os progressos.<br><br><strong>Adaptações:</strong> para turmas com maior dificuldade, inicie com missões de 3 a 4 blocos apenas. Para turmas mais avançadas, proponha que os alunos criem suas próprias missões usando os blocos disponíveis."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Alinhamento Pedagógico",
              "instrucao": "",
              "texto": "Este material foi desenvolvido com base em três pilares pedagógicos fundamentais:<br><br><strong>Aprendizagem Baseada em Jogos (Game-Based Learning):</strong> a estrutura de missões progressivas, com recompensas e narrativa envolvente, mantém o engajamento dos alunos e cria um ambiente de aprendizado positivo e motivador.<br><br><strong>Pensamento Computacional Desplugado:</strong> seguindo a metodologia de Computer Science Unplugged, o jogo desenvolve os conceitos de algoritmos, lógica e resolução de problemas sem a necessidade de dispositivos eletrônicos, tornando o aprendizado acessível a todas as realidades escolares.<br><br><strong>Aprendizagem Socioemocional:</strong> o trabalho em grupo, a comunicação, a resiliência diante dos erros (debug) e a celebração das conquistas coletivas desenvolvem competências socioemocionais alinhadas às dimensões da BNCC além do conteúdo disciplinar.<br><br>Material desenvolvido pela Skilliu. Todos os direitos reservados. Personagens Kyro e Kyra são propriedade intelectual da Skilliu."
            }
          ],
          [
            {
              "tipo": "aula-header",
              "n": 1,
              "titulo": "A grande fuga da floresta",
              "meta": "Semestre 1 | 1º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula introdutória, os alunos conhecerão Kyro e Kyra, os mascotes do Skilliblocks, e iniciarão a narrativa do \"Mundo Novo\". O foco pedagógico é a apresentação física dos blocos de programação e a compreensão de que eles formam instruções em sequência. Na Matemática, trabalharemos a contagem de objetos até 5 e a comparação básica de quantidades, habilidades fundamentais para o 1º ano."
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF01CO02",
                  "Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas."
                ],
                [
                  "Matemática",
                  "EF01MA01",
                  "Utilizar números naturais como indicador de quantidade ou de ordem."
                ],
                [
                  "Matemática",
                  "EF01MA03",
                  "Estimar e comparar quantidades de objetos de dois conjuntos (mais, menos, igual)."
                ],
                [
                  "Língua Portuguesa",
                  "EF01LP26",
                  "Segmentar oralmente palavras em sílabas (apoio à escrita do Diário de Bordo)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Apresentação das peças físicas e dos personagens Kyro e Kyra."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramatizada da chegada ao Mundo Novo."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Contagem de passos (blocos de Avançar)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Comparação de grupos de árvores no tabuleiro."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O tropeço de Kyro e a expressão de sentimentos."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com entonação de mistério e surpresa)",
              "texto": "Imaginem uma floresta muito tranquila... Era lá que Kyro e Kyra viviam. Mas, de repente... CABUM! Um barulho muito alto assustou todos os animais! Eles precisaram correr muito, muito rápido. Quando pararam de correr, olharam em volta. Eles não estavam mais na floresta deles. Tinham chegado a um lugar completamente diferente: o Mundo Novo! As árvores eram estranhas, as cores eram diferentes. Eles ficaram com um pouquinho de medo, mas muito curiosos. Para andar por aqui com segurança, eles vão precisar da nossa ajuda usando esses blocos mágicos de comando. Quem quer ajudar o Kyro e a Kyra?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Caminho Seguro (Matemática) (8 min)",
              "contexto": "Kyro encontrou um caminho de pedras seguro, mas precisa saber quantos passos dar.",
              "proposta": "Peça aos alunos que coloquem o peão de Kyro no início do caminho no tabuleiro. Eles devem usar blocos \"Avançar\" para chegar ao fim do caminho (5 casas).",
              "resolucao": "INÍCIO + Avançar + Avançar + Avançar + Avançar + Avançar + FIM. A resposta no material do aluno é 5 blocos.",
              "abordagem": "Não monte a sequência por eles. Pergunte: \"Se ele der só um passo, ele chega? E se der dois? Vamos contar juntos enquanto colocamos os blocos?\" Sugestão: antes de utilizar o tabuleiro, realize uma dinâmica corporal para que os estudantes compreendam, de forma concreta, a lógica dos deslocamentos. Essa vivência favorece a construção da noção espacial e facilita a compreensão dos comandos que serão utilizados posteriormente. Se o piso da sala já for quadriculado, utilize os próprios quadrados para simular o tabuleiro, orientando os alunos a executarem os movimentos. Caso o piso seja liso, demarque os espaços com folhas de papel ou outros materiais disponíveis, formando uma grade semelhante à do tabuleiro. Após essa exploração prática, os estudantes estarão mais preparados para transferir essa compreensão para a atividade no tabuleiro."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Onde tem mais árvores? (Matemática) (10 min)",
              "contexto": "Kyra está observando a vegetação e quer saber qual lado da floresta é mais fechado.",
              "proposta": "Mostre no tabuleiro (ou desenhe na lousa) um grupo com 3 árvores azuis e outro com 5 árvores roxas.",
              "resolucao": "O aluno deve marcar a opção que indica que o grupo de árvores roxas (5) tem mais árvores que o azul (3).",
              "abordagem": "Incentive a contagem um a um, apontando com o dedo. Pergunte: \"Como vocês sabem que esse lado tem mais? O que acontece se tirarmos uma árvore daqui?\""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça um barulho de tombo)",
              "texto": "Oh não! Kyro estava correndo e tropeçou em uma raiz! Ele ralou o joelho e começou a chorar. Ele está assustado.",
              "proposta": "Trabalhar a empatia e a expressão de sentimentos. Como eles se sentiriam em um lugar novo e desconhecido? Abordagem pedagógica: faça uma roda de conversa rápida. Valide sentimentos como medo, ansiedade e curiosidade.",
              "tempo": "7 min"
            }
          ],
          [
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que o bloco verde faz? E o vermelho?",
                "Foi fácil ou difícil contar os passos do Kyro?",
                "O que vocês acham que eles vão encontrar nesse Mundo Novo na próxima aula?"
              ],
              "registro": "Oriente as crianças a desenharem como se sentem em lugares novos e a copiarem a palavra NOVO.",
              "celebracao": "Peça que todos coloquem as mãos no centro e gritem juntos: \"EXPLORADORES DO MUNDO NOVO, AÇÃO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 02 — O mapa do lugar novo",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 2,
              "titulo": "O mapa do lugar novo",
              "meta": "Semestre 1 | 1º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula, Kyro e Kyra decidem mapear o Mundo Novo para não se perderem. O foco em pensamento computacional avança para o uso de blocos de direção (Virar à Direita, Virar à Esquerda), introduzindo a lateralidade. Na Matemática, expandiremos a contagem até 10 e trabalharemos a ordenação numérica, fundamentais para a estruturação do pensamento lógico-matemático."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF01CO02",
                  "Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas."
                ],
                [
                  "Matemática",
                  "EF01MA02",
                  "Contar de maneira exata ou aproximada, utilizando diferentes estratégias."
                ],
                [
                  "Matemática",
                  "EF01MA10",
                  "Descrever padrões e regularidades em sequências (ordem crescente)."
                ],
                [
                  "Geografia (Bônus)",
                  "EF01MA11",
                  "Descrever localização no espaço (direita, esquerda, frente, atrás)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Relembrar os blocos da aula passada e introduzir os de direção."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre a criação do mapa."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Contagem dos locais no tabuleiro (até 10)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Ordenação dos locais de 1 a 5."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "A neblina e o desafio de lateralidade (Geografia)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com entusiasmo e apontando para cima)",
              "texto": "Kyro e Kyra acordaram no Mundo Novo e pensaram: 'Nós não conhecemos nada aqui! E se a gente se perder?' Então, eles tiveram uma ideia genial. Eles subiram na pedra mais alta que encontraram, colocaram a mão na testa para proteger do sol e olharam beeeeem longe. Lá de cima, eles viram muitas coisas incríveis! Uma floresta que brilhava, uma casa engraçada, uma escola gigante e um mercado cheio de frutas. Para não esquecer de nada, eles decidiram desenhar um mapa. Mas, para o mapa dar certo, eles precisam contar todos os lugares e saber para que lado devem virar. Vamos ser os cartógrafos deles hoje?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Contando os Lugares (Matemática) (8 min)",
              "contexto": "Kyra quer garantir que não esqueceu de desenhar nenhum lugar importante no mapa.",
              "proposta": "Peça aos alunos que observem o tabuleiro (ou a imagem projetada) e contem todos os pontos de interesse diferentes (casa, escola, mercado, rio, montanha, etc.).",
              "resolucao": "O aluno deve contar 10 locais e registrar o número 10 no material.",
              "abordagem": "Se eles se perderem na contagem, ensine a estratégia de colocar um dedinho ou um bloquinho em cima de cada lugar já contado."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Caminho Mais Curto (Matemática) (10 min)",
              "contexto": "Kyro quer planejar a rota de exploração, começando do lugar mais perto (1) até o mais longe (5).",
              "proposta": "Os alunos devem preencher a sequência numérica crescente nos quadradinhos do material.",
              "resolucao": "1 ➔ 2 ➔ 3 ➔ 4 ➔ 5.",
              "abordagem": "Pergunte: \"Quem vem depois do 2? E antes do 5?\". Use os blocos empilhados para mostrar visualmente a escadinha crescendo."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de vento)",
              "texto": "Shhhhh... Uma neblina muito grossa e branca desceu de repente! Kyro não consegue ver um palmo à frente do nariz! Ele precisa virar para o lado certo, senão vai cair no rio!",
              "proposta": "Trabalhar a lateralidade. Peça que eles usem o próprio corpo para virar à esquerda e depois à direita, e em seguida façam o mesmo com o peão e os blocos. Abordagem pedagógica: para crianças de 1º ano, direita e esquerda ainda são conceitos abstratos. Use referências concretas: \"A mão que você segura o lápis\", \"A mão que fica perto da porta da sala\".",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi difícil descobrir qual era a direita e qual era a esquerda?",
                "Por que é importante ter um mapa quando vamos a um lugar novo?",
                "Quantos lugares vocês conseguiram contar no total?"
              ],
              "registro": "Oriente as crianças a desenharem o próprio mapa e copiarem a palavra MAPA.",
              "celebracao": "\"Nós somos os mestres dos mapas! CARTÓGRAFOS, AÇÃO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 03 — Quem mora aqui?",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 3,
              "titulo": "Quem mora aqui?",
              "meta": "Semestre 1 | 1º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "À medida que exploram, os mascotes começam a encontrar os habitantes do Mundo Novo. O objetivo de pensamento computacional desta aula é a classificação: como usar blocos ou lógicas para agrupar informações por atributos (tamanho, tipo). Na Matemática, focaremos na comparação de quantidades entre grupos e na organização de objetos, habilidades essenciais para a análise de dados na BNCC."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF01CO01",
                  "Organizar objetos físicos ou digitais considerando diferentes características para esta organização, explicitando semelhanças (padrões) e diferenças."
                ],
                [
                  "Matemática",
                  "EF01MA03",
                  "Estimar e comparar quantidades de objetos de dois conjuntos."
                ],
                [
                  "Matemática",
                  "EF01MA09",
                  "Organizar e ordenar objetos familiares ou representações por atributos (tamanho)."
                ],
                [
                  "História (Bônus)",
                  "EF01HI06",
                  "Identificar aspectos da sua família e comunidade (diferentes tipos de família)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Dinâmica rápida de agrupar os alunos (por cor da blusa, tipo de sapato)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre o encontro com os animais."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Comparação entre o grupo de esquilos e coelhos."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Classificação de animais grandes e pequenos."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O coelhinho perdido e a discussão sobre famílias (História)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia fazendo vozes diferentes para os animais)",
              "texto": "Kyro e Kyra estavam andando pelo mapa que vocês ajudaram a desenhar, quando de repente... crack, crack. Eles ouviram barulhinhos nos arbustos. Kyra foi olhar de perto e deu de cara com um coelhinho muito fofo comendo uma cenoura! Logo, vários outros animais apareceram: ursos grandalhões, passarinhos cantores e mais esquilos. Eles perceberam que o Mundo Novo estava cheio de moradores! Mas para fazer amizade, eles precisam descobrir quem é quem. Alguns andam em bandos enormes, outros andam sozinhos. Vamos ajudar a organizar os novos amigos?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Qual grupo é maior? (Matemática) (8 min)",
              "contexto": "Kyro achou um grupo de esquilos e Kyra achou um grupo de coelhos. Qual grupo tem mais amigos para brincar?",
              "proposta": "Mostre as imagens ou as peças dos 4 esquilos e dos 6 coelhos. Peça para contarem e compararem.",
              "resolucao": "O aluno deve marcar que o grupo de coelhos (6) é maior.",
              "abordagem": "Faça a correspondência um a um. Coloque um esquilo na frente de um coelho. Vão sobrar dois coelhos. Pergunte: \"Por que sobraram esses dois? O que isso significa?\""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Grandes e Pequenos (Matemática) (10 min)",
              "contexto": "Para não fazer confusão, Kyra quer separar os animais grandes dos pequenos.",
              "proposta": "Peça aos alunos que classifiquem os animais do tabuleiro pelo atributo tamanho e contem os pequenos.",
              "resolucao": "O aluno deve contar 5 animais pequenos (passarinhos, coelhos, etc.) e registrar o número 5.",
              "abordagem": "Deixe-os debater o que é \"grande\" e o que é \"pequeno\". Um coelho é pequeno perto de um urso, mas é grande perto de uma formiga. Use isso para mostrar que atributos dependem da comparação."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de choro baixinho)",
              "texto": "Oh não! Um dos coelhinhos se assustou com o Kyro e correu! Ele se perdeu da família dele e está chorando atrás da árvore.",
              "proposta": "Discutir os diferentes tipos de família. O coelhinho mora com a avó e muitos irmãos. E as famílias dos alunos, como são? Abordagem pedagógica: conduza a conversa com muita sensibilidade e acolhimento. Mostre que existem famílias de todos os tamanhos e formatos, e que todas são famílias de verdade, baseadas no amor e no cuidado.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como vocês decidiram quem era grande e quem era pequeno?",
                "O que vocês acharam das famílias dos animais?",
                "Alguém quer contar como é a sua família?"
              ],
              "registro": "Oriente as crianças a desenharem a própria família e copiarem a palavra FAMÍLIA.",
              "celebracao": "\"No Mundo Novo, todo mundo é amigo! AMIGOS, AÇÃO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 04 — O encontro com Lia",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 4,
              "titulo": "O encontro com Lia",
              "meta": "Semestre 1 | 1º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Esta aula marca a introdução da personagem Lia, a professora acolhedora. O grande salto de pensamento computacional aqui é a introdução do conceito de Loop (Repetição). Em vez de usar vários blocos de \"Avançar\", as crianças aprenderão a usar um bloco multiplicador. Na Matemática, isso se conecta perfeitamente com sequências numéricas e com a noção inicial de adição repetida (embora tratada apenas como contagem para o 1º ano)."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF01CO03",
                  "Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra 'Algoritmos'."
                ],
                [
                  "Matemática",
                  "EF01MA10",
                  "Descrever padrões e regularidades em sequências numéricas ascendentes."
                ],
                [
                  "Matemática",
                  "EF01MA04",
                  "Contar coleções ou movimentos de forma exata."
                ],
                [
                  "Ciências (Bônus)",
                  "EF01CI01",
                  "Explorar, reconhecer e descrever características e partes do próprio corpo."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Jogo de repetição motora (bater palma 3 vezes, pular 2 vezes)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre o encontro com Lia."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Completar a sequência numérica no chão."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Usar o bloco de repetição para andar 3 passos."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O machucado de Kyra e as partes do corpo (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com voz doce e acolhedora ao interpretar Lia)",
              "texto": "Kyro e Kyra estavam perto de um prédio gigante que parecia uma escola. De repente, uma esquila marrom, usando um jaleco branco e segurando uma prancheta, apareceu sorrindo. Era a professora Lia! Ela deu um abraço apertado neles e disse: 'Bem-vindos ao Mundo Novo! Eu estava esperando por vocês.' Lia percebeu que eles estavam carregando muitos blocos pesados para conseguir andar. Então ela sorriu e disse: 'Vocês sabiam que existe um truque mágico? Um bloco especial que faz o trabalho de muitos blocos de uma vez só! É o bloco da Repetição!' Vamos aprender esse truque com ela?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Caminho dos Números (Matemática) (8 min)",
              "contexto": "Lia desenhou uma amarelinha de números no chão, mas faltam alguns para Kyro pular.",
              "proposta": "Os alunos devem observar a sequência crescente e preencher os números que faltam.",
              "resolucao": "1 ➔ 2 ➔ 3 ➔ 4 ➔ 5 ➔ 6.",
              "abordagem": "Peça que contem em voz alta batendo palmas. Mostre que o número seguinte é sempre \"um a mais\" que o anterior."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Truque Mágico da Repetição (Matemática) (10 min)",
              "contexto": "Kyra precisa dar 3 passos, mas Lia pediu para usar apenas 3 blocos no total (Início, Repetir, Fim).",
              "proposta": "Apresente o bloco laranja de \"Repetir\". Mostre que o bloco \"Avançar\" vai dentro ou conectado a ele, e que ajustamos o número para 3.",
              "resolucao": "O aluno deve marcar que Kyra deu 3 passos no tabuleiro, mesmo usando menos blocos físicos.",
              "abordagem": "Este é um conceito abstrato forte. Faça a demonstração física: \"Se eu coloco o bloco Avançar dentro do Repetir 3, o Kyro faz: um, dois, três.\" Deixe que eles testem no tabuleiro."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Bata na mesa)",
              "texto": "Ai! Enquanto pulava a amarelinha, Kyra tropeçou e caiu! Ela ralou o joelho e começou a chorar. Lia correu para pegar um curativo.",
              "proposta": "Conversar sobre o corpo humano. Quais partes usamos para pular? E para abraçar a professora Lia? Abordagem pedagógica: peça que os alunos toquem no próprio joelho, nos pés, nos braços. Explique que nosso corpo é incrível e precisamos cuidar dele para continuar brincando e explorando.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como o bloco de repetição ajuda a gente? (Resposta esperada: não precisamos carregar tantos blocos)",
                "O que vocês fazem quando se machucam?",
                "Qual parte do corpo vocês mais usam para brincar?"
              ],
              "registro": "Oriente as crianças a desenharem uma brincadeira e copiarem a palavra CUIDADO.",
              "celebracao": "\"Nós sabemos o truque mágico! REPETIÇÃO, AÇÃO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 05 — Hélio e a base de pesquisa",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 5,
              "titulo": "Hélio e a base de pesquisa",
              "meta": "Semestre 1 | 1º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula, os alunos conhecem Hélio, o cientista curioso do Mundo Novo. O foco em pensamento computacional é a construção de algoritmos mais longos, exigindo planejamento e decomposição de etapas. Na Matemática, os alunos trabalharão a contagem até 10 e introduzirão a noção de sequências descendentes (contagem regressiva), preparando o terreno para a subtração."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF01CO03",
                  "Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra 'Algoritmos'."
                ],
                [
                  "Matemática",
                  "EF01MA04",
                  "Contar coleções de objetos até 100 unidades (foco até 10)."
                ],
                [
                  "Matemática",
                  "EF01MA10",
                  "Descrever padrões e regularidades em sequências numéricas (descendentes)."
                ],
                [
                  "Ciências (Bônus)",
                  "EF01CI02",
                  "(Adaptado) Identificar materiais do dia a dia e suas propriedades básicas."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Dinâmica do \"Robô Cientista\" (seguir 3 instruções seguidas)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história apresentando Hélio e a Base de Pesquisa."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Contagem dos cristais na mesa de Hélio."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Completar a contagem regressiva."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O pote quebrado e a discussão sobre materiais (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com voz animada e curiosa)",
              "texto": "A professora Lia levou Kyro e Kyra para um lugar incrível: a Base de Pesquisa! Lá dentro, cheio de mapas e invenções, estava Hélio. Ele usava óculos engraçados e estava sempre anotando coisas. Hélio disse: 'Olá, exploradores! Eu adoro investigar o Mundo Novo. Olhem minha coleção de cristais brilhantes!' Mas ele suspirou e disse que, para organizar tantas coisas, ele precisava fazer planos muito longos e cuidadosos. 'Se eu pular um passo, a máquina não funciona!', disse ele. Vamos ajudar Hélio a organizar suas pesquisas passo a passo?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Coleção de Cristais (Matemática) (8 min)",
              "contexto": "Hélio encontrou cristais novos, mas esqueceu quantos são.",
              "proposta": "Peça aos alunos que contem os cristais ilustrados no tabuleiro ou no material.",
              "resolucao": "O aluno deve contar 10 cristais e registrar o número 10.",
              "abordagem": "Incentive a contagem pausada, apontando para cada cristal. Se possível, use peças físicas (blocos soltos) para representar os cristais e peça que contem enquanto os colocam em uma linha."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Contagem Regressiva! (Matemática) (10 min)",
              "contexto": "Para ligar uma máquina, Hélio precisa fazer uma contagem regressiva, mas esqueceu os últimos números.",
              "proposta": "Os alunos devem preencher a sequência decrescente: 10, 9, 8, 7...",
              "resolucao": "10 ➔ 9 ➔ 8 ➔ 7 ➔ 6 ➔ 5 ➔ 4.",
              "abordagem": "A contagem regressiva é um desafio para o 1º ano. Relacione com o lançamento de um foguete. Usem os dedos das mãos: mostre 10 dedos, depois abaixe um (9), depois outro (8), e assim por diante."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Bata palmas ou faça som de quebra)",
              "texto": "Cuidado! Hélio esbarrou na mesa e um pote caiu no chão e quebrou! Ele ficou triste, mas explicou que o pote era de vidro, um material muito frágil.",
              "proposta": "Discutir os materiais dos objetos ao redor. Abordagem pedagógica: pergunte às crianças do que são feitas as mesas, as cadeiras, os cadernos. Explique que escolhemos os materiais dependendo do que queremos fazer (não fazemos janelas de madeira porque precisamos ver através delas).",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi difícil contar para trás?",
                "Se vocês fossem cientistas como o Hélio, o que gostariam de investigar?",
                "Que materiais vocês descobriram hoje na sala?"
              ],
              "registro": "Oriente as crianças a desenharem o laboratório de Hélio e copiarem a palavra PESQUISA.",
              "celebracao": "\"Nós somos cientistas curiosos! PESQUISA, AÇÃO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 06 — O brilho estranho na floresta",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 6,
              "titulo": "O brilho estranho na floresta",
              "meta": "Semestre 1 | 1º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A narrativa ganha um tom de mistério com a exploração de uma floresta escura. O conceito de pensamento computacional introduzido é a Condicional Simples (Se/Então), fundamental para a tomada de decisões em programação. Na Matemática, iniciamos o trabalho formal com problemas de juntar (adição), usando o contexto de coleta de itens."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF01CO03",
                  "Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra 'Algoritmos'."
                ],
                [
                  "Matemática",
                  "EF01MA06",
                  "Construir fatos básicos da adição e utilizá-los em procedimentos de cálculo."
                ],
                [
                  "Matemática",
                  "EF01MA08",
                  "Resolver e elaborar problemas de adição com os significados de juntar e acrescentar."
                ],
                [
                  "Ciências (Bônus)",
                  "EF01CI04",
                  "(Adaptado) Discutir as necessidades básicas das plantas para sobreviver."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Jogo do \"Se/Então\" (Ex: SE eu bater 1 palma, ENTÃO vocês pulam, se eu bater 2 palmas vocês agacham)."
                ],
                [
                  "Storytelling Inicial",
                  "20 min",
                  "Leitura da história sobre o brilho na floresta e montagem dos blocos."
                ],
                [
                  "Desafio 1 — Matemática",
                  "5 min",
                  "Problema de juntar plantinhas (3 + 2)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "5 min",
                  "Problema de juntar cristais (4 + 3)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "5 min",
                  "A escuridão e as necessidades das plantas (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com voz de suspense e mistério)",
              "texto": "Hélio estava olhando pelo seu telescópio quando deu um pulo para trás. 'Uau! O que é aquilo?', ele gritou. Kyro e Kyra correram para ver. Lá no fundo da floresta escura, havia um brilho verde e misterioso! Eles decidiram investigar. Mas a floresta era cheia de caminhos diferentes. Hélio disse: 'Para não nos perdermos, vamos usar a regra da Escolha. SE o caminho estiver livre, ENTÃO vamos em frente. SE tiver uma pedra, ENTÃO vamos virar.' Com muito cuidado, eles entraram na floresta seguindo o brilho... Oriente os alunos para colocarem suas pedrinhas no tabuleiro e depois criar a estrutura de comandos com os blocos para chegar até a Verídia."
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (15 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Juntando Plantinhas (Matemática) (5 min)",
              "contexto": "Kyro achou 3 plantinhas e Kyra achou 2. Eles querem saber quantas têm juntos.",
              "proposta": "Os alunos devem resolver o problema de adição simples.",
              "resolucao": "3 + 2 = 5.",
              "abordagem": "Use os dedos ou blocos. \"Coloque 3 blocos aqui. Agora coloque mais 2. Vamos contar todos juntos agora?\" Introduza a ideia de que o sinal de \"+\" significa \"juntar\"."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Mais Cristais para Hélio (Matemática) (5 min)",
              "contexto": "Hélio tinha 4 cristais na mochila e achou mais 3 no chão.",
              "proposta": "Os alunos devem resolver outro problema de adição.",
              "resolucao": "4 + 3 = 7.",
              "abordagem": "Novamente, concretize o cálculo. Deixe que eles manipulem as peças para visualizar a junção dos dois grupos."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Apague a luz da sala rapidamente, se possível, ou tampe os olhos)",
              "texto": "De repente, uma nuvem cobriu a lua e a floresta ficou um breu! Escuro total! Kyro ficou com medo, e eles perceberam que as plantinhas brilhantes estavam ficando fracas no escuro.",
              "proposta": "Discutir o que as plantas precisam para viver. Abordagem pedagógica: pergunte: \"Por que as plantinhas estão fracas? O que uma planta de verdade precisa para crescer?\" Conduza a discussão para a importância da luz do sol, da água e da terra.",
              "tempo": "5 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como o jogo do SE/ENTÃO ajudou vocês hoje?",
                "Foi fácil juntar os números?",
                "O que vocês fariam se estivessem no escuro?"
              ],
              "registro": "Oriente as crianças a desenharem as plantas brilhantes na floresta escura e copiarem a palavra PLANTA.",
              "celebracao": "\"Nós seguimos o brilho! EXPLORADORES, AÇÃO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 07 — A descoberta da Veridia",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 7,
              "titulo": "A descoberta da Veridia",
              "meta": "Semestre 1 | 1º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Esta é uma aula marco na narrativa: a descoberta da planta Veridia, que concede superpoderes aos mascotes. No pensamento computacional, introduzimos a ideia de Gatilho (Sequência de Ativação) — um evento que inicia um programa. Na Matemática, faremos a transição da adição para problemas de retirar (subtração), contextualizados com o consumo dos frutos da Veridia."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF01CO02",
                  "Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas."
                ],
                [
                  "Matemática",
                  "EF01MA08",
                  "Resolver e elaborar problemas de subtração com os significados de separar e retirar."
                ],
                [
                  "Ciências (Bônus)",
                  "EF01CI03",
                  "Discutir as razões pelas quais os hábitos alimentares são importantes para a manutenção da saúde."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Dinâmica do \"Botão de Ligar\" (as crianças só se movem quando o professor diz a palavra mágica. Dinâmica parecida com a Estátua, porém ao contrário, a palavra deve fazer se mover)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre a descoberta da Veridia."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Problema de retirar folhas (5 - 2)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Problema de retirar folhas (7 - 3)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Os superpoderes e a discussão sobre alimentação e bons hábitos (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com empolgação e maravilhamento)",
              "texto": "Kyro, Kyra e Hélio seguiram o brilho verde até chegarem a uma clareira. No meio dela, havia a planta mais linda que eles já tinham visto. Era a Veridia! Ela brilhava como uma estrela. Hélio abriu um sorriso enorme e disse: 'Incrível! A Veridia é como um botão de ligar mágico. Quando alguém come as folhas brilhantes, super habilidades são ativadas!' Como eles estavam com muita fome depois de tanto andar, Kyro e Kyra decidiram experimentar. As folhas eram deliciosas!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Folhas da Veridia (Matemática) (8 min)",
              "contexto": "A planta tinha 5 folhas, mas Kyro comeu 2. Quantas sobraram?",
              "proposta": "Os alunos devem resolver o problema de subtração.",
              "resolucao": "5 - 2 = 3.",
              "abordagem": "Use o corpo ou os blocos. \"Mostrem 5 dedos. Agora, vamos 'comer' (abaixar) 2 dedos. Quantos ficaram em pé?\" Explique que o sinal de \"-\" significa tirar, comer, perder."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Dividindo com Hélio (Matemática) (10 min)",
              "contexto": "Kyra tinha 7 folhas e deu 3 para Hélio. Quantas sobraram com ela?",
              "proposta": "Os alunos devem resolver outro problema de subtração.",
              "resolucao": "7 - 3 = 4.",
              "abordagem": "Novamente, concretize a ação. Peça que uma criança segure 7 blocos e entregue 3 para um colega. Contem quantos restaram nas mãos da primeira criança."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça um som de magia)",
              "texto": "Ziiing! De repente, depois de comer a Veridia, Kyro e Kyra começaram a brilhar muito forte! Eles até flutuaram um pouquinho do chão! Eles ficaram assustados, mas Hélio gritou: 'Não tenham medo! As super habilidades de vocês estão acordando! Somente as crianças podem ativar suas habilidades com a Verídia.'",
              "proposta": "Conversar sobre como a alimentação nos dá \"superpoderes\" (energia, saúde, crescimento). Abordagem pedagógica: pergunte: \"A Veridia, que só existe no mundo novo, deu superpoderes para eles. E no nosso mundo real, quais comidas nos deixam fortes como super-heróis?\" Fale sobre frutas, legumes, proteínas e a importância de uma alimentação variada. Também pergunte sobre outros hábitos que ajudam a ativar nossas habilidades, como estudar e se movimentar.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi mais fácil juntar números (aula passada) ou tirar números (hoje)?",
                "Se vocês pudessem ter um superpoder, qual seria?",
                "Qual é a sua fruta ou legume favorito?"
              ],
              "registro": "Oriente as crianças a desenharem Kyro e Kyra com superpoderes e copiarem a palavra VERIDIA.",
              "celebracao": "\"Nós acordamos os superpoderes! VERIDIA, AÇÃO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 08 — Os superpoderes acordam",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 8,
              "titulo": "Os superpoderes acordam",
              "meta": "Semestre 1 | 1º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A narrativa entra em uma nova fase: Kyro e Kyra agora têm superpoderes! O desafio prático de pensamento computacional introduz o uso de blocos no tabuleiro para controlar a precisão das ações com Loops (Repetição). Na Matemática, os alunos trabalharão com a identificação de padrões e regularidades numéricas, pulando de 2 em 2 ou usando números ímpares."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF01CO03",
                  "Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra 'Algoritmos'."
                ],
                [
                  "Matemática",
                  "EF01MA10",
                  "Descrever, após o reconhecimento e a explicitação de um padrão, os elementos ausentes em sequências."
                ],
                [
                  "Artes (Bônus)",
                  "EF15AR01",
                  "Identificar e apreciar formas distintas das artes visuais, cultivando a percepção e o imaginário."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Jogo de padrões rítmicos (palma, palma, pé / palma, palma, pé)."
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "Leitura da história sobre o despertar dos superpoderes."
                ],
                [
                  "Atividade de Blocos",
                  "12 min",
                  "Prática no tabuleiro: Controlar velocidade com Loops."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "Completar a sequência do Kyro (2, 4, 6, 8...)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "8 min",
                  "O furacão de vento e o desenho dos poderes (Artes)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Professor, leia com energia e empolgação)",
              "texto": "Na manhã seguinte, depois de comerem a Veridia, Kyro e Kyra acordaram sentindo um formigamento pelo corpo. Ziiiing! Kyro deu um passo e... VUUUSHH! Ele correu tão rápido que deixou um rastro de luz verde no chão! Kyra deu um pulinho e... BOING! Ela saltou por cima de uma árvore inteira! Eles tinham superpoderes! Mas tinha um problema: Kyro não conseguia parar e batia nas pedras. Kyra pulava e caía no lugar errado. Hélio riu e disse: 'Seus poderes são incríveis, mas vocês precisam de controle! Vamos usar os blocos mágicos de Repetição no nosso tabuleiro para controlar essa força!'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (27 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Atividade Prática — Controlando a Velocidade no Tabuleiro (12 min)",
              "contexto": "Kyro precisa correr até a árvore mágica, que está a exatos 2 passos de distância.",
              "proposta": "Os alunos (em grupos ou coletivamente) devem usar os blocos físicos para montar o algoritmo e testar no tabuleiro com o peão do Kyro.",
              "resolucao": "Algoritmo esperado: [INÍCIO] ➔ [AVANÇAR] ➔ [REPETIR 2X] ➔ [VIRAR À DIREITA] ➔ [FIM].",
              "abordagem": "Coloque o peão no tabuleiro. Peça que montem a sequência. Execute passo a passo. Depois, lance a pergunta de reflexão: \"E se ele repetisse 3 vezes em vez de 2?\" (Resposta: Ele bateria na árvore ou passaria dela). Mostre que o loop controla a precisão."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Rastro de Luz de Kyro (Matemática) (7 min)",
              "contexto": "Kyro corre tão rápido que pula as casas do tabuleiro de 2 em 2.",
              "proposta": "Os alunos devem identificar o padrão (somar 2) e completar a sequência no Kit do Aluno.",
              "resolucao": "2 ➔ 4 ➔ 6 ➔ 8 ➔ 10 ➔ 12.",
              "abordagem": "Use a lousa. Pule uma casa e pise na próxima. Conte em voz alta enfatizando os números pares."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de vento forte, sopre!)",
              "texto": "VUUUUSHH! Kyro tentou correr em círculos e criou um mini-furacão! Os papéis do Hélio voaram para todo lado! Os poderes são muito visuais.",
              "proposta": "Trabalhar a expressão artística e a imaginação. Abordagem pedagógica: peça aos alunos que fechem os olhos e imaginem como é a cor e a forma do poder de Kyro. Incentive a criatividade visual.",
              "tempo": "8 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que aconteceu quando testamos o bloco de repetição no tabuleiro?",
                "Por que é importante controlar nossa força?",
                "Que cores vocês usaram para desenhar os poderes?"
              ],
              "registro": "Oriente as crianças a desenharem a si mesmas com superpoderes e copiarem a palavra PODER.",
              "celebracao": "\"Nós temos o poder do controle! SUPER EXPLORADORES, AÇÃO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 09 — A casa nova",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 9,
              "titulo": "A casa nova",
              "meta": "Semestre 1 | 1º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A narrativa traz um momento de assentamento: a organização da Casa Nova. O desafio prático de pensamento computacional introduz a Sequência e Mudança de Roteiro usando blocos de ação (Pegar/Guardar) no tabuleiro. Na Matemática, os alunos identificarão figuras geométricas planas em objetos do cotidiano e conectarão isso à Geografia (espaços de vivência)."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF01CO03",
                  "Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra 'Algoritmos'."
                ],
                [
                  "Matemática",
                  "EF01MA14",
                  "Identificar e nomear figuras planas (círculo, quadrado, retângulo e triângulo) em contornos de faces de sólidos físicos."
                ],
                [
                  "Geografia (Bônus)",
                  "EF01GE06",
                  "Descrever e comparar diferentes tipos de moradia ou objetos de uso cotidiano."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Jogo \"Onde fica?\": o professor diz um objeto e a turma diz o cômodo."
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "Leitura da história sobre a chegada da mudança na Casa Nova."
                ],
                [
                  "Atividade de Blocos",
                  "12 min",
                  "Prática no tabuleiro: Roteiro de organização da casa."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "Associação de objetos da casa às figuras geométricas."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "8 min",
                  "A bagunça na casa e a função dos cômodos (Geografia)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Professor, leia com tom de surpresa e alegria)",
              "texto": "Hélio e Lia vendaram os olhos de Kyro e Kyra e os guiaram até uma clareira. 'Pode olhar!', disse Lia. Quando eles abriram os olhos, viram uma casa linda, construída especialmente para eles! Tinha telhado pontudo, janelas quadradas e uma porta retangular. Mas, quando entraram... a casa estava vazia! Logo depois, chegou um caminhão de mudança cheio de móveis e caixas. Só que os entregadores deixaram tudo misturado na sala. Kyro coçou a cabeça: 'Como vamos organizar tudo isso?'. Kyra sorriu: 'Vamos separar e colocar cada coisa no seu lugar!'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (27 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Atividade Prática — O Caminho até a Casa (12 min)",
              "contexto": "Lia e Hélio vão guiar Kyro e Kyra até a casa. Observem o caminho que farão da Floresta até a casa, não esquecendo de pegar a chave no caminho.",
              "proposta": "Quantas casas vão andar? Será necessário virar? Peça que montem a sequência. Execute passo a passo.",
              "resolucao": "",
              "abordagem": "Pergunta de reflexão: \"Existem outros caminhos?\""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Formato das Coisas (Matemática) (7 min)",
              "contexto": "Kyra quer agrupar objetos que têm o mesmo formato geométrico.",
              "proposta": "Os alunos devem ligar os objetos ilustrados aos nomes das figuras planas correspondentes no Kit do Aluno.",
              "resolucao": "Prato ➔ Círculo; Janela ➔ Quadrado; Telhado ➔ Triângulo; Porta ➔ Retângulo.",
              "abordagem": "Mostre objetos reais na sala de aula que tenham essas formas. Peça que eles passem o dedo no contorno das figuras."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Bata na mesa como se tivesse tropeçado)",
              "texto": "Ai! Kyro estava carregando uma caixa pesada e não viu um travesseiro que deixaram jogado no chão da cozinha. Ele quase caiu! A casa ainda está muito bagunçada.",
              "proposta": "Refletir sobre a organização do espaço e a função dos cômodos (Geografia). Abordagem pedagógica: converse sobre os espaços de convivência. Pergunte: \"Por que não dormimos na cozinha? Qual é o cômodo onde a família se reúne para conversar?\"",
              "tempo": "8 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi fácil montar o roteiro da Kyra com os blocos?",
                "Quantos formatos diferentes nós achamos na casa?",
                "Quem ajuda a arrumar a própria casa?"
              ],
              "registro": "Oriente as crianças a desenharem seu cômodo favorito e copiarem a palavra CASA.",
              "celebracao": "\"Nossa casa está arrumada! ORGANIZADORES, AÇÃO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 10 — Missão: Encontrar o caminho de volta",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 10,
              "titulo": "Missão: Encontrar o caminho de volta (avaliação intermediária)",
              "meta": "Semestre 1 | 1º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Esta é uma aula de avaliação formativa. Não há introdução de novos conceitos; o objetivo é verificar se os alunos conseguem combinar as habilidades aprendidas até agora. A atividade prática de pensamento computacional foca na Otimização de Algoritmos (comparar três caminhos no tabuleiro e escolher o mais eficiente). Na Matemática, reforçamos a lateralidade e o uso de mapas."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF01CO03",
                  "Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra 'Algoritmos'."
                ],
                [
                  "Matemática",
                  "EF01MA11",
                  "Descrever localização de pessoas e de objetos no espaço em relação à sua própria posição."
                ],
                [
                  "Interdisciplinar",
                  "Todas anteriores",
                  "Aplicar conhecimentos de aulas passadas em um novo contexto."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Relembrar rapidamente os conceitos: contagem, direita/esquerda."
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "Leitura da história sobre os personagens perdidos."
                ],
                [
                  "Atividade de Blocos",
                  "12 min",
                  "Prática no tabuleiro: Comparação e otimização de caminhos."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "Leitura do mapa e decisão de lateralidade."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "8 min",
                  "O escuro e o resgate final usando tudo que aprenderam."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra especial."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Professor, leia com tom de urgência e aventura)",
              "texto": "Kyro e Kyra estavam tão animados com seus superpoderes que correram, pularam e voaram para muito, muito longe da Casa Nova. Quando pararam para descansar, olharam em volta e... não reconheceram nada! Onde estava a escola? Onde estava a base do Hélio? Eles estavam perdidos! O sol começou a se pôr e a floresta foi ficando escura. Para voltar para casa em segurança, eles vão precisar usar TUDO o que aprenderam até agora. Eles têm o tabuleiro, têm os blocos e têm vocês! Estão prontos para a maior missão de resgate do semestre?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (27 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Atividade Prática — O Melhor Caminho (Otimização) (12 min)",
              "contexto": "Eles olharam no mapa e viram três caminhos para voltar para casa. Precisam testar os caminhos com os blocos para ver qual é o mais rápido.",
              "proposta": "Os alunos devem montar e comparar três algoritmos diferentes no tabuleiro. Algoritmos para montar — Caminho 1: [Avançar] (8x). Caminho 2: [Avançar] (5x) ➔ [Virar] ➔ [Avançar] (2x). Caminho 3: [Avançar] (3x) ➔ [Virar] ➔ [Avançar] (1x).",
              "resolucao": "O Caminho 3 é o mais otimizado (usa menos blocos/passos totais: 4 passos).",
              "abordagem": "Divida a turma em três grupos, cada um monta um caminho. Depois, contem juntos quantos blocos cada grupo usou. Explique que na programação, o melhor código é aquele que resolve o problema usando menos blocos (otimização)."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Lendo o Mapa (Matemática/Lateralidade) (7 min)",
              "contexto": "No meio do caminho 3, há uma bifurcação. O mapa diz para virar para o lado da mão que não segura o lápis (para destros).",
              "proposta": "Identificar a lateralidade e escolher a direção correta no Kit do Aluno.",
              "resolucao": "Para a maioria das crianças (destras), a resposta será Esquerda. Adapte se houver crianças canhotas.",
              "abordagem": "Avalie se eles conseguem transpor a lateralidade do próprio corpo para o personagem."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de coruja)",
              "texto": "Uuuuu! Uma coruja piou alto e a floresta ficou um breu total! Eles não veem a porta da casa.",
              "proposta": "Uma revisão oral das aventuras passadas para \"iluminar\" a memória. Abordagem pedagógica: esta é a sua avaliação oral da turma. Pergunte: \"O que a Veridia deu para eles? Quem é Hélio?\" Se a turma responder bem, diga que a memória deles acendeu uma luz que mostrou a porta da casa.",
              "tempo": "8 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como descobrimos qual caminho era o melhor usando os blocos?",
                "Vocês acham que aprenderam bastante coisa até agora?",
                "Como se sentem ajudando a salvar os personagens?"
              ],
              "registro": "Oriente as crianças a desenharem a chegada em casa e copiarem a palavra CAMINHO.",
              "celebracao": "\"Nós somos mestres dos blocos! RESGATE, AÇÃO!\""
            }
          ]
        ]
      }
    ]
  },
  "2": {
    "nome": "2º Ano",
    "aulas": [
      {
        "titulo": "Aula 01 — A cidade que parou",
        "paginas": [
          [
            {
              "tipo": "sumario",
              "itens": [
                {
                  "n": 1,
                  "titulo": "A cidade que parou",
                  "pc": "Sequenciamento básico (Início, Avançar, Virar, Fim)",
                  "desc": "Sequência numérica crescente (5 a 12) e decrescente (20 a 14). Desafio bônus de Português: qual profissão o aluno gostaria de ter."
                },
                {
                  "n": 2,
                  "titulo": "Acorda, padeiro!",
                  "pc": "Rotas de retorno à origem com múltiplos destinos",
                  "desc": "Contagem regressiva no tabuleiro (10 a 1) e cálculo do dobro de uma distância. Desafio bônus de Ciências: transformação da matéria pelo calor."
                },
                {
                  "n": 3,
                  "titulo": "O hospital sem médicos",
                  "pc": "Lógica condicional (Se/Então) aplicada à navegação",
                  "desc": "Comparação de temperaturas para decidir a rota da ambulância e ordenação crescente de números. Desafio bônus de Ciências: higiene e prevenção de doenças."
                },
                {
                  "n": 4,
                  "titulo": "A escola fechada",
                  "pc": "Classificação e coleta de dados através do movimento no tabuleiro",
                  "desc": "Rota do ônibus escolar e problema de diferença (\"quantos a mais\") e de adição. Desafio bônus de História: a importância da escola."
                },
                {
                  "n": 5,
                  "titulo": "Bombeiros em ação",
                  "pc": "Otimização de rotas (caminho mais curto)",
                  "desc": "Montagem e comparação de caminhos no tabuleiro e adição de distâncias interrompidas. Desafio bônus de Geografia: responsabilidade sobre espaços públicos."
                },
                {
                  "n": 6,
                  "titulo": "O mercado sem feirantes",
                  "pc": "Rotas para coleta e entrega de itens e classificação de informações",
                  "desc": "Rota até o almoxarifado com soma de frutas e problema de subtração (troco). Desafio bônus de Geografia: relação campo-cidade."
                },
                {
                  "n": 7,
                  "titulo": "O correio parado",
                  "pc": "Algoritmo de entrega com múltiplos destinos e condicionais",
                  "desc": "Montagem da rota de entregas e ordenação crescente de números de casas. Desafio bônus de Português: a função social da carta."
                },
                {
                  "n": 8,
                  "titulo": "A polícia precisa de reforços",
                  "pc": "Algoritmos com obstáculos e rotas baseadas em padrões matemáticos",
                  "desc": "Rota condicional desviando de um buraco e descoberta de um padrão numérico (pular de 2 em 2). Desafio bônus de História: regras de convivência."
                },
                {
                  "n": 9,
                  "titulo": "Construtores da cidade",
                  "pc": "Algoritmos em linguagem pictográfica (setas) antes da execução física",
                  "desc": "Desenho do algoritmo com setas e identificação de formas geométricas planas. Desafio bônus de Artes: marcação da planta de uma casa."
                },
                {
                  "n": 10,
                  "titulo": "Missão quase cumprida!",
                  "pc": "Algoritmos mais longos e complexos (avaliação intermediária)",
                  "desc": "Super patrulha por 4 locais no tabuleiro e subtração para entender o conceito de metade. Desafio bônus Socioemocional: reflexão sobre o aprendizado."
                }
              ]
            }
          ],
          [
            {
              "tipo": "orientacoes",
              "paragrafos": [
                "\"A Cidade dos Heróis: O Jogo da Cidade que Parou\" é um jogo físico de blocos de madeira, desenvolvido para alunos do 2º ano do Ensino Fundamental. O material integra o ensino de lógica de programação e pensamento computacional com as habilidades matemáticas da BNCC, tudo dentro de uma narrativa envolvente protagonizada pelos mascotes da Skilliu.",
                "A proposta é 100% desplugada (sem telas), estimulando o aprendizado tátil, colaborativo e narrativo. As crianças manipulam blocos de madeira encaixáveis para construir algoritmos físicos e, ao mesmo tempo, resolvem desafios matemáticos contextualizados na história de Kyro e Kyra em uma cidade onde todos os serviços pararam, e a missão é reativá-la, profissão por profissão."
              ],
              "destaque": "<strong>Faixa etária:</strong> 7 a 8 anos (2º Ano do Ensino Fundamental)<br><strong>Número de jogadores:</strong> 2 a 4 alunos por grupo<br><strong>Duração de cada sessão:</strong> 50 minutos<br><strong>Total de missões:</strong> 20 (alinhadas ao semestre letivo)"
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Objetivos de Aprendizagem",
              "instrucao": "",
              "texto": "O jogo foi concebido para desenvolver competências em duas dimensões complementares: o Pensamento Computacional e as Habilidades Matemáticas previstas na BNCC para o 2º ano. Além disso, explora interdisciplinaridade com Português, Ciências, Geografia, História e Artes por meio dos Desafios Bônus.<br><br><strong>Pensamento Computacional — EF02CO01, EF02CO02, EF02CO03, EF02CO04.</strong>"
            },
            {
              "tipo": "tabela",
              "legenda": "Pensamento Computacional — Conceitos",
              "colunas": [
                "Conceito",
                "Quando é Trabalhado",
                "Descrição"
              ],
              "linhas": [
                [
                  "Sequenciamento",
                  "Missões 1, 2, 7 e 11",
                  "Ordenar instruções para guiar os personagens e criar rotas pela cidade."
                ],
                [
                  "Loops (Repetição)",
                  "Missões 2 e 8",
                  "Usar o bloco \"Repetir\" para executar uma ação múltiplas vezes, como padrões numéricos e rotinas."
                ],
                [
                  "Condicionais",
                  "Missões 3 e 8",
                  "Usar o bloco \"Se/Então\" para tomar decisões baseadas em regras de convivência ou saúde."
                ],
                [
                  "Classificação",
                  "Missões 4, 6 e 12",
                  "Organizar objetos, turmas e informações por múltiplos atributos e categorias."
                ],
                [
                  "Depuração (Debug)",
                  "Missões 14 e 15",
                  "Identificar e corrigir erros na sequência de blocos, descobrindo pistas escondidas."
                ],
                [
                  "Decomposição e Otimização",
                  "Missões 5, 9, 13 e 16",
                  "Dividir um problema complexo em partes menores, otimizar rotas e dividir tarefas."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Matemática (BNCC — 2º Ano)",
              "colunas": [
                "Código BNCC",
                "Habilidade",
                "Missões Relacionadas"
              ],
              "linhas": [
                [
                  "EF02MA01",
                  "Comparar e ordenar números naturais (até a ordem de centenas) pela compreensão de características do sistema de numeração decimal (valor posicional e função do zero).",
                  "1, 3, 7, 15"
                ],
                [
                  "EF02MA02",
                  "Fazer estimativas por meio de estratégias diversas a respeito da quantidade de objetos de coleções e registrar o resultado da contagem desses objetos (até 1000 unidades).",
                  "18"
                ],
                [
                  "EF02MA03",
                  "Comparar quantidades de objetos de dois conjuntos, por estimativa e/ou por correspondência (um a um, dois a dois, entre outros), para indicar \"tem mais\", \"tem menos\" ou \"tem a mesma quantidade\", indicando a diferença.",
                  "4, 12, 13"
                ],
                [
                  "EF02MA04",
                  "Compor e decompor números naturais de até três ordens, com suporte de material manipulável, por meio de diferentes adições.",
                  "16"
                ],
                [
                  "EF02MA05",
                  "Construir fatos básicos da adição e subtração e utilizá-los no cálculo mental ou escrito.",
                  "6, 11"
                ],
                [
                  "EF02MA06",
                  "Resolver e elaborar problemas de adição e de subtração, envolvendo números de até três ordens, com os significados de juntar, acrescentar, separar, retirar, utilizando estratégias pessoais ou convencionais.",
                  "6, 11, 17"
                ],
                [
                  "EF02MA08",
                  "Resolver e elaborar problemas envolvendo o dobro, metade, triplo e terça parte, com o suporte de imagens ou material manipulável, utilizando estratégias pessoais.",
                  "2"
                ],
                [
                  "EF02MA09",
                  "Construir sequências de números naturais em ordem crescente ou decrescente a partir de um número qualquer, utilizando uma regularidade estabelecida.",
                  "1, 3, 8, 15"
                ],
                [
                  "EF02MA14",
                  "Reconhecer, nomear e comparar figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera), relacionando-as com objetos do mundo físico.",
                  "9"
                ],
                [
                  "EF02MA15",
                  "Reconhecer, comparar e nomear figuras planas (círculo, quadrado, retângulo e triângulo), por meio de características comuns, em desenhos apresentados em diferentes disposições ou em contornos de faces de sólidos geométricos.",
                  "9"
                ],
                [
                  "EF02MA16",
                  "Estimar, medir e comparar comprimentos de lados de salas (incluindo contorno) e de polígonos, utilizando unidades de medida não padronizadas e padronizadas (metro, centímetro e milímetro) e instrumentos adequados.",
                  "5, 13"
                ],
                [
                  "EF02MA22",
                  "Comparar informações de pesquisas apresentadas por meio de tabelas de dupla entrada e em gráficos de colunas simples ou barras, para melhor compreender aspectos da realidade próxima.",
                  "14"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Componentes do Jogo — Tabuleiro da Cidade dos Heróis",
              "instrucao": "",
              "texto": "O tabuleiro é um painel modular dividido em uma grade de casas, onde os personagens se movem. O cenário ilustra os principais locais da narrativa: <strong>Prefeitura (Centro):</strong> o coração da cidade, onde os bilhetes são encontrados e o painel de controle está localizado. <strong>Padaria e mercado (Área Comercial):</strong> locais de desafios de produção, adição e subtração. <strong>Hospital e Bombeiros (Área de Emergência):</strong> locais de desafios de condicionais e otimização de rotas. <strong>Escola e Biblioteca (Área de Conhecimento):</strong> onde Kyro e Kyra aprendem e investigam. <strong>Jardim Público (Área de Convivência):</strong> local de desafios de áreas e espaços públicos."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Componentes do Jogo — Personagens e Blocos",
              "instrucao": "",
              "texto": "<strong>Personagens (Peões).</strong> O jogo inclui quatro personagens em formato de peão de madeira: <strong>Kyro:</strong> esquilo verde com óculos e mochila (personagem jogável principal). <strong>Kyra:</strong> esquila verde com lápis na orelha e mochila (personagem jogável principal). <strong>Hélio:</strong> professor com estilo cientista (auxilia na torre de comando). <strong>Lia:</strong> professora de jaleco branco com prancheta (auxilia na torre de comando).<br><br><strong>Blocos de Programação.</strong> Os blocos são peças de madeira com encaixes fáceis e um fluxo de programação vertical para facilitar a montagem. <strong>Blocos de Movimento (Azul):</strong> Avançar, Recuar, Virar à Direita, Virar à Esquerda. <strong>Blocos de Ação (Amarelo):</strong> Pegar (Mãozinha). <strong>Blocos de Controle (Verde, Vermelho e Laranja):</strong> Início (Bandeira verde), Fim (Sinal de pare), Repetir (Loop), Se/Então (Condicional)."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Material do Aluno e do Professor",
              "instrucao": "",
              "texto": "<strong>4. Material do Aluno (Kit do Explorador).</strong> Cartas de Missão: uma para cada aula. Contém a ilustração narrativa, o texto da história, o conceito de Pensamento Computacional e os Desafios Matemáticos e Bônus. Diário de Bordo (Fichas de Registro): espaço para o aluno desenhar ou escrever sua missão, anotar seu código, resolver os desafios e refletir sobre o que aprendeu (o que mais gostou, o que achou difícil).<br><br><strong>5. Material do Professor (Kit do Professor).</strong> Plano de Aula e Resoluções: guia passo a passo com alinhamento BNCC, storytelling completo para leitura dramática, resoluções visuais dos desafios e abordagem didática sugerida."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Mecânica e Regras do Jogo",
              "instrucao": "",
              "texto": "O jogo segue um ciclo de 5 etapas, somado ao fator perturbador e à reflexão final, estruturando os 50 minutos de aula:<br><br><strong>1. Apresentação da Missão (Storytelling):</strong> o educador faz a leitura dramática da Carta de Missão, contextualizando a narrativa e o problema na cidade.<br><br><strong>2. Planejamento:</strong> em grupos, os alunos discutem o caminho e a sequência de ações. O educador faz perguntas guiadoras.<br><br><strong>3. Programação e Desafios:</strong> os alunos montam o algoritmo físico com os blocos (sempre de cima para baixo) e resolvem os dois desafios matemáticos alinhados à BNCC e o desafio bônus interdisciplinar.<br><br><strong>4. Fator Perturbador e Execução:</strong> um evento inesperado é revelado (ex: mangueira furada, falha no sistema), exigindo adaptação rápida. Um aluno (\"computador humano\") executa os passos no tabuleiro.<br><br><strong>5. Validação, Depuração e Reflexão:</strong> se houver erro, o grupo faz o debug. Ao final, os alunos registram suas conquistas e sentimentos no Diário de Bordo e celebram com um grito de guerra."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "As 20 Missões: Narrativa, Programação e Matemática",
              "instrucao": "",
              "texto": "A seguir, o mapeamento completo das 20 missões do semestre, organizadas por bloco."
            },
            {
              "tipo": "tabela",
              "legenda": "Bloco 1 — Chegada e Descoberta (Aulas 1 a 7)",
              "colunas": [
                "Missão",
                "Título da Narrativa",
                "Conceito de PC",
                "Habilidade BNCC",
                "Desafio Principal"
              ],
              "linhas": [
                [
                  "1",
                  "A Cidade que Parou",
                  "Montar rota pela cidade",
                  "EF02MA01, EF02MA09",
                  "Sequências numéricas ascendentes e descendentes até 20."
                ],
                [
                  "2",
                  "Acorda, Padeiro!",
                  "Sequência de produção",
                  "EF02MA08",
                  "Dobro e metade: quantas unidades para fazer mais pão?"
                ],
                [
                  "3",
                  "O Hospital Sem Médicos",
                  "Algoritmo de decisão (SE/ENTÃO)",
                  "EF02MA01, EF02MA09",
                  "Sequências de temperatura, identificar o mais alto e mais baixo."
                ],
                [
                  "4",
                  "A Escola Fechada",
                  "Classificação e organização",
                  "EF02MA03",
                  "Organização em grupos e comparação de turmas."
                ],
                [
                  "5",
                  "Bombeiros em Ação",
                  "Otimização de rota",
                  "EF02MA16",
                  "Comparação de distâncias: qual rota é mais curta?"
                ],
                [
                  "6",
                  "O Mercado Sem Feirantes",
                  "Classificação por múltiplos atributos",
                  "EF02MA05, EF02MA06",
                  "Adição e subtração até 50 (troco e compras)."
                ],
                [
                  "7",
                  "O Correio Parado",
                  "Algoritmo de entrega",
                  "EF02MA01",
                  "Ordenação numérica de casas em sequência crescente."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Bloco 2 — Reativando os Serviços (Aulas 8 a 14)",
              "colunas": [
                "Missão",
                "Título da Narrativa",
                "Conceito de PC",
                "Habilidade BNCC",
                "Desafio Principal"
              ],
              "linhas": [
                [
                  "8",
                  "A Polícia Precisa de Reforços",
                  "Condicionais (regras e consequências)",
                  "EF02MA09",
                  "Sequências com padrões: identificar a regra da sequência."
                ],
                [
                  "9",
                  "Construtores da Cidade",
                  "Planejamento antes da execução",
                  "EF02MA14, EF02MA15",
                  "Identificar formas geométricas planas e espaciais nas construções."
                ],
                [
                  "10",
                  "Missão Quase Cumprida!",
                  "Avaliação Intermediária 1",
                  "Revisão do Bloco 1",
                  "Balanço do que foi resolvido e planejamento da segunda metade."
                ],
                [
                  "11",
                  "O Transporte Parou",
                  "Sequência de paradas (múltiplos destinos)",
                  "EF02MA05, EF02MA06",
                  "Contagem de paradas com adição e subtração."
                ],
                [
                  "12",
                  "A Família do Vizinho",
                  "Diversidade de estruturas (programas)",
                  "EF02MA03",
                  "Comparação de grupos familiares."
                ],
                [
                  "13",
                  "O Jardim Público em Ruínas",
                  "Colaboração e divisão de tarefas",
                  "EF02MA03, EF02MA16",
                  "Medição e comparação de áreas da praça (maior e menor)."
                ],
                [
                  "14",
                  "O Mistério do Bilhete",
                  "Debugging (encontrar o erro)",
                  "EF02MA22",
                  "Leitura e interpretação de dados em tabela simples."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Bloco 3 — O Mistério e a Celebração (Aulas 15 a 20)",
              "colunas": [
                "Missão",
                "Título da Narrativa",
                "Conceito de PC",
                "Habilidade BNCC",
                "Desafio Principal"
              ],
              "linhas": [
                [
                  "15",
                  "O Suspeito da Cidade",
                  "Revisão lógica (entender a intenção)",
                  "EF02MA01, EF02MA09",
                  "Sequências até 100, identificando padrões numéricos."
                ],
                [
                  "16",
                  "Reativando a prefeitura",
                  "Algoritmo complexo com ordem rigorosa",
                  "EF02MA04",
                  "Adição com reagrupamento para somar as profissões reativadas."
                ],
                [
                  "17",
                  "A Cidade Acorda",
                  "Integração de sequências",
                  "EF02MA06",
                  "Resolução de problemas complexos com todas as operações."
                ],
                [
                  "18",
                  "Todos Somos Heróis",
                  "Programa colaborativo",
                  "EF02MA02",
                  "Contagem final e estimativas de profissões e pessoas."
                ],
                [
                  "19",
                  "O Grande Relatório da Cidade",
                  "Avaliação Intermediária 2",
                  "Todas do semestre",
                  "Exercício de síntese do que funcionou e o que precisou ser refeito."
                ],
                [
                  "20",
                  "A Festa da Cidade Viva",
                  "Celebração",
                  "Todas",
                  "Apresentação da profissão favorita e celebração do aprendizado."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Orientações para o Educador",
              "instrucao": "",
              "texto": "O papel do educador é fundamental para o sucesso do jogo. Mais do que um transmissor de conhecimento, o professor atua como um facilitador da aprendizagem, guiando as crianças pelo processo de pensamento.<br><br><strong>Antes da aula:</strong> leia o Plano de Aula e o storytelling com antecedência. Organize os blocos e o tabuleiro.<br><br><strong>Durante a aula:</strong> faça a leitura dramática com entusiasmo. Incentive o diálogo e não dê as respostas prontas. Se houver o \"Fator Perturbador\", use-o para gerar engajamento e trabalho em equipe.<br><br><strong>Após a aula:</strong> garanta o tempo (10 minutos) para o Diário de Bordo. A reflexão escrita e o desenho são essenciais para consolidar o aprendizado de Português e celebrar as conquistas.<br><br><strong>Adaptações:</strong> utilize os Desafios Bônus para aprofundar as discussões sobre Ciências, Geografia, História e Artes, conectando a temática das profissões com a realidade dos alunos.<br><br>Material desenvolvido pela Skilliu. Todos os direitos reservados. Personagens Kyro, Kyra, Lia e Hélio são propriedade intelectual da Skilliu."
            }
          ],
          [
            {
              "tipo": "aula-header",
              "n": 1,
              "titulo": "A cidade que parou",
              "meta": "Semestre 1 | 2º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula introdutória, Kyro e Kyra chegam a uma cidade completamente paralisada. O foco em pensamento computacional é introduzir o sequenciamento básico, ensinando os alunos a planejarem uma rota passo a passo. Na Matemática, trabalharemos a construção de sequências numéricas ascendentes e descendentes até 20, fundamentais para a ordenação e compreensão da reta numérica no 2º ano."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "—",
                  "Ordenar instruções sequenciais (Início, Avançar, Virar, Fim) para criar uma rota."
                ],
                [
                  "Matemática",
                  "EF02MA09",
                  "Construir sequências de números naturais em ordem crescente ou decrescente a partir de um número qualquer."
                ],
                [
                  "Matemática",
                  "EF02MA01",
                  "Comparar e ordenar números naturais."
                ],
                [
                  "Português (Bônus)",
                  "EF02LP13",
                  "Planejar e produzir pequenos textos/registros escritos."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Apresentar os personagens e o tabuleiro da Cidade dos Heróis."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história sobre a chegada à cidade."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Sequência numérica crescente (5 a 12)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Sequência numérica decrescente (20 a 14)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O vento e o desafio sobre as profissões."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com mistério e entusiasmo)",
              "texto": "Atenção, exploradores! Kyro e Kyra chegaram a uma cidade enorme e cheia de prédios, mas... está tudo muito silencioso! As ruas estão vazias, as lojas estão fechadas e os carros não se movem. Na porta da prefeitura, Kyro encontrou um bilhete estranho que dizia: 'Quem souber o que cada um faz, pode acordar a cidade.' Lá da torre de comando, Lia e Hélio avisaram: 'A missão de vocês é reativar a cidade, profissão por profissão!' Vamos ajudá-los a chegar à prefeitura e desvendar esse mistério?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Caminho para a Prefeitura (Matemática) (8 min)",
              "contexto": "Kyro precisa chegar à prefeitura pulando em pedras numeradas em ordem crescente.",
              "proposta": "Os alunos devem preencher a sequência numérica crescente de 5 a 12.",
              "resolucao": "O aluno deve preencher os espaços com os números 7, 8 e 11.",
              "abordagem": "Desenhe uma reta numérica na lousa. Peça que contem em voz alta a partir do 5. Pergunte: \"Quem vem depois do 6?\"."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — A Volta da Kyra (Matemática) (10 min)",
              "contexto": "Kyra esqueceu a mochila e precisa voltar pulando de trás para frente.",
              "proposta": "Os alunos devem preencher a sequência numérica decrescente de 20 a 14.",
              "resolucao": "O aluno deve preencher os espaços com os números 18, 17 e 15.",
              "abordagem": "Mostre a reta numérica ao contrário. Brinque de contagem regressiva como num lançamento de foguete para facilitar o entendimento."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de vento batendo)",
              "texto": "Plaft! Um vento muito forte bateu e o bilhete voou para longe! Kyro e Kyra precisam correr!",
              "proposta": "O bilhete fala sobre profissões. Qual profissão o aluno gostaria de ter e por que ela é importante? Abordagem pedagógica: promova uma roda de conversa rápida. Explique que a cidade só funciona porque existem padeiros, médicos, professores, lixeiros, etc. Cada um tem seu papel.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi fácil contar de trás para frente?",
                "Qual profissão vocês acham que é a mais importante da cidade? (Conduza para a conclusão de que todas são importantes)",
                "Quantos blocos usamos para chegar à prefeitura?"
              ],
              "registro": "Oriente as crianças a desenharem a profissão escolhida e copiarem a palavra PROFISSÃO.",
              "celebracao": "\"Nós somos os heróis da cidade! ACORDA, CIDADE!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 02 — Acorda, padeiro!",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 2,
              "titulo": "Acorda, padeiro!",
              "meta": "Semestre 1 | 2º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula, a missão é reativar a padaria da cidade e realizar entregas. O pensamento computacional aborda a criação de rotas com múltiplos destinos no tabuleiro, desta vez percorridas no sentido inverso, do destino mais distante de volta à origem. Na Matemática, os alunos trabalharão a sequência numérica decrescente (contagem regressiva de 10 a 1) e o dobro de uma distância percorrida, conectando o movimento no tabuleiro às operações matemáticas."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "—",
                  "Criar algoritmos para rotas no sentido inverso (retorno à origem) com múltiplos destinos."
                ],
                [
                  "Matemática",
                  "EF02MA09",
                  "Construir sequências de números naturais em ordem decrescente a partir de um número qualquer."
                ],
                [
                  "Matemática",
                  "EF02MA08",
                  "Resolver problemas envolvendo dobro, com suporte de material manipulável (tabuleiro e blocos)."
                ],
                [
                  "Ciências (Bônus)",
                  "EF02CI02",
                  "Reconhecer transformações de materiais pelo efeito do calor (massa crua → pão assado)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Relembrar a aula passada e posicionar os personagens na padaria."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre o padeiro e o jeito especial de trabalhar."
                ],
                [
                  "Desafio 1 — Matemática",
                  "10 min",
                  "Contagem regressiva no tabuleiro (sequência decrescente de 10 a 1)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "8 min",
                  "Rota de entrega no sentido de volta e cálculo do dobro da distância."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O forno apitando e o desafio sobre transformação da matéria (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia esfregando os olhos e bocejando)",
              "texto": "A primeira parada de Kyro e Kyra foi a padaria da cidade. Mas sem pão, ninguém tem energia para começar o dia! O padeiro está dormindo profundamente... Zzzzz... e os fornos estão desligados. Para acordá-lo, os nossos heróis precisam organizar os ingredientes na ordem certa e ligar os fornos para o cheirinho de pão fresco se espalhar pela cidade! Mas tem um detalhe: o padeiro tem um jeito bem especial de trabalhar. Ele começa sempre pelo pão mais longe e vai chegando de volta para a padaria, como uma contagem regressiva! Será que conseguimos fazer isso?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Contagem Regressiva dos Pães (Matemática e PC) (10 min)",
              "contexto": "O padeiro faz uma contagem regressiva de 10 até 1 para saber quando os pães ficam prontos. Kyro precisa andar de volta para a padaria, passando pelas casas do tabuleiro do número 10 até o número 1.",
              "proposta": "Os alunos devem montar fisicamente a rota de volta no tabuleiro e preencher a sequência decrescente, completando os números que faltam: 10, 9, ___, ___, 6, ___, 4, ___, 2, 1.",
              "resolucao": "Os espaços devem ser preenchidos com 8, 7, 5 e 3, respectivamente.",
              "abordagem": "Antes de abrir o Kit, faça a turma inteira fazer a contagem regressiva em voz alta: \"10, 9, 8, 7, 6, 5, 4, 3, 2, 1... PÃES PRONTOS!\" Repita duas vezes com entusiasmo. Em seguida, mostre a reta numérica na lousa percorrida da direita para a esquerda. Peça que os alunos movam o peão do Kyro no tabuleiro de casa em casa, contando de trás para frente. Reforce: \"Quando contamos de trás para frente, os números ficam menores a cada passo.\""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Entregas de Pão no Caminho de Volta (Matemática e PC) (8 min)",
              "contexto": "Kyro sai da escola (ponto mais distante), passa pela delegacia fazendo uma entrega e volta para a padaria. A distância da delegacia à padaria é o dobro da distância da escola à delegacia.",
              "proposta": "Montar a rota escola ➔ Delegacia ➔ Padaria no tabuleiro, contar os blocos da primeira parte (ex: 4 blocos) e calcular o dobro para saber a distância da segunda parte.",
              "resolucao": "O aluno deve registrar 8 casas (o dobro de 4).",
              "abordagem": "Use os blocos de madeira. Coloque 4 blocos para a primeira parte do caminho (Escola ➔ Delegacia). Diga: \"O dobro é colocar a mesma quantidade de novo\". Adicione mais 4 blocos para a segunda parte e peça que contem o total. Reforce a ideia de que o caminho de volta pode ter trechos de tamanhos diferentes."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de apito: Pi! Pi! Pi!)",
              "texto": "O forno está apitando! A massa está lá dentro há muito tempo e começou a cheirar a queimado! Precisamos tirar rápido!",
              "proposta": "O que fez a massa do pão mudar de jeito — frio, calor ou água? Abordagem pedagógica: discuta como o calor do forno transforma a massa mole e crua em um pão duro e assado. É uma transformação física causada pela temperatura. Pergunte: \"Que outro alimento muda de jeito quando vai para o fogo?\" (ovo, bolo, carne).",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Quando contamos de trás para frente, os números ficam maiores ou menores a cada passo?",
                "Quando montamos o caminho do Kyro, o dobro de blocos fez a rota ficar maior ou menor?",
                "Qual foi mais difícil: contar para frente ou para trás? Por quê?"
              ],
              "registro": "Oriente as crianças a desenharem a rota de volta com as entregas de pão e copiarem a palavra PÃO.",
              "celebracao": "\"Nós temos a energia do pão quentinho! MÃO NA MASSA!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 03 — O hospital sem médicos",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 3,
              "titulo": "O hospital sem médicos",
              "meta": "Semestre 1 | 2º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula, Kyro e Kyra tentam ajudar no hospital da cidade. O pensamento computacional foca na lógica condicional simples (Se/Então) aplicada à navegação no tabuleiro: os alunos decidirão o destino da ambulância com base em uma condição. Na Matemática, os alunos vão comparar e ordenar números de dois dígitos, contextualizados como leitura de temperaturas no termômetro."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "—",
                  "Utilizar a lógica condicional (Se/Então) para determinar rotas no tabuleiro."
                ],
                [
                  "Matemática",
                  "EF02MA01",
                  "Comparar e ordenar números naturais pela compreensão do valor posicional."
                ],
                [
                  "Matemática",
                  "EF02MA09",
                  "Construir sequências numéricas em ordem crescente."
                ],
                [
                  "Ciências (Bônus)",
                  "EF02CI03",
                  "Discutir os cuidados com o corpo e a prevenção de doenças (higiene)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Posicionar a ambulância no hospital e explicar a regra condicional."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre a lotação do hospital."
                ],
                [
                  "Desafio 1 — Matemática",
                  "10 min",
                  "Comparação de números e rota condicional no tabuleiro."
                ],
                [
                  "Desafio 2 — Matemática",
                  "8 min",
                  "Ordenação crescente de números de dois dígitos."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O espirro da Kyra e a conversa sobre higiene (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com voz de preocupação)",
              "texto": "As pessoas da cidade estão começando a ficar doentes e o hospital está vazio! Quando Kyro e Kyra chegam, encontram apenas uma enfermeira tentando ajudar todo mundo. Eles precisam aprender os cuidados básicos para ajudar os pacientes. Mas de repente... Atchim! Kyra começa a espirrar e se sentir mal! Será que ela também adoeceu? Precisamos tomar decisões rápidas e mandar a ambulância para o lugar certo!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Resgate da Ambulância (Matemática e PC) (10 min)",
              "contexto": "A regra é: SE a temperatura for a mais alta, ENTÃO busque o paciente primeiro. Temos pacientes no mercado (37º), escola (39º) e Bombeiros (36º).",
              "proposta": "Identificar o maior número e montar a rota do hospital até esse local no tabuleiro.",
              "resolucao": "O aluno deve identificar a escola (39º) e montar a rota até lá.",
              "abordagem": "Escreva os três números na lousa. Mostre que o primeiro número (3) é igual em todos, então olhamos para a unidade para saber qual é o maior. Depois, peça que construam o caminho físico da ambulância no tabuleiro."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — A Rota Segura (Matemática) (8 min)",
              "contexto": "A enfermeira pediu para organizar a rota dos próximos resgates do menor para o maior (ordem crescente).",
              "proposta": "Ordenar os números 36, 37 e 39.",
              "resolucao": "O aluno deve registrar a sequência 36 ➔ 37 ➔ 39.",
              "abordagem": "Peça que os alunos usem os números para entender a lógica da fila de atendimento. Quem tem menos febre espera um pouquinho mais."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Tussa dramaticamente)",
              "texto": "Cof! Cof! Kyra não para de tossir e espirrar! Ela precisa ir correndo para perto da Planta Verídia no tabuleiro para se curar!",
              "proposta": "O que fazemos todos os dias para manter as doenças longe? Abordagem pedagógica: peça que os alunos movam a Kyra até a Planta Verídia no tabuleiro. Faça uma roda rápida sobre higiene: lavar as mãos, tomar banho, escovar os dentes, e a importância das vacinas.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como a regra do SE/ENTÃO ajudou a ambulância a saber para onde ir?",
                "Por que o paciente da escola foi o primeiro a ser resgatado?"
              ],
              "registro": "Oriente as crianças a desenharem o caminho da ambulância no tabuleiro e copiarem a palavra SAÚDE.",
              "celebracao": "\"Nós somos fortes e saudáveis! XÔ, DOENÇA!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 04 — A escola fechada",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 4,
              "titulo": "A escola fechada",
              "meta": "Semestre 1 | 2º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Kyro e Kyra assumem o controle da escola da cidade. O pensamento computacional desta aula introduz o conceito de classificação e coleta de dados através do movimento no tabuleiro. Na Matemática, trabalharemos com a comparação de quantidades para identificar diferenças (\"quantos a mais\") e adição simples para juntar conjuntos recolhidos na rota."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "—",
                  "Classificar e agrupar elementos coletados durante uma rota algorítmica."
                ],
                [
                  "Matemática",
                  "EF02MA03",
                  "Comparar quantidades de objetos de dois conjuntos para indicar a diferença (\"quantos a mais\")."
                ],
                [
                  "Matemática",
                  "EF02MA06",
                  "Resolver problemas de adição com o significado de juntar."
                ],
                [
                  "História (Bônus)",
                  "EF02HI04",
                  "Reconhecer a importância da escola como espaço de convivência e memória."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Dinâmica física de classificação com os alunos na sala."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre a bagunça na escola e o ônibus escolar."
                ],
                [
                  "Desafio 1 — Matemática",
                  "10 min",
                  "Rota do ônibus no tabuleiro e problema de diferença (\"quantos a mais\")."
                ],
                [
                  "Desafio 2 — Matemática",
                  "8 min",
                  "Problema de adição (juntar as duas turmas)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O sinal escolar e a reflexão sobre a função da escola (História)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com tom de agitação e confusão)",
              "texto": "Sem professores, as crianças da cidade estão correndo para todo lado sem saber o que fazer! A escola virou uma grande bagunça. Kyro e Kyra precisam assumir a escola por um dia. Eles têm que organizar as turmas, arrumar os horários e preparar as atividades para que tudo volte a funcionar. Mas primeiro, o ônibus escolar precisa passar pela cidade para recolher todas as crianças perdidas e trazê-las em segurança. Vamos traçar a rota do ônibus?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Ônibus Escolar (Matemática e PC) (10 min)",
              "contexto": "O ônibus sai da escola, vai à praça (pega 12 crianças), vai ao correio (pega 8 crianças) e volta para a escola.",
              "proposta": "Montar a rota completa no tabuleiro e descobrir quantas crianças a praça tinha a mais que o correio.",
              "resolucao": "O aluno deve registrar que a praça tem 4 crianças a mais.",
              "abordagem": "Peça que os alunos construam o caminho físico do ônibus com os blocos no tabuleiro. Depois, use os blocos de madeira para comparar as quantidades: faça uma torre com 12 blocos e outra com 8. Coloque-as lado a lado e mostre que a diferença é exatamente o pedaço que \"sobra\" na torre maior (4 blocos)."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Pátio Lotado (Matemática) (8 min)",
              "contexto": "O ônibus chegou na escola e todas as crianças desceram para o pátio.",
              "proposta": "Somar as 12 crianças da praça com as 8 crianças do correio.",
              "resolucao": "O aluno deve registrar 20 crianças no total.",
              "abordagem": "Junte as duas torres de blocos que você usou no desafio anterior e peça para a turma contar o total. Mostre como 8 + 2 (do 12) forma uma dezena exata."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de campainha longa: Triiiiiim!)",
              "texto": "O sinal tocou muito alto e não quer parar! As crianças estão assustadas e correndo! Precisamos acalmar todo mundo!",
              "proposta": "Por que é importante ter uma escola na cidade? Abordagem pedagógica: guie a conversa para além do \"aprender a ler\". A escola é onde fazemos amigos, aprendemos a conviver, respeitar regras e brincar juntos. É o coração da comunidade.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O ônibus passou por quais lugares no tabuleiro para pegar as crianças?",
                "Como descobrimos quantas crianças tinham a mais na praça?",
                "O que vocês mais gostam de fazer na nossa escola?"
              ],
              "registro": "Oriente as crianças a desenharem a rota do ônibus escolar e copiarem a palavra ESCOLA.",
              "celebracao": "\"Nós adoramos aprender! VIVA A ESCOLA!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 05 — Bombeiros em ação",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 5,
              "titulo": "Bombeiros em ação",
              "meta": "Semestre 1 | 2º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A cidade enfrenta uma emergência: um pequeno incêndio! O foco do pensamento computacional é a otimização de rotas, desafiando os alunos a montarem e compararem caminhos no tabuleiro para encontrarem o mais curto. Em Matemática, trabalharemos a comparação de comprimentos/distâncias e a resolução de problemas de adição com medidas, introduzindo noções espaciais."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "—",
                  "Otimizar algoritmos montando caminhos alternativos no tabuleiro e escolhendo o mais curto."
                ],
                [
                  "Matemática",
                  "EF02MA16",
                  "Estimar, medir e comparar comprimentos utilizando unidades de medida padronizadas ou não (blocos)."
                ],
                [
                  "Matemática",
                  "EF02MA06",
                  "Resolver problemas de adição com significado de acrescentar (distâncias)."
                ],
                [
                  "Geografia (Bônus)",
                  "EF02GE04",
                  "Reconhecer a importância dos espaços públicos e a responsabilidade de cuidar deles."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Posicionar os Bombeiros e marcar o incêndio perto da praça no tabuleiro."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre o incêndio e a urgência."
                ],
                [
                  "Desafio 1 — Matemática",
                  "10 min",
                  "Montagem de rotas no tabuleiro e comparação (otimização)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "8 min",
                  "Adição de distâncias interrompidas."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Conversa sobre espaços públicos (Geografia)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com urgência e emoção)",
              "texto": "Fogo! Um pequeno incêndio começou num prédio abandonado perto da praça! Sem os bombeiros, Kyro e Kyra precisam organizar o resgate rápido. Eles precisam encontrar a rota mais rápida no tabuleiro para chegar ao prédio antes que o fogo se espalhe para as outras casas da cidade. Existem vários caminhos, mas numa emergência, não temos tempo a perder! Qual será a rota perfeita?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Caminho Mais Curto (Matemática e Pensamento Computacional) (10 min)",
              "contexto": "O caminhão está nos Bombeiros e precisa ir à praça.",
              "proposta": "Os alunos devem montar dois caminhos diferentes no tabuleiro, contar os blocos usados em cada um e escolher o menor.",
              "resolucao": "O aluno deve identificar e marcar o caminho que usou 15 blocos (passando perto da prefeitura) como o mais curto.",
              "abordagem": "Divida a turma em grupos e peça que cada grupo crie um caminho diferente usando os blocos físicos no tabuleiro. Depois, todos contam seus blocos. Explique que na programação, o \"melhor\" algoritmo (otimizado) é aquele que resolve o problema usando menos passos (blocos)."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Distância Total do Resgate (Matemática) (8 min)",
              "contexto": "O caminhão andou 10 casas do caminho curto, mas teve que parar por um bloqueio. Ainda faltam 5 casas para chegar.",
              "proposta": "Somar 10 + 5 para descobrir o tamanho total do caminho.",
              "resolucao": "O aluno deve registrar 15 casas.",
              "abordagem": "Mostre a rota no tabuleiro. Conte 10 casas e pare o peão. Depois mostre as 5 casas restantes. Mostre como o número 10 (uma dezena) se junta facilmente com o 5 (cinco unidades) para formar o 15."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "",
              "proposta": "De quem é a responsabilidade de cuidar da praça? Abordagem pedagógica: explique que praças, escolas e hospitais são \"espaços públicos\". Isso significa que não têm um único dono, pertencem a todos. Por isso, não jogar lixo e não colocar fogo é dever de todo cidadão.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Por que os bombeiros precisavam do caminho com menos blocos?",
                "O que devemos fazer se virmos alguém jogando lixo na praça?"
              ],
              "registro": "Oriente as crianças a desenharem os caminhos que tentaram fazer no tabuleiro e copiarem a palavra ÁGUA.",
              "celebracao": "\"Nós somos os heróis do resgate! FOGO APAGADO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 06 — O mercado sem feirantes",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 6,
              "titulo": "O mercado sem feirantes",
              "meta": "Semestre 1 | 2º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula, Kyro e Kyra organizam o Mercado Municipal. O pensamento computacional foca na criação de rotas no tabuleiro para coleta e entrega de itens, além da classificação de informações. Na Matemática, os alunos trabalharão com problemas de adição e subtração (cálculo de quantidades e troco), ancorando as operações matemáticas diretamente nas ações realizadas fisicamente no tabuleiro."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF02CO02",
                  "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, construídos como sequências."
                ],
                [
                  "Computação",
                  "EF02CO05",
                  "Reconhecer as características e usos das tecnologias computacionais no cotidiano (organização e logística)."
                ],
                [
                  "Matemática",
                  "EF02MA06",
                  "Resolver problemas de adição com o significado de juntar (quantidades de frutas)."
                ],
                [
                  "Matemática",
                  "EF02MA05",
                  "Utilizar fatos básicos da subtração no cálculo mental ou escrito (troco)."
                ],
                [
                  "Geografia (Bônus)",
                  "EF02GE04",
                  "Reconhecer a origem dos alimentos e a relação campo/cidade, montando rotas de transporte."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Posicionar os personagens no Mercado Municipal."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre a bagunça no mercado."
                ],
                [
                  "Desafio 1 — Matemática",
                  "10 min",
                  "Rota no tabuleiro para buscar caixas e soma de frutas."
                ],
                [
                  "Desafio 2 — Matemática",
                  "8 min",
                  "Problema de subtração (troco) e rota de entrega até o hospital."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Laranjas caindo e montagem da rota Fazenda ➔ Mercado."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com voz de feirante animado)",
              "texto": "Olha a maçã fresquinha! Olha a laranja doce! Mas esperem... o Mercado Municipal está cheio de produtos, mas não tem ninguém para vender! As frutas e verduras estão todas misturadas, os preços estão errados e tem uma fila enorme de pessoas querendo comprar comida. Kyro e Kyra precisam organizar as barracas do mercado, classificar os alimentos e ajudar a fazer as contas para que ninguém fique sem almoço hoje! Vamos ajudar?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Caminho do Almoxarifado (Matemática e PC) (10 min)",
              "contexto": "Kyro está no mercado e precisa ir até uma casa vazia (almoxarifado) buscar caixas. Depois, ele junta 20 maçãs e 15 laranjas.",
              "proposta": "Montar fisicamente a rota do mercado até uma casa vazia distante no tabuleiro. Contar os passos e depois somar 20 + 15.",
              "resolucao": "O aluno deve registrar o número de passos e o total de 35 frutas.",
              "abordagem": "Peça que os alunos construam a rota com os blocos. Para a soma, use os blocos de madeira como material de apoio (agrupando-os para representar dezenas e unidades) ou desenhe na lousa a conta armada, mostrando como somar as unidades (0+5) e as dezenas (2+1)."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Troco da Compra (Matemática e PC) (8 min)",
              "contexto": "A cliente comprou 30 reais em verduras e pagou com uma nota de 50 reais. A entrega é no hospital.",
              "proposta": "Subtrair 30 de 50 para achar o troco. Em seguida, montar a rota do mercado até o hospital.",
              "resolucao": "O aluno deve registrar 20 reais de troco.",
              "abordagem": "Desenhe 5 notas de 10 reais na lousa (representando 50). Risque 3 notas (representando os 30 da compra). Conte com eles quantas notas sobraram (2 notas de 10 = 20). Após a conta, valide se o grupo conseguiu simular o algoritmo montando o caminho correto até o hospital (EF02CO02)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de caixas caindo)",
              "texto": "Cuidado! Um carrinho de entregas esbarrou na barraca e todas as laranjas rolaram pelo chão do mercado! Precisamos recolher tudo antes que alguém pise!",
              "proposta": "Escolher uma casa na borda para ser a \"Fazenda\" e montar o caminho do caminhão até o mercado. Abordagem pedagógica: converse sobre a relação campo-cidade enquanto eles montam a rota. Explique que os alimentos são plantados em fazendas (zona rural) e viajam de caminhão até a cidade (zona urbana).",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi fácil fazer a conta de menos para dar o troco?",
                "Como foi o caminho que o caminhão fez da fazenda até o mercado?"
              ],
              "registro": "Oriente as crianças a desenharem o caminhão da fazenda e copiarem a palavra FRUTA.",
              "celebracao": "\"Nós organizamos a feira! TUDO FRESQUINHO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 07 — O correio parado",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 7,
              "titulo": "O correio parado",
              "meta": "Semestre 1 | 2º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula, os alunos ajudam no correio da cidade. O pensamento computacional envolve a criação de um algoritmo de entrega com múltiplos destinos e a simulação de rotas com condicionais (desviar de um obstáculo). Na Matemática, o foco é a ordenação numérica crescente de dezenas, relacionando os números à ordem de entrega nas casas do tabuleiro."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF02CO02",
                  "Criar e simular algoritmos representados em linguagem pictográfica ou física (blocos), analisando como a precisão impacta a execução."
                ],
                [
                  "Computação",
                  "EF02CO01",
                  "Criar e comparar modelos (representações) de rotas, identificando padrões de entrega."
                ],
                [
                  "Matemática",
                  "EF02MA01",
                  "Comparar e ordenar números naturais (até a ordem de centenas)."
                ],
                [
                  "Matemática",
                  "EF02MA09",
                  "Construir sequências de números naturais em ordem crescente."
                ],
                [
                  "Português (Bônus)",
                  "EF02LP13",
                  "Planejar e produzir pequenos textos/registros escritos (gênero: carta)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Posicionar os personagens no correio do tabuleiro."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre as cartas atrasadas."
                ],
                [
                  "Desafio 1 — Matemática",
                  "10 min",
                  "Montagem da rota de entregas no tabuleiro e contagem de blocos."
                ],
                [
                  "Desafio 2 — Matemática",
                  "8 min",
                  "Ordenação crescente e execução da entrega no tabuleiro."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O cachorro solto (Condicional no tabuleiro) e conversa sobre cartas."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia segurando papéis imaginários)",
              "texto": "Cartas e encomendas estão acumuladas no correio da cidade há semanas! Sem os carteiros, muitas famílias estão esperando notícias importantes e pacotes que não chegam. Kyro e Kyra colocaram seus bonés de carteiro e precisam organizar as entregas. Eles têm que fazer uma rota inteligente pelo tabuleiro para entregar tudo no endereço certo. Vamos ajudá-los a entregar as cartas?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Rota das Entregas (Matemática e PC) (10 min)",
              "contexto": "Kyro precisa entregar cartas na padaria, escola e hospital.",
              "proposta": "Montar a rota completa saindo do correio, passando pelos 3 locais na ordem que o grupo escolher. Contar os blocos de Avançar e Virar.",
              "resolucao": "O aluno deve registrar o número de blocos (varia conforme a rota escolhida pelo grupo).",
              "abordagem": "Incentive os grupos a encontrarem a rota mais lógica usando os blocos físicos (EF02CO02). Discuta com a turma: \"Fazia sentido ir à padaria, depois ao hospital (longe) e depois voltar para a escola?\""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Ordenando a Rota (Matemática e PC) (8 min)",
              "contexto": "Kyra precisa organizar as cartas pelos números das casas em ordem crescente: 45, 12, 89, 34.",
              "proposta": "Ordenar os números do menor para o maior e, em seguida, andar com o peão no tabuleiro para cada entrega feita.",
              "resolucao": "O aluno deve registrar a sequência 12 ➔ 34 ➔ 45 ➔ 89.",
              "abordagem": "Escreva os números na lousa. Circule as dezenas (1, 3, 4, 8) para facilitar a visualização da ordem. Depois da ordenação escrita, faça-os simularem a entrega andando 4 casas no tabuleiro (uma casa para cada número)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de cachorro: Au! Au!)",
              "texto": "Um cachorrinho solto na rua está correndo atrás do Kyro querendo brincar com a bolsa de cartas! Ele precisa correr para a próxima casa!",
              "proposta": "Colocar um objeto no tabuleiro para ser o \"Cachorro\". Usar a regra SE/ENTÃO para desviar a rota. Depois, conversar sobre cartas. Abordagem pedagógica: esta é a aplicação física da condicional. O grupo deve alterar o algoritmo (EF02CO01) e colocar blocos de \"Virar\" para não bater no cachorro. Após o susto, converse sobre a função social da carta e peça que pensem em uma mensagem para alguém de outra cidade.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como vocês conseguiram desviar do cachorro no tabuleiro?",
                "Qual número de casa era o maior? Como vocês descobriram?"
              ],
              "registro": "Oriente as crianças a desenharem a rota de fuga do cachorro e copiarem a palavra CARTA.",
              "celebracao": "\"Nós entregamos todas as mensagens! CORREIO EXPRESSO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 08 — A polícia precisa de reforços",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 8,
              "titulo": "A polícia precisa de reforços",
              "meta": "Semestre 1 | 2º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula, a cidade enfrenta problemas de desordem. O pensamento computacional aborda a criação de algoritmos com obstáculos no tabuleiro e a execução de rotas baseadas em padrões matemáticos. Na Matemática, os alunos trabalharão com sequências numéricas (contagem de 2 em 2), relacionando a descoberta de padrões com a lógica de programação."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF02CO02",
                  "Criar e simular algoritmos construídos como sequências com base em instruções preestabelecidas (regras de desvio)."
                ],
                [
                  "Computação",
                  "EF02CO01",
                  "Criar e comparar modelos de rotas no tabuleiro, identificando padrões essenciais de movimento."
                ],
                [
                  "Matemática",
                  "EF02MA09",
                  "Construir sequências de números naturais a partir de uma regularidade (padrão)."
                ],
                [
                  "Matemática",
                  "EF02MA01",
                  "Comparar e ordenar números naturais."
                ],
                [
                  "História (Bônus)",
                  "EF02HI04",
                  "Reconhecer a importância de regras de convivência em espaços públicos."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Posicionar os personagens na delegacia."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre a bagunça na cidade."
                ],
                [
                  "Desafio 1 — Matemática",
                  "10 min",
                  "Rota condicional no tabuleiro (desviar do buraco)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "8 min",
                  "Descobrir o padrão da sequência e andar no tabuleiro."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O carro no sinal vermelho e a rota de perseguição até a praça."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com voz firme e autoritária)",
              "texto": "Sem segurança na cidade, algumas pessoas começaram a desrespeitar as regras: carros estacionados no lugar errado, lixo no chão e muita bagunça! Kyro e Kyra chegam à delegacia para ajudar a colocar ordem. Eles precisam usar as regras de convivência para mostrar à cidade que as leis existem para proteger todo mundo. Vamos ajudar a patrulhar a cidade?"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Regra da Cidade (Matemática e PC) (10 min)",
              "contexto": "A regra é: SE a rua estiver bloqueada, ENTÃO desvie. Kyro vai da delegacia até a prefeitura, mas há um buraco no meio do caminho.",
              "proposta": "O aluno escolhe uma casa no meio do caminho para ser o buraco. Depois, monta a rota física desviando e conta quantos blocos de \"Virar\" usou.",
              "resolucao": "O aluno deve registrar o número de blocos de Virar (ex: 2 ou 4, dependendo do desvio).",
              "abordagem": "Mostre que na programação (EF02CO02), os obstáculos nos obrigam a usar blocos de Virar para mudar a direção. Relacione isso com as regras de trânsito: não podemos passar por cima de tudo."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Padrão Misterioso (Matemática e PC) (8 min)",
              "contexto": "O delegado deixou uma senha no cofre com uma regra secreta: 10, 12, 14, 16, ___, ___.",
              "proposta": "Descobrir a regra (de quanto em quanto pula) e completar os dois próximos números. Depois, andar no tabuleiro o mesmo número de casas da resposta final.",
              "resolucao": "Os próximos números são 18 e 20. A regra é pular de 2 em 2. O peão deve andar 20 casas.",
              "abordagem": "Escreva a sequência na lousa. Pergunte: \"Do 10 para o 12, quantos dedos eu contei?\" (2). \"Do 12 para o 14?\" (2). Mostre que os números seguem regras. A ação de andar as 20 casas conecta a resposta matemática à simulação do algoritmo no espaço físico do jogo (EF02CO01)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de apito: Fiiiiiii!)",
              "texto": "Um carro passou no sinal vermelho perto da praça! A viatura precisa ir até lá rápido para avisar o motorista sobre o perigo!",
              "proposta": "Montar a rota mais rápida da delegacia até a praça (Jardim Público). Abordagem pedagógica: após eles montarem a rota de perseguição, discuta que as regras não servem apenas para proibir, mas para proteger. O sinal vermelho evita acidentes.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como vocês conseguiram desviar do buraco no tabuleiro?",
                "Qual era a regra secreta dos números do cofre?"
              ],
              "registro": "Oriente as crianças a desenharem uma placa de trânsito ou regra e copiarem a palavra REGRA.",
              "celebracao": "\"Nós protegemos a cidade! LEI E ORDEM!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 09 — Construtores da cidade",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 9,
              "titulo": "Construtores da cidade",
              "meta": "Semestre 1 | 2º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula, os alunos ajudam a consertar os prédios da cidade. O pensamento computacional introduz o conceito de representar algoritmos em linguagem pictográfica (setas) antes de simulá-los no tabuleiro. Na Matemática, os alunos explorarão a geometria, identificando formas planas e usando os blocos físicos para construir formas na mesa."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF02CO02",
                  "Criar e simular algoritmos representados em linguagem pictográfica (setas) antes da execução física."
                ],
                [
                  "Computação",
                  "EF02CO01",
                  "Criar e comparar modelos (representações) de formas e espaços no tabuleiro."
                ],
                [
                  "Matemática",
                  "EF02MA15",
                  "Reconhecer e nomear figuras planas (círculo, quadrado, retângulo, triângulo) em desenhos e construções."
                ],
                [
                  "Matemática",
                  "EF02MA14",
                  "Relacionar figuras geométricas com objetos do mundo físico."
                ],
                [
                  "Artes (Bônus)",
                  "EF15AR04",
                  "Experimentar diferentes formas de expressão (marcar a planta de uma casa no tabuleiro)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Observar os prédios desenhados no tabuleiro."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre os reparos na cidade."
                ],
                [
                  "Desafio 1 — Matemática",
                  "10 min",
                  "Desenhar o algoritmo com setas antes de montar no tabuleiro."
                ],
                [
                  "Desafio 2 — Matemática",
                  "8 min",
                  "Identificar formas no tabuleiro e construir um quadrado com blocos."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Os tijolos caindo e a marcação da planta da casa no tabuleiro."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia como se estivesse segurando uma planta de obra)",
              "texto": "Vários prédios da cidade precisam de reparos urgentes! O telhado da escola está vazando e o muro do hospital rachou. Mas os engenheiros e pedreiros sumiram! Kyro e Kyra colocam seus capacetes de obra. Eles precisam entender como uma construção é planejada antes de ser feita, usando blocos e formas geométricas para consertar a cidade. Mãos à obra!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Projeto da Obra (Matemática e PC) (10 min)",
              "contexto": "Um bom construtor desenha o projeto antes de construir. Kyro vai da prefeitura até o hospital.",
              "proposta": "Antes de usar os blocos no tabuleiro, planeje o trajeto! Desenhe setas (↑ ↓ ← →) no espaço abaixo para indicar os movimentos. Só depois encaixe os blocos no tabuleiro para testar se o plano funcionou.",
              "resolucao": "O aluno deve registrar a sequência de setas correta e marcar se deu certo no teste físico.",
              "abordagem": "Explique que os programadores também escrevem o código antes de rodar no computador (EF02CO02). Isso se chama \"planejamento\". Se não der certo no tabuleiro, eles devem apagar a seta errada e corrigir (debug)."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Construindo com Formas (Matemática e PC) (8 min)",
              "contexto": "Kyra está observando as formas geométricas usadas para construir os prédios do tabuleiro.",
              "proposta": "Identificar a forma do telhado da escola e das janelas do hospital. Depois, usar os blocos físicos para tentar formar um quadrado ou retângulo na mesa.",
              "resolucao": "Telhado da escola: Triângulo (ou trapézio). Janelas do hospital: Quadrado ou Retângulo. Número de blocos para o quadrado: mínimo de 4 blocos.",
              "abordagem": "Revise as formas planas na lousa. A atividade de juntar os blocos de madeira para formar um quadrado grande na mesa ajuda na compreensão espacial e geométrica do material (EF02CO01)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de tijolos caindo)",
              "texto": "Cuidado! Uma pilha de tijolos escorregou e bloqueou a rua do mercado! O caminhão de cimento não consegue passar!",
              "proposta": "Escolher 4 casas vazias do tabuleiro para serem os cômodos de uma casa. Colocar uma figura em cada casa para marcar (quarto, sala, cozinha, banheiro). Abordagem pedagógica: explique que a \"planta\" é o desenho da casa vista de cima. O próprio tabuleiro é uma planta gigante da cidade. A marcação com blocos transforma o grid do tabuleiro em um espaço arquitetônico.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi mais difícil desenhar as setas primeiro ou montar com os blocos direto?",
                "Quantos blocos vocês precisaram para fazer um quadrado perfeito na mesa?"
              ],
              "registro": "Oriente as crianças a desenharem a planta da casa que marcaram no tabuleiro e copiarem a palavra CASA.",
              "celebracao": "\"Nós construímos a cidade! OBRA CONCLUÍDA!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 10 — Missão quase cumprida!",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 10,
              "titulo": "Missão quase cumprida!",
              "meta": "Semestre 1 | 2º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Esta é a primeira Avaliação Intermediária. O objetivo é revisar o que foi aprendido no primeiro bloco do semestre. No pensamento computacional, os alunos criarão e simularão algoritmos mais longos e complexos. Na Matemática, farão uma revisão de subtração contextualizada para entender o conceito de \"metade\", representando o resultado fisicamente com os blocos no tabuleiro."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF02CO02",
                  "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, analisando a precisão da instrução na execução de rotas longas."
                ],
                [
                  "Matemática",
                  "EF02MA06",
                  "Resolver problemas de subtração com o significado de retirar/completar."
                ],
                [
                  "Matemática",
                  "EF02MA08",
                  "Compreender o conceito de metade em relação a uma quantidade total."
                ],
                [
                  "Socioemocional (Bônus)",
                  "—",
                  "Refletir sobre o próprio aprendizado e investigar o tabuleiro com cuidado."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Celebrar que chegaram à metade da missão."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da história sobre o balanço da missão."
                ],
                [
                  "Desafio 1 — Matemática",
                  "12 min",
                  "Super patrulha no tabuleiro (rota contínua por 4 locais)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "6 min",
                  "Subtração do total de missões e representação com blocos."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O radar da Torre e a investigação cuidadosa no tabuleiro."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Registro no Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Professor, leia com tom de alívio e orgulho)",
              "texto": "Ufa! Kyro e Kyra estão suando. Eles já conseguiram acordar metade das profissões da cidade! A Padaria, o hospital, a escola, os Bombeiros, o mercado, o correio e a Polícia já estão funcionando. Mas a cidade ainda está longe de estar pronta. Lá da Torre de Comando, Lia e Hélio chamam os dois pelo rádio: 'Exploradores, precisamos fazer uma pausa e avaliar! O que já resolvemos e qual é o plano para a segunda metade?' Vamos mostrar para eles tudo o que já sabemos fazer!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Super Patrulha (Matemática e PC) (12 min)",
              "contexto": "Kyro precisa fazer uma patrulha rápida para verificar os primeiros locais que ajudaram.",
              "proposta": "Montar um único caminho contínuo no tabuleiro passando por: Prefeitura ➔ Padaria ➔ Hospital ➔ Escola. Contar os blocos de Avançar e Virar separadamente.",
              "resolucao": "O aluno deve registrar as quantidades de blocos (os números exatos dependem da rota escolhida pelo grupo).",
              "abordagem": "Este é um desafio de \"resistência\" algorítmica (EF02CO02). Exige muita atenção para não errar a rota. Peça que os alunos dividam as tarefas: um aluno monta até a padaria, o outro continua até o hospital, etc. É um trabalho colaborativo."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Missão 2 - QUEM JÁ ACORDOU?",
              "contexto": "A cidade tem 20 profissões. Já acordamos 10.",
              "proposta": "Fazer a subtração 20 - 10 para descobrir quantas faltam. Depois, colocar no tabuleiro exatamente o mesmo número de blocos da resposta.",
              "resolucao": "O aluno deve registrar 10 profissões e colocar 10 blocos no tabuleiro.",
              "abordagem": "Use os próprios blocos de madeira. Mostre 20 blocos, retire 10. Mostre que o que sobrou é exatamente igual ao que foi retirado. Isso reforça visualmente o conceito de \"metade\". A ação de colocar os 10 blocos restantes no tabuleiro materializa a resposta matemática em uma representação computacional simples."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de rádio com chiado)",
              "texto": "Kzzt... Kzzt... Atenção Kyro, aqui é o Hélio! O radar da Torre de Comando está mostrando que tem alguém escondido no Jardim Público! Fiquem atentos!",
              "proposta": "Montar um caminho da Torre de Comando até o Jardim Público bem devagar. Conversar sobre o que mais gostaram até agora. Abordagem pedagógica: o movimento devagar no tabuleiro simula a \"investigação\". Depois, faça uma roda de conversa avaliativa. Deixe as crianças falarem livremente sobre o que acharam mais divertido (os blocos, o tabuleiro, a história, os cálculos) e o que acharam mais difícil.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi difícil fazer um caminho tão longo na Super Patrulha?",
                "Estamos prontos para a segunda metade da aventura?"
              ],
              "registro": "Oriente as crianças a desenharem o lugar favorito delas no tabuleiro e copiarem a palavra HERÓI.",
              "celebracao": "\"Nós somos a metade da força! RUMO AO FIM!\""
            }
          ]
        ]
      }
    ]
  },
  "3": {
    "nome": "3º Ano",
    "aulas": [
      {
        "titulo": "Aula 01 — A agência dos detetives",
        "paginas": [
          [
            {
              "tipo": "sumario",
              "itens": [
                {
                  "n": 1,
                  "titulo": "A agência dos detetives",
                  "pc": "Sequenciamento (revisão dos blocos de programação)",
                  "desc": "Sequências numéricas para decifrar o código da porta (3, 6, 9...) e a senha do cofre (20, 18, 16...). Desafio bônus de Português: criação da identidade de detetive."
                },
                {
                  "n": 2,
                  "titulo": "A estátua que sumiu",
                  "pc": "Sequência lógica de investigação",
                  "desc": "Multiplicação para contar pegadas (3 × 3) e calcular a distância da fuga (9 × 2). Desafio bônus de História: a função dos monumentos."
                },
                {
                  "n": 3,
                  "titulo": "O esconderijo secreto",
                  "pc": "Debugging (encontrar e corrigir erros no código)",
                  "desc": "Divisão para repartir o trabalho de restauração (15 ÷ 3) e os frascos de limpeza (24 ÷ 3). Desafio bônus de História: patrimônio cultural e tombamento."
                },
                {
                  "n": 4,
                  "titulo": "O mapa que mente",
                  "pc": "Correção de algoritmos (identificar onde o mapa diverge do real)",
                  "desc": "Leitura de croquis e desvio de obstáculo, e cálculo de escala (4 × 10 metros). Desafio bônus de Geografia: como os mapas são feitos e atualizados."
                },
                {
                  "n": 5,
                  "titulo": "A rua escondida",
                  "pc": "Completar sequências lógicas com partes faltando",
                  "desc": "Localização por coordenadas (Coluna 3, Linha 4) e reconstrução de um algoritmo incompleto. Desafio bônus de História: preservação da memória urbana."
                },
                {
                  "n": 6,
                  "titulo": "O museu silencioso",
                  "pc": "Experiência do Usuário (UX) — clareza de um espaço/programa",
                  "desc": "Multiplicação de visitantes perdidos por dia (5 × 8) e por semana (40 × 5). Desafio bônus de Artes: organização de espaços acolhedores."
                },
                {
                  "n": 7,
                  "titulo": "A exposição perdida",
                  "pc": "Ordenação de Algoritmo (sequência temporal correta)",
                  "desc": "Ordenação de datas históricas (1850 a 1980) e cálculo de intervalos de tempo (1910 − 1850). Desafio bônus de História: os primeiros habitantes da região."
                },
                {
                  "n": 8,
                  "titulo": "A biblioteca sem livros",
                  "pc": "Rastreamento de dados e sequenciamento (seguir um padrão de movimento)",
                  "desc": "Desafio único integrado: programar a rota exata do suspeito pela biblioteca e somar os passos (3+4+4+3=14). Desafio bônus de Português: a importância da memória escrita."
                },
                {
                  "n": 9,
                  "titulo": "O colecionador",
                  "pc": "Algoritmo de Catalogação (classificar e organizar dados)",
                  "desc": "Multiplicação em disposição retangular (5 × 8 livros) e combinações de capas (3 × 2). Desafio bônus: como bibliotecas organizam livros de verdade."
                },
                {
                  "n": 10,
                  "titulo": "Revisão no quartel general",
                  "pc": "Revisão geral: sequenciamento, debugging, multiplicação e divisão (avaliação intermediária)",
                  "desc": "Revisão de contas dos Casos 1, 2 e 4 (soma final: 63) e debugging do caminho do servidor. Desafio bônus: perguntas interdisciplinares sobre os quatro casos."
                }
              ]
            }
          ],
          [
            {
              "tipo": "orientacoes",
              "paragrafos": [
                "\"Detetives em Ação: O Mistério da Cidade\" é um jogo físico de blocos de madeira, desenvolvido para alunos do 3º ano do Ensino Fundamental. O material integra o ensino de lógica de programação e pensamento computacional com as habilidades matemáticas da BNCC, tudo dentro de uma narrativa envolvente de investigação e mistério protagonizada pelos mascotes da Skilliu.",
                "A proposta é 100% desplugada (sem telas), estimulando o aprendizado tátil, colaborativo e narrativo. As crianças manipulam blocos de madeira encaixáveis para construir algoritmos físicos e, ao mesmo tempo, resolvem desafios matemáticos e interdisciplinares contextualizados na história de Kyro e Kyra, que assumem o papel de detetives para desvendar os segredos de uma cidade histórica."
              ],
              "destaque": "<strong>Faixa etária:</strong> 8 a 9 anos (3º Ano do Ensino Fundamental)<br><strong>Número de jogadores:</strong> 2 a 4 alunos por grupo<br><strong>Duração de cada sessão:</strong> 50 minutos<br><strong>Total de missões:</strong> 20 (alinhadas ao semestre letivo)"
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Objetivos de Aprendizagem",
              "instrucao": "",
              "texto": "O jogo foi concebido para desenvolver competências em duas dimensões complementares: o Pensamento Computacional e as Habilidades da BNCC para o 3º ano, com foco principal em Matemática e Língua Portuguesa (leitura e escrita do Diário de Bordo), além de conexões com História, Geografia, Ciências e Artes.<br><br><strong>Pensamento Computacional — EF03CO01, EF03CO02, EF03CO03, EF03CO04.</strong> O jogo desenvolve as seguintes capacidades ao longo das 20 missões:"
            },
            {
              "tipo": "tabela",
              "legenda": "Pensamento Computacional — Conceitos por Missão",
              "colunas": [
                "Conceito",
                "Missões Relacionadas",
                "Descrição"
              ],
              "linhas": [
                [
                  "Sequenciamento",
                  "Missões 1, 2",
                  "Ordenar instruções para coletar pistas e investigar casos na ordem correta."
                ],
                [
                  "Depuração (Debugging)",
                  "Missões 3, 4",
                  "Identificar e corrigir erros na sequência de blocos, revendo passos da investigação."
                ],
                [
                  "Decomposição e Reconstrução",
                  "Missões 5, 12",
                  "Dividir um problema complexo em partes menores e completar sequências com informações faltantes."
                ],
                [
                  "Experiência do Usuário (UX)",
                  "Missão 6",
                  "Compreender que um programa (ou espaço) precisa ser claro para quem vai utilizá-lo."
                ],
                [
                  "Ordenação de Algoritmo",
                  "Missões 7, 14",
                  "Colocar eventos ou comandos na sequência temporal correta."
                ],
                [
                  "Rastreamento de Dados e Organização",
                  "Missões 8, 9",
                  "Seguir um rastro de informações ao longo do tempo e criar sistemas de catalogação."
                ],
                [
                  "Permissões e Acessos",
                  "Missão 11",
                  "Entender que nem todo comando pode ser executado por qualquer agente (espaço público vs. privado)."
                ],
                [
                  "Decodificação",
                  "Missão 13",
                  "Interpretar uma sequência de símbolos para revelar uma mensagem oculta."
                ],
                [
                  "Análise Sistêmica",
                  "Missões 15, 18",
                  "Enxergar o padrão que conecta algoritmos separados e compreender o sistema maior."
                ],
                [
                  "Otimização",
                  "Missão 17",
                  "Executar o maior número de tarefas no menor tempo possível."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Matemática (BNCC)",
              "instrucao": "",
              "texto": "As missões conectam-se a habilidades matemáticas do 3º ano, focando em operações, geometria, grandezas e medidas. Além disso, os desafios bônus trazem conteúdos de outras disciplinas."
            },
            {
              "tipo": "tabela",
              "legenda": "Habilidades da BNCC — Matemática e Interdisciplinar",
              "colunas": [
                "Habilidade",
                "Missões Relacionadas"
              ],
              "linhas": [
                [
                  "Sequências numéricas (EF03MA10)",
                  "1"
                ],
                [
                  "Multiplicação (EF03MA07)",
                  "2, 6, 9, 11"
                ],
                [
                  "Divisão (EF03MA08)",
                  "3, 8, 9, 12, 17"
                ],
                [
                  "Leitura de croquis, mapas e coordenadas (EF03MA14)",
                  "4, 5, 13"
                ],
                [
                  "Linha do tempo e intervalos (EF03MA22, EF03MA23)",
                  "7, 14"
                ],
                [
                  "Estimativa, medição e área (EF03MA21)",
                  "16"
                ],
                [
                  "Resolução de problemas de múltiplas etapas",
                  "15, 18"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Componentes do Jogo — Tabuleiro da Cidade Histórica",
              "instrucao": "",
              "texto": "O tabuleiro é um tapete ou painel modular dividido em uma grade, onde os personagens se movem para investigar os casos. O cenário ilustra os principais locais da narrativa: <strong>Agência de Detetives SkilliBlocks:</strong> Ponto de partida, onde Lia e Hélio organizam as missões. <strong>Praça Central e Museu Histórico:</strong> Locais de investigação de estátuas e exposições. <strong>Biblioteca Municipal:</strong> Onde ocorrem as buscas por registros antigos. <strong>Beco Histórico e Teatro Abandonado:</strong> Áreas de mistério e recuperação do patrimônio. <strong>Sítio Arqueológico:</strong> O grande enigma escondido sob a cidade."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Componentes do Jogo — Personagens e Blocos",
              "instrucao": "",
              "texto": "<strong>Personagens (Peões).</strong> O jogo inclui quatro personagens em formato de peão: <strong>Kyro:</strong> o aluno investigador, equipado com sua mochila e óculos. <strong>Kyra:</strong> a aluna investigadora, sempre com um lápis na orelha para anotar pistas. <strong>Hélio:</strong> o professor que auxilia na Agência, trazendo contexto científico. <strong>Lia:</strong> a professora que orienta os detetives, organizando as descobertas.<br><br><strong>Blocos de Programação.</strong> Os blocos de madeira possuem encaixes fáceis e ícones intuitivos. Para o 3º ano, além dos blocos básicos, introduzem-se conceitos de lógica investigativa. <strong>Movimento (Azul):</strong> Avançar, Virar à Direita, Virar à Esquerda. <strong>Ação (Amarelo):</strong> Investigar/Coletar Pista, Analisar, Decodificar. <strong>Controle (Verde e Laranja):</strong> Início, Fim, Repetir (Loop), Se/Então (Condicional)."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Material do Aluno e do Professor",
              "instrucao": "",
              "texto": "<strong>4.1 Cartas de Missão (Casos).</strong> Cada aula possui um \"Dossiê do Caso\", contendo a narrativa do mistério, a missão de programação e os desafios matemáticos e interdisciplinares.<br><br><strong>4.2 Diário de Bordo do Detetive.</strong> Folha de registro onde o aluno anota as pistas encontradas, desenha ou escreve a solução do caso, registra seu código de blocos e faz a reflexão final (o que aprendeu, o que mais gostou e o que achou difícil).<br><br><strong>5. Material do Professor.</strong> O Kit do Professor inclui o plano de aula detalhado, as resoluções visuais dos algoritmos e desafios matemáticos, orientações para a leitura dramática do storytelling e peças magnéticas/adesivas para demonstração na lousa."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Mecânica e Regras do Jogo",
              "instrucao": "",
              "texto": "Mecânica e Regras do Jogo (Aulas de 50 minutos). A estrutura de cada aula segue um fluxo dinâmico:<br><br><strong>1. Storytelling Inicial (10 min):</strong> o educador lê o Dossiê do Caso com entonação dramática. Apresenta o mistério do dia, envolvendo Kyro e Kyra na cidade.<br><br><strong>2. Exploração e Planejamento (10 min):</strong> os alunos, em grupos, discutem como resolver o caso no tabuleiro e resolvem os desafios matemáticos que desbloqueiam as pistas.<br><br><strong>3. Programação Física (15 min):</strong> utilizando os blocos de madeira, os alunos montam o algoritmo para guiar os detetives. Em algumas missões, ocorre o Fator Perturbador (um evento inesperado que exige rápida adaptação do código).<br><br><strong>4. Execução e Depuração (10 min):</strong> um aluno atua como \"computador\", movendo o peão. Se houver erro, o grupo faz o debugging.<br><br><strong>5. Reflexão e Celebração (5 min):</strong> preenchimento do Diário de Bordo (foco em Língua Portuguesa) e celebração da conquista da pista ou resolução do caso."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "As 20 Missões: Narrativa, Programação e Matemática",
              "instrucao": "",
              "texto": "A seguir, apresentamos o mapeamento completo das 20 missões do semestre, organizadas pelo arco narrativo."
            },
            {
              "tipo": "tabela",
              "legenda": "Arco 1: A Agência de Detetives e os Primeiros Casos (Aulas 1 a 7)",
              "colunas": [
                "Missão",
                "Título do Caso",
                "Conceito de PC",
                "Desafios de Matemática (BNCC)",
                "Desafio Bônus"
              ],
              "linhas": [
                [
                  "1",
                  "A Agência dos Detetives (Introdutória)",
                  "Revisão: Montar rota até o 1º caso",
                  "Sequências numéricas para decifrar código",
                  "Português: Criar identidade de detetive"
                ],
                [
                  "2",
                  "Caso 1: A Estátua que Sumiu",
                  "Sequência: Coletar pistas na ordem",
                  "Multiplicação (pegadas e distâncias)",
                  "História: O que é uma estátua/monumento"
                ],
                [
                  "3",
                  "Caso 1: O Esconderijo Secreto",
                  "Debugging: Achar erro na sequência",
                  "Divisão (repartir trabalho de restauração)",
                  "História: Patrimônio cultural e tombamento"
                ],
                [
                  "4",
                  "Caso 2: O Mapa que Mente",
                  "Correção de algoritmo (identificar erro)",
                  "Leitura de croquis e mapas (escala/legenda)",
                  "Geografia: Como os mapas são feitos"
                ],
                [
                  "5",
                  "Caso 2: A Rua Escondida",
                  "Reconstrução de algoritmo (completar partes)",
                  "Coordenadas simples em grade",
                  "História: Como as cidades mudam com o tempo"
                ],
                [
                  "6",
                  "Caso 3: O Museu Silencioso",
                  "Experiência do Usuário (UX)",
                  "Multiplicação (visitantes por período)",
                  "Artes: Organização acolhedora de espaços"
                ],
                [
                  "7",
                  "Caso 3: A Exposição Perdida",
                  "Ordenação temporal de eventos",
                  "Linha do tempo e intervalos de datas",
                  "História: Fundação da cidade"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Arco 2: Os Casos se Conectam (Aulas 8 a 14)",
              "colunas": [
                "Missão",
                "Título do Caso",
                "Conceito de PC",
                "Desafios de Matemática (BNCC)",
                "Desafio Bônus"
              ],
              "linhas": [
                [
                  "8",
                  "Caso 4: A Biblioteca Sem Livros",
                  "Rastreamento de dados no tempo",
                  "Divisão (organizar livros por categoria)",
                  "Português: A importância dos livros antigos"
                ],
                [
                  "9",
                  "Caso 4: O Colecionador",
                  "Algoritmo de catalogação",
                  "Multiplicação e Divisão (prateleiras)",
                  "Português: Patrimônio imaterial"
                ],
                [
                  "10",
                  "Revisão no Quartel General",
                  "Avaliação Intermediária 1",
                  "Revisão das operações e lógica",
                  "Conectar pistas dos casos 1 ao 4"
                ],
                [
                  "11",
                  "Caso 5: O Teatro Abandonado",
                  "Espaço público vs. privado",
                  "Multiplicação (cadeiras e espectadores)",
                  "Artes: A importância dos espaços culturais"
                ],
                [
                  "12",
                  "Caso 5: O Palco Volta a Viver",
                  "Permissões e acessos",
                  "Divisão (dividir tarefas de reforma)",
                  "História: Espaços públicos e privados"
                ],
                [
                  "13",
                  "Caso 6: As Pichações do Beco",
                  "Decodificação de símbolos",
                  "Leitura de coordenadas (mapa de símbolos)",
                  "Artes: Diferença entre pichação e grafite"
                ],
                [
                  "14",
                  "A Mensagem Revelada",
                  "Conexão de algoritmos",
                  "Linha do tempo (ordenar documentos)",
                  "História: Arquivos históricos"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Arco 3: O Grande Enigma da Cidade (Aulas 15 a 20)",
              "colunas": [
                "Missão",
                "Título do Caso",
                "Conceito de PC",
                "Desafios de Matemática (BNCC)",
                "Desafio Bônus"
              ],
              "linhas": [
                [
                  "15",
                  "O Grande Enigma",
                  "Análise sistêmica (enxergar o padrão)",
                  "Resolução de problemas (múltiplas etapas)",
                  "História: O que é arqueologia"
                ],
                [
                  "16",
                  "O Sítio Arqueológico",
                  "Escavação de dados (camadas)",
                  "Estimativa, medição e área",
                  "Ciências: Como funciona uma escavação"
                ],
                [
                  "17",
                  "A Corrida Contra o Tempo",
                  "Otimização de tarefas",
                  "Divisão do tempo (horas disponíveis)",
                  "Português: Escrever relatório de urgência"
                ],
                [
                  "18",
                  "A Cidade Descobre Sua História",
                  "Revisão completa de algoritmos",
                  "Resolução de problemas (dados totais)",
                  "História: Identidade cultural e memória"
                ],
                [
                  "19",
                  "O Dossiê Final",
                  "Avaliação Intermediária 2",
                  "Revisão final matemática",
                  "Montar a sequência lógica do mistério"
                ],
                [
                  "20",
                  "Detetives da Memória",
                  "Celebração",
                  "(Atividade lúdica e reflexiva)",
                  "Apresentação da pista favorita"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Orientações para o Educador",
              "instrucao": "",
              "texto": "O papel do educador é ser o \"Chefe da Agência\", facilitando a investigação e estimulando o protagonismo dos alunos.<br><br><strong>Preparação:</strong> leia o Dossiê do Caso previamente. Organize os blocos e o tabuleiro.<br><br><strong>Narrativa:</strong> a imersão é crucial. Use tom de mistério durante a leitura do caso. Se houver um \"Fator Perturbador\" (ex: a chuva apagando a mensagem na Aula 13), crie senso de urgência.<br><br><strong>Mediação:</strong> não dê as respostas. Se os alunos errarem o algoritmo, incentive o debugging: \"Onde será que a nossa investigação tomou o caminho errado?\".<br><br><strong>Interdisciplinaridade:</strong> aproveite os Desafios Bônus para conectar a aula com o que os alunos estão aprendendo em História, Geografia ou Ciências.<br><br><strong>Diário de Bordo:</strong> valorize o momento final da escrita. É a oportunidade de trabalhar a Língua Portuguesa de forma significativa, onde o aluno relata sua experiência.<br><br>Material desenvolvido pela Skilliu. Todos os direitos reservados. Personagens Kyro, Kyra, Lia e Hélio são propriedade intelectual da Skilliu."
            }
          ],
          [
            {
              "tipo": "aula-header",
              "n": 1,
              "titulo": "A agência dos detetives",
              "meta": "Semestre 1 | 3º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Nesta aula introdutória, Kyro e Kyra chegam a uma cidade histórica e encontram a \"Agência de Detetives SkilliBlocks\". O objetivo principal é revisar o funcionamento básico dos blocos de programação, ao mesmo tempo em que os alunos mergulham na narrativa investigativa. Os desafios matemáticos envolvem sequências numéricas para decifrar o primeiro código da agência, e o desafio interdisciplinar foca na Língua Portuguesa, onde o aluno cria sua identidade de detetive."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF03CO02",
                  "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples com condição (iterações indefinidas), para resolver problemas de forma independente e em colaboração."
                ],
                [
                  "Matemática",
                  "EF03MA10",
                  "Identificar regularidades em sequências numéricas (múltiplos) para decifrar códigos."
                ],
                [
                  "Língua Portuguesa",
                  "EF03LP12",
                  "Escrever textos curtos (identidade) com finalidade específica."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Apresentação do tema \"Detetives\"."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura da chegada à Agência."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Sequência numérica (Código da porta)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Sequência numérica (Senha do cofre)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O alarme da agência e a criação da identidade."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de mistério e entusiasmo)",
              "texto": "Atenção, turma! Kyro e Kyra acabam de chegar a uma cidade muito antiga. Há museus, monumentos, praças e prédios históricos em cada esquina! Caminhando por uma rua de pedras, eles pararam em frente a um prédio misterioso. Na porta, havia um cartaz que dizia: 'Agência de Detetives SkilliBlocks — Procuram-se investigadores corajosos.' Eles entraram devagar... creeeeck... A porta fez um barulho alto. Lá dentro, a professora Lia e o professor Hélio os esperavam com uma mesa cheia de pastas! — Bem-vindos! — disse Lia. — A cidade está cheia de mistérios. Só detetives com raciocínio lógico conseguem resolvê-los. Vocês aceitam o desafio? Kyro ajeitou os óculos e Kyra pegou seu lápis. A primeira missão deles começa agora: abrir o cofre dos casos não resolvidos!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Código da Porta (Matemática) (8 min)",
              "contexto": "Para provar que são bons detetives, Kyro e Kyra precisam descobrir a lógica do painel numérico da porta da sala secreta.",
              "proposta": "O painel tem uma sequência de números pulando de 3 em 3 (3, 6, 9, __, 15). Os alunos devem descobrir o número que falta e programar o caminho do peão até essa casa no tabuleiro.",
              "resolucao": "O número é 12. O algoritmo deve guiar o personagem da entrada até a casa 12 (Início > Avançar > Avançar > Fim).",
              "abordagem": "Pergunte: \"Como os números estão crescendo? Qual é a regra?\". Não dê a resposta, deixe que contem nos dedos ou usem material dourado se necessário."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — A Senha do Cofre (Matemática) (10 min)",
              "contexto": "Dentro da sala secreta está o cofre com o primeiro caso. Mas ele tem uma trava com uma sequência decrescente!",
              "proposta": "A sequência é: 20, 18, 16, __, 12. Os alunos devem encontrar o número e programar a rota.",
              "resolucao": "O número é 14 (subtraindo 2). O algoritmo deve guiar o peão até a casa 14.",
              "abordagem": "Destaque que as sequências podem aumentar ou diminuir. Peça para identificarem a diferença entre 20 e 18."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça um som de sirene)",
              "texto": "BEEP! BEEP! BEEP! O sistema da Agência bloqueou o acesso! Ele diz: 'Identidade de Detetive não reconhecida!'",
              "proposta": "Os alunos precisam criar rapidamente suas identidades de detetive no Diário de Bordo (nome de detetive, especialidade e um símbolo). Abordagem pedagógica: incentive a criatividade. Explique que um detetive precisa de um codinome e de uma marca registrada.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que foi mais fácil: descobrir a regra que aumentava os números ou a que diminuía?",
                "Qual foi o nome de detetive mais criativo do seu grupo?"
              ],
              "registro": "Eles devem preencher a ficha de identidade de detetive.",
              "celebracao": "\"Agência SkilliBlocks: Mistério revelado, caso solucionado!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 02 — A estátua que sumiu",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 2,
              "titulo": "Caso 1 — A estátua que sumiu",
              "meta": "Semestre 1 | 3º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A Agência SkilliBlocks recebe seu primeiro caso real: a estátua mais famosa da praça central desapareceu! Os alunos precisarão programar uma sequência lógica de investigação para coletar pistas (pegadas e distâncias) usando a multiplicação. O desafio interdisciplinar de História explora a função dos monumentos nas cidades."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF03CO02",
                  "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples com condição (iterações indefinidas), para resolver problemas de forma independente e em colaboração."
                ],
                [
                  "Matemática",
                  "EF03MA07",
                  "Resolver problemas de multiplicação (adição de parcelas iguais)."
                ],
                [
                  "História",
                  "EF03HI04",
                  "Identificar os patrimônios históricos e culturais de sua cidade (monumentos)."
                ],
                [
                  "Língua Portuguesa",
                  "EF03LP12",
                  "Produzir pequenos relatos de observação."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Dinâmica: \"O que sumiu da sala?\""
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura do sumiço da estátua."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Multiplicação: As pegadas de tinta."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Multiplicação: A distância da fuga."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "A testemunha misteriosa (História)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com voz de urgência)",
              "texto": "O telefone da Agência SkilliBlocks tocou bem cedo! Era o prefeito da cidade, desesperado. — Detetives, socorro! A estátua do fundador da cidade, que ficava no meio da praça central, sumiu durante a noite! Kyro e Kyra correram para a praça. O pedestal estava vazio. Não havia sinais de destruição, mas Kyra notou algo no chão com sua lupa: — Olhem! Há rastros de tinta amarela formando pegadas, e aqui perto tem uma chave velha caída. Hélio analisou as pegadas: — Parece que quem levou a estátua andou em um padrão matemático. Se calcularmos a quantidade de passos, saberemos a distância que percorreram!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — As Pegadas de Tinta (Matemática) (8 min)",
              "contexto": "Para saber quantas pessoas levaram a estátua, Kyro precisa contar as pegadas de tinta. Elas estão agrupadas.",
              "proposta": "Há 3 grupos de pegadas no chão. Cada grupo tem 3 pegadas. Quantas pegadas há no total? Os alunos devem programar o peão para coletar a pista na casa correta.",
              "resolucao": "3 × 3 = 9 pegadas. Algoritmo: usar blocos de movimento até a casa 9 e colocar o bloco de Ação (Investigar).",
              "abordagem": "Mostre que 3 grupos de 3 é o mesmo que 3 + 3 + 3."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — A Distância da Fuga (Matemática) (10 min)",
              "contexto": "As pegadas vão em direção à rua de trás. Cada pegada tem 2 casas de distância uma da outra.",
              "proposta": "Se são 9 pegadas, e cada uma tem 2 casas de distância, quantas casas de distância eles percorreram? Programe a rota até essa resposta.",
              "resolucao": "9 × 2 = 18 palmos.",
              "abordagem": "Ajude-os a entender que é o dobro de 9 (9 + 9)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça voz de velhinho)",
              "texto": "De repente, um senhorzinho que alimenta os pombos na praça diz: 'Eu vi quem levou! Mas só conto se vocês me disserem: para que serve uma estátua de pedra no meio da rua?'",
              "proposta": "Os alunos devem discutir e responder por que as cidades têm monumentos e estátuas. Abordagem pedagógica: explique que estátuas servem para lembrar de pessoas importantes ou eventos do passado da cidade (memória/patrimônio).",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi mais fácil somar várias vezes ou usar a multiplicação?",
                "Se vocês pudessem fazer uma estátua para a nossa cidade, de quem ou do que seria?"
              ],
              "registro": "Desenhar a estátua que eles fariam e anotar o resultado da investigação.",
              "celebracao": "\"Pista coletada, matemática calculada!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 03 — O esconderijo secreto",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 3,
              "titulo": "Caso 1 — O esconderijo secreto",
              "meta": "Semestre 1 | 3º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Seguindo as pistas, os detetives encontram a estátua escondida atrás da biblioteca municipal. Eles descobrem que ela não foi roubada, mas levada para restauração! O foco em pensamento computacional é o debugging (encontrar e corrigir erros no código), enquanto a matemática trabalha a divisão (repartir o trabalho de restauração). O bônus de História aborda o conceito de patrimônio cultural e tombamento."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF03CO02",
                  "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples com condição (iterações indefinidas), para resolver problemas de forma independente e em colaboração."
                ],
                [
                  "Matemática",
                  "EF03MA08",
                  "Resolver problemas de divisão (repartir em partes iguais)."
                ],
                [
                  "História",
                  "EF03HI04",
                  "Reconhecer a importância do patrimônio cultural e o que são bens tombados."
                ],
                [
                  "Língua Portuguesa",
                  "EF03LP12",
                  "Escrever a conclusão do caso no Diário de Bordo."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Relembrar as pistas da aula passada."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "A descoberta do esconderijo e a carta."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Divisão: As etapas da restauração."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Divisão: Os frascos de produto de limpeza."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O erro no caminho (Debugging e Patrimônio)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de revelação)",
              "texto": "Seguindo os rastros de tinta, Kyro e Kyra chegaram aos fundos da biblioteca municipal. Havia uma lona gigante cobrindo algo muito alto. Kyro puxou a lona e... Tcharam! A estátua estava lá! Mas ela não estava quebrada ou pichada. Estava limpa e cheirosa! Presa no pedestal, havia uma carta oficial da prefeitura: 'Aviso: Esta estátua foi retirada para restauração de emergência pelo mestre restaurador Sr. Silva.' — Então não foi um roubo! — exclamou Kyra. — O senhor Silva só esqueceu de avisar a cidade e deixou a chave velha cair! O caso da estátua está resolvido, mas agora eles precisam ajudar a dividir o trabalho para terminar a restauração rápido."
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — As Etapas da Restauração (Matemática) (8 min)",
              "contexto": "A estátua precisa ser polida. O Sr. Silva tem 15 dias para terminar o serviço e quer dividir o trabalho igualmente entre ele e seus 2 ajudantes (3 pessoas no total).",
              "proposta": "Dividir 15 dias de trabalho por 3 pessoas. Os alunos devem encontrar a resposta e programar a rota.",
              "resolucao": "15 ÷ 3 = 5 dias para cada um. Rota até a casa do ajudante.",
              "abordagem": "Use os blocos ou lápis para fazer grupos. \"Se eu tenho 15 e divido para 3 pessoas, com quantos cada um fica?\"."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Os Frascos de Limpeza (Matemática) (10 min)",
              "contexto": "Eles precisam de um produto especial para limpar o bronze. Chegou uma caixa com 24 frascos.",
              "proposta": "Se a caixa tem 24 frascos e eles vão dividir igualmente entre os 3 restauradores, quantos frascos cada um vai receber?",
              "resolucao": "24 ÷ 3 = 8 frascos. Rota até a casa 8.",
              "abordagem": "Incentive o uso da tabuada do 3 (que número vezes 3 dá 24?)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de rádio chiando)",
              "texto": "Kshhh... Atenção detetives! Lia chamando da torre! O código de vocês tem um BUG! O peão foi parar na casa errada do tabuleiro!",
              "proposta": "O professor coloca um bloco errado na lousa propositalmente (ex: Virar à Esquerda em vez de Direita). Os alunos devem fazer o debugging (encontrar e corrigir o erro). Em seguida, discutir: por que a prefeitura gastou dinheiro restaurando a estátua em vez de comprar uma nova? Abordagem pedagógica: introduza o conceito de Tombamento e Patrimônio Cultural (bens que não podem ser destruídos porque contam a história do lugar).",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como vocês descobriram o erro (bug) no caminho hoje?",
                "O que vocês aprenderam sobre Patrimônio Cultural?"
              ],
              "registro": "Desenhar a estátua sendo restaurada e escrever a conclusão do Caso 1.",
              "celebracao": "\"Caso 1 encerrado, estátua restaurada!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 04 — O mapa que mente",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 4,
              "titulo": "Caso 2 — O mapa que mente",
              "meta": "Semestre 1 | 3º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Um novo mistério chega à Agência: o mapa oficial da cidade tem um erro! Uma rua desenhada não existe na realidade, e uma rua real não está no mapa. Os alunos trabalharão a correção de algoritmos (identificar onde o mapa diverge do caminho real) e a leitura de croquis e escalas (Matemática). O desafio bônus de Geografia explora como os mapas são feitos e por que podem conter erros ou ficar desatualizados."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF03CO04",
                  "Relacionar o conceito de informação com o de dado."
                ],
                [
                  "Matemática",
                  "EF03MA14",
                  "Descrever e representar, por meio de esboços de trajetos ou croquis, a movimentação no espaço."
                ],
                [
                  "Geografia",
                  "EF03GE06",
                  "Identificar e interpretar imagens bidimensionais e tridimensionais (mapas e maquetes)."
                ],
                [
                  "Língua Portuguesa",
                  "EF03LP12",
                  "Registrar as observações de campo no Diário de Bordo."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "\"Direita, Esquerda, Frente, Trás\" (Comandos rápidos)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "O entregador de cartas perdido e o mapa errado."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Leitura de mapa (A rua que não existe)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Leitura de mapa (A rua fantasma)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "O beco dos espelhos (Geografia)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com voz de confusão e mistério)",
              "texto": "Um entregador de cartas entrou na Agência SkilliBlocks muito confuso. — Detetives, eu estou tentando entregar esta carta o dia todo! O mapa oficial da prefeitura diz que a Rua das Flores fica logo depois da padaria. Mas quando eu chego lá... só tem um muro! E pior: para voltar, eu peguei uma ruazinha estreita que não aparece em nenhum lugar do mapa! Kyro pegou o mapa e Kyra pegou a lupa. — Isso é um caso clássico de erro de algoritmo cartográfico! — disse o professor Hélio. — O mapa é como um programa de computador: se as instruções estiverem erradas, a gente se perde. Vamos ter que ir até lá corrigir esse mapa!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Rua que Não Existe (Matemática) (8 min)",
              "contexto": "Kyro e Kyra estão na padaria. O mapa manda avançar 3 quarteirões e virar à direita na Rua das Flores.",
              "proposta": "Os alunos devem seguir a instrução do mapa no tabuleiro. Porém, a casa onde a Rua das Flores deveria estar é um \"obstáculo\" (um muro). Eles devem identificar o erro e programar um desvio seguro.",
              "resolucao": "O algoritmo original falha no obstáculo. Os alunos devem reescrever o código (ex: avançar 2, virar à direita, avançar 1, virar à esquerda) para contornar o muro.",
              "abordagem": "Mostre que o mapa é uma representação (croqui) e que a realidade pode ser diferente."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — A Rua Fantasma (Matemática) (10 min)",
              "contexto": "Ao contornar o muro, eles encontram uma rua real que não está desenhada no mapa! Eles precisam calcular o tamanho dela para desenhá-la.",
              "proposta": "A rua ocupa 4 casas no tabuleiro. Se cada casa do tabuleiro representa 10 metros na vida real, qual é o comprimento da rua?",
              "resolucao": "4 × 10 = 40 metros. O peão deve ser levado até a casa 40.",
              "abordagem": "Introduza a ideia básica de \"escala\" (uma coisa pequena no papel representa uma coisa grande na realidade)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça um som de eco)",
              "texto": "Ao entrar na rua fantasma, ela termina em um beco cheio de espelhos antigos! A imagem deles se multiplica e eles ficam desorientados. Como saber qual é o caminho real e qual é o reflexo?",
              "proposta": "Para sair do beco, os alunos devem discutir: como os mapas de verdade são feitos hoje em dia? Por que um mapa antigo pode estar errado? Abordagem pedagógica: explique que as cidades mudam (prédios são construídos, ruas são fechadas) e que hoje usamos satélites e GPS para fazer mapas atualizados.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que acontece quando seguimos uma instrução (ou um mapa) que está errada?",
                "Como vocês acham que as pessoas se achavam antes do GPS no celular?"
              ],
              "registro": "Desenhar o croqui (mapa simples) do caminho da sala de aula até o pátio.",
              "celebracao": "\"Mapa corrigido, caminho encontrado!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 05 — A rua escondida",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 5,
              "titulo": "Caso 2 — A rua escondida",
              "meta": "Semestre 1 | 3º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A rua que não estava no mapa tem uma história: era a rua do mercado mais antigo da cidade, que foi demolido e \"apagado\" dos registros para dar lugar a um estacionamento. Os alunos vão reconstruir o algoritmo do mapa usando coordenadas simples (Matemática) e refletir sobre a preservação da memória urbana (História). O pensamento computacional foca em completar sequências lógicas que têm partes faltando."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF03CO02",
                  "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples com condição (iterações indefinidas), para resolver problemas de forma independente e em colaboração."
                ],
                [
                  "Matemática",
                  "EF03MA14",
                  "Localizar e movimentar pessoas ou objetos em malhas quadriculadas, usando coordenadas."
                ],
                [
                  "História",
                  "EF03HI04",
                  "Identificar os patrimônios históricos (o que se perde e o que se preserva nas cidades)."
                ],
                [
                  "Língua Portuguesa",
                  "EF03LP12",
                  "Escrever relatos no Diário de Bordo sobre a memória da cidade."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Jogo da Batalha Naval (introdução a coordenadas)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "A descoberta da placa do mercado antigo."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Coordenadas: Onde ficava a entrada."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Coordenadas: Reconstruindo a rua."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "A escavadeira (História e Memória)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Sugestão de Integração com a Plataforma Matific",
              "colunas": [
                "Momento",
                "Atividade Sugerida"
              ],
              "linhas": [
                [
                  "Antes da aula (Aquecimento)",
                  "Atividade \"Crie e adicione números inteiros usando a contagem\" (Tópico: Números até 1000) para praticar o avanço em grades/linhas."
                ],
                [
                  "Após a aula (Consolidação)",
                  "Jogo \"Use operações para combinar números e atingir um alvo (24 jogos)\" para trabalhar a combinação de passos e coordenadas."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de descoberta)",
              "texto": "Kyro e Kyra conseguiram sair do beco dos espelhos e chegaram ao fim da rua fantasma. Lá, escondida debaixo de muito mato, Kyra achou uma placa de metal antiga. Kyro limpou a sujeira da placa e leu em voz alta: 'Mercado Municipal de 1900'. O professor Hélio falou pelo rádio da Agência: — Eu me lembro! Era o mercado mais lindo da cidade. Mas ele foi demolido anos atrás para construírem aquele estacionamento gigante, e a prefeitura apagou a rua do mapa oficial! — Isso não é justo! — disse Kyra. — As pessoas precisam saber que o mercado existiu. Vamos colocar essa rua de volta no mapa!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Entrada do Mercado (Matemática) (8 min)",
              "contexto": "Para desenhar a rua no mapa, eles precisam achar a coordenada exata de onde ficava a entrada do antigo mercado.",
              "proposta": "A entrada ficava na coordenada (Coluna 3, Linha 4) do tabuleiro. Os alunos devem programar o peão para sair do Início e chegar exatamente nessa coordenada.",
              "resolucao": "O algoritmo deve levar o peão até a interseção da Coluna 3 com a Linha 4.",
              "abordagem": "Explique como funciona uma grade de coordenadas (primeiro anda para o lado, depois para cima)."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Reconstruindo o Caminho (Matemática) (10 min)",
              "contexto": "Eles acharam um pedaço do mapa original do mercado, mas a sequência de passos para chegar ao centro está rasgada no meio.",
              "proposta": "O código está incompleto: [Avançar] > [Virar à Direita] > [ ? ] > [ ? ] > [Investigar]. O alvo está na coordenada (Coluna 5, Linha 4). Os alunos devem preencher os blocos que faltam.",
              "resolucao": "Os blocos faltantes são [Avançar] > [Avançar] (dependendo da posição atual do peão).",
              "abordagem": "Mostre que na programação, se faltar um comando, o \"computador\" não sabe o que fazer."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de motor de trator)",
              "texto": "Vrummm! Uma escavadeira gigante aparece para jogar asfalto em cima da placa antiga do mercado! O motorista diz: 'Isso é velho, precisamos de espaço para carros novos!'",
              "proposta": "Kyro e Kyra entram na frente. Os alunos devem ajudar a convencer o motorista: por que é importante lembrar das coisas antigas da cidade? Abordagem pedagógica: discuta sobre memória urbana. É errado construir coisas novas? Não, mas não podemos apagar a história do que existiu antes.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi difícil achar a casa certa usando as coordenadas (linhas e colunas)?",
                "O que vocês acham que deveria ser construído no lugar do estacionamento para lembrar o mercado?"
              ],
              "registro": "Desenhar como eles imaginam que era o Mercado Antigo cheio de barraquinhas.",
              "celebracao": "\"Rua encontrada, memória salva!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 06 — O museu silencioso",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 6,
              "titulo": "Caso 3 — O museu silencioso",
              "meta": "Semestre 1 | 3º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Um novo caso chega à Agência: o museu histórico da cidade está vazio há semanas. Os visitantes param na porta, olham para dentro e vão embora sem entrar. Kyro e Kyra investigam e descobrem que a entrada foi reorganizada de um jeito que confunde e intimida as pessoas. O foco em pensamento computacional é a Experiência do Usuário (UX) — entender que um programa (ou espaço) precisa ser claro para quem vai usá-lo. A matemática explora a multiplicação (visitantes por período) e o bônus de Artes foca na organização de espaços acolhedores."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF03CO03",
                  "Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções."
                ],
                [
                  "Matemática",
                  "EF03MA07",
                  "Resolver e elaborar problemas de multiplicação (por 2, 3, 4, 5 e 10) com os significados de adição de parcelas iguais."
                ],
                [
                  "Artes",
                  "EF15AR04",
                  "Experimentar diferentes formas de expressão artística, fazendo uso sustentável de materiais, instrumentos, recursos e técnicas convencionais e não convencionais."
                ],
                [
                  "Língua Portuguesa",
                  "EF03LP12",
                  "Planejar e produzir pequenos relatos de observação e pesquisas."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Dinâmica \"O caminho confuso\" (dar instruções propositalmente difíceis)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "O mistério do museu vazio."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Multiplicação: Visitantes perdidos por dia."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Multiplicação: Visitantes perdidos por semana."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "A reorganização da entrada (Artes/UX)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com voz de preocupação)",
              "texto": "O diretor do Museu Histórico da cidade entrou na Agência SkilliBlocks quase chorando. — Detetives, meu museu está amaldiçoado! Há semanas, ninguém entra! As pessoas chegam até a porta, olham para dentro, fazem uma cara de confusão e vão embora! Kyro e Kyra foram até o museu investigar. Ao chegar, perceberam o problema: a porta principal estava bloqueada por três estátuas gigantes assustadoras, a placa de 'Bem-vindo' estava escrita em letras minúsculas no teto, e o caminho para a bilheteria era um labirinto escuro! — Não é maldição! — disse Kyra. — É uma péssima Experiência do Usuário! Se as pessoas não entendem por onde entrar, elas desistem!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Visitantes Perdidos por Dia (Matemática) (8 min)",
              "contexto": "O diretor do museu quer saber quantas pessoas estão desistindo de entrar para calcular o prejuízo.",
              "proposta": "O segurança anotou que, a cada hora, 5 pessoas chegam à porta e vão embora. O museu fica aberto 8 horas por dia. Quantas pessoas desistem por dia? Os alunos devem programar a rota até a resposta.",
              "resolucao": "5 × 8 = 40 pessoas. O algoritmo deve guiar o personagem até a casa 40.",
              "abordagem": "Mostre a relação da tabuada do 5. Pode ser calculado como 5+5+5+5+5+5+5+5 ou 8+8+8+8+8."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Prejuízo da Semana (Matemática) (10 min)",
              "contexto": "Se 40 pessoas desistem por dia, quantas desistem em uma semana inteira de funcionamento?",
              "proposta": "O museu abre 5 dias por semana. Se 40 pessoas desistem por dia, qual o total na semana?",
              "resolucao": "40 × 5 = 200 pessoas. O algoritmo deve guiar o personagem até a casa 200.",
              "abordagem": "Ensine a multiplicar por múltiplos de 10. Se 4 × 5 = 20, então 40 × 5 = 200."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de alarme)",
              "texto": "TRIIIIM! Um ônibus escolar acaba de estacionar na frente do museu! Dezenas de crianças vão descer em 3 minutos e, se virem a entrada confusa, vão voltar para o ônibus!",
              "proposta": "Kyro e Kyra precisam encaminhar a turma para a entrada menos assustadora. Depois, os alunos devem discutir: como transformar uma entrada assustadora e confusa em um espaço acolhedor, bonito e fácil de entender? Abordagem pedagógica: fale sobre Experiência do Usuário (UX). Cores alegres, placas grandes, caminhos livres. Divida o problema em tópicos a serem resolvidos (decomposição).",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Vocês já entraram em algum lugar (ou usaram um aplicativo/jogo) que era tão confuso que deu vontade de desistir?",
                "Por que é importante pensar em quem vai usar o que nós criamos?"
              ],
              "registro": "Desenhar a nova entrada do museu, bem colorida e acolhedora.",
              "celebracao": "\"Entrada livre, museu cheio!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 07 — A exposição perdida",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 7,
              "titulo": "Caso 3 — A exposição perdida",
              "meta": "Semestre 1 | 3º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Dentro do museu recém-reorganizado, Kyro e Kyra descobrem outro problema: a exposição principal sobre a fundação da cidade foi desmontada e as peças estão em caixas sem identificação. O foco em pensamento computacional é a Ordenação de Algoritmo (colocar eventos na sequência temporal correta). A matemática trabalha a linha do tempo e intervalos de datas. O bônus de História foca em como a cidade foi fundada."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF03CO02",
                  "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples com condição (iterações indefinidas), para resolver problemas de forma independente e em colaboração."
                ],
                [
                  "Matemática",
                  "EF03MA22",
                  "Ler e registrar medidas e intervalos de tempo, utilizando relógios e calendários (anos e décadas)."
                ],
                [
                  "História",
                  "EF03HI02",
                  "Selecionar, por meio da consulta de fontes, fatos e marcos de memória da cidade."
                ],
                [
                  "Língua Portuguesa",
                  "EF03LP12",
                  "Planejar e produzir pequenos relatos de pesquisa."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "\"Linha do Tempo Humana\" (alunos se organizam por mês de aniversário)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "As caixas bagunçadas do museu."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Ordenando as datas (Linha do tempo)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Calculando intervalos de tempo."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "A peça misteriosa (História)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de mistério e organização)",
              "texto": "Com a entrada do museu arrumada, as pessoas começaram a entrar. Mas logo reclamaram: 'Cadê a exposição sobre a fundação da nossa cidade?' O diretor levou Kyro e Kyra até o porão. Lá, havia dezenas de caixas de madeira empilhadas de qualquer jeito. — O antigo organizador guardou tudo e não deixou instruções! — lamentou o diretor. — Temos quadros, roupas antigas, ferramentas dos primeiros moradores... mas está tudo misturado! A professora Lia falou pelo rádio: — Se vocês montarem a exposição fora de ordem, a história não fará sentido. É como um algoritmo: a ordem dos comandos muda o resultado. Vocês precisam colocar tudo na linha do tempo correta!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Ordenando a História (Matemática) (8 min)",
              "contexto": "Kyro abriu quatro caixas e encontrou quatro placas com datas: 1910 (Construção da Estação), 1850 (Chegada dos Fundadores), 1980 (Primeira Fábrica) e 1930 (Inauguração da praça).",
              "proposta": "Os alunos devem ordenar as datas da mais antiga para a mais recente. O peão deve ser programado para \"visitar\" as casas correspondentes na ordem correta no tabuleiro.",
              "resolucao": "Ordem: 1850 ➔ 1910 ➔ 1930 ➔ 1980.",
              "abordagem": "Explique como ler os anos e como a linha do tempo avança. O menor número é o ano que aconteceu primeiro."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Tempo que Passou (Matemática) (10 min)",
              "contexto": "Para escrever as placas da exposição, Kyra precisa calcular quanto tempo passou entre os eventos.",
              "proposta": "Quantos anos se passaram desde a \"Chegada dos Fundadores\" (1850) até a \"Construção da Estação\" (1910)?",
              "resolucao": "1910 - 1850 = 60 anos.",
              "abordagem": "Ensine a calcular a diferença (subtração) ou contar de 10 em 10 (1860, 1870, 1880, 1890, 1900, 1910 = 6 décadas = 60 anos). Em seguida, proponha a linha do tempo das missões realizadas até agora. Devem pensar em quais locais foram visitados em cada uma delas, criar a sequência e, em seguida, organizar os blocos para conduzir o personagem na ordem correta das missões."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de caixa abrindo)",
              "texto": "Creeeck! No fundo do porão, Hélio abre uma caixa que não tem data nenhuma. Dentro, há apenas uma ponta de flecha de pedra muito antiga.",
              "proposta": "Os alunos devem discutir: de quem era essa flecha? Quem morava aqui antes mesmo dos \"fundadores\" de 1850 chegarem? Abordagem pedagógica: aborde a história indígena local. A história de um lugar geralmente começa muito antes da data oficial de fundação.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Por que é importante contar uma história (ou escrever um código) na ordem certa?",
                "Quem foram os primeiros habitantes da região onde nossa cidade fica?"
              ],
              "registro": "Desenhar a linha do tempo da sua própria vida (nascimento, primeiro dente, escola, hoje).",
              "celebracao": "\"História ordenada, exposição montada!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 08 — A biblioteca sem livros",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 8,
              "titulo": "Caso 4 — A biblioteca sem livros",
              "meta": "Semestre 1 | 3º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Os livros mais antigos da biblioteca municipal estão desaparecendo lentamente. O foco em pensamento computacional é o rastreamento de dados e a programação de sequências (seguir um padrão de movimento). A matemática trabalha com adição e contagem de passos. Os alunos programam o caminho exato que o suspeito segue pela biblioteca para descobrir onde ele esconde os livros, integrando blocos de madeira com investigação narrativa."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "—",
                  "Rastreamento de dados e sequenciamento: Seguir um padrão de movimento e programar a rota exata."
                ],
                [
                  "Matemática",
                  "EF03MA05",
                  "Resolver e elaborar problemas de adição e subtração com números naturais até 1000."
                ],
                [
                  "Língua Portuguesa",
                  "EF03LP15",
                  "Compreender a função de textos que guardam a memória e o conhecimento."
                ],
                [
                  "Língua Portuguesa",
                  "EF03LP12",
                  "Escrever relatos de investigação."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "\"Telefone sem fio\" (como a informação se perde)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "O mistério dos livros sumidos e o padrão descoberto."
                ],
                [
                  "Desafio 1 — O Caminho do Suspeito (PC + Matemática)",
                  "18 min",
                  "Programar a rota investigativa no tabuleiro."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "A pista encontrada (Português)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de suspense e descoberta)",
              "texto": "A bibliotecária-chefe entrou na Agência SkilliBlocks carregando uma prancheta vazia. — Detetives, temos um problema silencioso. A seção de História Antiga da biblioteca está ficando vazia! Ninguém arrombou a porta, ninguém roubou tudo de uma vez. Mas todo mês, um ou dois livros somem. Kyro e Kyra foram até a biblioteca. As prateleiras estavam cheias de poeira nos lugares onde os livros ficavam. — Isso é um vazamento de dados! — disse o professor Hélio pelo rádio. — Em um sistema, às vezes a informação não é apagada de uma vez, ela vai sumindo aos poucos. Kyra estudou os registros de empréstimo e descobriu algo importante: o suspeito sempre segue o mesmo caminho dentro da biblioteca! Ele entra pela entrada, vai para a Seção de História Antiga, depois para a Sala de Leitura, passa pelo Depósito e sai pela porta traseira. É como um algoritmo repetitivo! Se conseguirmos programar esse caminho, encontramos onde ele esconde os livros!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio Único Integrado — O Caminho do Suspeito (18 min)",
              "contexto": "Os detetives precisam rastrear o movimento do suspeito pela biblioteca. Cada local tem um número de casa no tabuleiro. Se conseguirem programar a rota exata e contar quantos passos o suspeito dá, descobrirão onde ele vai guardar os livros.",
              "proposta": "Estrutura do Desafio — Fase 1: Descobrir o Padrão (5 min): mostre o mapa da biblioteca na lousa com os 5 locais marcados — Casa 1: Entrada Principal; Casa 4: Seção de História Antiga (onde os livros somem); Casa 8: Sala de Leitura (onde ele fica lendo); Casa 12: Depósito (onde ele organiza); Casa 15: Saída Traseira (por onde foge). Pergunte aos alunos: \"Qual é a ordem que o suspeito segue?\" Deixe que descubram: 1 → 4 → 8 → 12 → 15. Fase 2: Programar a Rota com Blocos (10 min): os alunos precisam montar a sequência de blocos que representa o caminho — Do ponto 1 para o 4: Avançar 3 casas (Bloco \"Avançar\" × 3); Do ponto 4 para o 8: Avançar 4 casas (Bloco \"Avançar\" × 4); Do ponto 8 para o 12: Avançar 4 casas (Bloco \"Avançar\" × 4); Do ponto 12 para o 15: Avançar 3 casas (Bloco \"Avançar\" × 3); No ponto 15: Bloco \"Investigar\" (para encontrar a pista). Fase 3: Calcular o Total de Passos (Matemática — 3 min): depois que o peão chega ao final, os alunos calculam: quantos passos no total? 3 + 4 + 4 + 3 = 14 passos. O peão é movido até a casa 14, onde encontra a pista final: um recibo de alguém comprando caixas de madeira!",
              "resolucao": "Os alunos montam a sequência completa no tabuleiro e programam o peão para seguir esse caminho.",
              "abordagem": "Reforce que o suspeito segue um \"padrão\" ou \"algoritmo\" (sempre o mesmo caminho). Mostre que em programação, às vezes precisamos repetir ações (3 passos, depois 4, depois 4, depois 3). Deixe os alunos manipularem os blocos fisicamente, sentindo a sequência. Quando chegarem à casa 14, celebre: \"Encontramos a pista!\""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Fator Perturbador e Desafio Bônus (Língua Portuguesa) (7 min)",
              "contexto": "",
              "proposta": "Os alunos devem discutir: o que acontece quando perdemos livros antigos ou quando esquecemos como ler um idioma do passado? Por que é importante guardar a memória escrita de um povo?",
              "resolucao": "",
              "abordagem": "Fale sobre a importância da escrita para guardar a memória da humanidade. Sem os livros antigos, perdemos nosso passado. Isso conecta com a urgência de proteger os livros que o suspeito está levando."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de papel rasgando)",
              "texto": "Rasggg! Quando o peão chega à casa 14, ele encontra um recibo muito antigo, quase ilegível. As letras estão desbotadas e em uma caligrafia muito estranha. Ninguém consegue ler!",
              "proposta": "",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como vocês descobriram que o suspeito seguia sempre o mesmo caminho?",
                "Por que é importante rastrear padrões em uma investigação (ou em programação)?",
                "Qual é o seu livro favorito e por que você ficaria triste se ele sumisse?"
              ],
              "registro": "Desenhar o mapa da biblioteca com o caminho do suspeito marcado e a pista encontrada.",
              "celebracao": "\"Padrão rastreado, pista encontrada!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 09 — O colecionador",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 9,
              "titulo": "Caso 4 — O colecionador",
              "meta": "Semestre 1 | 3º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Os detetives rastrearam os livros até a casa de um senhor idoso: o Colecionador. Ele não estava roubando os livros por maldade, mas sim tentando \"salvá-los\" da poeira da biblioteca, organizando-os em sua própria casa. O foco em pensamento computacional é o Algoritmo de Catalogação (como classificar e organizar dados). A matemática trabalha combinações e organização espacial (multiplicação). O desafio bônus foca na organização de bibliotecas."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF03CO03",
                  "Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções."
                ],
                [
                  "Matemática",
                  "EF03MA07",
                  "Resolver problemas envolvendo diferentes significados da multiplicação (disposição retangular e combinatória)."
                ],
                [
                  "Língua Portuguesa",
                  "EF03LP12",
                  "Escrever e organizar informações."
                ],
                [
                  "Artes / História",
                  "EF15AR04",
                  "Compreender espaços de conservação (bibliotecas e museus)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Dinâmica de classificação (separar objetos por cor/tamanho)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "A descoberta da casa do Colecionador."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Multiplicação: O tamanho da estante."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Combinações: Formas de organizar."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "A devolução dos livros (Organização)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de descoberta e alívio)",
              "texto": "Usando o padrão matemático que descobriram, Kyro e Kyra conseguiram prever quando o suspeito voltaria. Eles o seguiram até um casarão antigo. Ao entrar, não encontraram um vilão, mas sim o Sr. Amadeu, um velhinho apaixonado por livros. A casa dele era uma biblioteca gigante! — Eu não roubei os livros! — disse o Sr. Amadeu, assustado. — Eu estava pegando emprestado aos poucos porque achei que a biblioteca não estava cuidando bem deles. Eu limpei, encapei e cataloguei todos! A professora Lia explicou pelo rádio que, mesmo com boa intenção, os livros pertencem à cidade e precisam voltar. Mas antes, eles precisam entender como o Sr. Amadeu organizou (catalogou) tudo."
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Tamanho da Estante (Matemática) (8 min)",
              "contexto": "O Sr. Amadeu construiu uma estante especial só para os livros da biblioteca. Ela é perfeitamente retangular.",
              "proposta": "A estante tem 5 prateleiras. Em cada prateleira cabem exatamente 8 livros. Quantos livros cabem na estante inteira?",
              "resolucao": "5 × 8 = 40 livros.",
              "abordagem": "Explore a disposição retangular da multiplicação (linhas × colunas)."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — As Combinações de Capas (Matemática) (10 min)",
              "contexto": "Para proteger os livros na viagem de volta, o Sr. Amadeu fez capas de couro. Ele tem 3 cores de couro (marrom, preto, vermelho) e 2 tipos de fecho (botão, fita).",
              "proposta": "Quantas combinações diferentes de capas ele pode fazer usando 1 cor de couro e 1 tipo de fecho?",
              "resolucao": "3 × 2 = 6 combinações diferentes.",
              "abordagem": "Faça o desenho na lousa ligando as cores aos fechos (ideia de árvore de possibilidades ou combinatória). Os alunos devem então programar o percurso de volta com os blocos, testar e comparar quem fez o caminho mais curto."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de livros caindo)",
              "texto": "PÁ! BUM! Kyro tropeçou e derrubou uma caixa cheia de livros misturados! Estão todos fora de ordem!",
              "proposta": "Os alunos devem discutir: como os livros são organizados em uma biblioteca de verdade para que qualquer pessoa consiga encontrá-los? Abordagem pedagógica: explique que bibliotecas não organizam livros por cor ou tamanho, mas sim por assunto, autor e ordem alfabética. Isso é \"catalogar dados\".",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Por que organizar as coisas (dados, brinquedos, livros) ajuda no nosso dia a dia?",
                "O Sr. Amadeu estava certo em levar os livros para 'salvar' a história?"
              ],
              "registro": "Desenhar a estante do Sr. Amadeu e escrever como ele organizava os livros.",
              "celebracao": "\"Livros catalogados, caso encerrado!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 10 — Revisão no quartel general",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 10,
              "titulo": "Revisão no quartel general (avaliação intermediária 1)",
              "meta": "Semestre 1 | 3º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Chegamos à metade do semestre! Esta aula é uma Avaliação Intermediária disfarçada de um grande desafio narrativo. O sistema do Quartel General da Agência SkilliBlocks sofreu um \"apagão\" e os detetives precisam usar tudo o que aprenderam nos Casos 1 a 4 para religar os computadores. O foco é revisar sequenciamento, debugging, multiplicação, divisão e as disciplinas bônus (História e Geografia) trabalhadas até aqui."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF03CO03",
                  "Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções."
                ],
                [
                  "Matemática",
                  "EF03MA07 / EF03MA08",
                  "Revisar problemas envolvendo adição, subtração, multiplicação e divisão."
                ],
                [
                  "Interdisciplinar",
                  "Múltiplas",
                  "Revisar conceitos de patrimônio, mapas e memória escrita."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Dinâmica \"Memória de Detetive\" (relembrar os casos)."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "O apagão no Quartel General."
                ],
                [
                  "Desafio 1 — Matemática",
                  "10 min",
                  "Revisão: Multiplicação e Divisão (Religando a energia)."
                ],
                [
                  "Desafio 2 — Lógica",
                  "10 min",
                  "Revisão: Debugging (O caminho do servidor)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "5 min",
                  "A senha interdisciplinar."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com voz de alerta e urgência)",
              "texto": "Atenção, Agência SkilliBlocks! Estava tudo tranquilo no Quartel General quando, de repente... FIZZZZ! As luzes piscaram e todos os computadores desligaram! A professora Lia correu com uma lanterna. — Foi uma queda de energia! O sistema de segurança bloqueou tudo. Para religar o computador central e não perder os dados dos casos que já resolvemos, precisamos provar que somos os verdadeiros detetives da agência. O professor Hélio apontou para a tela de emergência. — O sistema está pedindo para resolvermos desafios baseados nas nossas últimas missões. É um teste de memória e lógica!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Religando a Energia (Revisão de Matemática) (10 min)",
              "contexto": "Para religar a energia, Kyro precisa digitar os códigos corretos nos painéis de força.",
              "proposta": "O professor escreve no quadro 4 contas rápidas que revisam o que aprenderam: 1) (Caso 1) 3 grupos de 3 pegadas = ? (12); 2) (Caso 1) 15 dias divididos para 3 restauradores = ? (5); 3) (Caso 2) 4 casas de 10 metros = ? (40); 4) (Caso 4) 30 livros em 5 caixas = ? (6).",
              "resolucao": "Os alunos devem resolver as contas em grupo. A soma de todas as respostas (12 + 5 + 40 + 6) é a senha da energia: 63. O peão deve ir até a casa 63.",
              "abordagem": "Deixe que os alunos consultem os Diários de Bordo antigos. Esta é uma avaliação formativa para ver se fixaram os conceitos."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Caminho do Servidor (Revisão de Debugging) (10 min)",
              "contexto": "A energia voltou, mas a conexão de rede está com \"bug\". Kyra precisa programar o caminho do sinal até o servidor central.",
              "proposta": "O professor monta um caminho no tabuleiro com 2 obstáculos. O código na lousa tem um erro proposital que bate no obstáculo.",
              "resolucao": "Os alunos devem identificar o bloco errado, substituí-lo e programar o peão para chegar ao servidor desviando dos obstáculos.",
              "abordagem": "Avalie a capacidade de leitura espacial e correção de erros (debugging)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Faça som de bipe contínuo)",
              "texto": "BIP! BEEP! O computador central ligou, mas pede uma 'Palavra-Chave de Segurança' baseada nos conhecimentos gerais da agência!",
              "proposta": "O professor faz 3 perguntas rápidas: 1) O que é uma estátua velha que conta a história da cidade? (Patrimônio); 2) O que usamos para não nos perdermos nas ruas? (Mapa); 3) Onde guardamos a memória escrita da cidade? (Biblioteca). Abordagem pedagógica: reforce como a investigação de um detetive envolve várias disciplinas. Também é uma boa oportunidade para falar sobre senhas de segurança, explicando a importância de manter seus dados seguros.",
              "tempo": "5 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Qual dos 4 casos que resolvemos até agora foi o mais difícil? E o mais divertido?",
                "Por que é importante revisar o que já aprendemos?"
              ],
              "registro": "Desenhar o emblema da Agência brilhando depois que a energia voltou.",
              "celebracao": "\"Sistema online, detetives nota 10!\""
            }
          ]
        ]
      }
    ]
  },
  "4": {
    "nome": "4º Ano",
    "aulas": [
      {
        "titulo": "Aula 01 — A máquina do tempo",
        "paginas": [
          [
            {
              "tipo": "sumario",
              "itens": [
                {
                  "n": 1,
                  "titulo": "A máquina do tempo",
                  "pc": "Sequenciamento (Início, Avançar, Virar, Ação, Fim)",
                  "desc": "Ordenação de datas na linha do tempo (1500, 1822, 1888, 2024) e cálculo da diferença entre anos (2024 − 1500 = 524 anos). Desafio bônus de Português: escrever ou desenhar para qual ano viajariam."
                },
                {
                  "n": 2,
                  "titulo": "O Brasil antes do Brasil",
                  "pc": "Diferentes Linguagens (o mesmo comando expresso de formas diferentes) e bloco de Repetição",
                  "desc": "Frações como partes de um todo (2/4) e frações equivalentes (4/8 = 1/2). Desafio bônus de História: reflexão sobre a palavra 'descobrimento'."
                },
                {
                  "n": 3,
                  "titulo": "O conhecimento da floresta",
                  "pc": "Banco de Dados e Otimização (caminho mais rápido) com bloco de Repetição (Loop)",
                  "desc": "Frações equivalentes (1/2 = 2/4) e representação visual de frações. Desafio bônus de Ciências: desenhar a planta medicinal e inventar um nome científico."
                },
                {
                  "n": 4,
                  "titulo": "As caravelas no horizonte",
                  "pc": "Perspectiva do Algoritmo (o mesmo comando com sentidos opostos)",
                  "desc": "Malhas quadriculadas e coordenadas: distância entre pontos e ponto de encontro. Desafio bônus de História: escrever duas legendas diferentes para o mesmo evento histórico."
                },
                {
                  "n": 5,
                  "titulo": "O primeiro contato",
                  "pc": "Condicionais (Se/Então/Senão) e Tradução entre Sistemas",
                  "desc": "Multiplicação em contextos de proporção e de massa (kg). Desafio bônus de História: o valor cultural dos objetos trocados."
                },
                {
                  "n": 6,
                  "titulo": "A mata vira canavial",
                  "pc": "Efeitos Colaterais do Algoritmo",
                  "desc": "Multiplicação com organização retangular (área plantada) e produção. Desafio bônus de Geografia: a rota marítima do Brasil até a Europa."
                },
                {
                  "n": 7,
                  "titulo": "Os navios negreiros",
                  "pc": "Erro Crítico do Sistema (segurança, ética e direitos fundamentais)",
                  "desc": "Leitura de números grandes e decomposição numérica. Desafio bônus de História: a diversidade dos povos africanos."
                },
                {
                  "n": 8,
                  "titulo": "As línguas que sobreviveram",
                  "pc": "Criptografia",
                  "desc": "Frações associadas à resistência cultural e ao ritmo musical. Desafio bônus de Artes: manifestações culturais (Capoeira, Jongo, Samba)."
                },
                {
                  "n": 9,
                  "titulo": "Palmares: A república livre",
                  "pc": "Sistema Alternativo",
                  "desc": "Coordenadas cartesianas para localizar Palmares e traçar a rota de fuga. Desafio bônus de História: conhecer Zumbi e Dandara dos Palmares."
                },
                {
                  "n": 10,
                  "titulo": "Diário de viagem",
                  "pc": "Análise Sistêmica e Revisão (avaliação)",
                  "desc": "Revisão de frações e de operações (adição e subtração). Desafio bônus de Português: escrever um parágrafo de síntese sobre o evento favorito."
                }
              ]
            }
          ],
          [
            {
              "tipo": "orientacoes",
              "paragrafos": [
                "\"De Volta ao Passado: As Origens do Brasil\" é um jogo físico de blocos de madeira, desenvolvido para alunos do 4º ano do Ensino Fundamental. O material integra o ensino de lógica de programação e pensamento computacional com as habilidades matemáticas da BNCC, tudo dentro de uma narrativa histórica envolvente protagonizada pelos mascotes da Skilliu.",
                "A proposta é 100% desplugada (sem telas), estimulando o aprendizado tátil, colaborativo e narrativo. As crianças manipulam blocos de madeira encaixáveis para construir algoritmos físicos e, ao mesmo tempo, resolvem desafios matemáticos e interdisciplinares contextualizados na história de Kyro e Kyra, que viajam no tempo para desvendar as origens do Brasil."
              ],
              "destaque": "<strong>Faixa etária:</strong> 9 a 10 anos (4º Ano do Ensino Fundamental)<br><strong>Número de jogadores:</strong> 2 a 4 alunos por grupo<br><strong>Duração de cada sessão:</strong> 50 minutos<br><strong>Total de missões:</strong> 20 (alinhadas ao semestre letivo)"
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Objetivos de Aprendizagem",
              "instrucao": "",
              "texto": "O jogo foi concebido para desenvolver competências em duas dimensões complementares: o Pensamento Computacional e as Habilidades da BNCC para o 4º ano, com foco principal em Matemática e Língua Portuguesa (leitura e escrita do Diário de Bordo), além de conexões com História, Geografia, Ciências e Artes.<br><br><strong>Pensamento Computacional — BNCC da Computação.</strong> O jogo desenvolve as seguintes capacidades ao longo das 20 missões:"
            },
            {
              "tipo": "tabela",
              "legenda": "Pensamento Computacional — Conceitos por Missão",
              "colunas": [
                "Conceito",
                "Missões Relacionadas",
                "Descrição"
              ],
              "linhas": [
                [
                  "Sequenciamento",
                  "Missões 1, 2",
                  "Ordenar instruções para programar a máquina do tempo e explorar novas épocas."
                ],
                [
                  "Diferentes Linguagens",
                  "Missão 2",
                  "Compreender que o mesmo comando pode ser expresso de formas diferentes (povos originários)."
                ],
                [
                  "Banco de Dados",
                  "Missão 3",
                  "Organizar e recuperar conhecimento de forma eficiente (saberes da floresta)."
                ],
                [
                  "Perspectiva do Algoritmo",
                  "Missão 4",
                  "Entender que o mesmo programa pode ter resultados diferentes dependendo de quem o executa."
                ],
                [
                  "Tradução entre Sistemas",
                  "Missão 5",
                  "Converter um comando de uma linguagem para outra durante o primeiro contato."
                ],
                [
                  "Efeitos Colaterais",
                  "Missão 6",
                  "Entender que uma ação que resolve um problema pode criar outros (ciclo do açúcar)."
                ],
                [
                  "Erro Crítico do Sistema",
                  "Missão 7",
                  "Reconhecer quando um algoritmo viola valores fundamentais e precisa ser interrompido."
                ],
                [
                  "Criptografia",
                  "Missão 8",
                  "Esconder uma mensagem dentro de outra para protegê-la (resistência cultural)."
                ],
                [
                  "Sistema Alternativo",
                  "Missão 9",
                  "Criar um programa que funciona fora das regras do sistema principal (Palmares)."
                ],
                [
                  "Colaboração e Regras",
                  "Missão 11",
                  "Entender como dois sistemas diferentes podem trabalhar juntos (Missões Jesuítas)."
                ],
                [
                  "Algoritmo de Rotas",
                  "Missão 12",
                  "Encontrar o caminho mais eficiente num território sem estradas (Tropeiros)."
                ],
                [
                  "Custo Computacional",
                  "Missão 13",
                  "Avaliar se toda operação vale o custo (Ciclo do Ouro)."
                ],
                [
                  "Algoritmos Distribuídos",
                  "Missão 14",
                  "Entender o mesmo problema sendo resolvido de formas diferentes (Quilombos)."
                ],
                [
                  "Permissões e Acessos",
                  "Missão 15",
                  "Verificar quem tem acesso ao programa e seus privilégios (Independência)."
                ],
                [
                  "Recuperação de Dados",
                  "Missão 16",
                  "Encontrar informações que foram apagadas do sistema (vozes esquecidas)."
                ],
                [
                  "Integração de Sistemas",
                  "Missão 17",
                  "Compreender como múltiplos algoritmos se combinam para formar um sistema maior."
                ],
                [
                  "O Programa Muda o Usuário",
                  "Missão 18",
                  "Entender que aprender programação muda a forma de pensar (reflexos no presente)."
                ],
                [
                  "Análise Sistêmica",
                  "Missões 10, 19",
                  "Revisar e conectar todos os algoritmos para entender o sistema completo."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Matemática (BNCC)",
              "instrucao": "",
              "texto": "As missões conectam-se a habilidades matemáticas do 4º ano, focando em operações, geometria, grandezas e frações. Além disso, os desafios bônus trazem conteúdos de outras disciplinas."
            },
            {
              "tipo": "tabela",
              "legenda": "Habilidades da BNCC (Matemática e Interdisciplinar)",
              "colunas": [
                "Habilidade",
                "Missões Relacionadas"
              ],
              "linhas": [
                [
                  "Ordenação de números e cálculo de intervalos (EF04MA01)",
                  "1, 16"
                ],
                [
                  "Frações: partes de um todo (EF04MA09)",
                  "2, 8"
                ],
                [
                  "Frações equivalentes (EF04MA09)",
                  "3, 11, 13, 17"
                ],
                [
                  "Coordenadas e localização no plano (EF04MA16)",
                  "4, 9, 14"
                ],
                [
                  "Equivalência e troca (EF04MA20)",
                  "5"
                ],
                [
                  "Multiplicação e problemas de contagem (EF04MA06)",
                  "6"
                ],
                [
                  "Números grandes e estimativas (EF04MA01)",
                  "7"
                ],
                [
                  "Distância e tempo (EF04MA22)",
                  "12"
                ],
                [
                  "Porcentagem intuitiva (EF04MA09)",
                  "15"
                ],
                [
                  "Resolução de problemas do cotidiano (EF04MA26)",
                  "18"
                ],
                [
                  "Resolução de problemas de múltiplas etapas",
                  "10, 19"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Componentes do Jogo — Tabuleiro, Personagens e Blocos",
              "instrucao": "",
              "texto": "<strong>1. Tabuleiro da Linha do Tempo</strong><br>O tabuleiro é um tapete ou painel modular dividido em uma grade, onde os personagens se movem para investigar as diferentes épocas. O cenário ilustra os principais momentos da narrativa: <strong>A Torre de Comando:</strong> ponto de partida no presente, onde Hélio construiu a máquina do tempo. <strong>A Aldeia Tupi e a Floresta:</strong> cenários do Brasil antes de 1500. <strong>O Litoral Baiano:</strong> o local do encontro entre indígenas e as caravelas de Cabral. <strong>O Canavial e o Engenho:</strong> cenários das transformações econômicas e da escravidão. <strong>O Quilombo dos Palmares:</strong> a representação da resistência e organização alternativa. <strong>As Missões Jesuítas e as Rotas Tropeiras:</strong> a expansão e interiorização do Brasil. <strong>As Cidades Históricas de Minas:</strong> o cenário do ciclo do ouro.<br><br><strong>2. Personagens</strong><br>O jogo inclui quatro personagens: <strong>Kyro:</strong> o aluno explorador, menino esquilo verde, equipado com mochila e óculos. <strong>Kyra:</strong> a aluna exploradora, menina esquilo verde, sempre com um lápis na orelha para registrar as descobertas. <strong>Hélio:</strong> o professor cientista que construiu a máquina do tempo. <strong>Lia:</strong> a professora que orienta os exploradores, organizando o contexto histórico. <strong>Planta Veridia:</strong> elemento que aparece em momentos estratégicos para fornecer energia.<br><br><strong>3. Blocos de Programação</strong><br>Os blocos de madeira possuem encaixes fáceis e ícones intuitivos. Para o 4º ano, os blocos introduzem conceitos de programação alinhados à complexidade da narrativa histórica. <strong>Movimento (Azul):</strong> Avançar, Virar à Direita, Virar à Esquerda, Viajar no Tempo. <strong>Ação (Amarelo):</strong> Traduzir, Decodificar, Interagir, Coletar Recurso. <strong>Controle (Verde e Laranja):</strong> Início, Fim, Repetir (Loop), Se/Então (Condicional), Interromper Sistema."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Material do Aluno e do Professor",
              "instrucao": "",
              "texto": "<strong>4. Material do Aluno</strong><br>Cartas de Missão (Diário de Bordo): cada aula possui um \"Registro de Viagem\", contendo a narrativa da época, a missão de programação e os desafios matemáticos e interdisciplinares. Diário de Reflexão: folha onde o aluno anota as descobertas históricas, desenha ou escreve a solução da missão, registra seu código de blocos e faz a reflexão final (o que aprendeu, o que mais gostou e o que achou difícil).<br><br><strong>5. Material do Professor</strong><br>O Kit do Professor inclui o plano de aula detalhado, as resoluções visuais dos algoritmos e desafios matemáticos, orientações para a leitura dramática do storytelling e peças magnéticas/adesivas para demonstração na lousa."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Mecânica e Regras do Jogo",
              "instrucao": "",
              "texto": "<strong>Mecânica e Regras do Jogo (Aulas de 50 minutos)</strong><br>A estrutura de cada aula segue um fluxo dinâmico:<br><br><strong>1. Storytelling Inicial (10 min):</strong> o educador lê o Registro de Viagem com entonação dramática. Apresenta a época visitada e o desafio histórico enfrentado por Kyro e Kyra.<br><br><strong>2. Exploração e Planejamento (10 min):</strong> os alunos, em grupos, discutem como resolver o desafio no tabuleiro e resolvem os desafios matemáticos que desbloqueiam as ações na máquina do tempo.<br><br><strong>3. Programação Física (15 min):</strong> utilizando os blocos de madeira, os alunos montam o algoritmo para guiar os exploradores. Em algumas missões, ocorre o Fator Perturbador (um evento histórico inesperado que exige rápida adaptação do código).<br><br><strong>4. Execução e Depuração (10 min):</strong> um aluno atua como \"computador\", movendo o peão. Se houver erro, o grupo faz o debugging.<br><br><strong>5. Reflexão e Celebração (5 min):</strong> preenchimento do Diário de Reflexão (foco em Língua Portuguesa) e celebração da conquista do conhecimento daquela época."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "As 20 Missões: Narrativa, Programação e Matemática",
              "instrucao": "",
              "texto": "A seguir, apresentamos o mapeamento completo das 20 missões do semestre, organizadas pelo arco narrativo."
            },
            {
              "tipo": "tabela",
              "legenda": "Arco 1: A Máquina do Tempo e o Brasil antes do Brasil (Aulas 1 a 7)",
              "colunas": [
                "Missão",
                "Título da Aventura",
                "Conceito de PC",
                "Desafios de Matemática (BNCC)",
                "Desafio Bônus"
              ],
              "linhas": [
                [
                  "1",
                  "A Máquina do Tempo (Introdutória)",
                  "Sequenciamento",
                  "Linha do tempo e cálculo de intervalos",
                  "Português: Escrever época desejada"
                ],
                [
                  "2",
                  "O Brasil Antes do Brasil",
                  "Diferentes Linguagens",
                  "Frações: divisão de territórios",
                  "História: Diversidade dos povos originários"
                ],
                [
                  "3",
                  "O Conhecimento da Floresta",
                  "Banco de Dados",
                  "Frações equivalentes",
                  "Ciências: Plantas medicinais indígenas"
                ],
                [
                  "4",
                  "As Caravelas no Horizonte",
                  "Perspectiva do Algoritmo",
                  "Coordenadas no mapa do litoral",
                  "História: O \"descobrimento\" sob duas visões"
                ],
                [
                  "5",
                  "O Primeiro Contato",
                  "Tradução entre Sistemas",
                  "Troca e equivalência (escambo)",
                  "História: Como funcionava o escambo"
                ],
                [
                  "6",
                  "A Mata Vira Canavial",
                  "Efeitos Colaterais",
                  "Multiplicação (área e produção)",
                  "Geografia: Rotas marítimas do açúcar"
                ],
                [
                  "7",
                  "Os Navios Negreiros",
                  "Erro Crítico do Sistema",
                  "Números grandes (estimativas populacionais)",
                  "História: Origem dos povos africanos"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Arco 2: O Encontro de Mundos e suas Consequências (Aulas 8 a 14)",
              "colunas": [
                "Missão",
                "Título da Aventura",
                "Conceito de PC",
                "Desafios de Matemática (BNCC)",
                "Desafio Bônus"
              ],
              "linhas": [
                [
                  "8",
                  "As Línguas que Sobreviveram",
                  "Criptografia",
                  "Frações: sobrevivência cultural",
                  "Artes: Arte como resistência (capoeira, jongo)"
                ],
                [
                  "9",
                  "Palmares: A República Livre",
                  "Sistema Alternativo",
                  "Coordenadas e localização",
                  "História: Zumbi dos Palmares"
                ],
                [
                  "10",
                  "Diário de Viagem",
                  "Avaliação Intermediária 1",
                  "Revisão de operações e frações",
                  "Síntese histórica das viagens"
                ],
                [
                  "11",
                  "As Missões Jesuítas",
                  "Colaboração com Regras",
                  "Frações equivalentes na organização",
                  "Artes: Arquitetura das Missões"
                ],
                [
                  "12",
                  "Tropeiros e Estradas de Terra",
                  "Algoritmo de Rotas",
                  "Distância e tempo de viagem",
                  "Geografia: Rotas tropeiras e cidades"
                ],
                [
                  "13",
                  "O Ouro de Minas",
                  "Custo Computacional",
                  "Frações e equivalências (valor do ouro)",
                  "Artes: O Barroco Mineiro e Aleijadinho"
                ],
                [
                  "14",
                  "Quilombos pelo Brasil",
                  "Algoritmos Distribuídos",
                  "Coordenadas (mapear quilombos)",
                  "História: Comunidades quilombolas atuais"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Arco 3: Resistência, Identidade e o que nos formou (Aulas 15 a 20)",
              "colunas": [
                "Missão",
                "Título da Aventura",
                "Conceito de PC",
                "Desafios de Matemática (BNCC)",
                "Desafio Bônus"
              ],
              "linhas": [
                [
                  "15",
                  "A Independência que Não Foi de Todos",
                  "Permissões e Acessos",
                  "Porcentagem intuitiva da população",
                  "História: Perspectivas da Independência"
                ],
                [
                  "16",
                  "As Vozes que a História Esqueceu",
                  "Recuperação de Dados",
                  "Linha do tempo (inserir personagens)",
                  "Português: Escrever sobre heróis esquecidos"
                ],
                [
                  "17",
                  "As Raízes de Quem Somos",
                  "Integração de Sistemas",
                  "Frações equivalentes (formação do povo)",
                  "Artes: Colagem da mistura cultural"
                ],
                [
                  "18",
                  "De Volta ao Presente",
                  "O Programa Muda o Usuário",
                  "Resolução de problemas do cotidiano",
                  "História: Heranças culturais no dia a dia"
                ],
                [
                  "19",
                  "O Grande Relatório da Viagem",
                  "Avaliação Intermediária 2",
                  "Revisão completa de matemática",
                  "Conexões históricas entre épocas"
                ],
                [
                  "20",
                  "Somos Todas as Épocas",
                  "Celebração",
                  "(Atividade lúdica e reflexiva)",
                  "Apresentação do personagem histórico favorito"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Orientações para o Educador",
              "instrucao": "",
              "texto": "O papel do educador é ser o \"Guia Temporal\", facilitando a exploração e estimulando o pensamento crítico sobre a história do Brasil.<br><br><strong>Preparação:</strong> leia o Registro de Viagem previamente. Organize os blocos e o tabuleiro da linha do tempo.<br><br><strong>Narrativa:</strong> a imersão é crucial. Use tom de aventura e descoberta durante a leitura da época. Se houver um \"Fator Perturbador\", crie senso de urgência.<br><br><strong>Mediação:</strong> não dê as respostas. Se os alunos errarem o algoritmo, incentive o debugging: \"Onde será que a nossa máquina do tempo falhou?\".<br><br><strong>Interdisciplinaridade:</strong> aproveite os Desafios Bônus para conectar a aula com o que os alunos estão aprendendo em História e Geografia. Enfatize as diferentes perspectivas históricas.<br><br><strong>Diário de Reflexão:</strong> valorize o momento final da escrita. É a oportunidade de trabalhar a Língua Portuguesa de forma significativa, onde o aluno relata sua experiência e aprendizado.<br><br>Material desenvolvido pela Skilliu. Todos os direitos reservados. Personagens Kyro, Kyra, Lia e Hélio são propriedade intelectual da Skilliu."
            }
          ],
          [
            {
              "tipo": "aula-header",
              "n": 1,
              "titulo": "A máquina do tempo",
              "meta": "Semestre 1 | 4º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Foco da Aula: Sequenciamento. Materiais Necessários: Tabuleiro da Linha do Tempo, Blocos de Madeira, Kit do Aluno impresso, Lápis/Cores.."
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "Sequenciamento",
                  "Ordenar instruções para programar a máquina do tempo e explorar novas épocas."
                ],
                [
                  "Matemática",
                  "EF04MA01",
                  "Ler, escrever e ordenar números naturais até a ordem de dezenas de milhar."
                ],
                [
                  "Matemática",
                  "EF04MA03",
                  "Resolver e elaborar problemas com números naturais envolvendo adição e subtração."
                ],
                [
                  "Português",
                  "EF04LP05",
                  "Produzir textos de diferentes gêneros, considerando a situação comunicativa."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Recepção dos alunos e organização em grupos/duplas. Pergunta norteadora: \"Se vocês pudessem viajar para qualquer época do passado ou do futuro, para onde iriam?\""
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "A Invenção do Professor Hélio."
                ],
                [
                  "Atividade de Blocos (Obrigatório)",
                  "12 min",
                  "Levar Kyro e Kyra da Torre de Comando até a Máquina do Tempo e ativá-la."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "Organizando o Tempo (EF04MA01)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "7 min",
                  "Calculando a Viagem (EF04MA03)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "4 min",
                  "Falta de Energia e o destino mentalizado (Português)."
                ],
                [
                  "Reflexão e Celebração",
                  "7 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Leia com entusiasmo, fazendo pausas para manter a atenção)",
              "texto": "Atenção, exploradores! O professor Hélio passou os últimos anos trancado na torre de comando trabalhando em um projeto ultrassecreto. Hoje, ele finalmente revelou o que é: uma Máquina do Tempo! Ela é cheia de engrenagens, mapas antigos e um painel com datas misteriosas. Hélio explica que a história do Brasil é muito mais profunda do que imaginamos e que, para entendê-la, Kyro e Kyra precisarão vivê-la. A primeira viagem está prestes a começar, mas a máquina precisa ser programada corretamente!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (30 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Organizando o Tempo (EF04MA01) (19 min)",
              "contexto": "",
              "proposta": "Atividade de Blocos — Missão (Obrigatório, 12 min): levar Kyro e Kyra da Torre de Comando até a Máquina do Tempo e ativá-la. Posicione o personagem Kyro no tabuleiro na coordenada da Torre de Comando. O objetivo é chegar na Máquina do Tempo e usar o bloco de Ação. Peça aos alunos que planejem o caminho usando os blocos físicos de movimento e ação. Algoritmo esperado: [INÍCIO] > [AVANÇAR] > [VIRAR DIREITA/ESQUERDA] > [AVANÇAR] > [AÇÃO] > [FIM] (o trajeto exato depende do tabuleiro específico). Mediação: se um aluno errar, não dê a resposta. Pergunte: \"Para qual lado o Kyro está olhando agora? Se ele avançar, onde vai parar?\" — Distribua o Kit do Aluno. Peça para lerem as datas e pensarem em como organizá-las na linha do tempo.",
              "resolucao": "1500 - 1822 - 1888 - 2024.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Calculando a Viagem (EF04MA03) (7 min)",
              "contexto": "",
              "proposta": "Explique que para viajar no tempo, precisamos calcular a diferença entre o ano de partida e o de chegada. Mostre como armar a conta de subtração.",
              "resolucao": "2024 - 1500 = 524 anos.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Simule uma falha de energia)",
              "texto": "Falta de Energia! A máquina do tempo precisa de um destino final mentalizado pelos viajantes para conseguir ligar os motores.",
              "proposta": "Desafio Bônus (Português): escrever ou desenhar para qual ano viajariam e o motivo. Abordagem: incentive a criatividade. Não há resposta errada, o importante é a argumentação.",
              "tempo": "4 min"
            }
          ],
          [
            {
              "tipo": "reflexao",
              "perguntas": [
                "Quem quer compartilhar o ano que escolheu para viajar?"
              ],
              "registro": "Peça aos alunos que preencham o Diário de Bordo no Kit do Aluno.",
              "celebracao": "1, 2, 3... Guardiões da Memória!"
            }
          ]
        ]
      },
      {
        "titulo": "Aula 02 — O Brasil antes do Brasil",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 2,
              "titulo": "O Brasil antes do Brasil",
              "meta": "Semestre 1 | 4º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Foco da Aula: Diferentes Linguagens. Materiais Necessários: Tabuleiro da Linha do Tempo, Blocos de Madeira, Kit do Aluno impresso, Lápis/Cores.."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "Diferentes Linguagens",
                  "Compreender que o mesmo comando pode ser expresso de formas diferentes."
                ],
                [
                  "Matemática",
                  "EF04MA09",
                  "Reconhecer as frações unitárias mais usuais como unidades de medida menores do que uma unidade."
                ],
                [
                  "Matemática",
                  "EF04MA09",
                  "Ler e escrever frações (partes de um todo)."
                ],
                [
                  "História",
                  "EF04HI01",
                  "Reconhecer a história como resultado da ação do ser humano no tempo e no espaço, com base na identificação de mudanças e permanências ao longo do tempo."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Relembrar que a máquina do tempo foi ligada na última aula. Pergunta norteadora: \"Quem morava no Brasil antes dos portugueses chegarem nas caravelas?\""
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "A Chegada na Aldeia."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "A Colheita de Mandioca (EF04MA09)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "7 min",
                  "Repartindo a Terra (EF04MA09)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "4 min",
                  "Visitantes desconhecidos, a ronda da oca e o \"descobrimento\" (História)."
                ],
                [
                  "Reflexão e Celebração",
                  "7 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Leia com entusiasmo, fazendo pausas para manter a atenção)",
              "texto": "ZUUUM! A máquina do tempo aterrissa. Kyro e Kyra abrem a porta e encontram uma imensa floresta. Estamos muito antes do ano 1500! O território que hoje chamamos de Brasil já era habitado por centenas de povos diferentes, cada um com sua língua, sua arte e suas regras. A dupla chega perto de uma aldeia Tupi. Para fazer amigos, eles precisam aprender a se comunicar e entender como aquele povo divide o espaço da aldeia."
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (18 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Colheita de Mandioca (EF04MA09) (7 min)",
              "contexto": "",
              "proposta": "Introduza o conceito de frações como partes de um todo. Mostre visualmente o círculo dividido em 4.",
              "resolucao": "Pintar 2 fatias do círculo. Fração: 2/4.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Repartindo a Terra (EF04MA09) (7 min)",
              "contexto": "",
              "proposta": "Avance para o conceito de frações equivalentes de forma intuitiva. Se 4 de 8 pedaços são usados, isso é a mesma coisa que a metade.",
              "resolucao": "Fração das ocas: 4/8. Fração equivalente: 1/2.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Simule a chegada de visitantes com uma voz diferente)",
              "texto": "Visitantes Desconhecidos! Indígenas de outra nação chegam e não falam Tupi. O Brasil não era um país único, mas um continente de várias nações. Kyro e Kyra vão dormir em uma oca, que será vigiada por um dos guerreiros tupis. Os alunos são desafiados a criar a rota para fazer a ronda em volta da oca. Peça aos alunos para observarem o tabuleiro e criar o algoritmo com os blocos para que façam um quadrado em volta da oca. Reflita se há alguma forma de fazer o mesmo trajeto com menos blocos (oportunidade de utilizar o bloco repetir x). Início > repetir 4x > avance > avance > vire à direita > fim repetir > fim.",
              "proposta": "Desafio Bônus (História): refletir sobre a palavra \"descobrimento\". Abordagem: promova um rápido debate. O Brasil foi invadido, encontrado, conquistado? Valorize as respostas que reconhecem a existência prévia dos povos originários.",
              "tempo": "4 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que vocês acham que os indígenas pensaram quando viram o Kyro e a Kyra?"
              ],
              "registro": "Peça aos alunos que preencham o Diário de Bordo no Kit do Aluno.",
              "celebracao": "1, 2, 3... Guardiões da Memória!"
            }
          ]
        ]
      },
      {
        "titulo": "Aula 03 — O conhecimento da floresta",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 3,
              "titulo": "O conhecimento da floresta",
              "meta": "Semestre 1 | 4º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Foco da Aula: Banco de Dados e Otimização. Materiais Necessários: Tabuleiro da Linha do Tempo, Blocos de Madeira, Kit do Aluno impresso, Lápis/Cores.."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "Banco de Dados",
                  "Organizar e recuperar conhecimento de forma eficiente (caminho otimizado)."
                ],
                [
                  "Matemática",
                  "EF04MA09",
                  "Reconhecer frações equivalentes."
                ],
                [
                  "Matemática",
                  "EF04MA09",
                  "Ler e escrever frações (partes de um todo)."
                ],
                [
                  "Ciências",
                  "EF04CI04",
                  "Analisar e construir cadeias alimentares, reconhecendo a posição ocupada pelos seres vivos (contexto de natureza)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Pergunta norteadora: \"Vocês conhecem algum chá ou planta que a avó de vocês usa quando vocês estão doentes?\""
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "O Segredo do Ancião."
                ],
                [
                  "Atividade de Blocos (Obrigatório)",
                  "12 min",
                  "Programar Kyra para navegar pela floresta e coletar a planta medicinal."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "A Receita do Ancião (EF04MA09)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "7 min",
                  "Misturando a Poção (EF04MA09)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "4 min",
                  "A árvore caída e a planta medicinal (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "7 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Leia com entusiasmo, fazendo pausas para manter a atenção)",
              "texto": "Kyro e Kyra estão maravilhados com a aldeia. Eles percebem que os indígenas possuem um conhecimento gigante sobre a natureza: sabem os ciclos das chuvas, como plantar sem destruir a terra e conhecem plantas que curam doenças. Um ancião os ensina que a memória é o maior tesouro deles. De repente... AI! Kyro toca em uma planta estranha com espinhos e sua mão começa a inchar rapidamente! Precisamos encontrar a cura!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (30 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Receita do Ancião (EF04MA09) (19 min)",
              "contexto": "",
              "proposta": "Atividade de Blocos — Missão (Obrigatório, 12 min): programar Kyra para navegar pela floresta e coletar a planta medicinal. Posicione Kyra no tabuleiro e defina onde está a planta medicinal. O objetivo é chegar à planta pelo caminho mais rápido (otimização). Incentive o uso do bloco de Repetição (Loop) se houver movimentos repetidos (ex: Avançar 3 vezes = Repetir 3x [Avançar]). Algoritmo esperado: [INÍCIO] > [REPETIR 3X: AVANÇAR] > [VIRAR] > [COLETAR] > [FIM]. Mediação: \"Será que esse é o caminho mais rápido? O Kyro está com pressa! Conseguimos usar menos blocos para chegar lá?\" — Trabalhe frações equivalentes. Mostre que 1/2 é o mesmo que 2/4. Se necessário, use papel para dobrar e demonstrar.",
              "resolucao": "2 medidas de 1/4.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Misturando a Poção (EF04MA09) (7 min)",
              "contexto": "",
              "proposta": "Representação visual de frações.",
              "resolucao": "Pintar 2 das 3 partes do copo desenhado.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Simule o som de galhos quebrando)",
              "texto": "Árvore caída! O caminho programado falha. Os alunos precisam reprogramar rapidamente uma rota alternativa (debugging).",
              "proposta": "Desafio (Ciências): desenhar a planta medicinal e inventar um nome científico. Abordagem: valorize a criatividade e a conexão com o conhecimento tradicional indígena sobre botânica.",
              "tempo": "4 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Quem quer mostrar o desenho da sua planta curativa?"
              ],
              "registro": "Peça aos alunos que preencham o Diário de Bordo no Kit do Aluno.",
              "celebracao": "1, 2, 3... Guardiões da Memória!"
            }
          ]
        ]
      },
      {
        "titulo": "Aula 04 — As caravelas no horizonte",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 4,
              "titulo": "As caravelas no horizonte",
              "meta": "Semestre 1 | 4º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Foco da Aula: Perspectiva do Algoritmo. Materiais Necessários: Tabuleiro da Linha do Tempo (com grade de coordenadas), Blocos de Madeira, Kit do Aluno impresso, Lápis/Cores.."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF04CO01",
                  "Reconhecer objetos do mundo real e/ou digital que podem ser representados através de matrizes que estabelecem uma organização na qual cada componente está em uma posição definida por coordenadas, fazendo manipulações simples sobre estas representações."
                ],
                [
                  "Matemática",
                  "EF04MA16",
                  "Descrever deslocamentos e localização de pessoas e de objetos no espaço, por meio de malhas quadriculadas."
                ],
                [
                  "Matemática",
                  "EF04MA03",
                  "Resolver problemas com adição e subtração."
                ],
                [
                  "História",
                  "EF04HI04",
                  "Identificar as relações entre os indivíduos e a natureza e discutir o significado da fixação e deslocamento."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Pergunta norteadora: \"Se vocês olharem para uma montanha de baixo, ela parece igual a olhar para ela lá de cima do avião? O ponto de vista muda tudo!\""
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "Velas no Mar."
                ],
                [
                  "Atividade de Blocos (Obrigatório)",
                  "12 min",
                  "Programar duas rotas diferentes (Caravela e Indígena) que se encontram."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "O Mapa de Coordenadas (EF04MA16)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "7 min",
                  "O Ponto de Encontro (EF04MA16)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "4 min",
                  "Rota de colisão e as duas legendas da História."
                ],
                [
                  "Reflexão e Celebração",
                  "7 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Leia com entusiasmo, fazendo pausas para manter a atenção)",
              "texto": "Kyro e Kyra reprogramam a máquina do tempo e viajam para o ano de 1500. Eles aterrissam no litoral baiano, ao lado de um grupo de indígenas Tupinambás. Todos olham para o horizonte do mar. De repente, enormes montanhas de madeira com panos brancos aparecem na água. São as caravelas de Pedro Álvares Cabral! A dupla percebe algo importante: para quem estava no navio, era uma descoberta; para quem estava na praia, era uma invasão."
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (30 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Mapa de Coordenadas (EF04MA16) (19 min)",
              "contexto": "",
              "proposta": "Atividade de Blocos — Missão (Obrigatório, 12 min): programar duas rotas diferentes (Caravela e Indígena) que se encontram. Divida cada grupo em dois. Um controla o peão da Caravela, o outro o peão do Indígena (Kyro/Kyra). O objetivo é que os algoritmos sejam executados ao mesmo tempo e se encontrem em um ponto específico da praia. Algoritmo esperado — Caravela: [INÍCIO] > [AVANÇAR 2X] > [FIM]; Indígena: [INÍCIO] > [AVANÇAR 2X] > [FIM]. Mediação: mostre que o comando \"Avançar\" significa ir para o Leste para a caravela, mas ir para o Oeste para o indígena. A perspectiva muda o resultado do comando! — Desenhe uma grade na lousa (colunas 1 a 8, linhas 1 a 8). Posicione a caravela em (2,5) e a aldeia em (6,5).",
              "resolucao": "6 - 2 = 4 quadrados de distância.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Ponto de Encontro (EF04MA16) (7 min)",
              "contexto": "",
              "proposta": "Simule o movimento no plano cartesiano.",
              "resolucao": "Eles se encontram na Coluna 4, Linha 5.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Simule um som de tensão ou alerta)",
              "texto": "Rota de colisão! Se eles não pararem no ponto exato, vão bater! Precisam inserir um bloco de Controle (Parar/Esperar).",
              "proposta": "Desafio (História): escrever duas legendas diferentes para o mesmo evento histórico. Abordagem: reforce a empatia histórica. Como o indígena via aquela caravela gigante? E como o marinheiro via a floresta?",
              "tempo": "4 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Foi fácil programar junto com a outra metade do grupo?"
              ],
              "registro": "Peça aos alunos que preencham o Diário de Bordo no Kit do Aluno.",
              "celebracao": "1, 2, 3... Guardiões da Memória!"
            }
          ]
        ]
      },
      {
        "titulo": "Aula 05 — O primeiro contato",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 5,
              "titulo": "O primeiro contato",
              "meta": "Semestre 1 | 4º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Foco da Aula: Condicionais (Se/Então) e Tradução entre Sistemas. Materiais Necessários: Tabuleiro da Linha do Tempo, Blocos de Madeira, Kit do Aluno impresso, Lápis/Cores.."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF04CO03",
                  "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples e aninhadas (iterações definidas e indefinidas), para resolver problemas de forma independente e em colaboração."
                ],
                [
                  "Matemática",
                  "EF04MA06",
                  "Resolver e elaborar problemas envolvendo diferentes significados da multiplicação."
                ],
                [
                  "Matemática",
                  "EF04MA20",
                  "Medir e estimar massas utilizando unidades de medida padronizadas (kg)."
                ],
                [
                  "História",
                  "EF04HI06",
                  "Identificar as transformações ocorridas nos processos de deslocamento das pessoas e mercadorias (Escambo)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Pergunta norteadora: \"Vocês já trocaram figurinhas ou brinquedos com amigos? Como vocês decidem se a troca é justa?\""
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "A Troca."
                ],
                [
                  "Atividade de Blocos (Obrigatório)",
                  "12 min",
                  "Criar um algoritmo com Condicional (Se/Então) para validar o Escambo."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "O Valor do Machado (EF04MA06)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "7 min",
                  "O Peso da Madeira (EF04MA20)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "4 min",
                  "O objeto sagrado e o valor cultural dos objetos (História)."
                ],
                [
                  "Reflexão e Celebração",
                  "7 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Leia com entusiasmo, fazendo pausas para manter a atenção)",
              "texto": "Os portugueses desembarcaram na praia. O encontro acontece! É um momento cheio de curiosidade, estranhamento e muita confusão. Os portugueses oferecem espelhos e facas de ferro; os indígenas oferecem cocares de penas e mostram o Pau-Brasil. Ninguém fala a mesma língua! Kyro e Kyra percebem que precisam agir como tradutores para evitar que um mal-entendido vire uma briga. Eles precisam organizar o 'Escambo' (a troca de presentes)."
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (30 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Valor do Machado (EF04MA06) (19 min)",
              "contexto": "",
              "proposta": "Atividade de Blocos — Missão (Obrigatório, 12 min): criar um algoritmo com Condicional (Se/Então) para validar o Escambo. Explique o conceito de \"Se/Então\". Se a condição for verdadeira, fazemos uma coisa; se for falsa, fazemos outra. Peça aos alunos que usem os blocos para montar a regra: SE a troca for equivalente matematicamente, ENTÃO [Interagir/Trocar], SENÃO [Recusar/Virar as costas]. Algoritmo esperado: [INÍCIO] > [SE/ENTÃO] > [AÇÃO: TROCAR] > [SENÃO] > [AÇÃO: RECUSAR] > [FIM]. Mediação: \"O que o algoritmo deve fazer se o português quiser dar apenas 1 espelho por 100 toras de madeira? A condição de justiça é verdadeira ou falsa?\" Para essa atividade, deixe os alunos simularem a programação. Cada um escolhe um objeto de troca, faz a reflexão e a ação conforme a condição. — Problema de proporção e multiplicação. 1 machado = 3 toras. 4 machados = ?",
              "resolucao": "4 x 3 = 12 toras de Pau-Brasil.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Peso da Madeira (EF04MA20) (7 min)",
              "contexto": "",
              "proposta": "Multiplicação com unidades de massa (kg). Pegue o resultado do desafio anterior (12 toras).",
              "resolucao": "12 x 10 = 120 quilos.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Simule um momento de tensão)",
              "texto": "O Objeto Sagrado! Um marinheiro pega um item indígena sem permissão. O algoritmo de troca é interrompido! Kyra precisa agir.",
              "proposta": "Desafio (História): refletir sobre o valor cultural dos objetos. Por que o espelho valia tanto? Abordagem: explique que o valor não está apenas no material, mas na raridade e na utilidade que aquilo tem para uma cultura específica.",
              "tempo": "4 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que vocês acham que foi mais difícil no primeiro contato entre portugueses e indígenas?"
              ],
              "registro": "Peça aos alunos que preencham o Diário de Bordo no Kit do Aluno.",
              "celebracao": "1, 2, 3... Guardiões da Memória!"
            }
          ]
        ]
      },
      {
        "titulo": "Aula 06 — A mata vira canavial",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 6,
              "titulo": "A mata vira canavial",
              "meta": "Semestre 1 | 4º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Foco da Aula: Efeitos Colaterais do Algoritmo. Materiais Necessários: Tabuleiro da Linha do Tempo, Blocos de Madeira, Kit do Aluno impresso, Lápis/Cores.."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF04CO02",
                  "Criar e simular algoritmos, analisando como a precisão da instrução impacta na execução e gera efeitos colaterais."
                ],
                [
                  "Matemática",
                  "EF04MA06",
                  "Resolver e elaborar problemas envolvendo diferentes significados da multiplicação."
                ],
                [
                  "Matemática",
                  "EF04MA06",
                  "Multiplicação com organização retangular (área plantada)."
                ],
                [
                  "Geografia",
                  "EF04GE05",
                  "Distinguir unidades político-administrativas e rotas de circulação (rotas marítimas)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Pergunta norteadora: \"Vocês sabiam que o açúcar que colocamos no suco mudou a história do Brasil? Alguém sabe como o açúcar é feito?\""
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "A Mata Vira Canavial."
                ],
                [
                  "Atividade de Blocos (Obrigatório)",
                  "12 min",
                  "Programar a rota do navio até chegar à Europa."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "A Plantação (EF04MA06)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "7 min",
                  "A Produção de Açúcar (EF04MA06)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "4 min",
                  "O conceito de Efeito Colateral e a roda de conversa."
                ],
                [
                  "Reflexão e Celebração",
                  "7 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Leia com entusiasmo, fazendo pausas para manter a atenção)",
              "texto": "Décadas depois do primeiro contato, Kyro e Kyra viajam novamente e chegam a uma paisagem transformada. Onde antes havia uma floresta cheia de árvores, animais e aldeias, agora há imensos campos verdes de cana-de-açúcar. Os portugueses instalaram o sistema de plantation: grandes fazendas que produzem açúcar para vender na Europa. A vida dos povos originários mudou radicalmente, pois perderam suas terras. A dupla precisa entender como funciona o engenho de açúcar e o que essa riqueza custou para o Brasil."
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (30 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Plantação (EF04MA06) (19 min)",
              "contexto": "",
              "proposta": "Atividade de Blocos — Missão (Obrigatório, 12 min): programar a rota do navio até chegar à Europa. Desafio (Geografia): traçar a rota marítima. Abordagem: mostre um mapa mundi. Peça para traçarem uma linha do Brasil até a Europa. Explique que o açúcar viajava meses de navio. — Organização retangular. A plantação tem 5 fileiras com 8 pés de cana cada.",
              "resolucao": "5 x 8 = 40 pés de cana.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — A Produção de Açúcar (EF04MA06) (7 min)",
              "contexto": "",
              "proposta": "Multiplicação simples. Cada pé de cana rende 2 quilos de açúcar.",
              "resolucao": "40 x 2 = 80 quilos de açúcar.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Conduza com tom reflexivo)",
              "texto": "",
              "proposta": "Explique o conceito de \"Efeito Colateral\": uma ação que resolve um problema, mas cria outro. Faça a mediação de uma roda de conversa sobre os efeitos colaterais da plantação de cana-de-açúcar. Analise também os pontos positivos.",
              "tempo": "4 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O açúcar deixou os portugueses ricos, mas o que aconteceu com a natureza e com os indígenas?"
              ],
              "registro": "Peça aos alunos que preencham o Diário de Bordo no Kit do Aluno.",
              "celebracao": "1, 2, 3... Guardiões da Memória!"
            }
          ]
        ]
      },
      {
        "titulo": "Aula 07 — Os navios negreiros",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 7,
              "titulo": "Os navios negreiros",
              "meta": "Semestre 1 | 4º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Foco da Aula: Erro Crítico do Sistema. Materiais Necessários: Tabuleiro da Linha do Tempo, Blocos de Madeira, Kit do Aluno impresso, Lápis/Cores.. Aviso: esta aula trata de um tema sensível. Aborde com respeito, seriedade e foco na dignidade humana."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF04CO07",
                  "Entender a importância da segurança, ética e direitos fundamentais em sistemas (Erro Crítico)."
                ],
                [
                  "Matemática",
                  "EF04MA01",
                  "Ler, escrever e ordenar números naturais até a ordem de dezenas de milhar (números grandes)."
                ],
                [
                  "Matemática",
                  "EF04MA02",
                  "Composição e decomposição de números naturais."
                ],
                [
                  "História",
                  "EF04HI04",
                  "Identificar as relações entre os indivíduos e discutir o significado de deslocamentos forçados (diáspora africana)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Pergunta norteadora: \"Vocês sabem de onde vieram os antepassados de muitas pessoas que vivem no Brasil hoje?\""
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "Os Navios Negreiros."
                ],
                [
                  "Atividade de Blocos (Obrigatório)",
                  "12 min",
                  "Programar a rota de fuga de Kyra do navio negreiro para a liberdade."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "Números Gigantes (EF04MA01)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "7 min",
                  "Decompondo a História (EF04MA02)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "4 min",
                  "Recuperando os dados: a diversidade africana (História)."
                ],
                [
                  "Reflexão e Celebração",
                  "7 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Leia com seriedade e respeito)",
              "texto": "Kyro e Kyra chegam ao porto e testemunham algo que os deixa profundamente abalados. Um grande navio atracou. Lia explica pela torre de comando com muito cuidado: 'Exploradores, vocês estão vendo um navio negreiro. Mais de 4 milhões de pessoas foram trazidas da África para o Brasil à força. Eles não queriam vir. Eram reis, rainhas, agricultores, artistas e cientistas em suas terras, mas foram forçados a trabalhar como escravizados aqui.' A aula de hoje é para entender e nunca esquecer essa parte da nossa história."
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (30 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Números Gigantes (EF04MA01) (19 min)",
              "contexto": "",
              "proposta": "Atividade de Blocos — Missão (Obrigatório, 12 min): programar a rota de fuga de Kyra do navio negreiro para a liberdade. Posicione Kyra no tabuleiro no local do navio negreiro (porto). Explique que um \"Erro Crítico\" é um sistema que viola direitos fundamentais. O navio negreiro é um erro crítico da humanidade. Peça aos alunos que programem Kyra para escapar do navio e chegar a um local seguro (um quilombo representado no tabuleiro). O desafio é criar uma rota que evite os \"guardas\" (obstáculos) no caminho. Algoritmo esperado: [INÍCIO] > [AVANÇAR] > [VIRAR ESQUERDA] > [AVANÇAR 2X] > [VIRAR DIREITA] > [AVANÇAR] > [QUILOMBO] > [FIM]. Mediação: \"Kyra conseguiu escapar do erro crítico do sistema! Ela usou um algoritmo de fuga inteligente. Vocês conseguem traçar uma rota segura no tabuleiro?\" — O Brasil recebeu o maior número de africanos escravizados. Escreva o número 4.800.000 na lousa.",
              "resolucao": "Ler o número (quatro milhões e oitocentos mil) e identificar quantas ordens/classes ele tem.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Decompondo a História (EF04MA02) (7 min)",
              "contexto": "",
              "proposta": "Decompor o número do desafio anterior.",
              "resolucao": "4.000.000 + 800.000.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Conduza com voz calma e firme)",
              "texto": "A história tenta apagar de onde eles vieram! Precisamos recuperar os dados.",
              "proposta": "Desafio (História): conhecer a diversidade africana. Abordagem: mostre que a África é um continente enorme com muitos países, não um país só. Eles vieram de lugares como Angola, Congo, Moçambique, Nigéria.",
              "tempo": "4 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Por que é importante estudarmos essa parte triste da história? (Para não repetir os erros do passado)"
              ],
              "registro": "Peça aos alunos que preencham o Diário de Bordo no Kit do Aluno.",
              "celebracao": "1, 2, 3... Guardiões da Memória!"
            }
          ]
        ]
      },
      {
        "titulo": "Aula 08 — As línguas que sobreviveram",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 8,
              "titulo": "As línguas que sobreviveram",
              "meta": "Semestre 1 | 4º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Foco da Aula: Criptografia. Materiais Necessários: Tabuleiro da Linha do Tempo, Blocos de Madeira, Kit do Aluno impresso, Lápis/Cores.."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF04CO04",
                  "Diferenciar formas de codificação da informação (Criptografia)."
                ],
                [
                  "Matemática",
                  "EF04MA09",
                  "Reconhecer as frações unitárias mais usuais."
                ],
                [
                  "Matemática",
                  "EF04MA09",
                  "Ler e escrever frações (partes de um todo)."
                ],
                [
                  "Artes",
                  "EF15AR24",
                  "Caracterizar e experimentar brinquedos, brincadeiras, jogos, danças, canções e histórias de diferentes matrizes estéticas e culturais."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Pergunta norteadora: \"Vocês já inventaram uma língua secreta ou um código que só vocês e seus amigos entendiam?\""
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "As Línguas que Sobreviveram."
                ],
                [
                  "Atividade de Blocos (Obrigatório)",
                  "12 min",
                  "Criar um algoritmo de \"Criptografia\" para enviar uma mensagem secreta."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "A Sobrevivência da Cultura (EF04MA09)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "7 min",
                  "Frações na Música (EF04MA09)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "4 min",
                  "O feitor está vindo e as manifestações culturais (Artes)."
                ],
                [
                  "Reflexão e Celebração",
                  "7 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Leia com entusiasmo, fazendo pausas para manter a atenção)",
              "texto": "Kyro e Kyra visitam uma fazenda e descobrem algo surpreendente. Mesmo em condições terríveis e proibidos de falar suas línguas, os africanos escravizados encontraram formas incríveis de preservar sua cultura! Como? Eles usaram a música, a dança e o corpo para esconder suas mensagens e tradições. Eles criaram códigos secretos. A capoeira, por exemplo, parecia uma dança para os senhores, mas era um treino de defesa! Isso se chama resistência."
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (30 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — A Sobrevivência da Cultura (EF04MA09) (19 min)",
              "contexto": "",
              "proposta": "Atividade de Blocos — Missão (Obrigatório, 12 min): criar um algoritmo de \"Criptografia\" para enviar uma mensagem secreta. Explique que Criptografia é esconder uma mensagem dentro de outra (codificar a informação). Peça aos alunos que usem os blocos de Ação para criar uma sequência que signifique uma coisa para eles, mas que pareça outra coisa. Exemplo: o bloco \"Avançar\" na verdade significa \"Pular\", o bloco \"Virar\" significa \"Bater palma\". Algoritmo esperado: os alunos montam uma sequência (ex: [AVANÇAR] > [AVANÇAR] > [VIRAR]) e o grupo vizinho tenta \"decodificar\" o que eles estão fazendo com o corpo. Mediação: \"Se o feitor da fazenda olhar para vocês pulando e batendo palma, ele vai achar que é só uma dança. Mas vocês sabem o código verdadeiro!\" — Mostre um retângulo dividido em 5 partes. Explique que os senhores tentaram apagar 4/5 da cultura africana, mas 1/5 sobreviveu forte e se multiplicou no Brasil.",
              "resolucao": "Pintar 1/5 do retângulo e escrever a fração.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Frações na Música (EF04MA09) (7 min)",
              "contexto": "",
              "proposta": "A música tem ritmo e tempo. Se um tambor toca 4 batidas e 2 são fortes, qual a fração das batidas fortes?",
              "resolucao": "2/4 ou 1/2.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Simule passos se aproximando)",
              "texto": "O feitor está vindo! Rápido, disfarcem o treinamento!",
              "proposta": "Desafio (Artes): identificar manifestações culturais. Abordagem: cite a Capoeira, o Jongo e o Samba. Explique como a arte foi a maior ferramenta de resistência e proteção de dados (cultura) da história do Brasil.",
              "tempo": "4 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Quais palavras que usamos hoje vieram da África? (Ex: caçula, mochila, quitanda, batuque)"
              ],
              "registro": "Peça aos alunos que preencham o Diário de Bordo no Kit do Aluno.",
              "celebracao": "1, 2, 3... Guardiões da Memória!"
            }
          ]
        ]
      },
      {
        "titulo": "Aula 09 — Palmares: A república livre",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 9,
              "titulo": "Palmares: A república livre",
              "meta": "Semestre 1 | 4º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Foco da Aula: Sistema Alternativo. Materiais Necessários: Tabuleiro da Linha do Tempo, Blocos de Madeira, Kit do Aluno impresso, Lápis/Cores.."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF04CO01",
                  "Organizar objetos (sistemas) explicitando semelhanças e diferenças (Sistema Alternativo)."
                ],
                [
                  "Matemática",
                  "EF04MA16",
                  "Descrever deslocamentos e localização no espaço, por meio de malhas quadriculadas."
                ],
                [
                  "Matemática",
                  "EF04MA16",
                  "Identificar coordenadas cartesianas."
                ],
                [
                  "História",
                  "EF04HI04",
                  "Discutir o significado de deslocamentos e a formação de comunidades de resistência (Quilombos)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Pergunta norteadora: \"Se vocês achassem que as regras de um lugar são muito injustas, o que vocês fariam? E se vocês construíssem o próprio lugar de vocês?\""
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "Palmares: A República Livre."
                ],
                [
                  "Atividade de Blocos (Obrigatório)",
                  "12 min",
                  "Programar um \"Sistema Alternativo\" de rotas para proteger Palmares."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "Localizando Palmares (EF04MA16)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "7 min",
                  "A Rota de Fuga (EF04MA16)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "4 min",
                  "Tropas se aproximam e quem foi Zumbi (História)."
                ],
                [
                  "Reflexão e Celebração",
                  "7 min",
                  "Diário de Bordo e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Leia com entusiasmo, fazendo pausas para manter a atenção)",
              "texto": "A máquina do tempo leva Kyro e Kyra para o meio de uma serra de difícil acesso. Eles encontram o Quilombo dos Palmares! O maior quilombo do Brasil, que durou quase cem anos. Zumbi os recebe numa comunidade muito organizada. Lá tem agricultura, comércio, ferreiros e leis próprias. Eles construíram um 'Sistema Alternativo': uma sociedade que funciona fora das regras injustas do sistema principal (a escravidão). Palmares é o símbolo da resistência!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (30 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Localizando Palmares (EF04MA16) (19 min)",
              "contexto": "",
              "proposta": "Atividade de Blocos — Missão (Obrigatório, 12 min): programar um \"Sistema Alternativo\" de rotas para proteger Palmares. Explique que Palmares ficava em um lugar muito difícil de chegar para se proteger das tropas. Peça aos alunos que usem os blocos para criar um algoritmo de defesa: uma rota cheia de curvas e obstáculos no tabuleiro para chegar ao quilombo. Algoritmo esperado: [INÍCIO] > [AVANÇAR] > [VIRAR DIREITA] > [AVANÇAR] > [VIRAR ESQUERDA] > [AVANÇAR] > [FIM]. Mediação: \"Se o caminho for muito reto e fácil, os soldados vão achar Palmares. Como podemos deixar esse algoritmo mais complexo para proteger o quilombo?\" — Use uma malha quadriculada. Diga que Palmares fica na coordenada (C, 4).",
              "resolucao": "Os alunos devem marcar o ponto exato no encontro da coluna C com a linha 4.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — A Rota de Fuga (EF04MA16) (7 min)",
              "contexto": "",
              "proposta": "Traçar o caminho seguro no mapa quadriculado saindo de (A, 1) até (C, 4) desviando de um obstáculo em (B, 2).",
              "resolucao": "Desenhar a rota correta na malha.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Simule um som de tambores de alerta)",
              "texto": "Tropas coloniais se aproximam! Kyro e Kyra precisam ajudar a esconder o caminho de entrada.",
              "proposta": "Desafio (História): quem foi Zumbi dos Palmares? Abordagem: explique brevemente a importância de Zumbi e Dandara como líderes estratégicos e símbolos de liberdade.",
              "tempo": "4 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que faz de Palmares um exemplo tão importante para o Brasil?"
              ],
              "registro": "Peça aos alunos que preencham o Diário de Bordo no Kit do Aluno.",
              "celebracao": "1, 2, 3... Guardiões da Memória!"
            }
          ]
        ]
      },
      {
        "titulo": "Aula 10 — Diário de viagem",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 10,
              "titulo": "Diário de viagem (avaliação)",
              "meta": "Semestre 1 | 4º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Foco da Aula: Análise Sistêmica e Revisão. Materiais Necessários: Tabuleiro da Linha do Tempo, Blocos de Madeira, Kit do Aluno impresso, Lápis/Cores.."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Computação",
                  "EF04CO02",
                  "Simular algoritmos e analisar o impacto na execução (Revisão Sistêmica)."
                ],
                [
                  "Matemática",
                  "EF04MA03",
                  "Resolver problemas com adição e subtração."
                ],
                [
                  "Matemática",
                  "EF04MA09",
                  "Ler e escrever frações."
                ],
                [
                  "Português",
                  "EF04LP05",
                  "Produzir textos de diferentes gêneros (Relatório/Síntese)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Pergunta norteadora: \"Até agora, visitamos os indígenas, vimos as caravelas chegarem, o escambo, os engenhos de açúcar e o Quilombo dos Palmares. Qual foi a aventura favorita de vocês?\""
                ],
                [
                  "Storytelling Inicial",
                  "8 min",
                  "Pausa para Recarga."
                ],
                [
                  "Atividade de Blocos (Obrigatório)",
                  "12 min",
                  "Criar o \"Algoritmo da Memória\" conectando os principais eventos das aulas 1 a 9."
                ],
                [
                  "Desafio 1 — Matemática",
                  "7 min",
                  "Revisão de Frações (EF04MA09)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "7 min",
                  "Revisão de Operações (EF04MA03)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "4 min",
                  "A memória apagada e o registro do evento favorito (Português)."
                ],
                [
                  "Reflexão e Celebração",
                  "7 min",
                  "Diário de Viagem e grito de guerra."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (8 minutos)",
              "instrucao": "(Leia com entusiasmo, fazendo pausas para manter a atenção)",
              "texto": "Atenção, exploradores! A máquina do tempo está apitando: Bip! Bip! Bip! Precisamos fazer uma pausa forçada para recarregar as baterias de cristal temporal. Enquanto esperamos, os professores Lia e Hélio pediram um 'Diário de Viagem' completo. Precisamos registrar tudo o que vivemos até agora: cada época, cada pessoa conhecida, cada descoberta feita. É hora de organizar nossos dados!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (30 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Revisão de Frações (EF04MA09) (19 min)",
              "contexto": "",
              "proposta": "Atividade de Blocos — Missão (Obrigatório, 12 min): esta é uma aula de revisão (Avaliação Intermediária). Criar o \"Algoritmo da Memória\" conectando os principais eventos das aulas 1 a 9. Peça aos alunos que usem os blocos para representar a sequência cronológica dos eventos que estudaram. Eles devem mover o peão pelos cenários do tabuleiro na ordem correta da história. Algoritmo esperado: [ALDEIA TUPI] > [CARAVELAS/ESCAMBO] > [CANAVIAL] > [QUILOMBO] (representado por blocos de movimento ligando esses pontos no tabuleiro). Mediação: \"O que aconteceu primeiro: o engenho de açúcar ou o primeiro contato na praia? Vamos programar a rota na ordem certa do tempo.\" — Relembrar a divisão da terra e da cultura.",
              "resolucao": "Identificar frações equivalentes (ex: 2/4 = 1/2) em um problema visual no Kit do Aluno.",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Revisão de Operações (EF04MA03) (7 min)",
              "contexto": "",
              "proposta": "Relembrar o cálculo do escambo e distâncias.",
              "resolucao": "Resolver um problema de subtração ou multiplicação envolvendo os temas passados (ex: anos de diferença).",
              "abordagem": ""
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "(Simule um som de interferência no sistema)",
              "texto": "A memória da máquina falhou! Um evento importante foi apagado do sistema.",
              "proposta": "Desafio (Português): escrever um pequeno parágrafo resumindo o evento favorito deles para salvar no banco de dados. Abordagem: avalie a capacidade de síntese e expressão escrita do aluno.",
              "tempo": "4 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Estamos prontos para a segunda metade do semestre?"
              ],
              "registro": "Peça aos alunos que finalizem o Diário de Viagem no Kit do Aluno.",
              "celebracao": "1, 2, 3... Guardiões da Memória!"
            }
          ]
        ]
      }
    ]
  },
  "5": {
    "nome": "5º Ano",
    "aulas": [
      {
        "titulo": "Aula 01 — Contagem regressiva",
        "paginas": [
          [
            {
              "tipo": "sumario",
              "itens": [
                {
                  "n": 1,
                  "titulo": "Contagem regressiva",
                  "pc": "Planejamento antes da execução (mapear percurso e dados)",
                  "desc": "Diferença de distâncias em UA (1,5 - 1,0) e multiplicação decimal de combustível (2,5 x 0,5). Desafio bônus de Português: produção textual imaginativa."
                },
                {
                  "n": 2,
                  "titulo": "Terra vista de cima",
                  "pc": "Loops planetários (ciclos precisos e previsíveis)",
                  "desc": "Multiplicação de horas de rotação (23,9 x 3) e dias de translação (365,25 x 4). Desafio bônus de Ciências: consequências da rotação da Terra."
                },
                {
                  "n": 3,
                  "titulo": "A Lua de perto",
                  "pc": "Reflexo de dados (elemento que não processa, só repassa)",
                  "desc": "Porcentagem complementar (100% - 50%) e cálculo de fração/porcentagem das fases lunares. Desafio bônus de Ciências: por que a Lua muda de fase."
                },
                {
                  "n": 4,
                  "titulo": "Mercúrio: O planeta esquecido",
                  "pc": "Tempo de execução (eficiência do algoritmo)",
                  "desc": "Amplitude térmica em decimais (427,5 + 173,2) e otimização com Loop (2,4 x 5). Desafio bônus de Ciências: o papel da atmosfera na temperatura."
                },
                {
                  "n": 5,
                  "titulo": "Vênus: A armadilha brilhante",
                  "pc": "Validação de entrada (checar condições com Se/Então)",
                  "desc": "Porcentagem de composição atmosférica (96% de 100) e cálculo de pressão (45 é metade de 90 = 50%). Desafio bônus de Ciências: o Efeito Estufa."
                },
                {
                  "n": 6,
                  "titulo": "Marte: A base secreta",
                  "pc": "Leitura de logs (interpretar registros anteriores)",
                  "desc": "Cálculo de média de temperatura (180 / 3) e porcentagem não exata (19% de 144). Desafio bônus de Ciências: água e possibilidade de vida."
                },
                {
                  "n": 7,
                  "titulo": "O cinturão de asteroides",
                  "pc": "Desvio de obstáculos em sequência (condicionais encadeadas)",
                  "desc": "Subtração de decimais grandes (940,0 - 525,4) e multiplicação de decimais (1,5 x 4,5). Desafio bônus de Ciências: origem dos asteroides."
                },
                {
                  "n": 8,
                  "titulo": "Júpiter: O gigante que protege",
                  "pc": "Tratamento de exceções (lidar com o inesperado)",
                  "desc": "Porcentagem de massa (71% de 1000) e multiplicação de decimais grandes (12.742 x 1,3). Desafio bônus de Ciências: Júpiter como escudo da Terra."
                },
                {
                  "n": 9,
                  "titulo": "As luas de Júpiter",
                  "pc": "Sistemas dentro de sistemas (loops aninhados)",
                  "desc": "Cálculo de média (16840 / 4) e subtração de decimais com empréstimo (2,4 - 0,6). Desafio bônus de Ciências: vida sob o gelo de Europa."
                },
                {
                  "n": 10,
                  "titulo": "Relatório da primeira metade da missão",
                  "pc": "Organização lógica de dados (algoritmos de triagem, avaliação intermediária)",
                  "desc": "Ordenação dos planetas por distância do Sol e soma de decimais de combustível (12,5 + 35,2). Desafio bônus: resumo crítico da primeira metade da missão."
                }
              ]
            }
          ],
          [
            {
              "tipo": "orientacoes",
              "paragrafos": [
                "\"Explorando o Universo\" é um jogo físico de blocos de madeira, desenvolvido para alunos do 5º ano do Ensino Fundamental. O material integra o ensino de lógica de programação e pensamento computacional com as habilidades matemáticas e científicas da BNCC, tudo dentro de uma narrativa envolvente de viagem espacial protagonizada pelos mascotes da Skilliu.",
                "A proposta é 100% desplugada (sem telas), estimulando o aprendizado tátil, colaborativo e narrativo. As crianças manipulam blocos de madeira encaixáveis para construir algoritmos físicos e, ao mesmo tempo, resolvem desafios matemáticos e interdisciplinares contextualizados na história de Kyro e Kyra, que embarcam em uma missão para mapear o Sistema Solar e compreender o universo."
              ],
              "destaque": "<strong>Faixa etária:</strong> 10 a 11 anos (5º Ano do Ensino Fundamental)<br><strong>Número de jogadores:</strong> 2 a 4 alunos por grupo<br><strong>Duração de cada sessão:</strong> 50 minutos<br><strong>Total de missões:</strong> 20 (alinhadas ao semestre letivo)"
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Objetivos de Aprendizagem",
              "instrucao": "",
              "texto": "O jogo foi concebido para desenvolver competências em duas dimensões complementares: o Pensamento Computacional e as Habilidades da BNCC para o 5º ano, com foco principal em Matemática e Língua Portuguesa (leitura e escrita do Diário de Bordo), além de conexões fundamentais com Ciências.<br><br><strong>Pensamento Computacional — EF05CO01, EF05CO02, EF05CO03, EF05CO04.</strong> O jogo desenvolve as seguintes capacidades ao longo das 20 missões:"
            },
            {
              "tipo": "tabela",
              "legenda": "Pensamento Computacional — Conceitos por Missão",
              "colunas": [
                "Conceito",
                "Missões Relacionadas",
                "Descrição"
              ],
              "linhas": [
                [
                  "Planejamento antes da execução",
                  "Missões 1, 10, 19",
                  "Mapear todo o percurso e organizar dados antes de rodar o programa."
                ],
                [
                  "Loops planetários",
                  "Missão 2",
                  "Identificar movimentos que se repetem em ciclos precisos e previsíveis."
                ],
                [
                  "Reflexo de dados",
                  "Missão 3",
                  "Compreender um elemento que não processa, apenas repassa a informação."
                ],
                [
                  "Tempo de execução",
                  "Missão 4",
                  "Garantir que programas rodem dentro de um limite de tempo estabelecido."
                ],
                [
                  "Validação de entrada",
                  "Missão 5",
                  "Verificar as condições ambientais antes de executar o programa."
                ],
                [
                  "Leitura de logs",
                  "Missão 6",
                  "Interpretar registros deixados por um programa anterior para tomada de decisão."
                ],
                [
                  "Desvio de obstáculos em sequência",
                  "Missão 7",
                  "Utilizar condicionais encadeadas em tempo real para navegação segura."
                ],
                [
                  "Tratamento de exceções",
                  "Missão 8",
                  "Definir ações para quando o programa encontra algo inesperado e enorme."
                ],
                [
                  "Sistemas dentro de sistemas",
                  "Missão 9",
                  "Compreender subsistemas que funcionam de forma independente dentro de um sistema maior."
                ],
                [
                  "Navegação em ambiente dinâmico",
                  "Missão 11",
                  "Encontrar um caminho seguro através de obstáculos em movimento constante."
                ],
                [
                  "Recalibração de sistema",
                  "Missão 12",
                  "Ajustar os parâmetros do programa quando o ambiente sofre alterações drásticas."
                ],
                [
                  "Limites do sistema",
                  "Missão 13",
                  "Lidar com as consequências quando o programa chega ao seu último comando ou limite operacional."
                ],
                [
                  "Referências fixas",
                  "Missão 14",
                  "Usar pontos imutáveis do sistema para localizar elementos variáveis."
                ],
                [
                  "Gerenciamento de falhas",
                  "Missão 15",
                  "Priorizar o que desligar e o que manter funcionando em situações críticas."
                ],
                [
                  "Fonte de energia do sistema",
                  "Missão 16",
                  "Entender de onde vem o recurso primário que faz todo o sistema funcionar."
                ],
                [
                  "Escalabilidade",
                  "Missão 17",
                  "Mudar a forma de pensar para abordar e processar grandezas exponenciais."
                ],
                [
                  "Perspectiva global",
                  "Missão 18",
                  "Afastar-se do detalhe para entender o sistema como um todo integrado."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Matemática e Interdisciplinar (BNCC)",
              "instrucao": "",
              "texto": "As missões conectam-se a habilidades matemáticas do 5º ano, focando em números racionais, porcentagem, grandezas, medidas, geometria e tratamento da informação. Além disso, os desafios bônus trazem conteúdos de outras disciplinas, com forte ênfase em Ciências da Natureza."
            },
            {
              "tipo": "tabela",
              "legenda": "Habilidades da BNCC — Matemática e Interdisciplinar",
              "colunas": [
                "Habilidade",
                "Missões Relacionadas"
              ],
              "linhas": [
                [
                  "Números racionais (decimais e frações) (EF05MA02, EF05MA03)",
                  "1, 2, 4, 7, 11, 13, 16"
                ],
                [
                  "Porcentagem (EF05MA06)",
                  "3, 5, 8, 11, 15, 18"
                ],
                [
                  "Grandezas e medidas (tempo, temperatura, distância) (EF05MA19)",
                  "2, 4, 6, 9, 16"
                ],
                [
                  "Geometria (ângulos e coordenadas) (EF05MA14, EF05MA15)",
                  "12, 14"
                ],
                [
                  "Tratamento da informação e grandes números (EF05MA01, EF05MA24)",
                  "10, 17, 19"
                ],
                [
                  "Resolução de problemas de múltiplas etapas (EF05MA08)",
                  "1 a 20"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Componentes do Jogo — Mapas, Cenários e Personagens",
              "instrucao": "",
              "texto": "<strong>1. Mapas e Cenários Espaciais</strong><br>O cenário ilustra os principais locais da narrativa espacial, permitindo que os personagens se movam para explorar os destinos: <strong>Torre de Comando:</strong> ponto de partida na Terra, onde Lia e Hélio organizam as missões. <strong>Planetas Rochosos e Gasosos:</strong> locais de exploração e coleta de dados (Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno). <strong>Ambientes Especiais:</strong> a Lua, o Cinturão de Asteroides e as regiões de tempestade solar.<br><br><strong>2. Personagens (Peões)</strong><br>O jogo inclui personagens em formato de peão para a navegação: <strong>Kyro:</strong> o aluno explorador, equipado com sua mochila e óculos. <strong>Kyra:</strong> a aluna exploradora, sempre com um lápis na orelha para anotar descobertas. <strong>Hélio:</strong> o professor que auxilia na missão, trazendo contexto científico. <strong>Lia:</strong> a professora que orienta os exploradores, organizando os dados."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Componentes do Jogo — Blocos e Materiais",
              "instrucao": "",
              "texto": "<strong>3. Blocos de Programação</strong><br>Os blocos de madeira possuem encaixes fáceis e ícones intuitivos, permitindo um fluxo de programação vertical. Para o 5º ano, introduzem-se conceitos de lógica avançada. <strong>Movimento (Azul):</strong> Avançar, Virar à Direita, Virar à Esquerda. <strong>Ação (Amarelo):</strong> Coletar Amostra, Analisar, Recalibrar. <strong>Controle (Verde e Laranja):</strong> Início, Fim, Repetir (Loop), Se/Então (Condicional).<br><br><strong>4. Material do Aluno</strong><br>Cartas de Missão: cada aula possui um roteiro contendo a narrativa da exploração, a missão de programação e os desafios matemáticos e interdisciplinares. Diário de Bordo do Explorador: folha de registro onde o aluno anota as descobertas, resolve os cálculos, registra seu código de blocos e faz a reflexão final (o que aprendeu, o que mais gostou e o que achou difícil).<br><br><strong>5. Material do Professor</strong><br>O Kit do Professor inclui o plano de aula detalhado, as resoluções visuais dos algoritmos e desafios matemáticos, orientações para a leitura dramática do storytelling e peças magnéticas/adesivas para demonstração na lousa."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Mecânica e Regras do Jogo",
              "instrucao": "",
              "texto": "<strong>Mecânica e Regras do Jogo (Aulas de 50 minutos)</strong><br>A estrutura de cada aula segue um fluxo dinâmico:<br><br><strong>1. Storytelling Inicial (10 min):</strong> o educador lê a missão do dia com entonação dramática. Apresenta o destino no Sistema Solar e o objetivo de Kyro e Kyra.<br><br><strong>2. Exploração e Planejamento (10 min):</strong> os alunos, em grupos, discutem como resolver a rota no cenário e resolvem os desafios matemáticos (Desafio 1 e 2) que desbloqueiam o avanço. O Desafio Bônus interdisciplinar também é apresentado.<br><br><strong>3. Programação Física (15 min):</strong> utilizando os blocos de madeira, os alunos montam o algoritmo para guiar a nave ou os exploradores. Em algumas missões, ocorre o Fator Perturbador (um evento inesperado que exige rápida adaptação do código).<br><br><strong>4. Execução e Depuração (10 min):</strong> um aluno atua como \"computador\", movendo o peão. Se houver erro, o grupo faz o debugging.<br><br><strong>5. Reflexão e Celebração (5 min):</strong> preenchimento do Diário de Bordo (foco em Língua Portuguesa) e celebração da conquista da missão."
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "As 20 Missões: Narrativa, Programação e Matemática",
              "instrucao": "",
              "texto": "A seguir, apresentamos o mapeamento completo das 20 missões do semestre, organizadas pelo arco narrativo."
            },
            {
              "tipo": "tabela",
              "legenda": "Arco 1: Preparação e Primeiros Destinos (Aulas 1 a 7)",
              "colunas": [
                "Missão",
                "Título do Caso",
                "Conceito de PC",
                "Desafios de Matemática (BNCC)",
                "Desafio Bônus"
              ],
              "linhas": [
                [
                  "1",
                  "Contagem Regressiva (Introdutória)",
                  "Planejamento antes da execução",
                  "Números decimais (distâncias astronômicas)",
                  "Português: Imaginar o que encontrar no espaço"
                ],
                [
                  "2",
                  "Terra Vista de Cima",
                  "Loops planetários",
                  "Números decimais (duração do dia e ano)",
                  "Ciências: Rotação, translação e impactos na Terra"
                ],
                [
                  "3",
                  "A Lua de Perto",
                  "Reflexo de dados",
                  "Porcentagem (superfície iluminada)",
                  "Ciências: As fases da Lua"
                ],
                [
                  "4",
                  "Mercúrio: O Planeta Esquecido",
                  "Tempo de execução",
                  "Números decimais (comparação de temperaturas)",
                  "Ciências: Temperaturas extremas sem atmosfera"
                ],
                [
                  "5",
                  "Vênus: A Armadilha Brilhante",
                  "Validação de entrada",
                  "Porcentagem (composição da atmosfera)",
                  "Ciências: Efeito estufa em Vênus"
                ],
                [
                  "6",
                  "Marte: A Base Secreta",
                  "Leitura de logs",
                  "Médias (temperatura ao longo do ano)",
                  "Ciências: Marte e a possibilidade de vida"
                ],
                [
                  "7",
                  "O Cinturão de Asteroides",
                  "Desvio de obstáculos em sequência",
                  "Números decimais (tamanhos e distâncias)",
                  "Ciências: O que são asteroides e sua origem"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Arco 2: O Coração do Sistema Solar (Aulas 8 a 14)",
              "colunas": [
                "Missão",
                "Título do Caso",
                "Conceito de PC",
                "Desafios de Matemática (BNCC)",
                "Desafio Bônus"
              ],
              "linhas": [
                [
                  "8",
                  "Júpiter: O Gigante que Protege",
                  "Tratamento de exceções",
                  "Porcentagem (massa planetária)",
                  "Ciências: Júpiter como escudo da Terra"
                ],
                [
                  "9",
                  "As Luas de Júpiter",
                  "Sistemas dentro de sistemas",
                  "Médias (tamanho médio das maiores luas)",
                  "Ciências: Europa e a busca por vida extraterrestre"
                ],
                [
                  "10",
                  "Relatório da Primeira Metade da Missão",
                  "Avaliação Intermediária 1",
                  "Organização lógica de dados coletados",
                  "Ciências: Consolidar descobertas"
                ],
                [
                  "11",
                  "Saturno: As Joias do Sistema Solar",
                  "Navegação em ambiente dinâmico",
                  "Porcentagem e decimais (composição dos anéis)",
                  "Ciências: Formação dos anéis de Saturno"
                ],
                [
                  "12",
                  "Urano: O Planeta de Lado",
                  "Recalibração de sistema",
                  "Ângulos (inclinação do eixo)",
                  "Ciências: Teoria do impacto gigante"
                ],
                [
                  "13",
                  "Netuno: O Fim do Mapa",
                  "Limites do sistema",
                  "Números decimais (distâncias em unidades astronômicas)",
                  "Ciências: Descoberta de Netuno por cálculo"
                ],
                [
                  "14",
                  "As Constelações no Caminho de Volta",
                  "Referências fixas",
                  "Coordenadas (localização de estrelas)",
                  "História: Navegação por constelações no passado"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Arco 3: Confins do Sistema e o Grande Retorno (Aulas 15 a 20)",
              "colunas": [
                "Missão",
                "Título do Caso",
                "Conceito de PC",
                "Desafios de Matemática (BNCC)",
                "Desafio Bônus"
              ],
              "linhas": [
                [
                  "15",
                  "A Tempestade Solar",
                  "Gerenciamento de falhas",
                  "Porcentagem (energia restante em cada sistema)",
                  "Ciências: Tempestades solares e efeitos na Terra"
                ],
                [
                  "16",
                  "O Sol Por Dentro",
                  "Fonte de energia do sistema",
                  "Médias e decimais (temperatura do núcleo vs superfície)",
                  "Ciências: O Sol como estrela e semelhanças no universo"
                ],
                [
                  "17",
                  "Estrelas, Galáxias e o Tamanho do Tudo",
                  "Escalabilidade",
                  "Notação e comparação de números grandes (milhões, bilhões)",
                  "Ciências: A Via Láctea"
                ],
                [
                  "18",
                  "A Terra Vista de Longe",
                  "Perspectiva global",
                  "Porcentagem (missão completada e restante)",
                  "Português: Escrever uma carta para a Terra"
                ],
                [
                  "19",
                  "O Grande Mapa do Sistema Solar",
                  "Avaliação Intermediária 2",
                  "Consolidação final de dados e distâncias",
                  "Ciências: Montar o mapa completo"
                ],
                [
                  "20",
                  "Bem-vindos de Volta, Astronautas",
                  "Celebração Final",
                  "Partilha de experiências e aprendizados",
                  "Socioemocional: Compartilhar a maior descoberta"
                ]
              ]
            }
          ],
          [
            {
              "tipo": "aula-header",
              "n": 1,
              "titulo": "Contagem regressiva",
              "meta": "Semestre 1 | 5º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Esta é a aula introdutória do semestre \"Explorando o Universo\". Os alunos conhecerão a missão de mapear o Sistema Solar e a importância de planejar antes de executar. O foco em pensamento computacional é o Planejamento antes da execução, mostrando que um algoritmo precisa de dados precisos e rota clara antes de ser rodado. Na matemática, introduz-se o trabalho com números decimais no contexto de distâncias astronômicas."
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF05CO01",
                  "Planejamento antes da execução: Mapear todo o percurso e organizar dados antes de rodar o programa."
                ],
                [
                  "Matemática",
                  "EF05MA02",
                  "Ler, escrever e ordenar números racionais na forma decimal com compreensão das principais características do sistema de numeração decimal."
                ],
                [
                  "Língua Portuguesa",
                  "EF05LP15",
                  "Ler/ouvir e compreender textos narrativos, identificando elementos da narrativa e a situação problema."
                ],
                [
                  "Português (Bônus)",
                  "EF05LP11",
                  "Registrar, com autonomia, textos breves (produção textual imaginativa)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Apresentação dos kits, formação dos grupos e explicação da dinâmica do semestre."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Montagem do algoritmo de rota e cálculo de diferença em decimais."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Uso de loop para escaneamento e multiplicação com decimais."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Produção textual imaginativa sobre o que encontrarão no espaço."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Roda de conversa e preenchimento do Diário de Bordo."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com voz de urgência e entusiasmo)",
              "texto": "Na Torre de Comando, as luzes piscam e os alarmes soam. Lia e Hélio estão com os trajes espaciais preparados. Kyro e Kyra entram correndo, ofegantes e empolgados. 'A nave está pronta!', anuncia Lia, apontando para o foguete brilhante na pista. 'Mas atenção', adverte Hélio, ajustando os óculos. 'O Sistema Solar é gigantesco. Uma viagem sem planejamento pode nos fazer perder para sempre no espaço vazio. Antes de ligarmos os motores, precisamos mapear todo o nosso percurso e entender exatamente para onde estamos indo!'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Tamanho do Desafio (Matemática) (8 min)",
              "contexto": "Kyro precisa ir da Torre até o painel de controle para inserir as distâncias em Unidades Astronômicas (UA).",
              "proposta": "Usar os blocos de movimento (Avançar, Virar) para traçar o caminho no mapa até o painel.",
              "resolucao": "Diferença entre Marte (1,5 UA) e Terra (1,0 UA). 1,5 - 1,0 = 0,5 UA.",
              "abordagem": "Mostre como o loop economiza blocos e tempo. Lembre os alunos de alinhar vírgula sob vírgula na subtração de decimais. Questione por que é importante planejar a rota (o algoritmo) antes de mover o peão."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Calculando a Rota (Matemática) (10 min)",
              "contexto": "O computador precisa escanear planetas e calcular o combustível necessário.",
              "proposta": "Multiplicar 2,5 tanques por 0,5 UA de distância.",
              "resolucao": "2,5 x 0,5 = 1,25 tanques.",
              "abordagem": "Na matemática, reforce a regra da multiplicação de decimais (contar as casas após a vírgula)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "O alarme toca! O computador acusa falta de dados criativos sobre o que esperar lá fora.",
              "proposta": "Escrever um parágrafo imaginando o que encontrarão no espaço. Abordagem pedagógica: incentive a criatividade. Não há resposta errada. Eles podem falar sobre alienígenas, buracos negros, poeira estelar ou cometas. O objetivo é destravar a imaginação e praticar a escrita autônoma.",
              "tempo": "7 min"
            }
          ],
          [
            {
              "tipo": "reflexao",
              "perguntas": [
                "Por que Hélio disse que planejar é tão importante quanto decolar?",
                "Como a matemática nos ajudou a entender as distâncias hoje?",
                "O que acontece quando damos um comando errado para o computador da nave?"
              ],
              "registro": "Pedir para desenharem a nave espacial por fora e escreverem a palavra \"ASTRONÔMICA\".",
              "celebracao": "Todos com as mãos no centro. Grito de guerra: \"3, 2, 1... DECOLAR!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 02 — Terra vista de cima",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 2,
              "titulo": "Terra vista de cima",
              "meta": "Semestre 1 | 5º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A nave decolou e a primeira visão é a Terra. A aula explora os movimentos de rotação e translação, conectando-os ao conceito de Loops planetários no pensamento computacional (ciclos que se repetem de forma precisa). A matemática foca na multiplicação de números decimais aplicados a medidas de tempo."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF05CO02",
                  "Loops planetários: Identificar movimentos que se repetem em ciclos precisos e previsíveis."
                ],
                [
                  "Matemática",
                  "EF05MA19",
                  "Resolver problemas envolvendo medidas de tempo e conversões, operando com números decimais."
                ],
                [
                  "Ciências (Bônus)",
                  "EF05CI11",
                  "Associar o movimento diário do Sol e das demais estrelas no céu ao movimento de rotação da Terra."
                ],
                [
                  "Língua Portuguesa",
                  "EF05LP15",
                  "Ler/ouvir e compreender textos narrativos."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Relembrar o grito de guerra e a decolagem."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Algoritmo de giro (rotação) e cálculo de horas."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Algoritmo de órbita (translação) e cálculo de dias (ano bissexto)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Discussão sobre as consequências da rotação (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Roda de conversa e preenchimento do Diário de Bordo."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com voz de maravilhamento)",
              "texto": "O foguete treme, ruge e... decola! Em poucos minutos, o céu azul se transforma na escuridão do espaço. Kyro e Kyra flutuam na cabine, maravilhados. Ao olharem pela janela, veem a Terra. Daqui de cima, tudo parece diferente: os oceanos brilhantes, os continentes e as nuvens brancas em movimento. Hélio entra no rádio: 'Antes de partirmos para longe, observem os movimentos do nosso planeta. Eles definem o dia, a noite e as estações do ano. Tudo na natureza segue um ciclo perfeito, como um código de programação!'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Giro do Dia e da Noite (Matemática) (8 min)",
              "contexto": "Sincronizar os relógios da nave com a rotação da Terra.",
              "proposta": "Usar 4 blocos de \"Virar à Direita\" (ou Esquerda) em sequência para simular um giro de 360 graus do peão no próprio eixo.",
              "resolucao": "23,9 horas x 3 voltas = 71,7 horas.",
              "abordagem": "Mostre como o algoritmo de 4 giros de 90 graus cria uma rotação completa. Auxilie na multiplicação com a vírgula."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — A Dança das Estações (Matemática) (10 min)",
              "contexto": "Registrar o tempo da translação.",
              "proposta": "Criar um quadrado de movimento (Avançar, Virar) dentro de um bloco de Repetir (Loop) para simular a órbita contínua.",
              "resolucao": "365,25 dias x 4 anos = 1461 dias exatos.",
              "abordagem": "Explore o conceito do \",25\". Quatro quartos (0,25 x 4) formam 1 dia inteiro, explicando matematicamente o ano bissexto."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "Kyro erra o código e a nave sai de órbita em direção à Lua!",
              "proposta": "Explicar o que aconteceria se a Terra não fizesse o movimento de rotação. Resolução esperada (Ciências): Um lado ficaria extremamente quente (sempre dia) e o outro extremamente frio (sempre noite), dificultando ou extinguindo a vida como conhecemos. Abordagem pedagógica: Promova um debate rápido. Deixe que eles imaginem as consequências climáticas extremas.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que a rotação da Terra e um \"Loop\" de programação têm em comum?",
                "Por que a matemática precisa ser exata (como o 365,25) para a ciência funcionar?"
              ],
              "registro": "Desenhar a Terra vista do espaço e escrever a palavra \"ROTAÇÃO\".",
              "celebracao": "Bater palmas em ritmo cíclico (loop) e gritar: \"TERRA EM MOVIMENTO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 03 — A Lua de perto",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 3,
              "titulo": "A Lua de perto",
              "meta": "Semestre 1 | 5º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A nave faz uma parada de emergência na Lua. O conceito computacional abordado é o Reflexo de dados, ensinando que nem todo elemento processa informações; alguns apenas as repassam (como a Lua reflete a luz do Sol). A matemática aprofunda o conceito de porcentagem, essencial para o 5º ano, ligado visualmente às fases da Lua."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF05CO03",
                  "Reflexo de dados: Compreender um elemento que não processa, apenas repassa a informação."
                ],
                [
                  "Matemática",
                  "EF05MA06",
                  "Associar as representações 10%, 25%, 50%, 75% e 100% respectivamente à décima parte, quarta parte, metade, três quartos e um inteiro."
                ],
                [
                  "Ciências (Bônus)",
                  "EF05CI12",
                  "Concluir sobre a periodicidade das fases da Lua, com base na observação e no registro."
                ],
                [
                  "Língua Portuguesa",
                  "EF05LP15",
                  "Ler/ouvir e compreender textos narrativos."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Perguntar quem já olhou para a Lua à noite."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Algoritmo de transporte de dados e cálculo de porcentagem (complementar)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Condicional para fotos e cálculo de porcentagem (fração)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Explicar as fases da Lua (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Roda de conversa e preenchimento do Diário de Bordo."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom misterioso)",
              "texto": "Depois de quase colidirem, Kyro e Kyra conseguem estabilizar a nave e decidem fazer uma parada na Lua. Ao pousarem, o silêncio é absoluto. Não há vento, não há céu azul, apenas a escuridão e uma superfície coberta de crateras cinzentas. 'A Lua não tem atmosfera', explica Lia pelo rádio. 'E ela também não brilha sozinha! A luz que vemos da Terra é apenas a Lua funcionando como um espelho gigante, refletindo a luz do Sol. É como um computador que não cria dados, apenas repassa a informação que recebe.'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — O Reflexo de Dados (Matemática) (8 min)",
              "contexto": "Configurar o painel solar para captar a luz refletida.",
              "proposta": "O peão vai até o Sol, pega um bloco de Ação (dado) e o leva até a Terra, passando pela Lua sem alterar o bloco.",
              "resolucao": "Se 50% está iluminada e o total é 100%, então 100% - 50% = 50% (ou 50 partes) estão escuras.",
              "abordagem": "Reforce a ideia de que o \"todo\" em porcentagem é sempre 100%."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Calculando as Fases (Matemática) (10 min)",
              "contexto": "Calcular porcentagens de iluminação para tirar fotos.",
              "proposta": "",
              "resolucao": "A face voltada para nós é 100%. O Quarto Crescente é a metade disso. Metade de 100% (ou de 50%, dependendo da interpretação do aluno sobre a esfera total vs face visível). Resposta esperada baseada no enunciado: 50% da face visível.",
              "abordagem": "Desenhe um círculo na lousa, divida ao meio e depois em quartos. Mostre visualmente o que significa 50% e 25%."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "Câmeras falham! O computador não entende a mudança de formato da Lua.",
              "proposta": "Explicar por que a Lua muda de fase. Resolução esperada (Ciências): A Lua orbita a Terra. Conforme ela se move, vemos diferentes ângulos da parte que está sendo iluminada pelo Sol. A Lua em si não muda de forma. Abordagem pedagógica: Use uma bola (Lua) e a lanterna do celular (Sol) para demonstrar as sombras mudando conforme você move a bola ao redor da cabeça de um aluno (Terra).",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que significa dizer que a Lua \"reflete\" dados?",
                "O que foi mais difícil: entender a porcentagem ou as fases da Lua?"
              ],
              "registro": "Desenhar a superfície da Lua e escrever \"REFLETIR\".",
              "celebracao": "Grito de guerra: \"BRILHANDO COMO A LUA!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 04 — Mercúrio: O planeta esquecido",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 4,
              "titulo": "Mercúrio: O planeta esquecido",
              "meta": "Semestre 1 | 5º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A missão chega a Mercúrio, o planeta mais próximo do Sol. A narrativa impõe urgência devido às temperaturas extremas. O conceito computacional é Tempo de execução, ensinando que algoritmos não precisam apenas estar corretos, mas devem ser eficientes (rápidos). A matemática foca na adição e subtração de números decimais para calcular amplitudes térmicas e tempo."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF05CO01",
                  "Tempo de execução: Garantir que programas rodem dentro de um limite de tempo estabelecido (eficiência)."
                ],
                [
                  "Matemática",
                  "EF05MA02",
                  "Ler, escrever e ordenar números racionais na forma decimal."
                ],
                [
                  "Matemática",
                  "EF05MA19",
                  "Resolver problemas envolvendo medidas de tempo e temperatura."
                ],
                [
                  "Ciências (Bônus)",
                  "EF05CI02",
                  "Aplicar conhecimentos sobre a atmosfera para entender a regulação térmica."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Perguntar quem acha que Mercúrio é sempre quente."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Otimização de rota e cálculo de amplitude térmica."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Uso de loop para eficiência e cálculo de tempo total."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Explicar o papel da atmosfera na temperatura (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Roda de conversa e preenchimento do Diário de Bordo."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de urgência)",
              "texto": "Deixando a Lua para trás, a nave acelera em direção ao centro do Sistema Solar. O calor começa a aumentar. 'Aproximando de Mercúrio, o primeiro planeta!', anuncia Kyro. 'Atenção redobrada!', avisa Hélio da Terra. 'Mercúrio não tem atmosfera para segurar o calor. De dia é extremamente quente, mas de noite é um gelo congelante. Vocês precisam pousar, coletar amostras e decolar antes que o Sol nasça. É uma corrida contra o tempo!'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Corrida Contra o Relógio (Matemática) (8 min)",
              "contexto": "Executar o programa de coleta rapidamente antes que os trajes derretam.",
              "proposta": "Montar a rota mais curta possível (menor número de blocos) da nave até a rocha e voltar.",
              "resolucao": "Amplitude térmica: 427,5 (máxima) + 173,2 (mínima absoluta) = 600,7 °C de diferença.",
              "abordagem": "Explique que a temperatura cai abaixo de zero. A distância entre +400 e -100 é 500. Arme a conta na lousa alinhando as vírgulas: 427,5 + 173,2."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Otimizando a Coleta (Matemática) (10 min)",
              "contexto": "Recalcular a coleta para não estourar o tempo.",
              "proposta": "Usar um bloco de Loop (Repetir) 3x envolvendo o bloco de Ação (Coletar), em vez de colocar três blocos de Ação separados.",
              "resolucao": "2,4 minutos x 5 amostras = 12,0 minutos.",
              "abordagem": "Mostre como o código fica \"mais limpo\" e rápido com o Loop. Na matemática, mostre que 2,4 x 5 = 12,0 (o zero após a vírgula pode ser ocultado, resultando em 12 minutos exatos)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "O Sol está nascendo e a temperatura sobe rápido!",
              "proposta": "Explicar por que Mercúrio esfria tanto à noite. Resolução esperada (Ciências): Mercúrio não tem atmosfera densa. A atmosfera da Terra funciona como um \"cobertor\" que segura o calor do Sol durante a noite. Sem esse cobertor, o calor de Mercúrio escapa todo para o espaço. Abordagem pedagógica: Use a analogia do cobertor em uma noite fria.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Por que fazer um código com menos blocos é melhor em uma emergência?",
                "O que aprendemos sobre a atmosfera do nosso planeta hoje?"
              ],
              "registro": "Desenhar Mercúrio com calor extremo e escrever \"TEMPERATURA\".",
              "celebracao": "Grito de guerra: \"RÁPIDOS COMO MERCÚRIO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 05 — Vênus: A armadilha brilhante",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 5,
              "titulo": "Vênus: A armadilha brilhante",
              "meta": "Semestre 1 | 5º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A equipe chega a Vênus, um planeta enganosamente belo, mas extremamente hostil. O conceito computacional é a Validação de entrada, que ensina a importância de checar condições (usando Se/Então) antes de executar um comando perigoso. A matemática aprofunda o cálculo de porcentagem, enquanto as Ciências exploram o perigoso Efeito Estufa venusiano."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF05CO02",
                  "Validação de entrada: Verificar as condições ambientais antes de executar o programa."
                ],
                [
                  "Matemática",
                  "EF05MA06",
                  "Associar representações percentuais e resolver problemas envolvendo porcentagens simples."
                ],
                [
                  "Ciências (Bônus)",
                  "EF05CI03",
                  "Discutir as consequências do efeito estufa (natural e artificial) na temperatura planetária."
                ],
                [
                  "Língua Portuguesa",
                  "EF05LP15",
                  "Ler/ouvir e compreender textos narrativos."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Perguntar se a estrela mais brilhante do céu (Estrela D'Alva) é estrela ou planeta."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Algoritmo de validação (Se/Então) e cálculo de porcentagem."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Algoritmo de sobrevoo (Loop) e cálculo de fração/porcentagem de pressão."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Explicar o Efeito Estufa (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Roda de conversa e preenchimento do Diário de Bordo."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de alerta e suspense)",
              "texto": "Fugindo do calor de Mercúrio, a nave se aproxima do planeta mais brilhante do céu: Vênus. De longe, ele parece lindo e muito parecido com a Terra em tamanho. 'Vamos pousar!', diz Kyro, já animado. 'PAREM!', grita Lia pelo rádio. 'O sistema de alerta disparou! A atmosfera de Vênus é densa, tóxica e a pressão esmagaria a nave. É o planeta mais inóspito de todos. O computador precisa verificar todas as condições de entrada antes de executar qualquer comando de pouso!'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Validação de Entrada (Matemática) (8 min)",
              "contexto": "Checar as condições de segurança antes de abrir a porta.",
              "proposta": "Usar o bloco de Condição (Se/Então). O código deve ser: SE (pressão alta), ENTÃO (Virar à Esquerda e Avançar para longe).",
              "resolucao": "96% de 100 litros. 96/100 x 100 = 96 litros de CO₂.",
              "abordagem": "Reforce que \"por cento\" significa literalmente \"por cada cem\". Se temos 100 litros, 96 deles são CO₂."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Peso da Atmosfera (Matemática) (10 min)",
              "contexto": "Medir a pressão sobrevoando as nuvens em um padrão quadrado.",
              "proposta": "Usar um Loop (Repetir 4x) com [Avançar + Virar à Direita + Investigar].",
              "resolucao": "45 é exatamente a metade de 90. A metade em porcentagem é 50%.",
              "abordagem": "Conecte a fração (metade, 1/2) com a porcentagem (50%). Mostre que o equipamento suportaria apenas metade da pressão de Vênus."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "O escudo térmico falha devido ao calor preso nas nuvens!",
              "proposta": "Explicar o que é o Efeito Estufa e por que Vênus é tão quente. Resolução esperada (Ciências): Os gases densos (como CO₂) deixam a luz do Sol entrar, mas bloqueiam o calor de sair de volta para o espaço (como o vidro de um carro fechado no sol). Abordagem pedagógica: Faça a analogia do carro fechado no sol. Aproveite para mencionar rapidamente que na Terra o efeito estufa natural é bom, mas o excesso de poluição o torna perigoso (aquecimento global).",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Por que é importante o computador \"validar\" (checar) uma informação antes de agir?",
                "O que Vênus nos ensina sobre a poluição na Terra?"
              ],
              "registro": "Desenhar a nave escapando das nuvens tóxicas e escrever \"ATMOSFERA\".",
              "celebracao": "Grito de guerra: \"VALIDAR E ESCAPAR!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 06 — Marte: A base secreta",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 6,
              "titulo": "Marte: A base secreta",
              "meta": "Semestre 1 | 5º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Os alunos exploram Marte e descobrem uma base abandonada. O conceito de pensamento computacional abordado é a Leitura de logs (interpretar registros deixados por programas ou usuários anteriores para tomar decisões). Na matemática, o foco é o cálculo de médias, enquanto as Ciências exploram a busca por água e a possibilidade de vida extraterrestre."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF05CO02",
                  "Leitura de logs: Interpretar registros deixados por um programa anterior para tomada de decisão."
                ],
                [
                  "Matemática",
                  "EF05MA24",
                  "Interpretar dados estatísticos e calcular médias aritméticas."
                ],
                [
                  "Matemática",
                  "EF05MA06",
                  "Resolver problemas envolvendo porcentagens (10%, 25%, 50%, 75% e 100%) e aplicar o conceito em outras porcentagens simples."
                ],
                [
                  "Ciências (Bônus)",
                  "EF05CI02",
                  "Discutir a importância da água para a manutenção da vida."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Perguntar o que eles sabem sobre o \"Planeta Vermelho\"."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Execução de log antigo e cálculo de média de temperatura."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Loop de escavação e cálculo de porcentagem (área de oceano)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Tempestade de areia e debate sobre vida em Marte (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Roda de conversa e preenchimento do Diário de Bordo."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de mistério)",
              "texto": "A nave aterrissa suavemente em uma superfície vermelha e poeirenta. Marte! O planeta mais parecido com a Terra em termos de dia e estações do ano. Kyro e Kyra vestem seus trajes e saem para explorar. Logo à frente, encontram algo surpreendente: rastros de uma antiga base de pesquisa abandonada! 'Quem esteve aqui antes?', pergunta Kyra, intrigada. Hélio responde da Torre de Comando: 'Para descobrir, vocês precisam ler os logs (registros) deixados nos computadores antigos. Eles guardam segredos sobre a água líquida que existiu em Marte no passado!'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Leitura de Logs (Matemática) (8 min)",
              "contexto": "Seguir as instruções exatas de um log antigo para reativar a energia.",
              "proposta": "Traduzir a frase \"Avance 2, vire à direita, avance 1, acione\" em blocos físicos de programação.",
              "resolucao": "Soma: 60 + 50 + 70 = 180. Divisão: 180 / 3 = -60 °C (média).",
              "abordagem": "Ensine o conceito de média aritmética: somar tudo e dividir pela quantidade de itens. Mostre que, mesmo sendo números negativos, a lógica da média se mantém."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — O Mistério da Água (Matemática) (10 min)",
              "contexto": "Analisar dados sobre água escavando em 4 pontos.",
              "proposta": "Usar Loop (Repetir 4x) com blocos de Movimento e Ação (Cavar).",
              "resolucao": "19% de 144. Conta: (19 x 144) / 100 = 2736 / 100 = 27,36 milhões de km².",
              "abordagem": "Ensine a calcular porcentagens que não terminam em zero, multiplicando o valor pela porcentagem e dividindo por 100 (ou multiplicando por 0,19)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "Uma tempestade de areia vermelha trava o computador!",
              "proposta": "Explicar a relação entre água e vida. Resolução esperada (Ciências): A água líquida é o solvente universal essencial para todas as reações químicas da biologia que conhecemos. Onde há água, há chance de haver vida (mesmo que microscópica). Abordagem pedagógica: Questione se eles acham que alienígenas precisam ser homenzinhos verdes ou se poderiam ser apenas bactérias no gelo.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que é um \"log\" e por que é importante registrar o que fazemos no computador?",
                "Por que calcular a média (como a da temperatura) é mais útil do que olhar apenas um dia isolado?"
              ],
              "registro": "Desenhar a base em Marte na tempestade e escrever \"REGISTROS\".",
              "celebracao": "Grito de guerra: \"DESVENDANDO MARTE!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 07 — O cinturão de asteroides",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 7,
              "titulo": "O cinturão de asteroides",
              "meta": "Semestre 1 | 5º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A nave enfrenta o perigoso Cinturão de Asteroides. O conceito de PC é o Desvio de obstáculos em sequência, que exige o uso de condicionais encadeadas (vários Se/Então juntos) para navegação em tempo real. A matemática foca na subtração e multiplicação de números decimais grandes."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF05CO02",
                  "Desvio de obstáculos: Utilizar condicionais encadeadas em tempo real para navegação segura."
                ],
                [
                  "Matemática",
                  "EF05MA02",
                  "Ler, escrever e ordenar números racionais na forma decimal."
                ],
                [
                  "Matemática",
                  "EF05MA08",
                  "Resolver problemas de multiplicação e divisão com números racionais."
                ],
                [
                  "Ciências (Bônus)",
                  "EF05CI11",
                  "Compreender os corpos celestes menores (asteroides) do Sistema Solar."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Dinâmica de desviar de cadeiras na sala de aula."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Condicionais encadeadas e subtração de decimais."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Loop de navegação cuidadosa e multiplicação de decimais."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Antena quebrada e discussão sobre origem dos asteroides (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Roda de conversa e preenchimento do Diário de Bordo."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com muita tensão e velocidade)",
              "texto": "Deixando Marte, a nave se depara com um cenário assustador: entre Marte e Júpiter há um campo enorme de rochas espaciais flutuando no vazio. É o Cinturão de Asteroides! 'Temos centenas de obstáculos pela frente!', avisa Kyra, tensa. 'Este é o maior desafio de programação da missão até agora', diz Lia pelo rádio. 'Vocês precisam programar a nave para desviar dessas rochas em sequência e em tempo real. Não podemos parar!'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Desvio em Sequência (Matemática) (8 min)",
              "contexto": "Tomar decisões rápidas ao encontrar rochas.",
              "proposta": "Encadeamento: [SE obstáculo à frente -> ENTÃO Virar à Esquerda] conectado a outro [SE obstáculo à esquerda -> ENTÃO Virar à Direita].",
              "resolucao": "940,0 - 525,4 = 414,6 km de diferença.",
              "abordagem": "Lembre os alunos de colocar \",0\" no 940 para alinhar as vírgulas corretamente na subtração."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Calculando a Rota Segura (Matemática) (10 min)",
              "contexto": "Calcular distância e ajustar velocidade.",
              "proposta": "Loop (Repetir 5x) com blocos [Avançar 1] e [Analisar/Radar].",
              "resolucao": "1,5 x 4,5 = 6,75 milhões de quilômetros.",
              "abordagem": "Na multiplicação de decimais (1,5 x 4,5), multiplique como se fossem inteiros (15 x 45 = 675) e depois conte duas casas decimais para colocar a vírgula (6,75)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "Um asteroide atinge a antena! Rádio mudo!",
              "proposta": "Explicar o que são asteroides e sua origem. Resolução esperada (Ciências): Asteroides são restos rochosos da formação do Sistema Solar que não conseguiram se juntar para formar um planeta (devido à gravidade de Júpiter). Alguns caem na Terra (meteoritos) se suas órbitas forem perturbadas. Abordagem pedagógica: Diferencie asteroide (no espaço) de meteoro (estrela cadente, queimando na atmosfera) e meteorito (pedra que atinge o chão).",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como o computador decide o que fazer quando há várias opções (condicionais encadeadas)?",
                "Qual a diferença entre um planeta e um asteroide?"
              ],
              "registro": "Desenhar a nave desviando de pedras gigantes e escrever \"ASTEROIDE\".",
              "celebracao": "Grito de guerra: \"DESVIAR E AVANÇAR!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 08 — Júpiter: O gigante que protege",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 8,
              "titulo": "Júpiter: O gigante que protege",
              "meta": "Semestre 1 | 5º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A nave chega a Júpiter, o maior planeta do sistema. O conceito de PC é o Tratamento de exceções (como lidar com erros ou situações anômalas gigantes, como a Grande Mancha Vermelha). A matemática trabalha porcentagem e multiplicação com decimais, enquanto as Ciências explicam a função protetora da gravidade de Júpiter."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF05CO03",
                  "Tratamento de exceções: Definir ações para quando o programa encontra algo inesperado."
                ],
                [
                  "Matemática",
                  "EF05MA06",
                  "Resolver problemas envolvendo porcentagens simples."
                ],
                [
                  "Matemática",
                  "EF05MA08",
                  "Resolver problemas de multiplicação com números racionais."
                ],
                [
                  "Ciências (Bônus)",
                  "EF05CI11",
                  "Compreender a influência da gravidade dos planetas gigantes no Sistema Solar."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Perguntar qual é o maior planeta do Sistema Solar."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Código de exceção e cálculo de porcentagem (massa)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Loop de força máxima e multiplicação de decimais (tamanho)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Gravidade intensa e debate sobre proteção da Terra (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Roda de conversa e preenchimento do Diário de Bordo."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com voz grave e imponente)",
              "texto": "Sem comunicação com a Terra, Kyro e Kyra continuam a viagem e chegam ao maior planeta do Sistema Solar: Júpiter. Ele é tão gigantesco que mais de mil Terras caberiam dentro dele! 'Olhe aquilo!', aponta Kyro para uma mancha vermelha rodopiando nas nuvens do planeta. 'É a Grande Mancha Vermelha', diz Kyra, lembrando das aulas de Hélio. 'Uma tempestade que dura há séculos! E ela é tão forte que está afetando a nossa rota!'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Tratamento de Exceções (Matemática) (8 min)",
              "contexto": "Ensinar o computador a lidar com a anomalia da tempestade.",
              "proposta": "Usar bloco Se/Então/Senão: SE (tempestade) ENTÃO (escudos + desvio) SENÃO (Avançar).",
              "resolucao": "71% de 1000. Conta: (71 x 1000) / 100 = 71000 / 100 = 710 unidades.",
              "abordagem": "Mostre o truque de cortar os zeros ao dividir por 100."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Programando em Escala (Matemática) (10 min)",
              "contexto": "Multiplicar a força dos motores para escapar da gravidade.",
              "proposta": "Loop (Repetir 4x) com bloco de Ação (Aumentar força).",
              "resolucao": "12.742 x 1,3 = 16.564,6 km.",
              "abordagem": "Multiplicação com 4 dígitos por decimal. Arme a conta na lousa e faça junto com eles, lembrando de colocar a vírgula no final (uma casa decimal)."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "A gravidade de Júpiter atrai a nave com força total!",
              "proposta": "Explicar como a gravidade de Júpiter protege a Terra. Resolução esperada (Ciências): Por ser massivo, a gravidade de Júpiter atrai ou desvia a maioria dos cometas e asteroides que vêm dos confins do Sistema Solar, impedindo que eles atinjam os planetas rochosos (como a Terra). Funciona como um \"aspirador de pó\" cósmico. Abordagem pedagógica: Use a analogia de um irmão mais velho grande que entra na frente de uma bola atirada contra o irmão menor.",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que é uma \"exceção\" em um programa de computador?",
                "Como nos sentiríamos na Terra se Júpiter não existisse?"
              ],
              "registro": "Desenhar Júpiter com a Grande Mancha Vermelha e escrever \"GRAVIDADE\".",
              "celebracao": "Grito de guerra: \"FORÇA GIGANTE!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 09 — As luas de Júpiter",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 9,
              "titulo": "As luas de Júpiter",
              "meta": "Semestre 1 | 5º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "A nave explora as dezenas de luas de Júpiter. O conceito de PC é Sistemas dentro de sistemas (loops aninhados), ilustrando como subsistemas operam dentro de um sistema maior. A matemática aborda cálculo de médias e subtração de decimais. As Ciências focam na lua Europa e na astrobiologia (busca por vida)."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF05CO04",
                  "Sistemas dentro de sistemas: Compreender subsistemas (loops aninhados) que funcionam de forma independente."
                ],
                [
                  "Matemática",
                  "EF05MA24",
                  "Calcular médias aritméticas."
                ],
                [
                  "Matemática",
                  "EF05MA02",
                  "Operar com números racionais na forma decimal."
                ],
                [
                  "Ciências (Bônus)",
                  "EF05CI02",
                  "Discutir condições para a existência de vida (água e energia)."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Perguntar quantas luas a Terra tem e quantas eles acham que Júpiter tem."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história."
                ],
                [
                  "Desafio 1 — Matemática",
                  "8 min",
                  "Loops aninhados e cálculo de média (tamanho das luas)."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Zigue-zague com blocos e subtração de decimais."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "7 min",
                  "Gravidade puxando e debate sobre vida sob o gelo (Ciências)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Roda de conversa e preenchimento do Diário de Bordo."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de descoberta)",
              "texto": "Conseguindo escapar da tempestade, Kyro e Kyra notam que Júpiter não está sozinho. Ele é como um mini-sistema solar, cercado por 95 luas conhecidas! 'Precisamos navegar entre elas para encontrar a rota de saída', diz Kyro, analisando o radar. Eles descobrem que Europa, uma dessas luas, é coberta de gelo, mas pode ter um oceano de água líquida escondido por baixo. É um dos lugares mais promissores para encontrar vida fora da Terra!"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Sistemas Dentro de Sistemas (Matemática) (8 min)",
              "contexto": "Entender o movimento das luas ao redor de Júpiter.",
              "proposta": "Colocar um bloco de Loop dentro de outro bloco de Loop. (Ex: Repetir 2x[Avançar, Repetir 3x[Girar]]).",
              "resolucao": "Soma: 3640 + 3120 + 5260 + 4820 = 16840. Média: 16840 / 4 = 4.210 km.",
              "abordagem": "Demonstre na lousa a soma com cuidado e depois a divisão por 4."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Navegando no Labirinto (Matemática) (10 min)",
              "contexto": "Passar entre as luas sem bater.",
              "proposta": "Padrão zigue-zague: [Avançar, Virar Esquerda, Avançar, Virar Direita].",
              "resolucao": "2,4 - 0,6 = 1,8 milhões de km.",
              "abordagem": "Subtração com decimais envolvendo \"empréstimo\" (o 4 pede emprestado ao 2). Mostre na lousa."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "O frio intenso pode congelar a nave! Aceleração necessária!",
              "proposta": "Refletir sobre vida sob o gelo de Europa. Resolução esperada (Ciências): Para ter vida, precisa de água líquida e energia. Em Europa, a luz do Sol não passa pelo gelo. Mas o calor gerado pela força gravitacional de Júpiter (que \"amassa\" a lua) aquece o oceano por baixo, podendo gerar fontes termais submarinas que sustentariam vida (como bactérias). Abordagem pedagógica: Explique que a vida não precisa só de luz do Sol, mas de energia (neste caso, térmica/geotérmica).",
              "tempo": "7 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "Como é um \"loop dentro de um loop\" na vida real? (Ex: Os ponteiros dos minutos e das horas no relógio).",
                "Vocês acham que encontraremos peixes ou bactérias no oceano de Europa?"
              ],
              "registro": "Desenhar a lua Europa (gelo por cima, oceano por baixo) e escrever \"OCEANO\".",
              "celebracao": "Grito de guerra: \"MISTÉRIOS DO GELO!\""
            }
          ]
        ]
      },
      {
        "titulo": "Aula 10 — Relatório da primeira metade da missão",
        "paginas": [
          [
            {
              "tipo": "aula-header",
              "n": 10,
              "titulo": "Relatório da primeira metade da missão",
              "meta": "Semestre 1 | 5º Ano do Ensino Fundamental | Duração: 50 minutos",
              "visaoGeral": "Esta é a Avaliação Intermediária 1. Não é uma prova, mas uma aula de consolidação. O foco computacional é a Organização lógica de dados (algoritmos de triagem). Na matemática, revisa-se soma de decimais e ordenação de informações. Nas Ciências, os alunos fazem um balanço crítico do que aprenderam sobre os planetas internos e Júpiter."
            },
            {
              "tipo": "tabela",
              "legenda": "Objetivos de Aprendizagem e Alinhamento BNCC",
              "colunas": [
                "Área",
                "Habilidade BNCC",
                "Descrição"
              ],
              "linhas": [
                [
                  "Pensamento Computacional",
                  "EF05CO01",
                  "Organização de dados: Criar algoritmos para classificar e ordenar informações coletadas."
                ],
                [
                  "Matemática",
                  "EF05MA02",
                  "Ordenar números racionais (distâncias) e compreender o sistema decimal."
                ],
                [
                  "Matemática",
                  "EF05MA07",
                  "Resolver problemas de adição com números racionais na forma decimal."
                ],
                [
                  "Ciências (Bônus)",
                  "EF05CI11",
                  "Sintetizar conhecimentos sobre as características dos planetas do Sistema Solar."
                ]
              ]
            }
          ],
          [
            {
              "tipo": "tabela",
              "legenda": "Estrutura da Aula (50 minutos)",
              "colunas": [
                "Etapa",
                "Tempo",
                "Descrição"
              ],
              "linhas": [
                [
                  "Aquecimento",
                  "5 min",
                  "Fazer uma chamada rápida dos planetas visitados até agora."
                ],
                [
                  "Storytelling Inicial",
                  "10 min",
                  "Leitura dramática da história."
                ],
                [
                  "Desafio 1 — Matemática",
                  "10 min",
                  "Código de triagem e ordenação dos planetas."
                ],
                [
                  "Desafio 2 — Matemática",
                  "10 min",
                  "Revisão de diário e soma de decimais (combustível)."
                ],
                [
                  "Fator Perturbador + Bônus",
                  "5 min",
                  "Questionário da Torre de Comando (Resumo crítico)."
                ],
                [
                  "Reflexão e Celebração",
                  "10 min",
                  "Roda de conversa e preenchimento do Diário de Bordo."
                ]
              ]
            },
            {
              "tipo": "narrativa",
              "legenda": "Narrativa Inicial (10 minutos)",
              "instrucao": "(Leia com tom de alívio e formalidade)",
              "texto": "BZZZ... CRACK... 'Kyro? Kyra? Estão me ouvindo?' A voz de Lia corta o silêncio da cabine. A comunicação foi restaurada! 'Graças a Deus vocês estão bem!', diz Hélio, aliviado. 'Nós perdemos o contato quando o asteroide atingiu a antena. Precisamos que vocês organizem todos os dados que coletaram até agora. Terra, Lua, Mercúrio, Vênus, Marte, o Cinturão e Júpiter. É hora do relatório oficial!'"
            }
          ],
          [
            {
              "tipo": "titulo-secao",
              "texto": "Os Desafios (25 minutos)"
            },
            {
              "tipo": "desafio",
              "legenda": "Desafio 1 — Organizando os Dados (Matemática) (10 min)",
              "contexto": "Separar as informações misturadas no computador.",
              "proposta": "Criar um código de triagem com condicionais. SE mais próximo — seguir o caminho, senão ir para o próximo.",
              "resolucao": "Ordem crescente de distância do Sol: 1. Mercúrio, 2. Vênus, 3. Terra, 4. Marte, 5. Júpiter.",
              "abordagem": "Avalie se eles lembram a ordem natural do Sistema Solar sem precisar consultar material externo."
            }
          ],
          [
            {
              "tipo": "desafio",
              "legenda": "Desafio 2 — Consolidando a Matemática (Matemática) (10 min)",
              "contexto": "Confirmar cálculos de gasto de energia.",
              "proposta": "Não há montagem de blocos nova aqui; eles devem revisar os dados e focar no cálculo matemático.",
              "resolucao": "12,5 + 35,2 = 47,7 tanques de energia.",
              "abordagem": "Avalie a capacidade de armar a conta de adição com decimais (vírgula sob vírgula) de forma autônoma."
            }
          ],
          [
            {
              "tipo": "fator",
              "instrucao": "",
              "texto": "A Torre de Comando envia um questionário oficial urgente.",
              "proposta": "Resumir qual planeta foi mais perigoso e qual foi mais interessante. Resolução esperada: Resposta pessoal. Eles devem justificar (ex: Vênus foi perigoso pela pressão/ácido; Europa foi interessante pela chance de vida). Abordagem pedagógica: Avalie a capacidade de argumentação e síntese. O aluno consegue justificar sua escolha com dados científicos aprendidos nas aulas passadas?",
              "tempo": "5 min"
            },
            {
              "tipo": "reflexao",
              "perguntas": [
                "O que significa \"avaliar\" ou \"fazer um relatório\"? É só dar notas ou é organizar o que aprendemos?",
                "Qual foi o momento de maior trabalho em equipe da turma até agora?"
              ],
              "registro": "Desenhar o momento favorito da missão e escrever \"RELATÓRIO\".",
              "celebracao": "Grito de guerra: \"DADOS ENVIADOS, MISSÃO CUMPRIDA!\""
            }
          ]
        ]
      }
    ]
  }
};


/* ══════════════════════════════════════════════
   SKILLIBLOCKS — lógica da interface (single-page)
   ══════════════════════════════════════════════ */

const ORDEM_TURMAS = ["1","2","3","4","5"];

const state = { turma: "1", carAtivo: 0 };

/* ── barra de turmas ── */
function montarBarraTurmas(){
  const bar = document.getElementById('turmaBar');
  let html = '<span class="tb-label">Turmas</span>';
  ORDEM_TURMAS.forEach(id=>{
    const nome = TURMAS[id].nome;
    const ativo = id === state.turma ? 'active' : '';
    html += `<button class="tb-pill ${ativo}" data-turma="${id}">${nome}</button>`;
  });
  bar.innerHTML = html;
  bar.querySelectorAll('.tb-pill').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      state.turma = btn.dataset.turma;
      state.carAtivo = 0;
      montarBarraTurmas();
      renderHome();
    });
  });
}

/* ── carrossel de aulas (tela inicial) ── */
function renderHome(){
  const turma = TURMAS[state.turma];
  document.getElementById('turmaTagNome').textContent = turma.nome;

  const track = document.getElementById('aulasTrack');
  let html = '';
  turma.aulas.forEach((aula, i)=>{
    const n = String(i+1).padStart(2,'0');
    const ciclo = i % 4;
    const ativo = i === state.carAtivo ? 'active' : '';
    html += `
      <div class="aula-card ${ativo}" data-idx="${i}">
        <div class="aula-capa c${ciclo}">
          <div class="capa-top">
            <span class="capa-index">Aula ${n}</span>
            <span class="capa-play"><i class="fa-solid fa-play"></i></span>
          </div>
          <div class="capa-mock">
            <span class="m-line w1"></span>
            <span class="m-line w2"></span>
            <span class="m-line w3"></span>
          </div>
        </div>
        <div class="aula-info">
          <span class="aula-tag">Aula ${n}</span>
          <div class="aula-title">${aula.titulo}</div>
          <div class="aula-cta"><i class="fa-solid fa-play"></i> Abrir aula</div>
        </div>
      </div>`;
  });
  track.innerHTML = html;

  track.querySelectorAll('.aula-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      const idx = parseInt(card.dataset.idx, 10);
      if(idx === state.carAtivo){
        abrirAula(idx);
      } else {
        state.carAtivo = idx;
        renderHome();
        card.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
      }
    });
  });
}

function moverCarrossel(delta){
  const turma = TURMAS[state.turma];
  state.carAtivo = Math.max(0, Math.min(turma.aulas.length - 1, state.carAtivo + delta));
  renderHome();
  const track = document.getElementById('aulasTrack');
  track.children[state.carAtivo].scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
}

/* ── renderizador de blocos (estilo página de PDF) ── */
function renderBloco(b){
  switch(b.tipo){
    case 'capa':
      return `
        <div class="pdf-capa">
          <div class="capa-icon"><i class="fa-solid fa-city"></i></div>
          <span class="kit">Kit do Professor</span>
          <h1>${b.titulo}</h1>
          <span class="capa-divider"></span>
          <p class="meta">${b.meta}</p>
          ${b.anoMaterial ? `<span class="capa-badge">${b.anoMaterial}</span>` : ''}
          <div class="brand">
            <div class="sb"><span class="sk">SKILLI</span><span class="bl">BLOCKS</span></div>
            <div class="steam">Skilliu · Steam Education</div>
          </div>
        </div>`;
    case 'dados-pessoais':
      return `
        <h2 class="pdf-h2">Dados Pessoais</h2>
        <div class="pdf-field">Nome</div>
        <div class="pdf-field">E-mail</div>
        <div class="pdf-field split"><span>Telefone</span><span>Cidade/Estado</span></div>
        <p class="pdf-center">Dados Internacionais de Catalogação na Publicação (CIP)<br>Câmara Brasileira do Livro, SP, Brasil</p>
        <div class="pdf-boxtext">${b.lorem}</div>`;
    case 'sumario':
      return `
        <div class="pdf-ribbon-title">Sumário</div>
        ${b.itens.map(it => `
          <div class="sumario-item">
            <div class="si-title si-link" onclick="irParaAula(${it.n})" role="button" tabindex="0">AULA ${it.n} | <em>${it.titulo}</em></div>
            <div class="si-line">PC: ${it.pc}</div>
            <p class="si-desc">${it.desc}</p>
          </div>`).join('')}`;
    case 'orientacoes':
      return `
        <h2 class="pdf-h2">Orientações Gerais</h2>
        ${b.paragrafos.map(p => `<p>${p}</p>`).join('')}
        <div class="pdf-boxtext">${b.destaque}</div>`;
    case 'aula-header':
      return `
        <span class="aula-ribbon">AULA ${b.n}</span>
        <h3 class="aula-title">${b.titulo}</h3>
        <p class="aula-meta">${b.meta}</p>
        <h4>Visão Geral da Aula</h4>
        <p>${b.visaoGeral}</p>`;
    case 'tabela':
      return `
        <h4>${b.legenda}</h4>
        <table class="pdf-table">
          <thead><tr>${b.colunas.map(c=>`<th>${c}</th>`).join('')}</tr></thead>
          <tbody>${b.linhas.map(l => `<tr>${l.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>`;
    case 'narrativa':
      return `
        <h4>${b.legenda}</h4>
        <p class="pdf-note">${b.instrucao}</p>
        <div class="pdf-quote">${b.texto}</div>`;
    case 'titulo-secao':
      return `<h2 class="pdf-h2">${b.texto}</h2>`;
    case 'desafio':
      return `
        <h4>${b.legenda}</h4>
        <div class="pdf-dark"><span class="dk-label">Contexto narrativo</span><p>${b.contexto}</p></div>
        <p><strong>Proposta:</strong> ${b.proposta}</p>
        <div class="pdf-dark"><span class="dk-label">Resolução esperada</span><p>${b.resolucao}</p></div>
        <p><strong>Abordagem pedagógica:</strong> ${b.abordagem}</p>`;
    case 'fator': {
      const _fatorMatch = (b.proposta || '').match(/^([\s\S]*?)\s*(Abordagem(?:\s+pedagógica)?):\s*([\s\S]*)$/);
      const _fatorProposta = _fatorMatch ? _fatorMatch[1].trim() : (b.proposta || '');
      const _fatorAbordagemLabel = _fatorMatch ? _fatorMatch[2] : '';
      const _fatorAbordagem = _fatorMatch ? _fatorMatch[3].trim() : '';
      return `
        <div class="pdf-banner"><h4>Fator Perturbador e Desafio Bônus${b.tempo ? ' ('+b.tempo+')' : ''}</h4></div>
        <p class="pdf-note">${b.instrucao}</p>
        <div class="pdf-quote">${b.texto}</div>
        <p><strong>Proposta:</strong> ${_fatorProposta}</p>
        ${_fatorAbordagem ? `<p><strong>${_fatorAbordagemLabel}:</strong> ${_fatorAbordagem}</p>` : ''}`;
    }
    case 'reflexao':
      return `
        <h4>Roda de Reflexão e Celebração</h4>
        <ul class="reflex">${b.perguntas.map(p=>`<li>${p}</li>`).join('')}</ul>
        <p><strong>Registro no Diário de Bordo:</strong> ${b.registro}</p>
        <p><strong>Celebração:</strong> "${b.celebracao}"</p>`;
    default:
      return `<p>${b.texto || ''}</p>`;
  }
}

/* ── visualizador (tela 2) — rolagem contínua tipo "papiro", sem quebra dentro de cada folha ── */
let aulaAtual = null;
let paginaAtual = 0;
let scrollListenerAtivo = null;

/* navegação a partir de um link do Sumário — n é o número da aula (1-based) */
/* folha (0-based) onde comeca o conteudo real da Aula 1 em cada turma
   (pula capa / dados pessoais / sumario / orientacoes gerais) */
function irParaAula(n){
  abrirAula(n - 1);
  if(n === 1){
    const paginas = TURMAS[state.turma].aulas[0].paginas;
    const startIdx = paginas.findIndex(p => p[0] && p[0].tipo === 'aula-header' && p[0].n === 1);
    if(startIdx !== -1){
      paginaAtual = startIdx;
      requestAnimationFrame(()=>{
        atualizarControlesPagina(startIdx);
        irParaSlide(startIdx);
      });
    }
  }
}

function abrirAula(idx){
  aulaAtual = TURMAS[state.turma].aulas[idx];
  paginaAtual = 0;

  document.getElementById('vbTurmaNome').textContent = TURMAS[state.turma].nome;
  document.getElementById('vbAulaTitle').textContent = aulaAtual.titulo;
  document.getElementById('vbAulaNum').textContent = `${TURMAS[state.turma].nome} — Aula ${idx + 1}`;

  document.body.classList.add('sb-viewer-mode');
  document.getElementById('viewHome').hidden = true;
  document.getElementById('viewViewer').hidden = false;

  renderTodosSlides();
}

function fecharVisualizador(){
  const scroll = document.getElementById('viewerScroll');
  if(scrollListenerAtivo){ scroll.removeEventListener('scroll', scrollListenerAtivo); scrollListenerAtivo = null; }
  document.body.classList.remove('sb-viewer-mode');
  document.getElementById('viewViewer').hidden = true;
  document.getElementById('viewHome').hidden = false;
  window.scrollTo({top:0});
}

/* renderiza TODAS as folhas empilhadas verticalmente, em rolagem contínua.
   Cada folha é um bloco único (sem rolagem interna própria) — a "quebra" visual
   só acontece na transição entre uma folha e a próxima, nunca dentro da mesma folha. */
function renderTodosSlides(){
  const scroll = document.getElementById('viewerScroll');
  const total = aulaAtual.paginas.length;

  let html = '';
  aulaAtual.paginas.forEach((pagina, i)=>{
    const conteudo = pagina.map(renderBloco).join('');
    html += `
      <section class="viewer-slide" data-idx="${i}">
        <div class="pdf-page">
          ${conteudo}
          <div class="pdf-corner"></div>
          <span class="pdf-pagenum">${i+1}</span>
        </div>
      </section>`;
  });
  scroll.innerHTML = html;
  scroll.scrollTop = 0;

  document.getElementById('vbPagTotal').textContent = total;
  atualizarControlesPagina(0);

  /* ao rolar, descobre qual folha está mais próxima do topo visível
     e atualiza o indicador de página — funciona bem mesmo com folhas
     de alturas diferentes, já que não há mais "slides" de tela cheia */
  if(scrollListenerAtivo) scroll.removeEventListener('scroll', scrollListenerAtivo);
  const slides = Array.from(scroll.querySelectorAll('.viewer-slide'));
  let ticking = false;
  scrollListenerAtivo = ()=>{
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(()=>{
      const marcador = scroll.getBoundingClientRect().top + 140; // linha de referência perto do topo
      let atual = 0;
      for(let i=0;i<slides.length;i++){
        if(slides[i].getBoundingClientRect().top <= marcador) atual = i;
        else break;
      }
      if(atual !== paginaAtual){
        paginaAtual = atual;
        atualizarControlesPagina(paginaAtual);
      }
      ticking = false;
    });
  };
  scroll.addEventListener('scroll', scrollListenerAtivo, { passive:true });
}

function atualizarControlesPagina(i){
  const total = aulaAtual.paginas.length;
  document.getElementById('vbPagAtual').textContent = i+1;
  document.getElementById('vbPrev').disabled = i === 0;
  document.getElementById('vbNext').disabled = i === total-1;
}

function irParaSlide(i){
  const scroll = document.getElementById('viewerScroll');
  const alvo = scroll.querySelector(`.viewer-slide[data-idx="${i}"]`);
  if(alvo) alvo.scrollIntoView({behavior:'smooth', block:'start'});
}

function paginaAnterior(){ if(paginaAtual > 0) irParaSlide(paginaAtual - 1); }
function proximaPagina(){ if(paginaAtual < aulaAtual.paginas.length - 1) irParaSlide(paginaAtual + 1); }


/* ── bloqueios básicos de cópia/print (dissuasão, não infalível) ── */
function aplicarProtecoes(){
  document.addEventListener('contextmenu', e=>{
    if(e.target.closest('.pdf-page') || e.target.closest('.aula-card')) e.preventDefault();
  });
  document.addEventListener('keydown', e=>{
    const bloquear = (e.ctrlKey || e.metaKey) && ['p','s','u'].includes(e.key.toLowerCase());
    if(bloquear) e.preventDefault();
  });
}

/* ── inicialização ── */
document.addEventListener('DOMContentLoaded', ()=>{
  montarBarraTurmas();
  renderHome();
  aplicarProtecoes();

  document.getElementById('carPrev').addEventListener('click', ()=> moverCarrossel(-1));
  document.getElementById('carNext').addEventListener('click', ()=> moverCarrossel(1));
  document.getElementById('btnVoltarAulas').addEventListener('click', fecharVisualizador);
  document.getElementById('btnVoltarMini').addEventListener('click', fecharVisualizador);
  document.getElementById('vbPrev').addEventListener('click', paginaAnterior);
  document.getElementById('vbNext').addEventListener('click', proximaPagina);
});


/* ══════════════════════════════════════════════════════════════
   SKILLIBLOCKS — integração com o site oficial + roteamento de URL
   ══════════════════════════════════════════════════════════════ */
(function(){
  const hub = document.getElementById('skilliblocksHub');
  const btnFechar = document.getElementById('sbVoltarSite');
  const turmaBarEl = document.getElementById('turmaBar');
  if (!hub) return;

  const SB_BASE = '/material-skilliblocks';
  const SB_TITULO_ORIGINAL = document.title;

  /* transforma o id interno da turma ("3") na URL pública ("/material-skilliblocks/3ano") */
  function sbBuildURL(turmaId){
    if (!turmaId || turmaId === '1') return SB_BASE;
    return SB_BASE + '/' + turmaId + 'ano';
  }

  /* faz o caminho inverso: lê a URL atual e descobre se é uma rota do hub e qual turma */
  function sbCasarRota(pathname){
    let path = pathname.replace(/\/+$/, '');
    if (path === SB_BASE) return { match:true, turma:null };
    if (path.indexOf(SB_BASE + '/') === 0) {
      const slug = path.slice((SB_BASE + '/').length);
      const m = slug.match(/^([1-5])ano$/);
      if (m) return { match:true, turma:m[1] };
    }
    return { match:false };
  }

  function sbAtualizarTitulo(turmaId){
    if (turmaId && typeof TURMAS !== 'undefined' && TURMAS[turmaId]) {
      document.title = 'SkilliBlocks — ' + TURMAS[turmaId].nome + ' · Skilliu';
    } else {
      document.title = 'SkilliBlocks — Área do Professor · Skilliu';
    }
  }

  /* ajusta o estado interno (turma selecionada) e manda o Skilliblocks renderizar de novo */
  function sbAplicarConteudo(turmaId){
    state.turma = (turmaId && TURMAS[turmaId]) ? turmaId : '1';
    state.carAtivo = 0;
    if (typeof montarBarraTurmas === 'function') montarBarraTurmas();
    if (typeof renderHome === 'function') renderHome();
  }

  function sbMostrarHub(turmaId, pushHistory){
    sbAplicarConteudo(turmaId);
    hub.hidden = false;
    document.body.classList.add('sb-hub-open');
    hub.scrollTop = 0;
    sbAtualizarTitulo(state.turma);
    if (pushHistory) {
      history.pushState({ skilliblocks:true, turma: state.turma }, '', sbBuildURL(state.turma));
    }
  }

  function sbEsconderHub(pushHistory){
    if (typeof fecharVisualizador === 'function') fecharVisualizador();
    hub.hidden = true;
    document.body.classList.remove('sb-hub-open');
    document.title = SB_TITULO_ORIGINAL;
    if (pushHistory) {
      history.pushState({ skilliblocks:false }, '', '/');
    }
  }

  /* lê a URL atual e mostra/esconde o hub de acordo — usada na carga inicial e no botão voltar/avançar do navegador */
  function sbAplicarRotaAtual(){
    const rota = sbCasarRota(window.location.pathname);
    if (rota.match) {
      sbMostrarHub(rota.turma, false);
    } else if (!hub.hidden) {
      sbEsconderHub(false);
    }
  }

  if (btnFechar) btnFechar.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = '../index.html';
  });

  /* delegação: o clique numa turma já é tratado pelo Skilliblocks (troca o estado e renderiza);
     aqui só refletimos a troca na URL, sem duplicar a renderização */
  if (turmaBarEl) {
    turmaBarEl.addEventListener('click', function(e){
      if (!e.target.closest('.tb-pill')) return;
      sbAtualizarTitulo(state.turma);
      history.pushState({ skilliblocks:true, turma: state.turma }, '', sbBuildURL(state.turma));
    });
  }

  window.addEventListener('popstate', sbAplicarRotaAtual);

  /* aplica a rota assim que o script carrega — é isso que faz o link direto funcionar */
  sbAplicarRotaAtual();
})();
