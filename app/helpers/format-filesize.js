import Ember from 'ember';

export function formatFilesize([size, precision]) {
    if(precision === null) {
        precision = 0;
    }
    size = parseFloat(size);
    var i = 0;
    let extensions = [
        "B",
        "KB",
        "MB"
    ];
    while(size > 1024 && i < extensions.length - 1) {
        size /= 1024;
        i++;
    }
    return '' + size.toFixed(precision) + ' ' + extensions[i];
}
export default Ember.Helper.helper(formatFilesize);
