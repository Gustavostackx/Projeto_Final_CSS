# Projeto_Final_CSS
Projeto final do CSS - Tarefa Stackx
Documentação do CSS 

Link do Readme no GitHub: https://github.com/Gustavostackx/Projeto_Final_CSS.git 

Arquivo: style.css 


Documentação do Layout em CSS 

Documentação do Layout em CSS 

1. Organização Geral do CSS 

O layout foi construído utilizando uma estrutura clara dividida por seções, com reset global e variáveis no :root para cores, sombras e consistência visual. As seções incluem: Hero, Cursos, Skills, Formulário, Footer e Bottom Tabs. 

2. Princípios de Layout Utilizados 

- Uso de CSS Grid e Media Queries para construir um layout totalmente responsivo. 

- A seção Hero utiliza grid para organizar texto e imagem. 

- A seção Cursos utiliza grid com 1 coluna no mobile e 3 colunas no desktop. 

- O layout adapta-se automaticamente para diferentes tamanhos de tela. 

3. Estilo Visual 

- Utilização de cores definidas em variáveis. 

- Gradientes aplicados aos títulos das seções. 

- Bordas arredondadas e sombras suaves para um design moderno. 

- Glassmorphism aplicado nas abas inferiores. 

4. Componentes do Layout 

Hero: 

- Grid com imagem e texto alinhados. 

- Título grande e espaçamentos amplos. 

- Botão com animação no hover. 

Seção de Cursos: 

- Cards com bordas suaves, sombras e efeito de ampliação ao passar o mouse. 

Skills: 

- Lista flexível usando Flexbox. 

- Etiquetas com fundo translúcido e bordas leves. 

Formulário: 

- Campos organizados verticalmente. 

- Efeitos de foco com sombra. 

- Botão com animação no hover. 

Footer: 

- Seção minimalista e centralizada. 

Bottom Tabs: 

- Abas fixas no rodapé. 

- Estilo futurista com blur e brilho. 

- Escondidas automaticamente em telas pequenas. 

5. Acessibilidade 

- Títulos com bom contraste. 

- Botões com foco visível. 

- Layout espaçado e limpo. 

6. Performance 

- Uso de variáveis para reduzir repetições. 

- Gradientes leves sem imagens pesadas. 

- CSS puro, sem frameworks adicionais. 
Organização e Estrutura 

O CSS foi organizado em seções claras (variáveis, reset, hero, cursos, skills, formulário e footer), o que facilita manutenção, leitura e futuras alterações. 

 

Metodologia e Nomeação 

A nomeação segue uma lógica inspirada no BEM, mantendo componentes e seus elementos bem separados, como: 

- .hero__content 

- .curso__btn 

- .skills__lista 

 

Responsividade 

Foram usados breakpoints e unidades flexíveis para garantir bom comportamento em telas pequenas e grandes. O layout usa grid e flexbox para melhor adaptação. 

 

Acessibilidade 

O CSS mantém contrastes fortes, áreas clicáveis amplas, fontes legíveis e foco visível em botões e campos de formulário. 

 

Performance 

O código evita seletores complexos, reutiliza estilos e utiliza variáveis CSS para reduzir repetição. 

 

O usuário deve baixar as dependências via comando: npm install 
