const allData = [
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d7e22c74-3cf7-4f36-9482-ab2ffe5349f4.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Pyrite Slim Fit Pocket Joggers",
    price: 2029.53,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7b5faf0c-8f8e-496e-bdb3-ec16ad0c592b.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Essentials Cotton Blend Sweatpants",
    price: 7739.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/752e8286-c6d8-4ae4-beb1-6f19e743825f.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Essentials Cotton Blend Sweatpants",
    price: 7739.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dcb44bd1-ac55-4d8f-b138-1b5a6327e022.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Men's Millerton Waterproof Hooded Jacket",
    price: 11093.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6af663de-257e-4cfb-ad85-3e9a254e3973.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Strato Slim Fit Crewneck Tech T-Shirt",
    price: 4643.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/713fa81b-9faf-409c-8853-cd7b99142ce9.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dry 3-Pack Everyday Plus Cushion Crew Training Socks",
    price: 1547.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/97508d3d-72bc-42c0-8bf7-a22abaffe348.jpeg?h=365&w=240&dpr=2",
    brandName: "Bonobos",
    productDetail: "Stretch Washed Chino 2.0 Pants (Regular & Tall)",
    price: 8513.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7a9f2e60-9936-4241-8f3e-1a7415f9a443.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Men's 86 Mountain Wind Jacket",
    price: 8513.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3957ed49-01ef-4c25-8d11-703cfc582628.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Club Hoodie",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4414f97d-cadf-41a4-ba5b-9aa8e5a0a580.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Sunday Performance Jogger Sweatpants",
    price: 8427.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/24c88c7b-5998-4cbb-a353-b170e2205633.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Strato Tech Polo",
    price: 5503.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0daf6954-9114-428c-af51-a810aea495bc.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Essential Cotton Blend Hoodie",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5070e1aa-34f1-465c-9c67-ac82b015e00c.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Tech Fleece Zip Hoodie",
    price: 11179.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6e25ad32-57e1-4038-8d58-cc5e1d433bb3.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Kore Shorts",
    price: 5847.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/03a12909-2f15-4015-8629-2dfa74e0968d.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Gym Shorts",
    price: 3007.31,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5a13388e-7669-4353-82da-54695355d1e4.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail:
      "Men's 2-Pack Dri-FIT Stretch Cotton Crewneck T-Shirts",
    price: 3654.87,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0e7a86ca-93f3-4d95-a0bc-bc2561f942c0.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Aconagua 2 Down Vest",
    price: 11953.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/80137954-feaa-4172-b644-26e58aa1de03.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Men's Club Pocket Fleece Joggers",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8e6c2137-461e-4802-8d4a-73d79ec10265.jpeg?h=365&w=240&dpr=2",
    brandName: "Polo Ralph Lauren",
    productDetail: "3-Pack Tech Athletic Quarter Socks",
    price: 1324.35,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1ac4dff8-c798-4ab7-8d36-67496b8b45f4.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "ThermoBall™ Eco Hooded Jacket",
    price: 19779.29,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a55f31b9-b029-4471-8e74-cc3b2b71a282.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Cotton Blend Crewneck Sweatshirt",
    price: 6879.75,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2411e43a-48c5-49e6-aaab-77c4016f7f3d.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "Travis Mathew The Zinna Slub Piqué Polo",
    price: 7305.44,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e25abff6-8d77-4ebf-94ea-e5899e5e50ea.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Drum Stripe Performance Polo",
    price: 5899.39,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bf46f0dd-c41c-4fea-b355-6c7d5c4e5249.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Essential 3-Pack Stretch Cotton Boxer Briefs",
    price: 2192.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cea59391-4670-41e4-9f96-583266948809.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Meta Pants",
    price: 11007.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/96d4f35b-ceb1-4788-a87f-97b7fa26ddcb.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Essentials Sweatpants",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/37c55c1c-eef8-4807-85f5-45154c06a338.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Men's Tech Fleece Jogger Sweatpants",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6c86eb63-8235-4ff6-8a7a-f18f6c84cbc2.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Static Training T-Shirt",
    price: 2063.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b061eb8b-cf64-4715-be52-daac8d3adc67.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Live-In Pocket Shorts",
    price: 2405.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/834efa9f-2614-4e5f-b382-4d4f190729f8.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Essentials Cotton Blend Sweatpants",
    price: 7739.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/db836c55-30b4-4c10-af27-a57da38996e3.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Perth Stripe Quarter Zip Performance Pullover",
    price: 11609.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fafae9f0-49dd-40ea-90be-c60116da9ce1.jpeg?h=365&w=240&dpr=2",
    brandName: "vineyard vines",
    productDetail: "Jean Stripe Sankaty Performance Polo",
    price: 4288.67,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4689134a-1baa-42ec-9b29-1079b70badf6.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Essentials Cotton Blend Sweatpants",
    price: 7739.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b208c1b6-bca9-4704-927e-3f5982661ded.jpeg?h=365&w=240&dpr=2",
    brandName: "Calvin Klein",
    productDetail: "3-Pack Moisture Wicking Stretch Cotton Trunks",
    price: 2859.4,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/79ad1216-7abc-4719-8c75-3e31f44364bf.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Men's Nuptse® 1996 Packable Quilted Down Jacket",
    price: 27519.01,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3b8d886a-9e1e-4f79-aa21-7903f9dde6c0.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Perth Performance Quarter Zip Pullover",
    price: 9889.64,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/48a82687-066b-446a-9b80-fa56ff522ce9.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Cotton Blend Joggers",
    price: 7739.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/42f3641d-4ea0-489f-a2e1-bd8eb348cba7.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Men's Live In Pocket Joggers",
    price: 3867.28,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e9b42e3a-2625-4b8b-abad-4cd2a399f230.jpeg?h=365&w=240&dpr=2",
    brandName: "Calvin Klein",
    productDetail: "Assorted 3-Pack Socks",
    price: 1324.35,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/868bb031-f88d-43eb-81a5-5815092bbcd0.jpeg?h=365&w=240&dpr=2",
    brandName: "Faherty",
    productDetail: "Movement Long Sleeve Polo Shirt",
    price: 10147.63,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ec236119-30ae-4270-a2f2-d05cb002b83b.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Hybrid Tech Commuter Pants",
    price: 6793.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0e7486a9-93bb-47d9-947c-5a4052ff4157.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "eb66 Regular Fit Performance Pants",
    price: 13587.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8ee6420d-ed8b-4b7d-8a0c-5eea8cff5e12.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Ponto Shorts",
    price: 6707.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1e5f7aa1-1374-489b-9c83-a504fd9765a0.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Crafted Stealth Quarter Zip Performance Pullover",
    price: 9889.64,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4cabae55-0fe0-45df-a93a-ae6a25dc2d42.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Crew Neck Short Sleeve T-Shirt",
    price: 3508.67,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dade485d-5665-4cde-bd9f-3ef47ff3bab0.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Banks Hybrid Shorts",
    price: 5847.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/68f62117-fff3-4d2a-b0bd-f851fde947df.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Torrey Performance Shorts",
    price: 2147.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c5851198-17e4-40c3-b8d3-68c0c27041c3.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Driver Performance Polo",
    price: 2147.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/897a9f61-650f-4018-a79d-bb43dff6c81c.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Club Hoodie",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3d83d7a2-9873-47ca-9735-e3be299256a1.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "Beck Stretch Performance Shorts",
    price: 7305.44,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d2b2a973-5a6e-4158-90c6-0d12c8667b85.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Fleece Hoodie",
    price: 3745.16,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7ec58b1d-4126-40eb-adc7-2b50f7b18325.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Men's Seamless Quarter Zip Pullover",
    price: 2528.31,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a987de59-c8e1-4db3-9413-4fe3ea189202.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Restore Pullover Hoodie",
    price: 2319.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2d604d81-1f31-488c-a605-642287507437.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Ponto Performance Crew Pullover",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5aa8b572-f56e-4d07-81c5-413993793e4d.jpeg?h=365&w=240&dpr=2",
    brandName: "Mizzen+Main",
    productDetail: "Versa Polo",
    price: 3405.48,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f754bd7d-5a96-4c96-82a2-84b0454953b0.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Pyrite Zip Hoodie",
    price: 2835.32,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f33eb0cd-f3aa-4953-b4ae-3aba35d2fae3.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dry 6-Pack Everyday Plus Cushion Crew Training Socks",
    price: 1891.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/192e5ba1-05ba-40d7-b1ba-96a617f90f9e.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Captain Stripe Performance Polo Shirt",
    price: 5899.39,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3a40b600-4171-40cd-8069-4beacf0d782c.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Pyrite Lite Pullover Hoodie",
    price: 1685.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/de70c50c-6934-4155-b0e3-14fde8b7dff0.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Alpine Voyage Print Performance Polo",
    price: 5899.39,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e2fb1d7f-e4bd-42e2-a6ba-d175097b726d.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Taslan Shorts",
    price: 6019.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/47580fbb-0988-4a3f-93d8-78d16116d210.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Men's Motion 3-Pack Ankle Socks",
    price: 967.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3eba4372-4be0-4864-80ef-7adb28bca83f.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Ponto Performance Pants",
    price: 8427.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/baea59c5-dad6-4480-864e-3efd84b4ef5c.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Core Pocket Stretch Woven Pants",
    price: 2147.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3df96f1a-9ca2-489d-b59b-72976cc387f8.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Men's Performance Band Collar Polo",
    price: 3437.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e1085562-f1a9-4c45-a9dc-d93424cdded7.jpeg?h=365&w=240&dpr=2",
    brandName: "BOSS",
    productDetail: "Men's Core Stretch Cotton & Modal Track Jacket",
    price: 11867.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/83e1452f-5b35-4c26-b5f9-8324786df4a0.jpeg?h=365&w=240&dpr=2",
    brandName: "Polo Ralph Lauren",
    productDetail: "3-Pack Tech Athletic Quarter Socks",
    price: 1324.35,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ef200b55-dac4-451d-8c3b-4f1e105bfbb2.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail:
      "Lodge Packable Windproof 750 Fill Power Down Hooded Jacket",
    price: 59767.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/972be365-1c85-42e8-a407-80d678259b9d.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dry 3-Pack Everyday Plus Cushion Low Training Socks",
    price: 1547.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7306cf37-1cc5-44d3-993f-47a72a7b9807.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Yoga Dri-FIT Zip-Up Hoodie",
    price: 2749.32,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/48d97ddd-d1b0-412b-8c2c-df520f63a187.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "The Crew Performance T-Shirt",
    price: 5155.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b0e41743-bc65-4ce0-b91d-f39cde8bdcfa.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Cotton Blend Joggers",
    price: 7739.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0e00d67c-934f-4ac5-802c-e669797db4d1.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Static Training T-Shirt",
    price: 3439.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6d48f6c5-01ec-4233-b0c0-f7183f8737fa.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Tradewind Pocket Performance T-Shirt",
    price: 4987.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/258d10ff-6f3f-423e-9c7d-598834bd4ed9.jpeg?h=365&w=240&dpr=2",
    brandName: "Faherty",
    productDetail: "Cloud Cotton Blend Polo",
    price: 6320.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a24ee0dd-ad87-42a3-829b-fe4e0a8421b9.jpeg?h=365&w=240&dpr=2",
    brandName: "Marine Layer",
    productDetail: "Afternoon Full Zip Hoodie",
    price: 8427.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2ce25e00-ac9f-429a-982e-b7c28942b678.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Thermoball Eco Quilted Puffer Coat",
    price: 19779.29,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c84b37a9-6261-461e-95c7-8d9b9af638c4.jpeg?h=365&w=240&dpr=2",
    brandName: "vineyard vines",
    productDetail: "Men's Sankaty Performance Quarter Zip Pullover",
    price: 6604.56,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d54707f3-6d25-448b-89d9-e6668005f3db.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Pyrite Knit Shorts",
    price: 1889.35,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/69e1200b-9cf1-4592-83d1-01acb243648a.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Ease Performance Half-Zip Pullover",
    price: 6535.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/97c956e4-1d8a-441c-9ec6-f554b19c51a1.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Taslan Track Pants",
    price: 11609.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b99d292e-acbf-4813-acc3-ee6970d44a7a.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Essentials Long Sleeve Polo Sweatshirt",
    price: 6019.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6df05f90-f0d0-42e3-aecc-2d6b0d4043a0.jpeg?h=365&w=240&dpr=2",
    brandName: "Faherty",
    productDetail: "Belt Loop All Day Hybrid Shorts",
    price: 5899.39,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cde7ab60-7034-4180-a3ca-ebdb8129415b.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Strata Fleece Golf Vest",
    price: 3856.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/86d09c0c-9f8a-4b17-8fe4-7fb4a538029b.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Men's ThermoBall™ Eco Vest",
    price: 12813.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6119bd9a-f125-4230-9e84-78c98be3cb35.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Sunday Element Jacket",
    price: 10147.63,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cfc6ccbb-71c9-4037-861c-aaaf3ee74871.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Men's Performance Long Sleeve T-Shirt",
    price: 1373.37,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fe59f2bb-1b07-4584-a10b-1ba237b7e9ee.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Awesome Mix Socks",
    price: 859.11,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d92b8724-3b44-4adf-ad3b-db3a125d6326.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Antora Waterproof Hooded Rain Jacket",
    price: 9373.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4e6c5703-e6d0-4dc7-a5b0-088902b81872.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Bolinas Henley Hoodie",
    price: 5071.24,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5a13388e-7669-4353-82da-54695355d1e4.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail:
      "Men's 2-Pack Dri-FIT Stretch Cotton Crewneck T-Shirts",
    price: 3654.87,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2660043c-512f-4b1e-8483-101a9fc57477.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Adicolor Essentials Recycled Polyester Shorts",
    price: 1459.37,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4664a52d-25f1-443e-9c97-38183c9e0c46.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Seamless Performance T-Shirt",
    price: 3353.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b0b04fb0-81a1-4293-8f51-ad65c633a90b.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Nike Dri-FIT Challenger Running Pants",
    price: 4192.35,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fb8de81a-85a4-4f50-8527-851217d6c418.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Men's TKA Kataka Fleece Pullover",
    price: 5959.59,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/49a52e1a-bf67-4bcd-8524-a02b07abd1f7.jpeg?h=365&w=240&dpr=2",
    brandName: "Billy Reid",
    productDetail: "Cotton Blend Knit Polo Shirt",
    price: 11007.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a2fdb312-b281-44cd-a086-f9441e091a49.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Men's Core Stretch Woven Shorts",
    price: 1685.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9322dd22-e620-4f1e-bf1b-48a49ab7f2c8.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "The Crew Long Sleeve T-Shirt",
    price: 6015.48,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0a2c4239-091e-437a-8fe4-09c28ab1f2ce.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Heritage Patch Recycled Cotton Blend Hoodie",
    price: 5073.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ee40cb39-5393-4c29-ac08-90efc144d9cd.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Hydrenalite 550 Fill Power Down Jacket",
    price: 21499.23,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cc60dcfe-6047-46ed-86aa-3481d0f13704.jpeg?h=365&w=240&dpr=2",
    brandName: "Polo Ralph Lauren",
    productDetail: "3-Pack Tech Athletic Crew Socks",
    price: 1324.35,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1ac4dff8-c798-4ab7-8d36-67496b8b45f4.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "ThermoBall™ Eco Hooded Jacket",
    price: 19779.29,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/881500bc-753d-409d-9bc6-730baf34ebf0.jpeg?h=365&w=240&dpr=2",
    brandName: "Calvin Klein",
    productDetail: "Men's 3-Pack Stretch Boxer Briefs",
    price: 5546.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7b5254ca-4a10-4ce4-9635-8262e5f0249c.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Mako Water Repellent Athletic Shorts",
    price: 5847.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1037bce8-5908-4456-a163-7254e080d869.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Live In Sporty Pullover Hoodie",
    price: 2790.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6577d4c3-85d6-49f5-8fba-0791e68118fd.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail:
      "Men's 1996 Retro Nuptse 700 Fill Power Down Packable Jacket",
    price: 27519.01,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bedc5c51-f664-46e5-a976-b62d10c88ff8.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dry 3-Pack Everyday Plus No Show Socks",
    price: 1547.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3c58bda5-be33-4068-8c98-4ea04ff18c8f.jpeg?h=365&w=240&dpr=2",
    brandName: "Kappa",
    productDetail: "222 Banda Anniston Track Jacket",
    price: 4127.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d2a860e3-972e-4854-a9fb-01cb6d2806f0.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Pint Night Performance Polo",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/158f94bd-8750-4013-9927-35196e117370.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Newington Waterproof 550 Fill Power Down Jacket",
    price: 19346.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/000159b1-9757-4296-9ea5-b638e2cab1a6.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Essentials Long Sleeve Polo Sweatshirt",
    price: 6019.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7ff5bdce-bdfb-4e6d-a1f2-149b3ec7e5e0.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Element Organic Cotton Blend T-Shirt",
    price: 4127.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/004ef1a2-979c-41db-b8cd-3381f2d2c1c7.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Trefoil 6-Pack Crew Socks",
    price: 1719.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bff5b6c6-fcc9-4957-b7bd-38caa5805f6d.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Sunday Performance Shorts",
    price: 7223.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f369b2e3-8533-4440-9257-b84b6bf7e89c.jpeg?h=365&w=240&dpr=2",
    brandName: "Kappa",
    productDetail: "Men's 222 Banda Hurtado Graphic Hoodie",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fc96755a-00e3-4a5b-ad06-69b0bb0bdc83.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Delta Piqué Long Sleeve Golf Polo",
    price: 8427.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0ee831ae-67b5-4ab7-8f9c-712ce97c7e7a.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Ripstop Drawstring Shorts",
    price: 5503.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3811a246-f89e-45e4-9921-dd9400f64e48.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Golf",
    productDetail: "Half Zip Pullover",
    price: 6449.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ab073e83-11bb-4ec7-8ddc-f1749423f909.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Waffle Crewneck T-Shirt",
    price: 7223.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3ea68da6-4b2c-489e-8006-82bba9aec12b.jpeg?h=365&w=240&dpr=2",
    brandName: "Pair of Thieves",
    productDetail: "3-Pack Blackout Whiteout Crew Socks",
    price: 1117.1,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4fa92ddb-24dd-41d3-8249-5a8678bf2b25.jpeg?h=365&w=240&dpr=2",
    brandName: "Pair of Thieves",
    productDetail: "3-Pack No-Show Socks",
    price: 1117.1,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/95b6bd4b-b064-473f-bea9-933a4466f749.jpeg?h=365&w=240&dpr=2",
    brandName: "Calvin Klein",
    productDetail: "5-Pack Boxer Briefs",
    price: 3918.02,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1223d689-665c-4f0a-aad5-b648cdcf7d39.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Essentials Sweatpants",
    price: 7567.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/64f6b86e-10b2-4772-b3a0-7efeb126383a.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "Chateau Slim Fit Down Parka",
    price: 85566.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/50b31a63-6fe4-439f-9949-c2285bca102a.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail:
      "Crofton Water Resistant Packable Quilted 750-Fill-Power Down Vest",
    price: 47298.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/938bae6d-bd69-4dca-ac74-3c06a0e539c2.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Men's Flex 2.0 Plus Pocket Training Pants",
    price: 4321.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e4d5c71e-9659-48e4-b8c5-b3b52129b498.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Pro Dri-FIT Performance Slim Fit T-Shirt",
    price: 2016.63,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5ab815c9-e6fb-4486-9c68-85e3669d7a71.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "Lodge Packable 750 Fill Power Down Jacket",
    price: 55897.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c84c89d7-b61c-4134-8324-c726060b1fb2.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Tech Fleece Hoodie",
    price: 6337.97,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4451ba09-42ab-49e6-bc83-ddbca5c03b42.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Therma-FIT Pullover Hoodie (Tall)",
    price: 5159.81,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1a0a1ee0-e272-4348-9fd5-646ac7c873e4.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Perth Birdseye Quarter Zip Performance Pullover",
    price: 11609.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/93f6b43c-1ebe-43ed-9576-3bba2f418bff.jpeg?h=365&w=240&dpr=2",
    brandName: "Kappa",
    productDetail: "222 Banda Anniston Track Jacket",
    price: 4127.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7d134beb-e813-4472-9559-d15d71ec7837.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Strato Long Sleeve Tech Performance T-Shirt",
    price: 5503.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/08ba8afb-8097-4ca3-b35e-ee40c0afee48.jpeg?h=365&w=240&dpr=2",
    brandName: "Brooks",
    productDetail: "Spartan Zip Pocket Joggers",
    price: 2749.32,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/32e093b7-543b-42af-b8f9-8081764e53ae.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Session Quarter Zip Pullover",
    price: 9287.67,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0c8464a0-0dcc-4a65-9819-110845f43701.jpeg?h=365&w=240&dpr=2",
    brandName: "Alo",
    productDetail: "Men's Idol Stretch T-Shirt",
    price: 7567.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a2a2a761-57bd-404d-a6d9-3e8e5a0d1b72.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike Golf",
    productDetail: "Men's Dri-FIT Vapor Slim Fit Golf Pants",
    price: 5473.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2dd282f2-da7a-4b16-b5a3-759d91d9b898.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Challenger Hybrid Running Shorts",
    price: 1805.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d4b49aaf-8996-44af-a736-ba49b5c7ec77.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Men's Hybrid Tech Commuter Jacket",
    price: 3396.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/22473616-06b1-419b-8c16-c3a6a3bc79e2.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Commuter Slim Fit Pants",
    price: 7154.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8383cd65-5ef5-4000-956f-0cc4d45eee1b.jpeg?h=365&w=240&dpr=2",
    brandName: "Calvin Klein",
    productDetail: "3-Pack Micro Cushion No-Show Socks",
    price: 1719.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9ee1ad27-8a65-474e-8535-5d73104134a5.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Torrey Performance Pants",
    price: 2319.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5fb77984-5499-48cd-b721-0ff4aada02f4.jpeg?h=365&w=240&dpr=2",
    brandName: "Mizzen+Main",
    productDetail: "Men's Versa Solid Performance Golf Polo",
    price: 7567.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dd468638-d1be-44f3-ad0f-e6c5eb4b9736.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Wellbeing Performance Training Shorts",
    price: 1803.35,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/92b06027-dc4f-455e-b878-2bdcacb690a1.jpeg?h=365&w=240&dpr=2",
    brandName: "Mack Weldon",
    productDetail: "AIRKNITx Performance Boxer Briefs",
    price: 2751.9,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/13a267c3-99d4-4a93-a4fe-bbba8d3f45cd.jpeg?h=365&w=240&dpr=2",
    brandName: "Polo Ralph Lauren",
    productDetail:
      "Assorted 3-Pack 4D Flex Performance Mesh Boxer Briefs",
    price: 2979.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/75a06786-6125-4b6d-8215-2f727db2b8bb.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Drum Stripe Performance Polo",
    price: 8427.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b8b83b80-b84b-456e-a0bc-244658cb028e.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Essentials No-Show Socks",
    price: 1203.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d38cc3cc-470f-430c-a986-9a4d22c68261.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Men's 3-Pack No-Show Liner Socks",
    price: 859.97,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0a24c7e0-e2de-4300-bcce-8a6d41d58cea.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Reign All Around Quarter Zip Sweatshirt",
    price: 5056.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ba3c419c-7e25-4f11-b8b8-a9b2d9209a3e.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "3-Pack Run Light No-Show Socks",
    price: 3439.02,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/124998b8-c097-4300-b1f8-265f6a7ca789.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Ripstop Pants",
    price: 8427.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d31698c0-d553-4070-b972-dce24b583d2d.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Assorted 3-Pack Originals Trefoil Crew Socks",
    price: 1547.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/53180eaf-2370-45ab-ac84-1c976e10034e.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Phenom Elite Performance Running Pants",
    price: 3265.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/24393192-816d-440c-974c-82ef0aa00717.jpeg?h=365&w=240&dpr=2",
    brandName: "Happy Socks",
    productDetail: "Island in the Sun Crew Socks",
    price: 1203.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/90042df1-d3c7-4ff1-8ca2-e5bd3bc47390.jpeg?h=365&w=240&dpr=2",
    brandName: "Calvin Klein",
    productDetail: "Assorted 3-Pack Stretch Modal Trunks",
    price: 3882.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4dbf4269-81f8-43fd-b579-05b093eae44a.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "In Flight Print Polo",
    price: 3044.29,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0f14ed28-fdc7-4627-b6e5-a2da6d5e066a.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Half Dome Graphic Pullover Hoodie",
    price: 5073.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/82f11692-3359-4455-ac60-3ddd86de46bc.jpeg?h=365&w=240&dpr=2",
    brandName: "Happy Socks",
    productDetail: "Lunch Time Socks",
    price: 1203.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e1a3c383-7309-43ee-bc44-f9496676d097.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "ADV Logo Graphic Hoodie",
    price: 4609.43,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/aed47a05-2af2-4d69-b758-cf91b99399b0.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Ultra Super Soft 2-Pack Relaxed Fit Boxer Briefs",
    price: 5241.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e63fec3c-0076-443d-af65-a06d96a1449b.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Performance Training Shorts",
    price: 2106.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0df1634b-7065-4b04-9a4f-6e84fc293f2e.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Originals Assorted 6-Pack No-Show Socks",
    price: 1719.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0ab7d626-1869-4e33-bc60-8b3748342594.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "2-Pack Superlite Performance No-Show Running Socks",
    price: 1203.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f688b172-fc6c-4dc8-bb05-25c09ae54439.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike Golf",
    productDetail: "Nike Dri-FIT Men's Pinstripe Player Polo",
    price: 2749.32,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9ec3ad3a-1515-49c8-9d93-a387964c3fc3.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Restore Long Sleeve T-Shirt",
    price: 2147.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9a488602-0f7d-44aa-bfd0-4afc7a0b24e9.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Boyd St. Socks",
    price: 1289.09,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/63479e5d-ea0c-4f9c-9ab8-9899302e3fbf.jpeg?h=365&w=240&dpr=2",
    brandName: "Reiss",
    productDetail: "Maxwell Quarter Zip Merino Polo",
    price: 12469.55,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c57dd2c0-ab4f-40f1-a8f2-0c5dcab5afba.jpeg?h=365&w=240&dpr=2",
    brandName: "Chubbies",
    productDetail: "Performance Stretch Polo",
    price: 5116.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7a9f2e60-9936-4241-8f3e-1a7415f9a443.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Men's 86 Mountain Wind Jacket",
    price: 8513.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6fe424bd-c3b4-46d4-8535-97c7ffc761e5.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Trefoil 6-Pack Quarter Socks",
    price: 1719.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fe751b54-0ca5-4794-b09b-5e11ffec3256.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "Travis Mathew The Zinna Slub Piqué Polo",
    price: 7305.44,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9242fe33-12bd-4ec8-bb97-a774ee96b6be.jpeg?h=365&w=240&dpr=2",
    brandName: "7 Diamonds",
    productDetail: "Velocity Hybrid Shorts",
    price: 4213.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/23291a10-0cdc-4a6e-95f4-9d40a22eaf1d.jpeg?h=365&w=240&dpr=2",
    brandName: "RVCA",
    productDetail: "Men's Yogger Stretch Athletic Shorts",
    price: 5159.81,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/639c6b46-2401-4baa-bc4a-d56796d77340.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "Hybridge 750 Fill Power Down Jacket",
    price: 73097.36,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a0c38208-0136-48e9-8841-6e5ae20b5692.jpeg?h=365&w=240&dpr=2",
    brandName: "HUGO",
    productDetail: "Men's Tracksuit Jacket",
    price: 11867.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1178cbe4-adeb-4dba-a89d-be9fe1259b52.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Essential Shorts",
    price: 3009.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8e778b5a-16fc-4124-a439-b65d9d1f7140.jpeg?h=365&w=240&dpr=2",
    brandName: "ASOS DESIGN",
    productDetail: "Oversize Short Sleeve Zip Shirt",
    price: 1651.14,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dcaeffc8-abe2-4e99-9af4-0c48d789f4de.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Relaxed Crewneck Sweatshirt",
    price: 6879.75,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cd53c852-9d37-4ad3-b6fa-f983e1e90b82.jpeg?h=365&w=240&dpr=2",
    brandName: "ASOS DESIGN",
    productDetail: "Oversize Rugby Polo",
    price: 3181.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/32594221-0a43-4b86-ac87-0e1613082a0f.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Live-In Pocket Shorts",
    price: 3074.39,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/75c1bd93-6344-4970-ae2d-8edfb59cc411.jpeg?h=365&w=240&dpr=2",
    brandName: "RVCA",
    productDetail: "Yogger IV Athletic Shorts",
    price: 4815.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/35d250f3-b184-4e7b-9eb6-00f867ec57e2.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Men's Sportswear Graphic Tee",
    price: 3009.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d0bd72d1-83f3-4e56-b88f-8991da16a4fa.jpeg?h=365&w=240&dpr=2",
    brandName: "Lorenzo Uomo",
    productDetail: "Stripe Wool Blend Dress Socks",
    price: 1074.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/867afdcf-2f17-436e-bd4e-4b0b5dbb4ab4.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Flex Pocket Yoga Shorts",
    price: 2147.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1d0f2fa6-b644-4e81-879d-4ddebbc333a2.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "Maitland Black Label Slim Fit Down Fill Parka",
    price: 81697.06,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/53826e50-57bc-4110-ab82-036c9374417b.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Elite Basketball Shorts",
    price: 1631.36,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7eacfcee-e142-4022-8f54-d107de835216.jpeg?h=365&w=240&dpr=2",
    brandName: "Calvin Klein",
    productDetail: "Embossed Icon Micro Low Rise Trunks",
    price: 1805.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/712c65df-2ed1-4eab-b323-cf7756796b6e.jpeg?h=365&w=240&dpr=2",
    brandName: "Cutter & Buck",
    productDetail: "Advantage Golf Polo",
    price: 3912.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/43077a2f-ca09-45cf-a780-eac72cef7ff1.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Element Half Zip Running Pullover",
    price: 5847.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1524757e-6dce-4dc2-8bd1-3cd7f86e0fe2.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Essential T-Shirt",
    price: 2149.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8f5f8f0f-431c-4207-8230-160049dca1a7.jpeg?h=365&w=240&dpr=2",
    brandName: "Robert Barakett",
    productDetail: "Cloverdale Waffle Knit Polo",
    price: 5134.01,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7b3e5ee5-7400-4c2f-bdd3-478fe2c424f6.jpeg?h=365&w=240&dpr=2",
    brandName: "Smartwool",
    productDetail:
      "Hike Classic Edition Light Cushion Wool Blend Crew Socks",
    price: 1719.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1b460ff9-b78e-4be4-b679-a1dbfafa9b37.jpeg?h=365&w=240&dpr=2",
    brandName: "Vince",
    productDetail: "Modern Joggers",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/92edf32f-898c-4e95-b87e-860fbbba61e7.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Element Dri-FIT Long Sleeve Running T-Shirt",
    price: 4987.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1da08dd7-1309-403a-b1b0-bc47197438d4.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Vent Max Pants",
    price: 6449.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4ad47ad7-b4b4-419d-9a8a-0cd40462aa60.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Golf",
    productDetail: "Recycled Polyester Half-Zip Pullover",
    price: 5589.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c2081943-c191-498b-8e81-287433db1622.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Reign Long Sleeve Performance T-Shirt",
    price: 4298.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9badf717-ab54-402b-8990-14cc902b4e88.jpeg?h=365&w=240&dpr=2",
    brandName: "Cutter & Buck",
    productDetail: "Lakemont Half Zip Sweater",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6d22be66-5fab-4835-9f8f-1ba73c7015f5.jpeg?h=365&w=240&dpr=2",
    brandName: "Tommy John",
    productDetail: "2-Pack Cool Cotton 4-Inch Boxer Briefs",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9ace241b-8f23-46f7-9aff-d211521bf26b.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Therma-FIT Fitness Full Zip Hoodie (Regular & Tall)",
    price: 5589.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8d42c9f6-8542-485c-8716-58447a49bd8d.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT DNA Basketball Shorts",
    price: 6019.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9f0d395b-f953-4ade-8547-3fd545fec793.jpeg?h=365&w=240&dpr=2",
    brandName: "Billionaire Boys Club",
    productDetail: "Men's Racing Team Cotton Graphic Tee",
    price: 4299.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/82db6adb-94c6-4c20-8c14-936b8657ded9.jpeg?h=365&w=240&dpr=2",
    brandName: "Tommy Bahama",
    productDetail: "San Aria IslandZone® Performance Polo",
    price: 4395.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ce3b488a-56b4-4315-baf9-28072ed73672.jpeg?h=365&w=240&dpr=2",
    brandName: "Bombas",
    productDetail: "Marl Cushioned No-Show Socks",
    price: 1117.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c94e19bb-a502-46f1-89a3-a602ba605cef.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Windrunner Jacket",
    price: 8599.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/122d05f3-361f-4a31-9e57-901ab4c9849c.jpeg?h=365&w=240&dpr=2",
    brandName: "Lorenzo Uomo",
    productDetail: "Colorblock Wool Blend Dress Socks",
    price: 1074.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9c30e709-f4c1-437d-85b8-82f75ea378a4.jpeg?h=365&w=240&dpr=2",
    brandName: "Fourlaps",
    productDetail: "Bolt 7 Inch Shorts",
    price: 2491.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/121ad239-b348-4d1e-9a60-a602d41ce4bd.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Bear Graphic Cotton Blend Hoodie",
    price: 5073.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/721df9e8-b646-44fe-b8a8-cf7ae624334b.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Avid Coolmax Pocket Golf Polo",
    price: 3297.98,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/54dccbc9-bcfe-48ab-81a2-28daf3cbaa1c.jpeg?h=365&w=240&dpr=2",
    brandName: "Reiss",
    productDetail: "Maxwell Quarter Zip Merino Wool Polo",
    price: 12469.55,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b7844653-619e-4c0c-ae55-902de1d41438.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Fleet Tech Pants",
    price: 10147.63,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/59b87867-74df-4087-bd38-8cc604c82a17.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Men's Embroidered Trefoil Organic Cotton Hoodie",
    price: 4609.43,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b4fdb006-eefd-473d-9841-d58642b19715.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Current Stripe Performance Polo",
    price: 6742.16,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/eeeb3de1-6377-49c0-a69c-7003dac040b8.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Crafted Ross Performance Polo",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f143ab33-c694-4045-bde8-6ce9ad449b81.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Ultra Super Soft Relaxed Fit Boxer Briefs",
    price: 2923.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5c760c60-5a1d-46cb-b01a-da27e9fd4864.jpeg?h=365&w=240&dpr=2",
    brandName: "Kappa",
    productDetail: "222 Banda Calsi 2 Short Sleeve Cotton Polo",
    price: 3912.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4b5c1425-2616-4f99-ade1-7e224ac88fd5.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike Golf",
    productDetail: "Dri-FIT Victory Golf Polo",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4895c1ff-9827-4a6f-b161-eb5757f907a0.jpeg?h=365&w=240&dpr=2",
    brandName: "Billionaire Boys Club",
    productDetail: "Camo Arch Logo Graphic Tee",
    price: 4299.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e666de2e-8da5-4e39-8667-22b227aa99ea.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Revival Joggers",
    price: 5589.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2b93453d-8fde-4f44-bdd5-1bde7494b87c.jpeg?h=365&w=240&dpr=2",
    brandName: "Tommy John",
    productDetail: "2-Pack 360 Sport 6-Inch Hammock Pouch™ Boxer Briefs",
    price: 4299.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a2709cfe-2dc3-4167-aff6-cf0b664f79f9.jpeg?h=365&w=240&dpr=2",
    brandName: "BOSS",
    productDetail: "Men's Ease Track Jacket",
    price: 8427.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/700a391f-7e01-4f90-9b55-25f92bbe6f95.jpeg?h=365&w=240&dpr=2",
    brandName: "Reiss",
    productDetail: "Jasper Zip Polo",
    price: 13759.5,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c2b58fa4-d6e3-4388-9e04-86e4ac78845b.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Mako Water Resistant Performance Athletic Shorts",
    price: 5847.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/47d207c7-09e0-43e2-8b96-4361da5dcd9e.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "Hybridge™ Lite 800 Power Fill Down Jacket",
    price: 55897.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5f64658c-0140-4006-93f4-23d8fa0fdfa1.jpeg?h=365&w=240&dpr=2",
    brandName: "Mizzen+Main",
    productDetail: "Men's Versa Stripe Performance Golf Polo",
    price: 7567.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/68f9773b-eaec-4313-822e-f2a6e106b9db.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Dryzzle FUTURELIGHT™ Jacket",
    price: 14830.17,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/714e4bf9-e8d6-4b79-8bc4-4b492fc5a3c9.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Jams Socks",
    price: 1719.08,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ec06c277-a974-436e-9008-36e6e0e7394d.jpeg?h=365&w=240&dpr=2",
    brandName: "Callaway Golf®",
    productDetail: "High Gauge Fleece Vest",
    price: 6449.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dfe336f7-7c88-42ac-bbb8-72623cc1352e.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Ultra Super Soft 3-Pack Relaxed Fit Boxer Briefs",
    price: 7907.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9d660fc2-9df0-41e9-9b22-dd1f9c1e46b5.jpeg?h=365&w=240&dpr=2",
    brandName: "Alo",
    productDetail: "Conquer Reform Performance T-Shirt",
    price: 5331.81,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4e12be25-2815-4696-9b10-e509d5862857.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Men's Meta Shorts",
    price: 8083.71,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bf6fa784-a770-48a3-aa59-a765dc50443d.jpeg?h=365&w=240&dpr=2",
    brandName: "ASOS DESIGN",
    productDetail: "Oversize Rugby Polo",
    price: 1651.14,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5652e1d4-5d8c-4662-be34-ce90067eb470.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Primeblue Superstar Track Jacket",
    price: 6449.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/75ae35fc-8494-4bfb-b5cd-062dbb569db7.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "DryVent™ Mountain Parka",
    price: 16120.12,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/788775df-b485-4376-a35f-e6424fb9d3c2.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "3-Stripes Swim Trunks",
    price: 3869.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a6d0de30-322a-4d7e-858c-671da0fcdd96.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: '9" Commuter Shorts',
    price: 3351.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5e29b4ad-8736-4903-98e4-f9d9ac623f3d.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Tech-Smart Piqué Polo (Regular Big & Tall)",
    price: 2554.11,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/23cc4191-2280-4ac2-ace5-7e3cc8f57849.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Therma-FIT Tapered Training Pants",
    price: 5159.81,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/543a7a80-69a5-4f84-91cc-1815069c8dee.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Men's SST Tricot Track Jacket",
    price: 6879.75,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6a522d56-c0bf-4a08-bc5b-9f2860da3594.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "Modesto Cotton Blend Golf Polo",
    price: 8165.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/32327fdb-e713-48c5-ba5c-c2bf5792d059.jpeg?h=365&w=240&dpr=2",
    brandName: "Helly Hansen",
    productDetail: "Dubliner Water & Wind Proof Hooded Jacket",
    price: 11179.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/092c27ad-92ef-42be-b3a4-4cc523e7d080.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "A Class Cotton Blend Polo",
    price: 7735.42,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1ad9ce95-80e3-4b61-9602-af47bc8e7eca.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Ultra Super Soft Relaxed Fit Boxer Briefs",
    price: 2923.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3455e436-855c-4370-94aa-7ef88c7c63b9.jpeg?h=365&w=240&dpr=2",
    brandName: "Vince",
    productDetail: "Thermal Long Sleeve T-Shirt",
    price: 9997.14,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9c1e0751-f503-4951-b636-feb84d19350e.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Cradle Crewneck Long Sleeve Performance Shirt",
    price: 10749.61,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3be43f1c-cd5d-4d51-8196-e9cc38d6640d.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Performance T-Shirt",
    price: 1152.36,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dfb08bcb-50e3-4212-93f6-9078ec753c72.jpeg?h=365&w=240&dpr=2",
    brandName: "AllSaints",
    productDetail: "Pinup Cotton Graphic Tee",
    price: 6793.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/779a7f31-5c5e-4fca-9526-356bd8df3788.jpeg?h=365&w=240&dpr=2",
    brandName: "Cutter & Buck",
    productDetail: "Prospect DryTec Performance Polo (Big & Tall)",
    price: 3869.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/85cfa5a8-f9a4-4028-948b-6e207ed52cc3.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Assorted 2-Pack Hiking Crew Socks",
    price: 816.97,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/574c60fb-5145-47c8-b987-69b5080b5ecc.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Hiit Spin Performance Tank",
    price: 3439.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4a5176ff-c70b-4f45-9af8-32815302a38f.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Taslan Shorts",
    price: 6019.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3b0195b1-dca7-496e-850a-111aa09ac811.jpeg?h=365&w=240&dpr=2",
    brandName: "Tommy John",
    productDetail: "Cool Cotton Crewneck Undershirt",
    price: 3439.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/129de606-5120-4c1f-aae8-ae64e58ea50a.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Tech-Smart Cooling Polo (Regular Big & Tall)",
    price: 3070.09,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/11197613-b4f6-4d52-80ee-26cbefeef9dd.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail:
      "Sportswear Premium Essentials Long Sleeve T-Shirt (Regular & Tall)",
    price: 3869.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1ff94bc5-c2a2-40fd-9dde-33129355cde1.jpeg?h=365&w=240&dpr=2",
    brandName: "Alo",
    productDetail: "Core Pullover Hoodie",
    price: 5847.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c4435a36-b2db-4a40-864e-3df44480646a.jpeg?h=365&w=240&dpr=2",
    brandName: "Mizzen+Main",
    productDetail: "Versa Stripe Stretch Polo",
    price: 2837.9,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f42ea3cf-bc73-45ab-a020-bcbe96ed4d63.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Commuter Straight Fit Pants",
    price: 11007.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d37a2054-e7df-4cda-aa10-41449948c144.jpeg?h=365&w=240&dpr=2",
    brandName: "Icecream",
    productDetail: "Hand Made Embroidered T-Shirt",
    price: 7739.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b57394fb-9550-4bcf-ae8e-c7e4a2d58fa6.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Perth Seeing Double Quarter Zip Performance Pullover",
    price: 11609.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a25c7777-b51c-4cf4-aeb8-f2eaef9a78ab.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Run Light Tab No-Show Socks",
    price: 1289.09,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/148f51e4-2be5-40b0-a118-48cf840b0541.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Knock Out Performance Polo",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c1346572-f905-4a3d-9ba5-a889215a8ebe.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "Macmillan Camo Water Resistant Down Parka",
    price: 85566.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1995e76a-f4b8-4559-86d9-d2817a8391f0.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Stride 5-Inch Running Shorts",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fb9e0943-bed8-48ac-b12a-b6584eed92b4.jpeg?h=365&w=240&dpr=2",
    brandName: "Lacoste",
    productDetail: "Long Sleeve Polo",
    price: 6191.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5a2c545e-f79b-40b2-aff0-23085c45da18.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Spar Notch Crewneck Pullover",
    price: 11007.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/32567e10-0677-47f6-8b8b-9f6100afa27e.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dry-FIT 2-in-1 Pocket Yoga Shorts",
    price: 2491.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/03b53327-c5ff-459c-85cd-94c7ef223d9d.jpeg?h=365&w=240&dpr=2",
    brandName: "Kappa",
    productDetail: "222 Banda Vosker Mesh Athletic Shorts",
    price: 3095.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ce71caa4-5a08-47cd-a161-cbe9042ceb84.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Essentials Performance Hoodie",
    price: 7567.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d0713eaf-f9ec-41c8-878f-c0e76074d0ac.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail:
      "Men's Peter Millar Light Blue TOUR Championship Perth Clubs Performance Quarter-Zip Jacket",
    price: 11609.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b76ecb6c-69cc-4260-ab13-8f26cd5bb65d.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Vibe Super Soft Slim Fit Boxer Briefs",
    price: 2751.9,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7ee21ec6-ccfe-4620-b9e0-270e9c3cb765.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Reign Tech Short Sleeve T-Shirt",
    price: 6363.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/15b72231-f40a-4960-9a5b-8f0a5f72c54a.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Pro Fleece Training Pants (Regular & Tall)",
    price: 4555.26,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/67585527-d816-43b1-b70c-77318d821597.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Gamut 3-Pack No-Show Liner Socks",
    price: 2579.05,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a7e8e576-c532-4754-821d-9c330df4ba62.jpeg?h=365&w=240&dpr=2",
    brandName: "Calvin Klein",
    productDetail: "3-Pack Low Rise Microfiber Trunks",
    price: 2592.81,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/eeeb3de1-6377-49c0-a69c-7003dac040b8.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Crafted Ross Performance Polo",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2f90e842-dd72-41ea-ab9f-d2b26f0931ac.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Dunn Stripe Performance Polo",
    price: 8427.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/60632d88-83f0-4e65-82b9-1d89b9ed12f5.jpeg?h=365&w=240&dpr=2",
    brandName: "Carhartt Work In Progress",
    productDetail: "Chase Hooded Sweatshirt",
    price: 9287.67,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9b113863-f362-46cd-9579-b8d64f6bb05a.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "Salad Days Pima Cotton Blend Polo Shirt",
    price: 7735.42,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b781c2ec-b214-4278-a95a-12d176ebbfb1.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail:
      "Updated Hybridge Base Hooded 750 Fill Power Down Jacket",
    price: 59767.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1efaa68e-a85a-449d-ad50-0421b41dc1d8.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Gameday Print Performance Polo",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/62dde08f-1f65-4bbd-8460-9f0fd97431c5.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "Men's Turned Around Polo",
    price: 8165.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f1a383d5-c05b-4fca-a0fd-087b95a4d9da.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "6-Pack Original Trefoil Crew Socks",
    price: 1719.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/59badb44-85c3-4045-a64d-dd9e930d0295.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Joven Classic Crew Socks",
    price: 859.11,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/54dccbc9-bcfe-48ab-81a2-28daf3cbaa1c.jpeg?h=365&w=240&dpr=2",
    brandName: "Reiss",
    productDetail: "Maxwell Quarter Zip Merino Wool Polo",
    price: 12469.55,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9f6adfff-2464-4348-8321-bd89c98d0a9e.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Standard Solid Boxer Briefs",
    price: 2149.06,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f4ce22cc-1289-4481-a3e5-dbd8dce72824.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Reign Performance Hoodie",
    price: 8427.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/87d121c3-9f2c-4d50-9fe2-7414795876ba.jpeg?h=365&w=240&dpr=2",
    brandName: "vineyard vines",
    productDetail: "On-The-Go Slim Fit Performance Pants",
    price: 10749.61,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f19aba23-ed44-453a-867f-f3dbd2630b50.jpeg?h=365&w=240&dpr=2",
    brandName: "Reiss",
    productDetail: "Jasper Zip Polo",
    price: 13759.5,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3745fa4c-c650-4464-b277-687aca78527e.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "6-Pack Original Trefoil No-Show Socks",
    price: 1719.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7708280b-67a8-4e20-b686-491a62a14810.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "Hybridge Waterproof 750 Fill Power Down Puffer Coat",
    price: 81697.06,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0c3c4a20-e70a-46f8-bfff-fa213ab6eba9.jpeg?h=365&w=240&dpr=2",
    brandName: "BOSS",
    productDetail: "Assorted 3-Pack Ankle Socks",
    price: 1719.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f359f15f-c6a3-4a9c-ae98-a7c940cc4520.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: '7" Commuter Shorts',
    price: 3867.28,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/78404c2a-023f-412b-bbce-f0abefad04fe.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Men's 3-Pack Mesh Micro Tab Ankle Socks",
    price: 1633.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/735233a1-03cc-44ca-8b23-f4f866267d37.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Stride 7-Inch Running Shorts",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b8291b36-e9d6-4fe4-b515-1b82bcaf3055.jpeg?h=365&w=240&dpr=2",
    brandName: "Smartwool",
    productDetail: "Heathered 2-Pack Crew Socks",
    price: 3009.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a0a7a15a-0929-4bee-b664-a37b2715c2e6.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Logo Graphic Tank",
    price: 2149.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5868e607-7fa8-4e2f-a953-98e560c7bf02.jpeg?h=365&w=240&dpr=2",
    brandName: "vuori",
    productDetail: "Cape Performance Shorts",
    price: 5847.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b0a03ec5-3d0f-4c89-99fa-a6b55f5e2823.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "D4T Recycled Polyester Blend Training Shorts",
    price: 3439.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/62e4b46d-2f4d-4b07-8123-77fb6a3017fc.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Tiro Stripe Performance Soccer Jersey",
    price: 3439.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5b5d5c23-39cb-437d-a64e-5759f667b312.jpeg?h=365&w=240&dpr=2",
    brandName: "Pair of Thieves",
    productDetail: "3-Pack Blackout Whiteout Ankle Socks",
    price: 1117.1,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d10eaba2-d9d6-4e5f-8c2b-df055c4caba9.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Golf",
    productDetail: "Henley Golf Polo",
    price: 5589.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/32456186-07ba-444d-88d6-85bd3a76b9d9.jpeg?h=365&w=240&dpr=2",
    brandName: "Jordan",
    productDetail: "Jumpman Logo Graphic Tee",
    price: 2016.63,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8ad00eb8-3195-4f33-a1d1-532edd233dcd.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike Golf",
    productDetail: "Nike Dri-FIT Victory Golf Polo",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/45136d59-cf8c-45a8-8a29-fd9e47135150.jpeg?h=365&w=240&dpr=2",
    brandName: "Levi's®",
    productDetail: "Diamond Quilted Jacket",
    price: 8598.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5a96d9b3-6a85-46dd-9a8c-18d11fdb5167.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Elite Micro Performance Boxer Briefs",
    price: 2579.91,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6aa28e6c-63d6-4a9c-92f8-6fdee67aeac1.jpeg?h=365&w=240&dpr=2",
    brandName: "BOSS",
    productDetail: "Polston Slim Fit Cotton Zip Polo",
    price: 12727.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/36db4c74-ca66-4f62-b27c-624c83a2d6ad.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Bass Stripe Performance Jersey Polo",
    price: 6742.16,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ca13377f-64b5-4335-bbe1-9b738157e72f.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Men's Active-T Performance Running T-Shirt",
    price: 6018.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/03cc0e1a-e408-4ba3-8ec3-f989a316ea95.jpeg?h=365&w=240&dpr=2",
    brandName: "Polo Ralph Lauren",
    productDetail: "Assorted 3-Pack Classic Cotton Boxer Briefs",
    price: 3654.87,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cfc7fdb8-b712-418b-8360-996dcd9c2675.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Vibe Super Soft 2-Pack Slim Fit Boxer Briefs",
    price: 5241.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5593943a-fc62-4fd3-810d-60c7a6897c96.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Assorted 3-Pack Versa Tab No-Show Socks",
    price: 3009.03,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0f39a889-6fdb-41cf-95ec-9bfb988bc64f.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "Taslan Track Pants",
    price: 11609.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/363f60c2-18fc-4a4b-9697-943a5f48a45b.jpeg?h=365&w=240&dpr=2",
    brandName: "Happy Socks",
    productDetail: "Stars Socks",
    price: 1203.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c1334f9a-a2de-41b6-8df5-4e16da4c4927.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Men's Sandy Print Crew Socks",
    price: 1289.09,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1d279c5d-3993-40ec-ab69-fbc5d36108c1.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Men's 3-Pack Performance Tab Ankle Socks",
    price: 1289.95,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f51d5cc1-2bb0-4f75-af7c-fc5974ab1d50.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike Golf",
    productDetail: "Nike Men's Dri-FIT Victory Half Zip Golf Pullover",
    price: 6019.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4c47729f-6a8f-4786-9317-f3b0b69e7c0c.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Klicks Tab No-Show Socks",
    price: 1289.09,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/29a0fcf1-52d2-4bd8-bf6e-64b647e4015d.jpeg?h=365&w=240&dpr=2",
    brandName: "vineyard vines",
    productDetail: "Men's Sankaty Performance Polo",
    price: 4901.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cf748db8-8d7a-4171-b0c0-7f5581f26353.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Ultimate Stripe Tech Tee",
    price: 1373.37,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d56ba969-27c0-47af-8615-47bbd9cbe80d.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Slim Fit Stripe Piqué Polo",
    price: 2921.31,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/80315735-8b20-479b-8632-19023d915c44.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Quest Quick Dry 2-Pack Mesh Boxer Briefs",
    price: 5241.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0d15e901-c032-4a2d-9b6d-1879df6cc658.jpeg?h=365&w=240&dpr=2",
    brandName: "Marine Layer",
    productDetail: "Men's Sport Tank Top",
    price: 3869.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/12e4374d-051d-4246-bff0-1ce5578992c3.jpeg?h=365&w=240&dpr=2",
    brandName: "L.L.Bean",
    productDetail:
      "L.L. Bean Primaloft Merino Wool Blend Performance Crew Socks",
    price: 1715.64,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6b7aeb06-79f9-40ff-b9c5-fbe9988a4bae.jpeg?h=365&w=240&dpr=2",
    brandName: "Obey",
    productDetail: "Praise Jacquard Stripe Oversize Cotton Polo",
    price: 4298.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b448468e-9281-47f2-9b44-8b61ee86a5e9.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Golf",
    productDetail: "Ultimate365 Performance Golf Pants",
    price: 7309.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f7d634d2-5a72-480d-a10e-d69ce4a9540c.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "Everett Puffer Vest",
    price: 55897.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/06d57420-b5eb-4e07-9e3c-b4c520ba3307.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Tech Fleece Shorts",
    price: 6449.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c6601965-d743-42c3-8428-d3589610b2b6.jpeg?h=365&w=240&dpr=2",
    brandName: "Polo Ralph Lauren",
    productDetail: "3-Pack Argyle Socks",
    price: 2063.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/471cb555-c527-4f2b-9c93-671982f66f87.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Men's 8-Inch Flat Front Shorts",
    price: 7567.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/425180b3-12c8-4adf-bf45-0df04b96a962.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Antora Jacket",
    price: 9373.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/484f3591-5145-4551-b38f-8a41c4b258db.jpeg?h=365&w=240&dpr=2",
    brandName: "Smartwool",
    productDetail: "Everyday Larimer Wool Blend Crew Socks",
    price: 2321.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/67bea474-47fc-44cd-86f9-04d5744c558f.jpeg?h=365&w=240&dpr=2",
    brandName: "Oakley",
    productDetail: "Icon Performance Golf Polo",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1725db2a-f0d4-4ad0-a966-3757f10971cb.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "MacMillan' Slim Fit Hooded Parka",
    price: 81697.06,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2890aa48-e984-4823-8ea4-9e1cd2387f29.jpeg?h=365&w=240&dpr=2",
    brandName: "Cutter & Buck",
    productDetail: "Pike Performance Polo",
    price: 5116.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a9e0cbb2-ab8d-48a9-9324-4457ad330a7b.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Versatility Unlined Shorts",
    price: 6707.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6a065c35-f400-46aa-9da5-752e9a06a85e.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "Hidden Falls Leaf Pima Cotton Blend Polo",
    price: 8165.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d10ad809-5c67-414c-98f8-618b41e60622.jpeg?h=365&w=240&dpr=2",
    brandName: "Vince",
    productDetail: "Men's Tri Color Stripe Polo",
    price: 6449.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/77d23a7e-0005-447c-876f-3404096e1994.jpeg?h=365&w=240&dpr=2",
    brandName: "Bad Birdie",
    productDetail: "Bird Watch Floral Performance Golf Polo",
    price: 6191.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ceed6105-0c16-4bd0-8817-291c4a555309.jpeg?h=365&w=240&dpr=2",
    brandName: "ASOS DESIGN",
    productDetail: "Dark Future Oversize Graphic Tank",
    price: 2235.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c2f55170-e726-4766-bda8-14bde512fbfa.jpeg?h=365&w=240&dpr=2",
    brandName: "Rodd & Gunn",
    productDetail: "Mount Vulcan Cotton Blend Hoodie",
    price: 12727.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f4ef69b9-077b-4dca-8b4a-d5c297a1aeb5.jpeg?h=365&w=240&dpr=2",
    brandName: "RVCA",
    productDetail: "Sport Vent Logo T-Shirt",
    price: 4299.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d9bc5a08-0ee9-4dd0-ab51-c0ae16b65355.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Spar Full Zip Hoodie",
    price: 11867.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5da29904-bf15-4ee0-a36b-769e5f6fddcc.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike Golf",
    productDetail: "Dri-FIT ADV Tiger Woods Golf Polo",
    price: 7309.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/911cf306-e7b9-4588-8587-87d4f9ecdd2f.jpeg?h=365&w=240&dpr=2",
    brandName: "Rails",
    productDetail: "Men's Apollo Cotton Hoodie",
    price: 5340.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ee40cb39-5393-4c29-ac08-90efc144d9cd.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Hydrenalite 550 Fill Power Down Jacket",
    price: 21499.23,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a2affafd-94b3-4843-9ef2-bd2168593d53.jpeg?h=365&w=240&dpr=2",
    brandName: "Bugatchi",
    productDetail: "OoohCotton® Print Tech Short Sleeve Polo",
    price: 7688.12,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dd27b221-08e4-424d-966e-68d90f444207.jpeg?h=365&w=240&dpr=2",
    brandName: "Jordan",
    productDetail: "3-Pack Dri-FIT Everyday Max No-Show Socks",
    price: 1719.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/81953147-ce2a-494e-885f-f1266381aa59.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "2-Pack UB21 Quarter Socks",
    price: 1203.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a291373d-4b7f-41a6-afcb-ee9dd24e9339.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Antora Waterproof Jacket",
    price: 8513.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/11528959-4e81-449a-8ff3-24a994424946.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Buoy Stripe Performance Polo",
    price: 6742.16,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/74b1bc4d-dc00-4d68-9166-db6672fd1b80.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Yoga T-Shirt",
    price: 4299.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f072e50b-e14e-4bac-8b22-83f4e831919d.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Swift Performance Tank",
    price: 4987.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dcb44bd1-ac55-4d8f-b138-1b5a6327e022.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Men's Millerton Waterproof Hooded Jacket",
    price: 11093.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/585af694-e6cc-4b6c-9a8b-bae0dcbe8a74.jpeg?h=365&w=240&dpr=2",
    brandName: "HUGO",
    productDetail: "Men's Tracksuit Jacket",
    price: 11867.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f05bad3a-40ac-4e03-86f3-a27b92468557.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Paradis Floral Tab No-Show Socks",
    price: 1289.09,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c48027f7-ca34-4058-abec-36e070064d9f.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail:
      "Crofton Water Resistant Packable Quilted 750 Fill Power Down Jacket",
    price: 64497.67,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6c86eb63-8235-4ff6-8a7a-f18f6c84cbc2.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dri-FIT Static Training T-Shirt",
    price: 2063.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0f242186-78c9-47b8-99ab-ecb6d134b5d2.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Warbird Crew Socks",
    price: 1289.09,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/33d8385e-831d-4aa7-b91b-04525b71cf0d.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Everyday Mismatched Cushioned Crew Socks",
    price: 1547.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fab506e4-2c16-4efd-8fed-d96aac1b2590.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Icon' Athletic Socks",
    price: 859.11,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/226d0ce4-3e4b-43a5-bd18-2c199d09fa5f.jpeg?h=365&w=240&dpr=2",
    brandName: "Tommy Bahama",
    productDetail: "Island Zone Coolside Half Zip Pullover",
    price: 5091.02,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a28d7bb0-ee30-4476-842e-639aad980c5a.jpeg?h=365&w=240&dpr=2",
    brandName: "BOSS",
    productDetail: "Pallas Cotton Polo",
    price: 7567.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/03c7e39d-383b-47db-a5da-222a554d3b8e.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Men's Air Max 97 Racing Long Sleeve Graphic Tee",
    price: 3439.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b9627c4d-6b9b-4690-ad23-625f5ee50d42.jpeg?h=365&w=240&dpr=2",
    brandName: "THE MAYFAIR GROUP",
    productDetail: "Unisex The New PE Crew Socks",
    price: 825.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ec3e10f8-c8fc-4cf9-b844-24e456d5ae1b.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Logo Play Sweatpants",
    price: 2319.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/044cd845-8c46-488a-8aac-3813d6bb4895.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Men's Club Graphic Tee",
    price: 2579.91,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/77f38f58-4c17-4d39-96a2-186b64da9278.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Spark Running Socks",
    price: 1547.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1d9b41fd-ef9c-402b-8d9a-dbf2de89096f.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Session Performance Short Sleeve Tee",
    price: 2012.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7e6b9bd5-9594-45d0-a3d8-00b2388d2398.jpeg?h=365&w=240&dpr=2",
    brandName: "ASOS DESIGN",
    productDetail: "Muscle Fit Short Sleeve Polo",
    price: 2579.91,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6c5904fa-1027-4857-9ac9-8a7fc62b1ba6.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Highrail Faux Shearling Lined Fleece Jacket",
    price: 12813.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/621566b7-b6eb-4f56-9924-66d69cae4b85.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Restore Shorts",
    price: 2577.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b5bbe5d5-ad3e-4d86-9b9d-919249d3f94c.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Trefoil Swim Trunks",
    price: 3009.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/95c58aa7-3b6e-4d0f-b208-8ba653d6c8cc.jpeg?h=365&w=240&dpr=2",
    brandName: "Falke",
    productDetail: "Airport Wool Blend Socks",
    price: 2493.91,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e0f6c5d6-47de-4cb4-a49e-eef99f43cd3f.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "6-Pack No-Show Socks",
    price: 1891.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6ed609e2-cf98-41c7-8bd9-8b31603fa6b4.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Pro Dri-FIT Performance T-Shirt",
    price: 3918.02,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e358f683-e311-4c1c-882a-9a6ac54d3466.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Gamut 3-Pack No-Show Liner Socks",
    price: 2579.05,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/07332655-e658-45b8-8bf6-749b5120a41c.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Performance Boxer Briefs",
    price: 2321.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a8174166-0051-45e5-9586-c2a1da1315db.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Men's Long Sleeve Logo T-Shirt (Tall)",
    price: 3009.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/45098795-1a4e-4576-a592-88112ef260cc.jpeg?h=365&w=240&dpr=2",
    brandName: "Alo",
    productDetail: "The Triumph Crewneck T-Shirt",
    price: 4643.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7b08eaca-3bc6-4dfa-ba99-c64947fbc5fb.jpeg?h=365&w=240&dpr=2",
    brandName: "TravisMathew",
    productDetail: "Bouldering Polo",
    price: 7735.42,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a3def6fe-f37d-4e63-98c8-6cebd0553f24.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail:
      "3-Pack Dri-FIT Ultra Stretch Micro Long Leg Boxer Briefs",
    price: 4084.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/63875d2d-d833-4a8e-a386-b8333c5106e7.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "3-Pack Dri-Fit Essential Stretch Cotton Trunks",
    price: 3654.87,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5e017ef7-42b6-49eb-afde-9846ea8f25db.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "Hybridge Lite 800 Fill Power Down Vest",
    price: 45148.37,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d8ee51e1-6376-4968-a17f-2df33ff33383.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas Originals",
    productDetail: "Adicolor Trefoil Shorts",
    price: 3439.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/92124c99-faf7-4b7f-b35a-e50852bb175b.jpeg?h=365&w=240&dpr=2",
    brandName: "SPANX®",
    productDetail: "Sculpt Stretch Cotton Boxer Briefs",
    price: 3267.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e58d3f49-9866-40c1-876a-21ae4126f70e.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Club+ Cotton Blend Hoodie",
    price: 5159.81,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ec2572b4-1842-408f-a784-f42af72d752f.jpeg?h=365&w=240&dpr=2",
    brandName: "Polo Ralph Lauren",
    productDetail: "2-Pack Logo Crew Socks",
    price: 1891.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f97a709f-7aa8-4ec4-bfa4-c31ccd5cf801.jpeg?h=365&w=240&dpr=2",
    brandName: "Stance",
    productDetail: "Icon 3-Pack Crew Socks",
    price: 2407.05,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fe369461-09b1-4d8c-abdb-b107b7a8cb26.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Men's Motion 3-Pack Quarter Socks",
    price: 2149.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0566705f-8211-4c37-90ca-e000b4c325ca.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Classic Wool Blend Boot Socks",
    price: 2063.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/144bba31-7079-419b-93b4-b6ad9a1a80e3.jpeg?h=365&w=240&dpr=2",
    brandName: "Rapha",
    productDetail: "Pro Team Bib Cycling Shorts",
    price: 23219.16,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7d6ea1ca-9f79-40a4-ae7e-446c61933f98.jpeg?h=365&w=240&dpr=2",
    brandName: "Canada Goose",
    productDetail: "Langford Water Repellent 625-Fill Power Down Parka",
    price: 111365.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/29cbe64d-6ccc-411b-b686-b197dac5b0fa.jpeg?h=365&w=240&dpr=2",
    brandName: "Cutter & Buck",
    productDetail: "Advantage Golf Polo",
    price: 3912.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a385a24b-576c-457f-9a61-f017f4d59b64.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Sportswear Max 90 Embroidered Logo T-Shirt (Tall)",
    price: 3869.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/74bd10d2-cbbb-4429-a42f-b8c2ed4e7211.jpeg?h=365&w=240&dpr=2",
    brandName: "Tommy Bahama",
    productDetail: "Men's Montserrat Long Sleeve Polo",
    price: 10147.63,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1bade579-482f-421d-b669-2c6c21eb69f8.jpeg?h=365&w=240&dpr=2",
    brandName: "Tommy John",
    productDetail: "2-Pack Cool Cotton 8-Inch Boxer Briefs",
    price: 4729.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4b7620b4-ac33-4562-9326-7ca4f8cf5b18.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Strike Performance T-Shirt",
    price: 3353.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/692fa8cd-7dfc-4af2-b223-11394769f74d.jpeg?h=365&w=240&dpr=2",
    brandName: "Mack Weldon",
    productDetail: "18 Hour Jersey Boxer Briefs",
    price: 2407.91,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6bccc24d-0dbe-4c17-a0fd-5406d9764d07.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Word Search Performance Polo",
    price: 6621.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/df6ab70a-0573-4a69-90ff-f5bc96470c07.jpeg?h=365&w=240&dpr=2",
    brandName: "Peter Millar",
    productDetail: "Perth Mélange Quarter Zip Performance Pullover",
    price: 11609.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a7445da2-9316-49cc-bc72-a9062efd22e4.jpeg?h=365&w=240&dpr=2",
    brandName: "Icecream",
    productDetail: "Men's Chili Cotton Graphic Tee",
    price: 2579.91,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7bfe1615-0b45-4d1a-a552-25dc8e03b295.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Vibe Super Soft Slim Fit Boxer Briefs",
    price: 2923.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/09e3b071-f94e-46d9-a2dd-a22d19ec7423.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Pro Dri-FIT Flex Shorts",
    price: 5847.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a5a4b326-d3fa-4cf2-9eef-f45c6e1e0912.jpeg?h=365&w=240&dpr=2",
    brandName: "Rhone",
    productDetail: "Spar Pocket Joggers",
    price: 11007.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/da857eac-b709-4986-940a-7718bc034fa5.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Ultra Helmet Print Boxer Brief",
    price: 2923.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/35c6d1d3-805d-4406-9868-542523438bc4.jpeg?h=365&w=240&dpr=2",
    brandName: "SAXX",
    productDetail: "Ultra Performance Boxer Briefs",
    price: 2923.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9cad60c2-e053-49ff-b32c-350754912fa9.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Court Dri-FIT Advantage Tennis Shirt",
    price: 2147.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4445e1a2-2cab-4040-821e-deb935c38ace.jpeg?h=365&w=240&dpr=2",
    brandName: "Jordan",
    productDetail: "Assorted 3-Pack Everyday Max Crew Socks",
    price: 1891.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a76be94a-7e20-467d-b6b4-16925b41aa2e.jpeg?h=365&w=240&dpr=2",
    brandName: "Brax",
    productDetail: "Pico I Stretch Polo",
    price: 7120.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cf204943-b7b2-418e-9938-cd032356b3d0.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Packable Slim Fit Stretch Down Jacket",
    price: 21499.23,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0d9e65cf-bd8e-401c-ac13-4ef72abf4fe2.jpeg?h=365&w=240&dpr=2",
    brandName: "Fjällräven",
    productDetail: "Kånken Water Resistant Backpack",
    price: 6879.75,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dbedef06-acdc-46c4-a813-d7f94d9db7bb.jpeg?h=365&w=240&dpr=2",
    brandName: "Longchamp",
    productDetail: "Large Le Pliage Backpack",
    price: 12039.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/71c41777-bdc1-4f9c-8f2b-a8d10e401b3d.jpeg?h=365&w=240&dpr=2",
    brandName: "Tumi",
    productDetail: "Voyager Carson Nylon Backpack",
    price: 33968.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ab6dde33-a6ad-4135-8559-c5737218050a.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Little America Backpack",
    price: 9458.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5fce4f3a-100f-4c3d-8505-0d2da03c2382.jpeg?h=365&w=240&dpr=2",
    brandName: "Fjällräven",
    productDetail: "Mini Kånken Water Resistant Backpack",
    price: 6019.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2dd1b8ff-f678-4953-a3bc-658c0e0c8333.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Jester Water Repellent Backpack",
    price: 5933.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/eb9d8bfb-1e7e-4148-af63-8dedaba077f8.jpeg?h=365&w=240&dpr=2",
    brandName: "Cotopaxi",
    productDetail: "Allpa 35L Travel Backpack",
    price: 17199.38,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d3a101ca-c330-417f-81d8-864a05517f89.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Pop Quiz Backpack",
    price: 6879.75,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/602343c1-bc04-4908-b254-f872aea933c4.jpeg?h=365&w=240&dpr=2",
    brandName: "Fjällräven",
    productDetail: "Kånken Tote Backpack",
    price: 8169.71,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/341e2e08-6436-4457-aeea-4ac0c3f25ccc.jpeg?h=365&w=240&dpr=2",
    brandName: "Fjällräven",
    productDetail: "Kånken 15-Inch Laptop Backpack",
    price: 10319.63,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d796c7f4-dc10-468f-9903-2005bed21fbd.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Pop Quiz Water Resistant Backpack",
    price: 4127.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/30c81b30-ffd9-4dc1-b331-87b428153438.jpeg?h=365&w=240&dpr=2",
    brandName: "Osprey",
    productDetail: "Daylite Sling Backpack",
    price: 3869.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/87a28352-051d-473f-8054-387223e31475.jpeg?h=365&w=240&dpr=2",
    brandName: "Barbour",
    productDetail: "Cascade Backpack",
    price: 8599.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6ef2f23c-da7a-4333-a26b-d8fe58a92e9a.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Originals Trefoil 2.0 Backpack",
    price: 3869.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d3a101ca-c330-417f-81d8-864a05517f89.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Pop Quiz Backpack",
    price: 6879.75,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ffb381ef-f8e7-4e49-a53d-18218f0bf44c.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Little America Backpack",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fc0dba5e-ae64-4f86-810a-cb6184641ac5.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Nova Mid Volume Backpack",
    price: 6019.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/36d5b5cc-cfa6-4ef6-924e-f004308e1f95.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Little America Backpack",
    price: 5675.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ffb381ef-f8e7-4e49-a53d-18218f0bf44c.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Little America Backpack",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2dd1b8ff-f678-4953-a3bc-658c0e0c8333.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Jester Water Repellent Backpack",
    price: 5933.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2f9a9312-14ff-4c02-95c7-d13c6826e93f.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Recon Backpack",
    price: 8513.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/60fba1ad-d6d7-410a-a028-71a603f74a5c.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Borealis Water Repellent Backpack",
    price: 8513.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2707cb0f-b7aa-4efb-b4a3-a49ebbd01ca7.jpeg?h=365&w=240&dpr=2",
    brandName: "Longchamp",
    productDetail: "Le Pliage Backpack",
    price: 12039.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1bb6e3a1-6b27-4358-bd20-b4e0a5f1db8f.jpeg?h=365&w=240&dpr=2",
    brandName: "Bric's",
    productDetail: "X-Travel Nomad Backpack",
    price: 12899.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/859c7e83-9771-485d-9946-4538d68e0275.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Mini Nova Backpack",
    price: 4728.97,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1824d19f-1260-47d9-a270-b3ab13aee41d.jpeg?h=365&w=240&dpr=2",
    brandName: "Rains",
    productDetail: "Buckle Mini Backpack",
    price: 9889.64,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5a327297-f898-43cd-aaf9-087c24336255.jpeg?h=365&w=240&dpr=2",
    brandName: "Tumi",
    productDetail: "Search Nylon Backpack",
    price: 47298.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8ee27e41-7c74-4603-bd6c-edb0d9d0463d.jpeg?h=365&w=240&dpr=2",
    brandName: "rag & bone",
    productDetail: "Leather Commuter Backpack",
    price: 35473.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ef15fda0-f8f4-4b6a-a515-362503fba609.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Borealis Water Repellent Backpack",
    price: 8513.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/57c5ddc2-b90c-49bf-a9d9-0632b232df19.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "National 2.0 Backpack",
    price: 4299.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0104513e-5ebd-4b8b-ac57-8ae8f34bc6d9.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Pop Quiz Backpack",
    price: 6879.75,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f0a99da7-8ed8-4dd7-916d-003250fd1637.jpeg?h=365&w=240&dpr=2",
    brandName: "Longchamp",
    productDetail: "Green District ECONYL® Backpack",
    price: 36118.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8870d5d3-81fb-4388-ac7c-dac90f3467c2.jpeg?h=365&w=240&dpr=2",
    brandName: "Tumi",
    productDetail: "Finch Backpack",
    price: 45148.37,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8bb87f2d-50e2-49c8-b4dc-81fb9207ec0a.jpeg?h=365&w=240&dpr=2",
    brandName: "MCM",
    productDetail: "Medium Stark Visetos Coated Canvas Backpack",
    price: 93736.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/29a09511-1f7e-4840-b121-e34686113da1.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Retreat Backpack",
    price: 7739.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ea289338-56f9-489f-9614-be9706ae7526.jpeg?h=365&w=240&dpr=2",
    brandName: "Tumi",
    productDetail: "Just in Case Nylon Travel Backpack",
    price: 8599.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1a06dfda-eb77-44b4-a39f-2357a1561269.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Thompson Recycled Polyester Backpack",
    price: 4643.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/efb7e604-d8e6-4a5c-afc1-a35c0cc3603a.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Jester Campus Backpack",
    price: 5933.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3e1b4b67-cbb7-43ac-9ffa-cb25f69cf956.jpeg?h=365&w=240&dpr=2",
    brandName: "Barbour",
    productDetail: "Essential Wax Backpack",
    price: 14619.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4d2c7741-500c-440b-9d0e-f5aeb6365ac7.jpeg?h=365&w=240&dpr=2",
    brandName: "Thule",
    productDetail: "Lithos 20-Liter Backpack",
    price: 7735.42,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ab6dde33-a6ad-4135-8559-c5737218050a.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Little America Backpack",
    price: 9458.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c9068452-3b9f-4e7a-aefb-4eb291f3aa65.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Jester Backpack",
    price: 5933.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8b1472d0-d927-46b9-a815-7e4edfcfaed5.jpeg?h=365&w=240&dpr=2",
    brandName: "Ted Baker London",
    productDetail: "Esentle Stripe Backpack",
    price: 14189.49,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/09b4fff5-bb9e-4f0f-a85e-ed0f00f3da18.jpeg?h=365&w=240&dpr=2",
    brandName: "Dagne Dover",
    productDetail: "Small Dakota Backpack",
    price: 13329.52,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f91a4e72-505b-4d7e-91af-f2983473a043.jpeg?h=365&w=240&dpr=2",
    brandName: "Herschel Supply Co.",
    productDetail: "Little America Backpack",
    price: 9459.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/983c2f6e-2d77-43eb-b46c-ba2e471e2310.jpeg?h=365&w=240&dpr=2",
    brandName: "Osprey",
    productDetail: "Daylite Waterproof Sling Bag",
    price: 3869.86,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e4fab7a8-5f2b-4aa1-9e22-9c72cae2f97f.jpeg?h=365&w=240&dpr=2",
    brandName: "Bric's",
    productDetail: "Piccolo X-Travel City Backpack",
    price: 9889.64,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3ed6369b-be18-4867-8b76-a12deaffc74d.jpeg?h=365&w=240&dpr=2",
    brandName: "MCM",
    productDetail: "Small Klassik Visetos Sling Style Backpack",
    price: 67937.55,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c970a4da-b319-4a53-956d-270402cf6178.jpeg?h=365&w=240&dpr=2",
    brandName: "COACH",
    productDetail:
      "Metropolitan Pebbled Leather Backpack (Nordstrom Exclusive)",
    price: 25541.08,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/041d08dd-5554-4e4c-9816-7a72ddeef9c7.jpeg?h=365&w=240&dpr=2",
    brandName: "Osprey",
    productDetail: "Fairview 55-Liter Travel Backpack",
    price: 18919.32,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/41107a81-1562-4131-9edb-567ebd3a26ac.jpeg?h=365&w=240&dpr=2",
    brandName: "Tumi",
    productDetail: "Paige Backpack",
    price: 21929.21,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a8417f39-4375-4b37-af03-aa4089dc968d.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Recon Backpack",
    price: 8513.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b8a054cd-4835-419e-b484-4b6e27a843b1.jpeg?h=365&w=240&dpr=2",
    brandName: "Rains",
    productDetail: "Mini Waterproof Backpack",
    price: 8169.71,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/19d12e61-9f6a-4d5a-929b-5a309ef18654.jpeg?h=365&w=240&dpr=2",
    brandName: "Timbuk2",
    productDetail: "Spark Mini Park Bag",
    price: 5933.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/94c172b8-4814-4576-ae03-5929cd2124b5.jpeg?h=365&w=240&dpr=2",
    brandName: "Timbuk2",
    productDetail: "Lane Commuter Backpack",
    price: 16253.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5aed42f3-13ad-4447-8b60-60aa164f89e8.jpeg?h=365&w=240&dpr=2",
    brandName: "Cotopaxi",
    productDetail: "Tasra 16L Backpack",
    price: 7309.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1949276c-f8ff-49e0-ad05-847cf0e4d836.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Large Explore Fusebox Backpack",
    price: 8513.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c25382bd-ba06-424b-a4f7-fc876f884bd3.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Utility 4.0 Backpack",
    price: 5589.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0f4d3c86-36bc-4847-b569-7aa58773ee11.jpeg?h=365&w=240&dpr=2",
    brandName: "Bric's",
    productDetail: "X-Bag Travel Backpack",
    price: 10749.61,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7794396e-cad7-4427-8fc8-34496bf9d380.jpeg?h=365&w=240&dpr=2",
    brandName: "Thule",
    productDetail: "30-Liter Crossover 2 Backpack",
    price: 25794.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/488653c4-45a6-4370-bc3a-1163743dc504.jpeg?h=365&w=240&dpr=2",
    brandName: "Timbuk2",
    productDetail: "Tuck Laptop Backpack",
    price: 7653.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1b572a99-e22a-424d-a5a9-78796b88ee36.jpeg?h=365&w=240&dpr=2",
    brandName: "Tumi",
    productDetail: "Tahoe Finch Backpack",
    price: 42568.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/19dd27a1-a4eb-476c-b3c4-1a2edaeaa1ef.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Originals National 2.0 Backpack",
    price: 4299.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7f2fbd60-679f-41ce-b75f-21fea351f0f8.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Surge Backpack",
    price: 11093.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/afc8d5f5-bca3-4034-95ef-86d75820288a.jpeg?h=365&w=240&dpr=2",
    brandName: "Carhartt Work In Progress",
    productDetail: "Medley Shoulder Bag",
    price: 11007.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7fc18b55-bf4d-4cc2-a2b3-921046784819.jpeg?h=365&w=240&dpr=2",
    brandName: "COACH",
    productDetail: "League Signature Jacquard & Leather Backpack",
    price: 38376.12,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/90734509-2077-4eca-9ba8-9e0a04f7d5fe.jpeg?h=365&w=240&dpr=2",
    brandName: "Osprey",
    productDetail: "Daylite Plus Backpack",
    price: 5589.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6451d536-f0ae-4b6b-94a7-84225d98d513.jpeg?h=365&w=240&dpr=2",
    brandName: "Tumi",
    productDetail: "Alpha Bravo Navigation Backpack",
    price: 42568.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/82dace7d-d2e2-4cf3-ab9f-cafa547a9b05.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "Explore Fusebox S Backpack",
    price: 7653.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e6e9cf05-c9fc-494c-8a35-ccf437b761e5.jpeg?h=365&w=240&dpr=2",
    brandName: "Briggs & Riley",
    productDetail: "@work Large Cargo Backpack",
    price: 32592.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dc76efc5-606e-498c-8110-aec83c3f8517.jpeg?h=365&w=240&dpr=2",
    brandName: "BP.",
    productDetail: "Water Resistant Chelsea Boot (Men)",
    price: 8795.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1aa2363e-92cd-4a09-91be-7874d3280040.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Neumel Chukka Boot (Men)",
    price: 12315.22,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/980e44a8-8907-4a3b-9b25-a2784261459c.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Biltmore Waterproof Chelsea Boot (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/159bae1c-5bf5-4f23-81f4-39f01faf94c7.jpeg?h=365&w=240&dpr=2",
    brandName: "ALDO",
    productDetail: "Malrose Chukka Boot",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/af5b3656-2110-4c8d-9bfd-04a059b9ca65.jpeg?h=365&w=240&dpr=2",
    brandName: "Timberland",
    productDetail: "6 Inch Premium Waterproof Boot (Men)",
    price: 17423.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/82364084-0c6f-4b8b-a40a-72a96f94f807.jpeg?h=365&w=240&dpr=2",
    brandName: "Timberland",
    productDetail: "6-Inch Premium Waterproof Boot (Men)",
    price: 17423.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8f8678c9-c36d-4d90-ad63-cebd156727f1.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "Turn II Waterproof Lace-Up Boot (Men)",
    price: 11435.25,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3f357000-c2bb-4b6d-b447-2672e51382b5.jpeg?h=365&w=240&dpr=2",
    brandName: "Palladium",
    productDetail: "Pampa Travel Lite Boot",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/977b7ec3-499e-4091-8d3b-540bfa49dda3.jpeg?h=365&w=240&dpr=2",
    brandName: "AllSaints",
    productDetail: "Piero Combat Boot (Men)",
    price: 18954.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6026916b-4b99-4de5-8e93-6879f18b19a8.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Mason Water Resistant Chelsea Boot (Men)",
    price: 10555.28,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0188ae7a-d48e-4b78-a256-668842e0bddb.jpeg?h=365&w=240&dpr=2",
    brandName: "Dr. Martens",
    productDetail: "1460 Combat Boot (Unisex)",
    price: 14959.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/56f843d9-8314-46d9-b805-764621b53f5f.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail: "Chuck Taylor® All Star® Lugged Boot (Unisex)",
    price: 7039.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4fcd5f3f-2975-42bd-ab4c-d4b6287d795e.jpeg?h=365&w=240&dpr=2",
    brandName: "BP.",
    productDetail: "Hayden Chelsea Boot (Men)",
    price: 7915.36,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1d04ee9d-2bfe-401e-8ef0-c7bc3ad14902.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "UGG Emmett Waterproof Snow Boot (Men)",
    price: 12315.22,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9e799203-f22d-404d-a6d6-9f289f82c9f0.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Colby Flex Chukka Boot (Men)",
    price: 9675.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a799e6e1-0fb6-4f9d-9aca-f359af3518c0.jpeg?h=365&w=240&dpr=2",
    brandName: "ALDO",
    productDetail: "Shuman Chelsea Boot",
    price: 15839.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9b2baf4c-164a-490c-8b39-f0dbf71af46e.jpeg?h=365&w=240&dpr=2",
    brandName: "Rodd & Gunn",
    productDetail: "Pebbly Hill Chukka Boot (Men)",
    price: 17423.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cfe4dca6-2f41-48e9-8533-a958b0d9174b.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail:
      "Chuck Taylor® All Star® Lugged 2.0 Hi Sneaker (Women)",
    price: 7479.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ab5699c7-ed56-4c0a-876f-5a393dc443ad.jpeg?h=365&w=240&dpr=2",
    brandName: "SOREL",
    productDetail: "Carson Waterproof Chelsea Boot (Men)",
    price: 13639.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/30c24fb4-b1bb-4cc0-9a5a-3d35e714094f.jpeg?h=365&w=240&dpr=2",
    brandName: "Palladium",
    productDetail: "Baggy' Canvas Boot",
    price: 7919.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5a9c76b1-9bab-44c6-996f-1a56228d6bd4.jpeg?h=365&w=240&dpr=2",
    brandName: "Vince",
    productDetail: "Raider Water Repellent Combat Boot (Men)",
    price: 26070.08,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/26ae03f3-f9fc-4972-8c52-f07e81e10fa7.jpeg?h=365&w=240&dpr=2",
    brandName: "Dr. Martens",
    productDetail: "2976' Chelsea Boot (Men)",
    price: 14959.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f7e2c067-6d5a-42ff-ad18-b20fdf87adb1.jpeg?h=365&w=240&dpr=2",
    brandName: "Eastland",
    productDetail: "Lumber Up' Moc Toe Boot (Men)",
    price: 5821.02,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/911164e3-dc15-4f9b-8bdc-1c027afa7b68.jpeg?h=365&w=240&dpr=2",
    brandName: "AllSaints",
    productDetail: "Eli Chelsea Boot (Men)",
    price: 18426.63,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4c02df6a-af16-4bb5-9f8a-0f33d52131d9.jpeg?h=365&w=240&dpr=2",
    brandName: "Dr. Martens",
    productDetail: "1460' Boot",
    price: 14959.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/663c96fc-e497-4428-9931-24603ca201b1.jpeg?h=365&w=240&dpr=2",
    brandName: "BP.",
    productDetail: "Brayden Lug Chelsea Boot (Men)",
    price: 7915.36,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d5befa71-a7b2-40f1-8d03-01a74f06b0be.jpeg?h=365&w=240&dpr=2",
    brandName: "Hunter",
    productDetail: "Commando Waterproof Chelsea Boot (Men)",
    price: 14959.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b97b4992-b580-4827-88ec-5d73a9032cbe.jpeg?h=365&w=240&dpr=2",
    brandName: "Rodd & Gunn",
    productDetail: "Dargaville Chelsea Boot (Men)",
    price: 17423.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/71314da3-0e6b-42df-ab73-275bf2595ff5.jpeg?h=365&w=240&dpr=2",
    brandName: "SOREL",
    productDetail: "Madson II Moc Toe Waterproof Boot (Men)",
    price: 17599.46,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2198257c-53e2-4d69-b7fa-6bbdfa2177f2.jpeg?h=365&w=240&dpr=2",
    brandName: "Blake Mckay",
    productDetail: "York Suede Chelsea Boot (Men)",
    price: 9670.9,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1733d9a3-c754-4b4b-aef5-ae1882aa784f.jpeg?h=365&w=240&dpr=2",
    brandName: "Dr. Martens",
    productDetail: "1460 Pascal Boot (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/329a1082-9c31-4c90-9256-aeb597d8d0db.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Original Grand Chukka Boot (Men)",
    price: 15839.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/104fb694-1f6f-4760-8516-365b1d667f26.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Stenton Water Repellent Leather Boot (Men)",
    price: 16719.49,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f37ee57f-7e46-4d43-b406-5444d9471285.jpeg?h=365&w=240&dpr=2",
    brandName: "Hunter",
    productDetail: "Original Play Waterproof Boot (Men)",
    price: 9679.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ce5a6a41-120d-4d0d-bfb9-0db5c77215b2.jpeg?h=365&w=240&dpr=2",
    brandName: "Johnston & Murphy",
    productDetail: "Raleigh XC Flex Chelsea Boot (Men)",
    price: 16279.5,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/159bae1c-5bf5-4f23-81f4-39f01faf94c7.jpeg?h=365&w=240&dpr=2",
    brandName: "ALDO",
    productDetail: "Malrose Chukka Boot (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9c6b6411-c39f-47a0-9a89-183a965a9f90.jpeg?h=365&w=240&dpr=2",
    brandName: "Vince",
    productDetail: "Rivers Chelsea Boot (Men)",
    price: 26069.2,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c608818f-e103-4d11-8414-33385ee44ff4.jpeg?h=365&w=240&dpr=2",
    brandName: "Steve Madden",
    productDetail: "Owner Chelsea Boot (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/465d8ac2-3546-44d3-bf5a-1d474e41af89.jpeg?h=365&w=240&dpr=2",
    brandName: "Gordon Rush",
    productDetail: "Williams Boot (Men)",
    price: 11430.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1ea5ecbe-b81d-4454-9fab-f13c407ca343.jpeg?h=365&w=240&dpr=2",
    brandName: "Rodd & Gunn",
    productDetail: "Murphy's Road Chelsea Boot (Men)",
    price: 17423.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9150ae34-397e-4b87-a334-ba0986e25cc4.jpeg?h=365&w=240&dpr=2",
    brandName: "Timberland",
    productDetail: "Euro Waterproof Hiker Boot (Men)",
    price: 10119.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/634768e6-0e7c-4b16-939b-c2e392ae112f.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Grand Ambition Chelsea Boot (Men)",
    price: 16015.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a30f956e-ea9e-4f7d-8870-edd72a474a48.jpeg?h=365&w=240&dpr=2",
    brandName: "Barbour",
    productDetail: "Nimbus Chelsea Boot (Men)",
    price: 7919.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/11c09d1a-2498-4ecb-9424-17bf8fc3337d.jpeg?h=365&w=240&dpr=2",
    brandName: "SOREL",
    productDetail: "Mac Hill™ Lite Trace Waterproof Boot (Men)",
    price: 15839.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1f8f67e9-1078-4452-9215-776a18108b18.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Maxwell Water Resistant Boot (Men)",
    price: 8795.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6b7615b7-289d-4ac7-9875-eb78f930109f.jpeg?h=365&w=240&dpr=2",
    brandName: "Clarks® Originals",
    productDetail: "Clarks® Desert Chukka Boot (Men)",
    price: 13195.2,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c9ecd98f-d301-4d78-96dc-ce2bd6320fc2.jpeg?h=365&w=240&dpr=2",
    brandName: "BP. BE PROUD",
    productDetail: "Harlee Platform Bootie (Gender Inclusive)",
    price: 7035.38,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dd1bcf1f-025c-4cc2-881e-8d53891c036e.jpeg?h=365&w=240&dpr=2",
    brandName: "Palladium",
    productDetail: "Pampa Sport Cuff Waterproof Boot (Unisex)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/065ecffe-4d1a-4967-bd34-ded6e0317c90.jpeg?h=365&w=240&dpr=2",
    brandName: "Clarks® Originals",
    productDetail: "Desert' Boot (Men)",
    price: 13195.2,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6a379611-4976-4e24-bb5a-06669189a291.jpeg?h=365&w=240&dpr=2",
    brandName: "Børn",
    productDetail: "Brody Chelsea Boot (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/beaaeb26-20fb-4b27-9b63-02b9beeb863d.jpeg?h=365&w=240&dpr=2",
    brandName: "Steve Madden",
    productDetail: "Highline Chelsea Boot (Men)",
    price: 8795.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/be109fae-b8cf-485a-9960-dcde0baddad6.jpeg?h=365&w=240&dpr=2",
    brandName: "Johnston & Murphy",
    productDetail: "Copeland' Suede Chukka Boot (Men)",
    price: 15399.53,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4131991c-b1a5-469a-82a9-436f3bdd2310.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Neumel High Moc Weather Boot",
    price: 15839.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/109515de-94ec-424a-8d42-fe529955f038.jpeg?h=365&w=240&dpr=2",
    brandName: "SOREL",
    productDetail: "Mac Hill Waterproof Boot (Men)",
    price: 11202.06,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f6c9ee48-e6b1-4548-8e4b-8a23c86e1f79.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Gatson Waterproof Boot (Men)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fb176252-5c4a-438b-a993-e5262e3bb4c6.jpeg?h=365&w=240&dpr=2",
    brandName: "To Boot New York",
    productDetail: "Shawn Chelsea Boot (Men)",
    price: 34758.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6442c0cb-45c8-4fd4-ad67-4239842c98a7.jpeg?h=365&w=240&dpr=2",
    brandName: "Blake Mckay",
    productDetail: "Redmond Chelsea Boot (Men)",
    price: 14519.55,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3c14efb2-fdc3-4da4-a84b-b889729e5ebd.jpeg?h=365&w=240&dpr=2",
    brandName: "Hunter",
    productDetail: "Original Play Waterproof Rain Boot (Men)",
    price: 10119.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ca1f6b4e-15cb-4196-91fb-09af2124629b.jpeg?h=365&w=240&dpr=2",
    brandName: "Blundstone Footwear",
    productDetail: "Blundstone Water Resistant Chelsea Boot (Men)",
    price: 18915.02,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3f357000-c2bb-4b6d-b447-2672e51382b5.jpeg?h=365&w=240&dpr=2",
    brandName: "Palladium",
    productDetail: "Pampa Travel Lite Boot (Unisex)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/59b5033c-a1d3-4987-bab5-279d12595f82.jpeg?h=365&w=240&dpr=2",
    brandName: "Dr. Martens",
    productDetail: "2976 Chelsea Boot (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/63936deb-bca7-47e9-9559-99678c06c970.jpeg?h=365&w=240&dpr=2",
    brandName: "Merrell",
    productDetail: "Cloud Zip Waterproof Snow Boot (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a9ccba7a-5cf3-4e3f-8275-ef08f691eada.jpeg?h=365&w=240&dpr=2",
    brandName: "Magnanni",
    productDetail: "Riley Diversa Chelsea Boot (Men)",
    price: 35110.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8588299f-172d-4b4d-92fd-d3d4121c119c.jpeg?h=365&w=240&dpr=2",
    brandName: "Hunter",
    productDetail: "Explorer Insulated Commando Boot (Men)",
    price: 17159.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fc9e65fb-9f29-4e95-9d8f-715ca5b70905.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Archer Lug Chelsea Boot (Men)",
    price: 9675.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/462174e5-70ec-467a-a73a-304547c5e03a.jpeg?h=365&w=240&dpr=2",
    brandName: "Versace",
    productDetail: "Column Combat Boot (Men)",
    price: 127596.08,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/29fbf5c8-9323-4271-a26b-28b01ef0e40b.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Neumel II Graphic Bootie (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/69a81bec-1cd1-47c7-87df-87685233596d.jpeg?h=365&w=240&dpr=2",
    brandName: "Palladium",
    productDetail: "Pampa Hi Canvas Boot (Men)",
    price: 7039.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d3dff45c-5992-44e9-9b23-6b55f2a6012d.jpeg?h=365&w=240&dpr=2",
    brandName: "Chaco",
    productDetail: "Fields Waterproof Chelsea Boot (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dd82bc2f-3799-43d9-8904-86e66bb5eea3.jpeg?h=365&w=240&dpr=2",
    brandName: "AllSaints",
    productDetail: "Laker Combat Boot (Men)",
    price: 26311.19,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2dedcc45-defe-4cc4-a571-d2ad70183438.jpeg?h=365&w=240&dpr=2",
    brandName: "Blundstone Footwear",
    productDetail: "Blundstone Super 550 Series Chelsea Boot (Men)",
    price: 20234.98,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e1f5bfee-ee4f-439a-a7ff-5270d7825de0.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Force 1 '07 Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/159bae1c-5bf5-4f23-81f4-39f01faf94c7.jpeg?h=365&w=240&dpr=2",
    brandName: "ALDO",
    productDetail: "Malrose Chukka Boot",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2acbec28-81c2-4f10-901b-9e380bd00286.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Dunk Hi Retro Basketball Shoe (Men)",
    price: 10999.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7754f8d1-d23c-452e-b533-b60ee94bc425.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloud X Training Shoe (Men)",
    price: 12318.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a56dc9c9-0f4c-4794-94d5-0361fe5e9f6d.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Tasman Slipper (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/75c2866f-762c-4937-88bf-a94b6a618721.jpeg?h=365&w=240&dpr=2",
    brandName: "Johnston & Murphy",
    productDetail: "Activate U-Throat Sneaker",
    price: 13639.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/25e8c10b-3963-488a-8374-f4ec64d35a79.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Force 1 07 Sneaker (Men)",
    price: 9679.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/10677569-48b6-48c0-bd37-ae39d07e67d8.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloud 5 Running Shoe (Men)",
    price: 12318.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0ba4c18e-02bd-420e-a021-f23e68f09e5c.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail:
      "Chuck Taylor® All Star® Run Star Hike High Top Platform Sneaker (Unisex)",
    price: 9679.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4ce25787-7df3-4ae5-9e6f-36467abb7939.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Swift Run Sneaker (Men)",
    price: 5939.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/545b52ec-7b0e-4a43-aecb-d79ce4a3610e.jpeg?h=365&w=240&dpr=2",
    brandName: "Birkenstock",
    productDetail: "Arizona Soft Slide Sandal (Men)",
    price: 12759.61,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/58468e36-0302-4e9d-9539-cb4e6edcf3dd.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Swift Run Sneaker (Unisex)",
    price: 4398.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6927aae9-22f5-4ad3-8652-45e1e8cc2479.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Blazer Mid '77 Vintage Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4eff3559-335b-4c6c-a0b5-3cf97a0cf83b.jpeg?h=365&w=240&dpr=2",
    brandName: "OluKai",
    productDetail: "Lae‘ahi Li ‘Ili Convertible Low Top Sneaker",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/aa0df047-b007-461a-9b05-2d2d322a649a.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloudmonster Running Shoe (Men)",
    price: 14958.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/91bd4f3b-bbe9-4c6c-b5c1-69ba0d898e26.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Generation ZeroGrand Stitchlite Sneaker (Men)",
    price: 5279.84,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4ccff1fe-f5fc-49ae-9ec5-698188b8dd51.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Swift Run Sneaker",
    price: 5939.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4b4f2dd7-d68d-4a29-8736-5fa69a325cad.jpeg?h=365&w=240&dpr=2",
    brandName: "CROCS",
    productDetail: "Classic Clog (Unisex)",
    price: 4398.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/24bdb60f-952d-46aa-8fe0-83a9a87f4c95.jpeg?h=365&w=240&dpr=2",
    brandName: "Vans",
    productDetail: "Classic Slip-On Sneaker (Women)",
    price: 6155.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5b74310f-82cc-4e13-a227-f7525089f980.jpeg?h=365&w=240&dpr=2",
    brandName: "Veja",
    productDetail: "Campo Sneaker (Men)",
    price: 13639.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c5d15246-49e3-4208-86cf-9cb264c45d9e.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloudnova Sneaker (Men)",
    price: 14078.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dc76efc5-606e-498c-8110-aec83c3f8517.jpeg?h=365&w=240&dpr=2",
    brandName: "BP.",
    productDetail: "Water Resistant Chelsea Boot (Men)",
    price: 8795.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0434d201-f088-4cb1-a1f2-4a6d38eb489d.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "Soft 7 City Sneaker (Men)",
    price: 14075.17,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/239ebe59-53ab-4695-99b7-bc10853f1c6a.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Dax Plain Toe Derby (Men)",
    price: 4838.97,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8da424d5-b56c-4cbd-99de-f0ee342b6146.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Blazer Mid '77 Premium Sneaker (Men)",
    price: 9239.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3ab39754-353a-4430-8544-0551569ecd70.jpeg?h=365&w=240&dpr=2",
    brandName: "G.H. Bass & Co.",
    productDetail: "Larson Leather Penny Loafer (Men)",
    price: 8315.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/03251e23-b324-4c5f-b59d-dd8bc5888a07.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloud 5 Waterproof Running Shoe (Men)",
    price: 14958.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1aa2363e-92cd-4a09-91be-7874d3280040.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Neumel Chukka Boot (Men)",
    price: 12315.22,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a9366393-52d7-4204-8cd5-417ada64f6f9.jpeg?h=365&w=240&dpr=2",
    brandName: "Comme des Garçons PLAY",
    productDetail:
      "x Converse Chuck Taylor® Hidden Heart High Top Sneaker (Unisex)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ca6344a6-ccc7-46d5-b8c3-c6aef50307c3.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Free Run 2' Sneaker (Men)",
    price: 5414.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6897498f-a70b-4bb2-9603-49eb68a05f72.jpeg?h=365&w=240&dpr=2",
    brandName: "Vans",
    productDetail: "Classic Sneaker (Unisex)",
    price: 5275.44,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/34549702-2666-45f3-b815-fcab40119323.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloudswift Running Shoe (Men)",
    price: 13198.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e5fa2519-9b68-48ee-8d8d-791d2c22361f.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Osborn Grand 360 Penny Loafer (Men)",
    price: 11087.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/18948604-5de1-45cb-bcaf-447d2223fdb3.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Ascot Slipper (Men)",
    price: 9675.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/728980fc-f529-40fb-aa41-eb0b4bbf6f59.jpeg?h=365&w=240&dpr=2",
    brandName: "Birkenstock",
    productDetail: "Boston Soft Clog (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c2448fe8-e3f3-4554-84ff-5cdedd62aa46.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max Dawn Sneaker (Men)",
    price: 7126.9,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bde3f1f4-ed76-4183-a3a9-3ae5b20a7d2a.jpeg?h=365&w=240&dpr=2",
    brandName: "Vans",
    productDetail: "U Old Skool Sneaker (Men)",
    price: 3692.37,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/28c98be5-8d75-415a-a327-f4a818f95393.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max Terrascape 90 Hiking Sneaker (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ac23f13e-df3d-421d-bd95-e11bf416a409.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail: "Chuck Taylor® All Star® 70 High Top Sneaker (Unisex)",
    price: 5609.83,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8b77576e-1a99-4fd8-a83f-1df80da36f4d.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Protector Shoe Spray",
    price: 1319.96,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/546a4974-c9db-46c6-ab6e-1d3463e8af75.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloud 5 Combo Running Shoe (Men)",
    price: 12318.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d9a04813-6a0b-4dc9-bde6-49dfea76556f.jpeg?h=365&w=240&dpr=2",
    brandName: "Vans",
    productDetail: "U Sk8-Hi Sneaker (Unisex)",
    price: 4220.35,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0aeb9f2b-7f18-4c66-8d37-863c0be0a2ce.jpeg?h=365&w=240&dpr=2",
    brandName: "CROCS",
    productDetail: "™ Classic Clog (Unisex)",
    price: 4398.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/27936b73-6ef7-460f-962e-7f3883a35338.jpeg?h=365&w=240&dpr=2",
    brandName: "Vans",
    productDetail: "U Era Low-Top Sneaker (Men)",
    price: 3164.38,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f7b38791-7c88-488e-b428-b6f614b90fb2.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Energize Lifestyle Knit Sneaker (Men)",
    price: 3959,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7ec99a39-8136-417a-a50c-0a67338c443c.jpeg?h=365&w=240&dpr=2",
    brandName: "HOKA",
    productDetail: "Clifton 8 Running Shoe (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/af5b3656-2110-4c8d-9bfd-04a059b9ca65.jpeg?h=365&w=240&dpr=2",
    brandName: "Timberland",
    productDetail: "6 Inch Premium Waterproof Boot (Men)",
    price: 17423.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4d8d09be-8674-4e4a-b19c-29efa0e4cc02.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Brody Driving Penny Loafer (Men)",
    price: 7915.36,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/649bd2a6-b805-4498-8735-1647614d1637.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Dino Penny Loafer (Men)",
    price: 8795.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/380d00af-676d-4848-8ad3-dd0fda4df440.jpeg?h=365&w=240&dpr=2",
    brandName: "ALLBIRDS",
    productDetail: "Tree Runner Sneaker (Men)",
    price: 9239.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/90068c39-aa5d-48d3-aebb-3155b0eb195e.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Osborn Plain Toe Derby (Men)",
    price: 15839.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ab4880a8-61eb-41d4-81ad-831cbdc919a8.jpeg?h=365&w=240&dpr=2",
    brandName: "Steve Madden",
    productDetail: "Darlton Penny Loafer (Men)",
    price: 6863.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ff4ccc7e-4509-48b0-9fa5-00446adadf8c.jpeg?h=365&w=240&dpr=2",
    brandName: "New Balance",
    productDetail: "574 Classic Sneaker (Men)",
    price: 4750.97,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e9c33806-2d49-409b-bebe-9fcf6b14cedf.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Victori One Sport Slide (Men)",
    price: 1757.31,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/474a88be-3cc9-428f-ab19-afb1179a127c.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail: "Chuck Taylor® All Star® Ox Low Top Sneaker (Women)",
    price: 5279.84,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e23b8ba9-6067-4b41-86fa-d9615e7a0ff4.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Generation ZeroGrand Stitchlite Sneaker (Men)",
    price: 6599.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/10b56e87-3a4d-4e96-9ee0-0dd1939ac4b9.jpeg?h=365&w=240&dpr=2",
    brandName: "HOKA",
    productDetail: "Bondi 8 Running Shoe (Men)",
    price: 14519.55,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f49b8e8b-369a-48d7-b8f9-8b41dfa2c77c.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Scuff Slipper (Men)",
    price: 7915.36,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b32e9e67-4ae6-4004-92ae-8c8e4442e6c1.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Blazer Low '77 Sneaker (Men)",
    price: 7479.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/aa639849-497c-4c9f-ab6b-1b575b7f8e7d.jpeg?h=365&w=240&dpr=2",
    brandName: "Versace",
    productDetail: "Palazzo Medusa Slide Sandal (Men)",
    price: 32998.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f7b88c4c-88dd-45f0-8a24-2cd36ac35518.jpeg?h=365&w=240&dpr=2",
    brandName: "BP. BE PROUD",
    productDetail: "Fynn Ankle Strap Platform Pump (Women)",
    price: 6155.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/76863c69-efc0-43da-a029-71f1f6f8feb7.jpeg?h=365&w=240&dpr=2",
    brandName: "Comme des Garçons PLAY",
    productDetail:
      "x Converse Chuck Taylor® Hidden Heart Low Top Sneaker (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2ec92b52-9980-4810-aa4a-19ec846662e4.jpeg?h=365&w=240&dpr=2",
    brandName: "New Balance",
    productDetail: "2002R Sneaker (Men)",
    price: 12318.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d14f159c-f96d-49fd-b833-5c9e86d2d14c.jpeg?h=365&w=240&dpr=2",
    brandName: "Veja",
    productDetail: "V-10 Sneaker (Unisex)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2f6a4ad1-6292-4325-ba95-5c91006b99d6.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Dane Cap Toe Oxford (Men)",
    price: 4838.97,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f4ec658e-830a-4613-a241-d03a3914574c.jpeg?h=365&w=240&dpr=2",
    brandName: "HOKA",
    productDetail: "Ora Recovery Slide Sandal (Unisex)",
    price: 4839.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/01e9e8c8-d4bd-4d00-ae86-318c6727465d.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Free Run 5.0 Running Shoe (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cc6a5980-71a0-4cc5-b809-1319c068efc5.jpeg?h=365&w=240&dpr=2",
    brandName: "Alexander McQueen",
    productDetail: "Oversize Sneaker (Men)",
    price: 51918.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e26ec6ae-66fd-45d2-bd22-9152cba52e54.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Dale Cap Toe Monk Strap Shoe (Men)",
    price: 6596.28,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b6b76cd4-9972-4b45-a824-ea3b2f810d40.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail: "Jack Purcell Low Top Sneaker (Men)",
    price: 5719.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8510b086-7eab-4637-8394-a2b3dd12016b.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Cedar Shoe Tree (Men)",
    price: 1755.55,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ff08130f-974f-4b67-9b75-3f196b4fe981.jpeg?h=365&w=240&dpr=2",
    brandName: "Johnston & Murphy",
    productDetail: "XC4® TR1-Luxe Hybrid Waterproof Sneaker",
    price: 16279.5,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d5b0a80f-0be0-440f-98b0-2907d495a348.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Adilette Comfort Slide Sandal (Unisex)",
    price: 2309.93,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fc0a622b-e9ed-4a3b-a823-1ee02af76f3d.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Stan Smith Low Top Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b6e385b7-a6c3-4563-bde7-499b4e8a296f.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "GrandPro Rally Sneaker (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9efd6667-15b6-4ab8-910f-3d684240d9e8.jpeg?h=365&w=240&dpr=2",
    brandName: "Ted Baker London",
    productDetail: "Watele Water Resistant Plain Toe Derby",
    price: 19799.39,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d66dcc0a-1c6a-4d68-90d1-36e3ab95fc33.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Zoom Pegasus 39 Running Shoe (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e6298f05-3ae3-4b48-a995-4f4cb4823a58.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air VaporMax 2021 FK Sneaker (Men)",
    price: 14252.04,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b95f67bd-175d-46f5-aba6-b4aef4d1e02d.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Revolution 6 Next Nature Road Running Shoe (Men)",
    price: 5719.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4479aa02-5283-410c-a6fc-c7f4016cdd83.jpeg?h=365&w=240&dpr=2",
    brandName: "BP.",
    productDetail: "Axel Modern Pointed Toe Penny Loafer (Men)",
    price: 3516.37,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6026916b-4b99-4de5-8e93-6879f18b19a8.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Mason Water Resistant Chelsea Boot (Men)",
    price: 10555.28,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4eff3559-335b-4c6c-a0b5-3cf97a0cf83b.jpeg?h=365&w=240&dpr=2",
    brandName: "OluKai",
    productDetail: "Lae‘ahi Li ‘Ili Convertible Low Top Sneaker (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3c0b59e6-3108-4bb1-9107-4153ccf0f9ac.jpeg?h=365&w=240&dpr=2",
    brandName: "New Balance",
    productDetail: "XC72 Sneaker (Men)",
    price: 9678.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3f357000-c2bb-4b6d-b447-2672e51382b5.jpeg?h=365&w=240&dpr=2",
    brandName: "Palladium",
    productDetail: "Pampa Travel Lite Boot",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/14eadea1-2868-4783-b9ec-8424c41629ee.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Jace Sneaker (Men)",
    price: 7915.36,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6c2d7a32-7a51-4212-bde5-cb35e2711eda.jpeg?h=365&w=240&dpr=2",
    brandName: "CROCS",
    productDetail: "Classic Lined Clog (Unisex)",
    price: 4398.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e5d8668c-dd5b-4bff-a965-8b740e1c85ec.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail: "Chuck Taylor® All Star® 70 Low Top Sneaker (Unisex)",
    price: 7039.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ba420a91-7219-464c-a001-298ab7e7978f.jpeg?h=365&w=240&dpr=2",
    brandName: "ALDO",
    productDetail: "Stokhid Bit Loafer",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/93d338a3-36b1-4119-a354-91a5272a3d37.jpeg?h=365&w=240&dpr=2",
    brandName: "CROCS",
    productDetail: "Classic Clog (Gender Inclusive)",
    price: 4398.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/eaca6be2-c647-49e8-98de-72d36f42132c.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Ezra Slip-On Sneaker (Men)",
    price: 3516.37,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8d0e54d0-121f-4ef2-b39f-f7cbc0196d67.jpeg?h=365&w=240&dpr=2",
    brandName: "Hey Dude",
    productDetail: "Wally Slip-On (Men)",
    price: 5275.44,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1d0e7d3f-817c-4f46-934d-ee73e0c3a85a.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "THE ROGER Advantage Tennis Sneaker (Men)",
    price: 12318.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/76a86835-5b41-4c57-8499-ed968400d382.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max Pre-Day Sneaker (Men)",
    price: 6863.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e33a26b9-dd27-4936-9583-b79ee2c2ac80.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Grand Series Winslow Wingtip Sneaker (Men)",
    price: 8798.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0c1dcfd8-9131-4fb9-a51e-a4b4b1742d09.jpeg?h=365&w=240&dpr=2",
    brandName: "Good Man Brand",
    productDetail: "Classic Legend London Sneaker (Men)",
    price: 20063.38,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7ab4ca79-4647-4e9b-a0fe-e6757907aaea.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "UltraBoost 5.0 DNA Primeblue Sneaker (Men)",
    price: 15839.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/041cee51-3b0d-485a-84fc-ae3d316fc857.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Classic Scuff Slipper (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ac0fa347-6564-4be8-9b77-5591b509c295.jpeg?h=365&w=240&dpr=2",
    brandName: "APL",
    productDetail: "Big Logo TechLoom Knit Sport Slide (Men)",
    price: 5279.84,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0f445546-8558-4af2-9dcf-79033284490a.jpeg?h=365&w=240&dpr=2",
    brandName: "Good Man Brand",
    productDetail: "Edge Sneaker (Men)",
    price: 20063.38,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3bd39a61-4dec-40ef-942d-4f04c371f273.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "React Phantom Run Flyknit 2 Running Shoe (Women)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4e3c77b5-3281-49ea-bcda-829532499075.jpeg?h=365&w=240&dpr=2",
    brandName: "Comme des Garçons PLAY",
    productDetail:
      "x Converse Chuck Taylor® Hidden Heart Red Sole High Top Sneaker (Unisex)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e234e29f-8073-482e-bbcc-87c6dcaf2107.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Care Kit",
    price: 3079.91,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f7be7dcf-6612-4bc3-aae2-768f5f497efc.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail: "Chuck Taylor® All Star® Lugged Boot (Unisex)",
    price: 7039.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8f8678c9-c36d-4d90-ad63-cebd156727f1.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "Turn II Waterproof Lace-Up Boot (Men)",
    price: 11435.25,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a3e21723-d5a3-436e-ad24-d368a9d63d04.jpeg?h=365&w=240&dpr=2",
    brandName: "Vans",
    productDetail: "Classic Slip-On (Unisex)",
    price: 5275.44,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4a764a87-a9dd-4168-a263-e6b1495c1eeb.jpeg?h=365&w=240&dpr=2",
    brandName: "The North Face",
    productDetail: "ThermoBall™ Traction Water Resistant Slipper (Men)",
    price: 3077.27,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/baebdb64-d13e-4b6d-a502-89d536a357ad.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail:
      "Gender Inclusive Chuck 70 Family + Unity Pride Hi Sneaker",
    price: 4179.87,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6f29ee11-858d-4105-a593-b8fb41995317.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max Terrascape 90 Sneaker (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/82364084-0c6f-4b8b-a40a-72a96f94f807.jpeg?h=365&w=240&dpr=2",
    brandName: "Timberland",
    productDetail: "6-Inch Premium Waterproof Boot (Men)",
    price: 17423.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5ac03200-be09-41eb-97c6-a46efa6f18f1.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Pegasus 83 Premium Sneaker (Men)",
    price: 7919.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/afb58df1-1c3c-4699-bfd7-b8f21514015f.jpeg?h=365&w=240&dpr=2",
    brandName: "G.H. Bass Originals",
    productDetail: "Larson Lug Sole Penny Loafer (Men)",
    price: 10163.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d8fbaad9-9155-4245-ae9c-541fb62e205b.jpeg?h=365&w=240&dpr=2",
    brandName: "New Balance",
    productDetail: "997 H Sneaker (Men)",
    price: 7918.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/39906fc3-ee19-47cf-809f-d08cbd6f41eb.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail: "Chuck Taylor® All Star® Low Sneaker (Men)",
    price: 5279.84,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/35367515-c89d-42be-82ec-14200cf5f539.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Retro GTS Sneaker (Men)",
    price: 5719.82,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d8d74cbe-1574-4692-b6fc-2945ddb55a3f.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Genuine Sheepskin Insoles (Women)",
    price: 1755.55,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/35a5cddb-1a02-438b-90b6-57c302fced4f.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max Pre-Day Sneaker (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f9fee8d2-85bc-4896-88b5-c69df77892f6.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "2.ZeroGrand Laser Wing Oxford (Men)",
    price: 14079.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/40cb1614-b556-405b-b7b4-6b5003a955a0.jpeg?h=365&w=240&dpr=2",
    brandName: "Comme des Garçons PLAY",
    productDetail:
      "x Converse Chuck Taylor® - Hidden Heart High Top Sneaker (Unisex)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a01c0685-8dce-44e5-af6f-d49d4a6b0ad9.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "X_PLR Sneaker (Men)",
    price: 4751.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c293b21c-4e5e-49b2-ba4c-7a8c71d693b4.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Swift Run Sneaker (Unisex)",
    price: 7479.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cf5c9367-48c7-4364-90d6-c12c4f7431ca.jpeg?h=365&w=240&dpr=2",
    brandName: "New Balance",
    productDetail: "327 Sneaker (Men)",
    price: 7918.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cb65d38e-5387-4c13-ac6d-12b50e8d3935.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Original Grand Wingtip Derby (Men)",
    price: 14079.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8b485c29-681e-4663-b561-c313af4ef4f8.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Court Vision Low Sneaker (Men)",
    price: 4484.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1b46d293-1376-4fc0-840b-8cb05332105c.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail:
      "React Pegasus Trail 4 Gore-Tex® Waterproof Running Shoe (Men)",
    price: 14079.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/72007b93-c87b-410e-837a-54f8bcd70520.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "ACG Lowcate Hiking Shoe (Men)",
    price: 9679.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e5549f4a-b1e6-494c-a2b7-2b7e6f3f1a54.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail:
      "Chuck Taylor® All Star® Lugged 2.0 Waterproof Extra Hi Sneaker (Women)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1488060b-5812-4235-a301-e2c0b2ba0d4e.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "City Tray Plain Toe Derby (Men)",
    price: 15835.11,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7e099d18-1f7c-4f34-91ad-7caa21b224bd.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Pryor Penny Loafer (Men)",
    price: 8795.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/61977681-a0ed-4131-93f2-76ec541c8c9e.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloudeasy Running Shoe (Men)",
    price: 11438.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9009713f-5d1d-4af5-a221-8277ff83724c.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "Helsinki Classic Bike Toe Loafer (Men)",
    price: 10555.28,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/499b6982-7e7f-44cf-b5df-7dbe82061172.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Drew Apron Toe Blucher Derby (Men)",
    price: 6156.29,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/64f90eb3-ebba-4ce0-98ab-8531d09eb0e0.jpeg?h=365&w=240&dpr=2",
    brandName: "Dr. Martens",
    productDetail: "1461 W' Oxford",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/74819e6d-199f-45bf-bd10-d7f324d6379b.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Waffle One SE Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ea2bf1d5-4cb7-40a8-8186-f809481f6cd7.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max 90 Sneaker (Men)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/27ff15d3-ec85-4aeb-916b-c21a52127b72.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max 270 Sneaker (Men)",
    price: 14079.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0188ae7a-d48e-4b78-a256-668842e0bddb.jpeg?h=365&w=240&dpr=2",
    brandName: "Dr. Martens",
    productDetail: "1460 Combat Boot (Unisex)",
    price: 14959.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/32628c1b-c5cb-4ada-842e-09d390c171db.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max 270 Sneaker (Men)",
    price: 14079.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8d8ba632-0473-45b0-aa6c-99655ea01e73.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Blazer Low '77 Jumbo Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/434b31d2-4b6e-4dcb-ae50-3e3ef0611034.jpeg?h=365&w=240&dpr=2",
    brandName: "G.H. Bass Originals",
    productDetail: "Lincoln Easy Bit Loafer (Men)",
    price: 9547.71,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/676ed832-3f8c-4393-9c78-00fc3dc33969.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "CloudRunner Running Shoe (Men)",
    price: 12318.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ae231e59-bf75-4f54-8d15-37a57d84a1cb.jpeg?h=365&w=240&dpr=2",
    brandName: "Off-White",
    productDetail: "Industrial Pool Slide Sandal (Men)",
    price: 21999.32,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/efc926fa-0e2f-41ac-8617-7b7e88549ad2.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloudflow Running Shoe (Men)",
    price: 12318.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3f243377-4762-4faf-b204-143094fe7d0d.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Lifestyle Knit Sneaker (Men)",
    price: 3957.24,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/71314da3-0e6b-42df-ab73-275bf2595ff5.jpeg?h=365&w=240&dpr=2",
    brandName: "SOREL",
    productDetail: "Madson II Moc Toe Waterproof Boot (Men)",
    price: 17599.46,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4c74e3f1-95ac-4bd4-b562-90b5404d984b.jpeg?h=365&w=240&dpr=2",
    brandName: "PARACHUTE",
    productDetail: "Classic Turkish Cotton Slipper (Unisex)",
    price: 3431.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/159bae1c-5bf5-4f23-81f4-39f01faf94c7.jpeg?h=365&w=240&dpr=2",
    brandName: "ALDO",
    productDetail: "Malrose Chukka Boot (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1d061ab0-2928-4f8f-a4d5-51cc21ff319a.jpeg?h=365&w=240&dpr=2",
    brandName: "Burberry",
    productDetail: "Jack Check Low Top Sneaker (Men)",
    price: 54558.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/51994574-acba-46b2-b8d4-706be3e57355.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Tasman Corduroy II Slipper (Men)",
    price: 7919.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4cc8a7ee-625d-4934-b9a0-7f789c560050.jpeg?h=365&w=240&dpr=2",
    brandName: "Common Projects",
    productDetail: "Original Achilles Sneaker (Men)",
    price: 39334.79,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8810b9e0-d628-417b-a17b-e7817824fee0.jpeg?h=365&w=240&dpr=2",
    brandName: "New Balance",
    productDetail: "574 Rugged Sneaker (Men)",
    price: 7918.88,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d4067e0e-98b6-4527-9d21-2f85f3d80981.jpeg?h=365&w=240&dpr=2",
    brandName: "Birkenstock",
    productDetail: "Arizona Soft Slide Sandal (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/91fb5154-07bf-4888-919e-b00aaac3ff0c.jpeg?h=365&w=240&dpr=2",
    brandName: "Steve Madden",
    productDetail: "Palmir Loafer (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9ebd611f-a519-4559-8d00-f5479b2f6c45.jpeg?h=365&w=240&dpr=2",
    brandName: "OluKai",
    productDetail: "Moloa' Genuine Shearling Slipper (Men)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2a3cd2fb-26d4-4e21-85fe-309ec76b9d6f.jpeg?h=365&w=240&dpr=2",
    brandName: "Rockport",
    productDetail: "Total Motion Wingtip (Men)",
    price: 7699.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9ef26cfe-d323-4232-b941-ab3d659fefa4.jpeg?h=365&w=240&dpr=2",
    brandName: "Vince",
    productDetail: "Draco Sneaker (Men)",
    price: 16499.49,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fc9e65fb-9f29-4e95-9d8f-715ca5b70905.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Archer Lug Chelsea Boot (Men)",
    price: 9675.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4509dfb2-7112-420d-ad8e-47e7dd44738b.jpeg?h=365&w=240&dpr=2",
    brandName: "Marc Joseph New York",
    productDetail: "Wall Street Bit Loafer Driving Shoe (Men)",
    price: 13639.58,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d555f103-1bd2-4b4d-bbd2-bf6dde584d39.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Hurache Sneaker (Men)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cd3f233f-cc83-4ba5-ad87-daf0517d25cf.jpeg?h=365&w=240&dpr=2",
    brandName: "Off-White",
    productDetail:
      "x Sal Barbier Vulcanized Low Top Sneaker (Gender Inclusive) (Nordstrom Exclusive)",
    price: 42678.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bd04789e-1025-4625-b002-6c26417c201d.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Ozweego Sneaker (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1f8f67e9-1078-4452-9215-776a18108b18.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Maxwell Water Resistant Boot (Men)",
    price: 8795.33,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e0ab3411-5e58-4089-8406-6d8786a481b6.jpeg?h=365&w=240&dpr=2",
    brandName: "To Boot New York",
    productDetail: "Belize Slide Sandal (Men)",
    price: 7259.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8fb78e82-1e8f-48c9-99ba-744f572564be.jpeg?h=365&w=240&dpr=2",
    brandName: "ALLBIRDS",
    productDetail: "Tree Pipers Sneaker (Men)",
    price: 9239.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1c88f72c-0038-402b-a5ba-8039411b65c6.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Blazer Mid '77 Jumbo High Top Sneaker (Men)",
    price: 9679.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a9ccba7a-5cf3-4e3f-8275-ef08f691eada.jpeg?h=365&w=240&dpr=2",
    brandName: "Magnanni",
    productDetail: "Riley Diversa Chelsea Boot (Men)",
    price: 35110.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7c179550-4e7c-41e2-b074-5030e3042c13.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max SC Sneaker (Men)",
    price: 7479.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c608818f-e103-4d11-8414-33385ee44ff4.jpeg?h=365&w=240&dpr=2",
    brandName: "Steve Madden",
    productDetail: "Owner Chelsea Boot (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8efb412e-d67a-486f-a3fe-dcc98e205704.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max Pre-Day Sneaker (Men)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a62ec8ef-86ad-4af5-83db-0e720a77fea0.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "4DFWD Running Shoe (Men)",
    price: 17599.46,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3f485ea0-770c-4983-8b91-bc221286fcf5.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "Helsinki 2.0 Apron Toe Leather Slip-On (Men)",
    price: 14075.17,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b9e28415-d945-4027-97b8-cf4260031cac.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max 97 Sneaker (Men)",
    price: 14959.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/83905669-e12e-4bed-8e1d-fa2376818836.jpeg?h=365&w=240&dpr=2",
    brandName: "Birkenstock",
    productDetail: "Bend Sneaker (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9ef5ab82-0834-44ba-a4fd-db8d5823a8f1.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Jordan 6 Rings Sneaker (Men)",
    price: 14519.55,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0f5085e5-b07d-47ca-8e05-6588f5e13fd2.jpeg?h=365&w=240&dpr=2",
    brandName: "BP.",
    productDetail: "Shane Casual Lace-Up Derby (Men)",
    price: 3871,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2ad02d03-e2be-4221-bc2d-e3e2b818ffb8.jpeg?h=365&w=240&dpr=2",
    brandName: "Steve Madden",
    productDetail: "Nunan Plain Toe Oxford (Men)",
    price: 7035.38,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/13823e46-eb30-4bbd-9af2-c258c6850c53.jpeg?h=365&w=240&dpr=2",
    brandName: "Magnanni",
    productDetail: "Landon Double Strap Monk Shoe (Men)",
    price: 35110.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7859939e-0ff8-461f-a98b-606a798a0f52.jpeg?h=365&w=240&dpr=2",
    brandName: "Polo Ralph Lauren",
    productDetail: "Lauren Ralph Lauren Keaton Sneaker (Men)",
    price: 5279.84,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fff5fa3a-8806-4598-9086-f7bf477cebd5.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Court Vision Next Nature Sneaker (Men)",
    price: 6159.81,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/106b99f0-95cc-4695-9ace-b5af2899b15b.jpeg?h=365&w=240&dpr=2",
    brandName: "Vince",
    productDetail: "Dawson Low Top Sneaker (Men)",
    price: 16499.49,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5decce84-feb9-4106-b039-8efdda413ede.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max 270 G Golf Shoe (Unisex)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/006e4b40-afd7-4989-a8d6-be8ff860c0b8.jpeg?h=365&w=240&dpr=2",
    brandName: "Magnanni",
    productDetail: "Palos Oxford (Men)",
    price: 30799.06,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d44f66b8-0cd0-43a9-a665-b83923fe394d.jpeg?h=365&w=240&dpr=2",
    brandName: "Steve Madden",
    productDetail: "Libertie Smoking Slipper (Men)",
    price: 4839.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/09b2d807-1631-4342-8ab7-d0a3994bf052.jpeg?h=365&w=240&dpr=2",
    brandName: "Magnanni",
    productDetail: "Ramiro II Apron Toe Penny Loafer (Men)",
    price: 31679.03,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a9e16e00-81be-4804-8d55-ab6d54291e93.jpeg?h=365&w=240&dpr=2",
    brandName: "Vans",
    productDetail: "Old Skool Sneaker (Unisex)",
    price: 6159.81,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3c71dab4-67ee-40ec-8037-f3cd1d216b21.jpeg?h=365&w=240&dpr=2",
    brandName: "Florsheim",
    productDetail: "Sorrento Monk Strap Shoe (Men)",
    price: 10999.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/23c1f5e8-5e9c-4fc8-957f-bd35414ea220.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Waffle One Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ae4e51e4-29e0-4397-918f-8783936e38b6.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Waffle One Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/683ae5d8-3c22-4e53-a6c1-fbb672a474e2.jpeg?h=365&w=240&dpr=2",
    brandName: "Hunter",
    productDetail: "Original Tall' Rain Boot (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/309780d7-5843-42a0-a291-7fa345f859b4.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail: "Chuck Taylor® All Star® High Top Sneaker (Unisex)",
    price: 5279.84,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9e799203-f22d-404d-a6d6-9f289f82c9f0.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Colby Flex Chukka Boot (Men)",
    price: 9675.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/dcf9dea0-e7b7-4d3d-a7e8-339412d31038.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "ZeroGrand Stitchlite Oxford (Men)",
    price: 16279.5,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a24347ff-a243-46b2-9b09-fb197570937c.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Waffle Trainer 2 Sneaker (Men)",
    price: 4751.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c5927132-c127-48ef-ade0-db764dbca13b.jpeg?h=365&w=240&dpr=2",
    brandName: "Sperry",
    productDetail: "Gold Cup Authentic Original Boat Shoe (Men)",
    price: 14955.14,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e950168e-6e08-4a1c-aac8-fa88abf6cf99.jpeg?h=365&w=240&dpr=2",
    brandName: "Balenciaga",
    productDetail: "Runner Sneaker (Men)",
    price: 101196.89,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8e14ea45-e51c-4c56-8883-856a208daf71.jpeg?h=365&w=240&dpr=2",
    brandName: "Florsheim",
    productDetail: "Tux Plain Toe Derby (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8a095c39-d206-4d28-82f8-c185d97c1f85.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "UltraBoost 1.0 DNA Sneaker (Men)",
    price: 14079.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/60d14c94-ed1f-4ecf-b3b1-7290b82a4866.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Burrow Slipper (Men)",
    price: 4839.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/80b459a0-51c1-45fc-979f-77ad8367f1c5.jpeg?h=365&w=240&dpr=2",
    brandName: "Deer Stags",
    productDetail: "Nordic' Slipper (Men)",
    price: 2639.04,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/728fe44a-180f-4ecb-97c3-45e44f3f9d05.jpeg?h=365&w=240&dpr=2",
    brandName: "P448",
    productDetail: "Soho Sneaker (Men)",
    price: 13111.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7820a431-de5f-4e47-bbac-ccf888d309f0.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "GrandPro Low Top Sneaker (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9c8b5de9-48be-41e2-b925-ef3560cef8b8.jpeg?h=365&w=240&dpr=2",
    brandName: "Off-White",
    productDetail: "Vulcanized Low Top Sneaker (Men)",
    price: 29919.08,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a4fd06e6-b237-4a35-92a5-62b5abc6a34f.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Supernova Running Shoe (Men)",
    price: 6335.81,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c3e3f2d3-677f-4fa4-a293-23e86724db6a.jpeg?h=365&w=240&dpr=2",
    brandName: "Gucci",
    productDetail: "Rhython GG Supreme Sneaker (Men)",
    price: 78317.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/329a1082-9c31-4c90-9256-aeb597d8d0db.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Original Grand Chukka Boot (Men)",
    price: 15839.51,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/91dd211d-ea48-4de2-85d4-63f9637c91c9.jpeg?h=365&w=240&dpr=2",
    brandName: "Vince",
    productDetail: "Parker Low Top Sneaker (Men)",
    price: 14849.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1bd7ee5c-ba7a-4dde-804c-ea8614186ec9.jpeg?h=365&w=240&dpr=2",
    brandName: "OluKai",
    productDetail: "Moku Pa'e Sneaker (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8e080b1c-4e76-4dcf-b03d-598d64a3c756.jpeg?h=365&w=240&dpr=2",
    brandName: "Magnanni",
    productDetail: "Rafa II Apron Toe Bit Loafer (Men)",
    price: 31679.03,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/da485db6-9111-4d83-bb8e-bbc4fff42ac3.jpeg?h=365&w=240&dpr=2",
    brandName: "Salvatore Ferragamo",
    productDetail: "Parigi Driving Shoe (Men)",
    price: 61158.12,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4b71e6e3-fbb0-41a1-97f0-0e718fb2f8ad.jpeg?h=365&w=240&dpr=2",
    brandName: "Sperry",
    productDetail: "Authentic Original' Boat Shoe (Men)",
    price: 8355.34,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7dc87e45-1450-417f-a0d2-a75933d442c7.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Davidson Grand Wingtip Derby (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fc9cbb5a-53ee-4e03-b1fe-f3b69212b435.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Harrison Grand 2.0 Cap Toe Monk Strap Loafer (Men)",
    price: 19359.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/beb08740-ad69-42c5-971a-0d3ee5dff380.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Force 1 High '07 Sneaker (Men)",
    price: 10999.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/790027ea-5122-4000-a4d0-46025d790004.jpeg?h=365&w=240&dpr=2",
    brandName: "ADIDAS X NOAH",
    productDetail: "Noah Adria Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a47066ec-cd39-442b-8ee4-14b452acdec6.jpeg?h=365&w=240&dpr=2",
    brandName: "Johnston & Murphy",
    productDetail: "McGuffey' Plain Toe Derby (Men)",
    price: 11351.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/474a88be-3cc9-428f-ab19-afb1179a127c.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail: "Chuck Taylor® All Star® Low Top Sneaker (Men)",
    price: 5279.84,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/27fa659f-c1b8-4fd2-9e06-14308f0dd659.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "GrandPro Crossover Sneaker (Men)",
    price: 14079.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fb64f963-29a8-40ce-bc72-46bd780ad9db.jpeg?h=365&w=240&dpr=2",
    brandName: "To Boot New York",
    productDetail: "Formal Loafer (Men)",
    price: 30799.06,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bc89dc38-8862-4a41-b66f-b8b139f67e95.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "City Tray Bike Toe Slip-On (Men)",
    price: 15835.11,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/295afd31-dde5-4d98-9713-34ac6b111555.jpeg?h=365&w=240&dpr=2",
    brandName: "Sperry",
    productDetail: "Striper II CVO Core Sneaker (Men)",
    price: 5711.02,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cbc0b8d1-342a-4e78-b720-ec47c37c6e32.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "Zerogrand WFA Sneaker (Men)",
    price: 14079.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/73a45f55-7396-492b-8050-34db192fe2e2.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "ACG Moc 3.5 Quilted Sneaker (Men)",
    price: 7919.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c428958e-2fa0-4e26-897b-89ac61f3f249.jpeg?h=365&w=240&dpr=2",
    brandName: "To Boot New York",
    productDetail: "Carlin Sneaker (Men)",
    price: 32998.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bab6d48c-cc71-420a-9835-6abed621e439.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Jordan Air 200E Sneaker (Men)",
    price: 10999.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8e14034a-1fad-4dae-be5f-e0c8c1cbbce5.jpeg?h=365&w=240&dpr=2",
    brandName: "Gucci",
    productDetail: "Rhyton GG Sneaker (Men)",
    price: 78317.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f1da3f74-10f3-47e8-8360-2f269235e302.jpeg?h=365&w=240&dpr=2",
    brandName: "New Balance",
    productDetail: "Fresh Foam 1080v11 Running Shoe (Men)",
    price: 6598.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3eb5551c-6afd-42b4-ad8b-3546bec7de2d.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Pegasus 83 Premium Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c5234004-83c5-4df6-882e-089e743a18c8.jpeg?h=365&w=240&dpr=2",
    brandName: "Collegium",
    productDetail: "Pillar Destroyer Low Top Sneaker (Men)",
    price: 19799.39,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0cc4dd68-62ce-40ee-89d9-6dd64ef9cb09.jpeg?h=365&w=240&dpr=2",
    brandName: "OluKai",
    productDetail: "Ohana' Flip Flop (Men)",
    price: 6599.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a0ca8dd5-7a13-436e-af63-f59a4f4cfca7.jpeg?h=365&w=240&dpr=2",
    brandName: "Johnston & Murphy",
    productDetail: "Hawthorn Penny Loafer (Men)",
    price: 13111.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a1a54def-2613-4e2a-b8bd-2c01140f0326.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Stan Smith Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/29083d3a-c166-44cd-8bfa-0a10220dd70b.jpeg?h=365&w=240&dpr=2",
    brandName: "G.H. Bass Originals",
    productDetail: "Camp Boat Shoe (Men)",
    price: 8139.75,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/35629475-ecf4-445f-b597-36901839ab01.jpeg?h=365&w=240&dpr=2",
    brandName: "Johnston & Murphy",
    productDetail: "Bower Venetian Loafer (Men)",
    price: 12759.61,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1896b346-faa9-4e74-8ad6-ca8b58521c82.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Patrick Suede Bit Loafer (Men)",
    price: 6156.29,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cacaae59-35db-4d5a-aa03-19021269dfd9.jpeg?h=365&w=240&dpr=2",
    brandName: "G.H. Bass & Co.",
    productDetail: "Layton Lug Sole Loafer (Men)",
    price: 14519.55,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7888d7d0-36c7-418a-baa7-537eee0ead5d.jpeg?h=365&w=240&dpr=2",
    brandName: "CLAE",
    productDetail: "Bradley Sneaker (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/39382a97-0acc-4d9a-8a1e-90b18683837d.jpeg?h=365&w=240&dpr=2",
    brandName: "OluKai",
    productDetail: "Tuahine Waterproof Flip Flop (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5a883604-7b32-4137-a356-64b42e1512f6.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Force 1 Mid 07 LX Sneaker (Men)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cfe4dca6-2f41-48e9-8533-a958b0d9174b.jpeg?h=365&w=240&dpr=2",
    brandName: "Converse",
    productDetail:
      "Chuck Taylor® All Star® Lugged 2.0 Hi Sneaker (Women)",
    price: 7479.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1b4a8cea-0133-400b-a21c-f62906c5d672.jpeg?h=365&w=240&dpr=2",
    brandName: "Cole Haan",
    productDetail: "GrandPro Topspin Sneaker (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5d9f3aef-1936-4360-907b-56cc98aa7f63.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "UltraBoost 1.0 DNA Sneaker (Women)",
    price: 16719.49,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d85c19c4-d682-4924-a763-5dc164a3e210.jpeg?h=365&w=240&dpr=2",
    brandName: "Off-White",
    productDetail: "Vulcanized Low Top Sneaker (Men)",
    price: 28159.14,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e3685e71-dd9f-44cf-8485-826c434bdd23.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Superep Go 3 Flyknit Running Shoe (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/42c143fd-7cd0-40e8-8077-ae8551de72ad.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Forum Low Sneaker (Men)",
    price: 6599.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/93c71dce-d78d-43d4-8816-5489a5a4ceed.jpeg?h=365&w=240&dpr=2",
    brandName: "Merrell",
    productDetail: "Moab Flight Trail Running Shoe (Men)",
    price: 7037.14,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b434cf02-963b-4ba2-9a39-ba2373f50cca.jpeg?h=365&w=240&dpr=2",
    brandName: "Nordstrom",
    productDetail: "Maddox Chukka Boot (Men)",
    price: 9675.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b657dd8d-98d9-4971-9362-7c4d12bc64ab.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Classic Short Boot (Men)",
    price: 14959.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0e193bfd-acaa-4321-8e6a-85e087d1caa0.jpeg?h=365&w=240&dpr=2",
    brandName: "Alexander McQueen",
    productDetail: "Oversize Sneaker (Men)",
    price: 51918.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e12a6959-572f-4545-9fc5-3b393c1867bd.jpeg?h=365&w=240&dpr=2",
    brandName: "SOREL",
    productDetail: "Madson II Waterproof Chukka Boot (Men)",
    price: 16719.49,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/93444130-2055-4c4d-b2cb-3e6272591f13.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Scuff Romeo II Slipper (Men)",
    price: 9679.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6be6b603-f213-4f7b-be31-ad5f5c1490f4.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "City Tray Cap Toe Derby (Men)",
    price: 15835.11,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/33bc5277-2935-4c23-8d11-560ff131fd02.jpeg?h=365&w=240&dpr=2",
    brandName: "Gucci",
    productDetail: "72 Sport Slide (Men)",
    price: 27279.16,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2c4886f2-0fb4-4bbc-b461-0a5858ef3bb8.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "Street Tray Sport Sneaker (Men)",
    price: 10294.8,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9ebe5cdc-49fa-4737-bc1f-103f5d6f44ca.jpeg?h=365&w=240&dpr=2",
    brandName: "P448",
    productDetail: "Jack Sneaker (Men)",
    price: 13111.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a993dbc6-99ee-4ca3-b336-4ba9cea236c8.jpeg?h=365&w=240&dpr=2",
    brandName: "Magnanni",
    productDetail: "Federico' Oxford",
    price: 23319.28,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b5617329-c1af-4b68-ad61-4701350faef8.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Retropy E5 Sneaker (Men)",
    price: 9151.72,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/37812962-cc52-42a9-8986-41e35d46345b.jpeg?h=365&w=240&dpr=2",
    brandName: "HOKA",
    productDetail: "Rincon 3 Running Shoe (Men)",
    price: 10999.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d004dd8a-d706-4430-b033-e6f18ac2d597.jpeg?h=365&w=240&dpr=2",
    brandName: "Balenciaga",
    productDetail: "Logo Pool Closed Clog (Men)",
    price: 43558.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c4c74d53-1b79-456b-92b7-1a0d2ea58b8c.jpeg?h=365&w=240&dpr=2",
    brandName: "Steve Madden",
    productDetail: "Hoxton Wingtip Derby (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ec496370-ee7a-4c4d-b933-10b8a28d9a09.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max 270 Sneaker (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9ab66c08-8857-47b2-b015-73db4bf6f885.jpeg?h=365&w=240&dpr=2",
    brandName: "BP.",
    productDetail: "Kolton Derby (Men)",
    price: 4222.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5b76f0fa-e792-43e9-972b-b1a5d7f1ef19.jpeg?h=365&w=240&dpr=2",
    brandName: "Veja",
    productDetail: "Esplar Sneaker (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f949a494-c389-4c9a-a0a7-5c14fb92f07f.jpeg?h=365&w=240&dpr=2",
    brandName: "Birkenstock",
    productDetail: "Bend Low Top Sneaker (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a2ae0879-65d4-4edf-a65d-9ab3001fc6df.jpeg?h=365&w=240&dpr=2",
    brandName: "Steve Madden",
    productDetail: "Cirius Crystal Embellished Loafer (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/63936deb-bca7-47e9-9559-99678c06c970.jpeg?h=365&w=240&dpr=2",
    brandName: "Merrell",
    productDetail: "Cloud Zip Waterproof Snow Boot (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9b41605d-54c8-4013-94ba-edba10fdafce.jpeg?h=365&w=240&dpr=2",
    brandName: "Magnanni",
    productDetail: "Palma Derby (Men)",
    price: 31239.04,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fa638ab7-8470-4c90-8bb7-0193bacc8e6e.jpeg?h=365&w=240&dpr=2",
    brandName: "To Boot New York",
    productDetail: "Sierra Sneaker (Men)",
    price: 32998.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0905b00f-664b-4315-aae9-2e965c26b82c.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Griffey Max 1 High Top Sneaker (Men)",
    price: 14959.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fd73b42e-641f-4928-9880-ff0736603f14.jpeg?h=365&w=240&dpr=2",
    brandName: "Florsheim",
    productDetail: "SORRENTO CAP TOE OXF",
    price: 10999.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cd32f701-ee9a-4f68-aa4c-f32808008573.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Huarache Sneaker (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/85f25446-6d3d-4346-8d63-3b925f255b29.jpeg?h=365&w=240&dpr=2",
    brandName: "Off-White",
    productDetail: "Arrow Pool Slide Sandal (Men)",
    price: 18479.43,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d623893b-85b9-4e26-a518-c2637bd3825a.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max 90 Sneaker (Men)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bb5ad708-fec9-422f-a088-871b47a93aab.jpeg?h=365&w=240&dpr=2",
    brandName: "Balenciaga",
    productDetail: "Track Sneaker (Men)",
    price: 92397.17,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/58468e36-0302-4e9d-9539-cb4e6edcf3dd.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Swift Run Sneaker",
    price: 4398.99,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/357648d2-c8db-46f8-a979-f2523e953b1c.jpeg?h=365&w=240&dpr=2",
    brandName: "Alexander McQueen",
    productDetail: "Oversize Sneaker (Men)",
    price: 51918.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/483ab77e-d1b5-44fe-bc75-779c9835999c.jpeg?h=365&w=240&dpr=2",
    brandName: "Birkenstock",
    productDetail: "Kyoto Slide Sandal (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/69543403-e1b1-4492-8025-5e6a50600346.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "Helsinki 2.0 Bike Toe Leather Oxford (Men)",
    price: 14079.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a01c0685-8dce-44e5-af6f-d49d4a6b0ad9.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "X_PLR Sneaker",
    price: 4751.85,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/8a4299d7-e055-4921-953e-d486b64f7063.jpeg?h=365&w=240&dpr=2",
    brandName: "Johnston & Murphy",
    productDetail: "Hawkins Penny Loafer (Men)",
    price: 13991.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9c6b6411-c39f-47a0-9a89-183a965a9f90.jpeg?h=365&w=240&dpr=2",
    brandName: "Vince",
    productDetail: "Rivers Chelsea Boot (Men)",
    price: 26069.2,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/faca7d19-d440-4024-9f4c-3f7a6abd9316.jpeg?h=365&w=240&dpr=2",
    brandName: "SKECHERS",
    productDetail: "Motley Oven Arch Fit Sneaker (Men)",
    price: 7035.38,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/89a0834b-d537-441a-8fbc-d91d8b29a7fc.jpeg?h=365&w=240&dpr=2",
    brandName: "TOMS",
    productDetail: "Alpargata Canvas Sneaker",
    price: 4395.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4db5cce0-5b8d-4479-a26a-030e13804088.jpeg?h=365&w=240&dpr=2",
    brandName: "Salvatore Ferragamo",
    productDetail: "Nepal Moon Piper Gancio Loafer (Men)",
    price: 65997.97,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e3a626cc-5138-46c7-b1dd-5ca1cb1c6199.jpeg?h=365&w=240&dpr=2",
    brandName: "Magnanni",
    productDetail: "Crucero Wholecut Oxford (Men)",
    price: 35110.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/16acae32-d44f-42d3-9d4f-cab377972cb4.jpeg?h=365&w=240&dpr=2",
    brandName: "Zella",
    productDetail: "Lifestyle Knit Sneaker (Men)",
    price: 6595.4,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/173acaae-3b7a-42fd-be2f-4f0f3d70b364.jpeg?h=365&w=240&dpr=2",
    brandName: "Canali",
    productDetail: "Plain & Printed Penny Loafer",
    price: 43558.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4914209f-dfdb-4a2a-9a6f-73dfe72b0972.jpeg?h=365&w=240&dpr=2",
    brandName: "Veja",
    productDetail: "Rio Branco Sneaker (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d94ea8d1-bc91-492d-8175-670f56a990d0.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Stan Smith Low Top Sneaker (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/896fb098-3ee5-4690-a6a9-1b4f47fb3588.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Presto Sneaker (Men)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/69a81bec-1cd1-47c7-87df-87685233596d.jpeg?h=365&w=240&dpr=2",
    brandName: "Palladium",
    productDetail: "Pampa Hi Canvas Boot",
    price: 7039.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/109515de-94ec-424a-8d42-fe529955f038.jpeg?h=365&w=240&dpr=2",
    brandName: "SOREL",
    productDetail: "Mac Hill Waterproof Boot (Men)",
    price: 11202.06,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/48094ecb-4641-42ac-b600-224c963d41cf.jpeg?h=365&w=240&dpr=2",
    brandName: "ALLBIRDS",
    productDetail: "Wool Runners Sneaker (Men)",
    price: 9679.7,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6fd5337b-31d7-4af6-9cf3-d9448c92f92a.jpeg?h=365&w=240&dpr=2",
    brandName: "Jordan",
    productDetail: "Air Jordan Mid SE Basketball Sneaker (Men)",
    price: 11879.64,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bf508c0e-f9f9-41ae-b089-a60f2a54e4be.jpeg?h=365&w=240&dpr=2",
    brandName: "Johnston & Murphy",
    productDetail: "XC4® Tanner Waterproof Chelsea Boot (Men)",
    price: 17511.46,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d2353849-4dfb-43f3-b2ab-ca575a609a59.jpeg?h=365&w=240&dpr=2",
    brandName: "Gucci",
    productDetail: "Jordaan Horsebit Loafer (Men)",
    price: 80957.52,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/c97dbb5d-2873-43a0-9b69-aab1dffff4e0.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max 2021 SE Sneaker (Men)",
    price: 14959.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d6f9cad7-9d90-4c53-8518-31c291fb93be.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Skyview Waterproof Chelsea Boot (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/378cc086-bb5e-4c17-805d-b77cb14b4694.jpeg?h=365&w=240&dpr=2",
    brandName: "Vince",
    productDetail: "Fletcher Suede Slip-On Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/529465d8-1c81-48ba-bf5c-ccbff13de871.jpeg?h=365&w=240&dpr=2",
    brandName: "Gucci",
    productDetail: "Jordaan Horsebit Loafer (Men)",
    price: 80957.52,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7da2f146-5ed6-4cc4-9114-73cb792d0747.jpeg?h=365&w=240&dpr=2",
    brandName: "Gucci",
    productDetail: "Agrado Slide Sandal (Men)",
    price: 39598.78,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/3010b510-3ada-417f-986c-ee18854be953.jpeg?h=365&w=240&dpr=2",
    brandName: "Blake Mckay",
    productDetail: "Damon Plain Toe Derby (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7df74426-0c88-4ced-a3ca-6d2b61cb5554.jpeg?h=365&w=240&dpr=2",
    brandName: "Gordon Rush",
    productDetail: "Sutherland Wingtip Boot (Men)",
    price: 17326.67,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/08d80af1-2172-47e2-b312-a2c7d7937877.jpeg?h=365&w=240&dpr=2",
    brandName: "Alexander McQueen",
    productDetail: "Oversize Sneaker (Men)",
    price: 51918.41,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/7770c1ad-cbaa-4167-8a5a-33a2a4d18683.jpeg?h=365&w=240&dpr=2",
    brandName: "Veja",
    productDetail: "V-10 Sneaker (Unisex)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/27339de0-c922-47ae-91c7-164eb472f648.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Force 1 '07 LV8 Running Shoe (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0bd09d96-6142-4bab-8590-5d2a4496b664.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Men's ZoomX Vaporfly NEXT% 2 Racing Shoe",
    price: 21999.32,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d2fcd7bd-8251-4a7d-b3b0-d5af75d77ced.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "Street Lite Retro Sneaker",
    price: 11435.25,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0437233f-c739-40fb-9b89-16a5f37185be.jpeg?h=365&w=240&dpr=2",
    brandName: "Salomon",
    productDetail: "XT-Wings 2 Trail Running Shoe (Men)",
    price: 8447.74,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/cf333a40-4e89-4d99-a8f2-be6705d57bb9.jpeg?h=365&w=240&dpr=2",
    brandName: "Fear of God Essentials",
    productDetail: "The Essential Tennis Mid Top Sneaker (Men)",
    price: 25959.2,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/67f63df3-aba6-4509-9460-3466e0585d39.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Forum Mid Parley Sneaker (Men)",
    price: 7919.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/ea86ddb4-5435-43e7-a8f6-5833560f67c1.jpeg?h=365&w=240&dpr=2",
    brandName: "Timberland",
    productDetail: "Premium Waterproof Boot (Men)",
    price: 18479.43,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/80489633-7d0f-4012-8a15-1fab2acb1701.jpeg?h=365&w=240&dpr=2",
    brandName: "HOKA",
    productDetail: "Solimar Running Shoe (Men)",
    price: 10999.66,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/29abc938-0b41-4755-9beb-42237e15834b.jpeg?h=365&w=240&dpr=2",
    brandName: "UGG®",
    productDetail: "Neuman Slipper (Men)",
    price: 10555.28,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/d7d48ef6-9476-4898-aef3-a44307a50cdd.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "React Phantom Run Flyknit 2 Running Shoe (Unisex)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/abf73c35-b90b-4a9e-be60-ff47ca956cd4.jpeg?h=365&w=240&dpr=2",
    brandName: "Gucci",
    productDetail: "Zowie Chelsea Boot (Men)",
    price: 109996.63,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/2198257c-53e2-4d69-b7fa-6bbdfa2177f2.jpeg?h=365&w=240&dpr=2",
    brandName: "Blake Mckay",
    productDetail: "York Suede Chelsea Boot (Men)",
    price: 9670.9,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/e900326c-4948-4ef5-8837-dce2fb48c591.jpeg?h=365&w=240&dpr=2",
    brandName: "Ted Baker London",
    productDetail: "Bradberry Monk Strap Shoe (Men)",
    price: 19799.39,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/35cd1054-349b-4cd9-ada5-0202ee175399.jpeg?h=365&w=240&dpr=2",
    brandName: "Veja",
    productDetail: "Nova High Top Sneaker (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/bbddc7f0-fc69-4593-835c-a604d1b4155c.jpeg?h=365&w=240&dpr=2",
    brandName: "Koio",
    productDetail: "Capri Sneaker (Men)",
    price: 25959.2,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/391e6f6a-e20a-4535-a5f0-46a3d0b73d61.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "Helsinki 2.0 Plain Toe Leather Derby (Men)",
    price: 14079.57,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/738fcbb8-9805-4a5e-afff-7cbeed685cdf.jpeg?h=365&w=240&dpr=2",
    brandName: "Johnston & Murphy",
    productDetail: "Hawthorn Double Buckle Monk Strap Shoe (Men)",
    price: 13111.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/24c0a7cd-14dd-4e8e-8e85-e1795dddc110.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloud Running Shoe (Men)",
    price: 11438.77,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/78c9ee32-95e2-4651-9b1e-2f71f43088cc.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Blazer Mid '77 Premium High Top Sneaker (Men)",
    price: 8799.73,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/a2aa9a0e-0bd4-474f-bbc3-b3e656d07094.jpeg?h=365&w=240&dpr=2",
    brandName: "L.L.Bean",
    productDetail: "Wicked Good Venetian Moccasin (Men)",
    price: 7831.76,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/673aa9c1-ca16-4a88-98bc-87220d3f0ca1.jpeg?h=365&w=240&dpr=2",
    brandName: "Magnanni",
    productDetail: "Riley Diversa Chelsea Boot (Men)",
    price: 35110.92,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4c02df6a-af16-4bb5-9f8a-0f33d52131d9.jpeg?h=365&w=240&dpr=2",
    brandName: "Dr. Martens",
    productDetail: "1460' Boot",
    price: 14959.54,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4c11261a-469d-4878-a3dc-e21902a19be7.jpeg?h=365&w=240&dpr=2",
    brandName: "Birkenstock",
    productDetail: "Barbados Slide Sandal (Unisex)",
    price: 3515.49,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/0d0dc780-178d-46bc-a94a-ad09a3272e1f.jpeg?h=365&w=240&dpr=2",
    brandName: "ZEGNA",
    productDetail: "L'Asola Suede Penny Loafer (Men)",
    price: 78317.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/6510ead1-20b9-4708-b217-86635fbe516a.jpeg?h=365&w=240&dpr=2",
    brandName: "ECCO",
    productDetail: "Exowrap Strap Sandal (Men)",
    price: 5716.3,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5461d90c-4034-4898-8371-266c9ac0acc6.jpeg?h=365&w=240&dpr=2",
    brandName: "On",
    productDetail: "Cloudnova Form Sneaker (Men)",
    price: 14078.69,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/32da2468-19b2-4f69-962b-fb55bb5c244b.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "React Infinity Run Flyknit 3 Running Shoe (Men)",
    price: 13199.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/9fe9c5ff-07a0-4168-92d3-be2cfa758a78.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max Pre-Day Sneaker (Men)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/09103d7f-f778-41e0-a4ef-f2f1b8ebc835.jpeg?h=365&w=240&dpr=2",
    brandName: "Steve Madden",
    productDetail: "Aahron Leather Loafer (Men)",
    price: 10559.68,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/1cd27d03-ab7d-4c44-b5be-83959c16fcc2.jpeg?h=365&w=240&dpr=2",
    brandName: "J & M COLLECTION",
    productDetail: "Baldwin Venetian Loafer (Men)",
    price: 17159.47,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/4066b536-854c-4cdc-afe1-b78000ff42d4.jpeg?h=365&w=240&dpr=2",
    brandName: "Nike",
    productDetail: "Air Max 90 Golf Shoe (Men)",
    price: 11439.65,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/f8c6cfe6-8ac4-4bc6-b5d3-925d86b47854.jpeg?h=365&w=240&dpr=2",
    brandName: "ZEGNA",
    productDetail: "L'Asola Suede Penny Loafer (Men)",
    price: 78317.6,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/5adbdb72-588e-4448-9503-dc0322a27cc5.jpeg?h=365&w=240&dpr=2",
    brandName: "adidas",
    productDetail: "Adilette Comfort Slide Sandal (Gender Inclusive)",
    price: 2111.94,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/20ee3b22-95ed-4a85-b9b6-d7d801b34443.jpeg?h=365&w=240&dpr=2",
    brandName: "OluKai",
    productDetail: "Moloa Slip-On (Men)",
    price: 12319.62,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/fda93a0a-9e59-4ac5-a126-d26a5d506b8b.jpeg?h=365&w=240&dpr=2",
    brandName: "Gucci",
    productDetail: "Tennis 1977 Slip-On Sneaker (Men)",
    price: 60718.14,
  },
  {
    imageLink:
      "https://n.nordstrommedia.com/id/sr3/b3636ef1-114d-4971-8eb3-279c0a74ee4e.jpeg?h=365&w=240&dpr=2",
    brandName: "Blundstone Footwear",
    productDetail: "Blundstone Water Resistant Chelsea Boot (Men)",
    price: 18915.02,
  },
];

const appendData = (arr) => {
  document.querySelector(".container").innerHTML = "";
  arr.forEach(function (elem) {
    let box = document.createElement("div");
    let image_it = document.createElement("img");
    let brand_it = document.createElement("p");
    let description_it = document.createElement("p");
    let price_it = document.createElement("p");
    let button = document.createElement("button");

    image_it.src = elem.imageLink;
    brand_it.innerText = elem.brandName;
    description_it.innerText = elem.productDetail;
    price_it.innerText = elem.price;
    button.innerText = "Add to Bag";

    button.addEventListener("click", function () {
      let object_cart = {
        image: elem.imageLink,
        brand: elem.brandName,
        description: elem.productDetail,
        price: elem.price,
      };
      addtoCart(object_cart);
    });

    box.append(image_it, brand_it, description_it, price_it, button);

    document.querySelector(".container").append(box);
  });
};

const addtoCart = (object_cart) => {
  let arr = JSON.parse(localStorage.getItem("cartStorage")) || [];

  let check = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].description === object_cart.description) {
      check = true;
      break;
    }
  }

  if (check === true) alert("Already Added!");
  else {
    arr.push(object_cart);
    localStorage.setItem("cartStorage", JSON.stringify(arr));
  }
};



function filterData(inputVal) {
  inputVal = inputVal
    .trim()
    .split("")
    .map((ele) => ele.toLowerCase())
    .join("");

  const filterArr = allData.filter((ele) => {
    let des = ele.productDetail;
    des = des
      .trim()
      .split(" ")
      .join("")
      .split("")
      .map((elem) => elem.toLowerCase())
      .join("");

    let check = false;
    for (let j = 0; j <= des.length - inputVal.length; j++) {
      let str = "";
      for (let k = j; k < j + inputVal.length; k++) {
        str += des[k];
      }
      if (str === inputVal) {
        check = true;
        break;
      }
    }

    if (check) return ele;
  });
  appendData(filterArr);
}

const searchVal = localStorage.getItem('searchVal')
filterData(searchVal)