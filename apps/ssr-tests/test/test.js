'use strict';

// Configure load-themed-styles to avoid registering styles.
let themeLoader = require('@microsoft/load-themed-styles');
themeLoader.configureLoadStyles(styles => {
  // noop
});

// Set rtl to false.
let library = require('@fluentui/react/lib/Utilities');
library.setRTL(false);

// Assume a large screen.
let responsiveLib = require('@fluentui/react/lib/ResponsiveMode');
responsiveLib.setResponsiveMode(responsiveLib.ResponsiveMode.large);

// Initialize icons.
const { initializeIcons } = require('@fluentui/react/lib/Icons');
initializeIcons('dist/', { disableWarnings: true });

let assert = require('assert');
let React = require('react');
let ReactDOMServer = require('react-dom/server');
let AppDefinition = require('@fluentui/public-docsite-resources/lib/AppDefinition').AppDefinition;

describe('Fabric components', () => {
  for (let i = 0; i < AppDefinition.examplePages.length; i++) {
    let links = AppDefinition.examplePages[i].links;
    for (let j = 0; j < links.length; j++) {
      let { key, component } = links[j];

      testRender(key, component);
    }
  }
});

describe('Utilities', () => {
  describe('getWindow', () => {
    it('returns undefined in server environment', () => {
      assert.equal(library.getWindow(), undefined);
    });
  });

  describe('getDocument', () => {
    it('returns undefined in server environment', () => {
      assert.equal(library.getDocument(), undefined);
    });
  });
});

function testRender(componentName, component) {
  it(`${componentName} can render in a server environment`, done => {
    let elem = React.createElement(component);

    try {
      ReactDOMServer.renderToString(elem);
      done();
    } catch (e) {
      done(new Error(e));
    }
  });
}
