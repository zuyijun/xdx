//程序的控制逻辑的实现
//所有的数据都是从本地存储localStorage中来读写的！！！

//我们自定义的数据存储格式
// var todolist = [{title:"XXXXX",done:false}];

//对象转字符串 JSON.stringify(date);
//字符串数据转成对象	JSON.parse(date);

//页面数据的生成：从本地存储中独处数据，根据独处的数据来生产页面元素

//后期我们给的本地存储的key：todolist;

$(function(){

	var todoDate = [];//全局变量，（破坏了安全）
	load();
	$("#title").on("keydown",function(ev){

		if(ev.keyCode === 13){	//检测是否按下回车

			//如果文本框中有数据才进行操作
			if($(this).val() === ""){
				alter("请输入内容！");
			}else{
				//有数据的情况下我们需要完成如下的逻辑
				
				//	a 读取本地存储数据
				todoData = getData();
				// console.log(todoData);

				//	b 将文本框中的数据追加到我们自定义的数组中去
				// $(this).val();
				// 我们需要使用push()向自定义数组todoData中追加数据
				// todoData.push($(this).val());错误，不符合数组元素的格式
				todoData.push({title:$(this).val(),done:false});
				// console.log(todoData);



				//	c 将更新后的数组保存到本地存储中去
				saveData(todoData);
				// console.log(todoData);

				//	d 渲染页面
				load();

				//	e 清空文本框
				$(this).val("");
			}


		}
	});


	//2 点击a，删除对应页面元素
	//因为页面的li元素是动态添加的，所以事件需要委托
	$("#todolist,#donelist").on("click","a",function(){
		// 删除的是本地存储中的数据
		

		//获取本地存储数据
		var data = getData();

		//删除数组中对应索引的元素
		var index = $(this).attr("id");
		// console.log($(this).index());

		//在数组中删除对应索引元素用splice(index,n);
		data.splice(index,1);
		console.log(data);
		//将更新之后的数组，保存到本地存储
		saveData(data);
		


		//重新渲染页面就可以了
		load();
	})


	// 3 点击checkbox,完成正在进行和已经完成的事项的切换
	$("#todolist,#donelist").on("click","input[type=checkbox]",function(){
		//先读取本地存储数组
		var data = getData();

		//根据点击的checkbox的索引去修改自定义数组中对象的done属性
		//可以根据兄弟元素a的索引来确定
		var index = $(this).siblings("a").attr("id");
		// console.log(index);
		
		// data[?].done=??;
		data[index].done = $(this).prop("checked");
		// console.log(data[index].done);

		//保存数据
		saveData(data);

		//渲染页面
		load();


	});


	// 4 点击clear,删除页面所有元素
	$("#clear").click(function(){

		// 实际上删除的是本地存储中的数据
		var data = getData();
		  //data = [];
		  data.splice(0);
		  saveData(data);
		  load();


		// 本地存储本身就有一个方法,clear(),
		// 使用本地存储的clear方法，会将所有的本地存储数据删除
		// localStorage.clear();
		// load();
	});






	//定义本地存储数据读取函数	 getData();
	function getData(){

		var data = localStorage.getItem("todolist");
		if(data !== null){
			//判断读取出来的数据是否为空
			//因为读取出来的数据是字符串格式的，需要转成对象格式
			return JSON.parse(data);
		}else{
			return [];
		}
	};

	//定义存储本地存储数据的函数 saveData(data);
	function saveData(data){
		//setItem(key,value);
		//因为data是对象，需要转成字符串格式才能存入本地存储
		localStorage.setItem("todolist",JSON.stringify(data));
	};

	//完成页面渲染函数load();
	function load(){
		// 将原有页面内容清空
		$("#todolist,#donelist").empty();

		//新增两个变量来存储事项的数量
		var todoCount = 0;
		var doneCount = 0;

		//读取本地存储的数据
		var data = getData();

		//根据读取出来的数据，生成对应的页面元素，添加到页面中去
		//通过遍历来完成
		//each();
		$(data).each(function(index,element){
			//每次遍历一个元素，对应生成一个li
			// console.log(element.title);
			// $("<li><input type=checkbox> <p>"+element.title+"</p> <a href='javascript:;'></a></li>").prependTo($("#todolist"));
			// 第一次改写我们的load(),给新增的元素一个自定义的索引值,保证该索引值和元素在数组中的索引值能够一一对应
			// $("<li><input type=checkbox> <p>"+element.title+"</p> <a href='javascript:;' id="+ index +"></a></li>").prependTo($("#todolist"));
			

			// 第二次修改load();需要根据done属性来将新增元素添加到对应位置上去
			if(element.done == true){
				doneCount++;
				$("<li><input type=checkbox checked='checked'> <p>"+element.title+"</p> <a href='javascript:;' id="+ index +"></a></li>").prependTo($("#donelist"));
			
			}else{
				todoCount++;
				$("<li><input type=checkbox> <p>"+element.title+"</p> <a href='javascript:;' id="+ index +"></a></li>").prependTo($("#todolist"));
			
			}

		});
		$("#todocount").text(todoCount);
		$("#donecount").text(doneCount);

	}

});