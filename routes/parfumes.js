const express = require("express")
const router = express.Router()
const ParfumeSchema = require('../models/pafumes')

// Getting All
router.get('/parfumes', async (req, res) => {
    try {
        const parfumes = await ParfumeSchema.find()
        res.send(parfumes)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.post("/parfume/create", async (req, res) => {
    const datas  = [{
        "_id": {
          "$oid": "6631b30a09869c758cdc618f"
        },
        "name": "Chanel Coco Mademoiselle Eau de Parfum",
        "brand": "Chanel",
        "images": [
          "https://www.arablly.com/images/thumbnails/550/450/detailed/9/Coco_Mademoiselle_Intense_by_Chanel_for_Women_EDP_50mL.jpg",
          "https://www.arablly.com/images/thumbnails/550/450/detailed/9/coco-mademoiselle-intense-by-chanel-for-women-edp-50ml-7457_7wpo-12.jpg"
        ],
        "price": 120,
        "description": "A feminine, fresh Oriental fragrance",
        "category": "chanel",
        "gender": "men"
      },
      {
        "_id": {
          "$oid": "6631b58509869c758cdc6190"
        },
        "brand": "Dolce & Gabbana",
        "category": "dolce",
        "description": "A fresh, floral and fruity fragrance capturing the essence of the Mediterranean",
        "images": [
          "https://cdn1.ozone.ru/s3/multimedia-h/6456196589.jpg",
          "https://basket-05.wb.ru/vol1006/part100645/100645181/images/big/1.jpg",
          "https://i.ebayimg.com/images/g/eTYAAOSw8gZg8CFQ/s-l1600.jpg"
        ],
        "name": "Dolce & Gabbana Light Blue Eau de Toilette",
        "price": 75,
        "gender": "men"
      },
      {
        "_id": {
          "$oid": "6631bac909869c758cdc6192"
        },
        "name": "Yves Saint Laurent Black Opium Eau de Parfum",
        "brand": "Yves Saint Laurent",
        "category": "yves",
        "description": "An addictive gourmand floral fragrance with notes of black coffee, white flowers, and vanilla",
        "price": 120,
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/7505748/img_id6699403567314551665.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4860193/2a0000018a6d3a0bbd3d63d62078f9c5f580/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5302484/img_id3948978090011419863.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1865652/img_id10335480139377130.jpeg/optimize"
        ],
        "gender": "men"
      },
      {
        "_id": {
          "$oid": "6631c2f8e4518689e4c9c516"
        },
        "name": "Gucci Bloom",
        "brand": "Gucci",
        "category": "gucci",
        "description": "Floral fragrance with notes of jasmine and tuberose",
        "price": 110,
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/5210364/img_id7787901217426278510.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1866085/img_id5305577622165970793.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1522540/img_id5212692832232319342.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/7721969/img_id3834507249706802069.jpeg/optimize"
        ],
        "gender": "men"
      },
      {
        "_id": {
          "$oid": "6631e8aee989fe91844a5904"
        },
        "name": "Dior Sauvage",
        "brand": "Dior",
        "category": "dior",
        "price": 170,
        "description": "Fresh and spicy fragrance with notes of bergamot and pepper",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/5222168/img_id234633791193770320.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4219717/img_id2563939064445671451.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5252557/img_id7985596530252676081.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4544069/img_id934570387588714890.png/optimize"
        ],
        "gender": "men"
      },
      {
        "_id": {
          "$oid": "6631ead8c9dc8f7b0210d3cc"
        },
        "name": "Dior Sauvage",
        "brand": "dior",
        "category": "dior",
        "price": 95,
        "description": "Radiant and fruity fragrance with hints of peony and pomegranate. Radiant and fruity fragrance with hints of peony and pomegranate",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/3609127/img_id826338748236357279.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4944925/img_id4609769051503482703.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5256749/img_id4304356594022410042.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4901709/2a0000018e87583839f202e0c5d3a0ac204c/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6631ead8c9dc8f7b0210d3cd"
        },
        "name": "Versace Bright Crystal",
        "brand": "Versace",
        "category": "versache",
        "price": 200,
        "description": "Radiant and fruity fragrance with hints of peony and pomegranate",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/5279099/2a0000018e8e22d7c8d2c98fdce54355ecf1/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1923211/img_id6125598474138560633.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4331935/img_id5208737593170382157.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4076910/img_id9062332692194842533.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6631ee11c9dc8f7b0210d3cf"
        },
        "name": " Dior Dior Homme (2020) 100 мл",
        "brand": "Dior",
        "category": "dior",
        "price": 80,
        "description": "Christian Dior Dior Homme 2020 100 ml. Description: Released in 2020, the Dior Homme 2020 fragrance from the Dior brand is classified as masculine and belongs to ...",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/4484220/img_id5329661762263503644.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/3609127/img_id9221773624574901860.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5279470/img_id6408479634803246502.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4101287/img_id2035947127218184759.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6631ee11c9dc8f7b0210d3d0"
        },
        "name": "Versace Men's Versace Pour Homme",
        "brand": "Versace",
        "category": "versace",
        "price": 110,
        "description": "The composition reflects the modern masculinity of the brand, at its core there are memories of the ancient image of the Versace man, which today is trans...",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/1669769/img_id89204441445062127.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/6069165/img_id4617975452999847340.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/6217624/img_id1648412117799102637.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4338525/img_id6789342016661647909.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6631ee11c9dc8f7b0210d3d1"
        },
        "name": "Versace Pour Homme 2008",
        "brand": "Versace",
        "category": "versace",
        "price": 100.5,
        "description": "The composition reflects the modern masculinity of the brand, at its core there are memories of the ancient image of the Versace man",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/1901647/img_id5610072572453861321.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/3699263/img_id3364398706233233349.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/7653749/img_id8258734467004395277.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/7516494/img_id509462059592843161.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6631ee11c9dc8f7b0210d3d2"
        },
        "name": "Hugo Boss Bottled",
        "brand": "Hugo Boss",
        "category": "hugo_boss",
        "price": 230.5,
        "description": "Year of release: 1998Production: GermanyFamily: woody spicyTop notes: Bergamot, Citruses, plum, Oakmoss, Green apple, GeraniumMiddle notes...",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/5221145/img_id1287470230124190322.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/3614670/img_id8018972125782771742.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4484220/img_id6824279754951586844.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/10393486/2a0000018af9d6d7ab035b0aae8ad4a44632/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6631ee11c9dc8f7b0210d3d3"
        },
        "name": "Dior Forever And Eve",
        "brand": "Dior",
        "category": "dior",
        "price": 60,
        "description": "Year of release: 2002 Production: FranceFamily: floralTop notes: Jasmine, FreesiaMiddle notes: rose, almond flower, GeraniumBase notes: Mu...",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/4465918/img_id346923234495629310.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/3939831/img_id6070895510238949868.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6633256f6ec9820f4890e9a9"
        },
        "name": "Hermes  Voyage d'Hermes Parfum",
        "brand": "Hermes",
        "category": "hermes",
        "price": 100,
        "description": "Hermès fragrances are often elegant and refined, reflecting the brand's heritage of luxury craftsmanship. Terre d'Hermès is a classic choice for men, while Twilly d'Hermès offers a playful and youthful scent for women.",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/11930023/2a0000018d3f8a4f2b8ac71cb74fc1c64e25/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4409630/img_id8616167282302407663.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5302484/img_id4758989174481809209.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5395693/img_id2192147072077427120.jpeg/optimize"
        ],
        "gender": "men"
      },
      {
        "_id": {
          "$oid": "6633256f6ec9820f4890e9aa"
        },
        "name": "Byredo Bal d'Afrique ",
        "brand": "Byredo",
        "category": "byredo",
        "price": 65,
        "description": " Byredo is known for its artistic approach to fragrance, offering unique and unconventional scents. Gypsy Water and Bal d'Afrique are two popular choices known for their distinctive and memorable blends.",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/4375199/img_id4970635350138772516.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5146425/img_id7112294088200789469.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4076910/img_id7358945003902777272.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4529531/2a0000018a98134a31df2f423f4ed54ebd90/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6633256f6ec9820f4890e9ab"
        },
        "name": "Creed Aventus",
        "brand": "Creed",
        "category": "creed",
        "price": 220.5,
        "description": "A luxury fragrance house with a long history, Creed offers a range of sophisticated scents favored by royalty and celebrities. Aventus is one of their most popular fragrances, known for its fresh, fruity, and woody notes.",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/11771522/2a0000018b167ac3d6f72664ce713783d0cc/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4076910/img_id7835232438032503377.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/6340948/img_id2341691075189917620.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5307186/img_id6943454997378053190.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6633256f6ec9820f4890e9ac"
        },
        "name": "BOSS CLUB Priority",
        "brand": "Boss",
        "category": "boss",
        "price": 105,
        "description": "Boss fragrances often exude sophistication and luxury. Miss Dior is a classic choice, while Sauvage offers a more contemporary and masculine scent.",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/12374158/2a0000018d5aa8f23be7f2e3cd30a8517991/optimize",
          "https://avatars.mds.yandex.net/get-mpic/12633564/2a0000018d5aa8f23b43d5b6f2c6dcbfb326/optimize",
          "https://avatars.mds.yandex.net/get-mpic/11930023/2a0000018d5aa8f24d2fc33054179bbe4b9a/optimize",
          "https://avatars.mds.yandex.net/get-mpic/12369201/2a0000018d5aa8f2431662e7ad3da281f7f6/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6633256f6ec9820f4890e9ad"
        },
        "name": "Hugo Boss Bottled  Eau de Parfum",
        "brand": "Hugo Boss",
        "category": "hugo_boss",
        "price": 75,
        "description": " Boss Bottled is an iconic fragrance from Hugo Boss, embodying the essence of modern masculinity. It opens with a burst of apple and citrus notes, followed by a warm and spicy heart of geranium, cinnamon, and cloves. The base notes of sandalwood, vetiver, cedarwood, and vanilla give it depth and longevity, creating a confident and timeless scent that's suitable for everyday wear and special occasions alike.",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/5307434/img_id6261747167209685352.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5068955/img_id986751440365347700.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4356316/img_id8107561028020201322.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4944925/2a0000018a2c924c4bbab9a915d1eaabd4ae/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "6633268eda6d23037201c140"
        },
        "name": "Lattafa Hayati",
        "brand": "Hayati",
        "category": "hayati",
        "description": "Hayati, which means \"my life\" or \"my beloved\" in Arabic, is a captivating and romantic fragrance designed to evoke feelings of passion and sensuality. It is a floral oriental perfume that opens with a burst of citrusy freshness, mingling with the sweet and spicy notes of cinnamon and saffron.",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/9067823/2a0000018bfc8a56924a65eaa29b58ce8664/optimize",
          "https://avatars.mds.yandex.net/get-mpic/11414233/2a0000018bfc8a5692a526ee19f243f461c3/optimize",
          "https://avatars.mds.yandex.net/get-mpic/11918420/2a0000018bfc8a5692fc94e852a0f9bbb527/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "666d2a2cd907a3b5e235dfd5"
        },
        "name": "Carlo Bossi",
        "brand": "Carlo",
        "description": "The fragrance opens with accords of grapefruit, bergamot, lemon and elemi. The heart of the composition contains notes of vetiver, ginger and cedar. The trail is represented by nuances of sandalwood, rosemary and lavender.",
        "category": "carlo",
        "gender": "men",
        "price": 70,
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/4303516/img_id3462634043766176169.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4410238/img_id412319557007897411.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "666d2a2cd907a3b5e235dfd6"
        },
        "name": "RM San Francisco Blue",
        "brand": "San Francisco",
        "description": "Perfume for men San Francisco Blue is a stylish and multifaceted men's fragrance, built on the modern sound of citrus and aquatic notes in a halo of spices, woody chords and velvety cappuccino. Top notes of bergamot, black currant, mint and melon combine with heart notes of ocean accord, cardamom and nutmeg. Base notes of amber, oakmoss, woody notes and cappuccino give the fragrance depth and longevity.",
        "category": "san_francisco",
        "gender": "men",
        "price": 110,
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/5301034/img_id1183970942546564101.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1599966/img_id6531778937736154194.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4304063/img_id8747143256623464350.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/7547708/img_id8464103883337560394.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "666d2a2cd907a3b5e235dfd7"
        },
        "name": "CASH",
        "brand": "Cash",
        "description": "Perfect harmony between freshness and an erotic bottom note, marked by a warm woody accord.",
        "category": "cash",
        "price": 30,
        "gender": "men",
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/5274753/img_id5925095194340710465.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/3986638/img_id8836170784506786615.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/932277/img_id5129265378625978197.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4484220/img_id2347509066966620821.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1926093/img_id4864590740328827206.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "666d2cb8231b4328b0c9eeab"
        },
        "name": "AVON Stamina for Women",
        "brand": "Avon",
        "description": "Stamina Avon is a worthy representative of the Avon fragrant boutique! This scent is amazing and inimitable. Stamina is different in that it sounds special on every representative of the fair sex, emphasizing natural femininity and beauty! Stamina is the best gift for any woman! It's no secret that with every fragrance, as with every man, a woman reveals herself differently, showing different facets of her Self. Avon Stamina will help you reveal your inner strength and give you a huge charge of positive energy! The scent of Stamina attracts the attention of men to its owner and gives confidence in her attractiveness!",
        "category": "avon",
        "gender": "women",
        "price": 35.5,
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/6462174/img_id7648582627085962961.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/3912211/img_id2306662775390257820.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5454584/img_id800903928077763022.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1925870/img_id7431716085153574665.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4383514/img_id3676307709476670322.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "666d2cb8231b4328b0c9eeac"
        },
        "name": " Hugo Boss женская Boss Ma Vie Pour Femme 75 мл",
        "brand": "Hugo Boss",
        "description": "",
        "category": "hugo_boss",
        "gender": "women",
        "price": 20.1,
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/6417556/img_id5597063506599609667.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1478677/img_id4355054463197217590.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1925870/img_id5222633051451686563.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/7519991/img_id2074484402029218555.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5284155/img_id392288981770563340.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4464754/img_id8423998608546021322.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "666d2cd8231b4328b0c9eead"
        },
        "name": "AVON Stamina for Women",
        "brand": "Avon",
        "description": "Stamina Avon is a worthy representative of the Avon fragrant boutique! This scent is amazing and inimitable. Stamina is different in that it sounds special on every representative of the fair sex, emphasizing natural femininity and beauty! Stamina is the best gift for any woman! It's no secret that with every fragrance, as with every man, a woman reveals herself differently, showing different facets of her Self. Avon Stamina will help you reveal your inner strength and give you a huge charge of positive energy! The scent of Stamina attracts the attention of men to its owner and gives confidence in her attractiveness!",
        "category": "avon",
        "gender": "women",
        "price": 35.5,
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/6462174/img_id7648582627085962961.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/3912211/img_id2306662775390257820.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5454584/img_id800903928077763022.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1925870/img_id7431716085153574665.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4383514/img_id3676307709476670322.jpeg/optimize"
        ]
      },
      {
        "_id": {
          "$oid": "666d2cd8231b4328b0c9eeae"
        },
        "name": " Hugo Boss женская Boss Ma Vie Pour Femme 75 мл",
        "brand": "Hugo Boss",
        "description": "",
        "category": "hugo_boss",
        "gender": "women",
        "price": 20.1,
        "images": [
          "https://avatars.mds.yandex.net/get-mpic/6417556/img_id5597063506599609667.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1478677/img_id4355054463197217590.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/1925870/img_id5222633051451686563.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/7519991/img_id2074484402029218555.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/5284155/img_id392288981770563340.jpeg/optimize",
          "https://avatars.mds.yandex.net/get-mpic/4464754/img_id8423998608546021322.jpeg/optimize"
        ]
      }]
    try {
        ParfumeSchema.insertMany(datas)
        res.status(201).json({meesage: "Successfully added"});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get("/parfume/:id", async (req, res) => {
    try {
        const single_product = await ParfumeSchema.findById(req.params.id);
        if (single_product) {
            res.send(single_product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put("/parfume/update/:id", async (req, res) => {
    const id = req.params.id;
    const allowedUpdates = ["name", "brand", "category", "images", "price", "description", "gender"];

    const unwantedFields = Object.keys(req.body).filter(key => !allowedUpdates.includes(key));
    if (unwantedFields.length > 0) {
        return res.status(400).json({ message: `Unallowed fields: ${unwantedFields.join(', ')}`, error_fields: unwantedFields });
    }

    try {
        const product = await ParfumeSchema.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router
