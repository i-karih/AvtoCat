document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#langSelect")) {
    ItcCustomSelect.create("#langSelect", {
      // name: 'car',
      // targetValue: 'ford',
      customSelectContent: "Русский",
      options: [
        ["1", "Значение 1"],
        ["2", "Значение 2"],
        ["3", "Значение 3"],
        ["4", "Значение 4"],
        ["5", "Значение 5"],
      ],
      onSelected(select, option) {
        // выбранное значение
        console.log(`Выбранное значение: ${select.value}`);
        // индекс выбранной опции
        console.log(`Индекс выбранной опции: ${select.selectedIndex}`);
        // выбранный текст опции
        const text = option ? option.textContent : "";
        console.log(`Выбранный текст опции: ${text}`);
      },
    });
    document
      .querySelector(".itc-select")
      .addEventListener("itc.select.change", (e) => {
        const btn = e.target.querySelector(".itc-select__toggle");
        // выбранное значение
        console.log(`Выбранное значение: ${btn.value}`);
        // индекс выбранной опции
        console.log(`Индекс выбранной опции: ${btn.dataset.index}`);
        // выбранный текст опции
        const selected = e.target.querySelector(".itc-select__option_selected");
        const text = selected ? selected.textContent : "";
        console.log(`Выбранный текст опции: ${text}`);
      });
  }
  if (document.querySelector("#countrySelect")) {
    ItcCustomSelect.create("#countrySelect", {
      // name: 'car',
      // targetValue: 'ford',
      customSelectContent: "Узбекистан",
      options: [
        ["1", "Значение 1"],
        ["2", "Значение 2"],
        ["3", "Значение 3"],
        ["4", "Значение 4"],
        ["5", "Значение 5"],
      ],
      onSelected(select, option) {
        // выбранное значение
        console.log(`Выбранное значение: ${select.value}`);
        // индекс выбранной опции
        console.log(`Индекс выбранной опции: ${select.selectedIndex}`);
        // выбранный текст опции
        const text = option ? option.textContent : "";
        console.log(`Выбранный текст опции: ${text}`);
      },
    });
    document
      .querySelector(".itc-select")
      .addEventListener("itc.select.change", (e) => {
        const btn = e.target.querySelector(".itc-select__toggle");
        // выбранное значение
        console.log(`Выбранное значение: ${btn.value}`);
        // индекс выбранной опции
        console.log(`Индекс выбранной опции: ${btn.dataset.index}`);
        // выбранный текст опции
        const selected = e.target.querySelector(".itc-select__option_selected");
        const text = selected ? selected.textContent : "";
        console.log(`Выбранный текст опции: ${text}`);
      });
  }
});
