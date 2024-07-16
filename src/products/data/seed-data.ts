interface SeedProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      name: 'shirt 1',
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      image: '1740176-00-A_0_2000.jpg',
      stock: 7,
      price: 75,
    },
    {
      name: 'shirt 2',
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      image: '1740507-00-A_0_2000.jpg',
      stock: 5,
      price: 200,
    },

    {
      name: 'shirt 3',
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      image: '1740250-00-A_0_2000.jpg',
      stock: 10,
      price: 130,
    },

    {
      name: 'shirt 4',
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      image: '1740280-00-A_0_2000.jpg',
      stock: 50,
      price: 45,
    },
    {
      name: 'shirt 5',
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      image: '1741416-00-A_0_2000.jpg',
      stock: 50,
      price: 40,
    },
    {
      name: 'shirt 6',
      description:
        'Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.',
      image: '7654393-00-A_2_2000.jpg',
      stock: 0,
      price: 35,
    },
    {
      name: 'shirt 7',
      description:
        "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      image: '1703767-00-A_0_2000.jpg',
      stock: 15,
      price: 35,
    },
    {
      name: 'shirt 8',
      description:
        "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      image: '1700280-00-A_0_2000.jpg',
      stock: 17,
      price: 35,
    },
    {
      name: 'shirt 9',
      description:
        "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
      image: '8764734-00-A_0_2000.jpg',
      stock: 12,
      price: 35,
    },
    {
      name: 'shirt 10',
      description:
        'Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.',
      image: '7652426-00-A_0_2000.jpg',
      stock: 5,
      price: 35,
    },
  ],
};
