let textInput = document.querySelector(".text-form");
let textOutput = document.querySelector(".display");
const btn_play = document.querySelector(".play");
const btn_stop = document.querySelector(".stop");
const btn_reset = document.querySelector(".reset");
const DICT_PATH = "./dict";

let tokens = [];
let index = 0;
let timer;

const displayNextToken = () => {
	if (index < tokens.length) {
		textOutput.value = tokens[index].surface_form;
		index++;
	} else {
		clearInterval(timer);
	}
};

const separate = () => {
	textOutput.value = "";
	kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
		tokens = tokenizer.tokenize(textInput.value);
		index = 0;
		timer = setInterval(displayNextToken, 200);
	});
};


btn_play.addEventListener("click", separate);
btn_stop.addEventListener("click", () => clearInterval(timer));
btn_reset.addEventListener("click", () => {
	textInput.value = "";
	textOutput.value = "";
}
)