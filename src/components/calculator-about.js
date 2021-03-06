/**
@license
Copyright (c) 2018 Roger E Critchlow Jr.  All rights reserved.
This code may only be used under the BSD style license found at http://recri.github.io/change/LICENSE.txt
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class CalculatorAbout extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <section>
        <h2>About</h2>
        <p>
	This app is a mashup between the calculator that <a href="https://www.google.com/search?q=calculator">this search</a> returns
	at the top of the results page,
	Matt Crumley's expression  <a href="https://github.com/silentmatt/expr-eval#readme">parser/evalualtor</a> in javascript,
	Enkimute's <a href="https://github.com/enkimute/ganja.js#readme">ganja.js</a> geometric algebra package in javascript,
	-- how about that, we got google who never answers the phone, silentmatt, and enkimute all mashed up together, I should 
	just shut up.
	</p>
      </section>
    `
  }
}

window.customElements.define('calculator-about', CalculatorAbout);
