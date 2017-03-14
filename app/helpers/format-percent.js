import Ember from 'ember';

export function formatPercent([value, precision]) {
    if(precision === null) {
        precision = 0;
    }
    return (parseFloat(value) * 100).toFixed(precision);
}

export default Ember.Helper.helper(formatPercent);
