/**
 * Created by jcode on 2015-09-02.
 */
function run(genfn) {
    return new Promise(function(resolve, reject) {
        var gen = genfn();
        onFulfilled();

        function onFulfilled(res) {
            try {
                next(gen.next(res));
            } catch (e) {
                return reject(e);
            }
        }

        function next(result) {
            if (result.done) {
                return resolve(result.value);
            }

            return result.value.then(onFulfilled, reject);
        }
    });
}

module.exports = run;