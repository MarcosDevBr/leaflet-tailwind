import React from "react";
import { Container } from "./style";
import { IConfigProps } from "./model";

export default function Config(props: IConfigProps) {
    return (
        <Container {...props}>
            <h1>Config Screen</h1>
        </Container>
    )
}