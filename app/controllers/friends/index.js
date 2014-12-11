import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['sortBy', 'sortAscending', 'showReturned'],
  sortAscending: true,
  sortBy: 'fullName',
  showReturned: true,
  // We are making sortProperties a computed property.
  // If we change the value for sortBy then the property will be
  // recalculated.
  sortProperties: Ember.computed('sortBy', function() {
    return [this.get('sortBy')];
  }),

  filteredResults: Ember.computed('showReturned', function() {
    var results = this.get('model');
    if (!this.get('showReturned')) {
      results = results.filterBy('state', 'borrowed');
    }
    return results;
  }),

  actions: {
    //
    // The setSortBy function receives the name of the function and
    // toggle `sortAscending`. The function `toggleProperty` comes from the
    // [Observable Mixin](http://emberjs.com/api/classes/Ember.Observable.html)
    // it switches a boolean property between false and true.
    //
    setSortBy: function(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');
      return false;
    }
  }
});
