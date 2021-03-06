var JSL = require('lib-jsl');

var offer = {
    offerer : 'sandeep',
    bidder : '$bidder',
    symbol : 'ABC',
    price : 20,
    qty : 100
} 

var bids = [
[{
    offerer : '$offerer',
    bidder : 'kavi',
    symbol : 'ABC',
    price : 10,
    qty : 100
}],
[{
    offerer : '$offerer',
    bidder : 'pradeep',
    symbol : 'ABC',
    price : 20,
    qty : 100
}],
[{
    offerer : '$offerer',
    bidder : 'taran',
    symbol : 'ABC',
    price : 20,
    qty : 200
}]

]

var jsl = new JSL({
    rules: bids,
    query: [offer]
});

var response = jsl.run();
console.log('contract: ', response);

module.exports = response;
