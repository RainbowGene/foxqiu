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
		return dd // 截掉后三位，不显示秒数
	}
}
//时间小于10 添加0
function num(s) {
	return s < 10 ? '0' + s : s;
}

// 计算指定时间与当前时间差
function getTimeDiff(time) {
	let dateBegin = new Date(time.replace(/-"/g, " / "))
	let dataEnd = new Date()
	let dateDiff = dataEnd.getTime() - dateBegin.getTime() // 时间差毫秒数
	let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)) // 计算相差天数
	let leave1 = dateDiff % (24 * 3600 * 1000) // 计算剩余的毫秒数
	let hours = Math.floor(leave1 / (3600 * 1000)) // 计算小时数
	// 计算相差分钟数
	let leave2 = leave1 % (60 * 1000)
	let minutes = Math.round(leave2 / (60 * 1000))
	// 计算相差毫秒数
	let leave3 = leave2 % (60 * 1000)
	let seconds = Math.round(leave3 / 1000)
	return dayDiff + "天 " // + hours + "小时"
}

// 计算星座 
function getConstellation(date) {
	let c = ["魔蝎", "水平", "双鱼", "白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "魔蝎"]
	date = new Date(date)
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let startMonth = month - (day - 14 < '865778999988'.charAt(month))
	return c[startMonth] + '座'
}

export {
	_GetDateStr,
	getTimeDiff,
	getConstellation
}
