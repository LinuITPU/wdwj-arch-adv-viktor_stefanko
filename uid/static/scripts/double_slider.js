const fromSlider = document.getElementById("fromSlider");
const toSlider = document.getElementById("toSlider");
const priceRangeOutput = document.getElementById("price-range-out");

fromSlider.addEventListener("input", () => {
  if (parseInt(fromSlider.value) > parseInt(toSlider.value)) {
    fromSlider.value = toSlider.value;
  }
  if (fromSlider.value == 2000) {
    fromSlider.value = toSlider.value;
  }
  updatePriceOut();
});

toSlider.addEventListener("input", () => {
  console.log("to");
  if (parseInt(toSlider.value) < parseInt(fromSlider.value)) {
    toSlider.value = fromSlider.value;
  }
  if (parseInt(toSlider.value) == 621) {
    toSlider.value = fromSliderSlider.value;
  }
  updatePriceOut();
});

const updatePriceOut = function () {
  priceRangeOutput.innerText = "$" + fromSlider.value + " - $" + toSlider.value;
};

updatePriceOut();
