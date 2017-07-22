/**
 * Created by admin on 2017/7/21.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class MyImage extends Component{
    constructor(props){
        super(props);
        this.state={
            imgs:this.props.imgs,
            count:0
        }
    }
    goNext(){
        var count=this.state.count;
        console.log(count +"/////"+this.props.imgs.length);
        count ++;
        if(count<this.props.imgs.length){
            this.setState({
               count:count
            });
        }else{
            this.setState({
                count:0
            });
        }
    }
    goPreview(){
        var count=this.state.count;
        console.log(count);
        count --;
        if(count>=0){
            this.setState({
                count:count
            });
        }else{
            this.setState({
                count:2
            });
        }
    }
    render(){
        return (
            <View style={styles.flex}>
                <View style={styles.image}>
                    <Image
                        style={styles.img}
                        source={{uri:this.state.imgs[this.state.count]}}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={()=>this.goPreview()}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.goNext()}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    flex:{
        flex:1,
        alignItems:'center'
    },
    image:{
        borderWidth:1,
        width:300,
        height:200,
        borderRadius:5,
        borderColor:'#CCC',
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        height:150,
        width:200,
    },
    btns:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    btn:{
        width:60,
        height:30,
        borderColor:'#0089FF',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:20,
    },
});
