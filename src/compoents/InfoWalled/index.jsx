import React from 'react'
import { ContainerCommon, FlexColumn, FlexRow, IconMin } from '../style-commond'
import { BtnPremiumPlan, ContainerUpgrade, Li, TextWallet, TitleWallet, Ul } from './styled'

export const InfoWalled = () => {
    return (
        <ContainerCommon>
            <FlexColumn>
                <FlexRow>
                    <IconMin></IconMin>
                    <FlexColumn>
                        <TitleWallet>
                            Content wallet
                        </TitleWallet>
                        <TextWallet>
                            by Orely Studio
                        </TextWallet>
                    </FlexColumn>
                </FlexRow>

                <Ul>
                    <Li>
                        My Wallet
                    </Li>
                    <Li>
                        Inbox
                    </Li>
                    <Li>
                        Dispute Progress
                    </Li>
                    <Li>
                        Account Settings
                    </Li>
                    <Li>
                        Help & Support
                    </Li>
                </Ul>

                <ContainerUpgrade>
                    <TitleWallet color='white'>
                        Upgrade Your Plan
                    </TitleWallet>
                    <BtnPremiumPlan>
                        Premium Plan
                    </BtnPremiumPlan>
                </ContainerUpgrade>
            </FlexColumn>
        </ContainerCommon>
    )
}
