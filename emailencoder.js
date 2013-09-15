var EmailEncoder = EmailEncoder || {};

EmailEncoder.encode = function (email) {
    var estr = '<a href=mailto:' + email + '>' + email + '</a>';
    var strlength = estr.length;
    var intcodes = [];

    var start_code = '<script>c=';
    var end_code = '.split(",");l=c.length;e="";for(i=0;i<l;i++){e+=String.fromCharCode(c[i]);}document.write(e);</script>';
    var code = "";

    for(var i = 0; i < strlength; i++) {
        intcodes[i] = estr.charCodeAt(i);
    }

    code = start_code + "'" + intcodes.toString() + "'" + end_code;
    return code;
};
