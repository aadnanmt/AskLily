(function () {
    'use strict';

    const chatWindow = document.getElementById('chat-window');
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const suggestionArea = document.getElementById('suggestion-area');
    const scrollLeftBtn = document.getElementById('scroll-left-btn');
    const scrollRightBtn = document.getElementById('scroll-right-btn');
    const bgChangeBtn = document.getElementById('bg-change-btn');
    const bgUploadInput = document.getElementById('bg-upload');
    const botAvatarUrl = 'img/adlily.jpg';

    const suggestionChips = [
        "Siapa Adnan?", "Apa saja skill-nya?", "Lihat proyek", "Apa prinsip hidupnya?",
        "Pengalamannya selama ini?", "Karakter yang dimilikinya!", "Apa makanan favoritnya?",
        "Visi dia!", "Misi dia!", "Apa tujuan dia?", "Bagaimana cara menghubunginya?",
        "Model AI yang sering dia pakai?", "Apa passion-nya?", "Apa cita-citanya?",
        "Fakta unik tentang dia?", "Kesukaannya, apa saja?"
    ];

    const knowledgeBase = {
        "adnan": "<b>Adnan</b> adalah seorang <b>pelajar</b> SMK jurusan Teknik Komputer dan Jaringan (TKJ). Dia sangat passionate untuk menjadi seorang <b>Software development dan Prompt Designer</b>. Saat ini, fokusnya adalah mendalami <b>Dunia Linux, AI generatif, dan Backend Development.</b> Keren kan!",
        "siapa": "<b>Adnan</b> adalah seorang <b>pelajar</b> SMK jurusan Teknik Komputer dan Jaringan (TKJ). Dia sangat passionate untuk menjadi seorang Software development dan Prompt Designer. Saat ini, fokusnya adalah mendalami Dunia Linux, AI generatif, dan Backend Development. Keren kan!",
        "passion": "Passion terbesarnya adalah menjadi seorang <b>Software Development</b> dan <b>Prompt Designer</b>. Dia lagi fokus banget menyelami Dunia Linux yang luas, AI generatif, dan Backend Development.",
        "belajar": "Saat ini Adnan lagi fokus belajar 3 hal utama: <b>Dunia Linux</b>, <b>AI generatif</b>, dan <b>Backend Development</b>. Semuanya buat ngedukung cita-citanya jadi <b>Software Development dan Prompt Designer</b>.",
        "keahlian": `Soal keahlian, Adnan cukup jago di beberapa area nih:<br><b>1.) Bahasa Pemrograman:</b><br> <b>Python</b> (ini andalannya!), <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, dan <b>Go</b>.<br><br><b>2.) Bidang AI:</b> <br><b>Prompt Designer</b>, konsep dasar <b>Machine Learning</b>, dan <b>pemanfaatan AI tools</b> untuk konten kreatif.<br><br><b>3.) Perangkat lunak & Sistem:</b> <br><b>Software Installation</b>, <b>Linux Administration System</b>, dan <b>Repair/Problem Solver System.</b><br><br><b>4.) Lainnya:</b> <br>Jaringan & komputer (sesuai <b>jurusan TKJ-nya</b>).`,
        "skill": `Soal keahlian, Adnan cukup jago di beberapa area nih:<br><br><b>1.) Bahasa Pemrograman:</b><br> <b>Python</b> (ini andalannya!), <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, dan <b>Go</b>.<br><br><b>2.) Bidang AI:</b> <br><b>Prompt Designer</b>, konsep dasar <b>Machine Learning</b>, dan <b>pemanfaatan AI tools</b> untuk konten kreatif.<br><br><b>3.) Perangkat lunak & Sistem:</b> <br><b>Software Installation</b>, <b>Linux Administration System</b>, dan <b>Repair/Problem Solver System.</b><br><br><b>4.) Lainnya:</b> <br>Jaringan & komputer (sesuai <b>jurusan TKJ-nya</b>).`,
        "proyek": `Beberapa proyek dan pengalaman yang lagi dikerjain Adnan:<br><br><b>1.) Website Portolio:</b> Lagi memperbaiki portofolio pribadi pakai HTML, CSS, JavaScript, dan Framework Flask.<br><br><b>2.) IDCamp 2025:</b> Adnan dapet <b>beasiswa IDCamp 2025</b> dari <b>Dicoding</b>, lho! Targetnya kelar sebelum <b>Januari 2026.</b><br><br><b>3.) AI Chatbot Sederhana:</b> Pernah bikin chatbot CLI Python simpel (namanya Pye.Bot).<br><br><b>4.) Konten AI Kreatif:</b> Suka bereksperimen dengan AI video generator buat bikin video dari prompt teks.`,
        "pengalaman": `Beberapa proyek dan pengalaman yang lagi dikerjain Adnan:<br><br><b>1.) Website Portolio:</b> Lagi memperbaiki portofolio pribadi pakai HTML, CSS, JavaScript, dan Framework Flask.<br><br><b>2.) IDCamp 2025:</b> Adnan dapet <b>beasiswa IDCamp 2025</b> dari <b>Dicoding</b>, lho! Targetnya kelar sebelum <b>Januari 2026.</b><br><br><b>3.) AI Chatbot Sederhana:</b> Pernah bikin chatbot CLI Python simpel (namanya Pye.Bot).<br><br><b>4.) Konten AI Kreatif:</b> Suka bereksperimen dengan AI video generator buat bikin video dari prompt teks.`,
        "tujuan": "Tujuan utamanya adalah menjadi seorang <b>Software Development</b> & <b>Prompt Enginner</b> profesional yang bisa membangun produk teknologi yang inovatif. Dia juga tertarik banget sama persimpangan antara teknologi dan industri kreatif.",
        "aspirasi": "Tujuan utamanya adalah menjadi seorang <b>Software Development</b> & <b>Prompt Enginner</b> profesional yang bisa membangun produk teknologi yang inovatif. Dia juga tertarik banget sama persimpangan antara teknologi dan industri kreatif.",
        "cita-cita": "Tujuan utamanya adalah menjadi seorang <b>Software Development</b> & <b>Prompt Enginner</b> profesional yang bisa membangun produk teknologi yang inovatif. Dia juga tertarik banget sama persimpangan antara teknologi dan industri kreatif.",
        "kontak": "Untuk sekarang, cara terbaik buat hubungin Adnan itu lewat telegram di <b>@aadnanmtech</b>. Feel free to reach out!",
        "hubungi": "Untuk sekarang, cara terbaik buat hubungin Adnan itu lewat telegram di <b>@aadnanmtech</b>. Feel free to reach out!",
        "visi": "Menjadi <b>inovator</b> di persimpangan antara <b>Teknologi dan industri kreatif</b>, dan menciptakan teknologi yang <b>tidak hanya fungsional</b> tapi juga <b>human-centric</b> dan <b>impactful.</b>",
        "misi": "Saat ini misi Adnan, yaitu:<br><br>1.) <b>Terus belajar</b> dan <b>bereksperimen</b> dengan teknologi <b>terbaru</b>.<br><br> 2.) Membangun portofolio proyek yang <b>nyata</b> dan <b>bermanfaat</b>.<br><br> 3.) <b>Berkolaborasi</b> dengan orang-orang memiliki <b>prinsip</b> dan <b>kreatif</b> untuk menciptakan karya yang <b>out of the box</b>.",
        "prinsip": "<b>scientia dux vitae certissimus</b><br> Artinya: <i>Ilmu pengetahuan adalah penuntun hidup yang paling pasti</i>. <b>Prinsip ini</b> ngingetin Adnan untuk selalu belajar dan <b>mencari pengetahuan baru</b> sebagai dasar untuk <b>ambil keputusan</b> dalam hidup.",
        "makanan": "Kalau soal makanan, Adnan suka banget sama <b>Mie Ayam</b> dan <b>Sayur Sop.</b> Untuk minuman, <b>Teh Tawar atau manis</b> selalu jadi <b>pilihan utama.</b>",
        "minuman": "Minuman favoritnya simpel aja: Es Teh Manis ataupun Tawar. Menurutnya, itu <b>mood booster</b> paling ampuh saat lagi <b>stuck</b> ngerjain sesuatu.",
        "ai": "Adnan sering banget pakai model-model AI seperti <b>ChatGPT-4</b> dan <b>Gemini 2.5 Pro</b> untuk jadi  partner <b>brainstorming</b> dan <b>debugging kode.</b> Untuk generate gambar, dia suka eksplorasi pakai <b>Dreamina dan Google Imagen</b>. Dan juga untuk generate video, dia suka pakai <b>Dreamina, Kling AI, dan Google Veo 3</b>. Intinya, dia pakai <b>the right tool for the right job</b>.",
        "model": "Adnan sering banget pakai model-model seperti <b>ChatGPT-4</b> dan <b>Gemini 2.5 Pro</b> untuk jadi  partner <b>brainstorming</b> dan <b>debugging kode.</b> Untuk generate gambar, dia suka eksplorasi pakai <b>Dreamina dan Google Imagen</b>. Dan juga untuk generate video, dia suka pakai <b>Dreamina, Kling AI, dan Google Veo 3</b>. Intinya, dia pakai <b>the right tool for the right job.</b>",
        "karakter": "Adnan itu orangnya <b>curious</b>, <b>analitis</b>, dan <b>problem solver</b>. Dia suka banget ngulik hal-hal teknis sampai ke akarnya. Meskipun kelihatannya serius pas lagi <b>fokus</b>, aslinya dia <b>friendly</b> dan suka diskusi <b>soal ide-ide baru</b>.",
        "kesukaanya": "Selain teknologi, Astronomi, dan Sains, Adnan juga suka <b>melihat langit disore/malam hari</b>, dengerin musik <b>lo-fi</b> buat fokus. Dia juga lagi seneng ngikutin perkembangan dunia <b>creative coding</b> dan <b>generative art</b>.",
        "suka": "Selain teknologi, Astronomi, dan Sains, Adnan juga suka <b>melihat langit disore/malam hari</b>, dengerin musik <b>lo-fi</b> buat fokus. Dia juga lagi seneng ngikutin perkembangan dunia <b>creative coding</b> dan <b>generative art</b>.",
        "fakta": "Secara personal, Adnan itu seorang yang energinya ke-<b>recharge</b> saat lagi ngulik sesuatu sendirian. Tapi dia juga suka banget kalau bisa <b>deep talk</b> soal teknologi, ide kreatif, dan  permasalahan sosial sama <b>orang yang satu frekuensi</b>. Baginya, <b>balance</b> itu kunci."
    };

    function addMessage(message, sender) {
        const messageRow = document.createElement('div');
        messageRow.classList.add('message-row');

        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-bubble', 'text-sm', 'max-w-xs', 'md:max-w-md', 'p-3', 'rounded-lg', 'break-words');

        if (sender === 'user') {
            messageRow.classList.add('user-message');
            messageElement.classList.add('bg-indigo-600');
            messageElement.textContent = message;
            messageRow.appendChild(messageElement);
        } else {
            messageElement.classList.add('bg-gray-700');
            messageElement.innerHTML = message;

            const avatarElement = document.createElement('img');
            avatarElement.src = botAvatarUrl;
            avatarElement.alt = 'Bot Avatar';
            avatarElement.classList.add('bot-avatar');

            messageRow.appendChild(avatarElement);
            messageRow.appendChild(messageElement);
        }
        
        chatWindow.appendChild(messageRow);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function getBotResponse(input) {
        const lowercasedInput = input.toLowerCase();
        let response = "Aduhhh, aku kurang paham nih. Coba tanya pakai kata kunci lain ya, misalnya siapa Adnan?, Adnan suka apa? atau pilih gelembung chat dibawah.";
        
        for (const keyword in knowledgeBase) {
            if (lowercasedInput.includes(keyword)) {
                response = knowledgeBase[keyword];
                break;
            }
        }
        return response;
    }
    
    function updateScrollButtons() {
        const { scrollLeft, scrollWidth, clientWidth } = suggestionArea;
        const isScrollable = scrollWidth > clientWidth;

        scrollLeftBtn.classList.toggle('hidden', !isScrollable || scrollLeft <= 0);
        scrollRightBtn.classList.toggle('hidden', !isScrollable || scrollLeft >= scrollWidth - clientWidth - 1);
    }
    
    function renderSuggestions() {
        suggestionArea.innerHTML = '';
        suggestionChips.forEach(text => {
            const chip = document.createElement('button');
            chip.textContent = text;
            chip.className = 'suggestion-chip bg-gray-600 hover:bg-gray-500 text-white text-sm font-medium py-2 px-3 rounded-full flex-shrink-0 whitespace-nowrap';
            chip.addEventListener('click', () => handleSuggestionClick(text));
            suggestionArea.appendChild(chip);
        });
        setTimeout(updateScrollButtons, 50);
    }

    function applyBackground(dataUrl) {
        document.body.style.backgroundImage = `url(${dataUrl})`;
    }
    
    function handleSuggestionClick(text) {
        addMessage(text, 'user');
        setTimeout(() => {
            const botResponse = getBotResponse(text);
            addMessage(botResponse, 'bot');
        }, 1500);
    }

    function handleChatSubmit(event) {
        event.preventDefault();
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            userInput.value = '';
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                addMessage(botResponse, 'bot');
            }, 700);
        }
    }

    function handleScroll(direction) {
        const scrollAmount = direction === 'left' ? -200 : 200;
        suggestionArea.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    function handleBackgroundUpload(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                applyBackground(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
    
    function init() {
        chatForm.addEventListener('submit', handleChatSubmit);
        scrollLeftBtn.addEventListener('click', () => handleScroll('left'));
        scrollRightBtn.addEventListener('click', () => handleScroll('right'));
        suggestionArea.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons);

        bgChangeBtn.addEventListener('click', () => bgUploadInput.click());
        bgUploadInput.addEventListener('change', handleBackgroundUpload);

        setTimeout(() => {
            addMessage("Halo! Aku Lily, asisten personal Adnan. Ada yang ingin kamu ketahui tentang dia?", 'bot');
            renderSuggestions();
        }, 500);
    }

    document.addEventListener('DOMContentLoaded', init);

})();

