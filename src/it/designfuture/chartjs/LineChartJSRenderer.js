sap.ui.define(['jquery.sap.global', 'sap/ui/core/Renderer', './BaseChartJSRenderer'],
	function(jQuery, Renderer, BaseChartJSRenderer) {
	"use strict";


	/**
	* LineChartJS renderer.
	* @static
	* @namespace
	*/
	var LineChartJSRenderer = Renderer.extend(BaseChartJSRenderer);
	
	/**
	 * Adds control specific class
	 *
	 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
	 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
	 */
	LineChartJSRenderer.addOuterClasses = function(oRm, oControl) {
		oRm.addClass("opeui5-line-chartjs");
	};


	return LineChartJSRenderer;

}, /* bExport= */ true);