const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let input = "";
let freshStart = true;

function resetCalculator() {
  input = "";
  display.textContent = "Hello! Ready to calculate?";
  freshStart = true;
}

resetCalculator();

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (!value) {
      if (button.id === "clear") {
        resetCalculator();
      } else if (button.id === "equals") {
        try {
          if (input.trim() === "") {
            display.textContent = "Nothing to calculate!";
            return;
          }

          const result = eval(input);
          input = result.toString();
          display.textContent = input;
          freshStart = false;
        } catch (error) {
          display.textContent = "Oops! That doesn't look right.";
          input = "";
          freshStart = true;
        }
      }
      return;
    }

    if (freshStart) {
      input = "";
      freshStart = false;
    }

    input += value;
    display.textContent = input;
  });
});