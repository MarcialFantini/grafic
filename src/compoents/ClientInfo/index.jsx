import React from 'react'
import { ContainerCommon, TextP, TitleH1 } from '../style-commond'
import { BtnAnalytics, ContainerClient, Icon, IconClient } from './style'

import caraFeliz from './cara-feliz.png'

export const ClientInfo = () => {
    return (
        <ContainerCommon>
            <ContainerClient>
                <IconClient>
                    <Icon
                        src={caraFeliz}
                    />

                </IconClient>
                <TextP>
                    Welcome back
                </TextP>
                <TitleH1>
                    Jonathan W.
                </TitleH1>
                <BtnAnalytics>
                    Ver Analytics
                </BtnAnalytics>
            </ContainerClient>
        </ContainerCommon>
    )
}
