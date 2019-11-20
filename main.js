    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("mainHeader").onclick = function() {
          this.style.color = 'pink'
        }
      })

      $( document ).ready(function() {
        $( "#gone" ).click(function() {
          $( "div" ).fadeOut( "slow", function() {
          });
        });
      });