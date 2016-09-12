$(function() {
	"use strict";

	function blockUI(){
	    $.blockUI({
	        message : '<i class="fa fa-spinner fa-spin"></i> Đang kiểm tra dữ liệu',
	        css: {
	            border: 'none',
	            padding: '15px',
	            backgroundColor: '#000',
	            '-webkit-border-radius': '10px',
	            '-moz-border-radius': '10px',
	            opacity: 0.5,
	            color: '#fff'
	        },
	        baseZ: 9999
	    });
	}
}