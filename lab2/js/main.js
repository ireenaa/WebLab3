document.addEventListener("DOMContentLoaded", function() {
    
    const sortButton = document.getElementById("sortButton");
    const searchButton = document.getElementById("search_button");
    const searchInput = document.getElementById("search_section");
    const countButton = document.getElementById("countButton");
    const countText = document.querySelector(".countText");
    const clearButton = document.getElementById("clear_button");
    const cards = document.querySelectorAll(".cards");
  

    const originalCarData = [
      {
        carName: "911 Carrera Coupe",
        price: 145000,
      },
      {
        carName: "911 Carrera Coupe (red)",
        price: 147000,
      },
      {
        carName: "Audi Q8 e-tron",
        price: 72000,
      },
      {
        carName: "Mercedes-Benz E-Class",
        price: 79000,
      },
      {
        carName: "Mercedes RS e-tron GT",
        price: 91000,
      },
      {
        carName: "Mercedes-Benz E-Class (2)",
        price: 81000,
      },
    ];
  
    let carData = [...originalCarData]; 
  
    
    function updateImages(data) {
      cards.forEach((card, index) => {
        const car = data[index];
        if (car) {
          const image = card.querySelector(".photo img");
          image.src = carImageURL(car.carName);
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  
    
    function carImageURL(carName) {
      const carImages = {
        "911 Carrera Coupe": "/images/911-white.svg",
        "911 Carrera Coupe (red)": "/images/911-red.svg",
        "Audi Q8 e-tron": "/images/q8.svg",
        "Mercedes-Benz E-Class": "/images/e-class-1.svg",
        "Audi RS e-tron GT": "/images/audi-rs.svg",
        "Mercedes-Benz E-Class (2)": "/images/e-class-2.svg",
      };
      return carImages[carName] || "/default-image.png";
    }
  
    sortButton.addEventListener("click", function() {
      carData.sort((a, b) => a.price - b.price);
      updateCards(carData);
      updateImages(carData);
    });
  
  
    
    searchButton.addEventListener("click", function() {
      const searchQuery = searchInput.value.toLowerCase();
      if (searchQuery === "") {
        
        carData = [...originalCarData];
      } else {
       
        carData = originalCarData.filter((car) =>
          car.carName.toLowerCase().includes(searchQuery)
        );
      }
      updateCards(carData);
      updateImages(carData);
    });
  
    
    countButton.addEventListener("click", function() {
      const totalAmount = carData.reduce((total, car) => total + car.price, 0);
      countText.textContent = `Total: $${totalAmount}`;
    });
  
    
    clearButton.addEventListener("click", function() {
      carData = [...originalCarData];
      searchInput.value = "";
      updateCards(carData);
      updateImages(carData);
    });
  
    
    function updateCards(data) {
      cards.forEach((card, index) => {
        const car = data[index];
        if (car) {
          const carInfo = card.querySelector(".car-info");
          const description = carInfo.querySelector(".description p");
          const price = carInfo.querySelector(".price p");
          description.textContent = car.carName;
          price.textContent = `$ ${car.price}`;
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  
   
    updateCards(carData);
    updateImages(carData);
  });