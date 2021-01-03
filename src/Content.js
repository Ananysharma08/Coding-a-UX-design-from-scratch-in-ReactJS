import { Grid } from '@material-ui/core';
import React from 'react'
import CoffeeCard from './coffeeCard';
import CoffeeMakerList from './constants'

 const Content =()=> {

    const getcoffeemakerCard = (Coffeemakerobj) =>{
        return (
            <Grid item xs={12} sm={4}>
                <CoffeeCard {...Coffeemakerobj} />
            </Grid>
        )
    }

    return (
        <Grid container spacing={4}>
              {CoffeeMakerList.map(Coffeemakerobj =>
                  getcoffeemakerCard(Coffeemakerobj) 
              )}
        </Grid>

       
    )
}

export default Content;