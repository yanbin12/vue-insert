<template>
    
    <div>
        <div class="box">
            <div class="add" >
                <button @click='add' class="tian" v-if='uid==0'>添加新闻</button>
                  <div class="tj" v-if='uid==1'>
									w:<input type="text" v-model="ui.w"><br>
									region:<input type='text' v-model="ui.region"><br>
									layout:<input type="text" v-model="ui.layout"><br>
									price:<input type='text' v-model="ui.price"><br>
									state:<input type='text' v-model="ui.state"><br>
                    <button @click='btn' class="btn">提交</button>
                </div>
                </div>
               <div class="rows" v-for='(i,index) in arr'>
                   <div class='row'>
                    <div  id="ospan">
	         <img src="./123.png" @click='dele(i)' id="imagess"/>

			 <table>
				 <tr>
					 <td>{{i.w}}</td>
					 <td>{{i.region}}</td>
					 <td>{{i.layout}}</td>
					 <td>{{i.price}}</td>
					  <td>{{i.state}}</td>
				 </tr>
			 </table>
				</div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
            data(){
                return{
                    arr:[],
                    uid:0,
					ui:{} 
                }
            },
            methods:{
                dele(e){
                    this.$http.post('http://localhost:8000/del',{id:e.id},{emulateJSON:true}).then(()=>{
                       var _index=this.arr.indexOf(e)
						this.arr.splice(_index,1)
                    });
                },
				add(){
					this.uid=1
				},
                btn(){
                    this.$http.post('http://localhost:8000/add',this.ui,{emulateJSON:true}).then((e)=>{
                       this.arr.push(this.ui)
                    });
                    this.uid=0;
                }
            },
            created(){
            	this.$http.get('http://localhost:8000/list').then((e)=>{
                	this.arr = e.body
            	})
        	}
    }


</script>
<style>
	
	*{
	margin: 0;
	padding: 0;
    }
	.row img{
		width: 17px;
		float: right;
		
	}
	.box{
		width: 100%;
		padding: 20px;
		margin: auto;
		box-sizing: border-box;

	}
	
	#imagess:hover{
		transform: rotate(30deg);
		transition: 0.2s;
	}
	.tj{
		font-size: 14px;
	}
	.tj>input{
		margin: 5px 0 ;
	}
	.btn{
		display: block;
		margin: auto;
		margin-top: 10px;
	}
    #ospan{
		display: block;
		margin: 10px 0;
	}
	table{
		border: 1px solid red
	}
		table tr{
			border:slategrey solid;
		}
		table td{
			border:slategrey solid;
		}
    </style>