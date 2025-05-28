/**
 * Load an image.
 *
 * @param {string} url
 *
 * @returns Promise<HTMLImageElement>
 */
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onerror = reject
        image.onload = () => resolve(image)
        image.src = url
    })
}

/**
 * Retry a task
 *
 * @template A
 * @param {() => Promise<A>} task
 * @param {number} tries
 *
 * @returns () => Promise<A>
 */
function retry(task, tries = Infinity) {
    return () => new Promise(async (resolve, reject) => {
        let currentTry = 1

        while (true) {
            try {
                resolve(await task())
            }
            catch(e) {
                if (currentTry >= tries) {
                    reject(e)
                    return
                }
                else {
                    currentTry += 1
                }
            }
        }
    })
}


/**
 * Preload images and return an image cache.
 *
 * Example for using 20 tries:
 * ```typescript
 * const cache = await preloadImages(['url1.png', 'url2.png'], 20)
 * ```
 *
 * Error handling:
 * ```typescript
 * const cache = await preloadImages(['url1.png', 'url2.png'], 20)
 *
 * const hasErrors = Object.keys(cache.errors).length !== 0
 *
 * if (hasErrors) {
 *   // ...
 * }
 * ```
 *
 * @param {string[]} urls
 * @param {number} tries Number of tries, defaulting to infinite
 *
 * @returns {images: Record<string, HTMLImageElement, errors: Record<string, any>}
 */
async function preloadImages(urls, tries = Infinity) {
    const images = {}
    const errors = {}

    for (const url of urls) {
        if (images[url] === undefined) {
            try {
                images[url] = await retry(() => loadImage(url), tries)()
            }
            catch(e) {
                errors[url] = e
            }
        }
    }

    return {images, errors}
}