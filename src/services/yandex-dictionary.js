export default class YandexDictionary {
    _apiBase = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200125T114251Z.dbc36e621ad07e61.99f0c96a39e230a60f1432946c4c676b20aea741&lang=en-ru&text=`;

    getTranslate = async (word) => (
        await fetch(`${this._apiBase}${word}`)
    );
}
