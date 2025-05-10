function rejectHandler(reason) {
  return {
    status: "rejected",
    reason: reason,
  };
}

function resolveHandler(value) {
  return {
    status: "fulfilled",
    value: value,
  };
}

function allSettled(promises) {
  const convertedPromises = promises.map((promise) =>
    Promise.resolve(promise).then(
      (value) => resolveHandler(value),
      (reason) => rejectHandler(reason),
    ),
  );
}
function all(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return resolve([]);
    }

    const results = new Array(promises.length);
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

function race(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return;
    }

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  });
}

function any(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      reject(new AggregateError([], "All promises were rejected"));

      return;
    }

    let rejectedCount = 0;
    const errors = new Array(promises.length);

    promises.foreach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          errors[index] = error;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}
