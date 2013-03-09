/**
 Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

 This guide is running against Jasmine version <span class="version">FILLED IN AT RUNTIME</span>.
 */

/**
 ## Suites: `describe` Your Tests

 A test suite begins with a call to the global Jasmine function `describe` with two parameters: a string and a function. The string is a name or title for a spec suite - usually what is under test. The function is a block of code that implements the suite.

 ## Specs

 Specs are defined by calling the global Jasmine function `it`, which, like `describe` takes a string and a function. The string is a title for this spec and the function is the spec, or test. A spec contains one or more expectations that test the state of the code under test.

 An expectation in Jasmine is an assertion that can be either true or false. A spec with all true expectations is a passing spec. A spec with one or more expectations that evaluate to false is a failing spec.
 */
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

/**
 ### It's Just Functions

 Since `describe` and `it` blocks are functions, they can contain any executable code necessary to implement the test. JavaScript scoping rules apply, so variables declared in a `describe` are available to any `it` block inside the suite.
 */
describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});

/**
 ## The Runner and Reporter

 Jasmine is built in JavaScript and must be included into a JS environment, such as a web page, in order to run. Like this web page.

 This file is written in JavaScript and is compiled into HTML via [Rocco][rocco]. The JavaScript file is then included, via a `<script>` tag, so that all of the above specs are evaluated and recorded with Jasmine. Thus Jasmine can run all of these specs. This page is then considered a 'runner.'

 Scroll down the page to see the results of the above specs. All of the specs should pass.

 Meanwhile, here is how a runner works to execute a Jasmine suite.

 [rocco]: http://rtomayko.github.com/rocco/
 */
(function() {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 250;

  /**
   Create the `HTMLReporter`, which Jasmine calls to provide results of each spec and each suite. The Reporter is responsible for presenting results to the user.
   */
  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);

  /**
   Delegate filtering of specs to the reporter. Allows for clicking on single suites or specs in the results to only run a subset of the suite.
   */
  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  /**
   Run all of the tests when the page finishes loading - and make sure to run any previous `onload` handler

   ### Test Results

   Scroll down to see the results of all of these specs.
   */
  var currentWindowOnload = window.onload;
  window.onload = function() {
    if (currentWindowOnload) {
      currentWindowOnload();
    }

    document.querySelector('.version').innerHTML = jasmineEnv.versionString();
    execJasmine();
  };

  function execJasmine() {
    jasmineEnv.execute();
  }
})();

// ## Downloads
//
// * The [Standalone Release](http://github.com/pivotal/jasmine/downloads) is for simple, browser page, or console projects
// * The [Jasmine Ruby Gem](http://github.com/pivotal/jasmine-gem) is for Rails, Ruby, or Ruby-friendly development
// * [Other Environments](http://github.com/pivotal/jasmine/wiki) are supported as well
//
// ## Support
//
// * [Mailing list](http://groups.google.com/group/jasmine-js) at Google Groups - a great first stop to ask questions, propose features, or discuss pull requests
// * [Report Issues](http://github.com/pivotal/jasmine/issues) at Github
// * The [Backlog](http://www.pivotaltracker.com/projects/10606) lives at [Pivotal Tracker](http://www.pivotaltracker.com/)
// * Follow [@JasmineBDD](http://twitter.com/jasminebdd) on Twitter
//
// ## Thanks
//
// _Running documentation inspired by [@mjackson](http://twitter.com/mjackson) and the 2012 [Fluent](http://fluentconf.com) Summit._
