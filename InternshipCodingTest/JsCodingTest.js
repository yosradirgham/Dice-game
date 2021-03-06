/*<!DOCTYPE html>
<html>
	<head></head>
	<body>
		<script>*/

			class FancyList {
				
				constructor(... items ){
					
					if(items==null){
						this.list = new Array();
  			    		this.type = 'undifined';
  						this.lengthh=0;
					}
					else if(typeof(items)=='number'|'string'){
						this.list = new Array();
						this.list.push(items);
						this.type = typeof(items[0]);
						this.lengthh = 1;
					}
					else if(typeof(items[0])=='object'){
						this.list = new Array();
						this.lengthh=0;
						this.type=typeof(items[0][0]);
						for(let i=0;i<items[0].length;i++){
							if(typeof(items[0][i]) != typeof(items[0][0])){
								this.list=new Array();
								console.log("the items don't have the same data type");
								return;
							}
							else{
								this.list[i]=items[0][i];
								++this.lengthh;
							}
						}	
					}
					else if(items.length>=1){
						this.list = new Array();
						this.type = typeof(items[0]);
						this.lengthh=0;
						for(let i=0;i<items.length;i++){
							if(typeof(items[i]) != typeof(items[0])){
								this.list = new Array();
								console.log("the items don't have the same data type");
								return;
							}
							else{
								this.list.push(items[i]);
								++this.lengthh;
							}
						}	
					}
				}

				getItemAt(index){
					if(index > this.lengthh-1 || index < 0){
						return ;
					}
					return this.list[index];
				}

				getItemsAt(index, numberOfItems){
					if(index > this.lengthh-1 || index < 0){
						console.log("there is no item at this index");
						return ;
					}
					if(index+numberOfItems-1>=this.lengthh){
						console.log("you have exceeded the size of the list");
						return;
					}
					var i=index;
					var tab = new Array();
					while(i<this.lengthh && i<=index+numberOfItems-1){
						tab[i-index] = this.list[i];
						++i;
					}
					return tab;
				}

				addItem(item){
					if(this.type == typeof(item)){
						this.list.push(item);
						++this.lengthh;
					}
					else{
						console.log("Error : cannot have different data types on the same list");
					}
				}
				
				addItems(... items){
					if(typeof(items[0])=='object' && items.length==1){
						var i = 0;
						while(i<items[0].length){
							if(typeof(items[0][i]) == this.type){
								this.list.push(items[0][i]);
								++this.lengthh;
							}
							else{
								console.log("Error : cannot have different data types on the same list");
							}
							++i;							
						}
					}
					else if(items.length == 1){
						if(this.type == typeof(items[0])){
							this.list.push(items);
							++this.lengthh;
						}
						else{
							console.log("Error : cannot have different data types on the same list");
						}	
					}
					else{
						var i = 0;
						while(i<items.length){
							if(typeof(items[i]) == this.type){
								this.list.push(items[i]);
								++this.lengthh;
							}
							else{
								console.log("Error : cannot have different data types on the same list");
							}
							++i;							
						}
					}
				}

				insertItemAt(index, item){ 
					if(typeof(item)==this.type){
						this.list.splice(index,0,item)
						++this.lengthh;
					}
					else{
						console.log("Error : cannot have different data types on the same list");
					}
				}
				
				insertItemsAt(... items){
					if(items.length==2 && typeof(items[1])=='object'){
						for(let i=0;i<items[1].length;i++){
							if(typeof(items[1][i])==this.type){
								this.list.splice(items[0][0]+i-1,0,items[1][i]);
								++this.lengthh;
							}
							else{
								console.log("Error : cannot have different data types on the same list");					
							}
						}
					}
					else{
						for(let i=1 ; i<items.length ; i++){
							if(typeof(items[i])==this.type){
								this.list.splice(items[0]+i-1,0,items[i]);
								++this.lengthh;
							}
							else{
								console.log("Error : cannot have different data types on the same list");					
							}
						}
					}
				}

				removeItemAt(index){
					if(index<this.lengthh && index>=0){
						this.list.splice(index,1);
						--this.lengthh;
					}
				}

				removeItemsAt(index, numberOfItems){
					if(index<this.lengthh && index>=0 && numberOfItems+index-1<this.lengthh){
						this.list.splice(index,numberOfItems);
						this.lengthh=this.lengthh-numberOfItems;
					}
					else if(numberOfItems+index-1>=this.lengthh){
						var x = this.lengthh - index;
						this.list.splice(index,x);
						this.lengthh=this.lengthh-x;
					}	
				}

				removeItem(item){
					for(let i=0; i<this.lengthh ;i++){
						if(this.list[i] == item){
							this.list.splice(i,1);
							--this.lengthh;
							break;
						}
					}
				}
				
				removeItems(... items){
					if(items.length==1 && typeof(items[0])=='object'){
						for(let j=0; j<items[0].length;j++){
							var i=0;
							while(i<this.lengthh-1){
								if(this.list[i]==items[0][j]){
									this.list.splice(i,1);
									--this.lengthh;
									break;
								}
								else{
									++i;
								}
							}
						}	
					}
					for(let j=0;j<items.length;j++){
						var i=0;
						while(i<this.lengthh-1){
							if(this.list[i]== items[j]){
								this.list.splice(i,1);
								--this.lengthh;	
								break;					
							}
							else{
								++i;
							}
						}
					}
				}
		}
	
		/*</script>
	</body>
</html>*/
