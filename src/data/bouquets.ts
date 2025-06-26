export interface Bouquet {
  _id: string | undefined;
  name: string;
  image: string;
  price: number;
  description?: string;
  categories: string[];
}

export const bouquets = [
  {
    _id: '1',
    name: "Фруктово-дитячий",
    categories: ["Фруктові", "Дитячі"],
    price: 1000,
    image: "bucket/bucket_5.jpg",
    description: "Пізніше тут буде опис даного букету",
  },
  {
    _id: '2',
    name: "Мармишка",
    categories: ["Маршмеллоу", "Дитячі"],
    price: 800,
    image: "bucket/bucket_1.jpg",
  },
  {
    _id: '3',
    name: "М'ясний",
    categories: ["М'ясний", "Чоловічі"],
    price: 2000,
    image: "bucket/bucket_4.jpg",
  },
  {
    _id: '4',
    name: "Дитячий букет",
    categories: ["Букети", "Дитячі"],
    price: 1000,
    image: "bucket/bucket_2.jpg",
    description:
      "ndjvnsdhviusdv diuvhiusdhv ysudyvuysdgvuysdg vgusydgv uysdg vygsduyvg usdgvuysdgvuyudusuyguys ysudgv uysgdv uysdvguy dvgsdgvusydvg ysdgv sdv",
  },
  {
    _id: '5',
    name: "Коробочка",
    categories: ["В коробці"],
    price: 1500,
    image: "bucket/bucket_3.jpg",
  },
];
