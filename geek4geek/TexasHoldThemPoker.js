"use strict";
// url ref: https://www.codewars.com/kata/5739174624fc28e188000465/train/javascript

// A famous casino is suddenly faced with a sharp decline of their revenues. They decide to offer Texas hold'em also online. Can you help them by writing an algorithm that can rank poker hands?

// Task
// Create a poker hand that has a method to compare itself to another poker hand:

// PokerHand.prototype.compareWith = function(hand){...};
// A poker hand has a constructor that accepts a string containing 5 cards:

// var hand = new PokerHand("KS 2H 5C JD TD");
// The characteristics of the string of cards are:

// Each card consists of two characters, where
// The first character is the value of the card: 2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)
// The second character represents the suit: S(pades), H(earts), D(iamonds), C(lubs)
// A space is used as card separator between cards
// The result of your poker hand compare can be one of these 3 options:

// var Result =
// {
//     "win": 1,
//     "loss": 2,
//     "tie": 3
// }
/* describe("If a poker hand is compared to another poker hand then:", function () {

  it("Highest straight flush wins", function() { assert(Result.loss, "2H 3H 4H 5H 6H", "KS AS TS QS JS");});
  it("Straight flush wins of 4 of a kind", function() { assert(Result.win, "2H 3H 4H 5H 6H", "AS AD AC AH JD");});
  it("Highest 4 of a kind wins", function() { assert(Result.win, "AS AH 2H AD AC", "JS JD JC JH 3D");});
  it("4 Of a kind wins of full house", function() { assert(Result.loss, "2S AH 2H AS AC", "JS JD JC JH AD");});
  it("Full house wins of flush", function() { assert(Result.win,  "2S AH 2H AS AC", "2H 3H 5H 6H 7H");});
  it("Highest flush wins", function() { assert(Result.win, "AS 3S 4S 8S 2S", "2H 3H 5H 6H 7H");});
  it("Flush wins of straight", function() { assert(Result.win, "2H 3H 5H 6H 7H", "2S 3H 4H 5S 6C");});
  it("Equal straight is tie", function() { assert(Result.tie, "2S 3H 4H 5S 6C", "3D 4C 5H 6H 2S");});
  it("Straight wins of three of a kind", function() { assert(Result.win, "2S 3H 4H 5S 6C", "AH AC 5H 6H AS");});
  it("3 Of a kind wins of two pair", function() { assert(Result.loss, "2S 2H 4H 5S 4C", "AH AC 5H 6H AS");});
  it("2 Pair wins of pair", function() { assert(Result.win, "2S 2H 4H 5S 4C", "AH AC 5H 6H 7S");});
  it("Highest pair wins", function() { assert(Result.loss, "6S AD 7H 4S AS", "AH AC 5H 6H 7S");});
  it("Pair wins of nothing", function() { assert(Result.loss, "2S AH 4H 5S KC", "AH AC 5H 6H 7S");});
  it("Highest card loses", function() { assert(Result.loss, "2S 3H 6H 7S 9C", "7H 3C TH 6H 9S");});
  it("Highest card wins", function() { assert(Result.win, "4S 5H 6H TS AC", "3S 5H 6H TS AC");});
  it("Equal cards is tie", function() { assert(Result.tie, "2S AH 4H 5S 6C", "AD 4C 5H 6H 2C");});
});
*/

// function assert(expected, player, opponent){
//   var p = new PokerHand(player);
//   var o = new PokerHand(opponent);
//   Test.assertEquals(p.compareWith(o), expected);
// }



let Result = { "win": 1, "loss": 2, "tie": 3 }; // this is a conversion object to return the desired solution to the problem, but can be changed accordingly (ie hooked to a button or another function)

let values = { // object of all the values of each card
  '2':2,
  '3':3,
  '4':4,
  '5':5,
  '6':6,
  '7':7,
  '8':8,
  '9':9,
  'T':10,
  'J':11,
  'Q':12,
  'K':13,
  'A':14,
  'C': 'Clubs',
  'S': 'Spades',
  'H': 'Hearts',
  'D': 'Diamonds',
};

//hand evaluation function return an object {match:boolean, high: string, suit: string}
function sortHand(hand) { // function that evaluates each card based on the value table
  return hand.split(' ').sort(function(a,b) {
    return values[a[0]]-values[b[0]];
  })
}

function evalKicker(kicker) { // takes an array of cards converts them to their numerical value and returns it as a result
  let val = [];
  kicker.forEach((card => {
    val.push(values[card[0]]);
  }));
  return val.sort((a,b)=>a-b);
}


let CFRF = (hand) => { //checkForRoyalFlush
  let res = sortHand(hand);
  let suit = res[0][1];
  let royal = 'Tx Jx Qx Kx Ax'.replace(/x/g, suit);

  if (CFSF(hand)) {
    if (res.join(' ') === royal){
      return {
        match: true,
        high: res[res.length-1][0],
        suit: suit
      };
    } else { return false;}
  } else { return false;}
};

let CFSF = (hand) => { // checkForStraightFlush
  let res = sortHand(hand);
  let high = res[res.length-1][0];
  let suit = res[0][1];

  if (CFS(hand)) { // check for a straight
    if (CFF(hand)) {
      return {
        match: true,
        high: high,
        suit: suit
      };
    } else {
      return false;
    }
  } else {
    return false;
  }
};

let CFOAK = (hand) => { //checkFourOfAKind

  let res = sortHand(hand); // convert hand string to an array of cards
  //store the first card to begin checking for same value cards
  let hash = {};
  let high;
  let suit;
  let kicker = [];
  res.forEach((card) =>{
    if (hash[card[0]] === undefined) { // initialize prop
      hash[card[0]] = 1;
      kicker.push(card[0]); // add the card to our kicker for later comparison
    } else {
      hash[card[0]] ++; // increment
    }
  });

  function getKeyByValue(object, value) { // this searches through an object for a specific key value pair based on value
    return Object.keys(object).find(key => object[key] === value);
  };

  high = getKeyByValue(hash, 4);
  if (high !== undefined) {
    return {
      match: true,
      high: high,
      suit: suit,
      kicker: evalKicker(kicker),
    };
  } else {
    return false;
  }
};

let CFFH = (hand) => { // checkForFullHouse
  let res = sortHand(hand); // convert hand string to an array of cards
  // create a hash map which will tally up quantities of each value
  let hash = {};
  res.forEach((card) => { // generate an object table tallying each time a value appears
    if(hash[card[0]] === undefined) {
      hash[card[0]] = 0; // initialize the property
    }
      hash[card[0]]++;
  });
  let keys = Object.getOwnPropertyNames(hash); // generate an array with all the values in hand
  let pairValue; // store the pair
  let tripleValue; // store the triple
  keys.forEach((key=> {
    if (hash[key] == 2) {
      pairValue = key;
    }
    if (hash[key] == 3) {
      tripleValue = key;
    }
  }));
  let high = [tripleValue, pairValue]; // set high value
  let suit; // initialize
  let kicker = [values[pairValue], values[tripleValue]]; // here we convert it because we want the kicker numbers specific to the triple value vs the pair value in ties

  if (pairValue !== undefined && tripleValue !== undefined) {
    return {match: true, high: high, suit: suit, kicker: kicker}; // note we did not use our kicker converter because it sorts
  } else {
    return false;
  }
};

// flushes need to return all cards as kicker
let CFF = (hand) => { // checkForFlush
  let res = sortHand(hand); // convert hand string to an array of cards
  let suit = res[0][1]; // the flush suit
  let mismatch = 0;
  let high;
  let kicker = [];

  res.forEach((card) => { // push all the suits on to our flush holder
    if (card[1] !==  suit) {
      mismatch++;
    }

    high = card[0];
    kicker.push(card[0]);
  });

  if (mismatch > 0) {
    return false;
  } else {
    return {match: true, high: high, suit: suit, kicker: evalKicker(kicker)};
  }
}

let CFS = (hand) => { // checkForStraight
  let res = sortHand(hand); // convert hand string to an array of cards
  let init = values[res[0][0]]; //initial value
  let end = values[res[res.length-1][0]]; // last value
  let straightCt = 0;
  let suit;
  let high = res[res.length-1][0];
 // generate  an array with just hand values
  let straight = [];

  res.forEach((card)=> {
    straight.push(card[0]);
  });

for (let i=0; i<res.length; i++) {
  if (i === values[straight[i]]-init) {
    straightCt++;
  }
};

  if (straightCt !== 5) {
    return false;
  } else {
    return {match:true, high: high, suit: suit};
  }
};

let CFTOAK = (hand) => { // checkForThreeOfAKind
  let res = sortHand(hand); // convert hand string to an array of cards
  // create a hash map which will tally up quantities of each value
  let hash = {};
  let suit;
  let kicker = [];

  res.forEach((card) => {
    if(hash[card[0]] === undefined) {
      hash[card[0]] = 0; // initialize the property
    }
      hash[card[0]]++;
  });
  let setOfThree;
  let keys = Object.getOwnPropertyNames(hash);
  keys.forEach((property) => {
    if (hash[property] === 3) {
      setOfThree = property;
    } else { // if the number is not a set of 3 go ahead and push it to the kicker incase of ties
      kicker.push(property);
    }
  });
  if (setOfThree !== undefined) {
    return {match: true, high: setOfThree, suit: suit, kicker: evalKicker(kicker)};
  } else {
    return false;
  }
};

let CFTP = (hand) => { // checkForTwoPair
  let res = sortHand(hand); // convert hand string to an array of cards
  // create a hash map which will tally up quantities of each value
  let hash = {};
  let pairs = 0;
  let kicker = [];

  res.forEach((card) => { // generates a hash table which tracks repeats
    if(hash[card[0]] === undefined) {
      hash[card[0]] = 0; // initialize the property
    }
      hash[card[0]]++; // increment for each time duplicate card value
  });
  let pair;
  let suit;
  let keys = Object.getOwnPropertyNames(hash);

  keys.forEach((property) => { // iterate through our hash table
    if (hash[property] === 2) {
      pairs++;
      if (pair !== undefined) {
        pair = property;
      } else {
        if (Number(pair) > Number(property)) {
          // do nothing
        } else {
          pair = property;
        }
      }
    } else {
      kicker.push(property); // pushes any non matching card to kickers
    }
  });

  if (pair !== undefined && pairs == 2) {
    return {match: true, high: pair, suit: suit, kicker: evalKicker(kicker)};
  }
  else {
    return false;
  }
};

let CFP = (hand) => { // checkForAPair // also checks for two pairs
  let res = sortHand(hand); // convert hand string to an array of cards
  // create a hash map which will tally up quantities of each value
  let hash = {};
  res.forEach((card) => {
    if(hash[card[0]] === undefined) {
      hash[card[0]] = 0; // initialize the property
    }
      hash[card[0]]++;
  });
  let pair;
  let suit;
  let keys = Object.getOwnPropertyNames(hash);
  let kicker = [];
  keys.forEach((property) => {
    if (hash[property] === 2) {
      if (pair === undefined) {
        pair = property;
      } else {
        if (Number(pair) > Number(property)) { // replace if new property is higher
          // dont set the new prop as highest pair if property is not larger
        } else {
          pair = property;
        }
      }
    }
    else {
        kicker.push(property);
      }
  });

  if (pair !== undefined) {
    return {match: true, high: pair, suit: suit, kicker: evalKicker(kicker)};
  }
  else {
    return false;
  }
};

let CFHC = (hand) => { // checkForHighCard
  let res = sortHand(hand);
  let kicker = [];
  res.forEach((card) => {
    kicker.push(values[card[0]]); // pushes kicker values to data obj
  })
  return {match: true, high: res[res.length-1][0], kicker: kicker}
};

let handTypes = ['CFHC', 'CFP', 'CFTP', 'CFTOAK', 'CFS', 'CFF', 'CFFH', 'CFOAK', 'CFSF', 'CFRF']; // array with each hand type in ranking low-high

function checkHandVsType(hand, type) { // check hand and return highest value
  switch (type) {
    case 'CFRF': // royal flush
      return CFRF(hand);
      break;
    case 'CFSF': // straight flush
      return CFSF(hand);
      break;
    case 'CFOAK': // four of a kind
      return CFOAK(hand);
      break;
    case 'CFFH': // full house
      return CFFH(hand);
      break;
    case 'CFF': // flush
      return CFF(hand);
      break;
    case 'CFS': // straight
      return CFS(hand);
      break;
    case 'CFTOAK': // three of a kind
      return CFTOAK(hand);
      break;
    case 'CFTP':// two pair
      return CFTP(hand);
      break;
    case 'CFP': // pair
      return CFP(hand);
      break;
    case 'CFHC': // high card
      return CFHC(hand);
      break;
    default:
      return CFHC(hand);
      break;
  }
};

function evalHand(hand) { // returns an object with hand value, highest card, and hand type
  let match; // if any matches follow to next step
  let handType;

  for (let i=handTypes.length-1; i>=0;i--) { // decrement down our hands based on highest value handType
    if (checkHandVsType(hand, handTypes[i])) {
      handType = handTypes[i];
      match = checkHandVsType(hand, handTypes[i]); // returns results of eval hand
      if (match !== undefined) {
        break; // end loop if any matches occur
      } else {
        continue; // otherwise continue looping through hand types
      }
    }
  };
  let value = handTypes.indexOf(handType);
  let high = (match.high) ? match.high : undefined;
  let kicker = match.kicker ? match.kicker : undefined;
  if (match !== undefined) {
    return {value: value, handType: handType, high: high, kicker: kicker};
  }
}

function compareHands(ownHand, opposingHand) {
  let own = evalHand(ownHand);
  let opponent = evalHand(opposingHand);

  if (own.value > opponent.value) {
    return 'win';
  }
  else if (own.value === opponent.value) { //tie handtype scenarios
    if (values[own.high] > values[opponent.high]) { // own high card is higher
      return 'win'
    }
    else if (values[own.high] < values[opponent.high]) {
      return 'loss'
    }
    else if (values[own.high] === values[opponent.high]) { // tie hand value scenario
      if (own.kicker === undefined) {
        return 'tie';
      }
      if (compareKickers(own.kicker, opponent.kicker) === 'win') {
        return 'win';
      } else if (compareKickers(own.kicker, opponent.kicker) === 'loss') {
        return 'loss';
      } else if (compareKickers(own.kicker, opponent.kicker) === 'tie') {
        return 'tie';
      } else {
        return compareKickers(own.kicker, opponent.kicker);
      }
    }
  }
  else {
    return 'loss';
  }
};

function compareKickers(ownKicker, opponentKicker) {
  // win loss tie
  let condition;
  if (ownKicker.length !== opponentKicker.length) { // return an error if the kickers don't match lengths
    return 'error kicker lengths not matching';
  } else {
    for (let i = ownKicker.length-1; i>=0; i--) { //decrement from the highest kicker value
      if (ownKicker[i] > opponentKicker[i]) {
        condition = 'win';
        break;
      } else if (ownKicker[i] < opponentKicker[i]) {
        condition = 'loss';
        break;
      } else {
        if(i>1) {
          continue;
        } else {
          condition = 'tie';
        }
      }
    }
  }
  return condition;
};

class PokerHand { // class declaration that allows us to construct hand objects which can compare themselves with other hand objects
  constructor(hand = null) {
    this.hand = hand;
    this.value = evalHand(hand);
  }
   compareWith(opponent) { // method allowing us to compare with opponents
      return Result[compareHands(this.hand, opponent.hand)];
    };
  };

let test = '4C 5C 9C 8C KC';
let test2 = '3S 8S 9S 5S KS';

 // let test = 'AS AC TD JH 3H';
 // let test2 = 'KD KH JS TC 4H';



console.log(sortHand(test));
console.log(sortHand(test2));

console.log(evalHand(test))
console.log(evalHand(test2))

let p = new PokerHand(test);
let o = new PokerHand(test2);

// console.log(p);
// console.log(o);

console.log(p.compareWith(o));
//console.log(evalHand(test2));
//console.log(compareHands(test, test2));