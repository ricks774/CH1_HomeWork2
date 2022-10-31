import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function App() {

  // 換頁設定
  const [mainPage, set_mainPage] = useState('flex')
  const [savePage, set_savePage] = useState('none')
  const [pointPage, set_pointPage] = useState('none')
  // 切換到主畫面
  const getMain=()=>{
    set_mainPage('flex')
    set_savePage('none')
    set_pointPage('none')
  }
  // 切換到儲存頁面
  const getPoint=()=>{
    set_mainPage('none')
    set_savePage('flex')
    set_pointPage('none')
  }
  // 切換到兌換頁面
  const getItem=()=>{
    set_mainPage('none')
    set_savePage('none')
    set_pointPage('flex')
  }

  // 點數儲存
  const [titlePoint, set_titlePoint] = useState(0)

  // 儲值點數
  const savePoint = (point) =>{set_titlePoint(titlePoint + point)
  }
  const pointClear = () => {set_titlePoint(0)}

  // 花費點數
  const usePoint = () => {
    if (titlePoint > 0){
      set_titlePoint(titlePoint - 1000)
    }
  }


  return (
    <View style={styles.container}>
      {/* ========== 主畫面 ========== */}
      <View style={styles.container} display={mainPage}>
        <Text style={{alignSelf:'flex-end', marginRight:30, color:'#f4f4f4'}}>目前點數：{titlePoint}</Text>
        <View style={{flex:0.8}}>
          <View>
            <Image
              source={require('./src/img/pinata_halloween_bat_girl.png')}
              style={{width:300, height:300, marginTop:60}}
            />
          </View>
          <View>
            <Text style={{
              color:'#f4f4f4',
              fontSize:20,
              textAlign:'center'
              }}>今天是萬聖節快{'\n'}來添購一些道具享受節慶吧~~</Text>
          </View>
        </View>
      </View>

      {/* ========== 儲值頁面 ========== */}
      <View style={styles.container} display={savePage}>
        <Text style={{color:'#f4f4f4', fontSize:20, marginBottom:30}}>目前儲值點數：{titlePoint}</Text>
        <TouchableOpacity style={styles.save_button} onPress={()=>{savePoint(100)}}>
          <Text style={styles.base_btnText}>儲值100</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.save_button} onPress={()=>{savePoint(1000)}}>
          <Text style={styles.base_btnText}>儲值1,000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.save_button} onPress={()=>{savePoint(10000)}}>
          <Text style={styles.base_btnText}>儲值10,000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.save_button} onPress={()=>{pointClear()}}>
          <Text style={styles.base_btnText}>全部送給店家</Text>
        </TouchableOpacity>
      </View>

      {/* ========== 兌換頁面 ========== */}
      <View style={styles.container} display={pointPage}>
        <Text style={{alignSelf:'flex-end', marginRight:30, marginBottom:30, color:'#f4f4f4'}}>目前點數：{titlePoint}</Text>
        {/* ========== Banner ========== */}
        <View style={styles.point_banner}>
          <Image
            source={require('./src/img/fantasy_dracula_woman.png')}
            style={{width:180, height:190,resizeMode:'center'}}/>
          <View style={{alignItems:'center'}}>
            <Text style={{color:'#f4f4f4', fontSize:20, fontWeight:'bold', marginBottom:10}}><Text style={{color:'#EE8528'}}>萬聖節</Text>活動開跑中</Text>
            <Text style={{color:'#f4f4f4', fontSize:14, textAlign:'center'}}>10/31當天限定兌換商品{'\n'}全品項只要1000點{'\n'}數量有限，換完截止!</Text>
          </View>
        </View>
        {/* ========== 卡片設定 ========== */}
        <View style={{flexDirection:'row-reverse'}}>
          {/* ========== 單張卡片設定 ========== */}
          <View style={styles.point_card}>
            <Image
              source={require('./src/img/halloween_mark_obake.png')}
              style={{width:70, height:70,resizeMode:'center'}}/>
              <View style={{alignItems:'center', marginLeft:10}}>
                <Text style={{color:'#282828', fontSize:16, fontWeight:'bold', marginBottom:6}}>幽靈抱枕</Text>
                <TouchableOpacity style={styles.point_button} onPress={()=>{usePoint()}}>
                  <Text style={{color:'#f4f4f4'}}>兌換</Text>
                </TouchableOpacity>
              </View>
          </View>
          {/* ========== 單張卡片設定 ========== */}
          <View style={styles.point_card}>
            <Image
              source={require('./src/img/halloween_mark_candy.png')}
              style={{width:70, height:70,resizeMode:'center'}}/>
              <View style={{alignItems:'center', marginLeft:10}}>
                <Text style={{color:'#282828', fontSize:16, fontWeight:'bold', marginBottom:6}}>糖果抱枕</Text>
                <TouchableOpacity style={styles.point_button} onPress={()=>{usePoint()}}>
                  <Text style={{color:'#f4f4f4'}}>兌換</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
        <View style={{flexDirection:'row-reverse'}}>
          <View style={styles.point_card}>
            <Image
              source={require('./src/img/halloween_mark_cat.png')}
              style={{width:70, height:70,resizeMode:'center'}}/>
              <View style={{alignItems:'center', marginLeft:10}}>
                <Text style={{color:'#282828', fontSize:16, fontWeight:'bold', marginBottom:6}}>黑貓抱枕</Text>
                <TouchableOpacity style={styles.point_button} onPress={()=>{usePoint()}}>
                  <Text style={{color:'#f4f4f4'}}>兌換</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.point_card}>
            <Image
              source={require('./src/img/halloween_mark_gaikotsu.png')}
              style={{width:70, height:70,resizeMode:'center'}}/>
              <View style={{alignItems:'center', marginLeft:10}}>
                <Text style={{color:'#282828', fontSize:16, fontWeight:'bold', marginBottom:6}}>骷髏抱枕</Text>
                <TouchableOpacity style={styles.point_button} onPress={()=>{usePoint()}}>
                  <Text style={{color:'#f4f4f4'}}>兌換</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>



      {/* ========== 底部切換按鈕 ==========*/}
      <View style={{flexDirection:'row', alignItems:'flex-end', marginBottom:40, alignItems:'center'}}>
          <View>
            <TouchableHighlight style={styles.base_button} onPress={()=>{getPoint()}}>
              <Text style={styles.base_btnText}>儲值點數</Text>
            </TouchableHighlight>
          </View>
          <View style={{marginHorizontal:20}}>
            <TouchableOpacity onPress={()=>{getMain()}}>
              <Image
                source={require('./src/img/home.png')}
                style={{width:46, height:46,resizeMode:'center'}}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.base_button} onPress={()=>{getItem()}}>
              <Text style={styles.base_btnText}>兌換道具</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center',
  },
  base_button:{
    paddingHorizontal:30,
    paddingVertical:10,
    borderRadius: 40,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: "rgba(238, 133, 40, 1.0)",
  },
  save_button:{
    width:240,
    paddingVertical:10,
    borderRadius: 40,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: "rgba(238, 133, 40, 1.0)",
    alignItems:'center',
    marginBottom:20
  },
  base_btnText:{
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 20,
    color: "#F8F8F8"
  },
  point_banner:{
    width: 360,
    height: 220,
    borderRadius: 19,
    borderStyle: 'solid',
    borderWidth: 6,
    borderColor: "rgba(228, 63, 111, 1.0)",
    flexDirection:'row',
    alignItems:'center',
    marginBottom:8
  },
  point_card:{
    paddingHorizontal:12,
    paddingVertical:18,
    borderRadius: 19,
    backgroundColor: "#EE8528",
    borderWidth: 2,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:4,
    marginRight:4,
    marginTop:8,
    marginBottom:8
  },
  point_button:{
    paddingVertical:4,
    paddingHorizontal:20,
    borderRadius: 19,
    backgroundColor: "#282828",
    alignItems:'center'
  }
});
