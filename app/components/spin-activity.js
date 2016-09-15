import Ember from 'ember';

export default Ember.Component.extend({
  scores: [],
  actions: {
    setScore(score) {
      this.get('scores').push(score);
      this.nextQuestion();
    }
  },
  init() {
    this.set('question', this.get('questions.firstObject'));
    this._super();
  },
  nextQuestion() {
    if (this.get('questions').indexOf(this.get('question')) == this.get('questions.length') - 1) {
      var totalScore = 0;
      this.get('scores').map(function(score) {totalScore += score;})
      this.sendAction('spinComplete', totalScore);
    } else
      this.set('question', this.get('questions').objectAt(this.get('questions').indexOf(this.get('question')) + 1));
  }
});
