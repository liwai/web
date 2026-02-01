// Film grain — urban texture, the grit of a decaying city
(function () {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var size = 150;
  canvas.width = canvas.height = size;

  var imageData = ctx.createImageData(size, size);
  var d = imageData.data;
  for (var i = 0; i < d.length; i += 4) {
    var v = (Math.random() * 255) | 0;
    d[i] = d[i + 1] = d[i + 2] = v;
    d[i + 3] = 18;
  }
  ctx.putImageData(imageData, 0, 0);

  var el = document.createElement("div");
  el.className = "grain";
  el.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
  document.body.prepend(el);
})();
