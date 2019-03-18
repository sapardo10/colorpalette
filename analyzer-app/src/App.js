import React, { Component } from 'react';
const cypress = require('cypress');
const resemble = require('resemblejs');
const fs = require("mz/fs");

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      reports:[]
    }
  }

  runCypress(){

    var cypressScript = './text.js';
  
    cypress.run({
      spec: cypressScript,
      reporter: 'junit',
      browser: 'chrome',
      config: {
        baseUrl: 'http://nasty-food.surge.sh/',
        chromeWebSecurity: false,
      },
    })
    .then((results)=> {
      var screenshots = './cypress/screenshots/text.js/';
      var beforeImage = screenshots + 'new-palette-before.png';
      var afterImage = screenshots + 'new-palette-after.png';
  
      var date = new Date();
      var destinationFolder = './public/' + date;
      fs.mkdirSync(destinationFolder);
      fs.copyFileSync(beforeImage, destinationFolder + '/beforeImage.png');
      fs.copyFileSync(afterImage, destinationFolder + '/afterImage.png');
      
      var diff = resemble(destinationFolder + '/beforeImage.png')
      .compareTo(destinationFolder + '/afterImage.png')
      .ignoreColors()
      .onComplete(function(data) {
        var json = JSON.stringify(data);
        fs.writeFile(destinationFolder + '/data.json', json);
        var report = {
          data:data,
          date:date,
        }
        var newreports = this.state.reports;
        newreports.add(report);
        this.setState({
          reports:newreports
        });
      });
  
    });
  }

  generateReports(){
    
  }

  render() {
    return (
      <div>
        <button onClick={this.runCypress()} >Generar reporte</button>
      </div>
    );
  }
}

export default App;
