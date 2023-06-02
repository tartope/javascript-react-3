import React from 'react'
import { useRecoilState } from 'recoil'
import { orderedFoods } from './Util/Atoms'
import { foodPrices } from './Util/App.Config'
import { capitalize } from './Util/Strings'
import { FoodTableRow } from './FoodTableRow'
import './FoodsTable.scss'

export const FoodsTable = () => {
    const [theOrderedFoods, setOrderedFoods] = useRecoilState(orderedFoods);

    const onHandleClick = (item, value)=>{
        // make a copy of ordered food object
        const foods = {...theOrderedFoods};
        // prevents you from going to a negative number
        if(value === -1 && foods[item] === 0){
            return;
        }
        foods[item] += value;
        setOrderedFoods(foods);
    }
  return (
    <div className='FoodsTable'>
        <table className='FoodTable_Table'>
            <tbody>
                {
                    foodPrices.map(food =>{
                        return <FoodTableRow
                            key={food.id}
                            item={food.type}
                            displayName={ capitalize(food.type) }
                            theOrderedFoods= { theOrderedFoods }
                            onHandleClick={ (item, value)=> onHandleClick(item, value)}
                        />
                    })
                }
            </tbody>

        </table>

    </div>
  )
}
