WebAssembly.instantiateStreaming(fetch(new URL("hello-world.wasm", import.meta.url))).then((obj) => {
  document.querySelector("#app").innerHTML = "1 + 2 = " + obj.instance.exports.add(1, 2);
});
