import Ember from 'ember';

export default Ember.Controller.extend({
  spinService: Em.inject.service('spin'),
  spinComplete: false,
  actions: {
    spinComplete(score) {
      this.setProperties({spinScore: score, spinComplete: true});
    }
  },
  currentSpinStage: Em.computed('spinComplete', function() {
    return this.get('spinService').spinStage(this.get('spinComplete'));
  })
});
