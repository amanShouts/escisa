let add = 14;

let question_arr = [
    "Do you think you should take a below ISA offer and evade the ISA agreement?",
    "Are you willing to pay only a part of your ISA?",
    "Please confirm choice if you want to proceed ?",
    "Huh! No one can escape ISA!"
]

let answers = [
    {
        yes: "Yes, I plan to",
        no: "Not really"
    },
    {
        yes: "Yes, Please",
        no: "I want out"
    },
    {
        yes: "YES",
        no: "NO"
    },
    {
        yes: "Fool",
        no: "Clown"
    }
]

let no_sounds = [
    "./sounds/abe_saale",
    "./sounds/pehli_fursat",
    "./sounds/pyari_samajh",
    "./sounds/abe_saale"
]

let index = 0

function answer(answer) {
    console.log("inside answer", answer)

    if (answer === "yes") {


        let black1 = document.querySelector(".black1")
        let black2 = document.querySelector(".black2")
        let main = document.querySelector("#main")
        main.style.height = 100 - 2 * add - +2 + "vh";
        black1.style.height = +add + "vh";
        black2.style.height = +add + "vh";

        add += 12

        changeQuesAns(index)

        index += 1
        // console.log(add, " ---------------------")
        if (add > 55) {
            let clown = document.querySelector("#clown");
            setTimeout(() => {
                clown.style.zIndex = "10";
                clown.style.opacity = "1";
                var audio = new Audio('./sounds/laugh1.mp3');
                audio.volume = 0.5
                audio.play();

            }, 1000)

        }

    }
    else if (answer == "no") {
        // play sounds - abe saale and pheli fursat mein nikal
        let abe_saale = new Audio(`${no_sounds[index]}.mp3`);
        abe_saale.volume = 0.5
        abe_saale.play();
    }
    else {
        // nothing as of now 
    }
    // change CSS 
}

function changeQuesAns(index) {

    let question = document.querySelector("#question")
    question.textContent = ""

    // console.log(question_arr[index])
    let i = 0;

    question.textContent = question_arr[index]
    // let id = setInterval(function () {

    //     let q = question.textContent;

    //     console.log(typeof question_arr[index], i)
    //     question.textContent = q + question_arr[index][i];
    //     i += 1;

    //     if (i >= question_arr[index].length) {
    //         clearInterval(id);
    //     }

    // }, 10);

    let yes_btn = document.querySelector("#first_btn")
    let no_btn = document.querySelector("#second_btn")

    yes_btn.textContent = ""
    no_btn.textContent = ""
    console.log(index, answers[index])
    yes_btn.textContent = answers[index].yes
    no_btn.textContent = answers[index].no
}