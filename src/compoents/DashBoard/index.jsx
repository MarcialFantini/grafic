import React from 'react'
import { ClientInfo } from '../ClientInfo'
import { CreditAndDisputes } from '../CreditAndDisputes'
import { InfoWalled } from '../InfoWalled'

import { ContainerGrid } from './styled'

export const DashBoard = () => {
    return (
        <ContainerGrid>
            {/* <ClientInfo />
            <InfoWalled /> */}
            <CreditAndDisputes />
        </ContainerGrid>
    )
}
