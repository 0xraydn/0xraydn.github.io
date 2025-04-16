window.onload = () => {
  const myInput = document.getElementById("dummyKeyboard");
  myInput.onpaste = (e) => e.preventDefault();
};
const COMMANDS = {
  help: 'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">admin</span>',
  about:
    "Hello 👋<br>I'm Sreekarthik.<br>I am a cybersecurity enthusiast currently residing in the state of Kerala, India.",
  skills:
    '<span class="code">Skill:</span> Ethical Hacking, Web security, CTF enthusiast..<br>',
  education:
    "Currently studying btech in CSE with specialization in cybersecurity , located in Kozhikode, Kerala, India.",
  
  experience: "Networking and linux",

  admin: "Access Denied !",
  
  contact:
    "You can contact me on any of following links:<br><a href='https://t.me/arilla_ara' class='success link'>Telegram</a>, <a href='https://www.instagram.com/were_wolf_07/' class='success link'>Instagram</a>, <a href='https://www.twitter.com/733n_wolf' class='success link'>Twitter</a>",
};

const userInput = document.getElementById("userInput");
const terminalOutput = document.getElementById("terminalOutput");
const inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let input = e.target.value;
    input = input.toLowerCase();
    if (input.length === 0) {
      return;
    }
    let output;
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: ${input}</div>`;
      console.log("Oops! no such command");
    } else {
      output += COMMANDS[input];
    }
    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    e.target.value = "";
  }
});
