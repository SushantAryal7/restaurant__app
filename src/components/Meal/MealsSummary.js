import React from 'react'
import classes from './MealsSummary.module.css'

function MealsSummary() {
  return (
    <section className={classes.summary}>
        <h2> Delicious Food, Delivered To You</h2>
        <p> Choose Your Favorite food from our broad selection of available meals 
            and enjoy a delicious lunch and dinner  at home </p>
        <p> All our food are cooked with high-quality ingredients, just in time
            and of course by experienced chefs!
        </p>
    </section>
  )
}

export default MealsSummary