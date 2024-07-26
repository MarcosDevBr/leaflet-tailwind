import React from "react";
import { Container } from "./style";
import { IMapProps } from "./model";

export default function Map(props: IMapProps) {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}