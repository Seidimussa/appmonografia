document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ELEMENT SELECTORS ---
    const langButtons = document.querySelectorAll('.lang-selector button');
    const translatableElements = document.querySelectorAll('[data-key]');

    const certificateView = document.getElementById('certificate-view');
    const classesView = document.getElementById('classes-view');

    const btnCertificate = document.getElementById('btn-certificate');
    const btnClasses = document.getElementById('btn-classes');
    const btnPrint = document.getElementById('btn-print');
    const btnDownload = document.getElementById('btn-download');

    // --- 2. TRANSLATIONS OBJECT ---
    const translations = {
        pt: {
            back_to_profile: "Voltar ao perfil",
            cert_title: "CERTIFICADO<br>DE CONCLUSÃO",
            student_name: "<strong>MUSSA SEIDI</strong>",
            cert_text: "concluiu o curso online com carga horária estimada em 8 horas.",
            completed_on: "Finalizado em 15 de janeiro de 2025",
            course_label: "Curso_",
            course_title: "HTML E CSS: AMBIENTES DE DESENVOLVIMENTO, ESTRUTURA DE ARQUIVOS E TAGS",
            course_title_sidebar: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
            lessons_title: "AULAS",
            lesson_1: "O editor de código VSCode",
            lesson_2: "Documentação e HTML",
            lesson_3: "Layout e tags semânticas",
            lesson_4: "Estilizando o projeto com CSS",
            lesson_5: "Super estilizando o seu CSS",
            activities_info: "Foram feitas 54 de 54 atividades.",
            formal_cert: "Certificado formal",
            access_course: "Aulas do curso",
            print_cert: "Imprimir",
            course_label_sidebar: "CURSO",
            congrats_text: "Parabéns! Você acabou de avançar mais um passo e mergulhou profundamente em conhecimento com a gente. Após baixar seu certificado não deixe de acompanhar o material extra que separamos para você continuar estudando!",
            download_cert: "BAIXAR CERTIFICADO",
            share_text: "Compartilhe sua conquista e não se esqueça da hashtag <strong>#Aprenda</strong> 🔥",
            also_try: "Experimente estudar também:",
            rec_label_formation: "FORMAÇÃO",
            rec_label_formation_2: "FORMAÇÃO",
            rec_angular: "Angular: crie aplicações web ágeis",
            rec_react: "React: desenvolva aplicações web usando JSX e Hooks"
        },
        en: {
            back_to_profile: "Back to profile",
            cert_title: "CERTIFICATE<br>OF COMPLETION",
            student_name: "<strong>MUSSA SEIDI</strong>",
            cert_text: "completed the online course with an estimated workload of 8 hours.",
            completed_on: "Finished on January 15, 2025",
            course_label: "Course_",
            course_title: "HTML & CSS: DEVELOPMENT ENVIRONMENTS, FILE STRUCTURE, AND TAGS",
            course_title_sidebar: "HTML & CSS: development environments, file structure, and tags",
            lessons_title: "LESSONS",
            lesson_1: "The VSCode code editor",
            lesson_2: "Documentation and HTML",
            lesson_3: "Layout and semantic tags",
            lesson_4: "Styling the project with CSS",
            lesson_5: "Super-styling your CSS",
            activities_info: "54 of 54 activities were completed.",
            formal_cert: "Formal Certificate",
            access_course: "Course Lessons",
            print_cert: "Print",
            course_label_sidebar: "COURSE",
            congrats_text: "Congratulations! You've just gone one step further and dived deep into knowledge with us. After downloading your certificate, be sure to follow the extra material that we have separated for you to continue studying!",
            download_cert: "DOWNLOAD CERTIFICATE",
            share_text: "Share your achievement and don't forget the hashtag <strong>#Learn</strong> 🔥",
            also_try: "Also try studying:",
            rec_label_formation: "TRACK",
            rec_label_formation_2: "TRACK",
            rec_angular: "Angular: create agile web applications",
            rec_react: "React: develop web applications using JSX and Hooks"
        }
    };

    // --- 3. VIEW SWITCHING LOGIC ---
    const showView = (viewToShow) => {
        certificateView.classList.add('hidden');
        classesView.classList.add('hidden');
        viewToShow.classList.remove('hidden');
    };

    const updateActiveButton = (activeButton) => {
        btnCertificate.classList.remove('active');
        btnClasses.classList.remove('active');
        activeButton.classList.add('active');
    };

    btnCertificate.addEventListener('click', () => {
        showView(certificateView);
        updateActiveButton(btnCertificate);
    });

    btnClasses.addEventListener('click', () => {
        showView(classesView);
        updateActiveButton(btnClasses);
    });

    // --- 4. TRANSLATION LOGIC ---
    const updateText = (lang) => {
        translatableElements.forEach(element => {
            const key = element.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    };

    langButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedLang = button.dataset.lang;

            // Update active state on buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update page text
            updateText(selectedLang);
        });
    });

    // --- 5. PRINT LOGIC ---
    const triggerPrint = (event) => {
        event.preventDefault(); // Prevent default anchor behavior for download link
        // Ensure certificate is visible for printing
        showView(certificateView);
        updateActiveButton(btnCertificate);

        // Allow the DOM to update before printing
        setTimeout(() => {
            window.print();
        }, 100);
    };

    btnPrint.addEventListener('click', triggerPrint);
    btnDownload.addEventListener('click', triggerPrint);

});