(function() {
  var params = new URLSearchParams(window.location.search);
  var fontName = params.get('f');
  if (!fontName) {
    console.error("No font name provided. Use ?f=FontName");
    return;
  }

  var css = `
    @font-face {
      font-family: '${fontName}';
      src: url('${getBaseURL()}/fonts/${fontName}.woff2') format('woff2'),
           url('${getBaseURL()}/fonts/${fontName}.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
  `;

  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  function getBaseURL() {
    var scripts = document.getElementsByTagName('script');
    var thisScript = scripts[scripts.length - 1].src;
    return thisScript.substring(0, thisScript.lastIndexOf('/js'));
  }
})();
