// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//添加方格子
function makeLine(col) {
	let tr = "<tr>";
	let td = "<td></td>"
	for(var i = 1; i <= col; i++){
		tr +=td;
	}
	tr = tr + "</tr>";
	return tr;
}

//改变格子颜色
function changeColor() {
	let color = $("#colorPicker").val();
	$(this).css("background-color" , color);
}

function makeGrid() {
	$("#pixelCanvas tr").remove();  //清除上一次的表格

	let row = $("#inputHeight").val();  //定义格子的宽度，并将值存入
	let col = $("#inputWeight").val();  //定义格子的高度，并将值存入

	//根据"makeLine(col)"函数设置格子的行
	let line = makeLine(col);
	for(let i = 1; i <= row; i++){
		$("#pixelCanvas").append(line);  //为名为”#pixelCanvas”的table添加“line”
	}

	$("#pixelCanvas").on("click" , "tr td" , changeColor);

}

$("#inputSubmit").on("click", makeGrid);
