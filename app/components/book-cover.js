import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  
  actions: {
    open() {
      this.set('isShowingModal', true);
    },

    close() {
      this.set('isShowingModal', false);
    }
  }
});
