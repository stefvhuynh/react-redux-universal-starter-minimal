const createHtml = (html = "", state = {}) => {
  return (`
    <!doctype HTML>
    <html>
      <head>
      </head>
      <body>
        <div id="content">${html}</div>
        <script type="text/javascript">
          window.__INITIAL_STATE__ = ${JSON.stringify(state)};
        </script>
        <script type="text/javascript" src="/bundle.js"></script>
      </body>
    </html>
  `);
};

export default createHtml;
