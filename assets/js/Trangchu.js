

/*  */
document.getElementById("searchBtn").addEventListener("click", function() {
  console.log(123)
  var searchContainer = document.getElementById("searchContainer");
  if (searchContainer.style.display === "none") {
    searchContainer.style.display = "block";
  } else {
    searchContainer.style.display = "none";
  }
});

/*  */
document.addEventListener('DOMContentLoaded', function() {
  var iconContainer = document.querySelector('.icon-container');
  var carInfo = document.getElementById('carInfo');

  iconContainer.addEventListener('click', function() {
    carInfo.style.display = carInfo.style.display === 'none' ? 'block' : 'none';
  });
});

/*  */
  $(document).ready(function() {
    // Xử lý khi form đăng ký nhận tin được submit
    $('#subscribe-form').submit(function(e) {
      e.preventDefault(); // Ngăn chặn hành vi submit mặc định của form
      var email = $('input[name="email"]').val(); // Lấy giá trị email từ input
  
      // Gửi request AJAX đến server để xử lý đăng ký nhận tin
      $.ajax({
        url: 'subscribe.php', // Đường dẫn đến file xử lý đăng ký nhận tin trên server
        method: 'POST',
        data: {email: email},
        success: function(response) {
          // Xử lý kết quả trả về từ server (response)
          alert('Đăng ký nhận tin thành công!');
        },
        error: function() {
          alert('Đã xảy ra lỗi. Vui lòng thử lại sau!');
        }
      });
    });
  });

/*  */
  $(document).ready(function() {
    var car = $('.car');
  
    function animateCar() {
      car.addClass('animate');
      setTimeout(function() {
        car.removeClass('animate');
      }, 3000);
    }
  
    setInterval(animateCar, 6000);
  });
/*  */

  window.addEventListener('DOMContentLoaded', function() {
    var bannerImage = document.getElementById('banner-image');
    var overlay = document.getElementById('overlay');
    var border = document.getElementById('border');
  
    bannerImage.addEventListener('load', function() {
      overlay.style.width = bannerImage.clientWidth + 'px';
      overlay.style.height = bannerImage.clientHeight + 'px';
    });
  
    window.addEventListener('resize', function() {
      overlay.style.width = bannerImage.clientWidth + 'px';
      overlay.style.height = bannerImage.clientHeight + 'px';
    });
  });

/*  */
  var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");
var toggleNav = document.getElementById("toggleNav");

toggleNav.addEventListener("click", function() {
  navbar.classList.toggle("hidden");
});

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}
/*  */
const cars = document.querySelectorAll('.car');

function startAnimation() {
  cars.forEach(car => {
    car.style.animationPlayState = 'running';
  });
}

function stopAnimation() {
  cars.forEach(car => {
    car.style.animationPlayState = 'paused';
  });
}

/*  */
const carIcon = document.querySelector('.car-icon');

function startMoving() {
  carIcon.classList.add('move');
}

function stopMoving() {
  carIcon.classList.remove('move');
}

// Gọi hàm startMoving để bắt đầu di chuyển
startMoving();

/*  */

/* chuyển động xe ô tô  foooter*/

const car = document.querySelectorAll('.car');

// Thiết lập thời gian chờ giữa mỗi lần di chuyển
const delay = 2; // Thời gian chờ giữa các di chuyển (đơn vị giây)

// Thiết lập di chuyển cho từng ô tô
cars.forEach((car, index) => {
  car.style.animationDelay = `${index * delay}s`;
});

/* Dịch vụ nổi  bật */

