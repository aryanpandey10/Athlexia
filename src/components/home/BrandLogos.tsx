const brands = [
  { name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma_logo.svg/200px-Puma_logo.svg.png" },
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/200px-Logo_NIKE.svg.png" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/200px-Adidas_Logo.svg.png" },
  { name: "Reebok", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Reebok_2019_logo.svg/200px-Reebok_2019_logo.svg.png" },
  { name: "Under Armour", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/200px-Under_armour_logo.svg.png" },
];

export function BrandLogos() {
  return (
    <section className="bg-background py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-8 md:h-10 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
