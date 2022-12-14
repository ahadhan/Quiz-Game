
var Obj = [
    {
        question:"What is the full form of HTML?",
        answer: "b",
         a:   "Hard Teller Markup Lang",
         b:   "Hyper Text Markup Lang",
         c:   "Hello To Mean Lang",
         d:   "Hyper Tune Market Land"
        
        
    },
    {
        question:"Which is the best library for css?",
        answer: "a",
         a:   "Bootstrap",
         b:   "WSchool",
         c:   "MongoDB",
         d:   "None of these"
         
    },
    {
        question: "Javascript uses for?",
        answer: "d",
         a: "Content Writing",
         b: "Frontened",
         c: "Backened",
         d: "Both b & c"
                 
    },
    {
        question: "The word RAM stands for?",
        answer: "c",
        a: "Read Array Memory",
        b: "Retail only memo",
        c: "Random Access Memory",
        d: "Random Allow Messege"
   
    }
]

    var questionCount = 0;
    var total = Obj.length;
    var score = 0;
    var questionText = document.querySelector('.questions');
    var optionsInputs = document.querySelectorAll('.buttn');
    console.log(questionCount, total)

    var loadQuestion = () => {
        if (questionCount === total){
            return finish()
        }
        reset ();
        var questionList = Obj[questionCount];
        var questionElem = questionList.question;
        questionText.innerText = questionElem;   
        optionsInputs[0].nextElementSibling.innerText = questionList.a;
        optionsInputs[1].nextElementSibling.innerText = questionList.b;
        optionsInputs[2].nextElementSibling.innerText = questionList.c;
        optionsInputs[3].nextElementSibling.innerText = questionList.d;
        
    }


    var submit = () => {
        var questionList = Obj[questionCount];
        var ans = getAnswer();        

        if (ans === questionList.answer){
            score++;
            console.log(score);
        }
        questionCount++;
        loadQuestion();
        return;

    }

    var getAnswer = () => {
        let answer;
        optionsInputs.forEach(
            (input) => {
                if(input.checked){
                    answer = input.value;
                } 
            }
        )
        return answer;
    }

    var reset = () => {
        optionsInputs.forEach(
            (input) => {
                input.checked = false
            }
        )
    }

    var finish = () => {
        document.querySelector(".main").innerHTML = 
        ` <h2> Thank You for playing this Quiz </h2>
          <h2> Your score is ${score} out of ${total}</h2>
        `
        
    }
        
    loadQuestion();


