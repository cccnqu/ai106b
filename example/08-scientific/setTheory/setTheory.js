var S = {}
// var I = require("./integer");

S.PI = Math.PI;
S.E  = Math.E;

extend = S.extend = Object.assign;
// ================= Rule =====================
var check = S.check = S.assert = function(cond, msg) {
    if (cond)
        console.log("O:"+msg);
    else {
        console.log("X:"+msg);
        if (S.throwError) throw Error('check fail!');
    }
}

be = S.be =function(msg,cond) { return check(cond, msg) }

S.proto=function(o) { return Object.getPrototypeOf(o) }

// relation
var eq=S.eq=function(a,b)  {
  return (typeof a === typeof b) && a.toString()===b.toString() 
}
S.neq=function(a,b)  { return !S.eq(a,b) }
S.leq=function(a,b)  { return a<=b }
S.geq=function(a,b)  { return a>=b }
S.lt =function(a,b)  { return a<b  }
S.gt =function(a,b)  { return a>b  }

// ========= type checking =================
S.yes=function(a) { return true }
S.no=function(a) {return false }
S.isBool=function(a) { 
  return typeof a === 'boolean' || a instanceof Boolean 
}
S.isFunction=function(a) { 
  return typeof a==='function' || a instanceof Function 
}
S.isString=function(a) { 
  return typeof a==='string' || a instanceof String 
}
S.isObject=function(a) { 
  return typeof a==='object' || a instanceof Object 
}
S.isArray=function(a) { 
  return a instanceof Array 
}
S.isUndefined=function(a) { 
  return typeof a === 'undefined' 
}
S.isSet=function(a) { 
  return a instanceof Set 
}
S.isFloat=S.isNumber=function(a) { 
  return typeof a === 'number' || a instanceof Number 
}
S.isInteger=function(a) { return S.isFloat(a) && a%1===0 }
S.isZero=function(a) { return a===0 }
S.isPositive=function(a) { return a>0 }
S.isNegative=function(a) { return a<0 }
S.isEven=function(a) { return (S.isInteger(a) && a%2===0) }
S.isOdd=function(a) { return (S.isInteger(a) && a%2===1) }

// ========== Random ==============
S.random=function(a,b) {
  return a+Math.random()*(b-a);
}

S.randomInt=function(a,b) {
  return Math.floor(S.random(a,b));
}

S.sample=function(a) {
  return a[S.randomInt(0,a.length)]; 
}

// ========= Set ===================
Set.prototype.union = function(setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

Set.prototype.difference = function(setB) {
    var difference = new Set(this);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}

Set.prototype.enumerate = function(n) {
    var array=[], values = this.values();
    for (var i=0; i<n; i++) {
        array.push(values.next().value);
    }
    return array;
}

class EnumSet {
    constructor(enumHead) { 
      this.set = new Set(enumHead);
      this.enumHead = S.isUndefined(enumHead)?[]:enumHead;    
    }
    add(e) { this.set.add(e) }
    has(e) { return this.set.has(e) }
    sample(n) { 
      if (S.isUndefined(n))
            return S.sample(this.enumHead);
        else {
            var a=[];
            for (var i=0; i<n; i++) a.push(this.sample());
            return a;
        }
    }
    enumerate() { return this.enumHead }
    intersection(y) {
        var x=this, xy=new EnumSet();
        xy.has=function(e) { return x.has(e)&&y.has(e) }
        return xy;
    }
    union(y) {
        var x=this, xy=new EnumSet();
        xy.has=function(e) { return x.has(e)||y.has(e) }
        return xy;
    }
    difference(y) {
        var x=this, xy=new EnumSet();
        xy.has=function(e) { return x.has(e)&&!y.has(e) }
        return xy;
    }
    symmetricDifference(y) {
        var x=this;
        return x.union(y).difference(x.intersection(y));
    }
    cartesianProduct(y) { 
        var x=this, xy=new EnumSet();
        xy.has=function(e) { return x.has(e[0]) && y.has(e[1]) }
        return xy;
    }
}

S.Set = EnumSet

function steps(a,b,step) {
    var array=[];
    for (var i=a; i<=b; i+=step) 
        array.push(i);
    return array;
}

var enumFloat = [-3.2,-1, 0, 1, 2.3, 4.7];
var enumInt   = [-10,-5,-1,0,1,3,5,6];
var enumN0    = steps(0,10,1);
var enumN1    = steps(1,10,1);
var enumOdd   = steps(1,15,2);
var enumEven  = steps(2,15,2);
var enumPrime = [2,3,5,7,11,13,17,19,23,29,31,37];
var enumAll   = ["hi", 5, Math.PI, EnumSet, S.isBool, enumPrime, new Set() ];

// 全體集合
S.All = new EnumSet(enumAll);
S.All.has = S.yes;

// 空集合
S.Empty = new EnumSet([]);
S.Empty.has = S.no;

// 浮點數集合
S.Float=new EnumSet(enumFloat);
S.Float.has=S.isFloat;

// 整數集合
S.Z=S.Integer=new EnumSet(enumInt);
S.Z.has=S.isInteger;

// 自然數集合 N0
S.N0=new EnumSet(enumN0);
S.N0.has=(e)=>S.isInteger(e)&&e>=0;

// 自然數集合 N1
S.N1=new EnumSet(enumN1);
S.N1.has=(e)=>S.isInteger(e)&&e>1;

// 偶數集合
S.Even=new EnumSet(enumEven);
S.Even.has=S.isEven;

// 奇數集合
S.Odd=new EnumSet(enumOdd);
S.Odd.has=S.isOdd;

// 質數集合
S.Prime=new EnumSet(enumPrime)
S.Prime.has= function isPrime (n) {
  for (var i=2; i<n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 有限集合 0...n-1
S.Finite=(n)=>new EnumSet(steps(0,n-1,1));

// 羅素集合悖論
S.RussellSet=new EnumSet(enumAll);
S.RussellSet.has=function(e) { return !e.has(e) }

module.exports=S;