import Ember from 'ember';
import DS from 'ember-data';
import Publisher from './publisher';

export default Publisher.extend({
  book: DS.hasMany('book', { async: true}),

  loadedAt: Ember.on('didLoad', function() {
    this.set('loadedAt', new Date());
  })
});
