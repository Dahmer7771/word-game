export default class WordGameService {
    _apiBase = `https://dahmer7771-posts.herokuapp.com/words`;

    getWords = async () => (
        await fetch(`${this._apiBase}`)
    );

    getRandomWord = async () => (
        await fetch(`${this._apiBase}/word/random`)
    );
}
