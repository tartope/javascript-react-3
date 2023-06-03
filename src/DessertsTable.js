import React from 'react'
import { useRecoilState } from 'recoil'
import { capitalize } from './Util/Strings'
import { orderedDesserts } from './Util/Atoms'
import { DessertTableRow } from './DessertTableRow'
import { dessertPrices } from './Util/App.Config'
import { getPriceForDessert } from './Util/App.Config'
import './DessertsTable.scss'

export const DessertsTable = () => {
    const [theOrderedDesserts, setOrderedDesserts] = useRecoilState(orderedDesserts)

    const onHandleClick = (item, value) => {
        const desserts = {...theOrderedDesserts}
        if (value === -1 && desserts[item] === 0) {
            return;
        }
        desserts[item] += value
        setOrderedDesserts(desserts)
    }

    return (
        <div className='DessertsTable'>
            <table className='DessertTable_Table'>
                <tbody>
                    {
                        dessertPrices.map(i => {
                            return <DessertTableRow 
                                key={ i.id }
                                item={ i.type }
                                displayName={ capitalize(i.type) }
                                theOrderedDesserts={ theOrderedDesserts } 
                                onHandleClick={ (item, value) => onHandleClick(item, value) }
                                getPrices={getPriceForDessert}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
