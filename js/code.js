(function($) {
	$.get(
	    "http://ropsten.etherscan.io/api?module=account&action=txlistinternal&address=0x3ba9b7207dbeb2b9308bbd6787e0d4d4864d58e4&startblock=0&endblock=2702578&sort=asc",
	    {paramOne : 1, paramX : 'abc'},
	    function(data) {
	       alert('page content: ' + data.result[0].to);
	    }
	);
})(jQuery)
