/**
 * Created by admin on 2017/7/20.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
export default class ImportantNews extends Component{
    show(title){
      alert(title);
    }
    render(){
        var news = [];
        var a=1;
        for(var i in this.props.news){
            a=a+1;
            var text=(
                <Text
                    // onPress={this.show.bind(this,this.props.news[i])}
                    key ={a}
                    onPress={()=>this.show(this.props.news[i])}
                    numberOfLines={1}
                    style={styles.new_item}
                >
                    {this.props.news[i]}
                    {this.props.name}
                </Text>

            );
            news.push(text);
        }
        return(
            <View style={styles.flex}>
                <Text style={styles.new_title}>今日要闻</Text>
                {news}
            </View>
        );
    }
}
const styles=StyleSheet.create({
    flex:{
        flex:1
    },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        backgroundColor:'#ddd',
        justifyContent:'center'
    },
    list_item_font:{
        fontSize:16
    },
    new_title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#CD1D1C',
        marginLeft:10,
        marginTop:15,
    },
    new_item:{
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:30
    }
});