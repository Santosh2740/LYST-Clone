document.querySelector(".select-field").addEventListener("click", () => {
  document.querySelector(".list").classList.toggle("show");
  document.querySelector(".down-arrow").classList.toggle("rotate180");
});
document.querySelector(".select-field1").addEventListener("click", () => {
  document.querySelector(".list1").classList.toggle("show");
  document.querySelector(".down-arrow1").classList.toggle("rotate180");
});
document.querySelector(".select-field2").addEventListener("click", () => {
  document.querySelector(".list2").classList.toggle("show");
  document.querySelector(".down-arrow2").classList.toggle("rotate180");
});
document.querySelector(".select-field3").addEventListener("click", () => {
  document.querySelector(".list3").classList.toggle("show");
  document.querySelector(".down-arrow3").classList.toggle("rotate180");
});
document.querySelector(".select-field4").addEventListener("click", () => {
  document.querySelector(".list4").classList.toggle("show");
  document.querySelector(".down-arrow4").classList.toggle("rotate180");
});
document.querySelector(".select-field5").addEventListener("click", () => {
  document.querySelector(".list5").classList.toggle("show");
  document.querySelector(".down-arrow5").classList.toggle("rotate180");
});
document.querySelector(".select-field6").addEventListener("click", () => {
  document.querySelector(".list6").classList.toggle("show");
  document.querySelector(".down-arrow6").classList.toggle("rotate180");
});
document.querySelector(".select-field7").addEventListener("click", () => {
  document.querySelector(".list7").classList.toggle("show");
  document.querySelector(".down-arrow7").classList.toggle("rotate180");
});
document.querySelector(".select-field8").addEventListener("click", () => {
  document.querySelector(".list8").classList.toggle("show");
  document.querySelector(".down-arrow8").classList.toggle("rotate180");
});

// <-!-----------------------------FOR--HID--AND--SHOW--END---------------------------------------------------------->

var product_data = [
  {
    brand: "BALENCIAGA",
    name: "Hoodies -Black",
    price: "623",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/mclabels/99ea9870/balenciaga-BLACK-Other-Materials-Sweatshirt.jpeg",
    logo: "https://cdn-icons-png.flaticon.com/512/60/60993.png",
    sale: "onsale",
    cotto: "cotton",
    bett: "better",
    made: "india",
    cprice: "$20",
    productID: "men1",
  },
  {
    brand: "BALENCIAGA",
    name: "Bd Cotton T-shirt-Black",
    price: "460",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/vitkac/5959a232/balenciaga-RED-Swim-Shorts.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale2: "onsale20",
    freeshiping: "freeship",
    colors: "white",
    cotto: "cotton",
    made: "andrew",
    cprice: "$15",
    productID: "men2",
  },
  {
    brand: "LACOSTE",
    name: "Sleeve Logo Track Jacket -Blue",
    price: "121",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/stand-out/8d0a9a13/lacoste-Blue-Marine-Sleeve-Logo-Track-Jacket.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    freeshiping: "freeship",
    colors: "green",
    cotto: "cotton",
    deni: "denim",
    bett: "better",
    kin: "kind",
    made: "alike",
    cprice: "$18",
    productID: "men3",
  },
  {
    brand: "AMIRI",
    name: "Patchwork-detail Denim Jenas-Blue",
    price: "733",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/genteroma/4a20d7a1/amiri-blue-Jeans-blu-con-dettaglio-patchwork.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    deni: "denim",
    made: "allsaints",
    cprice: "$11",
    productID: "men4",
  },
  {
    brand: "GUCCI",
    name: "Geometric G Cotton Shirt- Multicolor",
    price: "1,277",
    category: "clotingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/90855c36/gucci-Multicolor-Hemd-Geometric-G-aus-Musselin.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    cotto: "cotton",
    ap: "apc",
    made: "india",
    cprice: "$100",
    productID: "men5",
  },
  {
    brand: "POLO RALPH LAUREN",
    name: "Fleece Sweatshirt -Blue",
    price: "163",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/coggles/82a095c2/polo-ralph-lauren-Blue-Hi-Pile-Sweatshirt.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale3: "onsale50",
    freeshiping: "freeship",
    colors: "pruple",
    chiffo: "chiffon",
    cotto: "cotton",
    aap: "aape",
    cprice: "$15",
    productID: "men6",
  },
  {
    brand: "BALENCIAGA",
    name: "Allover Cities Silk Short-Blue",
    price: "1060",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/3c8d8934/balenciaga-Multicolor-Bedruckte-Shorts-aus-Seide.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale2: "onsale20",
    freeshiping: "freeship",
    cotto: "cotton",
    kin: "kind",
    ap: "apc",
    made: "allsaints",
    cprice: "$150",
    productID: "men7",
  },
  {
    brand: "BALENCIAGA",
    name: "Bd Cotton T-shirt-Black",
    price: "760",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/45ec932a/balenciaga-black-Bb-Cotton-T-shirt.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale4: "onsale70",
    chiffo: "chiffon",
    deni: "denim",
    bett: "better",
    aap: "aape",
    made: "alike",
    made: "allsaints",
    cprice: "$300",
    productID: "men8",
  },
  {
    brand: "LACOSE",
    name: "3 Pack Boxer Shorts-Mutlicolor",
    price: "42",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/stand-out/0c9eed16/lacoste-WhiteGreyBlack-3-Pack-Casual-Trunks.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale2: "onsale20",
    freeshiping: "freeship",
    kin: "kind",
    cprice: "$1",
    productID: "men9",
  },
  {
    brand: "CALVIN KLEIN",
    name: "Two-button Wool Suit Set-Blue",
    price: "200",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/saksoff5th/c36aaeb1/calvin-klein-Navy-Trim-fit-Two-piece-Wool-Tuxedo.jpeg",
    logo: "https://cdn-icons-png.flaticon.com/512/60/60993.png",
    sale: "onsale",
    freeshiping: "freeship",
    chiffo: "chiffon",
    cotto: "cotton",
    deni: "denim",
    ap: "apc",
    made: "india",
    cprice: "$16",
    productID: "men10",
  },

  {
    brand: "CALVIN KELEIN",
    name: "2Pack Thongs-Black",
    price: "36",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/stand-out/c01a93d7/calvin-klein-Black-2-Pack-Thongs.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale3: "onsale50",
    cotto: "cotton",
    kin: "kind",
    aap: "aape",
    made: "alike",
    productID: "men11",
  },
  {
    brand: "CALVIN KLEEIN",
    name: "Two Tone Monogram",
    price: "36",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/stand-out/de10a698/calvin-klein-Black-Two-Tone-Monogram-T-shirt.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    freeshiping: "freeship",
    chiffo: "chiffon",
    bett: "better",
    ap: "apc",
    made: "allsaints",
    productID: "men12",
  },
  {
    brand: "BOSS BY HUGO BOSS",
    name: "Chest Logo T-shirt -White",
    price: "28",
    category: "clothingg",
    img: "https://cdna.lystit.com/200/250/tr/photos/scottsmenswear/dd388db6/boss-by-hugo-boss-white-Chest-Logo-T-shirt.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale4: "onsale70",
    freeshiping: "freeship",
    cotto: "cotton",
    deni: "denim",
    kin: "kind",
    aap: "aape",
    made: "alike",
    productID: "men13",
  },

  {
    brand: "TIMBERLAND",
    name: "Euro Rock Mid Hiker Suede Boots-Brown",
    price: "101",
    category: "shoess",
    img: "https://cdna.lystit.com/200/250/tr/photos/stand-out/2c0ffdd8/timberland-Wheat-Euro-Rock-Mid-Hiker-Suede-Boots.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    freeshiping: "freeship",
    colors: "brown",
    chiffo: "chiffon",
    deni: "denim",
    bett: "better",
    made: "india",
    productID: "men14",
  },
  {
    brand: "GUCCI",
    name: "Princetown Leather Slippers-Black",
    price: "1,247",
    category: "shoess",
    img: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/46cb04a8/gucci-black-Princetown-Leather-Slippers.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale3: "onsale50",
    freeshiping: "freeship",
    kin: "kind",
    aap: "aape",
    made: "alike",
    cprice: "$153",
    productID: "men15",
  },
  {
    brand: "GRENSON",
    name: "Archie Commando Sole Shoes(leather)-Black",
    price: "189",
    category: "shoess",
    img: "https://cdna.lystit.com/200/250/tr/photos/allsole/e8099d87/grenson--Archie-Leather-Commando-Sole-Brogues.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale2: "onsale20",
    chiffo: "chiffon",
    ap: "apc",
    productID: "men16",
  },
  {
    brand: "NIKE",
    name: "Victori One Shower Slide-Black",
    price: "19",
    category: "shoess",
    img: "https://cdna.lystit.com/200/250/tr/photos/scottsmenswear/5e6aea0e/nike-black-Victori-One-Shower-Slide.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale4: "onsale70",
    freeshiping: "freeship",
    colors: "black",
    chiffo: "chiffon",
    deni: "denim",
    bett: "better",
    made: "india",
    made: "alike",
    productID: "men17",
  },
  {
    brand: "PLOLO RALPH LAUREN",
    name: "Slide Sandals-White",
    price: "35",
    category: "shoess",
    img: "https://cdna.lystit.com/200/250/tr/photos/allsole/30e8656f/polo-ralph-lauren-White-Slide-Sandals.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale4: "onsale70",
    freeshiping: "freeship",
    ap: "apc",
    aap: "aape",
    productID: "men18",
  },
  {
    brand: "ADIDAS ORIGINALS",
    name: "Gazelle Sneakers Multi -Gray",
    price: "49",
    category: "shoess",
    img: "https://cdna.lystit.com/200/250/tr/photos/tessuti/09d2e25c/adidas-originals-GreyBlack-Gazelle-Trainers-Multi.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale4: "onsale70",
    freeshiping: "freeship",
    chiffo: "chiffon",
    kin: "kind",
    made: "alike",
    productID: "men19",
  },
  {
    brand: "VERSACE",
    name: "Suede & Leather-trim Sneaker-White",
    price: "489",
    category: "shoess",
    img: "https://cdna.lystit.com/200/250/tr/photos/ruelala/b765830c/versace-White-Suede-Leather-trim-Sneaker.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale3: "onsale50",
    freeshiping: "freeship",
    chiffo: "chiffon",
    deni: "denim",
    bett: "better",
    ap: "apc",
    cprice: "$134",
    productID: "men20",
  },
  {
    brand: "NEW BALANCE",
    name: "920 Made In England Sneakers-Blue",
    price: "687",
    category: "shoess",
    img: "https://cdna.lystit.com/200/250/tr/photos/woodhouseclothing/44cb9220/new-balance-Mixed-920-Made-In-England-Trainers.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    aap: "aape",
    cprice: "$150",
    productID: "men21",
  },
  {
    brand: "BURBERRY",
    name: "Be4319 58mm Sunglass-Black",
    price: "100",
    category: "accessories",
    img: "https://cdna.lystit.com/200/250/tr/photos/ruelala/ccf7e80a/burberry-Multi-Be4319-58mm-Sunglasses.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    freeshiping: "freeship",
    ap: "apc",
    made: "paris",
    cprice: "$15",
    productID: "men22",
  },

  {
    brand: "ASPINAL OF LONDON",
    name: "button Cufflinks-Blue",
    price: "117",
    category: "accessories",
    img: "https://cdna.lystit.com/200/250/tr/photos/aspinaloflondon/1e709264/aspinal-SilverBlue-Sterling-Silver-Plated-Button-Cufflinks.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale2: "onsale20",
    freeshiping: "freeship",
    chiffo: "chiffon",
    aap: "aape",
    made: "alike",
    cprice: "$15",
    productID: "men23",
  },
  {
    brand: "RICK OWENS",
    name: "Woven Fcae Mask Dust-Multicolor",
    price: "82",
    category: "accessories",
    img: "https://cdna.lystit.com/200/250/tr/photos/hervia/38be1ffd/rick-owens-Dust-Woven-Face-Mask-Dust.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    freeshiping: "freeship",
    canva: "canvas",
    deni: "denim",
    Bath: "Bathing",
    bett: "better",
    kin: "kind",
    aap: "aape",
    made: "paris",
    productID: "men24",
  },
  {
    brand: "BOGNER",
    name: "Primo R-tex Xt Gloves_Black",
    price: "199",
    category: "accessories",
    img: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/b8cd39ab/bogner-black-Primo-R-tex-Xt-Gloves.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale3: "onsale50",
    freeshiping: "freeship",
    canva: "canvas",
    ap: "apc",
    productID: "men25",
  },
  {
    brand: "GUCCI",
    name: "original GG Canvas Baseball cap",
    price: "470",
    category: "accessories",
    img: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/31dd13f0/gucci-beige-Original-GG-Canvas-Baseball-Cap.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    freeshiping: "freeship",
    Bath: "Bathing",
    aap: "aape",
    made: "paris",
    productID: "men26",
  },
  {
    brand: "MOSCHINO",
    name: "Wool Scarf-Multicolor",
    price: "82",
    category: "accessories",
    img: "https://cdna.lystit.com/200/250/tr/photos/frmoda/82c7e88e/moschino-BLU-Wool-Scarf.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale2: "onsale20",
    chiffo: "chiffon",
    deni: "denim",
    bett: "better",
    ap: "apc",
    made: "andrew",
    productID: "men27",
  },
  {
    brand: "FENDI",
    name: "Metal Sunglasses=Multicolor",
    price: "313",
    category: "accessories",
    img: "https://cdna.lystit.com/200/250/tr/photos/cettire/e7288b23/fendi-White-Ff-Lens-Sunglasses.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    freeshiping: "freeship",
    canva: "canvas",
    Bath: "Bathing",
    kin: "kind",
    aap: "aape",
    made: "paris",
    productID: "men28",
  },
  {
    brand: "BURBERRY",
    name: "Manston Checked Silk Tie-Multicolor",
    price: "254",
    category: "accessories",
    img: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/f8ead106/burberry-beige-Manston-Checked-Silk-Tie.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale3: "onsale50",
    freeshiping: "freeship",
    chiffo: "chiffon",
    productID: "men29",
  },
  {
    brand: "TOMMY HILFIGER",
    name: "Eton Mini Wallet-Black",
    price: "46",
    category: "accessories",
    img: "https://cdna.lystit.com/200/250/tr/photos/stand-out/a5c1bdc0/tommy-hilfiger-Black-Eton-Mini-Wallet.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    Bath: "Bathing",
    bett: "better",
    ap: "apc",
    productID: "men30",
  },
  {
    brand: "CALVIN KLEIN",
    name: "Watch-Black",
    price: "60",
    category: "accessories",
    img: "https://cdna.lystit.com/200/250/tr/photos/ruelala/3aac5eb2/calvin-klein--Watch.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    freeshiping: "freeship",
    canva: "canvas",
    chiffo: "chiffon",
    Bath: "Bathing",
    aap: "aape",
    made: "paris",
    productID: "men31",
  },

  {
    brand: "PRADA",
    name: "Re-nylon And Saffiano",
    price: "530",
    category: "bag",
    img: "https://cdna.lystit.com/200/250/tr/photos/hbx/5b067888/prada-Black-Re-nylon-And-Saffiano-Leather-Toiletry-Bag.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale2: "onsale20",
    cashme: "cashmere",
    chiffo: "chiffon",
    deni: "denim",
    ap: "apc",
    cprice: "$156",
    productID: "men32",
  },
  {
    brand: "GUCCI",
    name: "gg Backpack - Black",
    price: "2,567",
    category: "bag",
    img: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/2e063bc1/gucci-black-Zaino-GG.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale4: "onsale70",
    freeshiping: "freeship",
    kin: "kind",
    aap: "aape",
    made: "andrew",
    productID: "men33",
  },
  {
    brand: "SPRAYGROUND",
    name: "Shark-teeth Print Backpack",
    price: "134",
    category: "bag",
    img: "https://cdna.lystit.com/200/250/tr/photos/eraldo/5d442079/sprayground-Black-Shark-teeth-Print-Backpack.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    freeshiping: "freeship",
    colors: "orange",
    canva: "canvas",
    cashme: "cashmere",
    chiffo: "chiffon",
    Bath: "Bathing",
    bett: "better",
    productID: "men34",
  },
  {
    brand: "GUCCI",
    name: "Mens Begi Ophidia GG ",
    price: "999.28",
    category: "bag",
    img: "https://cdna.lystit.com/200/250/tr/photos/grifo210/382ba8d5/gucci-Beige-Marsupio-Ophidia-gg.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale3: "onsale50",
    cashme: "cashmere",
    aap: "aape",
    made: "andrew",
    cprice: "$159",
    productID: "men35",
  },
  {
    brand: "BALLY",
    name: "Staz Leather Briefcase-Black",
    price: "630",
    category: "bag",
    img: "https://cdna.lystit.com/200/250/tr/photos/saksoff5th/5a440425/bally-Black-Staz-Leather-Briefcase.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale4: "onsale70",
    freeshiping: "freeship",
    chiffo: "chiffon",
    deni: "denim",
    ap: "apc",
    productID: "men36",
  },
  {
    brand: "EMPORIO ARMANI",
    name: "Duffel Bag- Blue",
    price: "336",
    category: "bag",
    img: "https://cdna.lystit.com/200/250/tr/photos/vitkac/9fc7a82e/emporio-armani-NAVY-BLUE-Duffel-Bag.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    freeshiping: "freeship",
    cashme: "cashmere",
    Bath: "Bathing",
    aap: "aape",
    made: "andrew",
    cprice: "$159",
    productID: "men37",
  },
  {
    brand: "DOLCE & GABBANA",
    name: "Printed Iphone 13 pro Max cover",
    price: "185",
    category: "bag",
    img: "https://cdna.lystit.com/200/250/tr/photos/dolcegabbana/cac83d9a/dolce-gabbana-Multicolor-Printed-Iphone-13-Pro-Max-Cover.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale2: "onsale20",
    freeshiping: "freeship",
    chiffo: "chiffon",
    ap: "apc",
    productID: "men38",
  },
  {
    brand: "PARDA",
    name: "LOogo Braided-leather Bracelet-black",
    price: "445",
    category: "jewelry",
    img: "https://cdna.lystit.com/200/250/tr/photos/hbx/7cec4038/prada-Black-Logo-Link-Braided-Bracelet.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale4: "onsale70",
    bett: "better",
    made: "andrew",
    cprice: "$152",
    productID: "men39",
  },
  {
    brand: "ALEXANDER MCQUEEN",
    name: "Skull Charum Buckle Bracelte",
    price: "128",
    category: "jewelry",
    img: "https://cdna.lystit.com/200/250/tr/photos/cettire/a810b192/alexander-mcqueen-Black-Skull-Charm-Buckle-Bracelet.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale3: "onsale50",
    freeshiping: "freeship",
    cashme: "cashmere",
    chiffo: "chiffon",
    Bath: "Bathing",
    aap: "aape",
    productID: "men40",
  },
  {
    brand: "PRADA",
    name: "Triangle-logo Necklace",
    price: "760",
    category: "jewelry",
    img: "https://cdna.lystit.com/200/250/tr/photos/eraldo/0aa0ff65/prada-Silver-Triangle-logo-Necklace.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/513px-A_perfect_SVG_heart.svg.png?20180121090836",
    sale: "onsale",
    freeshiping: "freeship",
    deni: "denim",
    ap: "apc",
    made: "andrew",
    cprice: "$135",
    productID: "men41",
  },
  {
    brand: "VERSACE",
    name: "Greek key Engraved Ring-Metallic",
    price: "170",
    category: "jewelry",
    img: "https://cdna.lystit.com/200/250/tr/photos/cettire/c07153db/versace-Gold-Greek-Key-Engraved-Ring.jpeg",
    logo: "https://cdn-icons-png.flaticon.com/512/60/60993.png",
    sale2: "onsale20",
    freeshiping: "freeship",
    chiffo: "chiffon",
    Bath: "Bathing",
    productID: "men42",
  },
  {
    brand: "FENDI",
    name: "Ring-metallic",
    price: "275",
    category: "jewelry",
    img: "https://cdna.lystit.com/200/250/tr/photos/24sevres/15ab2e2f/fendi-or-Ring.jpeg",
    logo: "https://cdn-icons-png.flaticon.com/512/60/60993.png",
    freeshiping: "freeship",
    made: "allsaints",
    cprice: "$151",
    productID: "men43",
  },
  {
    brand: "ALLSAINTS",
    name: "Saint Sterling Silver Ring-Metallic",
    price: "73",
    category: "jewelry",
    img: "https://cdna.lystit.com/200/250/tr/photos/allsaints/656a04f3/all-saints-WARM-SILVER-Saint-Sterling-Silver-Ring.jpeg",
    logo: "https://cdn-icons-png.flaticon.com/512/60/60993.png",
    sale: "onsale",
    chiffo: "chiffon",
    Bath: "Bathing",
    ap: "apc",
    aap: "aape",
    cprice: "$5",
    productID: "men44",
  },
  {
    brand: "OFF-WHITE C/O VIRGIL ABLOH",
    name: "caravaggio Diag track Pants-Black",
    price: "449",
    category: "home",
    img: "https://cdna.lystit.com/200/250/tr/photos/brownsfashion/190d6190/off-white-co-virgil-abloh-Black-caravaggio-Diag-Track-Pants.jpeg",
    logo: "https://cdn-icons-png.flaticon.com/512/60/60993.png",
    freeshiping: "freeship",
    cashme: "cashmere",
    bett: "better",
    made: "allsaints",
    cprice: "$50",
    productID: "men45",
  },
  {
    brand: "OFF-WHITE C/O VIRGIL ABLOH",
    name: "Mini Arrow Mono Earring",
    price: "523",
    category: "home",
    img: "https://cdna.lystit.com/200/250/tr/photos/lvr/bcd67846/off-white-co-virgil-abloh-blue-Orecchino-Singolo-Mini-Arrow.jpeg",
    logo: "https://cdn-icons-png.flaticon.com/512/60/60993.png",
    sale3: "onsale50",
    freeshiping: "freeship",
    cashme: "cashmere",
    chiffo: "chiffon",
    deni: "denim",
    aap: "aape",
    cprice: "$50",
    productID: "men46",
  },
  {
    brand: "OFF-WHITE C/O VIRGIL ABLOH",
    name: "Mini Arrow Mono Earring ",
    price: "234",
    category: "home",
    img: "https://cdna.lystit.com/200/250/tr/photos/lvr/5cf983f3/off-white-co-virgil-abloh-blue-Orecchino-Singolo-Mini-Hand-Off.jpeg",
    logo: "https://cdn-icons-png.flaticon.com/512/60/60993.png",
    sale: "onsale",
    freeshiping: "freeship",
    canva: "canvas",
    chiffo: "chiffon",
    Bath: "Bathing",
    made: "allsaints",
    cprice: "$20",
    productID: "men47",
  },
  {
    brand: "OFF-WHITE C/O VIRGIL ABLOH",
    name: "Mini Arrow Mono Earring",
    price: "123",
    category: "home",
    img: "https://cdna.lystit.com/200/250/tr/photos/lvr/80071e04/off-white-co-virgil-abloh-green-Orecchino-Singolo-Mini-Hand-Off.jpeg",
    logo: "https://cdn-icons-png.flaticon.com/512/60/60993.png",
    sale2: "onsale20",
    freeshiping: "freeship",
    canva: "canvas",
    cashme: "cashmere",
    Bath: "Bathing",
    aap: "aape",
    made: "allsaints",
    cprice: "$50",
    productID: "men48",
  },
];

localStorage.setItem("backend_store", JSON.stringify(product_data));
let cartLSdata = JSON.parse(localStorage.getItem("add-cart")) || [];

var products = document.querySelector("#products");
var clothing = document.querySelector("#clothingg");
var shoes = document.querySelector("#shoess");
var accessories = document.querySelector("#accessories");
var bag = document.querySelector("#bag");
var jewelry = document.querySelector("#jewelry");
var home = document.querySelector("#home");
var onsale = document.querySelector("#onsale");
var onsale20 = document.querySelector("#onsale20");
var onsale50 = document.querySelector("#onsale50");
var onsale70 = document.querySelector("#onsale70");
var freeship = document.querySelector("#freeship");
var white = document.querySelector("#white");
var black = document.querySelector("#black");
var brown = document.querySelector("#brown");
var green = document.querySelector("#green");
var orange = document.querySelector("#orange");
var pruple = document.querySelector("#pruple");
var canvas = document.querySelector("#canvas");
var cashmere = document.querySelector("#cashmere");
var chiffon = document.querySelector("#chiffon");
var cotton = document.querySelector("#cotton");
var denim = document.querySelector("#denim");
var Bathing = document.querySelector("#Bathing");
var better = document.querySelector("#better");
var kind = document.querySelector("#kind");
var apc = document.querySelector("#apc");
var aape = document.querySelector("#aape");
var india = document.querySelector("#india");
var alike = document.querySelector("#alike");
var allsaints = document.querySelector("#allsaints");
var paris = document.querySelector("#paris");
var andrew = document.querySelector("#andrew");

display(product_data);
localStorage.setItem("localData", JSON.stringify(product_data));

function display(data) {
  products.innerHTML = null;

  data.forEach(function (element) {
    var card = document.createElement("div");

    var img = document.createElement("img");
    img.src = element.img;

    var title = document.createElement("p");
    title.textContent = element.brand;
    title.setAttribute("id", "brand");

    var desc = document.createElement("p");
    desc.textContent = element.name;
    desc.setAttribute("id", "name");

    var box = document.createElement("div");
    box.setAttribute("id", "box");

    var price = document.createElement("p");
    price.textContent = "$" + element.price;
    price.setAttribute("id", "price");

    var cprice = document.createElement("p");
    cprice.textContent = element.cprice;
    cprice.setAttribute("id", "cprice");

    var logo = document.createElement("img");
    logo.src = element.logo;
    logo.setAttribute("class", "logo");

    var button = document.createElement("button");
    button.innerText = "ADD TO BASKET";
    button.setAttribute("class", "cartbtn");
    button.addEventListener("click", function () {
      AddToCart(element);
    });

    box.append(cprice, price);

    card.append(img, logo, title, desc, box, button);

    products.append(card);
  });
}

display(product_data);

function mymenFunction() {
  window.location.href = "Product.html";
}

function mywomenFunction() {
  window.location.href = "womens.html";
}

clothing.addEventListener("change", function () {
  if (clothing.value == "clothing") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.category == clothingg.value;
    });
    display(filtered);
  }
});

shoes.addEventListener("change", function () {
  if (shoes.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.category == shoess.value;
    });

    display(filtered);
  }
});

accessories.addEventListener("change", function () {
  if (accessories.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.category == accessories.value;
    });

    display(filtered);
  }
});
bag.addEventListener("change", function () {
  if (bag.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.category == bag.value;
    });

    display(filtered);
  }
});
jewelry.addEventListener("change", function () {
  if (jewelry.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.category == jewelry.value;
    });

    display(filtered);
  }
});
home.addEventListener("change", function () {
  if (home.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.category == home.value;
    });

    display(filtered);
  }
});
onsale.addEventListener("change", function () {
  if (onsale.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.sale == onsale.value;
    });

    display(filtered);
  }
});
onsale20.addEventListener("change", function () {
  if (onsale20.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.sale2 == onsale20.value;
    });

    display(filtered);
  }
});

onsale50.addEventListener("change", function () {
  if (onsale50.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.sale3 == onsale50.value;
    });

    display(filtered);
  }
});
onsale70.addEventListener("change", function () {
  if (onsale70.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.sale4 == onsale70.value;
    });

    display(filtered);
  }
});
freeship.addEventListener("change", function () {
  if (freeship.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.freeshiping == freeship.value;
    });

    display(filtered);
  }
});
white.addEventListener("change", function () {
  if (white.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.colors == white.value;
    });

    display(filtered);
  }
});

black.addEventListener("change", function () {
  if (black.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.colors == black.value;
    });

    display(filtered);
  }
});
brown.addEventListener("change", function () {
  if (brown.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.colors == brown.value;
    });

    display(filtered);
  }
});

green.addEventListener("change", function () {
  if (green.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.colors == green.value;
    });

    display(filtered);
  }
});

orange.addEventListener("change", function () {
  if (orange.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.colors == orange.value;
    });

    display(filtered);
  }
});

pruple.addEventListener("change", function () {
  if (pruple.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.colors == pruple.value;
    });

    display(filtered);
  }
});

canvas.addEventListener("change", function () {
  if (canvas.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.canva == canvas.value;
    });

    display(filtered);
  }
});

cashmere.addEventListener("change", function () {
  if (cashmere.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.cashme == cashmere.value;
    });

    display(filtered);
  }
});

chiffon.addEventListener("change", function () {
  if (chiffon.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.chiffo == chiffon.value;
    });

    display(filtered);
  }
});

cotton.addEventListener("change", function () {
  if (cotton.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.cotto == cotton.value;
    });

    display(filtered);
  }
});

denim.addEventListener("change", function () {
  if (denim.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.deni == denim.value;
    });

    display(filtered);
  }
});

Bathing.addEventListener("change", function () {
  if (Bathing.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.Bath == Bathing.value;
    });

    display(filtered);
  }
});

better.addEventListener("change", function () {
  if (better.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.bett == better.value;
    });

    display(filtered);
  }
});

kind.addEventListener("change", function () {
  if (kind.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.kin == kind.value;
    });

    display(filtered);
  }
});
apc.addEventListener("change", function () {
  if (apc.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.ap == apc.value;
    });

    display(filtered);
  }
});

aape.addEventListener("change", function () {
  if (aape.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.aap == aape.value;
    });

    display(filtered);
  }
});

india.addEventListener("change", function () {
  if (india.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.made == india.value;
    });

    display(filtered);
  }
});

alike.addEventListener("change", function () {
  if (alike.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.made == alike.value;
    });

    display(filtered);
  }
});

allsaints.addEventListener("change", function () {
  if (allsaints.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.made == allsaints.value;
    });

    display(filtered);
  }
});

paris.addEventListener("change", function () {
  if (paris.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.made == paris.value;
    });

    display(filtered);
  }
});
andrew;

andrew.addEventListener("change", function () {
  if (andrew.value == "none") {
    display(product_data);
  } else {
    var filtered = product_data.filter(function (element) {
      return element.made == andrew.value;
    });

    display(filtered);
  }
});

function sortByPrice() {
  var price = document.querySelector("#sortingg").value;
  // console.log(price);

  if (price == "high") {
    product_data.sort(function (a, b) {
      var a = +a.price;
      var b = +b.price;
      return b - a;
    });
    console.log(product_data);
    display(product_data);
  }
  if (price == "low") {
    product_data.sort(function (a, b) {
      var a = +a.price;
      var b = +b.price;
      return a - b;
    });
    display(product_data);
  }
}
