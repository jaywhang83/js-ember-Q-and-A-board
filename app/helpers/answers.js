import Ember from 'ember';

export function answers(params) {
  var answer = params[0];

  return "Answers: " + answer.get('answers').get('length');
}

export default Ember.Helper.helper(answers);
