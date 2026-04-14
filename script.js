function gerar() {
  const disciplina = document.getElementById('disciplina').value;
  const serie = document.getElementById('serie').value;
  const tema = document.getElementById('tema').value;

  const plano = `
PLANO DE AULA

Disciplina: ${disciplina}
Série: ${serie}
Tema: ${tema}

Objetivo:
Compreender o conteúdo de forma estruturada.

Explicação:
Introdução ao tema com exemplos práticos.

Atividades:
1. Exercício individual
2. Discussão em grupo

Avaliação:
1. Questão objetiva
2. Questão discursiva
`;

  document.getElementById('output').textContent = plano;
}
