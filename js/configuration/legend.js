var ctx=document.getElementById("myChart1").getContext("2d");new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{type:"line",label:"A",data:[65,59,80,81,56,55,40],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgb(54, 162, 235)",borderWidth:1,borderDash:[1,3],strokeStyle:"rgb(54, 162, 235)",pointStyle:"triangle"},{type:"line",label:"B",data:[55,59,70,91,26,25,70],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgb(255, 99, 132)",borderWidth:1,borderDash:[5,10],strokeStyle:"rgb(255, 99, 132)",pointStyle:"rect"},{type:"line",label:"C",data:[70,43,33,62,53,93,30],backgroundColor:"rgba(255, 206, 86, 0.2)",borderColor:"rgb(255, 206, 86)",borderWidth:1,borderDash:[3,15],strokeStyle:"rgb(255, 206, 86)",pointStyle:"star"}]},options:{legend:{display:!0,position:"bottom",labels:{boxWidth:30,fontSize:16,fontColor:"#333",padding:20,filter:function(e,t){return 0!==e.datasetIndex},usePointStyle:!0,generateLabels:function(e){return e.data.datasets.map(function(e,t){return{text:e.label,fillStyle:e.backgroundColor,hidden:e.hidden,lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:t}})}}}}});