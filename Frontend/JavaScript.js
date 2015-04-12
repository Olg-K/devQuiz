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
 *  Place all related code inside a code block ({}) so it could be collapsed:
 */







/**
 * @number 1.
 * @level Advanced(?).
 * @topic: Property lookup uses prototype chain, assigning does not.
 * @description : What will be printed in console.
 * @answer: 
 *      console.info(bar.count) prints 1
 *      console.info(buz.count) prints 0
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

    console.info(bar.count);
    console.info(buz.count);
}


/**
 * @number 2.
 * @level Average.
 * @topic Prototype is a shared object.
 * @description What will be printed in console.
 * @additional How to change the code to make 'stats' calculate statistics for each instance independently.
 * @answer console.info(bar.stats.count) prints 2.
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

    console.info(bar.stats.count);
}


/**
 * @propositions:
 *      Closures.
 *      Function hoisting
 *
 *     Add your proposition here.
 *
 *
 *
 * 
 */
