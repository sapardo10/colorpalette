import React, { Component } from 'react';
const cypress = require('cypress')

function runCypress(){
  cypress.run({
  reporter: 'junit',
  browser: 'chrome',
  config: {
    baseUrl: 'http://nasty-food.surge.sh/',
    chromeWebSecurity: false,
  },
  env: {
    foo: 'bar',
    baz: 'quux',
  }
})
}

class App extends Component {
  render() {
    return (
      <div>
        <button>Generar reporte</button>
      </div>
    );
  }
}

export default App;
