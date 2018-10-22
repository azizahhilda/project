import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Berita from './Berita'
import Mading from './Mading'
import AboutUs from './AboutUs'
import ReadMore from './ReadMore'
import ReadMading from './ReadMading'
import ViewMore from '././Home'

export default class Main extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Berita/' component={Berita} />
                <Route exact path='/Mading/' component={Mading} />
                <Route exact path='/AboutUs/' component={AboutUs}/>
                <Route exact path='/ReadMore/:id' component={ReadMore}/>
                <Route exact path='/ReadMading/:id' component={ReadMading}/>
                <Route exact path='/ViewMore/' component={ViewMore}/>
            </Switch>

        )
    }
}