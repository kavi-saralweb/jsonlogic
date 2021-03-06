var JSL = require('lib-jsl');

var offers = [
[{
    type : 'offer',
    offerer : 'sandeep',
    bidder : '$bidder',
    symbol : 'ABC',
    price : 20,
    qty : 100
}],
[{
    type : 'offer',
    offerer : 'shekhar',
    bidder : '$bidder',
    symbol : 'ABC',
    price : 25,
    qty : 100
}],
[{
    type : 'offer',
    offerer : 'ruchir',
    bidder : '$bidder',
    symbol : 'ABC',
    price : 20,
    qty : 200
}]

]


var bids = [
[{
    type : 'bid',
    offerer : '$offerer',
    bidder : 'kavi',
    symbol : 'ABC',
    price : 20,
    qty : 100
}],
[{
    type : 'bid',
    offerer : '$offerer',
    bidder : 'pradeep',
    symbol : 'ABC',
    price : 30,
    qty : 100
}]


]

var rules = [
    [   
        { match : {offerer : '$offerer', bidder : '$bidder', symbol : '$symbol', price : '$price', qty : '$qty', status : '$status'}},
        { type: 'bid', bidder : '$bidder', symbol : '$symbol', price : '$price', qty : '$qty'},
        { $or : [
            { $and : [ 
                { type : 'offer', offerer : '$offerer', symbol : '$symbol', price : '$price', qty : '$qty'},
                { $bind : [ '$status', 'matched' ] }
            ] },
            { $bind : [['$status', '$offerer'] , ['**unmatched**', 'N/A'] ] }
        ] }
            
    ]
]

var jsl = new JSL({
    rules: rules.concat(bids, offers),
    query: [{match: '$match'}],
    transform: '$match'
});

var response = jsl.run();
console.log('matches: ', response);

module.exports = response;
