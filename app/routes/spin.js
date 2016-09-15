import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      Em.Object.create({questionText: 'I am afraid of people in authority'}),
      Em.Object.create({questionText: 'I am bothered by blushing in front of people'}),
      Em.Object.create({questionText: 'Parties and social events scare me'})
    ]
  }
});
