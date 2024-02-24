		// Define the quiz questions and answers
		var questions = [
			{
				question: "What is the name of the pilgrimage to Mecca that all Muslims are required to make at least once in their lifetime?",
				choices: ["Zakat", "Hajj", "Ramadan", "Eid"],
				answer: 1
			},
			{
				question: "What is the name of the Islamic prayer ritual performed five times a day?",
				choices: ["Zakat", "Hajj", "Salah", "Fasting"],
				answer: 2
			},

			{
				question: "What is the name of the Islamic holiday that celebrates the end of Ramadan?",
				choices: ["Eid al-Adha", "Eid al-Fitr", "Ashura", "Lailat al-Qadr"],
				answer: 1
			},

			{
				question: "What is the name of the Islamic pilgrimage site that houses the Kaaba?",
				choices: ["Medina", "Mecca", "Jerusalem", "Baghdad"],
				answer: 1
			},

			{
				question: "What is the name of the Islamic prayer leader?",
				choices: ["Imam", "Sheikh", "Mullah", "Mufti"],
				answer: 0
			},	
		];

		// Set up the initial question and choices
		var currentQuestion = 0;
		var points = 0
		var p = document.getElementById("marks")
		var per = document.getElementById("circle")
		showQuestion();

		// Display the current question and choices
		function showQuestion() {
			document.getElementById("question").innerHTML = questions[currentQuestion].question;

			var choices = "";
			for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
				choices += '<input type="radio" name="answer" value="' + i + '"> ' + questions[currentQuestion].choices[i] + '<br>';
			}
			document.getElementById("choices").innerHTML = choices;
		}

		// Check if the user's answer is correct and move to the next question
		function checkAnswer() {
			var userAnswer = document.querySelector('input[name="answer"]:checked').value;
			if (userAnswer == questions[currentQuestion].answer) {
				points = ++points
				p.innerHTML = "You Got " + points + " out Of " + questions.length
			} else {
				p.innerHTML = "You Got " + points + " out Of " + questions.length
			}

			currentQuestion++;
			if (currentQuestion < questions.length) {
				showQuestion();
			} else {
				per.innerHTML = Math.round(points / questions.length * 100) + "%"
				p.style.opacity = '1'
				per.style.opacity = '1'
			}
			if(Math.round(points / questions.length * 100) <= 45){
				per.style.color = 'red'
			}
			else{
				per.style.color = 'green'
			}
		}
		function restart() {
			location.reload()
			points = 0
		}
