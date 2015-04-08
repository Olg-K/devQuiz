/**
 * #1 Value type properties in prototype
*/

function Foo() {
    this.values = [];
}

Foo.prototype.count = 0;

Foo.prototype.lazyInit = function() {/* some heavy code here */};

Foo.prototype.append = function(val) {

    if(this.count === 0) {
        this.lazyInit();
    }

    this.values.push(val);
    this.count++;
};

var bar = new Foo();
var buz = new Foo();

bar.append({name: 'John'});

console.info(bar.count);
console.info(buz.count);

// TODO: Reference type properties in prototype
