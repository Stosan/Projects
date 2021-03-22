// Declare modal object

var mixModal = {
    $bg: null,
    $content: null,
    init: function(){
      
      // Instantiate MixItUp on background wrapper
      
      this.$bg.mixItUp({
        controls: {
          enable: false
        },
        load: {
          filter: 'none'
        },
        animation: {
          effects: 'fade',
          duration: 400,
        }
      });
      
      // Instantiate MixItUp on content wrapper
  
      this.$content.mixItUp({
        controls: {
          enable: false
        },
        animation: {
          effects: 'fade translateZ(-300px) translateY(5%)',
          duration: 300,
          easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        },
        load: {
          filter: 'none'
        }
      });
    },
    
    // Create a "show" method
    
    show: function(){
      this.$bg.show().mixItUp('filter', 'all');
      this.$content.show().mixItUp('filter','all'); 
    },
    
    // Create a "hide" method
    
    hide: function(){
      this.$bg.mixItUp('filter', 'none', function(){
        $(this).hide();
      });
      this.$content.mixItUp('filter','none', function(){
        $(this).hide();
      });
    }
  };
  
  // On document ready:
    
  $(function(){
    
    // Assign elements to modal properties
    
    mixModal.$bg = $('#ModalBgWrap');
    mixModal.$content = $('#ModalContentWrap');
    
    // Initialize modal
    
    mixModal.init();
    
    // Bind click handlers
    
    $('.modal-trigger').on('click', function(){
      mixModal.show();
    });
    
    $('.modal-close, .modal-wrap').on('click', function(e){
      if(e.target === this){
        mixModal.hide();
      }
    });
    
   });