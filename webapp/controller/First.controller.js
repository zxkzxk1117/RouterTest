sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	return Controller.extend("RouterTest001.controller.First", {
	onInit: function() {
			this.router = sap.ui.core.UIComponent.getRouterFor(this);
		},
		ToSecond: function(oEvent){
			this.router.navTo("SecondView", {name: 'zxkzxk', sex:'male', querys: {
					score : "90"
				}}); //},"ture"}); 设置为ture清楚清除缓存
				
				// navTo set true, can remove history
		}
	});
});