import DS from 'ember-data';

var SpinQuestion = DS.Model.extend({
  questionText: DS.attr('string')
});

SpinQuestion.reopenClass({
  FIXTURES: [
    { id: 1, questionText: 'I am afraid of people in authority' },
    { id: 2, questionText: 'I am bothered by blushing in front of people' },
    { id: 3, questionText: 'Parties and social events scare me'  }
  ]
})

export default SpinQuestion;
