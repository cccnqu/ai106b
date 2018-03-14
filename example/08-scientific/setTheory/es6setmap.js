var c = console;

var bloodSet = new Set(["A", "B", "AB", "O"]);

var A = ["A","隨興"], B=["B","正直"], AB=["AB", "固執"], O=["O", "樂觀"];

var bloodMap = new Map([A,B,AB,O]);

c.log('bloodSet.has(A)=', bloodSet.has("A"));
c.log('bloodSet.has(C)=', bloodSet.has("C"));
c.log('bloodMap.has(A)=', bloodMap.has("A"));
c.log('bloodMap.has(C)=', bloodMap.has("C"));
c.log('bloodMap.get(A)=', bloodMap.get("A"));
c.log('bloodMap.get(C)=', bloodMap.get("C"));