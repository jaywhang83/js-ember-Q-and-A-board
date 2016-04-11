import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  didInsertElement: function() {
    $('.modal-trigger').leanModal();
  },

  actions: {
    update(question, params) {
      Object.keys(params).forEach(key => {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },

    destroyQuestion(question) {
      var answer_deletions = question.get('answers').map(answer => {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(() => {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      console.log(params.question)
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(() => {
        return question.save();
      });
      this.transitionTo('question', params.question);
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

    delete(question) {
      if(confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
  }
});
