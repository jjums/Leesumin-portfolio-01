function btnReady() {
  alert('준비중입니다.');
}

function btnReady2() {
  alert('적용되었습니다.');
}

function btnReady3() {
  alert('트림에 포함되어 선택불한 옵션입니다');
}

function btnReady4() {
  alert('구매를 위해 결제페이지로 이동합니다.');
}

function btnReady5() {
  alert('아이디/비밀번호를 확인해주세요.');
}

function statusChange(statusItem) {
  let strText = $(statusItem).text();
  // strText 에 전체 문자열이 입력된다.
  $("#tt").val(strText);
};

// news onclick
function change_btn(e) {
  var newsButton = document.querySelectorAll(".news-page-num");
  newsButton.forEach(function (newsBtn, i) {
    if (e.currentTarget == newsBtn) {
      newsBtn.classList.add("newsActive");
    } else {
      newsBtn.classList.remove("newsActive");
    }
  });
  console.log(e.currentTarget);
};

// qna onclick

function showQnaContent(menuId) {
  // 모든 콘텐츠 숨기기
  var QnaContents = document.querySelectorAll("[id$='-qnaContent']");
  for (var i = 0; i < QnaContents.length; i++) {
    QnaContents[i].style.display = "none";
  }

  // 선택한 메뉴의 콘텐츠 보이기
  var QnaNoneContent = document.getElementById(menuId + "-qnaContent");
  if (QnaNoneContent) {
    QnaNoneContent.style.display = "block";
  }
};

function selectQnaMenu(qnaMenu) {
  // 모든 메뉴에서 선택 클래스 제거
  var qnaMenus = document.querySelectorAll(".qna-tab-menu li");
  for (var i = 0; i < qnaMenus.length; i++) {
    qnaMenus[i].classList.remove("qnaSelected");
  }

  // 선택한 메뉴에 선택 클래스 추가
  qnaMenu.classList.add("qnaSelected");
};





// include don't touch 

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/

          elmnt.removeAttribute("w3-include-html");
          includeHTML();

          // -------------------------------------------------------------------------

          var _open2 = document.querySelector("#navigation_open");
          _open2.addEventListener("click", function () {
            document.querySelector('#navigation').style.width = "100%";
          });

          var _close2 = document.querySelector("#navigation_close");
          _close2.addEventListener("click", function () {
            document.querySelector('#navigation').style.width = "0";
          });

          // 네비오픈 피씨
          var _open1 = document.querySelector("#navigation_open_pc");
          _open1.addEventListener("click", function () {
            document.querySelector('#navigation').style.width = "50%";
            document.querySelector('#navi-bg-pc').style.display = "block";
          });

          var _close1 = document.querySelector("#navigation_close");
          _close1.addEventListener("click", function () {
            document.querySelector('#navigation').style.width = "0";
            document.querySelector('#navi-bg-pc').style.display = "none";
          });

          // -------------------------------------------------------------------------

          // ---------------------------------
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      // -------------------------------------------------------------------------
      // -------------------------------------------------------------------------
      return;
    }
  }
};






// 하다하다 검색용 스와이퍼

var keywords = new Swiper('.keyword', {
  slidesPerView: 2.5,
  spaceBetween: 50,
  pagination: {
    el: '.key-pag',
    clickable: true,
  },
  loop: true,
  // pagination: {
  //   el: '.reco-pag',
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".key-n",
    prevEl: ".key-p",
  },
  breakpoints: {
    866: {
      slidesPerView: 3.5, //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
  },
});


// 메인 스와이퍼

var mains = new Swiper('.main_pic', {
  clickable: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  // effect: 'fade',
  pagination: {
    el: '.main-pag',
    clickable: true,
  },
  navigation: {
    nextEl: ".main-n",
    prevEl: ".main-p",
  },
  breakpoints: {
    866: {
      slidesPerView: 1, //브라우저가 768보다 클 때
      spaceBetween: 0,
      centeredSlides: true,
    },
  },
});



var models = new Swiper('.models', {
  // spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  // effect: 'fade',
  pagination: {
    el: '.model-pag',
    clickable: true,
  },
  navigation: {
    nextEl: ".model-n",
    prevEl: ".model-p",
  },
  breakpoints: {
    866: {
      slidesPerView: 3, //브라우저가 768보다 클 때
      spaceBetween: 20,
      centeredSlides: true,
    },
  },
});


var appendNumber = 3;
var prependNumber = 1;
var mimgs = new Swiper('.mimgs', {
  // spaceBetween: 10,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.mimg-pag',
    clickable: true,
  },
  breakpoints: {
    866: {
      slidesPerView: 1, //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
  },

});


var justs = new Swiper('.justs', {
  // spaceBetween: 10,
  loop: true,
  // effect: 'fade',
  pagination: {
    el: '.just-pag',
    clickable: true,
  },
  navigation: {
    nextEl: ".just-n",
    prevEl: ".just-p",
  },
  breakpoints: {
    866: {
      slidesPerView: 3, //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
  },

});



var choices = new Swiper('.choices', {
  // spaceBetween: 10,
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.choices-pag',
    clickable: true,
  },

});

var recommend = new Swiper('.reco', {
  slidesPerView: 1,
  loop: true,
  // pagination: {
  //   el: '.reco-pag',
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".reco-n",
    prevEl: ".reco-p",
  },
  breakpoints: {
    866: {
      slidesPerView: 3, //브라우저가 768보다 클 때
      spaceBetween: 10,
    },
  },

});


var discover = new Swiper('.dis', {
  slidesPerView: 2,
  pagination: {
    el: '.dis-pag',
    clickable: true,
  },
  loop: true,
  // pagination: {
  //   el: '.reco-pag',
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".dis-n",
    prevEl: ".dis-p",
  },
  breakpoints: {
    866: {
      slidesPerView: 4, //브라우저가 768보다 클 때
      spaceBetween: 10,
    },
  },

});





// 모달스
// 모달창 열기 이벤트
$("#product_button").on("click", function () {
  $("#overlay").css({
    visibility: "visible",
    opacity: 1
  });
});

$("#product_button2").on("click", function () {
  $("#overlay").css({
    visibility: "visible",
    opacity: 1
  });
});

$("#product_button3").on("click", function () {
  $("#overlay").css({
    visibility: "visible",
    opacity: 1
  });
});

$("#product_button4").on("click", function () {
  $("#overlay").css({
    visibility: "visible",
    opacity: 1
  });
});

// 모달창 닫기 이벤트
$(".product_close").on("click", function () {
  $("#overlay").css({
    visibility: "hidden",
    opacity: 0
  });
});

$(".product_close2").on("click", function () {
  $("#overlay").css({
    visibility: "hidden",
    opacity: 0
  });
});


$(document).on("click", function (e) {
  if ($("#overlay").is(e.target)) {
    $("#overlay").css({
      visibility: "hidden",
      opacity: 0
    });
  }
});

// 탭변경 시작
function openOption(evt, optionName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("chos");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tabmenu-color", "");
  }
  document.getElementById(optionName).style.display = "block";
  evt.currentTarget.className += " tabmenu-color";
};


// 아코디언 시작
function collapse(element) {
  var before = document.getElementsByClassName("active")[0] // 기존에 활성화된 버튼
  if (before && document.getElementsByClassName("active")[0] != element) { // 자신 이외에 이미 활성화된 버튼이 있으면
    before.nextElementSibling.style.maxHeight = null; // 기존에 펼쳐진 내용 접고
    before.classList.remove("active"); // 버튼 비활성화
  }
  element.classList.toggle("active"); // 활성화 여부 toggle

  var content = element.nextElementSibling;
  if (content.style.maxHeight != 0) { // 버튼 다음 요소가 펼쳐져 있으면
    content.style.maxHeight = null; // 접기
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; // 접혀있는 경우 펼치기
  }
};


// 퍼체이스 컬러선택 스크립트2 망한듯

// const colorTextContainer = document.getElementById("color-text-container");
// const colorTextBoxes = colorTextContainer.getElementsByClassName("color-text-box");
// const colorButtonContainer = document.getElementById("color-button-container");
// const colorButtons = colorButtonContainer.getElementsByTagName("button");

// // 각 버튼에 클릭 이벤트를 추가합니다.
// for (let i = 0; i < colorButtons.length; i++) {
//   const colorButton = colorButtons[i];
//   colorButton.addEventListener("click", function () {
//     // 클릭된 버튼과 해당하는 텍스트의 인덱스를 계산합니다.
//     const index = i;
//     const textIndex = index;

//     // 이전에 활성화된 텍스트를 비활성화합니다.
//     for (let j = 0; j < colorTextBoxes.length; j++) {
//       const colorTextBox = colorTextBoxes[j];
//       if (colorTextBox.classList.contains("colorActive")) {
//         colorTextBox.classList.remove("colorActive");
//       }
//     }
//     // 새로운 텍스트를 활성화합니다.
//     const colorTextToShow = colorTextBoxes[textIndex];
//     colorTextToShow.classList.add("colorActive");
//   });
// }

// 퍼체이스 박스 체크 스크립트

function toggleCheckbox(box) {
  var checkbox = box.querySelector('input[type="checkbox"]');

  checkbox.checked = !checkbox.checked;

  // 체크박스의 체크 상태에 따라 박스 스타일 변경
  if (checkbox.checked) {
    box.classList.add("box-checked");
  } else {
    box.classList.remove("box-checked");
  }
}

// 퍼체이스 버튼 누르면 위치 이동 스크립트



// 계산기 테스트


  // 헤더 스르륵

  var lastScrollTop = 0;

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop(); /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 수직 위치를 정합니다. */
    // scrollTop - 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정하는 메소드

    if (scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
      if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
        /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
        /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
        $(".scroll_01").css("top", "-100px");
      } else {
        $(".scroll_01").css("top", "0px");
      }

      lastScrollTop = scrollTop;
    }

    $(".content").each(function () {
      var contentIndex = $(this).attr("id");
      if (scrollTop >= $(this).offset().top) {
        $(".scroll_03 a").removeClass("on");
        $(".scroll_03 a[href=#" + contentIndex + "]").addClass("on");
      }
    })
  });


  // header test ing delete it later 

  $(function() {
    // 현재 페이지 URL과 메뉴 항목의 href 속성을 비교하여 일치하면 해당 메뉴 항목에 "active" 클래스를 추가
    $('.nav-link').each(function() {
      if ($(this).attr('href') === window.location.pathname) {
        $(this).addClass('nav-active');
      }
    });
  });