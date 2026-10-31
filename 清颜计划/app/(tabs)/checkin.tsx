import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card, CheckRow, palette, ProgressBar, SectionTitle } from "@/components/health-ui";

const items = [
  ["water-drop", "温和清洁", "早晚各一次，温水，不用力搓洗"],
  ["spa", "保湿", "洗脸后轻薄涂抹，不追求刺痛感"],
  ["wb-sunny", "防晒", "户外时优先帽子、遮阳和不致痘防晒"],
  ["directions-run", "运动", "今天累计 20–30 分钟，出汗后及时冲洗"],
  ["bedtime", "睡眠", "尽量固定入睡时间，目标 8–10 小时"],
  ["restaurant", "饮食", "少含糖饮料和高糖零食，正常吃饭不节食"],
] as const;

export default function CheckinScreen(){
  const [done,setDone]=useState<Record<string,boolean>>({"温和清洁":true,"保湿":true});
  const count=useMemo(()=>Object.values(done).filter(Boolean).length,[done]);
  return <ScreenContainer style={s.screen}><ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
    <Text style={s.eyebrow}>DAILY CHECK-IN</Text><Text style={s.title}>今天做六件小事</Text><Text style={s.sub}>不用一次做到完美，完成一项就是进度。</Text>
    <Card style={s.summary}><View><Text style={s.summaryLabel}>今日进度</Text><Text style={s.count}>{count}<Text style={s.total}> / 6</Text></Text></View><View style={{flex:1,marginLeft:18}}><ProgressBar value={count/6*100}/><Text style={s.summaryHint}>{count===6?'今天全部完成，做得很稳。':'从下一项开始就好。'}</Text></View></Card>
    <SectionTitle title="基础护理"/><Card>{items.slice(0,3).map(([icon,title,sub])=><CheckRow key={title} icon={icon} title={title} subtitle={sub} checked={!!done[title]} onPress={()=>setDone(v=>({...v,[title]:!v[title]}))}/>)}</Card>
    <SectionTitle title="生活节律"/><Card>{items.slice(3).map(([icon,title,sub])=><CheckRow key={title} icon={icon} title={title} subtitle={sub} checked={!!done[title]} onPress={()=>setDone(v=>({...v,[title]:!v[title]}))}/>)}</Card>
    <View style={s.tip}><Text style={s.tipTitle}>关于饮食，先记住三点</Text><Text style={s.tipText}>不需要“戒掉所有食物”。优先减少含糖饮料和高糖零食；保证主食、蛋白质、蔬菜和水果；如果怀疑某种食物相关，连续记录后带给医生看。</Text></View>
    <Text style={s.disclaimer}>打卡是生活管理，不是对病情严重程度的评分。</Text>
  </ScrollView></ScreenContainer>
}
const s=StyleSheet.create({screen:{backgroundColor:palette.bg},content:{padding:20,paddingBottom:32,gap:14},eyebrow:{color:palette.mint,fontSize:11,fontWeight:'900',letterSpacing:1.2},title:{color:palette.ink,fontSize:28,fontWeight:'900',marginTop:3},sub:{color:palette.muted,fontSize:13,marginTop:-7},summary:{flexDirection:'row',alignItems:'center',padding:17},summaryLabel:{color:palette.muted,fontSize:12,fontWeight:'700'},count:{color:palette.ink,fontSize:33,fontWeight:'900',marginTop:2},total:{fontSize:16,color:palette.muted},summaryHint:{color:palette.muted,fontSize:11,marginTop:8},tip:{backgroundColor:'#FFF7DF',borderRadius:18,padding:16,borderWidth:1,borderColor:'#F7E6B6'},tipTitle:{color:'#8B681D',fontSize:14,fontWeight:'800'},tipText:{color:'#806B3A',fontSize:12,lineHeight:18,marginTop:6},disclaimer:{color:'#8DA09F',fontSize:10,textAlign:'center',paddingTop:2}});
