<template>
  <div>
    <DestCard
      v-for="candy in candies"
      :key="candy.name"
      :Candy="candy"
    />
  </div>
</template>

<script setup>
import DestCard from "@/components/DestCard.vue";
const candies = [
  {
    name: "Reese's Peanut Butter Cups",
    img: "https://smartlabel.hersheys.com/images/9a531c52-89e3-4db5-9cc0-d51ef959f002.png",
    price: 1300,
  },
  {
    name: "KitKat",
    img: "https://s7d2.scene7.com/is/image/hersheysassets/0_34000_00246_7_701_24600_070_Item_Front?fmt=png-alpha&hei=908",
    price: 222,
  },
  {
    name: "Sour Patch Kids",
    img: "https://phorcys-static.ewg.org/kwikee/070/462/500/004.jpg",
    price: 222,
  },
  {
    name: "Air Heads",
    img: "https://www.airheads.com/wp-content/uploads/2021/12/bars_0003_AH_Bars_Watermelon_frt-1-1-960x1199.png",
    price: 22,
  },
  {
    name: "Candy Corn",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/candy-corn-9883795-8026965.png",
    price: 323,
  },
  {
    name: "Crybabies",
    img: "https://tootsie.com/core/files/tootsie/products/cb9ce85d04f6d632739a32bb1cfee012.png",
    price: 5412,
  },
  {
    name: "Fun Dip",
    img: "https://www.ferraracandyshopusa.com/sites/default/files/2022-05/1792.png",
    price: 2141,
  },
  {
    name: "Gummi Bears",
    img: "https://images.squarespace-cdn.com/content/v1/5ea0e3a93688fa46d178c5f6/1589924090365-XSO3XKK1BUIP95AJ44G3/GummyBears14_3_Pile.png?format=1000w",
    price: 213,
  },
  {
    name: "Gushers",
    img: "https://i5.walmartimages.com/asr/4aee9d41-1838-4c65-81dc-6722dc440102_1.7d1b2aefb41bee4b4b413ff7f25edd95.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    price: 12312,
  },
    {
    name: "Hershey's Kisses",
    img: "https://s7d1.scene7.com/is/image/hersheyprodcloud/2020JAN17_SeasonalVIS_VAL_Hersheys_Kisses_FOP_MilkChocolate_released?fmt=webp-alpha&hei=412&qlt=75",
    price: 123123,
  },
  {
    name: "Jawbreaker",
    img: "https://allcitycandy.com/cdn/shop/files/IMG_2340-removebg-preview_600x.png?v=1687449112",
    price: 2,
  },
  {
    name: "Jolly Rancher",
    img: "https://s7d2.scene7.com/is/image/hersheysassets/0_10700_55686_8_702_55686_005_Item_Front?fmt=png-alpha&hei=412",
    price: 123,
  },
  {
    name: "Laffy Taffy",
    img: "https://www.laffytaffy.com/sites/default/files/2022-07/Strawberry.png",
    price: 44,
  },
  {
    name: "M&M's",
    img: "https://pngimg.com/d/m_m_PNG33.png",
    price: 1231312,
  },
  {
    name: "Nerds",
    img: "https://www.nerdscandy.com/sites/default/files/2022-06/nerds.png",
    price: 1231231,
  },
    {
    name: "Orange Slices",
    img: "https://shop.trulygoodfoods.com/cdn/shop/products/OrangeSlices_Bulk_521110.png?v=1626363978",
    price: 21313,
  },
  {
    name: "Peeps",
    img: "https://vanholtenschocolates.com/wp-content/uploads/2021/02/LargePeep.png",
    price: 123213,
  },
  {
    name: "Pixie Stix",
    img: "https://www.ferraracandyshopusa.com/sites/default/files/2022-05/1450.png",
    price: 1231,
  },
  {
    name: "Pocky",
    img: "https://www.glico.com/assets/images/original/Pocky%20Chocolate%2070g_Front.png",
    price: 123123,
  },
  {
    name: "Pop Rock",
    img: "https://classiccandybox.com/wp-content/uploads/2018/08/pop-rocks-strawberry.png",
    price: 44,
  },
  {
    name: "Skittles",
    img: "https://pngimg.com/d/skittles_PNG1.png",
    price: 2421,
  },
    {
    name: "Smarties",
    img: "https://www.smarties.com/wp-content/themes/smarties/images/logo.png",
    price: 124141,
  },
  {
    name: "Starburst",
    img: "https://www.starburst.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf621/files/migrate-product-files/v9gbknaa3ep5ubq5neos.png",
    price: 124214,
  },
  {
    name: "Sweedish Fish",
    img: "https://usacandywholesale.com/media/catalog/product/cache/c4613882144a38fd39bd935d8a68301a/s/w/swedish_fish.png",
    price: 21412414141,
  },
  {
    name: "Sweetarts",
    img: "https://www.sweetartscandy.com/sites/default/files/2022-03/272.png",
    price: 21,
  },
  {
    name: "Twizzlers",
    img: "https://waterbutlers.com/cdn/shop/products/Screen-Shot-2019-10-12-at-9.17.38-PM_607x.png?v=1583643653",
    price: 33,
  },
    {
    name: "Warheads",
    img: "https://www.lolliandpops.com/cdn/shop/files/lolli-and-pops-novelty-warheads-mini-bag-28507474493640_2048x.png?v=1698959901",
    price: 123,
  },
  {
    name: "Whoppers",
    img: "https://smartlabel.hersheys.com/images/e4b88bf5-c070-4905-b3d8-a5a78d847372.png",
    price: 323,
  },
  {
    name: "Lifesavers",
    img: "https://www.life-savers.com/sites/g/files/fnmzdf636/files/migrate-product-files/jtlbyrkvu8wdisjrloue.png",
    price: 656,
  },
  {
    name: "Rolo",
    img: "https://smartlabel.hersheys.com/images/e0b76f4e-f128-45f3-91ce-16cbf2e95c4b.png",
    price: 636,
  },
  {
    name: "Milk Duds",
    img: "https://s7d2.scene7.com/is/image/hersheysassets/0_10700_02152_6_702_02152_040_Item_Front?fmt=webp-alpha&hei=908&qlt=75",
    price: 32,
  },
  {
    name: "Bubble Tape",
    img: "https://protinkertoys.com/cdn/shop/products/productsbubble-gum-tape-mountain-sweets-protinkertoys-1_300x300.png?v=1652464810",
    price: 3434,
  },
    {
    name: "Now and Later",
    img: "https://www.nowandlater.com/sites/default/files/2022-11/N%26L%20ORIGINAL%20AST%20STD%20BAR.png",
    price: 35,
  },
  {
    name: "Blow Pop",
    img: "https://tootsie.com/core/files/tootsie/products/9998d60b99b43ba6710e2a1588e845b2.png",
    price: 12,
  },
  {
    name: "Lemon Head",
    img: "https://allcitycandy.com/cdn/shop/products/00041420126031_A1C1_2048x.png?v=1655484488",
    price: 69,
  },
]
</script>

<style scoped></style>