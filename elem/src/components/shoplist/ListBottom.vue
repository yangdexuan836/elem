<template>
  <div class="ListBottom">
    <div class="tab">
        <div class="shop_tab">
          <div class="shop_tab_1"><span>点餐</span></div>
          <div class="shop_tab_2"><span>评价</span></div>
          <div class="shop_tab_3"><span>商家</span></div>
        </div>
    </div>
    <div class="mainview">
        <main>
          <div class="meau_v">
            <div class="meau">
              <ul>
                <li v-for="item in list">
                    <i v-if="item.icon_url">
                     <img :src="makeImageUrl(item.icon_url)">
                    </i>
                     <span v-html="item.name"></span>
                </li>
               </ul>
            </div>
          </div>
          
          <section>
               <div class="scroller">
                  <dl v-for="(item,ind) in list">
                    <dt><i>{{item.name}}</i><span  v-if="item.description">{{item.description}}</span></dt>
                    <dd v-for="(food,index) in item.foods">
                        <span>
                          <img :src="makeImageUrl(food.image_path)">
                        </span>
                        <section>
                          <p v-html="food.name"></p>
                          <p><span  v-html="food.tips.slice(4)"></span><span>好评率{{food.satisfy_rate}}%</span></p>
                          <div class="discount" v-if=""><span></span></div>
                          <strong>￥<span v-html="food.specfoods['0'].price"></span></strong>
                          <div class="add">
                            <a href="javascript:;" @click="jian(ind,index)">-</a>
                            <span>0</span>
                            <a href="javascript:;" @click="add(ind,index)">+</a>
                          </div>
                        </section>
                    </dd>
                  </dl>
               </div>  
          </section>
        </main>

         <div class="shop">
          <button>去点必选品</button>
          <footer>
            <div class="masklayer"></div>
            <div class="privilege">
                  <section>
                    <!-- {{listtwo.activities[1].description}} -->
                  </section>
                  <div style="opacity: 0.95">
                        <div class="omit">
                            <div class="pitch">
                                <span>已选商品</span>
                            </div>
                            <a href="javascript:;"><i class="iconfont"v-html="iconfont.clear"></i><span>清空</span></a>
                        </div>
                        <div>
                            <ul>
                               <!-- <li>
                                <span>脆皮手枪腿</span>
                                <span>￥23</span>
                                <span>
                                  <a href="javascript:;">-</a>
                                  <span>0</span>
                                  <a href="javascript:;">+</a>
                                </span>
                              </li>
                              <li>
                                <span>脆皮手枪腿</span>
                                <span>￥23</span>
                                <span>
                                  <a href="javascript:;">-</a>
                                  <span>0</span>
                                  <a href="javascript:;">+</a>
                                </span>
                              </li>
                              <li>
                                <span>脆皮手枪腿</span>
                                <span>￥23</span>
                                <span>
                                  <a href="javascript:;">-</a>
                                  <span>0</span>
                                  <a href="javascript:;">+</a>
                                </span>
                              </li>
                              <li>
                                <span>脆皮手枪腿</span>
                                <span>￥23</span>
                                <span>
                                  <a href="javascript:;">-</a>
                                  <span>0</span>
                                  <a href="javascript:;">+</a>
                                </span>
                              </li> -->
                              <li>
                                <span>脆皮手枪腿</span>
                                <span>￥23</span>
                                <span>
                                  <a href="javascript:;">-</a>
                                  <span>0</span>
                                  <a href="javascript:;">+</a>
                                </span>
                              </li>
                            </ul>
                        </div>
                  </div>
            </div>
            <div class="cart">
                  <span>
                    <span class="iconfont" v-html="iconfont.cart">1</span>
                  </span>
                  <i></i>
                  <div>
                    <p>￥<span>0</span></p>
                    <p>配送费￥{{listtwo.float_delivery_fee}}</p>
                  </div>
                  <a role="button" href="javascript:;"><span>￥<i class="price">{{listtwo.float_minimum_order_amount}}</i>起送</span></a>
            </div>
            <div class="account"><a href="">去结算</a></div>
            <div class="difference"><a href="javascript:;">还差￥<span></span>起送</a></div>
          </footer>
        </div>   
    </div>
     	 
  </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
export default {
  name: 'ListBottom',
  data () {
    return {
    	iconfont:{
    		fanhui:"&#xe682;",
        right:"&#xe614;",
        close:"&#xe60e;",
        cart:"&#xe63b;",
        clear:"&#xe656;"
    	},
      list:[],
      listtwo:{}

    }
  },
  mounted(){
    // console.log(this.$route.params.slid)
    var id = this.$route.params.slid;
    // console.log(id)
     axios.get('/restapi/shopping/v2/menu?restaurant_id='+id+'')
    .then((res) =>{
      this.list=res.data;
      // console.log(res)
    })
    .catch((err) =>{
      console.log(err);
    });
    axios.get('/restapi/shopping/restaurant/'+id+'?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=39.90469&longitude=116.407173')
    .then((res) =>{
        this.listtwo=res.data;
        // console.log(this.listtwo.activities)
        // console.log(this.listtwo);
    }).catch((err) =>{
         // console.log(err);
    });

  },
  updated(){
   
    // 清空购物车
      
    $(".omit a span").click(()=>{
      $(".privilege").animate({"top":"-70px"},200,function(){
         $(".privilege ul li").remove();
         $(".masklayer").css("display","none")
      })
     
    })




    var flag=true;
    $(".cart").click(()=>{
          var height=parseInt($(".privilege").outerHeight())+50;
          console.log(height)
          if(height==148){
              return
          }
          if(flag){
              $(".masklayer").css("display","block");
              $(".privilege").animate({top:"-"+height+"px"}, 500)
              flag=false;
          }else{

              $(".privilege").animate({top:"-70px"},500,function(){
                  $(".masklayer").css("display","none");
                
              })
              flag=true
          }


    })
    
    $(".shop_tab").on("click","div",function(){

       $(this).children("span")
              .css({"border-bottom":"2px solid #2395ff","font-weight":700})
              .end() 
              .siblings()
              .children('span')
              .css({"border":"0","font-weight":100})
    })

    var flagt=true;

    $("main ul").on("click","li",function(){
      if(flagt){
        flagt=false;
      }
      $(this).css({"background":"#fff","color":"#333"})
             .siblings('li')
             .css({"background":"#f8f8f8","color":"#666"})

          
          var t = $("dl").eq( $(this).index() ).offset().top-$(".shop_tab").outerHeight();
          console.log($("dl").eq($(this).index()).offset().top);
          $("html").stop().animate({"scrollTop":t+"px"},1000,function(){
            flagt=true;
          })
    });

    // 滚动事件
    var height=$(".shop_tab").offset().top;
      $(window).scroll(function(){
         if($("html").scrollTop()>height){
            $(".shop_tab").css({
              "position":"fixed",
              "top":"-2px",

              "z-index":"99"
            })
            $("main .meau").css({
              "position":"fixed",
              "left":"0px",
              "top":"40px",
              "width":"25%"
              // "z-index":"1"
            })
          }else{
            $(".shop_tab").css({
              "position":""
            })
            $("main .meau").css({
              "position":"",
              "width":"100%"
            })
          } 

              //获取页面滚走的距离
          if(flagt){
              var sTop = $("html").scrollTop();
              //获取满足某个条件的楼层   该楼层一定是在视口中面积最大的
              var floor = $("dl").filter(function(){
                return Math.abs( $(this).offset().top - sTop ) < $(this).outerHeight();
                //符合条件的楼层 ：   绝对值(该楼层的top-页面滚走距离) <  楼层高度/2
              })
              var index = floor.index();
            
              if( index != -1 ){
            // console.log(index)
                //根据index值设置  楼层号的高亮显示
                $("ul li").eq(index).css({"background":"#fff","color":"#333"})
                                      .siblings()
                                      .css({"background":"#f8f8f8","color":"#666"})
              }
          }
      })
  },
  
  methods:{
      makeImageUrl(imgPath) {
          var part1 = imgPath.substr(0,1);
          var part2 = imgPath.substr(1,2);
          var part3 = imgPath.substr(3);
          var part4 = part3.substr(29);
          // console.log(imgPath);
          // console.log(part1, part2, part3, part4);
          return `//fuss10.elemecdn.com/${part1}/${part2}/${part3}.${part4}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`;
    },
    jian(ind,index){
      var count=$("dl").eq(ind).children("dd").eq(index).find('.add').children('span').html()
      if(count<=0){
        return
      }
       $("dl").eq(ind).children("dd").eq(index).find('.add').children('span').html(--count)
      var single=Number($("dl").eq(ind).children("dd").eq(index).find('strong').children('span').html());
      var oldtotal=Number($(".cart>div span").html())
      var total=oldtotal-single
      $(".cart>div span").html(total)
      if((oldtotal-single)==0){
        $(".cart>span>span").css({"color":"#66666a","background":"#353535"})
        $(".account").css({"display":"none"})
        $(".difference").css("display","none") 
      }

      if(total==0){
            $(".difference").css("display","none")  
            $(".account").css("display","none") 
            return      
      }
      var dc=Number($(".cart>a>span>i").html())
      if(total>dc){
          $(".difference").css("display","none")  
          $(".account").css("display","block")
      }else{
        console.log(total)
        console.log(dc)
        var dd=Math.abs(dc-total);
          $(".difference").find("a").children('span').html(dd).end().end().css("display","block")
      }


    },
    add(ind,index){
      var count=$("dl").eq(ind).children("dd").eq(index).find('.add').children('span').html()
          $("dl").eq(ind).children("dd").eq(index).find('.add').children('span').html(++count)


      var single=Number($("dl").eq(ind).children("dd").eq(index).find('strong').children('span').html());
      var oldtotal=Number($(".cart>div span").html())
      var total=oldtotal+single;
      $(".cart>div span").html(total)
      $(".cart>span>span").css({"color":"#fff","background":"#3190e8"})
        
      var dc=Number($(".cart>a>span>i").html())
      if(total>dc){
          $(".difference").css("display","none")  
          $(".account").css("display","block")
      }else{
        console.log(total)
        console.log(dc)
        var dd=Math.abs(dc-total);
          $(".difference").find("a").children('span').html(dd).end().end().css("display","block")
      }

    }
  }  

}




</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
/*  body{
    display: flex;
    flex-direction: column;
    overflow-y:hidden;
  }*/
  .Listbottom{
    display: flex;
    flex-direction: column;
    flex:1;
    background:#fff;
  }
    .tab{
    width:100%;
    height:10.66vw;
    background:#fff;
    margin:0.5%;
  }
  .shop_tab{
    width:100%;
    height:10.66vw;
    display: flex;
    margin:0.5%;
    background:#fff;
    border-bottom:1px solid #eee; 
    align-content:space-around;
  /*  z-index:3;*/
  }
  .shop_tab .shop_tab_1{
    width:33%;
    height:10.6vw;
    text-align: center;
    font-size: 0.1rem;
    line-height: 10.66vw;
  }
  .shop_tab .shop_tab_2{
    width:33%;
    height:10.6vw;
    text-align: center;
    font-size: 0.1rem;
    line-height: 10.66vw;
  }
  .shop_tab .shop_tab_3{
    width:33%;
    height:10.6vw;
    text-align: center;
    font-size: 0.1rem;
    line-height: 10.66vw;
  }
  .shop_tab span{
    display: inline-block;

    height: 10.66vw;
    font-size: 0.18rem;
    line-height: 10.66vw;

  }
  .shop_tab .shop_tab_1 span{
    font-weight: 700;
    border-bottom:2px solid #2395ff;
  }
  .price{
    font-style: normal;
  }
  .mainview{
    flex: 1;
    width:100%;
    height: 100%;
    display: flex;
    position:relative;

  }
  .mainview main{
    width:100%;
    display: flex;
    justify-content: space-between;
  }
  main>section{
    width:75%;
    height:100%;
    float: right;
    overflow-y: auto;
    /*padding-left: 0.5rem;*/
    position:relative;
    right:0;
   
  }
  main .meau_v{
    width:25%;
    height: 100%;
  }
  main .meau{
    width:100%;
    height: 100%;
    overflow:auto;
    position:relative;
  }
  main ul{
    width:100%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
    top:0;
    
    flex-direction: column;
  }
  main li {
 /*   min-height:0.5rem;*/
    width: 100%;
   /* position: relative;*/
    display: flex;
    padding:  0.15rem 0 0.15rem 0.05rem;
    align-items: center;
    font-size: 0.15rem;
    background:#f8f8f8;
    color:#666;
    border-bottom: 1px solid #e8e8e8;
  }
  main li:nth-of-type(1){
    background:#fff;
    color:#333;
  }
  main li img{
    display: inline-block;
    width:3.46vw;
    height:3.46vw; 
    margin-right: 0.1rem
  }







  .scroller{
    width:100%;
 /*   overflow: auto;*/
  }
  .scroller dl{
    width:100%;
  }
  .scroller dl dt{
    width:100%;
    display: flex;
    margin-left: 0.2rem;
    padding:10px 0;
    border-bottom: 1px solid #eee
  }
  .scroller dl dt i{
    font-size:0.12rem;
    font-weight: 700;
    color:#666;
    padding-right: 5px; 
  }
  .scroller dl dt span{
    font-size: 0.1rem;
    color:#999;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .scroller dl dd{
    display: flex;
    width: 100%;
    padding:5px;
  }
  .scroller dl dd span{
    width:50%;
    display: inline-block;
  }
   .scroller dl dd span img{
    width:100%;
    padding: 10px
   }
   .scroller dl dd section{
    width:100%;
    position: relative;
   
   }
   dd section p:nth-of-type(1){
    font-size: 0.17rem;
    font-weight: 700;
    color:#333;
    margin:5px 0;
   }
  dd section p:nth-of-type(2){
    font-size: 0.12rem;
    color:#666;
    margin:5px 0;
   }
  strong{
    font-size:0.15rem;
    color:#f60;
  }
  strong span{
    font-size:0.15rem;
    color:#f60;
  }
   .add{
    width:1rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom:0;
    font-size: 0.05rem;
    right: 10px;
   }
   .add a{
    display: inline-block;
    width:0.2rem;
    height: 0.2rem;
    line-height: 0.2rem;
    font-size:0.2rem;
    border-radius: 0.15rem;
    text-align: center;
    background:#2395ff;
    color:#fff;
   }
   .scroller dl dd .add>span{
    display: inline-block;
    width:0.1rem;
    text-align: center;
    font-size: 0.15rem;
    color:#666;
    line-height: 0.2rem;
   }


   .discount{
    width:100%;
    height:0.2rem;
    margin:5px 0;
   }











   .shop{
    width:100%;
    height: 1.4rem;
   
    position: fixed;
    left:0;
    right:0;
    bottom: 0;
   }
    .shop button{
      width:1rem;
      height:0.3rem;
      font-size: 0.15rem;
      color:#fff;
      border-radius:0.3rem;
      background:#ff6000;
      position:fixed;
      bottom:1rem;
      right:0.5rem;
      display: none;
    }
    
    footer{
      width:100%;
      position: fixed;
      bottom: 0;
      left: 0;
    }
    .masklayer{
      width:100%;
      background:rgba(131,131,131,0.8);
      height: 100%;
      position: fixed;
      bottom:0;
      left: 0;
      top:0;
      right:0;
      z-index: 9;
      display: none;
    }









    .privilege{
      width:100%;
      max-height: 4rem;
      min-height:0.4rem;
      position:absolute;
      color:#333;
      text-align: center;
      line-height: 0.2rem;
      left: 0;
      top:-70px;
      
      background:#fffad6;
      border-top: 1px solid #f9e8a3;
      z-index: 10;
    }
    .privilege>section{
      width:100%;
      height:0.2rem;    
    }
    .privilege>div{
      width:100%;
      background:#fff;
/*      min-height:5.5rem;*/
      display: flex;
      flex-direction:column; 
    }




    .privilege>div>div:nth-of-type(1){
      width:100%;
      height:0.4rem;
      line-height: 0.3rem;
      display: flex;
      background:#eceff1;
      justify-content: space-between;
    }
    .privilege>div>div:nth-of-type(2){
      width:100%;
     
    }
    .privilege>div>div:nth-of-type(2) ul{
      width:100%;
      height:100%;
      overflow: auto;
      position: relative;
      /*padding-bottom: 0.5rem;*/

/*      display: flex;
      flex-direction:column; */
    } 
    .privilege>div>div:nth-of-type(2) ul li{
      width:100%;
     /* height:0.3rem;*/
      background:#fff;
      margin:3px 0;
      position: relative;
    }   


    .privilege>div>div:nth-of-type(2) ul li span:nth-of-type(1){
      width:48%;
      display:inline-block;
      height:0.3rem;
      font-size: 0.15rem;
      line-height: 0.3rem;
     
    }
    .privilege>div>div:nth-of-type(2) ul li span:nth-of-type(2){
      width:20%;
      display:inline-block;
      height:0.3rem;
      line-height: 0.3rem;
      color:#ff6600;
      font-size: 0.15rem;

    }  
    .privilege>div>div:nth-of-type(2) ul li span:nth-of-type(3){
      width:28%;
      display:inline-block;
      height:0.3rem;
      line-height: 0.5rem;

    }
    .privilege>div>div:nth-of-type(2) ul li span:nth-of-type(3) a{
    display: inline-block;
    width:0.1rem;
    height: 0.2rem;
    line-height: 0.2rem;
    font-size:0.2rem;
    border-radius: 0.5rem;
    text-align: center;
    background:#2395ff;
    color:#fff;
   }
   .privilege>div>div:nth-of-type(2) ul li>span:nth-of-type(3)>span{
    text-align: center;
    font-size: 0.15rem;
    color:#666;
    line-height: 0.3rem;
    display: inline-block;
   } 
    .privilege>div>div:nth-of-type(1) .pitch span{
      font-size: 0.15rem;
      margin: 0.1rem 0 0 0.2rem;
      color:#777;
      padding-left: 0.1rem;
      border-left: 3px solid #2395ff;
     
    }
    .privilege>div>div:nth-of-type(1) a i{
      color:#666;
      font-size: 0.15rem;
    }
    .privilege>div>div:nth-of-type(1) a span{
      color:#666;
      display: inline-block;
      width:0.4rem;
      font-size: 0.15rem;
    }










      .cart{
      width:100%;
      height:12.8vw;
      position:fixed;
      left: 0;
      bottom:0;
      background:#505052;
      z-index: 55;
      display: flex;
      justify-content: space-between; 
    }
    .cart>span{
      position: absolute;
      bottom:0.2rem;
      left:0.1rem;
      width:0.5rem;
      height: 0.5rem;
      display: inline-block;
      background:#444;
      color:#fff;
      border-radius: 0.5rem;
      padding-top:0.05rem;
      text-align:center;
    }
    .cart>span>span{
      width:0.4rem;
      height: 0.4rem;

      display: inline-block;
      background:#363636;
      color:#66666a;
      border-radius: 0.5rem;
      font-size:0.3rem;
      line-height: 0.44rem;
    }






    .cart>div{
      width:1rem;
      height: 100%;
/*      background:blue;*/
    }
    .cart>div>p{
      width:100%;
      height: 0.2rem;
      color:#fff;
      font-size: 0.15rem;
      line-height: 0.2rem;
    }
    .cart>div>p:nth-of-type(2){
      font-size: 0.15rem;
      color:#999;
    }



    footer .cart a span{
      display: inline-block;
      width:1rem;
      height: 12.8vw;
    /*  background: orange;*/
      text-align: center;
      font-size: 0.15rem;
      color:#fff;
      line-height: 0.2rem;
      font-weight: 700;
    }

    .account{
      position: fixed;
      width:1rem;
      height: 12.8vw;
      background: #4cd964;
      text-align: center;
      font-size: 0.18rem;
      color:#fff;
      line-height: 0.4rem;
      font-weight: 700;
      display: none;
      right:0;
      bottom:0;
      z-index: 55
    }
    .account a{
      display: inline-block;
      width: 100%;
      height: 100%;
      color:#fff;
    }
    .difference{
      position: fixed;
      width:1.3rem;
      height: 12.8vw;
      background: #535356;
      text-align: center;
      font-size: 0.18rem;
      color:#fff;
      line-height: 0.4rem;
      font-weight: 700;
      display: none;
      right:0;
      bottom:0;
      z-index: 55
    }
    .difference a{
      display: inline-block;
      width: 100%;
      height: 100%;
      color:#fff;
    }
</style>