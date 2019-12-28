    // Sidebar toggle
    function toggleSidebar() {
      document
        .getElementById("aSidebarCollapse")
        .classList.toggle("collapse-active");
      document
        .getElementById("wrapperCollapse")
        .classList.toggle("collapse-active");
      document
        .getElementById("hdToggleCollapse")
        .classList.toggle("collapse-active");
    }

    toggleSidebar();

    // Sidebar highlight active class to the current button
    var header = document.getElementById("ulSidebarMenu");
    var activeHover = header.getElementsByClassName("nav-item");

    for (var i = 0; i < activeHover.length; i++) {
      activeHover[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }

    // Progress bar percentage js
    $(document).ready(function() {
      $(".progress .progress-bar").css("width", function() {
        return $(this).attr("aria-valuenow") + "%";
      });
    });


    // Modal Script Other Page
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }

