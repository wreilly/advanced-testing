// LECTURE 26
// https://www.udemy.com/react-redux-tutorial/learn/v4/t/lecture/4700738

import jsdom from 'jsdom';
// The regular jQuery '$' will (somehow?) get confused - don't use it.
// Nope!   import $ from 'jquery';
// import _$ from 'jquery';
// Alternatively (if it drives you less crazy):
import jquery from 'jquery';

import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';

// We use JSX below.
import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

import chaiJquery from 'chai-jquery';

// **********************************
// 1. Set up testing environment to run like a browser in the command line
/* JSDOM
bundle.js = entire application
- runs in browser (DOM, HTML Elements, etc. window document event-handlers)
- needs to run for Mocha testing (just Terminal)

https://github.com/tmpvar/jsdom
"A JavaScript implementation of the WHATWG DOM and HTML standards, for use with node.js"
*/
// Sets up fake document:
// global is truly the global
// we fake by adopting the convention of naming this  thing 'document'
global.document = jsdom.jsdom('<doctype html><html><body></body></html>');

// the 'defaultView' comes from jsdom of course ...
// we fake the 'window' thing
// jQuery will latch onto this window thing
global.window = global.document.defaultView;


// const $ = _$(global.window)
// Alternatively (if it drives you less crazy):
// "Hey jQuery, don't go out to the DOM (like you usually do)" Instead do this
// $ is wrapped variation on jQuery.
const $ = jquery(global.window)


// **********************************
// 2. build 'renderComponent' helper that should render a given react class
// We pass in a component class, that we made
// PROPS and STATE too now. LECTURE 30 ~02:00
// "any props that should be placed directly onto the ComponentClass..."
// "any application-level state that we want to inject into our Redux store"
function renderComponent(ComponentClass, props, state) {
  // make an instance of it: (rendered "instance" of it)
  // Note it is NOT a reference to the actual DOM Element produced

  // WRAP with Provider here in testing like so
  // (in web app it comes from /index.js)
  // Pass in your reducers to the store!
  // Pass in PROPS too, on the component.
  // Use spread operator
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );


  // This produces HTML, and passes to (wraps with) jQuery element, and returns it!
  // This gives us access to all the Chai-jQuery goodness
  return $(ReactDOM.findDOMNode(componentInstance));
}


// **********************************
// 3. Build helper for simulating events

/* To our (wrapped) jQuery object/library, we are going to add a function. Very exciting.
To do so, you add to $.fn
Must call it fn, okay? Okay.
// Call : $('div').simulate  <<< this refers to that element
https://facebook.github.io/react/docs/test-utils.html#simulate
*/
$.fn.simulate = function(eventName, value) {
  if (value) {
    // VAL is jQuery thing
    this.val(value);
  }

  // Need Element that was selected = this
  // [eventName] is the method on the Object Simulate
  TestUtils.Simulate[eventName](this[0]); // just grab first 'div'
}


// **********************************
// 4. Set up chai-jquery
// import statements above
chaiJquery(chai, chai.util, $);

export { expect, renderComponent };
