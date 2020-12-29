!
function(t) {
    "use strict";
    t.fn.countUp = function(e) {
        var a = t.extend({
            time: 2e3,
            delay: 10
        },
        e);
        return this.each(function() {
            var e = t(this),
            n = a,
            u = function() {
                e.data("counterupTo") || e.data("counterupTo", e.text());
                var t = parseInt(e.data("counter-time")) > 0 ? parseInt(e.data("counter-time")) : n.time,
                a = parseInt(e.data("counter-delay")) > 0 ? parseInt(e.data("counter-delay")) : n.delay,
                u = t / a,
                r = e.data("counterupTo"),
                o = [r],
                c = /[0-9]+,[0-9]+/.test(r);
                r = r.replace(/,/g, "");
                for (var d = (/^[0-9]+$/.test(r), /^[0-9]+\.[0-9]+$/.test(r)), s = d ? (r.split(".")[1] || []).length: 0, i = u; i >= 1; i--) {
                    var p = parseInt(Math.round(r / u * i));
                    if (d && (p = parseFloat(r / u * i).toFixed(s)), c) for (;
                    /(\d+)(\d{3})/.test(p.toString());) p = p.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    o.unshift(p)
                }
                e.data("counterup-nums", o),
                e.text("0");
				
                var f = function() {
					
                    if (e.data('counterup-nums')) {
                        e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), a) : (e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null))
                    }
                }
				
                e.data("counterup-func", f),
                setTimeout(e.data("counterup-func"), a)
            };
            e.waypoint(u, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
} (jQuery);

(function() {
	var sUserAgent = navigator.userAgent;
	console.log(sUserAgent);
	if (sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('iPhone') > -1 || sUserAgent.indexOf('iPad') > -1 || sUserAgent.indexOf('iPod') > -1 || sUserAgent.indexOf('Symbian') > -1) {

		location.href = 'http://121.42.10.139:8017/app/mobile/index.html';
	} else {
		// location.href = 'http://121.42.10.139:8017/index.html';
	}
})();

function sendAjax(url, param, callback) {
    $.ajax({
        type: "post",
        url: 'http://121.42.10.139:8028/index.php/api'+url,
        data: param,
        success: callback,
        error: function() {
            ClosetoastLoading();
            errorTip();
        }
    });
}

//截取url上的参数
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

localStorage.setItem('imgUrl','http://121.42.10.139:8028/upload')