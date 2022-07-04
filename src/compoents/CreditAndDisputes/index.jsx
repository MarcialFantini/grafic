import React from 'react'
import { ContainerCommon, IconMinMin } from '../style-commond'
import { Li, TextMin, Ul } from './styled'

export const CreditAndDisputes = () => {
    return (
        <ContainerCommon>
            <TextMin>
                Today
            </TextMin>
            <Ul>
                <Li>
                    <IconMinMin></IconMinMin>
                    <TextMin>
                        Hunter Mac book
                    </TextMin>
                    <TextMin>
                        00011223000-42
                    </TextMin>
                </Li>
                <Li>
                    <IconMinMin></IconMinMin>
                    <TextMin>
                        Hunter Mac book
                    </TextMin>
                    <TextMin>
                        00011223000-42
                    </TextMin>
                </Li>
                <Li>
                    <IconMinMin></IconMinMin>
                    <TextMin>
                        Hunter Mac book
                    </TextMin>
                    <TextMin>
                        00011223000-42
                    </TextMin>
                </Li>
            </Ul>
        </ContainerCommon>
    )
}
