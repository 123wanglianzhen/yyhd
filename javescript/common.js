function _jsonp(url , cb){
    return new Promise(function( resolve , reject ){
          cb = cb ? cb : "callback";
          var randomName = "cb"+Date.now();
          var script = document.createElement("script");
          url += (/\?/.test(url) ? "&" : "?") + `${cb}=${randomName}`;
          script.src = url;
          document.body.appendChild(script);
          script.onload = function(){
                this.remove();
          }
          window[randomName] = function(res){
                resolve(res)
          }
    })
}
