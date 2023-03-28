const correctAnswers = ['B', 'A', 'B', 'A']
const form = document.querySelector('.quiz-form')
const span = document.querySelector('.span')
const result = document.querySelector('.result-section')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }

    })

    scrollTo(0, 0)

    // show result on page with time interval animation
    let output = 0;
    const timer = setInterval(() => {
        span.textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer)
        }
        else {
            output++;
        }
    }, 10)

    
    result.classList.remove('d-none')

})



