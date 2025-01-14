function calcEur() {
  let euro = euroField.value;
  let result = euro * 0.981;
  usdField.value = result.toFixed(2).replace(".", ",");
}

function calcUsd() {
  let usd = usdField.value;
  let result = usd * 0.981;
  euroField.value = result.toFixed(2).replace(".", ",");
}
