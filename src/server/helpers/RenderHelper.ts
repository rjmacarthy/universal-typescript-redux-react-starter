import { routes } from '../../universal/routes';

export const matchGenerator = function (req) {
    return { routes: routes, location: req.originalUrl };
};

export const renderFullPage = (html, initialState) => {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Typescript Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
    `;
};