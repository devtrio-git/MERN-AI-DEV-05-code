const btn = document.getElementById('btn');
const list_container = document.getElementById("list_container");

let random_text = [
    "Unlock new rewards today!",
    "Your loyalty matters to us.",
    "Spin the wheel and win big!",
    "Collect points with every purchase.",
    "Exclusive deals just for you.",
    "Upload your receipt to earn points.",
    "Congratulations! You’ve leveled up.",
    "Keep shopping, keep earning!",
    "Your next reward is just a click away.",
    "Thank you for being part of our journey."
]

btn.addEventListener("click", function () {

    const div_tag = document.createElement('div');
    // div_tag.classList = 'alert alert-primary';
    div_tag.setAttribute("class", 'alert alert-primary')

    // let x = 10;
    // div_tag.innerHTML = `<p>${x}</p>`

    let text_index = Math.floor(Math.random() * random_text.length);

    div_tag.innerText = random_text[text_index];

    list_container.appendChild(div_tag)


})