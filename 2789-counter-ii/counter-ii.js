/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let input = init;
    let resetValue = init;
    return {
        increment: () => ++input,
        decrement: () => --input,
        reset: () => {
            input = resetValue;
            return input;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */