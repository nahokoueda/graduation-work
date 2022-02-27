<?php 
    // フォームのボタンが押されたら
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // フォームから送信されたデータを各変数に格納
        $radioChoice = $_POST["radioChoice"];
        $name = $_POST["name"];
        $furigana = $_POST["furigana"];
        $tel = $_POST["tel"];
        $email = $_POST["email"];
        $emailCheck = $_POST["emailCheck"];
        $message  = $_POST["message"];
    }

    // 送信ボタンが押されたら
    if (isset($_POST["submit"])) {
        // 送信ボタンが押された時に動作する処理をここに記述する
            
        // 日本語をメールで送る場合のおまじない
            mb_language("ja");
        mb_internal_encoding("UTF-8");
        
        //mb_send_mail("kanda.it.school.trial@gmail.com", "メール送信テスト", "メール本文");

            // 件名を変数subjectに格納
            $subject = "［自動送信］お問い合わせ内容の確認";

            // メール本文を変数bodyに格納
        $body = <<< EOM
{$name}　様

お問い合わせありがとうございます。
以下のお問い合わせ内容を、メールにて確認させていただきました。

===================================================
【 お問い合わせ項目 】 
{$radioChoice}

【 お名前 】 
{$name}

【 ふりがな 】 
{$furigana}

【 電話番号 】 
{$tel}

【 メールアドレス 】 
{$email}

【 メールアドレスの確認 】 
{$emailCheck}

【 内容 】 
{$message}
===================================================

内容を確認のうえ、回答させて頂きます。
しばらくお待ちください。
EOM;
        
        // 送信元のメールアドレスを変数fromEmailに格納
        $fromEmail = "blue-forest.et.apple@hotmail.co.jp";

        // 送信元の名前を変数fromNameに格納
        $fromName = "お問い合わせテスト";

        // ヘッダ情報を変数headerに格納する      
        $header = "From: " .mb_encode_mimeheader($fromName) ."<{$fromEmail}>";

        // メール送信を行う
        mb_send_mail($email, $subject, $body, $header);

        // サンクスページに画面遷移させる
        header("Location: http://testapp.hippy.jp/contact/thanks.php");
        exit;
    }

    // echo($email);
?>



<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no">
    <title>Contact-confirm</title>
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/contact-confirm.css" />
    <link
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://use.typekit.net/iei0ufy.css" />
    <link rel="stylesheet" href="https://use.typekit.net/ats4pay.css" />
    <link rel="stylesheet" href="https://use.typekit.net/iei0ufy.css" />
  </head>
  <body>
    <header>
      <div class="header-container">
        <a href="index.html">
          <figure><img src="img/logo.png" alt="ロゴ１" /></figure>
        </a>
        <div id="open-button" class="open-button"><span></span></div>
        <nav id="nav">
          <div class="nav-wrapper">
            <div class="nav-list-area">
              <ul class="nav-containar">
                <li>
                  <a href="index.html#Reserve">
                    <div class="nav-containar__child">
                      <div class="nav-text">
                        <p>ご予約</p>
                        <p></p>
                        <p>Reserve</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index.html#concept">
                    <div class="nav-containar__child">
                      <div class="nav-text">
                        <p>コンセプト</p>
                        <p></p>
                        <p>Concept</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="menu.html">
                    <div class="nav-containar__child">
                      <div class="nav-text border-none">
                        <p>メニュー＆料金</p>
                        <p></p>
                        <p>Menu & Price</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <ul class="nav-containar">
                <li>
                  <a href="gallery.html">
                    <div class="nav-containar__child">
                      <div class="nav-text">
                        <p>スタイルギャラリー</p>
                        <p></p>
                        <p>Style Gallery</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index.html#stylist">
                    <div class="nav-containar__child">
                      <div class="nav-text">
                        <p>スタイリスト</p>
                        <p></p>
                        <p>Stylist</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index.html#calendar">
                    <div class="nav-containar__child">
                      <div class="nav-text border-none">
                        <p>カレンダー</p>
                        <p></p>
                        <p>Calendar</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <ul class="nav-containar">
                <li>
                  <a href="index.html#news">
                    <div class="nav-containar__child border-underline">
                      <div class="nav-text">
                        <p>お知らせ</p>
                        <p></p>
                        <p>News</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="contact.html" target="”_blank”" rel="”noopener”">
                    <div class="nav-containar__child border-underline">
                      <div class="nav-text">
                        <p>お問合せ</p>
                        <p></p>
                        <p>Contact</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index.html#access">
                    <div class="nav-containar__child border-underline">
                      <div class="nav-text border-none">
                        <p>アクセス</p>
                        <p></p>
                        <p>Access</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="sns-area00">
                <a
                  href="https://www.instagram.com/hair_room_comes/"
                  target="”_blank”"
                  rel="”noopener”"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter-square"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <section class="contact-relative">
        <div class="contact-bgArea">
          <div class="row">
            <h1>Contact</h1>
            <p>お問い合わせフォーム</p>
          </div>
        </div>
      </section>
      <section class="checkArea row">
        <div class="check-numberArea">
          <ul>
            <li>01<span> 入力 </span></li>
            <div></div>
            <li>02<span> 確認 </span></li>
            <div></div>
            <li>03<span> 完了 </span></li>
          </ul>
        </div>
      </section>
      <section class="attention-area">
        <div class="attention-wrapper">
          <div class="attention-text">
            <h3>内容確認</h3>
            <form action="contact-thanks.php" method="post">
                <input type="hidden" name="radioChoice" value="<?php echo $radioChoice; ?>">
                <input type="hidden" name="name" value="<?php echo $name; ?>">
                <input type="hidden" name="furigana" value="<?php echo $furigana; ?>">
                <input type="hidden" name="tel" value="<?php echo $tel; ?>">
                <input type="hidden" name="email" value="<?php echo $email; ?>">
                <input type="hidden" name="emailCheck" value="<?php echo $emailCheck; ?>">
                <input type="hidden" name="$message" value="<?php echo $$message; ?>">
                <p>お問い合わせ内容はこちらで宜しいでしょうか？<br>よろしければ「送信する」ボタンを押して下さい。</p>
                <div>
                    <div>
                        <label>お問い合わせ項目</label>
                        <p><?php echo $radioChoice; ?></p>
                    </div>
                    <div>
                        <label>お名前</label>
                        <p><?php echo $name; ?></p>
                    </div>
                    <div>
                        <label>ふりがな</label>
                        <p><?php echo $furigana; ?></p>
                    </div>
                    <div>
                        <label>電話番号</label>
                        <p><?php echo $tel; ?></p>
                    </div>
                    <div>
                        <label>メールアドレス</label>
                        <p><?php echo $email; ?></p>
                    </div>
                    <div>
                        <label>メールアドレスの確認</label>
                        <p><?php echo $emailCheck; ?></p>
                    </div>
                    <div>
                        <label>お問い合わせ内容</label>
                        <p><?php echo nl2br($message); ?></p>
                    </div>
                </div>
                <input class="input-submit" type="button" value="内容を修正する" onclick="history.back(-1)">
                <button type="submit" name="submit">送信する</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="filiter-bg">
        <div class="footer-logo">
          <figure>
            <a href="#"><img src="img/logo2.png" alt="ロゴ２" /></a>
          </figure>
        </div>
        <ul>
          <li>HAIR ROOM COMES</li>
          <li>tel:044-455-4594</li>
        </ul>
        <div class="sns-area">
          <a
            href="https://www.instagram.com/hair_room_comes/"
            target="”_blank”"
            rel="”noopener”"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter-square"></i>
          </a>
        </div>
        <small>©︎ HAIR ROOM COMES</small>
      </div>
      <!-- <a href="#">
      <figure class="toTop">
        <img src="img/toTop-gray.svg" alt="toTop" />
      </figure>
    </a> -->
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/common.js"></script>
    <script src="js/index.js"></script>
  </body>
</html>
