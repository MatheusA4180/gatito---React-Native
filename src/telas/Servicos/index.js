import React from "react";

import { FlatList } from 'react-native';

import Item from "./Item";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Descrição 1"
    },
    {
        id: 2,
        nome: "Vacina",
        preco: 99.9,
        descricao: "Descrição 2"
    },
    {
        id: 3,
        nome: "Tosa",
        preco: 109.9,
        descricao: "Descrição 3"
    }
];

export default function Servicos() {
    return <>
        <FlatList
            data={servicos}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />
    </>
}