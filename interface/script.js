document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade do botão "Fechar"
    const closeButton = document.querySelector('.close-button');

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            // Exemplo de ação: Volta para a página anterior no histórico do navegador
            // Ou você pode redirecionar para uma URL específica:
            // window.location.href = 'outra_pagina.html';
            window.history.back();
            console.log('Botão Fechar clicado!');
        });
    }

    // 2. Exemplo de como você poderia atualizar o progresso (apenas a barra linear aqui)
    // Para o progresso circular, seria mais complexo e talvez envolvesse bibliotecas ou SVG.

    const progressCards = document.querySelectorAll('.card');

    progressCards.forEach(card => {
        const progressBar = card.querySelector('.progress-bar::before'); // Não funciona assim diretamente para pseudo-elementos
        const progressText = card.querySelector('.progress-info .progress');

        if (progressText) {
            // Exemplo: Pegar o progresso do texto "1/20"
            const textContent = progressText.textContent; // Ex: "1/20" ou "3/16"
            const parts = textContent.split('/');
            if (parts.length === 2) {
                const completed = parseInt(parts[0]);
                const total = parseInt(parts[1]);

                if (!isNaN(completed) && !isNaN(total) && total > 0) {
                    const percentage = (completed / total) * 100;

                    // Esta parte só funcionaria se .progress-bar::before fosse um elemento real
                    // Para manipular pseudo-elementos, você teria que alterar uma custom property CSS
                    // ou criar um elemento real para a barra de progresso.
                    // Exemplo para um elemento real:
                    const innerProgressBar = document.createElement('div');
                    innerProgressBar.className = 'inner-progress';
                    innerProgressBar.style.width = `${percentage}%`;
                    const existingProgressBar = card.querySelector('.progress-bar');
                    if(existingProgressBar && !existingProgressBar.querySelector('.inner-progress')) {
                        existingProgressBar.appendChild(innerProgressBar);
                    }
                }
            }
        }
    });

    // Para o progresso circular, você normalmente faria algo como:
    // function updateCircularProgress(element, percentage) {
    //     // Lógica para manipular SVG ou conic-gradient
    //     // Ex: element.style.backgroundImage = `conic-gradient(purple ${percentage}%, #eee ${percentage}%)`;
    // }
    // Encontraria os elementos de progresso circular e chamaria esta função com os dados.

});