const Bob = {}

Bob.hears = (message) => {
	const msg = message.trim()
	const classification = [
		(msg.toUpperCase() === msg && msg.toLowerCase() !== msg) ? 'yell' : null,
		(msg.slice(-1) === '?') ? 'question' : null,
		(msg === '') ? 'say_nothing' : null
	].filter(x=>x).join('_')
	
	return classification || 'anything_else'
}

Bob.RESPONDS = {
	when: function (response) {return this[response]},
	question: "Sure.",
	yell: "Whoa, chill out!",
	yell_question: "Calm down, I know what I'm doing!",
	say_nothing: "Fine. Be that way!",
	anything_else: "Whatever.",
}

export const hey = (message) => {
	return Bob.RESPONDS.when(Bob.hears(message))
}