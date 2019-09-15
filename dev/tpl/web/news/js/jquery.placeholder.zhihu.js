var JPlaceHolder = {

 检测

 _check  function(){

     return 'placeholder' in document.createElement('input');

 },

 初始化

 init  function(){

     if(!this._check()){

         this.fix();

     }

 },

 修复

 fix  function(){

     jQuery('input[placeholder]').each(function(index, element) {

         var self = $(this), txt = self.attr('placeholder');

         self.wrap($('divdiv').css({position'relative', zoom'1', border'none', background'none', padding'none', margin'none'}));

         var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');

         if(self.attr(id) == 'register_pwd'  self.attr(id) == 'register_pwd_ag'  self.attr(id) == 'getPsw'){
           var holder = $('spanspan').text(txt).css({position'absolute', leftpos.left, top'2px', heighth, paddingLeftpaddingleft, color'#999'}).appendTo(self.parent());
         } else  if(self.attr(class) == 'wds_input') {
           var holder = $('spanspan').text(txt).css({position'absolute', left'6px', top'8px', heighth, paddingLeftpaddingleft, color'#999'}).appendTo(self.parent());
         } else {
           var holder = $('spanspan').text(txt).css({position'absolute', leftpos.left, top'7px', heighth, paddingLeftpaddingleft, color'#999'}).appendTo(self.parent());
         }         

         self.focusin(function(e) {

             holder.hide();

         }).focusout(function(e) {

             if(!self.val()){

                 holder.show();

             }

         });

         holder.click(function(e) {

             holder.hide();

             self.focus();

         });

     });

 }

};

jQuery(function(){
  JPlaceHolder.init();   
});