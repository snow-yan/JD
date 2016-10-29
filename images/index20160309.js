Eva.require("node", "slide", "anim", "tab", "carousel", "plug-carousel", "datalazyloader", "plug-switchable-effect").ready(function (j) { var o = {}, s = "#tab_nav", p = ".tab_pannel", i = ".content", v = ".floorbarndSlide", r = ".brand_content", u = ".corp_slide", l = ".floor_banner_slide", t = ".float_nav", e = "document", b = ".yt_floor_item", g = "", c = ".noctice", d = "#bd", f = ".border_animation", q = ".floor_tk_content", n = ".eva-switchable-prev", h = ".eva-switchable-next", m = Eva.UA.ie, k = window; var a = function () { var w = this; w.init() }; a.prototype = { init: function () { var w = this; w._collectNode(); w._bindEvent(); w.activeFloorNav(); w.scrollNotice() }, _collectNode: function () { o[s] = j.one(s); o[p] = o[s].all(p); o[i] = o[s].all(i); o[r] = j.one(r); o[v] = j.all(v); o[l] = j.all(l); o[u] = j.one(u); o[t] = j.one(t); o[e] = j.one(e); o[k] = j.one(k); o[b] = j.all(b); o[g] = o[t].all("a"); o[c] = j.one(c); o[d] = j.one(d); o[f] = o[d].all(f); o[q] = j.one(q); o[n] = o[s].one(n); o[h] = o[s].one(h) }, _bindEvent: function () { var D = this, w, x = D._hiddenFixnav(), B = new j.DataLazyLoader(); D.activeIndex = 0; if (o[s]) { var E = o[s].all(".tab_pannel").size(), C = o[s].one(".nav_trriger"), z = parseInt(C.one("li").getComputedStyle("width")) + 1; if (E > 1) { C.setStyles({ left: (780 - E * z) / 2 + 211, display: "block" }); var A = new j.Slide(o[s], { panelsCls: "pannels", delay: 0.2, interval: 5, duration: 0.5, effect: "fade", hasTrigger: true, autoplay: true, triggersCls: "nav_trriger" }); A.switchable.on("switch", function (I) { D.activeIndex = parseInt(I.index); if (D.activeIndex == 0) { o[n].addClass("eva-switchable-disable-btn") } else { if (o[n].hasClass("eva-switchable-disable-btn")) { o[n].removeClass("eva-switchable-disable-btn") } } var J = o[s].all(".tab_pannel").item(I.index); if (J != null) { B.loadCustomLazyData(J, "img-src"); var H = J.getStyle("backgroundImage"), K = J.getAttribute("data-bg"); if (H == "none" && /^http:\/\//.test(K)) { J.setStyle("backgroundImage", "url(" + K + ")") } var L = J.one(".mask_layer"), G = J.all(".mask_layer a"); if (L) { if (G.size() == 0) { L.setStyle("display", "none") } G.each(function (M, N) { if (M.getStyle("backgroundImage") == "none") { M.setStyle("backgroundImage", "url(" + M.getAttribute("data-bg") + ")") } }) } } }); o[s].on("mouseenter", function () { o[n].setStyle("opacity", 0.7); o[h].setStyle("opacity", 0.7) }); o[s].on("mouseleave", function () { o[n].setStyle("opacity", 0); o[h].setStyle("opacity", 0) }); o[n].on("click", function () { if (o[n].hasClass("eva-switchable-disable-btn")) { return false } D.activeIndex--; if (D.activeIndex == -1) { D.activeIndex = parseInt(E) - 1 } A.switchable.switchTo(D.activeIndex) }); o[h].on("click", function () { D.activeIndex++; if (D.activeIndex == E) { D.activeIndex = 0 } A.switchable.switchTo(D.activeIndex) }) } } if (o[r]) { var y = new j.Tab(o[r], { delay: 0.2 }); y.switchable.on("switch", function (G) { var H = o[r].all(".eva-switchable-panels>div").item(G.index); if (H != null) { B.loadCustomLazyData(H, "img-src") } }); y.switchable.switchTo(2) } if (o[q]) { var F = new j.Tab(o[q], { delay: 0.2 }); F.switchable.on("switch", function (G) { var H = o[q].all(".eva-switchable-panels>div").item(G.index); if (H != null) { B.loadCustomLazyData(H, "img-src") } }) } o[v].each(function (H, G) { if (H.all(".eva-switchable-panels div").size() > 1) { H.plug([{ fn: j.Plugin.Carousel, cfg: { circular: true, steps: 1, hasTrigger: false, effect: "scrollX" } }, { fn: j.Plugin.SwitchableEffect, cfg: { effect: "scrollX", relateType: "carousel", easing: "easeOutStrong", duration: 1 } }]).carousel.on("switch", function (I) { var J = H.all(".eva-switchable-panels>div").item(I.index); if (J != null) { B.loadCustomLazyData(J, "img-src") } }) } }); o[l].each(function (I, H) { var L = I.one(".floor_slide_trigger"), J = L.all("li").size(), G = parseInt(I.getComputedStyle("width")), M = parseInt(L.one("li").getComputedStyle("width")) + 5, K = 0; if (J > 1) { K = (G - J * M) / 2 + 5; L.setStyle("left", K).removeClass("hidden"); I.plug([{ fn: S.Plugin.Carousel, cfg: { circular: true, steps: 1, triggersCls: "floor_slide_trigger", hasTrigger: true, effect: "scrollX" } }, { fn: S.Plugin.SwitchableEffect, cfg: { effect: "scrollX", relateType: "carousel", easing: "easeOutStrong", duration: 1 } }]).carousel.on("switch", function (N) { var O = I.all("a").item(N.index); if (O != null) { B.loadCustomLazyData(O, "img-src") } }); I.on("mouseenter", function (O) { O.preventDefault(); var N = I.one(".eva-switchable-next"), P = I.one(".eva-switchable-prev"); D.showHide(P, N, "0px") }); I.on("mouseleave", function (O) { O.preventDefault(); var N = I.one(".eva-switchable-next"), P = I.one(".eva-switchable-prev"); D.showHide(P, N, "-30px") }) } }); if (o[u] && o[u].all(".eva-switchable-panels a").size() > 1) { if (o[u].all(".eva-switchable-panels a").size() == 1) { o[u].one(".trriger_wrap").setStyle("display", "none") } else { o[u].plug([{ fn: j.Plugin.Carousel, cfg: { circular: true, steps: 1, triggersCls: "corp_trigger", hasTrigger: true, effect: "scrollX" } }, { fn: j.Plugin.SwitchableEffect, cfg: { effect: "scrollX", relateType: "carousel", easing: "easeOutStrong", duration: 1 } }]).carousel.on("switch", function (G) { var H = o[u].all("a").item(G.index); if (H != null) { B.loadCustomLazyData(H, "img-src") } }) } } o[t].delegate("click", function (G) { var H = G.currentTarget, I = H.get("id"); if (I == "top") { D.scrollToTarget(0) } else { var J = j.one(".yt_floor_" + I); if (J) { D.scrollToTarget(J.get("region").top - 50) } } }, "a"); o[k].on("scroll", function () { if (!x) { return } if (w) { clearTimeout(w) } w = setTimeout(D.activeFloorNav, 200); if (o[k].get("scrollTop") - o[r].get("region").top >= 0) { o[t].setStyle("display", "block") } else { o[t].setStyle("display", "none") } if (Eva.UA.ie == 6) { o[t].setStyles({ position: "absolute" }); o[t].setStyle("top", o[e].get("docScrollY") - 150) } }); D._collectAnim(); if (!D._support3d("transition")) { o[d].delegate("mouseenter", function (G) { var H = G.currentTarget; if (H.ancestor().hasClass("pr_list_t") || H.hasClass("yt_pro_detail")) { H.top.fx.stop().set("to", { width: 220 }).run(); H.right.fx.stop().set("to", { height: 260 }).run(); H.buttom.fx.stop().set("to", { width: 220 }).run(); H.left.fx.stop().set("to", { height: 260 }).run() } else { if (H.ancestor().hasClass("xp-pro")) { H.top.fx.stop().set("to", { width: 200 }).run(); H.right.fx.stop().set("to", { height: 250 }).run(); H.buttom.fx.stop().set("to", { width: 200 }).run(); H.left.fx.stop().set("to", { height: 250 }).run() } else { H.top.fx.stop().set("to", { width: 272 }).run(); H.right.fx.stop().set("to", { height: 182 }).run(); H.buttom.fx.stop().set("to", { width: 272 }).run(); H.left.fx.stop().set("to", { height: 182 }).run() } } }, ".border_animation"); o[d].delegate("mouseleave", function (G) { var H = G.currentTarget; H.top.fx.stop().set("to", { width: 0 }).run(); H.right.fx.stop().set("to", { height: 0 }).run(); H.buttom.fx.stop().set("to", { width: 0 }).run(); H.left.fx.stop().set("to", { height: 0 }).run() }, ".border_animation") } else { o[d].delegate("mouseenter", function (G) { var H = G.currentTarget; if (H.ancestor().hasClass("pr_list_t") || H.hasClass("yt_pro_detail")) { H.top.setStyle("width", "220"); H.right.setStyle("height", "260"); H.buttom.setStyle("width", "220"); H.left.setStyle("height", "260") } else { if (H.ancestor().hasClass("xp-pro")) { H.top.setStyle("width", "200"); H.right.setStyle("height", "250"); H.buttom.setStyle("width", "200"); H.left.setStyle("height", "250") } else { H.top.setStyle("width", "272"); H.right.setStyle("height", "182"); H.buttom.setStyle("width", "272"); H.left.setStyle("height", "182") } } }, ".border_animation"); o[d].delegate("mouseleave", function (G) { var H = G.currentTarget; H.top.setStyle("width", "0"); H.right.setStyle("height", "0"); H.buttom.setStyle("width", "0"); H.left.setStyle("height", "0") }, ".border_animation") } }, scrollToTarget: function (w) { if (o[e].fx) { o[e].fx.set("to", { scroll: [0, w] }); o[e].fx.run() } else { o[e].plug(j.Plugin.NodeFX, { to: { scroll: [0, w] }, easing: j.Easing.easeOut, duration: 0.2 }).fx.run() } }, showHide: function (x, w, y) { if (x.fx) { x.fx.set("to", { left: y }); x.fx.run() } else { x.plug(j.Plugin.NodeFX, { to: { left: y }, easing: j.Easing.easeOut, duration: 0.2 }).fx.run() } if (w.fx) { w.fx.set("to", { right: y }); w.fx.run() } else { w.plug(j.Plugin.NodeFX, { to: { right: y }, easing: j.Easing.easeOut, duration: 0.2 }).fx.run() } }, activeFloorNav: function () { var y = o[k].get("winHeight") / 3, w = o[k].get("scrollTop"); for (var x = 0; x < o[b].size() ; x++) { var z = o[b].item(x).get("region").top; if (w >= z - y && w <= z - y + 484) { o[g].each(function (B, A) { B.removeClass("f_active") }); o[g].item(x).addClass("f_active") } else { o[g].item(x).removeClass("f_active") } } }, scrollNotice: function () { var C = 1; if (o[c]) { var y = o[c].all("li"), x = o[c].one("ul"), A = y.size(); if (A > C) { var z = parseInt(y.item(0).getStyle("height")); x.appendChild(x.getHTML()); var w = new S.Anim({ node: o[c].one("ul"), duration: 0.5, to: {} }); var B = setInterval(function () { var D = x.get("scrollTop"); w.set("to", { scroll: [0, D + z] }); w.run() }, 4000); w.on("end", function () { if ((x.get("scrollHeight") - x.get("scrollTop") - z * A) < 18) { x.set("scrollTop", 0) } }) } } }, _support3d: function () { var w = document.createElement("div"); if ("transform" in w.style || "webkitTransform" in w.style) { w = null; return true } w = null; return false }, _collectAnim: function () { o[f].each(function (x, w) { x.top = x.one(".border_top"); x.right = x.one(".border_right"); x.buttom = x.one(".border_bootom"); x.left = x.one(".border_left"); x.top.plug(j.Plugin.NodeFX, { to: { width: 270 }, duration: 0.5, easing: "easeNone" }); x.buttom.plug(j.Plugin.NodeFX, { to: { width: 270 }, duration: 0.5, easing: "easeNone" }); x.right.plug(j.Plugin.NodeFX, { to: { height: 180 }, duration: 0.5, easing: "easeNone" }); x.left.plug(j.Plugin.NodeFX, { to: { height: 180 }, duration: 0.5, easing: "easeNone" }) }) }, _hiddenFixnav: function () { if (parseInt(o[d].getStyle("width")) < 1260) { o[t].setStyle("display", "none"); return false } return true } }; (function (E, H) { var G = E.navigator.userAgent, A = G.match(/iPhone|iPod|Android|iPad/i); if (A == null) { return false } var J = H.one("body"), C = H.Node, D = "<div>", z = "<a>", B = "<span>", x = "<img>", L = "click", K = C.create(D).setAttrs({ id: "wap_box" }), F = C.create(B).setAttrs({ id: "wap_close" }), I = C.create(z).setAttrs({ target: "_blank" }), y = I.cloneNode(), w = C.create(x).setAttrs({ width: 1190, height: 170 }); if (A[0] == "iPad") { y.setAttrs({ id: "wap_ipad", href: "http://um0.cn/JECUx/" }); w.setAttrs({ src: "http://r.ytrss.com/rs/img/wap/ipad-2015.jpg" }); K.appendChild(w); K.appendChild(y) } else { y.setAttrs({ id: "wap_app" }); if (A[0] == "Android") { y.setAttrs({ href: "http://m.yintai.com/Event/appdown/ios_yingyongbao.html?id=ECweb" }) } else { y.setAttrs({ href: "http://m.yintai.com/Event/appdown/ios_yingyongbao.html?id=ECweb" }) } I.setAttrs({ id: "wap_url", href: "http://m.yintai.com" }); w.setAttrs({ src: "http://r.ytrss.com/rs/img/wap/wap-2015.jpg" }); K.appendChild(w); K.appendChild(y); K.appendChild(I) } K.appendChild(F).on(L, function () { K.remove() }); J.insert(K, 0) })(window, j); new a() });