<!doctype html>
<html lang="en">
  <head>
    <?php include("header-title.php");?>
  </head>
  <body>
    <div class="wp" data-page="index">
      <h1 class="sr-only">朱啟助 繪旅行</h1>
      
      <!-- 首頁 top < 10 導覽列 -->
      <?php include("menu.php");?>
      
      <!-- 首頁 top > 10 導覽列 (通用內頁導覽列)) -->
      <?php include("navbar.php");?>



      <!-- Banner -->
      <section class="content">
        <div class="banner">
          <div class="background-area">
            <!-- PC版背景 -->
            <div class="bg">
              <img src="./styles/images/index/bg.jpg" alt="background" class="background">
              <div class="plane">
                <img src="./styles/images/index/plane.png" alt="plane" class="planeY">
              </div>
              <img src="./styles/images/index/clouds.png" alt="clouds" class="clouds">
              <img src="./styles/images/index/tree.png" alt="tree" class="tree">
              <img src="./styles/images/index/house.png" alt="house" class="house">
              <a class="balloon link1" href="lesson"></a>
              <a class="balloon link2" href="news"></a>
              <a class="balloon link3" href="works"></a>
              <a class="balloon link4" href="product"></a>
              <a class="logo" href="./"></a>
              <a class="balloon link5" href="contact"></a>
              <img src="./styles/images/index/people.png" alt="people" class="people">
            </div>


            <!-- 手機版背景 -->
            <div class="phone-bg"> 
              <img src="./styles/images/index/phone-sky.png" alt="phone sky" class="phone-sky">
              <div class="phone-logo">
                <img src="./styles/images/logo-word-vertical.png" alt="phone logo main" class="phone-logo-main">
                <img src="./styles/images/index/logo.png" alt="phone logo secondary" class="phone-logo-secondary">
              </div>
              <img src="./styles/images/index/phone-bg.png" alt="phone background" class="phone-background">
            </div>


            <!-- 文字區塊 -->
            <div class="text-area text-vertical-rl">
              <div class="text-wrap">
                <h2 class="heading2"><img src="./styles/images/index/index_article_title.png" draggable="false" alt="繪旅行"><span class="sr-only">繪旅行</span></h2>
                <article class="article wow">
                    <h3 class="heading3">Art’s Painting Travel</h3>
                    <p>旅行畫圖可以很輕鬆，<br>每個人都會，都能做的事。<br>畫圖並不是為了<br>要創作一幅不朽名作，<br>而僅是為了記錄足跡。<br>不論任何風格，<br>都是個人最有特色和最好的紀念。</p>
                </article>
                <div class="phone-people-area wow animated">
                  <a class="balloon link5" href="contact"></a>
                  <img src="./styles/images/index/people.png" alt="people" class="people">
                </div>
                <article class="article wow animated">
                    <h3 class="heading3">contact</h3>
                    <nav class="contact-nav">
                      <h3 class="sr-only">聯絡我們</h3><!-- sr-only 關鍵字層級用 -->
                      <ul class="list-unstyled">
                        <li class="contact-item">
                          <a href="https://goo.gl/maps/wuMwK1kfhPJ2">南投縣埔里鎮向善路126號</a>
                        </li>
                        <li class="contact-item">
                          <a href="tel:0939-039459">0939-039459</a>
                        </li>
                      </ul>
                    </nav>
                    <div class="copyright">
                      <p>COPYRIGHT © 2018 朱啟助</p>
                      <p><a href="http://www.feelingdesign.com.tw/">網頁設計~感覺設計</a></p>
                    </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>



      <!-- 預留位置 -->
      <!-- <section class="news text-center">
        預 <br>
        留 <br>
        位 <br>
        置 <br>
        。 <br>
      </section> -->



      <!-- Footer -->
      <footer class="footer">
        <div class="footer-bg jqimgFill wow">
          <img src="./styles/images/footer/footer-bg.png" alt="footer bg">
        </div>
        <div class="text-area">
          <div class="text-wrap">
            <article class="article">
              <h3 class="heading3">contact</h3>
              <nav class="contact-nav">
                <h3 class="sr-only">聯絡我們</h3><!-- sr-only 關鍵字層級用 -->
                <ul class="list-unstyled">
                  <li class="contact-item">
                    <a href="https://goo.gl/maps/wuMwK1kfhPJ2">南投縣埔里鎮向善路126號</a>
                  </li>
                  <li class="contact-item">
                    <a href="tel:0939-039459">0939-039459</a>
                  </li>
                </ul>
              </nav>
              <div class="copyright">
                <p>COPYRIGHT © 2018 朱啟助</p>
                <p><a href="http://www.feelingdesign.com.tw/">網頁設計~感覺設計</a></p>
              </div>
            </article>
          </div>
        </div>
      </footer>



    </div>

    <?php include("footer-js.php");?>
  </body>
</html>