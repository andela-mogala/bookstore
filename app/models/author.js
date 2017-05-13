import DS from 'ember-data';
import Publisher from './publisher';

export default Publisher.extend({
  book: DS.hasMany('book')
});
