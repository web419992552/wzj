<template>

   <div  class="menu container row">
       <div class="col-7">
            <h3 class="text-center text-primary" >点餐</h3>
            <table class="table text-center">
                <thead>
                    <tr class="bg-primary text-white">                      
                        <th scope="col">尺寸</th>
                        <th scope="col">价格（元）</th>
                        <th scope="col">加入</th>
                    </tr>
                </thead>
                <tbody v-for="(item,index) in items" :key="index">
                    <tr>
                        <td colspan="3">{{item.name}}</td>
                    </tr>
                    <tr>
                        <td colspan="3">{{item.description}}</td>
                    </tr>
                    <tr v-for="(item1,index1) in item.options" :key="index1">
                        <td>{{item1.size}}</td>
                        <td>{{item1.price}}</td>
                        <td ><button class="btn btn-success" @click="addPizza(item,item1)">+</button></td>
                    </tr> 
                </tbody>
            </table>
        </div>
        <div class="col-4">
            <h3 class="text-center text-primary">购物车</h3>
            <h1 v-if="NewItems.length==0">购物车空空</h1>
            <table v-else class="table text-center">
                <thead class="bg-primary ">
                    <tr >
                        <th scope="col">数量</th>
                        <th scope="col">种类</th>
                        <th scope="col">价格</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr v-for="(item3,index3) in NewItems" :key="index3">                   
                        <td>
                            <button @click="subPizza(item3,index3)">-</button>
                            <input style=" width:50px" type="number" v-model.number="item3.quantity">
                            <button @click="addPizza1(item3)">+</button>
                        </td>
                        <td>{{item3.name}}</td>
                        <td >{{item3.price*item3.quantity}}</td>
                    </tr>
                    <tr>
                        <td colspan="3">商品类别总计:{{NewItems.length}}</td>
                    </tr>                   
                    <tr>
                        <td colspan="3">商品类别总金额:{{gross}}</td>
                     </tr>                      
                </tbody>
            </table>
        </div>

   </div>
</template>
                    
      
<script>
export default {
    name:'Menu',
    data(){
        return{
            num:5,
            NewItems:[],
            items:{
               
                    0:{   
                        name:'芝士pizza',
                        description:'这是一款被大众喜爱的pizza.',
                        options:[
                            {
                                size:'7寸',
                                price:'70'
                            },
                            {
                                size:'10寸',
                                price:'100'
                            },
                        ]
                    },
               
               
                    1:{
                        name:'榴莲pizza',
                        description:'这是一款口味独特的pizza,依据客人口味自行购买.',
                        options:[
                            {
                                size:'7寸',
                                price:'90'
                            },
                            {
                                size:'10寸',
                                price:'140'
                            },
                        ]
                    }
                
            },
            
        }
    },
    methods:{
                addPizza(item,options){
                    var result = this.NewItems.filter((item6)=>{
                        return item.name==item6.name && options.size==item6.size
                    })
                    
                    if(result!=null && result.length>0){
                        result[0].quantity++
                    }else{
                        this.NewItems.push({
                            name:item.name,
                            size:options.size,
                            price:options.price,
                            quantity:1
                        })
                    }
                   
                   
                },
                subPizza(item3,index3){
                    if(item3.quantity>1){
                        item3.quantity--
                    }else{
                        this.NewItems.splice(index3,1)
                    }
                    
                    
                },
                addPizza1(item3){
                    if(item3.quantity>=10){
                        item3.quantity=10
                    }else{
                        item3.quantity++
                    }
                    
                    
                }  
                  
            },
    computed:{
        gross(quan){
            return this.NewItems.reduce((pre,cur)=>{
                return pre+cur.price*cur.quantity
            },0)
        }
    }

}
</script>
<style>
   
</style>
