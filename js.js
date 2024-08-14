const goal_container = document.querySelector(".goal-container");
const goal_input = document.querySelectorAll(".goal-input");
const progress_bar = document.querySelector(".progress-bar");
const error_label = document.querySelector(".error-label");
const progress_value = document.querySelector(".progress-value");
const check_icon = document.querySelector(".check-icon");
const checkbox = document.querySelectorAll(".custom-checkbox");
const show_error = document.querySelector(".show-error");
const progress_transition = document.querySelector(".progress-transition");

const progress_value_texts = document.querySelectorAll(".progress-value-text");

let completGoals = 0;

checkbox.forEach((element) => {
    element.addEventListener("click", () => {
        const allgoaladded = [...goal_input].every((input) => input.value.trim() !== "");

        if (allgoaladded) {
            element.parentElement.classList.toggle("completed");
            completGoals++;

            const progressPercentage = (completGoals / goal_input.length) * 100;
            progress_value.style.width = `${progressPercentage}%`;

            progress_value_texts.forEach(text => {
                text.innerText = `${completGoals}/${goal_input.length} completed`;
            });

            if (completGoals === goal_input.length) {
                progress_value.classList.add("progress-transition");
            }

            // Remove 'show_error' class when goal inputs are all filled
            progress_bar.classList.remove("show_error");
        } else {
            // Add the 'show_error' class if not all goal inputs are filled
            progress_bar.classList.add('show-error')
        }
    });
});

progress_value.classList.add("progress-transition");

goal_input.forEach((input) => {
    input.addEventListener('focus', () => {
        progress_bar.classList.remove('show-error')
    })
})
