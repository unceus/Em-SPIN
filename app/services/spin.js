import Ember from 'ember';

export default Ember.Service.extend({
  spinStage(spinComplete) {
    if (spinComplete) {
      return "spin-complete";
    } else {
      return "spin-activity";
    }
  }
});
