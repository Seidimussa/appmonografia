document.addEventListener('DOMContentLoaded', () => {
    const chapterItems = document.querySelectorAll('.chapter-item');
    const resetButton = document.getElementById('reset-progress-button');
    const STORAGE_KEY = 'completedChapters';

    /**
     * Salva o progresso no localStorage.
     */
    function saveProgress() {
        const completedIds = [];
        chapterItems.forEach(item => {
            if (item.classList.contains('completed')) {
                completedIds.push(item.id);
            }
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(completedIds));
    }

    /**
     * Carrega o progresso do localStorage quando a página é aberta.
     */
    function loadProgress() {
        const savedProgress = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (savedProgress && savedProgress.length > 0) {
            savedProgress.forEach(chapterId => {
                const item = document.getElementById(chapterId);
                if (item) {
                    item.classList.add('completed');
                    const nextChapterId = item.dataset.unlocks;
                    if (nextChapterId) {
                        const nextChapter = document.getElementById(nextChapterId);
                        if (nextChapter) {
                            nextChapter.classList.remove('locked');
                        }
                    }
                }
            });
        }
    }

    // Adiciona o ouvinte de clique para cada capítulo
    chapterItems.forEach(item => {
        item.addEventListener('click', (event) => {
            if (item.classList.contains('locked')) {
                event.preventDefault();
                return;
            }
            if (item.classList.contains('completed')) {
                return;
            }

            item.classList.add('completed');
            const nextChapterId = item.dataset.unlocks;
            if (nextChapterId) {
                const nextChapter = document.getElementById(nextChapterId);
                if (nextChapter) {
                    nextChapter.classList.remove('locked');
                }
            }
            
            saveProgress();
        });
    });
    
    // Adiciona o ouvinte para o botão de reset
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            if (confirm('Tem certeza que deseja apagar todo o seu progresso?')) {
                localStorage.removeItem(STORAGE_KEY);
                location.reload();
            }
        });
    }

    // Carrega o progresso assim que a página é aberta
    loadProgress();
});