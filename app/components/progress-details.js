import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    transfer: null,
    transferPercent: null,

    sendingProgressDidChange: function () {
        const progress = this.get('transfer.sendingProgress');
        this.set('transferPercent', progress);
    }.observes('transfer.sendingProgress'),

    receivingProgressDidChange: function () {
        const progress = this.get('transfer.receivingProgress');
        this.set('transferPercent', progress);
    }.observes('transfer.receivingProgress'),

});
