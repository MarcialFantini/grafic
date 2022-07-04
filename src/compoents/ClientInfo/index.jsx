import React from 'react'
import { ContainerCommon, FlexColumn, FlexRow, TextP, TitleH1 } from '../style-commond'
import { BtnAnalytics, BtnLearMore, ContainerClient, ContainerWinched, ContainerWinched2, Icon, IconClient, IconMin } from './style'

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

            <ContainerWinched>
                <IconMin
                    src={caraFeliz}
                ></IconMin>
                <div>
                    <TextP>
                        Installment
                    </TextP>
                    <TextP>
                        Samantha William
                    </TextP>
                </div>
                <TextP>
                    $240
                </TextP>

            </ContainerWinched>
            <ContainerWinched2>
                <FlexRow>
                    <IconMin
                        src={caraFeliz}
                    ></IconMin>
                    <FlexColumn>
                        <TextP>
                            Other loans.
                        </TextP>
                        <TextP>
                            Jonathan W.
                        </TextP>
                    </FlexColumn>
                    <TextP>
                        $20
                    </TextP>
                </FlexRow>
                <BtnLearMore>{"Learn More ->"}</BtnLearMore>
            </ContainerWinched2>
        </ContainerCommon>
    )
}
