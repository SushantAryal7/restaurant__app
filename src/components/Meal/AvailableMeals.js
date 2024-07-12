import React from 'react'
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [{
    id:'m1',
    name:'Sushi',
    description:'finest fish',
    price:22.99,
},
{
    id:'m2',
    name:'Sushi',
    description:'finest fish',
    price:22.99,
},
{
    id:'m3',
    name:'Sushi',
    description:'finest fish',
    price:22.99,
},
{
    id:'m4',
    name:'Sushi',
    description:'finest fish',
    price:22.99,
},
]

function AvailableMeals() {
const mealsList = DUMMY_MEALS.map((meal)=><MealItem
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
/>)

  return (
    <section className={classes.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
        
    </section>
  )
}

export default AvailableMeals;