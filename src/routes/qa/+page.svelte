<script>
	import { animate, inView } from "motion";
	import { onMount } from "svelte";
    
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let questionEl = [];
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let faq;
    onMount(() => {
        inView(faq, () => {
            animate(faq, {opacity: [0, 1]}, {duration: 0.7, delay: 0.1})
        })
        for (let i = 0; i < questionAndAnswers.length; i++) {
            inView(questionEl[i], () => {
                animate(questionEl[i], {opacity: [0, 1], y:[100, 0] }, {duration: 0.7, delay: i*0.1})
            })
        } 
    })
	let questionAndAnswers = [
		{
			question: 'Kako postaviti oglas na vašu stranicu?',
			answer:
				'Postavljanje oglasa je jednostavno. Registrirajte se na našoj stranici i kliknite na gumb "Dodaj oglas". Slijedite upute za unos opisa, fotografija, i cijene. Nakon što je oglas objavljen, bit će vidljiv posjetiteljima.',
			isOpen: false
		},
		{
			question: 'Je li registracija potrebna za pregled oglasa?',
			answer:
				'Nije, oglase možete pregledavati bez registracije. Međutim, za postavljanje oglasa i komunikaciju s prodavateljima potrebno je otvoriti korisnički račun.',
			isOpen: false
		},
		{
			question: 'Kako mogu kontaktirati prodavatelja?',
			answer:
				'Svaki oglas ima opciju za slanje poruke ili kontakt podataka prodavatelja. Kliknite na "Kontaktiraj prodavatelja" i pošaljite svoju poruku ili pronađite telefon za direktan kontakt.',
			isOpen: false
		},
		{
			question: 'Koliko košta postavljanje oglasa?',
			answer:
				'Osnovno postavljanje oglasa je besplatno. Međutim, nudimo dodatne opcije za isticanje oglasa (kao što su "Premium" ili "Istaknuti oglas"), koje se naplaćuju po povoljnim cijenama.',
			isOpen: false
		},
		{
			question: 'Kako mogu ažurirati ili obrisati svoj oglas?',
			answer:
				'Prijavite se na svoj profil, otvorite odjeljak "Moji oglasi", odaberite oglas koji želite ažurirati ili obrisati, i pratite upute za uređivanje ili uklanjanje.',
			isOpen: false
		},
		{
			question: 'Mogu li prijaviti lažan ili sumnjiv oglas?',
			answer:
				'Da, sigurnost nam je prioritet. Ako primijetite lažan oglas, kliknite na "Prijavi oglas" i opišite problem. Naš tim će pregledati prijavu i poduzeti odgovarajuće mjere.',
			isOpen: false
		},
		{
			question: 'Postoji li zaštita kupaca?',
			answer:
				'Kao posrednička platforma, ne pružamo direktnu zaštitu za transakcije. Preporučujemo da koristite provjerene načine plaćanja i sastanete se uživo kad je moguće kako biste izbjegli rizik. Savjeti za sigurno poslovanje su dostupni na našoj stranici.',
			isOpen: false
		},
		{
			question: 'Što učiniti ako mi treba pomoć ili imam pitanje koje nije navedeno?',
			answer:
				'Naš korisnički tim stoji vam na raspolaganju. Pošaljite nam poruku putem odjeljka "Kontakt podrška" ili nas nazovite na dostupne brojeve. Rado ćemo vam pomoći!',
			isOpen: false
		}
	];
</script>

<div class="px-4 md:px-48 min-h-screen pb-8">
	<h1 bind:this={faq} class="pt-8 text-4xl text-center text-gray-700">F.A.Q.</h1>
	{#each questionAndAnswers as question, i}
		<div bind:this={questionEl[i]} class="pt-4">
			<button
				class="flex w-full justify-between"
				on:click={() => (question.isOpen = !question.isOpen)}
			>
				<h1 class="text-2xl text-gray-600 font-bold py-4">{question.question}</h1>
				<svg
					fill="currentColor"
					viewBox="0 0 20 20"
					class={`inline w-6 h-6 mt-4 ml-1 transition-transform duration-200 transform cursor-pointer 
                      ${question.isOpen ? 'rotate-180' : 'rotate-0'}`}
					><path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path></svg
				>
			</button>
			<h2
				class={`text-lg text-center md:text-left text-gray-600 transform transition-all duration-300 overflow-hidden ${question.isOpen ? 'max-h-44 md:max-h-20' : 'max-h-0'}`}
			>
				{question.answer}
			</h2>
		</div>
	{/each}
</div>
