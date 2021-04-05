let glowInTexts = document.querySelectorAll(".glowIn");

// split all text content into letters
// for each letter, wrap it with a span
// then let each span executes animation in sequence.
glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.02}s`;
    glowInText.append(span);
  });
});