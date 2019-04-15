const scrapeIt = require("scrape-it");
const mainURL = "https://thecodinglove.com";

function getRandomMemeLink() {
    return new Promise((resolve, reject) => {
        scrapeIt(mainURL, {
            title: {
                selector: "a.nav-link",
                attr: "href"
            }
        }).then(({
            data,
            response
        }) => {
            if (response.statusCode === 200 && data) {
                resolve(data.title);
            } else {
                reject(response.statusCode);
            }
        })
    });
};

module.exports = {
    getRandomMeme: () => {
        return new Promise((resolve, reject) => {
            getRandomMemeLink().then(link => {
                scrapeIt(link, {
                    title: "h1.blog-post-title",
                    gif: {
                        selector: "div.blog-post-content > p > video > object",
                        attr: "data"
                    }
                }).then(({
                    data,
                    response
                }) => {
                    if (response.statusCode === 200 && data) {
                        resolve(data);
                    } else {
                        reject(new Error(`Failed to retrieve the meme due to resposnse error ${response.statusCode}, Please try again later.`))
                    }
                });
            }).catch(console.error);
        });
    },

    getTrendMemes: () => {
        return new Promise((resolve, reject) => {
            scrapeIt(mainURL, {
                memes: {
                    listItem: "div.blog-post",
                    data: {
                        title: "h1.blog-post-title",
                        gif: {
                            selector: "div.blog-post-content > p > video > object",
                            attr: "data"
                        }
                    }
                }
            }).then(({
                data,
                response
            }) => {
                if (response.statusCode === 200 && data) {
                    resolve(data);
                } else {
                    reject(new Error(`Failed to retrieve the memes due to resposnse error ${response.statusCode}, Please try again later.`))
                }
            })
        });
    },

    searchMeme: (term) => {
        return new Promise((resolve, reject) => {
            scrapeIt(mainURL + `/?s=${term}`, {
                results: {
                    listItem: "div.blog-post",
                    data: {
                        title: "h1.blog-post-title",
                        gif: {
                            selector: "div.blog-post-content > p > video > object",
                            attr: "data"
                        }
                    }
                }
            }).then(({
                data,
                response
            }) => {
                if (response.statusCode === 200 && data) {
                    resolve(data);
                } else {
                    reject(new Error(`Failed to retrieve the memes due to resposnse error ${response.statusCode}, Please try again later.`))
                }
            })
        });
    }
};
