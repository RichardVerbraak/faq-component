const faq = [
	{
		question: 'How many bones does a cat have?',
		answer: 'A cat has 230 bones - 6 more than a human',
	},
	{
		question: 'How much do cats sleep?',
		answer: 'The average cat sleeps 12-16 hours per day',
	},
	{
		question: 'How long do cats live',
		answer:
			'Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.',
	},
]

const faqComponent = document.querySelector('.faq')

const createFaqBox = (question, answer, display = 'hide') => {
	// Create Box div
	const box = document.createElement('div')
	box.className = 'box'

	// Create chevron with show/hide class
	const chevron = document.createElement('p')

	if (display === 'show') {
		chevron.className = 'chevron'
	} else {
		chevron.className = 'chevron chevron-hide'
	}

	// Create question
	const questionParagraph = document.createElement('p')
	questionParagraph.className = 'question'
	questionParagraph.innerText = question

	// Create answer with show/hide class
	let answerParagraph = document.createElement('p')

	if (display === 'show') {
		answerParagraph.className = 'answer'
	} else {
		answerParagraph.className = 'answer hide'
	}

	answerParagraph.innerText = answer

	// Append the created elements
	box.appendChild(chevron)
	box.appendChild(questionParagraph)
	box.appendChild(answerParagraph)

	// Add click listener
	box.addEventListener('click', (e) => {
		toggleAnswer(e)
	})

	// Append the created FAQbox to the container component
	faqComponent.appendChild(box)
}

// Click handler that toggles the show/hide class for the arrow and answer
const toggleAnswer = (e) => {
	const chevron = e.target.children[0]
	const answer = e.target.children[2]

	chevron.classList.toggle('chevron-hide')
	answer.classList.toggle('hide')
}

// Render a box to the screen for each FAQ
const renderFaq = () => {
	faq.forEach((item, index) => {
		const { question, answer } = item

		// Set first item in the list to always show answer
		if (index === 0) {
			createFaqBox(question, answer, 'show')
		} else {
			createFaqBox(question, answer)
		}
	})
}

// Render boxes
renderFaq()
