const cars = () => {
  return {
    c1: {
      make: "Honda",
      items: [
        {
          id: 1,
          name: "Honda City",
          price: 2250000,
          productDetail: "Good car, 1st owner",
          imgsrc: "city.jpg",
          location: "Gulistan-e-Johar, Karachi",
          sellerName: "Waqas",
        },
        {
          id: 2,
          name: "Honda Civic",
          price: 3000000,
          productDetail: "Very good car, 1st owner",
          imgsrc: "civic.jpg",
          location: "North Karachi, Karachi",
          sellerName: "Adnan",
        },
        {
          id: 3,
          name: "Honda Vezel",
          price: 2500000,
          productDetail: "Two piece touch up, 1st owner",
          imgsrc: "vezel.jpg",
          location: "Hill Park, Karachi",
          sellerName: "Zuhaib",
        },
      ],
    },
    c2: {
      make: "Suzuki",
      items: [
        {
          id: 4,
          name: "Suzuki Mehran",
          price: 750000,
          productDetail: "Two piece touch up, 2nd owner",
          imgsrc: "mehran.jpg",
          location: "Star Gate, Karachi",
          sellerName: "Abbas",
        },
        {
          id: 5,
          name: "Suzuki Liana",
          price: 800000,
          productDetail: "9/10 condition, alloy rims, 5th owner",
          imgsrc: "liana.jpg",
          location: "Tariq Road, Karachi",
          sellerName: "Bilal",
        },
        {
          id: 6,
          name: "Suzuki Ciaz",
          price: 2500000,
          productDetail: "Almost car, 1st owner",
          imgsrc: "ciaz.jpg",
          location: "Sindhi Muslim Society, Karachi",
          sellerName: "Usmani",
        },
      ],
    },
    c3: {
      make: "Toyota",
      items: [
        {
          id: 7,
          name: "Toyota Vitz",
          price: 1750000,
          productDetail: "Good car, 2nd owner",
          imgsrc: "vitz.png",
          location: "Malir Cantonment, Karachi",
          sellerName: "Farooq",
        },
        {
          id: 8,
          name: "Toyota Corolla",
          price: 1800000,
          productDetail: "8/10 condition, 2nd owner",
          imgsrc: "corolla.jpg",
          location: "Gulshan-e-Iqbal, Karachi",
          sellerName: "Nabeel",
        },
        {
          id: 9,
          name: "Toyota Fielder",
          price: 1600000,
          productDetail: "5/10 condition, 2nd owner",
          imgsrc: "fielder.jpg",
          location: "Sohrab Goth, Karachi",
          sellerName: "Erfan",
        },
      ],
    },
  };
};

// export const computers = {"HP":["corei3","corei5","corei7"],"Dell":["corei3","corei5","corei7"],"Apple":["corei3","corei5","corei7"]}
// export const mobiles = {"Nokia":["3.1","6.1","3310"],"Samsung":["galaxy7","galaxy8","galaxy9"],"AppleiPhone":["6","7","X"]}

exports.cars = cars;
