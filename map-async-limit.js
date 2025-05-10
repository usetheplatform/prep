/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 * @param {number} size
 *
 * @return {Promise}
 */
export default async function mapAsyncLimit(
  iterable,
  callbackFn,
  size = Number.POSITIVE_INFINITY,
) {
  const result = new Array(iterable.length);
  let index = 0;

  async function worker() {
    while (index < iterable.length) {
      const currentIndex = index++;

      try {
        result[currentIndex] = await callbackFn(iterable[currentIndex]);
      } catch (error) {
        throw error;
      }
    }
  }

  const workers = new Array(Math.min(size, iterable.length))
    .fill(0)
    .map(() => worker());

  await Promise.all(workers);

  return result;
}
