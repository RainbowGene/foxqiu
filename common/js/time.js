function _GetDateStr(sj_str) {
	var data = new Date().toLocaleDateString()
	var dd = Date.parse(data) / 1000
	var iday = Math.floor(parseInt(dd - sj_str) / 60 / 60 / 24);
	if (-1 == iday) { // 当天
		return num(new Date(sj_str * 1000).getHours()) + ':' + num(new Date(sj_str * 1000).getMinutes())
	} else if (0 == iday) {
		let h =
			dd = new Date(sj_str * 1000).toLocaleString().split(' ');
		return '昨天 ' + num(new Date(sj_str * 1000).getHours()) + ':' + num(new Date(sj_str * 1000).getMinutes())
	} else {
		var dd = [];
		dd = num(new Date(sj_str * 1000).toLocaleDateString()) + ' ' + num(new Date(sj_str * 1000).toLocaleTimeString())
		var y = dd[0];
		var m = dd[1]; //获取当前月份的日期
		var d = dd[2];
		// return y + "-" + num(m) + "-" + num(d);
		return dd
	}
}
//时间小于10 添加0
function num(s) {
	return s < 10 ? '0' + s : s;
}

export {
	_GetDateStr
}
