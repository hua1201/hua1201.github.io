//版权 北京智能社©, 保留所有权利

$.fn.drag=function (){
	this.each(function (){
		// 原生
		var obj=$(this);
		
		obj.mousedown(function (ev){
			var disX=ev.clientX-obj.offset().left;
			var disY=ev.clientY-obj.offset().top;
			
			$(document).mousemove(move);
			$(document).mouseup(up);
			
			function move(ev)
			{
				var left=ev.clientX-disX;
				var top=ev.clientY-disY;
				
				obj.css({
					left:left+'px',
					top:top+'px'
				});
			}
			
			function up()
			{
				$(document).unbind('mousemove', move);
				$(document).unbind('mouseup', up);
				
				obj[0].releaseCapture && obj[0].releaseCapture();
			}
			
			obj[0].setCapture && obj[0].setCapture();
			return false;
		});
	});
};









