import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
