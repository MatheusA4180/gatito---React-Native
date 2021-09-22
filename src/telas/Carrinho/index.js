import React from "react";

import { FlatList } from 'react-native';

import StatusCarrinho from "../../componentes/StatusCarrinho";

import Item from "./Item";

const carrinho = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Descrição 1",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina",
        preco: 99.9,
        descricao: "Descrição 2",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Tosa",
        preco: 109.9,
        descricao: "Descrição 3",
        quantidade: 1
    }
];

export default function Carrinho() {
    const total = carrinho.reduce((soma, { preco, quantidade }) => soma + (preco * quantidade), 0);

    return <>
        <StatusCarrinho total={total} />
        <FlatList
            data={carrinho}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />
    </>
}