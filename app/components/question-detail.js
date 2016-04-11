import Ember from 'ember';

export default Ember.Component.extend({

  sortBy:['rating:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },

    increaseRating(answer) {
      var countForRating = answer.get('rating');
      answer.set('rating', countForRating += 1);
      answer.save();
      this.transitionTo('question');
    },

    decreaseRating(answer) {
      var countForRating = answer.get('rating');
      answer.set('rating', countForRating -= 1);
      answer.save();
      this.transitionTo('question');
    },
  }
});
