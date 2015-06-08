/**
 * Markdown description.
 *
 *
 * @number
 *      Question numer for quick reference.
 *      Probably should be changed to smth like 'name',
 *      so nobody needs to keep the order, which could be an inconvenience
 *      Mandatory.
 *
 * @level
 *      Rough question level.
 *      For now there are three recognized levels: Simple, Average and Advanced
 *      Mandatory.
 *
 * @topic
 *      Language aspect that a question digs into.
 *
 * @related
 *     Related topics or questions (?)
 *
 * @description
 *      Question definition, e.g what to ask when the related code is provided.
 *
 * @additional
 *      Andditional questions that could be asked after the initial answer is provided.
 *
 * @answer:
 *      Answer to a question.
 *      Mandatory.
 *
 *
 * Misc.
 * 
 *  Place all code related to one question inside a code block ({}) so it could be collapsed:
 */







/**
 * @number 1
 * @level Advanced(?).
 * @topic Property lookup uses prototype chain, assigning does not.
 * @description What will be printed in console.
 * @answer: 
 *      console.log(bar.count) prints 1
 *      console.log(buz.count) prints 0
 *
 */
{
    function Foo() {
        this.values = [];
    }

    Foo.prototype.count = 0;

    Foo.prototype.lazyInit = function() { /* some heavy code here */ };

    Foo.prototype.append = function(val) {

        if (this.count === 0) {
            this.lazyInit();
        }

        this.values.push(val);
        this.count++;
    };

    var bar = new Foo();
    var buz = new Foo();

    bar.append({
        name: 'John'
    });

    console.log(bar.count);
    console.log(buz.count);
}


/**
 * @number 2
 * @level Average
 * @topic Prototype is a shared object
 * @description What will be printed in console
 * @additional How to change the code to make 'stats' calculate statistics for each instance independently
 * @answer console.log(bar.stats.count) prints 2
 * 
 */
{
    function Foo() {
        this.values = [];
    }

    Foo.prototype.stats = {
        count: 0,
        timestamp: null
            // some other statistics
    };

    Foo.prototype.trackStats = function() {
        this.stats.count++;
        this.stats.timestamp = new Date();
    }

    Foo.prototype.someFunction = function() {
        this.trackStats();

        // some other logic
    };

    var bar = new Foo();
    var buz = new Foo();

    bar.someFunction();
    buz.someFunction();

    console.log(bar.stats.count);
}

/**
 * @number 3
 * @level Simple
 * @topic Closures
 * @description What will be printed in console
 * @answer
 *     console.log(operation1(3)) prints 9
 *     console.log(operation2(2.5)) prints 5
 * @additional What exactly happens with factor
 */
{
    function getMultiplicator(factor) {
        return function(val) {
            return factor * val;
        }
    }

    var operation1 = getMultiplicator(3);
    var operation2 = getMultiplicator(2);

    console.log(operation1(3));
    console.log(operation2(2.5));

}


/**
 * @number 4
 * @level Average/Advanced
 * @topic Closures and variable scopes
 * @description What will be printed in console
 * @answer
 *     console.log(operation(2)) prints 0
 *     console.log(operation(3)) prints 1
 * 
 */
{

    var count = 0;
    var operation = (function(count) {
        return function(value) {
            console.log(count);
            count++;
            // some logic here
        }

    })(count);

    console.log(operation(2));
    console.log(operation(3))

}




/**
 * @number 5
 * @level Simple
 * @topic Closures/Execution context
 * @description What will be printed in console
 * @answer
 *     5 5 5 5 5
 * @additional 
 *     How to change this code to make it print numbers in order.
 *     A: call set timeout in another cloure, or call 'bind'
 *     
 * 
 */
{
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 0);
    }
}

// TODO: Advanced-level question about closures

/**
 * @number 6.
 * @level Simple
 * @topic Execution context
 * @description What will be printed in console
 * @answer
 *     7
 * @additional 
 *         Join ++ and return statements e.g. "return ++foo";
 * 
 *         Change func1 definition to:
 * 
 *             function func1() {
 *                  ++foo;
 *                  var foo = 0;
 *                  return foo;
 *             }
 * 
 *         Level Advanced
 *         Answer 6, explanation: hoisting
 * 
 */
{
    var foo = 5;

    function func1() {
        var foo = 0;
        ++foo;
        return foo;
    }

    function func2() {
        ++foo;
        return foo;
    }

    console.log(func2() + func1());
}


/**
 * @number 7
 * @level Average
 * @topic Execution context / this keyword
 * @description What will be printed in console
 * @answer 0
 * @additional
 *     How to change the code so it calculates count correctly.
 */
{
    var count = 5;

    function Foo() {
        this.count = 0;
        this.addCount = function() {
            count++;
        };
    }

    var bar = new Foo();
    bar.addCount();

    console.log(bar.count);
}

/**
 * @number 8
 * @level Simple
 * @topic Tricks / Execution context / call built-in function
 * @description Explain what happens in this code block
 * @additional
 *     Ask about apply and bind function.
 * @answer
 *     Anonymous function is called on {} context with no parameters.
 */
{
    (function() {}).call({})
}


/**
 * @number 9
 * @level Average
 * @topic Tricks / comma operator
 * @description What will be printed in console
 * @answer 2
 *         Operator comma returns its last operand so the code equals to [1,2,3][1]
 */
{
    console.log([1, 2, 3][3, 2, 1])
}

/**
 * @number 10
 * @level Simple / Average
 * @topic Variables scopes, emulating private members
 * @description How to change the code so the count can be changed only inside Foo class
 * @answer
 *     'this.count = 0' changed to var 'count = 0' and all its using accordingly.
 */
{

    function Foo() {
        this.count = 0;
        this.someMethod = function() {
            this.count++;
        };
        this.getCount = function() {
            return this.count;
        }
    }

    var bar = new Foo();
    bar.someMethod();
    //...
    // bar.count = 100; should not be allowed
}

/**
 * @number 11
 * @level Simple
 * @topic Prototypes
 * @description Change the code so every instance of Foo has addCount function
 * @answer
 *     Correct but bad way add something like this.addCount = addCount to the constructor
 *     Good answer: Foo.prototype.addCount = function(){/* *\/}
 */

{
    var count = 0

    function addCount() {
        count++;
    }

    function Foo() {}

    var bar = new Foo();
    var buz = new Foo();

    //bar.addCount(); should be allowed
    //buz.addCount(); should be allowed
}


/**
 * @number 12
 * @level Simple / Average
 * @topic Variable scopes
 * @description What will be printed in console.
 * @answer 5 4 3 2 1 0 0
 * @additional
 *     What will be the output if foo returns i instead of bar
 *     Answer: -1
 */

{
    function foo() {
        
        for (var i = 5; i >= 0; i--) {
            var bar = i;
            console.log(i);
        };
        return bar;
    }

    console.log(foo());
}


/**
 * @number 13
 * @level Average
 * @topic call() function
 * @description What will be printed in console
 * @answer
 *     8
 */

{
    var count = 0;
    function add(value) {
        return this.count + value;
    }
    var bar = {
        count: 5
    };


    console.log(add.call(bar, 3));
}


/**
 * @number 14
 * @level Simple
 * @topic Equality operator
 * @description What will be printed in console
 * @answer
 *     'equal'
 */

{
    var foo;
    var bar = null;
    if(foo == bar) {
        console.info('equal');
    } else {
        console.info('not equal');
    }
}


/**
 * @number 15
 * @level Average
 * @topic Equality operator. Comparing objects
 * @description What will be printed in console
 * @answer
 *     'not equal'
 *     'not equal'
 */

{
    var foo = {
        count: 5
    };
    var bar = {
        count: 5
    };

    if(foo == bar) {
        console.info('equal');
    } else {
        console.info('not equal');
    }

    if(foo === bar) {
        console.info('equal');
    } else {
        console.info('not equal');
    }
}


/**
 * @number 16
 * @level Average / Advanced
 * @topic Array length
 * @description What will be printed in console.
 * @answer
 *     2
 *     6
 */

{
    var foo = [];
    foo.push(1);
    foo.push(2);

    console.log(foo.length);

    foo[5] = 6;

    console.log(foo.length);
}



/**
 * @propositions:
 
 *      Function hoisting
 *
 *     Add your proposition here.
 *
 *  
 *
 * 
 */
