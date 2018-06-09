import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, ActivityIndicator} from 'react-native'
import PropTypes from 'prop-types'
import style from '../assets/style/Style'
import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";
import Container from './Container';


export default class Onearticle extends React.Component{

    static navigationOptions = {
        title:"For you",
    }
    

    constructor(props) {
        super(props);
        this.state = {
            article: this.props.navigation.state.params.article.article,
        }
    }

    render (){
            if (this.state.article === null) {
                return (
                    <ActivityIndicator style={style.centerAll} color={style.red} size="large"/>
                )
            }else{
            return(
                <Container>
                    <ScrollView>
                        <View style={style.mainArticleImg}>
                            <Image style={style.imgR} source={{uri : this.state.article.urlToImage}} />
                            <Text style={style.mainArticleSourceDisplay}>{this.state.article.source}</Text>
                        </View>

                        <View style={style.detailsView}>
                            <Text style={style.detailsTitle}>{this.state.article.title}</Text>
                            <Text style={style.detailsAuthor}>By {this.state.article.author} {this.state.article.publishedAt}</Text>
                        </View>
                        <View style={style.detailsContent}>
                            <Text style={style.detailsParagraphe}>{this.state.article.content}
                            </Text>
                        </View>
                    </ScrollView>
                </Container>

            )
            }
    }
}