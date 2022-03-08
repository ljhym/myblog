import Mock from "mockjs";

Mock.mock("/api/index", "get", () => {
    return {
        status: 200,
        data: Mock.mock({
            "gridarr|8": [{
                img: Mock.Random.image("50x50"),
                txt: Mock.mock("@ctitle"),
            }, ],
            "dotarr|3-6": [{
                img: Mock.Random.image("375x150"),
                txt: Mock.mock("@ctitle"),
            }, ],
            "listarr|6-10": [{
                img: Mock.Random.image("50x50"),
                txt: Mock.mock("@ctitle"),
            }, ],
        }),
    };
});
Mock.mock("/api/products", "get", () => {
    return {
        "result": "ok",
        "list": [{
            "id": 7589,
            "title": "GUCCI 古驰新款女包",
            "imgsrc": "./imgs/bag.png",
            "price": 17899,
            "modelPath": "./files/gltf/",
            "modelName": "bag2.glb",
            "desc": [{
                "title": "与一款全新的邮差包设计。",
                "content": "该系列手袋同时推出摩登廓形的水桶包款式"
            }, {
                "title": "向60年前古驰的经典手袋致敬。",
                "content": "Gucci 1955马衔扣系列手袋延续经典手袋线条与造型"
            }, {
                "title": "手袋结构设计精巧",
                "content": "搭配可调节长度的肩带，肩背或斜挎皆宜。"
            }, {
                "title": "GUCCI 1955马衔扣系列手袋",
                "content": "标志性的马衔扣设计源于马术运动，由金属双环和一条衔链组合而成。"
            }]
        }, 
        // {
        //     "id": 7590,
        //     "title": "Macbook Pro",
        //     "imgsrc": "./imgs/macpro.jpg",
        //     "price": 25899,
        //     "modelPath": "./files/gltf/",
        //     "modelName": "Macbookpro2.glb",
        //     "desc": [{
        //         "title": "超高速M1 Pro和M1 Max芯片",
        //         "content": "带来颠覆性表现和惊人续航"
        //     }, {
        //         "title": "炫目的Liquid视网膜XDR显示屏",
        //         "content": "Macbookpro各类强大端口也都整装就位"
        //     }, {
        //         "title": "战力更猛，耐力也更强！",
        //         "content": "无论是剪辑8K视频、编译代码都能随时随地轻松搞定"
        //     }, {
        //         "title": "Pro到MAX，霸气不封顶",
        //         "content": "图形处理器速度最高提升至4倍，机器学习性能提升至5倍"
        //     }]
        // },
         {
            "id": 7591,
            "title": "水晶凉鞋女细跟",
            "imgsrc": "./imgs/womenshoes.jpg",
            "price": 17899,
            "modelPath": "./files/gltf/",
            "modelName": "shoes.glb",
            "desc": [{
                "title": "白变女神季",
                "content": "性感潮品、优雅轻淑范！"
            }, {
                "title": "舒适、焕新",
                "content": "手感光滑、富有弹性、舒适一整天"
            }, {
                "title": "个性、魅力",
                "content": "水晶搭配金属，凸显柔美气质"
            }, {
                "title": "全透、高端水晶",
                "content": "每一处的细节，都很到位!"
            }]
        }],
        "hdr": ["000", "080", "079", "077", "076", "067"]
    }
});
Mock.mock("/api/news/article", "get", () => {
    return {
        status: 200,
        data: {
            title: "哈哈哈哈",
        },
    };
});
Mock.mock("/api/homepage", "get", () => {
    return {
        "banner": [{
            "bg_color": "#E51144",
            "end_time": "2022-01-31",
            "gender": 0,
            "link": "product",
            "model": "",
            "mpm_link": "/pages/dcl_before_order/goodList/goodList?category_link=N-18zo2do",
            "picture_desktop": "s904168",
            "picture_mobile": "s904169",
            "price_color": "",
            "season": "All",
            "sport": "Hiking",
            "start_time": "2022-01-06",
            "sub_title": "鼠标滚动展示商品",
            "text_color": "white",
            "title": "THREE打造3D沉浸式商城",
            "type": "campaign",
            "_id": "61d6afe3b79e1800138fb197",
            "imgsrc": "homeimg/banner.jpg"
        }, {
            "bg_color": "#2e939a",
            "end_time": "2022-01-31",
            "gender": 0,
            "link": "threehome",
            "model": "",
            "mpm_link": "/pages/dcl_before_order/goodList/goodList?hasSearch=yes&keyword=%E5%84%BF%E7%AB%A5",
            "picture_desktop": "s904164",
            "picture_mobile": "s904163",
            "price_color": "",
            "season": "All",
            "sport": "Cycling",
            "start_time": "2022-01-06",
            "sub_title": "星河",
            "text_color": "white",
            "title": "粒子星河",
            "type": "campaign",
            "_id": "61d6b08db79e1800138fb198",
            "imgsrc": "homeimg/banner3.jpg"
        }, {
            "bg_color": "#d78640",
            "end_time": "2022-01-31",
            "gender": 2,
            "link": "scrollpage",
            "model": "8641243",
            "mpm_link": "/pages/dcl_before_order/goodList/goodList?hasSearch=yes&keyword=%E5%81%A5%E8%BA%AB%E8%A3%85%E5%A4%87&Ndrc=2",
            "picture_desktop": "s904166",
            "picture_mobile": "s904165",
            "price_color": "",
            "season": "All",
            "sport": "Yoga",
            "start_time": "2022-01-06",
            "sub_title": "滚屏特效",
            "text_color": "white",
            "title": "GSAP滚屏特效",
            "type": "sport",
            "_id": "61d6b1c3b79e1800138fb199",
            "display_price": [79.9],
            "list_price": ["79.9"],
            "name": "仰卧起坐辅助器",
            "imgsrc": "homeimg/banner4.jpg"
        }, {
            "bg_color": "#bb0009",
            "end_time": "2022-01-31",
            "gender": 0,
            "link": "xuehua",
            "model": "",
            "mpm_link": "/pages/dcl_before_order/goodList/goodList?hasSearch=yes&keyword=%E7%BA%A2%E8%89%B2",
            "picture_desktop": "s904137",
            "picture_mobile": "s904167",
            "price_color": "",
            "season": "All",
            "sport": "Hiking",
            "start_time": "2022-01-06",
            "sub_title": " ",
            "text_color": "white",
            "title": " ",
            "type": "campaign",
            "_id": "61d6b216b79e1800138fb19a",
            "title": "彩色旋转雪花",
            "sub_title": "雪花",
            "mobile_hide_text": true,
            "imgsrc": "homeimg/banner2.jpg"
        }],
        "sports": [{
            "priority": 1,
            "displayName": "休闲徒步",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s845248/k$9ecc7becd540b19634332e81339e0465/menuThumbnail_hiking.jpg",
            "categoryLink": "/browse/c0-sports/c1-hiking/_/N-1obx6w9",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-hiking/c2-man/_/N-qvs25p"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-hiking/c2-women/_/N-1c01zxg"
            }, {
                "displayName": "青少年",
                "categoryLink": "/browse/c0-sports/c1-hiking/c2-children-hiking/_/N-yw9w9n"
            }]
        }, {
            "priority": 2,
            "displayName": "健身",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s858812/k$dd86201b131a0863ff87fcbd546b748f/menuThumbnail_fitness.jpg",
            "categoryLink": "/browse/c0-sports/c1-fitness/_/N-ql2hky",
            "childCategories": [{
                "displayName": "有氧健身装备",
                "categoryLink": "/browse/c0-sports/c1-fitness/c2-fitness-equipment/_/N-1lw7lni"
            }, {
                "displayName": "力量/塑形装备",
                "categoryLink": "/browse/c0-sports/c1-fitness/c2-muscle-equipment/_/N-1fl1h1c"
            }, {
                "displayName": "运动食品",
                "categoryLink": "/browse/c0-sports/c1-fitness/c2-jianshen/_/N-1h2y9r6"
            }, {
                "displayName": "男士服饰",
                "categoryLink": "/browse/c0-sports/c1-fitness/c2-men-s-fitness/_/N-tbzced"
            }, {
                "displayName": "女士服饰",
                "categoryLink": "/browse/c0-sports/c1-fitness/c2-women-fitness/_/N-fnm5kc"
            }]
        }, {
            "priority": 3,
            "displayName": "自行车",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s830258/k$747d6d4b52562b31e6aea89313f3bb63/MenuThumbnail_Cycle+new2020aw.jpg",
            "categoryLink": "/browse/c0-sports/c1-cycling/_/N-8txzvz",
            "childCategories": [{
                "displayName": "公路",
                "categoryLink": "/browse/c0-sports/c1-cycling/c2-road-cycling/_/N-11awyt7"
            }, {
                "displayName": "儿童",
                "categoryLink": "/browse/c0-sports/c1-cycling/c2-kids-learning-cycling/_/N-18eebxz"
            }, {
                "displayName": "山地",
                "categoryLink": "/browse/c0-sports/c1-cycling/c2-mountain-bike-cycling/_/N-1o6kcxr"
            }, {
                "displayName": "经典城市",
                "categoryLink": "/browse/c0-sports/c1-cycling/c2-city-cycling/_/N-13573ed"
            }, {
                "displayName": "折叠车",
                "categoryLink": "/browse/c0-sports/c1-cycling/c2-intermodel-cycling/_/N-kf6z1w"
            }, {
                "displayName": "旅行",
                "categoryLink": "/browse/c0-sports/c1-cycling/c2-hybrid-cycling/_/N-13fd5ff"
            }]
        }, {
            "priority": 4,
            "displayName": "滑雪",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805057/k$11955072bf2d33dc25878d85ffbfa1bd/menuThumbnail_skiing.jpg",
            "categoryLink": "/browse/c0-sports/c1-skiing-snowboarding-sledging/_/N-1crhzc6",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-skiing-snowboarding-sledging/c2-men/_/N-so50f8"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-skiing-snowboarding-sledging/c2-women/_/N-1ujpgrw"
            }, {
                "displayName": "青少年/婴幼儿",
                "categoryLink": "/browse/c0-sports/c1-skiing-snowboarding-sledging/c2-kids/_/N-1h81nb"
            }, {
                "displayName": "冰雪限量",
                "categoryLink": "/browse/c0-sports/c1-skiing-snowboarding-sledging/c2--/_/N-99jyye"
            }]
        }, {
            "priority": 5,
            "displayName": "足球",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805072/k$a908bc5e3be7688167337ae8e4c90187/menuThumbnail_football.jpg",
            "categoryLink": "/browse/c0-sports/c1-football/_/N-16de8ae",
            "childCategories": [{
                "displayName": "青少年",
                "categoryLink": "/browse/c0-sports/c1-football/c2-junior/_/N-nfonau"
            }, {
                "displayName": "成人",
                "categoryLink": "/browse/c0-sports/c1-football/c2-adult/_/N-1ba8flf"
            }, {
                "displayName": "PUMA",
                "categoryLink": "/browse/c0-sports/c1-football/c2-puma/_/N-1oi2603"
            }]
        }, {
            "priority": 6,
            "displayName": "篮球",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805053/k$0fb047e2ae8b0547b086970873a70dd8/menuThumbnail_basketball.jpg",
            "categoryLink": "/browse/c0-sports/c1-basketball/_/N-mosofv",
            "childCategories": [{
                "displayName": "NBA授权产品",
                "categoryLink": "/browse/c0-sports/c1-basketball/c2-nbaproducts/_/N-yz1qj2"
            }, {
                "displayName": "篮球/篮板",
                "categoryLink": "/browse/c0-sports/c1-basketball/c2-basketball/_/N-deq4vq"
            }, {
                "displayName": "运动护具",
                "categoryLink": "/browse/c0-sports/c1-basketball/c2-protect/_/N-1u17g1q"
            }, {
                "displayName": "成人服饰",
                "categoryLink": "/browse/c0-sports/c1-basketball/c2-adult/_/N-1tpeqkx"
            }, {
                "displayName": "青少年/儿童服饰",
                "categoryLink": "/browse/c0-sports/c1-basketball/c2-jr/_/N-1t7eb7w"
            }, {
                "displayName": "WILSON篮球",
                "categoryLink": "/browse/c0-sports/c1-basketball/c2-wilson/_/N-ni773r"
            }]
        }, {
            "priority": 7,
            "displayName": "高尔夫",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s830968/k$6fe48ae1a0cd3b9761bb29ccd7b5c882/menuThumbnail_golf.jpg",
            "categoryLink": "/browse/c0-sports/c1-golf/_/N-10b4wkt",
            "childCategories": [{
                "displayName": "服饰",
                "categoryLink": "/browse/c0-sports/c1-golf/c2--/_/N-1mdpymi"
            }, {
                "displayName": "球杆",
                "categoryLink": "/browse/c0-sports/c1-golf/c2-golf-clubs/_/N-c8pjy2"
            }, {
                "displayName": "球/附件",
                "categoryLink": "/browse/c0-sports/c1-golf/c2-golf-accessories/_/N-1tzwxdi"
            }]
        }, {
            "priority": 8,
            "displayName": "山地徒步",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s845247/k$0eaa8aa3aec6cd4f8bc8df7b4f203f6c/MenuThumbnail_Trekking.jpg",
            "categoryLink": "/browse/c0-sports/c1-trekking/_/N-13jdq9w",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-trekking/c2-men/_/N-43k12k"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-trekking/c2-women/_/N-x6i223"
            }]
        }, {
            "priority": 9,
            "displayName": "跑步",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s866961/k$518bb6d4afb30f9505d145106851646b/menuThumbnail_running.jpg",
            "categoryLink": "/browse/c0-sports/c1-running/_/N-4tr1ov",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-running/c2-men/_/N-fsh4n2"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-running/c2-women/_/N-1x64mx1"
            }, {
                "displayName": "青少年",
                "categoryLink": "/browse/c0-sports/c1-running/c2-junior/_/N-1c2sibb"
            }, {
                "displayName": "亚瑟士/高驰",
                "categoryLink": "/browse/c0-sports/c1-running/c2--/_/N-2sbu5f"
            }]
        }, {
            "priority": 10,
            "displayName": "帆船",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s848989/k$fdc57dd3c13b5115aa3644c471568d1d/menuThumbnail_sailing.jpg",
            "categoryLink": "/browse/c0-sports/c1-boats-sailing-dinghy-catamaran/_/N-lmqbem",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-boats-sailing-dinghy-catamaran/c2-man/_/N-gcmvrs"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-boats-sailing-dinghy-catamaran/c2-woman/_/N-1j9arv5"
            }, {
                "displayName": "青少年",
                "categoryLink": "/browse/c0-sports/c1-boats-sailing-dinghy-catamaran/c2-junior/_/N-10x02w1"
            }]
        }, {
            "priority": 11,
            "displayName": "基础健身/普拉提",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s858811/k$f604eea340f86ea76bb60e2f9c40ebc3/MenuThumbnail_Pilates.jpg",
            "categoryLink": "/browse/c0-sports/c1--/_/N-1hxlsml",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1--/c2-men/_/N-mxn42n"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1--/c2-women/_/N-1yrhgth"
            }]
        }, {
            "priority": 12,
            "displayName": "轮滑",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805074/k$24089cd1f610472194e069fc013b3c02/menuThumbnail_sport_inline.jpg",
            "categoryLink": "/browse/c0-sports/c1-inline-skate/_/N-105uk9l",
            "childCategories": [{
                "displayName": "儿童/青少年",
                "categoryLink": "/browse/c0-sports/c1-inline-skate/c2-children-junior/_/N-1dpig4w"
            }, {
                "displayName": "成人",
                "categoryLink": "/browse/c0-sports/c1-inline-skate/c2-adult/_/N-t5k2dh"
            }]
        }, {
            "priority": 13,
            "displayName": "健走",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s866967/k$acea10163da5e3be00b5227a282bf4fe/menuThumbnail_walking.jpg",
            "categoryLink": "/browse/c0-sports/c1-sport-walking/_/N-1aop7pv",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-sport-walking/c2-men/_/N-1i0rwuk"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-sport-walking/c2-women/_/N-l5jbqd"
            }, {
                "displayName": "青少年",
                "categoryLink": "/browse/c0-sports/c1-sport-walking/c2-junior/_/N-9v78ji"
            }]
        }, {
            "priority": 14,
            "displayName": "户外露营",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805051/k$146d9664d7ba916fb705ea67eedf136e/menuThumbnail_camping.jpg",
            "categoryLink": "/browse/c0-sports/c1-camping/_/N-r3dzgj",
            "childCategories": [{
                "displayName": "帐篷",
                "categoryLink": "/browse/c0-sports/c1-camping/c2-tents/_/N-1g27ssi"
            }, {
                "displayName": "睡袋/床垫",
                "categoryLink": "/browse/c0-sports/c1-camping/c2-matress-sleeping-bag-and-accessioes/_/N-1fxfcz9"
            }, {
                "displayName": "桌椅/灯具",
                "categoryLink": "/browse/c0-sports/c1-camping/c2-camping-furnitures-lamp-shower-equipment/_/N-u3g6op"
            }, {
                "displayName": "水壶/炊具/食品",
                "categoryLink": "/browse/c0-sports/c1-camping/c2-cookingset-bottle-lunch-box/_/N-f1fc8p"
            }, {
                "displayName": "清洁/防护",
                "categoryLink": "/browse/c0-sports/c1-camping/c2-care/_/N-ukdl6x"
            }, {
                "displayName": "风筝",
                "categoryLink": "/browse/c0-sports/c1-camping/c2-kite-boomerang-frisbees/_/N-itrt86"
            }]
        }, {
            "priority": 15,
            "displayName": "瑜伽",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s858596/k$8e3709e2910ad2bd23553c3c18a18048/menuThumbnail_yoga.jpg",
            "categoryLink": "/browse/c0-sports/c1-yoga/_/N-1429z5o",
            "childCategories": [{
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-yoga/c2-women/_/N-1572qi0"
            }, {
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-yoga/c2-men/_/N-i8vivm"
            }]
        }, {
            "priority": 16,
            "displayName": "儿童体能",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s858595/k$4fb40b7ace43a3d49fbbb9204fdf326e/MenuThumbnail_fitness_child.jpg",
            "categoryLink": "/browse/c0-sports/c1-kids-fitness/_/N-1v8f71e",
            "childCategories": [{
                "displayName": "男童",
                "categoryLink": "/browse/c0-sports/c1-kids-fitness/c2-boy-s-fitness/_/N-15ybxev"
            }, {
                "displayName": "女童",
                "categoryLink": "/browse/c0-sports/c1-kids-fitness/c2-girl-fitness/_/N-1cfrg3w"
            }, {
                "displayName": "幼童",
                "categoryLink": "/browse/c0-sports/c1-kids-fitness/c2-baby-fitness/_/N-bh1xa2"
            }]
        }, {
            "priority": 17,
            "displayName": "荒野探险",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s801966/k$fb775cec5a0c091a7db537a7ff671369/menuThumbnail_exploring.jpg",
            "categoryLink": "/browse/c0-sports/c1-wildlife-watching/_/N-1preeb",
            "childCategories": [{
                "displayName": "成人服装",
                "categoryLink": "/browse/c0-sports/c1-wildlife-watching/c2-wildlife-watching-clothing/_/N-zzlb44"
            }, {
                "displayName": "鞋靴",
                "categoryLink": "/browse/c0-sports/c1-wildlife-watching/c2-boots-shoes/_/N-p44m3r"
            }, {
                "displayName": "青少年服装",
                "categoryLink": "/browse/c0-sports/c1-wildlife-watching/c2-huntingjr/_/N-dxq2xl"
            }, {
                "displayName": "背包/望远镜/附件",
                "categoryLink": "/browse/c0-sports/c1-wildlife-watching/c2-wildlife-watching-accessories/_/N-1bqxnnr"
            }]
        }, {
            "priority": 18,
            "displayName": "羽毛球",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805054/k$c2e0cea5f47cca449082a244d228e5ec/menuThumbnail_badminton.jpg",
            "categoryLink": "/browse/c0-sports/c1-badminton/_/N-n8hm9u",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-badminton/c2-men/_/N-xc09ne"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-badminton/c2-women/_/N-10rwdug"
            }, {
                "displayName": "青少年",
                "categoryLink": "/browse/c0-sports/c1-badminton/c2-kids/_/N-gz189o"
            }, {
                "displayName": "热销推荐",
                "categoryLink": "/browse/c0-sports/c1-badminton/c2--/_/N-nx8961"
            }]
        }, {
            "priority": 19,
            "displayName": "网球",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805067/k$0ee5107f957cb35de5bd5c752c199d65/menuThumbnail_tennis.jpg",
            "categoryLink": "/browse/c0-sports/c1-tennis/_/N-1v3fml0",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-tennis/c2-men/_/N-1ru2xx3"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-tennis/c2-women/_/N-1t9ddtn"
            }, {
                "displayName": "青少年",
                "categoryLink": "/browse/c0-sports/c1-tennis/c2-tennis/_/N-p25oow"
            }]
        }, {
            "priority": 20,
            "displayName": "滑板车",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805081/k$5b8eba27afcb723af16e3a071e6da543/menuThumbnail_scooter.jpg",
            "categoryLink": "/browse/c0-sports/c1-scooter/_/N-15cktlk",
            "childCategories": [{
                "displayName": "儿童/青少年",
                "categoryLink": "/browse/c0-sports/c1-scooter/c2-children-junior/_/N-1j0uwq"
            }, {
                "displayName": "成人",
                "categoryLink": "/browse/c0-sports/c1-scooter/c2-adult/_/N-66wn8"
            }]
        }, {
            "priority": 21,
            "displayName": "滑板",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805062/k$8927786b84317990ec66b10c5d3eae35/menuThumbnail_skateboard.jpg",
            "categoryLink": "/browse/c0-sports/c1-skateboard/_/N-g1au3g",
            "childCategories": [{
                "displayName": "长板/鱼板",
                "categoryLink": "/browse/c0-sports/c1-skateboard/c2-longboard-skate-cruiser/_/N-1w99e72"
            }, {
                "displayName": "活力板",
                "categoryLink": "/browse/c0-sports/c1-skateboard/c2-waveboard/_/N-1ucadaf"
            }, {
                "displayName": "滑板",
                "categoryLink": "/browse/c0-sports/c1-skateboard/c2-skateboard/_/N-a3rzua"
            }]
        }, {
            "priority": 22,
            "displayName": "游泳",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s848990/k$6c12046391d2321e0a319becb643244a/menuThumbnail_swiming.jpg",
            "categoryLink": "/browse/c0-sports/c1-swimming-aqua-aerobics-waterpolo/_/N-14ywgtp",
            "childCategories": [{
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-swimming-aqua-aerobics-waterpolo/c2-women-swim/_/N-4l7wyv"
            }, {
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-swimming-aqua-aerobics-waterpolo/c2-man-swim/_/N-9gnbee"
            }, {
                "displayName": "女童",
                "categoryLink": "/browse/c0-sports/c1-swimming-aqua-aerobics-waterpolo/c2-girl-swim/_/N-1otchax"
            }, {
                "displayName": "男童",
                "categoryLink": "/browse/c0-sports/c1-swimming-aqua-aerobics-waterpolo/c2-boy-swim/_/N-7tih5j"
            }, {
                "displayName": "婴幼儿",
                "categoryLink": "/browse/c0-sports/c1-swimming-aqua-aerobics-waterpolo/c2-baby-swim/_/N-c1cjw6"
            }, {
                "displayName": "速干毛巾",
                "categoryLink": "/browse/c0-sports/c1-swimming-aqua-aerobics-waterpolo/c2-swimming-towel/_/N-11bsodk"
            }]
        }, {
            "priority": 23,
            "displayName": "冲浪",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s848991/k$03094c6662c1f7a4ce2f6d7ce562a90a/menuThumbnail_surf.jpg",
            "categoryLink": "/browse/c0-sports/c1-surf-bodyboard-water-skiing/_/N-bpq1o2",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-surf-bodyboard-water-skiing/c2-men/_/N-33ishr"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-surf-bodyboard-water-skiing/c2-women/_/N-1ilg37e"
            }, {
                "displayName": "青少年/儿童",
                "categoryLink": "/browse/c0-sports/c1-surf-bodyboard-water-skiing/c2-youth-child/_/N-1xh49q8"
            }]
        }, {
            "priority": 24,
            "displayName": "潜水",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s879859/k$6ff9de65c4beb890d5e4f7fcad91f17a/menuThumbnail_diving.jpg",
            "categoryLink": "/browse/c0-sports/c1-diving/_/N-hr7jx4",
            "childCategories": [{
                "displayName": "浮潜",
                "categoryLink": "/browse/c0-sports/c1-diving/c2-snorkeling/_/N-elx3ql"
            }, {
                "displayName": "水肺",
                "categoryLink": "/browse/c0-sports/c1-diving/c2-scuba-diving/_/N-12cgjfq"
            }, {
                "displayName": "自由潜水",
                "categoryLink": "/browse/c0-sports/c1-diving/c2-free-diving/_/N-1achnzx"
            }]
        }, {
            "priority": 25,
            "displayName": "乒乓球",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805050/k$4e212352d0183b2e6dd6e50ff7416613/menuThumbnail_table_tennis.jpg",
            "categoryLink": "/browse/c0-sports/c1-table-tennis/_/N-3lsgki",
            "childCategories": [{
                "displayName": "训练竞技",
                "categoryLink": "/browse/c0-sports/c1-table-tennis/c2-trainning/_/N-6vnfc2"
            }, {
                "displayName": "趣味娱乐",
                "categoryLink": "/browse/c0-sports/c1-table-tennis/c2-entertainment/_/N-151tc42"
            }]
        }, {
            "priority": 26,
            "displayName": "马术",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s824425/k$f67a23f5979ee32f73fb3c403e0770c2/menuThumbnail_horse_riding.jpg",
            "categoryLink": "/browse/c0-sports/c1-horse-riding/_/N-1qumm7g",
            "childCategories": [{
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-horse-riding/c2-women-horse-rider-clothing-equipement/_/N-1qadpjf"
            }, {
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-horse-riding/c2-men-horse-rider-clothing/_/N-jcjwke"
            }, {
                "displayName": "青少年",
                "categoryLink": "/browse/c0-sports/c1-horse-riding/c2-horse-riding/_/N-b8e7wy"
            }, {
                "displayName": "马匹训练",
                "categoryLink": "/browse/c0-sports/c1-horse-riding/c2-working-horse-equipment/_/N-10ex7sn"
            }, {
                "displayName": "马匹护理",
                "categoryLink": "/browse/c0-sports/c1-horse-riding/c2-horsestable-equipment/_/N-k65308"
            }]
        }, {
            "priority": 27,
            "displayName": "钓鱼",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805079/k$689885722d689cb05a4f602ee2712582/menuThumbnail_fishing.jpg",
            "categoryLink": "/browse/c0-sports/c1-fishing/_/N-r40kl5",
            "childCategories": [{
                "displayName": "中国手竿钓装备",
                "categoryLink": "/browse/c0-sports/c1-fishing/c2-chinese-fishing-rod/_/N-19k2k97"
            }, {
                "displayName": "淡水抛竿钓装备",
                "categoryLink": "/browse/c0-sports/c1-fishing/c2-casting-rod/_/N-jznqpi"
            }, {
                "displayName": "路亚钓装备",
                "categoryLink": "/browse/c0-sports/c1-fishing/c2-lure-fishing/_/N-1a0mt83"
            }, {
                "displayName": "海钓装备",
                "categoryLink": "/browse/c0-sports/c1-fishing/c2-sea-discovery-fishing/_/N-5veqfu"
            }, {
                "displayName": "钓鱼服饰",
                "categoryLink": "/browse/c0-sports/c1-fishing/c2-fisherman-clothing/_/N-tsbmkp"
            }, {
                "displayName": "鱼竿售后配件",
                "categoryLink": "/browse/c0-sports/c1-fishing/c2--/_/N-1yk87nh"
            }]
        }, {
            "priority": 28,
            "displayName": "攀岩/高山攀登",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s568128/k$edb8731d28a45b17b7acc95b9b624ca3/menuThumbnail_climbing.jpg",
            "categoryLink": "/browse/c0-sports/c1-climbing-mountaineering/_/N-m2gjxr",
            "childCategories": [{
                "displayName": "主锁/快挂/保护器/动力绳/扁带",
                "categoryLink": "/browse/c0-sports/c1-climbing-mountaineering/c2-ropes-rock-quickdraw-rock/_/N-1fbk6dp"
            }, {
                "displayName": "头盔/安全带/辅绳/背包",
                "categoryLink": "/browse/c0-sports/c1-climbing-mountaineering/c2-helmets-harness-ropes-backpack/_/N-1ah9c62"
            }, {
                "displayName": "服装",
                "categoryLink": "/browse/c0-sports/c1-climbing-mountaineering/c2-apparels/_/N-1u55nmz"
            }, {
                "displayName": "鞋/镁粉/镁粉袋",
                "categoryLink": "/browse/c0-sports/c1-climbing-mountaineering/c2-shoes-chalk-chalk-bags/_/N-1bg1819"
            }, {
                "displayName": "冰爪/帐篷/睡袋",
                "categoryLink": "/browse/c0-sports/c1-climbing-mountaineering/c2-crampon-tent-sleepbag-slackline/_/N-1cmhg1h"
            }]
        }, {
            "priority": 29,
            "displayName": "舞蹈",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s858597/k$87da2c494d6d0ed2d9f94ed7c17723fd/menuThumbnail_dance.jpg",
            "categoryLink": "/browse/c0-sports/c1-dancing/_/N-18pk710",
            "childCategories": [{
                "displayName": "街舞",
                "categoryLink": "/browse/c0-sports/c1-dancing/c2-street-dance/_/N-19rmdqe"
            }, {
                "displayName": "现代舞",
                "categoryLink": "/browse/c0-sports/c1-dancing/c2-modern-dance/_/N-32ibq1"
            }, {
                "displayName": "芭蕾",
                "categoryLink": "/browse/c0-sports/c1-dancing/c2-ballet/_/N-1bvwh2t"
            }, {
                "displayName": "活力（有氧）舞蹈",
                "categoryLink": "/browse/c0-sports/c1-dancing/c2-fitness-dance/_/N-t1pdp3"
            }]
        }, {
            "priority": 30,
            "displayName": "拳击",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s858594/k$066197d53721a9dcc0fcfc9ad521be36/menuThumbnail_combat_sport.jpg",
            "categoryLink": "/browse/c0-sports/c1-boxing/_/N-1khg124",
            "childCategories": [{
                "displayName": "拳击沙袋",
                "categoryLink": "/browse/c0-sports/c1-boxing/c2-punchingbag-equipment-acc/_/N-1ypioh0"
            }, {
                "displayName": "头盔/附件",
                "categoryLink": "/browse/c0-sports/c1-boxing/c2-boxing-textile/_/N-nu6iq5"
            }, {
                "displayName": "拳击手套/绑带",
                "categoryLink": "/browse/c0-sports/c1-boxing/c2-glove-wraps/_/N-1boelrc"
            }, {
                "displayName": "拳击鞋服",
                "categoryLink": "/browse/c0-sports/c1-boxing/c2-boxing-textile/_/N-bqblnl"
            }]
        }, {
            "priority": 31,
            "displayName": "台球",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s648689/k$75595e3f15ccf0b0aca5f190aa050897/Sportsicon_Billards.jpg",
            "categoryLink": "/browse/c0-sports/c1-billard/_/N-10vp88j",
            "childCategories": [{
                "displayName": "台球桌",
                "categoryLink": "/browse/c0-sports/c1-billard/c2-billard-set/_/N-ew5bgu"
            }, {
                "displayName": "台球杆",
                "categoryLink": "/browse/c0-sports/c1-billard/c2-pool-cue/_/N-1dmmj20"
            }, {
                "displayName": "台球附件",
                "categoryLink": "/browse/c0-sports/c1-billard/c2-billard-accessories/_/N-67cw8i"
            }]
        }, {
            "priority": 32,
            "displayName": "飞镖",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s568122/k$e445b91ed3417209282f302eea4c546e/menuThumbnail_darts.jpg",
            "categoryLink": "/browse/c0-sports/c1-darts/_/N-o48wbo",
            "childCategories": [{
                "displayName": "镖靶",
                "categoryLink": "/browse/c0-sports/c1-darts/c2-targets/_/N-1c1a6nw"
            }, {
                "displayName": "镖",
                "categoryLink": "/browse/c0-sports/c1-darts/c2-darts/_/N-fp0e9u"
            }, {
                "displayName": "附件",
                "categoryLink": "/browse/c0-sports/c1-darts/c2-darts-accessories/_/N-2oh8gi"
            }, {
                "displayName": "黏黏球",
                "categoryLink": "/browse/c0-sports/c1-darts/c2-velcro-dartboard/_/N-1k2162s"
            }]
        }, {
            "priority": 33,
            "displayName": "射箭",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s697632/k$2ffdca7bd0a4354e8768a69b38a09253/achery+icon.jpg",
            "categoryLink": "/browse/c0-sports/c1-archery/_/N-nodt79",
            "childCategories": [{
                "displayName": "弓",
                "categoryLink": "/browse/c0-sports/c1-archery/c2-bows/_/N-1ga5h38"
            }, {
                "displayName": "箭",
                "categoryLink": "/browse/c0-sports/c1-archery/c2-arrows/_/N-rt8b6d"
            }, {
                "displayName": "箭靶",
                "categoryLink": "/browse/c0-sports/c1-archery/c2-targets/_/N-xcz7q0"
            }, {
                "displayName": "附件",
                "categoryLink": "/browse/c0-sports/c1-archery/c2-archery-accessories/_/N-ea4zi5"
            }]
        }, {
            "priority": 34,
            "displayName": "铁人三项",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s610776/k$ed881087e228b8e55972cee2fbed3cac/MenuThumbnail_triathlon.jpg",
            "categoryLink": "/browse/c0-sports/c1-triathlon/_/N-1m403ek",
            "childCategories": [{
                "displayName": "铁人三项装备",
                "categoryLink": "/browse/c0-sports/c1-triathlon/c2--/_/N-1dn9goq"
            }, {
                "displayName": "运动食品/饮料",
                "categoryLink": "/browse/c0-sports/c1-triathlon/c2--/_/N-3jac9d"
            }, {
                "displayName": "准备/恢复/按摩附件",
                "categoryLink": "/browse/c0-sports/c1-triathlon/c2--/_/N-16czd76"
            }, {
                "displayName": "防晒/晒后修复",
                "categoryLink": "/browse/c0-sports/c1-triathlon/c2-sun-protection-and-recovery/_/N-yh4cjq"
            }]
        }, {
            "priority": 35,
            "displayName": "皮划艇/桨板",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805061/k$81ce74de1b36cb8b713e3362cf15794d/menuThumbnail_canoeing.jpg",
            "categoryLink": "/browse/c0-sports/c1-kayak-stand-up-paddle/_/N-1757kjt",
            "childCategories": [{
                "displayName": "皮划艇",
                "categoryLink": "/browse/c0-sports/c1-kayak-stand-up-paddle/c2-inflatable-kayaking/_/N-102owb1"
            }, {
                "displayName": "SUP 立式桨板",
                "categoryLink": "/browse/c0-sports/c1-kayak-stand-up-paddle/c2-stand-up-paddle-accessories/_/N-1cn2doh"
            }]
        }, {
            "priority": 36,
            "displayName": "棒球",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805068/k$dd9635e12c6ba8ce859d934a10f90345/menuThumbnail_baseball.jpg",
            "categoryLink": "/browse/c0-sports/c1-baseball/_/N-s3kbly",
            "childCategories": [{
                "displayName": "棒球服/手套",
                "categoryLink": "/browse/c0-sports/c1-baseball/c2-baseball-textile/_/N-1ty8xez"
            }, {
                "displayName": "棒球棒/球",
                "categoryLink": "/browse/c0-sports/c1-baseball/c2-baseball-pad/_/N-ygog71"
            }]
        }, {
            "priority": 37,
            "displayName": "橄榄球",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s809108/k$5750b5c56b29faca6e9dbeb37bb57d3c/menuThumbnail_rugby.jpg",
            "categoryLink": "/browse/c0-sports/c1-rugby/_/N-11sx0i0",
            "childCategories": [{
                "displayName": "冰袋及护具",
                "categoryLink": "/browse/c0-sports/c1-rugby/c2-icebagsupport/_/N-dxrbdj"
            }, {
                "displayName": "青少年英式橄榄球",
                "categoryLink": "/browse/c0-sports/c1-rugby/c2-jr-rugby-sports/_/N-oaqghf"
            }, {
                "displayName": "成人英式橄榄球",
                "categoryLink": "/browse/c0-sports/c1-rugby/c2-adult-rugby-sports/_/N-r8gjnl"
            }, {
                "displayName": "美式橄榄球",
                "categoryLink": "/browse/c0-sports/c1-rugby/c2-american-football/_/N-khdqwk"
            }]
        }, {
            "priority": 38,
            "displayName": "越野跑",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s866966/k$089e78db65bd27be4e8cb1613460f517/menuThumbnail_trail_running.jpg",
            "categoryLink": "/browse/c0-sports/c1-trail-running/_/N-1quy8z9",
            "childCategories": [{
                "displayName": "男士",
                "categoryLink": "/browse/c0-sports/c1-trail-running/c2-men/_/N-ymah5k"
            }, {
                "displayName": "女士",
                "categoryLink": "/browse/c0-sports/c1-trail-running/c2-women/_/N-1wquazg"
            }]
        }, {
            "priority": 39,
            "displayName": "排球",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s568142/k$09211e5f4f89c02bdf01ca4bff6e5739/menuThumbnail_volleyball.jpg",
            "categoryLink": "/browse/c0-sports/c1-volleyball-and-beach-volleyball/_/N-ozq32b",
            "childCategories": [{
                "displayName": "室内排球",
                "categoryLink": "/browse/c0-sports/c1-volleyball-and-beach-volleyball/c2--/_/N-oxlz8e"
            }, {
                "displayName": "沙滩排球",
                "categoryLink": "/browse/c0-sports/c1-volleyball-and-beach-volleyball/c2--/_/N-1aba3o4"
            }]
        }, {
            "priority": 40,
            "displayName": "地掷球/芬兰撞柱",
            "menuThumbnail": "https://pixl.decathlon.com.cn/s805064/k$0e84bf18854f29a2b3c10dc6d4e11120/icon_petanque.jpg",
            "categoryLink": "/browse/c0-sports/c1-petanque-and-skittles/_/N-lwulwc",
            "childCategories": [{
                "displayName": "撞柱",
                "categoryLink": "/browse/c0-sports/c1-petanque-and-skittles/c2-pucks-and-skittles/_/N-w8eq5o"
            }, {
                "displayName": "小金属地掷球",
                "categoryLink": "/browse/c0-sports/c1-petanque-and-skittles/c2-bowls/_/N-oe10z6"
            }, {
                "displayName": "附件",
                "categoryLink": "/browse/c0-sports/c1-petanque-and-skittles/c2-bowls-accessories/_/N-1qhofkk"
            }]
        }],
        "service": [{
            "name": "99元免运费",
            "href": "/zh/help/articles/_/R-a-shipment-delivery",
            "picture_desktop": "https://pixl.decathlon.com.cn/s828429/service1.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s828429/service1.jpg"
        }, {
            "name": "2小时自提",
            "href": "/zh/activity/_/R-a-2H-opening",
            "picture_desktop": "https://pixl.decathlon.com.cn/s828431/service2.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s828431/service2.jpg"
        }, {
            "name": "30元礼券包",
            "href": "/zh/help/articles/_/R-a-membership",
            "picture_desktop": "https://pixl.decathlon.com.cn/s836676/service4.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s836676/service4.jpg"
        }],
        "hero": [{
            "category": "迷你蹦床",
            "name": "迷你蹦床",
            "slogen": "蹦得高 节节高",
            "text": "幼童体能迷你蹦床",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904171/k$3badcab084882df9b7bc96d20cc74c7a/电脑端-为你精选模块海报-儿童蹦床.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904172/k$c6f0d64a65eef9d7ca6678da314719ca/手机端-为你精选模块海报-儿童蹦床.jpg",
            "listing": "",
            "href": "/zh/browse/c0-sports/c1-kids-fitness/c2-baby-fitness/_/N-bh1xa2?Ndrc=1",
            "model": "8731554"
        }, {
            "category": "台球桌",
            "name": "台球桌",
            "slogen": "折叠简易 趣玩共享",
            "text": "可折叠娱乐台球桌",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904158/k$7b292343695977f7df08b860528bfdef/电脑端-为你精选模块海报-桌球.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904159/k$320c5e4f8d581bb8c5e2360a36730c1e/手机端-为你精选模块海报-桌球.jpg",
            "listing": "",
            "href": "/zh/browse/c0-sports/c1-billard/_/N-10vp88j",
            "model": "8547083"
        }, {
            "category": "迷你筋膜枪",
            "name": "迷你筋膜枪",
            "slogen": "小巧玲珑 强劲有力寒",
            "text": "迷你筋膜枪",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904156/k$a62ab8f6d01095681c94235086f020f9/电脑端-为你精选模块海报.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904157/k$2312ee17adbc37bd730eb970c65b10f6/手机端-为你精选模块海报.jpg",
            "listing": "",
            "href": "/zh/browse/c0-sports/c1-triathlon/c3--/_/N-hfpcwv",
            "model": "8642076"
        }],
        "monthly": [{
            "category": "羽绒",
            "remote": "羽绒",
            "slogen": "贴身保暖 温暖一冬",
            "subSlogen": "服饰类",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904146/k$73489393847df33d7ba478a545b505fd/电脑端-本月主推配图 羽绒___.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904147/k$5d4d02a713b5c57ac488768c5dc6d261/手机端-本月主推背景图 羽绒___.jpg",
            "listing": "/zh/search?Ntt=%E7%BE%BD%E7%BB%92",
            "textColor": "",
            "products": ["8601558", "8601572", "8619368", "8734479", "8647483", "8667836"],
            "products_data": [{
                "name": "TREK500 男式山地徒步羽绒保暖连帽夹克 -12°C",
                "brand": "FORCLAZ",
                "model": "8601558",
                "superMobel": "327695",
                "review": 0,
                "rate": 0,
                "price_origin": "599.9",
                "price": "499.9",
                "picture": "https://pixl.decathlon.com.cn/p2087608/k$c39dd336a331919615fa064ddff53fa1/sq/TREK500+12+C.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "特惠产品",
                    "backgroundColour": "#E20C18"
                },
                "href": "/zh/p/down-hoodie-jacket-trek500-12-c-man/_/R-p-327695?mc=8601558&c=%E7%BA%A2%E8%89%B2",
                "color": 6
            }, {
                "name": "TREK 500 女式山地徒步羽绒保暖夹克 -9°C 粉色",
                "brand": "FORCLAZ",
                "model": "8601572",
                "superMobel": "327696",
                "review": 0,
                "rate": 0,
                "price_origin": "499.9",
                "price": "499.9",
                "picture": "https://pixl.decathlon.com.cn/p1899261/k$01919d79afc27b12e802314c966b99a0/sq/TREK+500+9+C.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "更低",
                    "backgroundColour": "#E20C18"
                },
                "href": "/zh/p/trek-down-jacket-trek-500-9-c-woman/_/R-p-327696?mc=8601572&c=%E7%B2%89%E7%BA%A2%E8%89%B2",
                "color": 6
            }, {
                "name": "青少年团队运动长款羽绒服500CN",
                "brand": "KIPSTA",
                "model": "8619368",
                "superMobel": "330969",
                "review": 0,
                "rate": 0,
                "price_origin": "399.9",
                "price": "299.9",
                "picture": "https://pixl.decathlon.com.cn/p1908629/k$f02d39aadf74e86766fea368e987ca39/sq/500CN.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "特惠产品",
                    "backgroundColour": "#E20C18"
                },
                "href": "/zh/p/junior-s-teamsports-long-jacket-500cn/_/R-p-330969?mc=8619368&c=%E9%BB%91%E8%89%B2",
                "color": 2
            }, {
                "name": "长款羽绒服 CN 900 AD",
                "brand": "KIPSTA",
                "model": "8734479",
                "superMobel": "338063",
                "review": 0,
                "rate": 0,
                "price_origin": "999.9",
                "price": "799.9",
                "picture": "https://pixl.decathlon.com.cn/p2116243/k$e89b4c7d2ab3cc597c21fc44701c71c3/sq/CN+900+AD.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "特惠产品",
                    "backgroundColour": "#E20C18"
                },
                "href": "/zh/p/long-jacket-cn-900-ad/_/R-p-338063?mc=8734479&c=%E7%81%B0%E8%89%B2",
                "color": 2
            }, {
                "name": "女士双板滑雪羽绒夹克 500WARM",
                "brand": "WEDZE",
                "model": "8647483",
                "superMobel": "328597",
                "review": 0,
                "rate": 0,
                "price_origin": "499.9",
                "price": "499.9",
                "picture": "https://pixl.decathlon.com.cn/p2082913/k$68e58175a19ced3f893e4e309a751c9b/sq/500WARM+75+25.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "新品",
                    "backgroundColour": "#8126A3"
                },
                "href": "/zh/p/d-ski-jkt-150-warmv3/_/R-p-328597?mc=8647483&c=%E8%93%9D%E8%89%B2",
                "color": 3
            }, {
                "name": "青少年羽绒保暖夹克 -黑色丨HIKE 550",
                "brand": "QUECHUA",
                "model": "8667836",
                "superMobel": "329228",
                "review": 0,
                "rate": 0,
                "price_origin": "299.9",
                "price": "299.9",
                "picture": "https://pixl.decathlon.com.cn/p2089821/k$507fc3ebb2da369a576956a23531e8e8/sq/HIKE+550.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "新品",
                    "backgroundColour": "#8126A3"
                },
                "href": "/zh/p/hike-550-cn-down-cn-tb/_/R-p-329228?mc=8667836&c=%E7%81%B0%E8%89%B2",
                "color": 3
            }]
        }, {
            "category": "夹克",
            "remote": "夹克",
            "slogen": "无惧严寒 保暖夹克",
            "subSlogen": "服饰类",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904148/k$aad1c9306b9aacd8c3708b0dd5a712a4/电脑端-本月主推配图 夹克___.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904149/k$00e83c3ca532306653a9f31585cb288d/手机端-本月主推背景图 夹克___.jpg",
            "listing": "/zh/search?Ntt=%E5%A4%B9%E5%85%8B",
            "textColor": "white",
            "products": ["8526101", "8582973", "8527326", "8603926", "8603933", "8600749"],
            "products_data": [{
                "name": "一日徒步冬季保暖男士夹克 QUECHUA SH500",
                "brand": "QUECHUA",
                "model": "8526101",
                "superMobel": "176633",
                "review": 0,
                "rate": 0,
                "price_origin": "699.9",
                "price": "649.9",
                "picture": "https://pixl.decathlon.com.cn/p1697294/k$db05675dc47aaf03e4a95f1cb146272f/sq/SH500+U+WARM+20+C.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "特惠产品",
                    "backgroundColour": "#E20C18"
                },
                "href": "/zh/p/men-s-warm-waterproof-snow-hiking-parka-sh500-u-warm/_/R-p-176633?mc=8526101&c=%E7%BA%A2%E8%89%B2_%E6%A9%98%E9%BB%84%E8%89%B2",
                "color": 7
            }, {
                "name": "一日徒步保暖雪地女士夹克 QUECHUA SH500",
                "brand": "QUECHUA",
                "model": "8582973",
                "superMobel": "174714",
                "review": 0,
                "rate": 0,
                "price_origin": "699.9",
                "price": "599.9",
                "picture": "https://pixl.decathlon.com.cn/p1869392/k$e09ec62a1463e9812a6c3ff2fd2b407e/sq/SH500+ULTRA+WARM.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "特惠产品",
                    "backgroundColour": "#E20C18"
                },
                "href": "/zh/p/women-s-hiking-warm-waterproof-parka-sh500-u-warm/_/R-p-174714?mc=8582973&c=%E8%B5%AD%E8%89%B2",
                "color": 7
            }, {
                "name": "送小朋友礼物鼠你好运 QUECHUA ",
                "brand": "QUECHUA",
                "model": "8527326",
                "superMobel": "305122",
                "review": 0,
                "rate": 0,
                "price_origin": "499.9",
                "price": "399.9",
                "picture": "https://pixl.decathlon.com.cn/p1689983/k$bf336574e1c52f0a50988fe9dd48c92a/sq/SH500+19+C+7+15.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "特惠产品",
                    "backgroundColour": "#E20C18"
                },
                "href": "/zh/p/kids-7-15-years-hiking-warm-and-waterproof-jacket-sh500-u-warm/_/R-p-305122?mc=8527326&c=%E7%BA%A2%E8%89%B2_%E6%A9%98%E9%BB%84%E8%89%B2",
                "color": 3
            }, {
                "name": "航海保暖夹克300 Men Blue/blue",
                "brand": "TRIBORD",
                "model": "8603926",
                "superMobel": "328683",
                "review": 0,
                "rate": 0,
                "price_origin": "399.9",
                "price": "399.9",
                "picture": "https://pixl.decathlon.com.cn/p1900499/k$4f6a10e4e1f56f3982b5df08e89dd966/sq/300+Men+Red.jpg",
                "tag": null,
                "href": "/zh/p/sailing-warm-jkt-300-men/_/R-p-328683?mc=8603926&c=%E7%BA%A2%E8%89%B2",
                "color": 5
            }, {
                "name": "女式航海保暖夹克300 Purple",
                "brand": "TRIBORD",
                "model": "8603933",
                "superMobel": "328665",
                "review": 0,
                "rate": 0,
                "price_origin": "199.9",
                "price": "199.9",
                "picture": "https://pixl.decathlon.com.cn/p1900552/k$366ec0edbc5bb9763df25d072d46e8e7/sq/300+Women+Pink+blue.jpg",
                "tag": null,
                "href": "/zh/p/warm-jkt-sailing-300-women/_/R-p-328665?mc=8603933&c=%E7%B2%89%E7%BA%A2%E8%89%B2",
                "color": 5
            }, {
                "name": "滑雪运动滑雪儿童夹克 WEDZE ",
                "brand": "WEDZE",
                "model": "8600749",
                "superMobel": "175471",
                "review": 0,
                "rate": 0,
                "price_origin": "199.9",
                "price": "199.9",
                "picture": "https://pixl.decathlon.com.cn/p1888157/k$433c62abe49bee47e598cf5ba8c342e8/sq/D+Ski+Jacket+Jkt+100+Warm+Reverse+G+Pink.jpg",
                "tag": null,
                "href": "/zh/p/children-s-ski-jacket-warm-reverse-100/_/R-p-175471?mc=8600749&c=%E7%B2%89%E7%BA%A2%E8%89%B2",
                "color": 2
            }]
        }, {
            "category": "球类",
            "remote": "球类",
            "slogen": "体能运动 一应俱全",
            "subSlogen": "运动装备",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904150/k$e5e334d6515c8f4d82f19ec0bc6415b2/电脑端-本月主推配图 球类___.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904151/k$bd619cbbabe86bd617a2818eb7f7eb2f/手机端-本月主推背景图 球类___.jpg",
            "listing": "/zh/search?Ntt=%E7%90%83",
            "textColor": "white",
            "products": ["8554668", "8604357", "8648466", "8579655", "8529815", "8583120"],
            "products_data": [{
                "name": "篮球运动成人篮球（7号） TARMAK BT500",
                "brand": "TARMAK",
                "model": "8554668",
                "superMobel": "303421",
                "review": 0,
                "rate": 0,
                "price_origin": "249.9",
                "price": "249.9",
                "picture": "https://pixl.decathlon.com.cn/p1550128/k$1cc4374c8cda84a7182d064413dea04f/sq/7+BT500+Grip.jpg",
                "tag": null,
                "href": "/zh/p/bt500-adult-size-7-grippy-basketball-browngreat-ball-feel/_/R-p-303421?mc=8554668&c=%E6%A9%98%E9%BB%84%E8%89%B2",
                "color": 4
            }, {
                "name": "篮球运动迷你娱乐挂式室内儿童篮球架篮球框 TARMAK Mini basketball backboard",
                "brand": "TARMAK",
                "model": "8604357",
                "superMobel": "14142",
                "review": 0,
                "rate": 0,
                "price_origin": "59.9",
                "price": "59.9",
                "picture": "https://pixl.decathlon.com.cn/p1836718/k$e18b8d336d15fcdf9aaa71f01b725b6c/sq/SK100+Playground.jpg",
                "tag": null,
                "href": "/zh/p/mini-b-kids-adult-basketball-set-red-blueball-included/_/R-p-14142?mc=8604357",
                "color": 3
            }, {
                "name": "飞镖运动儿童 手眼协调锻炼粘粘球 多重设计 安全黏黏球 “鼠”你好运送小朋友礼物 CANAVERAL CLASSIC VELCRO DARTBOARD",
                "brand": "CANAVERAL",
                "model": "8648466",
                "superMobel": "144545",
                "review": 0,
                "rate": 0,
                "price_origin": "39.9",
                "price": "39.9",
                "picture": "https://pixl.decathlon.com.cn/p1951578/k$6de572e5747bc869fbab688551f69680/sq/.jpg",
                "tag": {
                    "foregroundColour": "#FFEA28",
                    "contentText": "首推价",
                    "backgroundColour": "#0082C3"
                },
                "href": "/zh/p/velcro-target-polar-bear/_/R-p-144545?mc=8648466",
                "color": 4
            }, {
                "name": "羽毛球运动全碳素双拍含球成人羽毛球拍套装鼠你好运 PERFLY SET COUPLE",
                "brand": "PERFLY",
                "model": "8579655",
                "superMobel": "151765",
                "review": 0,
                "rate": 0,
                "price_origin": "299.9",
                "price": "299.9",
                "picture": "https://pixl.decathlon.com.cn/p1939673/k$93372ab246d9a2cddb20595f336f5972/sq/BR+530.jpg",
                "tag": null,
                "href": "/zh/p/couples-adult-badminton-racket-set/_/R-p-151765?mc=8579655&c=%E7%BB%BF%E8%89%B2",
                "color": 1
            }, {
                "name": "篮球运动篮球架成人/儿童篮架 TARMAK B100  (可调节 2.4-3.05 米)",
                "brand": "TARMAK",
                "model": "8529815",
                "superMobel": "305519",
                "review": 0,
                "rate": 0,
                "price_origin": "999.9",
                "price": "999.9",
                "picture": "https://pixl.decathlon.com.cn/p1528683/k$aa840e8a007e1c8e44c549ad24a5d232/sq/B100B100+Easy+2+2+3+05.jpg",
                "tag": null,
                "href": "/zh/p/b100-easy-kids-adult-basketball-basket2-4m-to-3-05m-tool-free-adjustment/_/R-p-305519?mc=8529815&c=%E9%BB%91%E8%89%B2",
                "color": 1
            }, {
                "name": "羽毛球运动创意快开羽毛球网 PERFLY EASY NET 3M",
                "brand": "PERFLY",
                "model": "8583120",
                "superMobel": "300054",
                "review": 0,
                "rate": 0,
                "price_origin": "199.9",
                "price": "199.9",
                "picture": "https://pixl.decathlon.com.cn/p1725647/k$d37b5879e6403e8058e0b9a16aea582a/sq/3.jpg",
                "tag": null,
                "href": "/zh/p/3-m-badminton-easy-net/_/R-p-300054?mc=8583120&c=%E7%BB%BF%E8%89%B2",
                "color": 2
            }]
        }, {
            "category": "鞋袜",
            "remote": "鞋袜",
            "slogen": "无惧风雪 防滑保暖",
            "subSlogen": "运动鞋袜",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904152/k$418baeb5445873a65589cf5e37361cea/电脑端-本月主推配图 shoe.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904153/k$e8f72b1861a17db63d95cba4a73f1113/手机端-本月主推背景图 shoe.jpg",
            "listing": "/zh/search?Ntt=%E9%9E%8B",
            "textColor": "white",
            "products": ["8367614", "8603031", "8666192", "960752", "8731006", "8395033"],
            "products_data": [{
                "name": "户外山地运动保暖透气防水男式中帮登山鞋 QUECHUA Arpenaz 100 M ",
                "brand": "QUECHUA",
                "model": "8367614",
                "superMobel": "133825",
                "review": 0,
                "rate": 0,
                "price_origin": "199.9",
                "price": "199.9",
                "picture": "https://pixl.decathlon.com.cn/p1647816/k$2479e9814c12758f5184356b0913cb33/sq/SH100+U+Warm.jpg",
                "tag": null,
                "href": "/zh/p/men-s-warm-waterproof-snow-walking-shoes-sh100-warm-mid/_/R-p-133825?mc=8367614&c=%E8%93%9D%E8%89%B2",
                "color": 3
            }, {
                "name": "SH100 男式冬季徒步防水保暖徒步鞋 X-WARM",
                "brand": "QUECHUA",
                "model": "8603031",
                "superMobel": "307054",
                "review": 0,
                "rate": 0,
                "price_origin": "349.9",
                "price": "299.9",
                "picture": "https://pixl.decathlon.com.cn/p1936877/k$9ce42defe9b57526d0bc891f2d856498/sq/SH100+X+WARM.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "特惠产品",
                    "backgroundColour": "#E20C18"
                },
                "href": "/zh/p/men-s-warm-waterproof-snow-hiking-shoes-sh100-x-warm-mid/_/R-p-307054?mc=8603031&c=%E7%81%B0%E8%89%B2",
                "color": 3
            }, {
                "name": "步行运动轻便舒适耐磨男士步行鞋休闲鞋 NEWFEEL HW 540",
                "brand": "NEWFEEL",
                "model": "8666192",
                "superMobel": "155995",
                "review": 0,
                "rate": 0,
                "price_origin": "299.9",
                "price": "299.9",
                "picture": "https://pixl.decathlon.com.cn/p2090590/k$2231dc2de94ab3d1676bbfa897717206/sq/HW+540.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "新品",
                    "backgroundColour": "#8126A3"
                },
                "href": "/zh/p/hw-540-men-s-leather-fitness-walking-shoes/_/R-p-155995?mc=8666192&c=%E8%93%9D%E8%89%B2",
                "color": 4
            }, {
                "name": "户外运动保暖舒适女士雪地靴 QUECHUA Tika boots",
                "brand": "QUECHUA",
                "model": "960752",
                "superMobel": "4440",
                "review": 0,
                "rate": 0,
                "price_origin": "299.9",
                "price": "199.9",
                "picture": "https://pixl.decathlon.com.cn/p1869362/k$4e1e68e1a849d1a7915832ccf948a473/sq/SH500+X+WARM.jpg",
                "tag": null,
                "href": "/zh/p/quechua-arpenaz-500-warm-waterproof-women-s-hiking-boots/_/R-p-4440?mc=960752&c=%E7%81%B0%E8%89%B2",
                "color": 2
            }, {
                "name": "高帮袜CN x2 炭灰色",
                "brand": "NEWFEEL",
                "model": "8731006",
                "superMobel": "337163",
                "review": 0,
                "rate": 0,
                "price_origin": "39.9",
                "price": "39.9",
                "picture": "https://pixl.decathlon.com.cn/p2114941/k$afa6723640c5539a1d421013ca56bc90/sq/CN+x2.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "新品",
                    "backgroundColour": "#8126A3"
                },
                "href": "/zh/p/cn-mid-long-x2/_/R-p-337163?mc=8731006&c=%E9%BB%91%E8%89%B2",
                "color": 11
            }, {
                "name": "球拍类运动3双装高帮运动袜 ARTENGO RS160",
                "brand": "ARTENGO",
                "model": "8395033",
                "superMobel": "300234",
                "review": 0,
                "rate": 0,
                "price_origin": "24.9",
                "price": "24.9",
                "picture": "https://pixl.decathlon.com.cn/p2204952/k$cea0fbdeb0b366f343bb57071990bcd4/sq/RS160.jpg",
                "tag": null,
                "href": "/zh/p/high-tennis-socks-rs-160-tri-pack/_/R-p-300234?mc=8395033&c=%E7%81%B0%E8%89%B2",
                "color": 5
            }]
        }, {
            "category": "滑雪",
            "remote": "滑雪",
            "slogen": "无畏严寒 轻松滑雪",
            "subSlogen": "滑雪运动",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904155/k$e54e8fa485cb679b9a3a55054f6902d2/电脑端-本月主推配图 滑雪___.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904154/k$15c898ababc96c5aade23ba937decc37/手机端-本月主推背景图 滑雪___.jpg",
            "listing": "/zh/browse/c0-sports/c1-skiing-snowboarding-sledging/_/N-1crhzc6",
            "textColor": "white",
            "products": ["8545697", "8647486", "8670103", "8546610", "8569082", "8670473"],
            "products_data": [{
                "name": "男式滑雪夹克 Warm 500 Black",
                "brand": "WEDZE",
                "model": "8545697",
                "superMobel": "305769",
                "review": 0,
                "rate": 0,
                "price_origin": "599.9",
                "price": "599.9",
                "picture": "https://pixl.decathlon.com.cn/p1767715/k$9d5597906105f53675ac9461768427ad/sq/Warm+500+Black.jpg",
                "tag": null,
                "href": "/zh/p/men-s-downhill-ski-jacket-500/_/R-p-305769?mc=8545697&c=%E9%BB%91%E8%89%B2",
                "color": 4
            }, {
                "name": "滑雪运动男士羽绒服夹克 WEDZE 500",
                "brand": "WEDZE",
                "model": "8647486",
                "superMobel": "173012",
                "review": 0,
                "rate": 0,
                "price_origin": "499.9",
                "price": "499.9",
                "picture": "https://pixl.decathlon.com.cn/p2081947/k$4ffe1438cd7e905b9f740f4612af1429/sq/SKI+P+JKT+500+75+25.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "新品",
                    "backgroundColour": "#8126A3"
                },
                "href": "/zh/p/ski-p-500-men-s-warm-ski-down-jacket/_/R-p-173012?mc=8647486&c=%E7%81%B0%E8%89%B2",
                "color": 4
            }, {
                "name": "男式滑雪夹克Ski-P 500 CN Limited",
                "brand": "WEDZE",
                "model": "8670103",
                "superMobel": "336345",
                "review": 0,
                "rate": 0,
                "price_origin": "699.9",
                "price": "699.9",
                "picture": "https://pixl.decathlon.com.cn/p2081928/k$182d07cce3dc1787b5dd33444d78359b/sq/Ski+P+500+CN+Limited.jpg",
                "tag": null,
                "href": "/zh/p/m-ski-p-jkt-500-cn-oly/_/R-p-336345?mc=8670103&c=%E8%93%9D%E8%89%B2",
                "color": 1
            }, {
                "name": "男式单板滑雪鞋 On/Off-Piste Quick-Fit All Road 500",
                "brand": "DREAMSCAPE",
                "model": "8546610",
                "superMobel": "305902",
                "review": 0,
                "rate": 0,
                "price_origin": "899.9",
                "price": "899.9",
                "picture": "https://pixl.decathlon.com.cn/p1873537/k$eb2fee269f0da6ec7601867502d2fb97/sq/On+Off+Piste+Quick+Fit+All+Road+500.jpg",
                "tag": null,
                "href": "/zh/p/men-s-on-off-piste-quick-fit-snowboard-boots-all-road-500/_/R-p-305902?mc=8546610&c=%E9%BB%91%E8%89%B2",
                "color": 1
            }, {
                "name": "成人滑雪头盔 PST 500",
                "brand": "WEDZE",
                "model": "8569082",
                "superMobel": "302055",
                "review": 0,
                "rate": 0,
                "price_origin": "229.9",
                "price": "229.9",
                "picture": "https://pixl.decathlon.com.cn/p1694992/k$43c48c8bebe7584cd24f0add17b2263f/sq/PST+500.jpg",
                "tag": {
                    "foregroundColour": "#FFEA28",
                    "contentText": "首推价",
                    "backgroundColour": "#0082C3"
                },
                "href": "/zh/p/m-adult-downhill-ski-helmet-pst-500/_/R-p-302055?mc=8569082",
                "color": 4
            }, {
                "name": "男式滑雪裤Ski-P 500 CN Limited",
                "brand": "WEDZE",
                "model": "8670473",
                "superMobel": "336413",
                "review": 0,
                "rate": 0,
                "price_origin": "599.9",
                "price": "599.9",
                "picture": "https://pixl.decathlon.com.cn/p2082974/k$34e10c774bd2aa5e0f2f2b3cd0f801c2/sq/Ski+P+500+CN+Limited.jpg",
                "tag": null,
                "href": "/zh/p/m-ski-p-pant-500-cn-oly/_/R-p-336413?mc=8670473&c=%E8%93%9D%E8%89%B2",
                "color": 1
            }]
        }],
        "panoply": [{
            "slogen": "起跳腾飞 玩转球场",
            "subSlogen": "篮球运动",
            "listing": "/zh/browse/c0-sports/c1-basketball/_/N-mosofv",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904140/k$4fe45e877fd8f112ad6897bfb616d347/电脑端-搭配推荐配图-basketball.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904141/k$46fccbf24267889d7c9f28174460daac/手机端-搭配推荐-basketball.jpg",
            "products": ["8529820", "8642848", "8554668", "8600253", "8609095", "8608267"],
            "products_data": [{
                "name": "篮球运动成人/儿童篮架 TARMAK B700",
                "brand": "TARMAK",
                "model": "8529820",
                "superMobel": "305508",
                "review": 0,
                "rate": 0,
                "price_origin": "1999.9",
                "price": "1999.9",
                "picture": "https://pixl.decathlon.com.cn/p1528693/k$e16b1a85dab7b9795cd560d7e78dd8f4/sq/B700+Pro+2+4+3+05+7.jpg",
                "tag": null,
                "href": "/zh/p/b700-pro-kids-adult-basketball-basket-2-4m-to-3-05m-7-playing-heights/_/R-p-305508?mc=8529820&c=%E9%BB%91%E8%89%B2",
                "color": 1
            }, {
                "name": "男式篮球紧身裤Capri",
                "brand": "TARMAK",
                "model": "8642848",
                "superMobel": "307197",
                "review": 0,
                "rate": 0,
                "price_origin": "159.9",
                "price": "129.9",
                "picture": "https://pixl.decathlon.com.cn/p1993723/k$6129f487de814b8e863c870c69ad4ea1/sq/Capri+NBA.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "特惠产品",
                    "backgroundColour": "#E20C18"
                },
                "href": "/zh/p/men-s-new-basketball-capri-leggings/_/R-p-307197?mc=8642848&c=%E9%BB%91%E8%89%B2",
                "color": 8
            }, {
                "name": "篮球运动成人篮球（7号） TARMAK BT500",
                "brand": "TARMAK",
                "model": "8554668",
                "superMobel": "303421",
                "review": 0,
                "rate": 0,
                "price_origin": "249.9",
                "price": "249.9",
                "picture": "https://pixl.decathlon.com.cn/p1550128/k$1cc4374c8cda84a7182d064413dea04f/sq/7+BT500+Grip.jpg",
                "tag": null,
                "href": "/zh/p/bt500-adult-size-7-grippy-basketball-browngreat-ball-feel/_/R-p-303421?mc=8554668&c=%E6%A9%98%E9%BB%84%E8%89%B2",
                "color": 4
            }, {
                "name": "男式/女式左/右护膝500",
                "brand": "TARMAK",
                "model": "8600253",
                "superMobel": "327340",
                "review": 0,
                "rate": 0,
                "price_origin": "59.9",
                "price": "59.9",
                "picture": "https://pixl.decathlon.com.cn/p1979158/k$024719c60c9eca07d9ebbb0ce0475300/sq/500.jpg",
                "tag": null,
                "href": "/zh/p/men-s-women-s-right-left-knee-brace-prevent-500/_/R-p-327340?mc=8600253&c=%E9%BB%91%E8%89%B2",
                "color": 8
            }, {
                "name": "中帮篮球鞋SE900",
                "brand": "TARMAK",
                "model": "8609095",
                "superMobel": "307747",
                "review": 0,
                "rate": 0,
                "price_origin": "499.9",
                "price": "399.9",
                "picture": "https://pixl.decathlon.com.cn/p1985454/k$d44a7f47b6d7cb9576f9292962f13518/sq/SE900.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "特惠产品",
                    "backgroundColour": "#E20C18"
                },
                "href": "/zh/p/men-s-mid-rise-basketball-shoes-elevate-900/_/R-p-307747?mc=8609095",
                "color": 2
            }, {
                "name": "男式篮球裤P100 - 中灰色",
                "brand": "TARMAK",
                "model": "8608267",
                "superMobel": "312345",
                "review": 0,
                "rate": 0,
                "price_origin": "149.9",
                "price": "149.9",
                "picture": "https://pixl.decathlon.com.cn/p2066166/k$17fd3d3c5cb8262301a28f28e0b9f73e/sq/P100.jpg",
                "tag": null,
                "href": "/zh/p/men-s-basketball-bottoms-p100-medium/_/R-p-312345?mc=8608267&c=%E9%BB%91%E8%89%B2",
                "color": 3
            }]
        }, {
            "slogen": "羽球搭档 闪耀球场",
            "subSlogen": "羽毛球运动",
            "listing": "/zh/browse/c0-sports/c1-badminton/c2--/_/N-nx8961",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904142/k$58dad6b5656186917ca1cd7f6ca0a89f/电脑端-搭配推荐配图-badminton.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904144/k$1fc04264fe82b7f879fc7b72865ca70e/手机端-搭配推荐-badminton.jpg",
            "products": ["8579658", "8553621", "8579822", "8583120", "8587405", "8595783"],
            "products_data": [{
                "name": "成人轻量羽毛球拍套装BR 560 -青白玉/电光蓝",
                "brand": "PERFLY",
                "model": "8579658",
                "superMobel": "324007",
                "review": 0,
                "rate": 0,
                "price_origin": "399.9",
                "price": "399.9",
                "picture": "https://pixl.decathlon.com.cn/p1931291/k$31f9e64b54433ab4e6712de9eb43deb2/sq/BR+560.jpg",
                "tag": null,
                "href": "/zh/p/adult-badminton-racket-br-560-set-lite-jade-blue/_/R-p-324007?mc=8579658&c=%E8%93%9D%E8%89%B2",
                "color": 1
            }, {
                "name": "男士T恤560",
                "brand": "PERFLY",
                "model": "8553621",
                "superMobel": "308266",
                "review": 0,
                "rate": 0,
                "price_origin": "99.9",
                "price": "99.9",
                "picture": "https://pixl.decathlon.com.cn/p1778015/k$ccc33a37fa283c635dff82d75d23ee52/sq/T+560.jpg",
                "tag": null,
                "href": "/zh/p/t-shirt-560-m/_/R-p-308266?mc=8553621&c=%E8%93%9D%E8%89%B2",
                "color": 4
            }, {
                "name": "轻量成人羽毛球鞋BS 560 橙色",
                "brand": "PERFLY",
                "model": "8579822",
                "superMobel": "324110",
                "review": 0,
                "rate": 0,
                "price_origin": "249.9",
                "price": "249.9",
                "picture": "https://pixl.decathlon.com.cn/p1929413/k$5ec635655544679a2e7bc0e72855ff1f/sq/BS+560.jpg",
                "tag": null,
                "href": "/zh/p/men-badminton-shoes-bs-560-lite/_/R-p-324110?mc=8579822&c=%E7%99%BD%E8%89%B2",
                "color": 3
            }, {
                "name": "羽毛球运动创意快开羽毛球网 PERFLY EASY NET 3M",
                "brand": "PERFLY",
                "model": "8583120",
                "superMobel": "300054",
                "review": 0,
                "rate": 0,
                "price_origin": "199.9",
                "price": "199.9",
                "picture": "https://pixl.decathlon.com.cn/p1725647/k$d37b5879e6403e8058e0b9a16aea582a/sq/3.jpg",
                "tag": null,
                "href": "/zh/p/3-m-badminton-easy-net/_/R-p-300054?mc=8583120&c=%E7%BB%BF%E8%89%B2",
                "color": 2
            }, {
                "name": "女式轻量羽毛球鞋BS 560-翡翠色",
                "brand": "PERFLY",
                "model": "8587405",
                "superMobel": "325532",
                "review": 0,
                "rate": 0,
                "price_origin": "249.9",
                "price": "249.9",
                "picture": "https://pixl.decathlon.com.cn/p1929406/k$7e8f005ba67601b2bf38c3ec8f88cd39/sq/BS+560.jpg",
                "tag": null,
                "href": "/zh/p/bs-560-w-lite-jade/_/R-p-325532?mc=8587405&c=%E7%BB%BF%E8%89%B2",
                "color": 3
            }, {
                "name": "女士T恤560-粉色",
                "brand": "PERFLY",
                "model": "8595783",
                "superMobel": "308382",
                "review": 0,
                "rate": 0,
                "price_origin": "99.9",
                "price": "99.9",
                "picture": "https://pixl.decathlon.com.cn/p1778011/k$0dacc85af32223b4d2ea25eb7d0ce415/sq/T+560.jpg",
                "tag": null,
                "href": "/zh/p/t-shirt-560-w/_/R-p-308382?mc=8595783&c=%E7%99%BD%E8%89%B2",
                "color": 7
            }]
        }, {
            "slogen": "防滑稳定 经久耐用",
            "subSlogen": "瑜伽运动",
            "listing": "/zh/browse/c0-equipment/c1-gym-yoga/_/N-2p27n2",
            "picture_desktop": "https://pixl.decathlon.com.cn/s904143/k$42c07beee6dc64770448ba8ef061ce57/电脑端-搭配推荐配图-yoga.jpg",
            "picture_mobile": "https://pixl.decathlon.com.cn/s904145/k$4671106fcc832888e381178c944e486e/手机端-搭配推荐-yoga.jpg",
            "products": ["8665039", "8491826", "8576775", "8294530", "8339945", "8642030"],
            "products_data": [{
                "name": "舒缓瑜伽垫 5 毫米厚 粉色",
                "brand": "KIMJALY",
                "model": "8665039",
                "superMobel": "336874",
                "review": 0,
                "rate": 0,
                "price_origin": "149.9",
                "price": "149.9",
                "picture": "https://pixl.decathlon.com.cn/p2122014/k$8a35c68a09992475f6909bbf1e442acd/sq/5.jpg",
                "tag": {
                    "foregroundColour": "#FFFFFF",
                    "contentText": "新品",
                    "backgroundColour": "#8126A3"
                },
                "href": "/zh/p/yoga-mat-5mm-light-v2/_/R-p-336874?mc=8665039&c=%E7%B2%89%E7%BA%A2%E8%89%B2",
                "color": 1
            }, {
                "name": "瑜伽运动高端防滑TPE材质耐拉扯进阶瑜伽练习者送她礼物 DOMYOS Comfort Yoga Mat",
                "brand": "KIMJALY",
                "model": "8491826",
                "superMobel": "15228",
                "review": 0,
                "rate": 0,
                "price_origin": "149.9",
                "price": "149.9",
                "picture": "https://pixl.decathlon.com.cn/p1588724/k$40b12ba54a240c5b6e4ced120a8ca416/sq/5.jpg",
                "tag": null,
                "href": "/zh/p/club-5-mm-yoga-mat/_/R-p-15228?mc=8491826&c=%E8%93%9D%E8%89%B2",
                "color": 3
            }, {
                "name": "瑜伽莲花坐垫泡沫垫 DOMYOS ",
                "brand": "KIMJALY",
                "model": "8576775",
                "superMobel": "183151",
                "review": 0,
                "rate": 0,
                "price_origin": "29.9",
                "price": "29.9",
                "picture": "https://pixl.decathlon.com.cn/p1789747/k$27d6a1a0277bf6ff6da1a2ab3ac60789/sq/.jpg",
                "tag": null,
                "href": "/zh/p/yoga-knee-wrist-pad/_/R-p-183151?mc=8576775&c=%E7%BB%BF%E8%89%B2",
                "color": 2
            }, {
                "name": "瑜伽运动薄款防滑稳定天然橡胶安全无毒可折叠资深瑜伽练习者瑜伽垫 DOMYOS YOGA MAT ESSENTIAL",
                "brand": "KIMJALY",
                "model": "8294530",
                "superMobel": "15193",
                "review": 0,
                "rate": 0,
                "price_origin": "49.9",
                "price": "49.9",
                "picture": "https://pixl.decathlon.com.cn/p2028756/k$1b42955dc2fb58324cf30baea70345be/sq/Essential+4+mm+Grey.jpg",
                "tag": null,
                "href": "/zh/p/essential-yoga-mat-4-mm-grey/_/R-p-15193?mc=8294530&c=%E7%81%B0%E8%89%B2_%E7%B4%AB%E7%BA%A2%E8%89%B2",
                "color": 1
            }, {
                "name": "瑜伽运动辅助平衡控制成人送她礼物 DOMYOS ",
                "brand": "KIMJALY",
                "model": "8339945",
                "superMobel": "107246",
                "review": 0,
                "rate": 0,
                "price_origin": "49.9",
                "price": "49.9",
                "picture": "https://pixl.decathlon.com.cn/p1588808/k$5656975d5ac1b0a30a805fec388952c7/sq/.jpg",
                "tag": null,
                "href": "/zh/p/cork-yoga-brick/_/R-p-107246?mc=8339945",
                "color": 1
            }, {
                "name": "瑜伽环",
                "brand": "DOMYOS",
                "model": "8642030",
                "superMobel": "331949",
                "review": 0,
                "rate": 0,
                "price_origin": "29.9",
                "price": "29.9",
                "picture": "https://pixl.decathlon.com.cn/p1955256/k$e15ee8f6ad8374b2f151db45d7495c2f/sq/.jpg",
                "tag": null,
                "href": "/zh/p/yoga-ring/_/R-p-331949?mc=8642030",
                "color": 3
            }]
        }],
        "keywords": [{
            "href": "/zh/search?Ntt=夹克",
            "text": "夹克",
            "hot": true
        }, {
            "href": "/zh/search?Ntt=羽绒服",
            "text": "羽绒服",
            "hot": true
        }, {
            "href": "/zh/search?Ntt=自行车",
            "text": "自行车"
        }, {
            "href": "/zh/search?Ntt=马甲",
            "text": "马甲"
        }, {
            "href": "/zh/search?Ntt=帽子",
            "text": "帽子",
            "hot": true
        }, {
            "href": "/zh/search?Ntt=儿童",
            "text": "儿童"
        }, {
            "href": "/zh/search?Ntt=袜子",
            "text": "袜子",
            "hot": true
        }, {
            "href": "/zh/search?Ntt=滑雪",
            "text": "滑雪"
        }],
        "values": [{
            "picture_desktop": "https://pixl.decathlon.com/s845706/value1.jpg",
            "picture_mobile": "https://pixl.decathlon.com/s845706/value1.jpg",
            "bgColor": "#7EBEE0",
            "slogen": "2小时门店自提",
            "text": "网上下单 门店自提",
            "href": "/zh/activity/_/R-a-2H-opening"
        }, {
            "picture_desktop": "https://pixl.decathlon.com/s866945/value2.jpg",
            "picture_mobile": "https://pixl.decathlon.com/s866945/value2.jpg",
            "bgColor": "#FEAB7B",
            "slogen": "可持续发展报告",
            "text": "迪卡侬可持续发展",
            "href": "/zh/activity/_/R-a-sustainable-development"
        }, {
            "picture_desktop": "https://pixl.decathlon.com/s845703/value3.jpg",
            "picture_mobile": "https://pixl.decathlon.com/s845703/value3.jpg",
            "bgColor": "#7CDFC4",
            "slogen": "迪卡侬生态设计",
            "text": "尊重自然 和谐共生",
            "href": "/zh/activity/_/R-a-eco-design"
        }, {
            "picture_desktop": "https://pixl.decathlon.com/s845704/value4.jpg",
            "picture_mobile": "https://pixl.decathlon.com/s845704/value4.jpg",
            "bgColor": "#ED8B8F",
            "slogen": "迪卡侬招聘季",
            "text": "悦运动 越热爱",
            "href": "https://recruitment.decathlon.com.cn/workspace/workretail"
        }],
        "innovation": [{
            "name": "健身蹦床",
            "link": "/zh/browse/c0-sports/c1-fitness/c3-jumping-rope-trampoline/_/N-1d4yl42",
            "picture": "https://pixl.decathlon.com.cn/s897337/innovation9.jpg",
            "model": "8558559"
        }, {
            "name": "竞速徒步背包",
            "link": "/zh/p/fast-hiking-backpack-fh900-14-19-litre-capacity/_/R-p-302213?mc=8503969",
            "picture": "https://pixl.decathlon.com.cn/s815947/innovation6.jpg",
            "model": "8503969"
        }, {
            "name": "脚踩充气球门",
            "link": "/zh/p/inflatable-football-goal-air-kage-pump-red-orange/_/R-p-311677?mc=8555819",
            "picture": "https://pixl.decathlon.com.cn/s816020/innovation7.jpg",
            "model": "8555819"
        }],
        "recommend": [{
            "dsm_code": "302797",
            "model_code": "8560941"
        }, {
            "dsm_code": "313092",
            "model_code": "8576241"
        }, {
            "dsm_code": "338317",
            "model_code": "8735238"
        }, {
            "dsm_code": "12493",
            "model_code": "8316547"
        }, {
            "dsm_code": "313115",
            "model_code": "8576239"
        }, {
            "dsm_code": "329408",
            "model_code": "8607538"
        }, {
            "dsm_code": "302113",
            "model_code": "8503464"
        }, {
            "dsm_code": "335533",
            "model_code": "8667009"
        }, {
            "dsm_code": "328665",
            "model_code": "8603931"
        }, {
            "dsm_code": "323820",
            "model_code": "8578469"
        }, {
            "dsm_code": "304507",
            "model_code": "8543247"
        }, {
            "dsm_code": "157932",
            "model_code": "8640568"
        }, {
            "dsm_code": "306477",
            "model_code": "8547757"
        }, {
            "dsm_code": "330969",
            "model_code": "8619368"
        }, {
            "dsm_code": "328775",
            "model_code": "8604277"
        }, {
            "dsm_code": "302266",
            "model_code": "8505629"
        }],
        "recall": [{
            "type": "产品召回",
            "name": "儿童滑板车",
            "text": "为了更好的满足用户的使用安全需求，我们郑重通知您, 将自2021年10月27日起，召回在2021年2月15日至2021年9月30日期间销售的该款儿童滑板车。",
            "link": "/zh/activity/_/R-a-product-recall-8555205",
            "picture": "https://pixl.decathlon.com.cn/p2065195/recall1.jpg?f=160x160"
        }, {
            "type": "产品召回",
            "name": "婴幼儿趴圈",
            "text": "为了更好的满足用户的使用安全需求，我们郑重通知您, 将自2021年8月11日起，召回生产批次在2021年4月至2021年6月的该款婴幼儿趴圈。",
            "link": "/zh/activity/_/R-a-product-recall-8543240",
            "picture": "https://pixl.decathlon.com.cn/s876749/recall1.jpg?f=160x160"
        }, {
            "type": "产品召回",
            "name": "B1-500 踏板车",
            "text": "为了更好的满足用户的使用安全需求,我们郑重通知您, 将自2020年08月21日起,请持有该产品的消费者到就近迪卡侬门店进行免费安装维修配件。",
            "link": "/zh/activity/_/R-a-product-recall-b1-500",
            "picture": "https://pixl.decathlon.com.cn/s827822/recall1.jpg"
        }, {
            "type": "产品召回",
            "name": "B1 踏板车",
            "text": "为了更好的满足用户的使用安全需求，我们将自<strong>2019年12月18日</strong>起，召回2019年8月22日前销售的746943型号B1踏板车。",
            "link": "/zh/activity/_/R-a-product-recall-746943",
            "picture": "https://pixl.decathlon.com.cn/p48074/recall1.jpg"
        }]
    }
});