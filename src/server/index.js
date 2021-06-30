import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../client/App';
import serialize from "serialize-javascript";
import assetManifest from '../../assets/manifest.json';
// import rhum from '../../assets/rhumCocktails.json';

const fetch = require('node-fetch');

const app = express(); 

app.use(express.static('assets'));
/* app.get('/rhum', (req, res, next) => {
    const arr = [];
    arr.push(rhum);
    res.json(arr)
}) */

// to get bundles with hashcontent to be injected as scripts
var bundles = Object.keys(assetManifest).map(function(key) {
  return assetManifest[key];
});

const bundlesInScript = bundles.map(bundle => `<script src="${bundle}" defer></script>`)
const scriptsToString = bundlesInScript.join("").toString();

app.get("*", (req, res, next) => {
    const emptyArray = [];
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';

    const fetchUrl = url => fetch(url).then(response => response.json())
                                      .then(data => emptyArray.concat(data.drinks))
                                      .then(array => {
                                          const markup = renderToString(
                                            <App arrayFromFetch={array} />
                                          )
                                        
                                          res.send(`
                                            <!DOCTYPE html>
                                            <html>
                                              <head>
                                                <title>SSR with React</title>
                                                ${scriptsToString}
                                                <script>window.__INITIAL_ARRAYFETCH__ = ${serialize(array)}</script>
                                              </head>
                                        
                                              <body>
                                                <div id="app">${markup}</div>
                                              </body>
                                            </html>
                                          `)
                                          }
                                        )
                                    .catch((error) => {
                                      console.warn(error)
                                      return null
                                    });

  fetchUrl(url)
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})