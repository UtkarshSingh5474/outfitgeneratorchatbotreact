// apiFunctions.js

var apiUrlBase = "https://outfitgeneratorapi-i3odb6kjxq-em.a.run.app/"

// apiFunctions.js

export async function getCombinedOutfitText(input) {
  const apiUrl = apiUrlBase+`combined_outfit_text?input=${encodeURIComponent(input)}`;

  try {
    // console.log("Get Request Started");
    // const response = await fetch(apiUrl);
    // if (!response.ok) {
    //   throw new Error(`Network response was not ok: ${response.status}`);
    // }
    // const data = await response.json();
    // console.log(data);
    const data = {
      "outfitOverview": "For Rakshabandhan, a traditional and festive occasion, I would suggest a stylish and elegant outfit for you. Considering your previous purchases, I will create an outfit that complements your style and body type.\n\nOutfit details:\n1. Anarkali Suit: A beautiful Anarkali suit in a vibrant color like royal blue or emerald green would be perfect for Rakshabandhan. The suit should have intricate embroidery and embellishments, giving it a rich and luxurious look.\n\n2. Matching Dupatta: Pair the Anarkali suit with a matching dupatta that complements the color and design of the suit. The dupatta can have embellishments or a border to enhance the overall look.\n\n3. Statement Earrings: Choose a pair of statement earrings in gold or silver to add a touch of glamour to your outfit. Opt for designs that have intricate detailing or unique shapes to make them stand out.\n\n4. Ethnic Footwear: Complete your look with a pair of embellished juttis or mojris in a color that matches your Anarkali suit. Look for footwear that is comfortable and stylish at the same time.\n\n5. Clutch Bag: Carry a small clutch bag that matches your outfit. It can have embroidery or embellishments to enhance the overall look and keep your essentials handy.\n\n6. Fresh Makeup: Opt for a fresh and dewy makeup look with a focus on your eyes. Use earthy tones for eyeshadow and opt for a bold lip color that complements your outfit.\n\nRemember to style your hair in a way that enhances your overall look and complements the traditional attire.\n\nEnjoy your Rakshabandhan celebration with your brother in style!",
      "clothingItems": {
          "Anarkali Suit": {
              "searchLink": "https://www.flipkart.com/search?marketplace=FLIPKART&q=Buy%20royal%20blue%20Anarkali%20suit%20for%20women",
              "topResults": [
                  {
                      "name": "Unstitched Polycotton Salwar Suit Material Embroidered",
                      "current_price": 299,
                      "link": "https://www.flipkart.com/gurhal-polycotton-embroidered-salwar-suit-material/p/itm4d1c17662b9d4",
                      "thumbnail": []
                  },
                  {
                      "name": "Unstitched Polycotton Salwar Suit Material Embroidered",
                      "current_price": 299,
                      "link": "https://www.flipkart.com/gurhal-polycotton-embroidered-salwar-suit-material/p/itm3fea2463810b1",
                      "thumbnail": []
                  },
                  {
                      "name": "Semi Stitched Net/Lace Gown/Anarkali Kurta &amp; Bottom Mat...",
                      "current_price": 339,
                      "link": "https://www.flipkart.com/webric-net-lace-embroidered-gown-anarkali-kurta-bottom-material/p/itm0b88c21aa95a7",
                      "thumbnail": []
                  },
                  {
                      "name": "Semi Stitched Net/Lace Kurta Fabric Embroidered",
                      "current_price": 412,
                      "link": "https://www.flipkart.com/color-bucket-net-lace-embroidered-kurta-fabric/p/itm4fd72904f40cd",
                      "thumbnail": []
                  },
                  {
                      "name": "Unstitched Organza Salwar Suit Material Embroidered",
                      "current_price": 595,
                      "link": "https://www.flipkart.com/suvidhi-synthetics-organza-embroidered-salwar-suit-material/p/itme53e937f84576",
                      "thumbnail": []
                  }
              ]
          },
          "Matching Dupatta": {
              "searchLink": "https://www.flipkart.com/search?marketplace=FLIPKART&q=Shop%20emerald%20green%20dupatta%20with%20embellishments",
              "topResults": [
                  {
                      "name": "Net Embroidered Gold Women Dupatta",
                      "current_price": 188,
                      "link": "https://www.flipkart.com/vihani-net-embroidered-women-dupatta/p/itmc72af83053af5",
                      "thumbnail": []
                  },
                  {
                      "name": "Chiffon Solid Multicolor Women Dupatta",
                      "current_price": 549,
                      "link": "https://www.flipkart.com/hella-fashions-chiffon-solid-women-dupatta/p/itm50a962435d718",
                      "thumbnail": []
                  },
                  {
                      "name": "Organza Printed Blue Women Dupatta",
                      "current_price": 298,
                      "link": "https://www.flipkart.com/v-shop-organza-printed-women-dupatta/p/itm66734eeef6554",
                      "thumbnail": []
                  },
                  {
                      "name": "Organza Printed Light Green, Light Blue Women Dupatta",
                      "current_price": 664,
                      "link": "https://www.flipkart.com/v-shop-organza-printed-women-dupatta/p/itmf7ff8eec6f2d5",
                      "thumbnail": []
                  },
                  {
                      "name": "Poly Chanderi Embellished, Floral Print, Graphic Print,...",
                      "current_price": 625,
                      "link": "https://www.flipkart.com/faserz-poly-chanderi-embellished-floral-print-graphic-printed-women-dupatta/p/itmc71e336ec3aaa",
                      "thumbnail": []
                  }
              ]
          },
          "Statement Earrings": {
              "searchLink": "https://www.flipkart.com/search?marketplace=FLIPKART&q=Find%20gold%20statement%20earrings%20with%20intricate%20detailing",
              "topResults": [
                  {
                      "name": "Afghani Style Earrings Beads Alloy Chandbali Earring",
                      "current_price": 324,
                      "link": "https://www.flipkart.com/ryka-collection-afghani-style-earrings-beads-alloy-chandbali-earring/p/itmaae123630ed87",
                      "thumbnail": []
                  },
                  {
                      "name": "Salty ALPHA Dash Studs Silver Studs Earrings for Mens M...",
                      "current_price": 379,
                      "link": "https://www.flipkart.com/salty-alpha-dash-studs-silver-earrings-mens-metal-stud-earring/p/itmbac00d5ce6c68",
                      "thumbnail": []
                  },
                  {
                      "name": "Gold tassel circle stud Crystal Alloy Tassel Earring",
                      "current_price": 328,
                      "link": "https://www.flipkart.com/yourblingbox-gold-tassel-circle-stud-crystal-alloy-earring/p/itmaab22162e4494",
                      "thumbnail": []
                  },
                  {
                      "name": "American Diamond Gold Plated Earrings Set Zircon Brass ...",
                      "current_price": 319,
                      "link": "https://www.flipkart.com/yourblingbox-american-diamond-gold-plated-earrings-set-zircon-brass-tassel-earring/p/itm820e8db611100",
                      "thumbnail": []
                  },
                  {
                      "name": "Antique Traditional Ethnic South Indian Temple jhumkas ...",
                      "current_price": 299,
                      "link": "https://www.flipkart.com/meenaz-antique-traditional-ethnic-south-indian-temple-jhumkas-pearl-copper-brass-clip-on-earring/p/itm3c13fb6c16e0a",
                      "thumbnail": []
                  }
              ]
          },
          "Ethnic Footwear": {
              "searchLink": "https://www.flipkart.com/search?marketplace=FLIPKART&q=Buy%20embellished%20juttis%20for%20women%20in%20Moradabad",
              "topResults": [
                  {
                      "name": "Punjabi Stone Work Ethnic Shoes Jutis For Women",
                      "current_price": 566,
                      "link": "https://www.flipkart.com/catbird-punjabi-stone-work-ethnic-shoes-jutis-women/p/itmd94e642f4e0e5",
                      "thumbnail": []
                  },
                  {
                      "name": "Men's Suede Matrial Blue Casual Ethnic Mule Inddor Shoe...",
                      "current_price": 899,
                      "link": "https://www.flipkart.com/yuvrato-baxi-men-s-suede-matrial-blue-casual-ethnic-mule-inddor-shoes-women/p/itm1667477b20743",
                      "thumbnail": []
                  },
                  {
                      "name": "Beautiful Soft Flat Jutti | Special Design | Best Comfo...",
                      "current_price": 210,
                      "link": "https://www.flipkart.com/zoyi-beautiful-soft-flat-jutti-special-design-best-comfortable-skin-friendly-bellies-women/p/itm5a7c5e99b8628",
                      "thumbnail": []
                  },
                  {
                      "name": "Sunflower Beige Gold Genuine Soft Leather | Bite Free E...",
                      "current_price": 2699,
                      "link": "https://www.flipkart.com/fulkari-sunflower-beige-gold-genuine-soft-leather-bite-free-embroidered-jutis-40-corporate-casuals-women/p/itm4cfacbd941d8f",
                      "thumbnail": []
                  },
                  {
                      "name": "Slip On For Women",
                      "current_price": 2499,
                      "link": "https://www.flipkart.com/fulkari-slip-women/p/itm96febbb5be52f",
                      "thumbnail": []
                  }
              ]
          },
          "Clutch Bag": {
              "searchLink": "https://www.flipkart.com/search?marketplace=FLIPKART&q=Shop%20embroidered%20clutch%20bag%20for%20Rakshabandhan",
              "topResults": [
                  {
                      "name": "Men Casual Brown Artificial Leather Wallet - Regular Si...",
                      "current_price": 295,
                      "link": "https://www.flipkart.com/highlark-men-casual-brown-artificial-leather-wallet/p/itmfc15becad7fa1",
                      "thumbnail": []
                  },
                  {
                      "name": "Blue Girls Clutch",
                      "current_price": 340,
                      "link": "https://www.flipkart.com/rak-designs-blue-clutch-mobile-sling-bag/p/itm05b8cc2138139",
                      "thumbnail": []
                  },
                  {
                      "name": "Party Purple  Clutch",
                      "current_price": 322,
                      "link": "https://www.flipkart.com/sriaog-party-purple-clutch/p/itma2cda689d5120",
                      "thumbnail": []
                  },
                  {
                      "name": "Women Maroon Hand-held Bag - Regular Size",
                      "current_price": 399,
                      "link": "https://www.flipkart.com/fancy-walas-women-maroon-hand-held-bag/p/itmb1cd2266fbcfb",
                      "thumbnail": []
                  },
                  {
                      "name": "Party Multicolor  Clutch",
                      "current_price": 299,
                      "link": "https://www.flipkart.com/rapid-costore-party-multicolor-clutch/p/itm519591fefdf0e",
                      "thumbnail": []
                  }
              ]
          }
      }
  }
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }

}

export async function getFlipkartSearch(input) {
  const apiUrl = apiUrlBase+`flipkart_search?input=${encodeURIComponent(input)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
