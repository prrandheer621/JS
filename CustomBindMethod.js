let name1 = {
    firstname: 'Master',
    lastname: 'Randheer'
}
let name2 = {
    firstname: 'Randheer',
    lastname: 'Prakash'
}

let name3 = {
    firstname: 'Dhirendra',
    lastname: 'Prakash'
}

let printFullName = function(city, state, country) {
    console.log(this.firstname + ' ' + this.lastname + ' ' + city + ' ' + state + ' ' + country);
}


// printFullName.apply(name1, ['Bangalore']);
// printFullName.call(name2, 'Bangalore');

let mynameprint = printFullName.bind(name3, 'Bangalore');
mynameprint('Karnataka', 'I');


Function.prototype.mybind = function(...args){
    let obj = this,
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params,...args2]);
    }
}

let mynameprint2 = printFullName.mybind(name3, 'B', 'K', 'I');
mynameprint2();