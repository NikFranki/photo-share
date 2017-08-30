var HereDoc = function(f){
    var doc = String(f).replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
    return doc;
};

module.exports = HereDoc;
