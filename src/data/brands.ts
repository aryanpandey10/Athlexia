export interface Brand {
  id: string;
  name: string;
  logo: string;
  description?: string;
}

export const brands: Brand[] = [
  {
    id: "1",
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/200px-Logo_NIKE.svg.png",
    description: "Just Do It",
  },
  {
    id: "2",
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/200px-Adidas_Logo.svg.png",
    description: "Impossible Is Nothing",
  },
  {
    id: "3",
    name: "Puma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma_logo.svg/200px-Puma_logo.svg.png",
    description: "Forever Faster",
  },
  {
    id: "4",
    name: "Reebok",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Reebok_2019_logo.svg/200px-Reebok_2019_logo.svg.png",
    description: "Be More Human",
  },
  {
    id: "5",
    name: "Asics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/200px-Asics_Logo.svg.png",
    description: "Sound Mind, Sound Body",
  },
  {
    id: "6",
    name: "New Balance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/200px-New_Balance_logo.svg.png",
    description: "Fearlessly Independent",
  },
  {
    id: "7",
    name: "Under Armour",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/200px-Under_armour_logo.svg.png",
    description: "The Only Way Is Through",
  },
  {
    id: "8",
    name: "Fila",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Fila_logo.svg/200px-Fila_logo.svg.png",
    description: "Play It Your Way",
  },
];
