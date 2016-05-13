
[![Build Status](https://travis-ci.org/sumn2u/ember-semantic-ui-dropdown.svg?branch=master)](https://travis-ci.org/sumn2u/ember-semantic-ui-dropdown.svg?branch=master)
![Semantic](http://www.semantic-ui.com/images/logo.png)

# Ember Semantic-UI-DropDown

This is the official Ember library for the Semantic-UI modules. 
# Installation

Include the library as an [NPM](https://www.npmjs.com/) dependency, from within an [ember-cli](http://www.ember-cli.com/) app.

```
ember install ember-semantic-ui-dropdown
```

*If using ember-cli 0.1.5 – 0.2.3*

```
ember install:addon ember-semantic-ui-dropdown
```

Run the library's blueprint to pull in its Bower dependencies. This only needs to be done once.

```
ember generate ember-semantic-ui-dropdown
```

# Modules

## Dropdown

 * **Documentation**: [Official Documentation](http://semantic-ui.com/modules/dropdown.html)
 * **Class**: `ui dropdown`
 * **Component**: `ui-dropdown`
 * **Parameters**
    * **selected**: Bound value that is set to `optionValuePath`
    * **onChange**: Event to bind changes too

Replace `<div class="ui dropdown">` with `{{ui-dropdown}}` and fill in your content

### Controller
```javascript
export default Ember.Controller.extend({
	itemActions: [ "Edit", "Remove", "Hide"],
	selectedAction: null,

	actions: {
	  updateSelected: function(component, id, value) {
	    this.set('selectedAction', id);
	  }
	}
});
```

### Template
```handlebars
{{#ui-dropdown class="selection" onChange=(action 'updateSelected')}}
  <div class="default text">Select an item</div>
  <i class="dropdown icon"></i>
  <div class="menu">
  {{#each itemActions as |action|}}
    <div class="item" data-id="{{action}}">
      {{action}}
    </div>
  {{/each}}
  </div>
{{/ui-dropdown}}
```



