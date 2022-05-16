class MyCollection{
    constructor(){
        this.elements=arguments;
    }
    everyC = function (callback) {
        let result=true;
        for (let i = 0; i < this.elements.length; i++) {
            if(result==true){
                result=callback(this.elements[i])
            }
            else result=false;
        }
        return result; 
    }
    someC = function (callback) {
        let result=false;
        for (let i = 0; i < this.elements.length; i++) {
            if(result==false){
                result=callback(this.elements[i])
            } 
            else result=true          
        }
        return result; 
    }
    indexOfC = function (callback) {
        let result;
        for (let i = 0; i < this.elements.length; i++) {
            if(callback(this.elements[i]))
                result=callback(i); 
        }
        return result; 
    }
    mapC = function (callback) {
        let result = [];

        for (let i = 0; i < this.elements.length; i++) {
            result.push(callback(this.elements[i]))
        }

        return result;
    }

    filterC = function (callback) {
        let result = [];
        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i])) {
                result.push(this.elements[i])
            }
        }
        return result;
    }
}

let myCollection = new MyCollection(71, 22, 43, 24, 25, 26);
let collection = [71, 2, 43, 4, 25, 6];

let res = myCollection.everyC(x => {
    return x>18;
});

let res2 = collection.every(x => {
    return x>18;
});
let res3 = myCollection.someC(x => {
    return x>18;
});

let res4 = collection.some(x => {
    return x>18;
});
let position = collection.indexOf(71)+1;
let position2 = myCollection.indexOfC(x => {
    return x=71;
});

let res5 = myCollection.filterC(x => {
    return x > 3;
});

let res6 = collection.filter(x => {
    return x > 3;
});

console.log(res)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(position)
console.log(position2)
console.log(res5)
console.log(res6)