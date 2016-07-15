import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  // actions: {
  //   toggleImageSize(){
  //     this.toggleProperty('isWide');
  //   }
  // },
  mouseEnter(){
    this.toggleProperty('isWide');
  },
  mouseLeave(){
    this.toggleProperty('isWide');
  }
});
