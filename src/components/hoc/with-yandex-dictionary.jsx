import React from "react";
import { YandexDictionaryConsumer } from "../yandex-dictionary-context/yandex-dictionary-context";

const withYandexDictionary = () => (Wrapped) => (props) => (
    <YandexDictionaryConsumer>
        {
            (yandexDictionary) => (
                <Wrapped {...props} yandexDictionary={yandexDictionary} />
            )
        }
    </YandexDictionaryConsumer>
);

export default withYandexDictionary;
