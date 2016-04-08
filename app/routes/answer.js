import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  },

  actions: {
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },

    update(answer, params) {
      Object.keys(params).forEach(key => {
        if(params[key] !== undefined) {
          answer.set(key, params[key]);
        }
      });
      answer.save();
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    },
  }
});
