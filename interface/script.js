document.addEventListener('DOMContentLoaded', () => {
    /**
     * Mapeia a URL de cada curso para a chave correspondente no localStorage.
     * IMPORTANTE: Você talvez precise ajustar essas chaves se elas forem diferentes.
     * Baseei-me no padrão de 'courseProgress_js_full' do seu curso full-stack.
     */
    const courseKeyMap = {
        'lhtml/index.html': 'courseProgress_html',
        'lcss/index.html': 'courseProgress_css',
        'ljavascript/index.html': 'courseProgress_js',
        'lsql/index.html': 'courseProgress_sql',
        'lreact/index.html': 'courseProgress_react',
        'ltypescript/index.html': 'courseProgress_ts',
        'lpython/index.html': 'courseProgress_python',
        'cfrontend/index.html': 'courseProgress_frontend',
        'cbackend/index.html': 'courseProgress_backend',
        'cfullstack/index.html': 'courseProgress_js_full', // Chave confirmada do seu script
        'cpython/index.html': 'courseProgress_python_full'
    };

    /**
     * Calcula o progresso com base no número de seções concluídas.
     * Uma seção é considerada concluída se todas as suas lições (exceto o certificado) estiverem completas.
     * @param {object} courseData - O objeto de progresso do curso lido do localStorage.
     * @returns {{completed: number, total: number, percentage: number}}
     */
    function calculateProgress(courseData) {
        if (!courseData || !Array.isArray(courseData.sections) || courseData.sections.length === 0) {
            return { completed: 0, total: 0, percentage: 0 };
        }

        let completedSectionsCount = 0;
        const totalSections = courseData.sections.length;

        courseData.sections.forEach(section => {
            const regularLessons = section.lessons.filter(l => l.type !== 'certificate');
            if (regularLessons.length > 0 && regularLessons.every(l => l.completed)) {
                completedSectionsCount++;
            }
        });

        const percentage = totalSections > 0 ? (completedSectionsCount / totalSections) * 100 : 0;
        return { completed: completedSectionsCount, total: totalSections, percentage };
    }

    /**
     * Itera sobre todos os cards de curso na página e atualiza seu progresso.
     */
    function updateAllCourseProgress() {
        const courseCards = document.querySelectorAll('.card-link');

        courseCards.forEach(cardLink => {
            const href = cardLink.getAttribute('href');
            const storageKey = courseKeyMap[href];

            if (!storageKey) return;

            const progressDataJSON = localStorage.getItem(storageKey);
            if (progressDataJSON) {
                try {
                    const courseData = JSON.parse(progressDataJSON);
                    const progress = calculateProgress(courseData);

                    // Atualiza o texto do progresso (ex: "5/20")
                    const progressTextElement = cardLink.querySelector('.progress-info .progress');
                    if (progressTextElement) {
                        progressTextElement.textContent = `${progress.completed}/${progress.total}`;
                    }

                    // Atualiza a largura da barra de progresso
                    const progressBarElement = cardLink.querySelector('.progress-bar');
                    if (progressBarElement) {
                        progressBarElement.style.setProperty('--progress-width', `${progress.percentage}%`);
                    }
                } catch (e) {
                    console.error(`Erro ao processar o progresso para o curso ${storageKey}:`, e);
                }
            }
        });
    }

    // Executa a função principal para atualizar a UI.
    updateAllCourseProgress();

    // Atualiza o ano no rodapé
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});