jQuery(document).ready(function ($) {
  color = "";
  $("#sortear").click(function () {
    $("#result").removeClass(color);
    $("#sortear").prop("disabled", true);
    $("#result").text(lang == "en" ? "Thinking..." : "Pensando...");

    setTimeout(function () {
      color = getColor();
      $("#result").text(
        getBodyPart() + (lang == "en" ? " on " : " no ") + color
      );
      $("#result").addClass(color);
      $("#sortear").prop("disabled", false);
    }, 1000);
  });

  function getBodyPart() {
    switch (getRndInteger(1, 4)) {
      case 1:
        bp = lang ? "🦶 Left foot ⬅️" : "🦶 Pé esquerdo ⬅️";
        break;
      case 2:
        bp = lang ? "🦶 Right foot ➡️" : "🦶 Pé direito ➡️";
        break;
      case 3:
        bp = lang ? "🦶 Left hand ⬅️" : "🦶 Mão esquerda ⬅️";
        break;
      case 4:
        bp = lang ? "🦶 Right hand ➡️" : "🦶 Mão direita ➡️";
        break;
    }
    return bp;
  }

  function getColor() {
    switch (getRndInteger(1, 4)) {
      case 1:
        color = lang == "en" ? "red" : "vermelho";
        break;
      case 2:
        color = lang == "en" ? "blue" : "azul";
        break;
      case 3:
        color = lang == "en" ? "green" : "verde";
        break;
      case 4:
        color = lang == "en" ? "yellow" : "amarelo";
        break;
    }
    return color;
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
