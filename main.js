// Capturando os elementos do DOM com base nos atributos de dados
const buttons = document.querySelectorAll('[data-card-button]');
const contents = document.querySelectorAll('[data-card-content]');

// Ocultar o conteúdo de todos os cards inicialmente
contents.forEach(content => {
    content.style.display = 'none';
});

// Adicionar um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Encontrar o índice do botão clicado nos botões
        const buttonIndex = Array.from(buttons).indexOf(button);

        // Verificar o estado do conteúdo associado ao botão clicado
        if (contents[buttonIndex].style.display === 'none' || contents[buttonIndex].style.display === '') {
            // Primeiro, oculta todos os conteúdos
            contents.forEach(content => {
                content.style.display = 'none';
            });

            // Em seguida, mostra o conteúdo associado ao botão clicado
            contents[buttonIndex].style.display = 'block';

            // Atualiza o texto de todos os botões para 'Leia mais'
            buttons.forEach(btn => {
                btn.textContent = 'Leia mais';
            });

            // Atualiza o texto do botão clicado para 'Mostrar menos'
            button.textContent = 'Mostrar menos';
        } else {
            // Se o conteúdo já estiver visível, fecha-o
            contents[buttonIndex].style.display = 'none';

            // Atualiza o texto do botão para 'Leia mais'
            button.textContent = 'Leia mais';
        }
    });
});
