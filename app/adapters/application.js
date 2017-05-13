import DS from 'ember-data';
import Ember from 'ember';

const { String: { pluralize, underscore } } = Ember;

export default DS.JSONAPIAdapter.extend({
  pathForType(type) {
    return pluralize(underscore(type));
  },

  shouldReloadRecord() {
    return false;
  },

  shouldBackgroundReloadRecord(store, snapshot) {
    console.log("Calling shouldBackgroundReloadRecord");
    const loadedAt = snapshot.record.get('loadedAt');

    //if it was loaded more than an hour ago
    if (Date.now() - loadedAt > 3600000) {
      return true;
    }
    return false;
  }
});
