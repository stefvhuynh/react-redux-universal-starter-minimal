const createHtml = (html = "") => {
  return (`
    <!doctype HTML>
    <html>
      <head>
      </head>
      <body>
        <div id="content">${html}</div>
        <script type="text/javascript" src="/bundle.js"></script>
      </body>
    </html>
  `);
};

export default createHtml;
