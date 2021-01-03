import React, { Component } from 'react'
import {Grid} from "@material-ui/core"
import Header from './header'
import Content from './Content'

export default class componentName extends Component {
  render() {
    return (
     <Grid container direction="column">
       <Grid item>
         <Header/>
       </Grid>
       <Grid item container>
         <Grid item xs={0} sm={2}></Grid>
           <Grid item xs={12} sm={8}>
            <Content/>
           </Grid>
          <Grid item xs={0} sm={2}/>
       </Grid>
     </Grid>
    )
  }
}

