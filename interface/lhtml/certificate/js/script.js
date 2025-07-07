document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ELEMENT SELECTORS ---
    const langButtons = document.querySelectorAll('.lang-selector button');
    const translatableElements = document.querySelectorAll('[data-key]');

    const contentArea = document.querySelector('.content-display-area');
    const flipToBackBtn = document.querySelector('.flip-to-back-btn');
    const flipToFrontBtn = document.querySelector('.flip-to-front-btn');

    const btnCertificate = document.getElementById('btn-certificate');
    const btnAccess = document.getElementById('btn-access');
    const btnPrint = document.getElementById('print-btn');
    const btnDownload = document.getElementById('btn-download');
    const copyLinkBtn = document.getElementById('copy-link-btn');
    const copyTooltip = document.getElementById('copy-tooltip');

    // --- 2. TRANSLATIONS OBJECT ---
    const translations = {
        pt: {
            back_to_profile: "Voltar ao perfil",
            cert_title: "CERTIFICADO<br>DE CONCLUSÃO",
            student_info: "<strong>MUSSA SEIDI</strong>",
            cert_text: "concluiu o curso online com carga horária estimada em 8 horas.",
            completed_on: "Finalizado em 15 de janeiro de 2025",
            course_label: "Curso_",
            course_title: "HTML: AMBIENTES DE DESENVOLVIMENTO, ESTRUTURA DE ARQUIVOS E TAGS",
            course_title_sidebar: "HTML: ambientes de desenvolvimento, estrutura de arquivos e tags",
            lessons_title: "AULAS",
            lesson_1: "O editor de código VSCode",
            lesson_2: "Documentação e HTML",
            lesson_3: "Layout e tags semânticas",
            lesson_4: "Estilizando o projeto com CSS",
            lesson_5: "Super estilizando o seu CSS",
            activities_info: "Foram feitas 54 de 54 atividades.",
            formal_cert: "Certificado Frente",
            access_course: "Certificado Verso",
            print_cert: "Imprimir",
            course_label_sidebar: "CURSO",
            congrats_text: "Parabéns! Você acabou de avançar mais um passo e mergulhou profundamente em conhecimento com a gente. Após baixar seu certificado não deixe de acompanhar o material extra que separamos para você continuar estudando!",
            download_cert: "BAIXAR CERTIFICADO",
            share_text: "Compartilhe sua conquista e não se esqueça da hashtag <strong>#Aprenda</strong> 🔥",
            also_try: "Experimente estudar também:",
            rec_label_formation: "FORMAÇÃO",
            rec_label_formation_2: "FORMAÇÃO",
            rec_angular: "<strong>Angular: crie aplicações web ágeis</strong>",
            rec_react: "<strong>React: desenvolva aplicações web usando JSX e Hooks</strong>",
            link_copied: "Link copiado!",
            generating_pdf: '<i class="fa-solid fa-spinner fa-spin"></i> GERANDO...'
        },
        en: {
            back_to_profile: "Back to profile",
            cert_title: "CERTIFICATE<br>OF COMPLETION",
            student_info: "<strong>MUSSA SEIDI</strong>",
            cert_text: "completed the online course with an estimated workload of 8 hours.",
            completed_on: "Finished on January 15, 2025",
            course_label: "Course_",
            course_title: "HTML: DEVELOPMENT ENVIRONMENTS, FILE STRUCTURE, AND TAGS",
            course_title_sidebar: "HTML: development environments, file structure, and tags",
            lessons_title: "LESSONS",
            lesson_1: "The VSCode code editor",
            lesson_2: "Documentation and HTML",
            lesson_3: "Layout and semantic tags",
            lesson_4: "Styling the project with CSS",
            lesson_5: "Super-styling your CSS",
            activities_info: "54 of 54 activities were completed.",
            formal_cert: "Certificate Front",
            access_course: "Certificate Back",
            print_cert: "Print",
            course_label_sidebar: "COURSE",
            congrats_text: "Congratulations! You've just gone one step further and dived deep into knowledge with us. After downloading your certificate, be sure to follow the extra material that we have separated for you to continue studying!",
            download_cert: "DOWNLOAD CERTIFICATE",
            share_text: "Share your achievement and don't forget the hashtag <strong>#Learn</strong> 🔥",
            also_try: "Also try studying:",
            rec_label_formation: "FORMATION",
            rec_label_formation_2: "FORMATION",
            rec_angular: "<strong>Angular: create agile web applications</strong>",
            rec_react: "<strong>React: develop web applications using JSX and Hooks</strong>",
            link_copied: "Link copied!",
            generating_pdf: '<i class="fa-solid fa-spinner fa-spin"></i> GENERATING...'
        }
    };

    // --- 3. FLIP CARD LOGIC ---
    const updateActiveButton = (activeButton) => {
        btnCertificate.classList.remove('active');
        btnAccess.classList.remove('active');
        activeButton.classList.add('active');
    };

    const flipToFront = () => {
        contentArea.classList.remove('is-flipped');
        updateActiveButton(btnCertificate);
    };

    const flipToBack = () => {
        contentArea.classList.add('is-flipped');
        updateActiveButton(btnAccess);
    };

    if (contentArea && flipToBackBtn && flipToFrontBtn && btnCertificate && btnAccess) {
        flipToBackBtn.addEventListener('click', flipToBack);
        flipToFrontBtn.addEventListener('click', flipToFront);
        btnCertificate.addEventListener('click', flipToFront);
        btnAccess.addEventListener('click', flipToBack);
    }

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

    // --- 5. ACTION BUTTONS LOGIC ---

    // A. Print Function (using browser's print dialog)
    const triggerPrint = (event) => {
        event.preventDefault(); // Prevent default anchor/button behavior
        // Ensure the front of the certificate is visible for printing
        if (contentArea.classList.contains('is-flipped')) {
            flipToFront();
        }
        // Allow the DOM to update before printing
        setTimeout(() => {
            window.print();
        }, 100);
    };

    // B. PDF Generation Function (using html2pdf.js)
    const generatePdf = (event) => {
        event.preventDefault(); // Prevent default anchor or button behavior
        const clickedButton = event.currentTarget;

        // Get the current language to show the correct loading text
        const activeLangButton = document.querySelector('.lang-selector button.active');
        const currentLang = activeLangButton ? activeLangButton.dataset.lang : 'pt';

        // Show a loading indicator for better user experience
        const originalBtnText = clickedButton.innerHTML;
        clickedButton.innerHTML = translations[currentLang].generating_pdf;
        clickedButton.style.pointerEvents = 'none'; // Disable clicks during generation

        // Get the elements to be included in the PDF
        const front = document.querySelector('.certificate-front');
        const back = document.querySelector('.certificate-back');
        
        // Create a temporary container to hold both sides for PDF generation
        const tempContainer = document.createElement('div');
        const frontClone = front.cloneNode(true);
        const backClone = back.cloneNode(true);

        // Style clones for proper rendering (remove transforms, ensure flow)
        frontClone.style.position = 'relative';
        backClone.style.transform = 'none'; // Reset the flip effect
        backClone.style.position = 'relative';

        // Add a page break element
        const pageBreak = document.createElement('div');
        pageBreak.style.pageBreakAfter = 'always';

        tempContainer.appendChild(frontClone);
        tempContainer.appendChild(pageBreak);
        tempContainer.appendChild(backClone);

        // Define html2pdf options
        const options = {
            margin: 0.984, // Aproximadamente 2.5cm (em polegadas)
            filename: 'certificado-conclusao.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, letterRendering: true },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' },
            pagebreak: { mode: ['css', 'legacy'] }
        };

        // Generate PDF from the temporary container and handle button state
        html2pdf().from(tempContainer).set(options).save().then(() => {
            clickedButton.innerHTML = originalBtnText;
            clickedButton.style.pointerEvents = 'auto';
        }).catch((err) => {
            console.error("Erro ao gerar o PDF:", err);
            clickedButton.innerHTML = originalBtnText;
            clickedButton.style.pointerEvents = 'auto';
            alert("Ocorreu um erro ao gerar o PDF. Tente novamente.");
        });
    };

    // C. Assign the print function to both buttons for consistent behavior
    if (btnPrint) btnPrint.addEventListener('click', triggerPrint);
    if (btnDownload) btnDownload.addEventListener('click', generatePdf);

    // --- 6. COPY TO CLIPBOARD LOGIC ---
    if (copyLinkBtn && copyTooltip) {
        copyLinkBtn.addEventListener('click', () => {
            // The URL to be copied. Using the current page URL as an example.
            const linkToCopy = window.location.href;

            navigator.clipboard.writeText(linkToCopy).then(() => {
                // On success, show the tooltip
                copyTooltip.classList.add('visible');

                // Hide the tooltip after 2 seconds
                setTimeout(() => {
                    copyTooltip.classList.remove('visible');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy link: ', err);
            });
        });
    }
});