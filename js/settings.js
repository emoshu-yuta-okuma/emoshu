let body = document.body;
let toggleBtn = document.querySelector('.toggle-btn');
let themeSwitch = document.querySelector('.theme-switch');
let missionImg = document.querySelector('.mission-img');
let currentTheme = localStorage.getItem('currentTheme');
const lightParticles = '#363C49';
const darkParticles = '#F9F9F9';
let lightTheme = true;

if (currentTheme) {
  body.classList.add('dark-theme');
  themeSwitch.classList.add('dark-theme');
  missionImg.classList.add('dark-theme');

  lightTheme = false;
}

toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
  themeSwitch.classList.toggle('dark-theme');
  missionImg.classList.toggle('dark-theme');

  lightTheme = !lightTheme;
  
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('currentTheme', 'themeActive');
  } else {
    localStorage.removeItem('currentTheme');
  }

  if (!lightTheme) {
    $.each(pJSDom[0].pJS.particles.array, function(i,p){
      pJSDom[0].pJS.particles.array[i].color.value = darkParticles;
      pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(darkParticles);
      pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(darkParticles);
    });
  } else {
    $.each(pJSDom[0].pJS.particles.array, function(i,p){
      pJSDom[0].pJS.particles.array[i].color.value = lightParticles;
      pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(lightParticles);
      pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(lightParticles);
    });
  }
});

if (currentTheme) {
  particlesJS("particles-js", {
    "particles":{
    //シェイプの設定「線を繋ぐ丸や三角形などのこと」
      "number":{
        "value": 60,           //シェイプの数
        "density":{
          "enable":true,      //シェイプの密集度の変更
          "value_area":600    //密集度
        }
      },
      "color":{
        "value":"#F9F9F9"     //シェイプの色
      },
      "shape":{
        "type":"circle",      //形『circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像』
        "stroke":{
          "width":0,          //外線の太さ
          "color":"#F9F9F9"   //外線の色
        },
        // polygon選択時
        "polygon":{
          "nb_sides":5       //何角形か
        },
        "image":{
          "src":"img/kaneki01.png",
          "width":100,
          "height":100
        }
      },
      "opacity":{
        "value":1,          //透明度
        "random":true,       //透明度ランダム
        "anim":{
          "enable":false,     //透明度のアニメーションさせるかどうか
          "speed":1,          //アニメーションのスピード
          "opacity_min":0.3,  //透明度の最小値
          "sync":false        //シェイプを同時にアニメーションさせるかどうか
        }
      },
      "size":{
        "value":7,            //シェイプの大きさ
        "random":true,        //大きさランダム
        "anim":{
          "enable":false,     //大きさアニメーション
          "speed":40,         //スピード
          "size_min":0.1,     //最小値
          "sync":false        //同時にアニメーションするかどうか
        }
      },
      // 線の設定
      "line_linked":{
        "enable":true,        //線を表示するかどうか
        "distance":150,       //点と点の間隔の距離
        "color":"#F9F9F9",    //線の色
        "opacity":0.4,        //透明度
        "width":1             //太さ
      },
      // 動きの設定
      "move":{
        "enable":true,        //シェイプの動くスピード
        "speed":3,            //個々の動きを止めるかどうか
        "direction":"none",   ////エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
        "random":false,
        "straight":false,     //マウスオーバーでのみ動く
        "out_mode":"out",     //エリア外に出たシェイプの動き(out、bounceより選択)
        "bounce":false,
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":1200
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        //マウスオーバー時
        "onhover":{
          "enable":true,        //マウスオーバーの許可
          "mode":"repulse"      //オーバー時の動き『grab(集まる)、repulse(逃げる)、bubble(シェイプが大きくなる)』
        },
        "onclick":{
          "enable":true,        //クッリクの許可
          "mode":"repulse"      //クリック時の動き『grab、repulse、bubble、push(増殖)、remove(死滅)』
        },
      },
      //カーソルとシェイプの間の線
      "modes":{
        "grab":{
          "distance":400,       //カーソルからの距離
          "line_linked":{
            "opacity":1
          }
        },
        // 膨張
        "bubble":{
          "distance":400,       //カーソルからの距離
          "size":40,            //膨張する大きさ
          "duration":2,         //継続時間(クリック時のみ)
          "opacity":8,
          "speed":3            //膨張スピード
        },
        // カーソルから逃げる
        "repulse":{
          "distance":200,     //距離
          "duration":0.4
        },
        "push":{
          "particles_nb":4    //増える数
        },
        "remove":{
          "particles_nb":2    //消える数
        }
      }
    },
    "retina_detect":true,      //Retina Displayを対応
    "resize":true              //canvasのサイズにあらせて変更する
  });
} else {
  particlesJS("particles-js", {
    "particles":{
    //シェイプの設定「線を繋ぐ丸や三角形などのこと」
      "number":{
        "value": 60,           //シェイプの数
        "density":{
          "enable":true,      //シェイプの密集度の変更
          "value_area":600    //密集度
        }
      },
      "color":{
        "value":"#363C49"     //シェイプの色
      },
      "shape":{
        "type":"circle",      //形『circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像』
        "stroke":{
          "width":0,          //外線の太さ
          "color":"#363C49"   //外線の色
        },
        // polygon選択時
        "polygon":{
          "nb_sides":5       //何角形か
        },
        "image":{
          "src":"img/kaneki01.png",
          "width":100,
          "height":100
        }
      },
      "opacity":{
        "value":1,          //透明度
        "random":true,       //透明度ランダム
        "anim":{
          "enable":false,     //透明度のアニメーションさせるかどうか
          "speed":1,          //アニメーションのスピード
          "opacity_min":0.3,  //透明度の最小値
          "sync":false        //シェイプを同時にアニメーションさせるかどうか
        }
      },
      "size":{
        "value":7,            //シェイプの大きさ
        "random":true,        //大きさランダム
        "anim":{
          "enable":false,     //大きさアニメーション
          "speed":40,         //スピード
          "size_min":0.1,     //最小値
          "sync":false        //同時にアニメーションするかどうか
        }
      },
      // 線の設定
      "line_linked":{
        "enable":true,        //線を表示するかどうか
        "distance":150,       //点と点の間隔の距離
        "color":"#363C49",    //線の色
        "opacity":0.4,        //透明度
        "width":1             //太さ
      },
      // 動きの設定
      "move":{
        "enable":true,        //シェイプの動くスピード
        "speed":3,            //個々の動きを止めるかどうか
        "direction":"none",   ////エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
        "random":false,
        "straight":false,     //マウスオーバーでのみ動く
        "out_mode":"out",     //エリア外に出たシェイプの動き(out、bounceより選択)
        "bounce":false,
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":1200
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        //マウスオーバー時
        "onhover":{
          "enable":true,        //マウスオーバーの許可
          "mode":"repulse"      //オーバー時の動き『grab(集まる)、repulse(逃げる)、bubble(シェイプが大きくなる)』
        },
        "onclick":{
          "enable":true,        //クッリクの許可
          "mode":"repulse"      //クリック時の動き『grab、repulse、bubble、push(増殖)、remove(死滅)』
        },
      },
      //カーソルとシェイプの間の線
      "modes":{
        "grab":{
          "distance":400,       //カーソルからの距離
          "line_linked":{
            "opacity":1
          }
        },
        // 膨張
        "bubble":{
          "distance":400,       //カーソルからの距離
          "size":40,            //膨張する大きさ
          "duration":2,         //継続時間(クリック時のみ)
          "opacity":8,
          "speed":3            //膨張スピード
        },
        // カーソルから逃げる
        "repulse":{
          "distance":200,     //距離
          "duration":0.4
        },
        "push":{
          "particles_nb":4    //増える数
        },
        "remove":{
          "particles_nb":2    //消える数
        }
      }
    },
    "retina_detect":true,      //Retina Displayを対応
    "resize":true              //canvasのサイズにあらせて変更する
  });
}