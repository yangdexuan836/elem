<template>
  <div class="Listtop">
      <div class="top" :style="'background:url('+makeImagePath(imgsrc)"><i class="iconfont" v-html="iconfont['fanhui']"></i></a></div>
      <div class="shop_header">
          <img :src = "makeImageUrl(imgsrc)">
          <div class="shop_header_1h">
            <h2>
               <span v-if="brand" class="pinpai">品牌</span>
              <span v-html="named" class="name"></span><i class="iconfont" v-html="iconfont['right']"></i>
            </h2>
            <div class="shop_header_1s">
              <span v-html="rating"></span>
              <span >月售{{recent_order_num}}单</span>
              <span>约{{time}}分钟</span>
              <span>{{distance}}km</span>
            </div>
            <p v-html="promotion_info"></p>
          </div>
          <div class="shop_header_2G">
            <span :style="'background:'+getColor(icon_color)" v-html="icon_name"></span>
            <span v-html="tips"></span>
            <span>{{activity.length}}个优惠</span>

          </div>
          
      </div>
      <div class="activity">
          <div class="activity_sheet-a">
            <i class="iconfont" v-html="iconfont['close']"></i>
            <div class="activity_sheet-b">
                <h2>优惠活动</h2>
                <div class="activity_1p" v-for="item in activity" >
                    <span :style="'background:'+getColor(item.icon_color)">{{item.icon_name}}</span>
                    <span >{{item.tips}}</span>
                </div>
            </div>
          </div>
      </div>
    	 
  </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
export default {
  name: 'Listtop',
  data () {
    return {
    	iconfont:{
    		fanhui:"&#xe682;",
        right:"&#xe614;",
        close:"&#xe60e;",
        cart:"&#xe63b;",
        clear:"&#xe656;"

      },
      activity:[],
      imgsrc:"",
      named:"",
      rating:"",
      time:"",
      recent_order_num:"",
      distance:"",
      promotion_info:"",
      icon_name:"",
      tips:"",
      icon_color:"",
      brand:"",
      isSetting : false
    }
  },
  mounted(){
      var id = this.$route.params.slid;
     axios.get('/restapi/shopping/restaurant/'+id+'?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=39.90469&longitude=116.407173')
    .then((res) =>{
      console.log(res.data);
      // console.log(res.data.rating)
      this.imgsrc=res.data.image_path;

      this.named=res.data.name;
      this.rating=res.data.rating;
      this.recent_order_num=res.data.recent_order_num;
      this.text=res.data.delivery_mode.text;
      this.time=res.data.order_lead_time;
      this.distance=(res.data.distance/1000).toFixed(1);
      this.promotion_info=res.data.promotion_info;
      this.icon_name=res.data.activities[0].icon_name
      this.tips=res.data.activities[0].tips
      this.brand=res.data.is_premium
      this.activity=res.data.activities
      this.icon_color=res.data.activities['0'].icon_color

    })
    .catch((err) =>{
      console.log(err);
    });
    $(".shop_header_2G").click(function(){
      $(".activity").css("display","block");
      $(".activity_sheet-a").animate({bottom:0}, 1000)
    })
    $(".activity_sheet-a i").click(function(){
      $(this).parent().parent().css("display","none");
      $(".activity_sheet-a").animate({bottom:"-280px"}, 500)
    })
  },
  methods:{
      makeImageUrl(imgPath) {
        var part1 = imgPath.substr(0,1);
        var part2 = imgPath.substr(1,2);
        var part3 = imgPath.substr(3);
        var part4 = part3.substr(29);
        return `//fuss10.elemecdn.com/${part1}/${part2}/${part3}.${part4}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`;
      },
       makeImagePath(imgPath){
          var part1 = imgPath.substr(0,1);
          var part2 = imgPath.substr(1,2);
          var part3 = imgPath.substr(3);
          var part4 = part3.substr(29);
          
          if(imgPath == ""){
            return;
          }else{
            // console.log(`//fuss10.elemecdn.com/${part1}/${part2}/${part3}.${part4}?imageMogr/format/webp/thumbnail/!40p/blur/50x40/) no-repeat;background-size:cover`)
            return `//fuss10.elemecdn.com/${part1}/${part2}/${part3}.${part4}?imageMogr/format/webp/thumbnail/!40p/blur/50x40/) no-repeat;background-size:cover`
          }
        },
        getColor(color){
              return "#"+color
        },
      }
  }



</script>
<style scoped>
 *{
    box-sizing: border-box;
  }

  .top{
    display: flex;
    width:100%;
    height: 16vw;
    padding:15px 10px 0 10px ;
  }
  .top i{
    font-size: 0.2rem;
    color: #fff;
  }
  .shop_header{
    position: relative;
    display: flex;
    width:100%;
    height:2rem;
    background:#fff;
    display: flex;
    padding: 8vw 4vw 0;
    flex-direction: column;
    text-align: center;
  }
  .shop_header>img{
    width:17.33vw;
    height: 17.33vw;
    position: absolute;
    left:40%;
    top:-32px;
  }

  .shop_header_1h{
    width:100%;
    height: 0.75rem;
    background:#fff;
  }

  .shop_header_1h>h2{
    width:100%;
    height:0.5rem;
    line-height: 0.5rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shop_header_1h>h2  .pinpai{
      display: inline-block;
      height: 0.2rem;
      line-height: 0.2rem;
      margin-right: 0.05rem;
      padding: 0 0.05rem;
      color:#6a3709;
      font-size: 0.08rem;
      background:yellow;
  }
  .shop_header_1h>h2  .name{
    display: inline-block;
    max-width:2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:0.2rem;
    font-weight: 700;
    white-space:nowrap;
  }
  .shop_header_1h>h2>i{
    line-height: 0.3rem;
    font-size: 0.2rem;
    font-weight: 700;
    color:#000;
  }

  .shop_header_1s{
    font-size: 0.05rem;
    color:#000;
  }
  .shop_header_1s span{
    font-size: 0.1rem;
    color:#000;
    padding: 0 0.1rem;
    line-height: 0.2rem;    
  }
  .shop_header_1h>p{
    width:70%;
    color:#999;
    margin-left:15%; 
    text-align: center;
    padding:0 0.2rem;
    white-space:nowrap;
    text-overflow: ellipsis;
    font-size:0.1rem; 
    overflow: hidden;
  }

  .shop_header_2G{
    width:100%;
    display: flex;
    color:#000;
    font-size: 0.05rem;
    margin-top: 0.15rem;
    border:1px solid #ccc;
  }
  .shop_header_2G span:nth-of-type(1){
    margin-left:0.05rem;
    padding:3px;
    line-height: 0.15rem;
/*    background:#70bc46;*/
  }
  .shop_header_2G span:nth-of-type(2){
    line-height:0.2rem;
    min-width:2.5rem;  
    margin:0 0.02rem;
  }
  .shop_header_2G span:nth-of-type(3){
    line-height:0.2rem;
    color:#666; 
    font-weight: 700
  }







  .activity{
    width:100%;
    height: 100%;
    position: fixed;
    display: none;
    top:0;
    left: 0;
    background:rgba(127,127,127,0.7);
    z-index: 99;
  }
  .activity_sheet-a{
    display: flex;
    padding:20px;
    width:100%;
    height: 2.8rem;
    background:#f5f5f5;
    position: absolute;
    left: 0;
  
    bottom: -280px;
    right: 0;
    z-index: 100;
    transition:transformm 0.2;
    box-shadow: 0 -1px 5px 0 rgba(0,0,0,0.4)
  }
  .activity_sheet-a>i{
    position: absolute;
    right: 10px;
    top:10px;
  }
  .activity_sheet-b{
    width:100%;
    height: 100%;
/*    background:pink;*/
    
  }
  .activity_sheet-b>h2{
    width:100%;
    text-align: center;
    line-height: 0.5rem;
    font-size:0.18rem;
    font-weight: 700;
  }

  .activity_1p{
    margin:0.05rem 0 ;
  }
  .activity_1p>span:nth-of-type(1){
    padding:3px;
    background:#70bc46;
    font-size: 0.15rem;
    width:0.2rem;
    color:#fff;
   /* height: 0.2rem;*/
  }
  .activity_1p>span:nth-of-type(2){
    /*line-height:0.2rem;*/
    font-size:0.15rem; 
    /*margin:0 0.05rem;*/
  }

</style>