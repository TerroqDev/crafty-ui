<script>
    let isFirstQuestionOpen = false;
    let isSecondQuestionOpen = false;
    let isThirdQuestionOpen = false;
    let isFourthQuestionOpen = false;
    let isFifthQuestion = false;
    let isSixthQuestion = false;
    let isSeventhQuestion = false;
    let isEightQuestion = false;
    
    let questionAndAnswers = [
        {
            question: "Kako postaviti oglas na vašu stranicu?",
            answer: "Postavljanje oglasa je jednostavno. Registrirajte se na našoj stranici i kliknite na gumb \"Dodaj oglas\". Slijedite upute za unos opisa, fotografija, i cijene. Nakon što je oglas objavljen, bit će vidljiv posjetiteljima.",
            isOpen: false
        },
        {
            question: "Je li registracija potrebna za pregled oglasa?",
            answer: "Nije, oglase možete pregledavati bez registracije. Međutim, za postavljanje oglasa i komunikaciju s prodavateljima potrebno je otvoriti korisnički račun.",
            isOpen: false
        },
        {
            question: "Kako mogu kontaktirati prodavatelja?",
            answer: "Svaki oglas ima opciju za slanje poruke ili kontakt podataka prodavatelja. Kliknite na \"Kontaktiraj prodavatelja\" i pošaljite svoju poruku ili pronađite telefon za direktan kontakt.",
            isOpen: false
        },
        {
            question: "Koliko košta postavljanje oglasa?",
            answer: "Osnovno postavljanje oglasa je besplatno. Međutim, nudimo dodatne opcije za isticanje oglasa (kao što su \"Premium\" ili \"Istaknuti oglas\"), koje se naplaćuju po povoljnim cijenama.",
            isOpen: false
        },
        {
            question: "Kako mogu ažurirati ili obrisati svoj oglas?",
            answer: "Prijavite se na svoj profil, otvorite odjeljak \"Moji oglasi\", odaberite oglas koji želite ažurirati ili obrisati, i pratite upute za uređivanje ili uklanjanje.",
            isOpen: false
        },
        {
            question: "Mogu li prijaviti lažan ili sumnjiv oglas?",
            answer: "Da, sigurnost nam je prioritet. Ako primijetite lažan oglas, kliknite na \"Prijavi oglas\" i opišite problem. Naš tim će pregledati prijavu i poduzeti odgovarajuće mjere.",
            isOpen: false
        },
        {
            question: "Postoji li zaštita kupaca?",
            answer: "Kao posrednička platforma, ne pružamo direktnu zaštitu za transakcije. Preporučujemo da koristite provjerene načine plaćanja i sastanete se uživo kad je moguće kako biste izbjegli rizik. Savjeti za sigurno poslovanje su dostupni na našoj stranici.",
            isOpen: false
        },
        {
            question: "Što učiniti ako mi treba pomoć ili imam pitanje koje nije navedeno?",
            answer: "Naš korisnički tim stoji vam na raspolaganju. Pošaljite nam poruku putem odjeljka \"Kontakt podrška\" ili nas nazovite na dostupne brojeve. Rado ćemo vam pomoći!",
            isOpen: false
        },
    ]
</script>
<div class="px-4 md:px-48 min-h-screen">
    <h1 class="pt-8 text-4xl text-center text-gray-700">F.A.Q.</h1>
    <div class="pt-4">
        <button class="flex w-full justify-between" on:click={()=> isFirstQuestionOpen = !isFirstQuestionOpen}>
            <h1 class="text-2xl text-gray-600 font-bold py-4">Kako postaviti oglas na vašu stranicu?</h1>
                <svg fill="currentColor" viewBox="0 0 20 20"
                class={`inline w-6 h-6 mt-4 ml-1 transition-transform duration-200 transform cursor-pointer 
                  ${isFirstQuestionOpen
                    ? "rotate-180"
                    : "rotate-0"
                  }`}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h2 class={`text-lg text-center md:text-left text-gray-600 transform transition-all duration-300 overflow-hidden ${isFirstQuestionOpen ? 'max-h-44 md:max-h-20' : 'max-h-0'}`}>Postavljanje oglasa je jednostavno. Registrirajte se na našoj stranici i kliknite na gumb "Dodaj oglas". Slijedite upute za unos opisa, fotografija, i cijene. Nakon što je oglas objavljen, bit će vidljiv posjetiteljima.</h2>
    </div>
    <div>
        <button class="flex w-full justify-between" on:click={()=> isSecondQuestionOpen = !isSecondQuestionOpen}>
            <h1 class="text-2xl text-gray-600 font-bold py-4">Je li registracija potrebna za pregled oglasa?</h1>
                <svg fill="currentColor" viewBox="0 0 20 20"
                class={`inline w-6 h-6 mt-4 ml-1 transition-transform duration-200 transform cursor-pointer 
                  ${isSecondQuestionOpen
                    ? "rotate-180"
                    : "rotate-0"
                  }`}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h2 class={`text-lg text-center md:text-left text-gray-600 transform transition-all duration-300 overflow-hidden ${isSecondQuestionOpen ? 'max-h-32 md:max-h-20' : 'max-h-0'}`}>Nije, oglase možete pregledavati bez registracije. Međutim, za postavljanje oglasa i komunikaciju s prodavateljima potrebno je otvoriti korisnički račun.</h2>
    </div>
    <div>
        <button class="flex w-full justify-between" on:click={()=> isThirdQuestionOpen = !isThirdQuestionOpen}>
            <h1 class="text-2xl text-gray-600 font-bold py-4">Kako mogu kontaktirati prodavatelja?</h1>
                <svg fill="currentColor" viewBox="0 0 20 20"
                class={`inline w-6 h-6 mt-4 ml-1 transition-transform duration-200 transform cursor-pointer 
                  ${isThirdQuestionOpen
                    ? "rotate-180"
                    : "rotate-0"
                  }`}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h2 class={`text-lg text-gray-600 text-center md:text-left transform transition-all duration-300 overflow-hidden ${isThirdQuestionOpen ? 'max-h-44 md:max-h-20' : 'max-h-0'}`}>Svaki oglas ima opciju za slanje poruke ili kontakt podataka prodavatelja. Kliknite na "Kontaktiraj prodavatelja" i pošaljite svoju poruku ili pronađite telefon za direktan kontakt.</h2>
    </div>
    <div>
        <button class="flex w-full justify-between" on:click={()=> isFourthQuestionOpen = !isFourthQuestionOpen}>
            <h1 class="text-2xl text-gray-600 font-bold py-4">Koliko košta postavljanje oglasa?</h1>
                <svg fill="currentColor" viewBox="0 0 20 20"
                class={`inline w-6 h-6 mt-4 ml-1 transition-transform duration-200 transform cursor-pointer 
                  ${isFourthQuestionOpen
                    ? "rotate-180"
                    : "rotate-0"
                  }`}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h2 class={`text-lg text-center md:text-left text-gray-600 transform transition-all duration-300 overflow-hidden ${isFourthQuestionOpen ? 'max-h-44 md:max-h-20' : 'max-h-0'}`}> Osnovno postavljanje oglasa je besplatno. Međutim, nudimo dodatne opcije za isticanje oglasa (kao što su "Premium" ili "Istaknuti oglas"), koje se naplaćuju po povoljnim cijenama.</h2>
    </div>

    <div>
        <button class="flex w-full justify-between" on:click={()=> isFifthQuestion = !isFifthQuestion}>
            <h1 class="text-2xl text-gray-600 font-bold py-4">Kako mogu ažurirati ili obrisati svoj oglas?</h1>
                <svg fill="currentColor" viewBox="0 0 20 20"
                class={`inline w-6 h-6 mt-4 ml-1 transition-transform duration-200 transform cursor-pointer 
                  ${isFifthQuestion
                    ? "rotate-180"
                    : "rotate-0"
                  }`}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h2 class={`text-lg text-center md:text-left text-gray-600 transform transition-all duration-300 overflow-hidden ${isFifthQuestion ? 'max-h-32 md:max-h-20' : 'max-h-0'}`}>Prijavite se na svoj profil, otvorite odjeljak "Moji oglasi", odaberite oglas koji želite ažurirati ili obrisati, i pratite upute za uređivanje ili uklanjanje.</h2>
    </div>
    
    <div>
        <button class="flex w-full justify-between" on:click={()=> isSixthQuestion = !isSixthQuestion}>
            <h1 class="text-2xl text-gray-600 font-bold py-4">Mogu li prijaviti lažan ili sumnjiv oglas?</h1>
                <svg fill="currentColor" viewBox="0 0 20 20"
                class={`inline w-6 h-6 mt-4 ml-1 transition-transform duration-200 transform cursor-pointer 
                  ${isSixthQuestion
                    ? "rotate-180"
                    : "rotate-0"
                  }`}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h2 class={`text-lg text-center md:text-left text-gray-600 transform transition-all duration-300 overflow-hidden ${isSixthQuestion ? 'max-h-44 md:max-h-20' : 'max-h-0'}`}>Da, sigurnost nam je prioritet. Ako primijetite lažan oglas, kliknite na "Prijavi oglas" i opišite problem. Naš tim će pregledati prijavu i poduzeti odgovarajuće mjere.</h2>
    </div>
    <div>
        <button class="flex w-full justify-between" on:click={()=> isSeventhQuestion = !isSeventhQuestion}>
            <h1 class="text-2xl text-gray-600 font-bold py-4">Postoji li zaštita kupaca?</h1>
                <svg fill="currentColor" viewBox="0 0 20 20"
                class={`inline w-6 h-6 mt-4 ml-1 transition-transform duration-200 transform cursor-pointer 
                  ${isSeventhQuestion
                    ? "rotate-180"
                    : "rotate-0"
                  }`}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h2 class={`text-lg text-center md:text-left text-gray-600 transform transition-all duration-300 overflow-hidden ${isSeventhQuestion ? 'max-h-48 md:max-h-20' : 'max-h-0'}`}>Kao posrednička platforma, ne pružamo direktnu zaštitu za transakcije. Preporučujemo da koristite provjerene načine plaćanja i sastanete se uživo kad je moguće kako biste izbjegli rizik. Savjeti za sigurno poslovanje su dostupni na našoj stranici.</h2>
    </div>
    <div>
        <button class="flex w-full justify-between" on:click={()=> isEightQuestion = !isEightQuestion}>
            <h1 class="text-2xl text-gray-600 font-bold py-4">Što učiniti ako mi treba pomoć ili imam pitanje koje nije navedeno?</h1>
                <svg fill="currentColor" viewBox="0 0 20 20"
                class={`inline w-6 h-6 mt-4 ml-1 transition-transform duration-200 transform cursor-pointer 
                  ${isEightQuestion
                    ? "rotate-180"
                    : "rotate-0"
                  }`}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h2 class={`text-lg text-center md:text-left text-gray-600 transform transition-all duration-300 overflow-hidden ${isEightQuestion ? 'max-h-48 md:max-h-20' : 'max-h-0'}`}>Naš korisnički tim stoji vam na raspolaganju. Pošaljite nam poruku putem odjeljka "Kontakt podrška" ili nas nazovite na dostupne brojeve. Rado ćemo vam pomoći!</h2>
    </div>
</div>
