import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    transfer: null,
    transferPercent: null,
    transferSpeed: null,
    peer:null,

    _lastProgressTime:0,
    _lastProgressPercent:0,

    sendingProgressDidChange: function () {
        const progress = this.get('transfer.sendingProgress');
        this.set('transferPercent', progress);
        this._calculateTransferSpeed();
    }.observes('transfer.sendingProgress'),

    receivingProgressDidChange: function () {
        const progress = this.get('transfer.receivingProgress');
        this.set('transferPercent', progress);
        this._calculateTransferSpeed();
    }.observes('transfer.receivingProgress'),

    _calculateTransferSpeed: function() {
        let currentTime = new Date().getTime();
        // const currentProgress = this.get('transferPercent');
        const currentProgress = this.transferPercent;
        const size = this.get('transfer.info.size');
        const lastProgressPercent = this.get('_lastProgressPercent');
        const lastProgressTime = this.get('_lastProgressTime');

        let transferredBytes = (currentProgress - lastProgressPercent) * ( size);
        let transferredTime = (currentTime - lastProgressTime);
        let transferSpeed = (transferredBytes ) / (transferredTime / 1000); // B/s

        if(transferredTime < (1*1000)) { // only update every second to smooth out the value a bit
            return;
        }

        this.set('_lastProgressPercent', currentProgress);
        this.set('_lastProgressTime', currentTime);
        this.set('transferSpeed', transferSpeed);

    },

});
