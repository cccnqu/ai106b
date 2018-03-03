var R = require("./setTheory");

var print = console.log
var S10 = R.Finite(10);
print('S10.sample(5)=', S10.sample(5));
print('Float.sample(5)=', R.Float.sample(5));
print('Z.sample(5)=', R.Z.sample(5));
print('Even.sample(5)=', R.Even.sample(5));
print('Odd.sample(5)=', R.Odd.sample(5));
print('Prime.sample(5)=', R.Prime.sample(5));
print('Prime.enumerate()=', R.Prime.enumerate());
print('Empty.sample(5)=', R.Empty.sample(5));
var OddPrime = R.Odd.intersection(R.Prime);
OddPrime.enumHead = [3,5,7,11,13];
print('OddPrime.sample(5)=', OddPrime.sample(5));
print('OddPrime.has(71)=', OddPrime.has(71));
print('OddPrime.has(70)=', OddPrime.has(70));
print('OddPrime.has(69)=', OddPrime.has(69));
var OddXPrime = R.Odd.cartesianProduct(R.Prime);
print('OddXPrime.has([9,71])=', OddXPrime.has([9, 71]));
print('OddXPrime.has([8,71])=', OddXPrime.has([8, 71]));
print('OddXPrime.has(71)=', OddXPrime.has(71));
// RussellSet
print('RussellSet.has(Odd)=', R.RussellSet.has(R.Odd));
print('RussellSet.has(RussellSet)=', R.RussellSet.has(R.RussellSet));