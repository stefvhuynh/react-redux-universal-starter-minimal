const createHtml = (html) => {
  return (`
    <!doctype HTML>
    <html>
      <head>
      </head>
      <body>
        <div class="content">${html}</div>
      </body>
    </html>
  `);
};

export default createHtml;
