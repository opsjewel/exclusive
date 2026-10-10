import React from 'react'

const BannerLeft = () => {
  const data = [
    { name: 'Woman’s Fashion' },
    { name: 'Men’s Fashion' },
    { name: 'Electronics' },
    { name: 'Home & Lifestyle' },
    { name: 'Medicine' },
    { name: 'Sports & Outdoor' },
    { name: 'Baby’s & Toys' },
    { name: 'Groceries & Pets' },
    { name: 'Health & Beauty' },
  ]

  return (
    <div className="w-full min-w-0 md:relative md:w-[30%] md:shrink-0 md:pr-4 lg:w-[25%] lg:pr-6 xl:w-[20%]">
      {/* Mobile: horizontal category menu */}
      <div className="mb-4 md:hidden">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {data.map((item) => (
            <div
              key={item.name}
              className="shrink-0 whitespace-nowrap rounded-full border border-black/15 px-4 py-2 text-sm font-primary transition-colors hover:bg-black hover:text-white"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* Tablet and desktop: vertical sidebar */}
      <div className="hidden md:block md:pr-2 md:after:absolute md:after:right-0 md:after:top-0 md:after:h-full md:after:w-px md:after:bg-black/20 lg:pr-4">
        {data.map((item) => (
          <div
            key={item.name}
            className="mb-4 cursor-pointer text-sm font-primary transition-colors hover:text-primary lg:text-base"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BannerLeft

