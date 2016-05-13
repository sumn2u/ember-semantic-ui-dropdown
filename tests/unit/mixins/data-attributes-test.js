import Ember from 'ember';
import DataAttributesMixin from 'ember-semantic-ui-dropdown/mixins/data-attributes';
import { module, test } from 'qunit';

module('Unit | Mixin | data attributes');

// Replace this with your real tests.
test('it works', function(assert) {
  let DataAttributesObject = Ember.Object.extend(DataAttributesMixin);
  let subject = DataAttributesObject.create();
  assert.ok(subject);
});
