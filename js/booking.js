document.addEventListener('DOMContentLoaded', () => {
    // Récupérer le paramètre "trainer" dans l'URL, par exemple ?trainer=islam ou ?trainer=khabib
    const params = new URLSearchParams(window.location.search);
    const trainerParam = params.get('trainer');
  
    // Données pour chaque coach, y compris l'URL de la photo
    const coachData = {
      islam: {
        name: "Islam Makhachev",
        age: "31 years old",
        bio: "Islam Makhachev is a renowned coach known for his well-rounded style, combining wrestling and striking. He excels in grappling and passionately conveys his technique.",
        price: "Price: $60/h",
        review: "Review: 4.8/5",
        availability: "Monday to Friday: 6 AM - 8 PM | Saturday/Sunday: by appointment only",
        photo: "img/islam.jpeg"
      },
      khabib: {
        name: "Khabib Nurmagomedov",
        age: "34 years old",
        bio: "Khabib Nurmagomedov, the former undefeated MMA champion, is renowned for his mastery of grappling and his strict discipline. His experience makes him exceptional.",
        price: "Price: $80/h",
        review: "Review: 5/5",
        availability: "Monday to Friday: 7 AM - 9 PM | Saturday/Sunday: by appointment only",
        photo: "img/khabib.jpeg"
      }
    };
  
    // Sélectionner les éléments HTML à remplir
    const trainerNameEl = document.getElementById("trainerName");
    const trainerAgeEl = document.getElementById("trainerAge");
    const trainerBioEl = document.getElementById("trainerBio");
    const trainerPriceEl = document.getElementById("trainerPrice");
    const trainerReviewEl = document.getElementById("trainerReview");
    const trainerAvailabilityEl = document.getElementById("trainerAvailability");
    const trainerPhotoEl = document.getElementById("trainerPhoto");
  
    // Remplir la page en fonction du paramètre
    if (trainerParam && coachData[trainerParam]) {
      const data = coachData[trainerParam];
      trainerNameEl.textContent = data.name;
      trainerAgeEl.textContent = data.age;
      trainerBioEl.textContent = data.bio;
      trainerPriceEl.textContent = data.price;
      trainerReviewEl.textContent = data.review;
      trainerAvailabilityEl.textContent = data.availability;
      trainerPhotoEl.src = data.photo;
      
      // Stocker le nom du coach avec la clé attendue par la page confirmation
      localStorage.setItem('finalTrainerName', data.name);
    } else {
      trainerNameEl.textContent = "Coach inconnu";
      trainerBioEl.textContent = "Aucune information disponible.";
      trainerPhotoEl.style.display = "none";
    }
  });
  