// Example JSON data for recipes
const recipes = [
    {
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish with creamy sauce",
        ingredientHeading: "Ingredients:",
        ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan cheese", "Black pepper"],
        instructionsHeading: "Instructions:",
        instructions: ["Cook spaghetti according to package instructions", "Fry bacon until crispy, then chop into pieces", "Mix eggs and grated Parmesan cheese in a bowl", "Drain cooked spaghetti and add to egg mixture, stirring quickly to coat", "Add bacon pieces and black pepper, mix well", "Serve immediately"]
      },
    {
      title: "Chicken Parmesan",
      description: "Tender chicken breast breaded and baked with marinara sauce and cheese",
      ingredientHeading: "Ingredients:",
      ingredients: ["Chicken breasts", "Breadcrumbs", "Eggs", "Marinara sauce", "Mozzarella cheese", "Parmesan cheese"],
      instructionsHeading: "Instructions:",
      instructions: ["Preheat oven to 375°F (190°C)", "Pound chicken breasts to an even thickness", "Dip chicken breasts in beaten eggs, then coat with breadcrumbs", "Place breaded chicken breasts on a baking sheet and bake for 25 minutes", "Remove chicken from oven and top with marinara sauce and shredded mozzarella cheese", "Return to oven and bake for an additional 10 minutes, or until cheese is melted and bubbly", "Sprinkle with grated Parmesan cheese before serving"]
      },
      {
        title: "Vegetable Stir-Fry",
        description: "Healthy and colorful stir-fried vegetables in a savory sauce",
        ingredientHeading: "Ingredients:",
        ingredients: ["Broccoli", "Carrots", "Bell peppers", "Snow peas", "Onion", "Garlic", "Ginger", "Soy sauce", "Sesame oil", "Cornstarch", "Rice vinegar"],
        instructionsHeading: "Instructions:",
        instructions: ["Heat sesame oil in a large skillet or wok over medium-high heat", "Add minced garlic and ginger, cook for 1 minute", "Add sliced onion and cook until softened", "Add chopped vegetables (broccoli, carrots, bell peppers, snow peas), stir-fry for 5-6 minutes until tender-crisp", "In a small bowl, whisk together soy sauce, rice vinegar, and cornstarch", "Pour sauce over vegetables and cook until sauce thickens", "Serve hot over cooked rice or noodles"]
      },
      {
        title: "Classic Chocolate Chip Cookies",
        description: "Soft and chewy cookies loaded with chocolate chips",
        ingredientHeading: "Ingredients:",
        ingredients: ["All-purpose flour", "Butter", "Brown sugar", "Granulated sugar", "Eggs", "Vanilla extract", "Baking soda", "Salt", "Chocolate chips"],
        instructionsHeading: "Instructions:",
        instructions: ["Preheat oven to 350°F (175°C)", "In a large bowl, cream together softened butter, brown sugar, and granulated sugar until smooth", "Beat in eggs one at a time, then stir in vanilla extract", "Combine flour, baking soda, and salt; gradually add to the creamed mixture", "Stir in chocolate chips", "Drop by rounded spoonfuls onto ungreased baking sheets", "Bake for 8 to 10 minutes, or until lightly golden brown", "Allow cookies to cool on baking sheet for 5 minutes before transferring to wire racks to cool completely"]
      },
      {
        title: "Mushroom Risotto",
        description: "Creamy and flavorful Italian rice dish with mushrooms",
        ingredientHeading: "Ingredients:",
        ingredients: ["Arborio rice", "Mushrooms", "Onion", "Garlic", "White wine", "Chicken or vegetable broth", "Parmesan cheese", "Butter", "Olive oil", "Salt", "Black pepper"],
        instructionsHeading: "Instructions:",
        instructions: ["In a large skillet, heat olive oil over medium heat", "Add diced onion and minced garlic, cook until softened", "Add sliced mushrooms and cook until browned", "Stir in Arborio rice and cook for 1-2 minutes", "Pour in white wine and cook until absorbed", "Gradually add chicken or vegetable broth, stirring frequently, until rice is creamy and tender", "Stir in grated Parmesan cheese and butter", "Season with salt and black pepper to taste", "Serve hot, garnished with additional Parmesan cheese if desired"]
      },
      {
        title: "Beef Tacos",
        description: "Classic Mexican street food with seasoned beef and toppings",
        ingredientHeading: "Ingredients:",
        ingredients: ["Ground beef", "Taco seasoning", "Tortillas", "Lettuce", "Tomato", "Onion", "Cheese", "Salsa", "Sour cream", "Guacamole"],
        instructionsHeading: "Instructions:",
        instructions: ["In a skillet, cook ground beef over medium heat until browned", "Add taco seasoning and water according to package instructions, simmer until thickened", "Warm tortillas in a separate skillet or microwave", "Assemble tacos with seasoned beef and desired toppings such as lettuce, diced tomato, diced onion, grated cheese, salsa, sour cream, and guacamole", "Serve hot and enjoy!"]
      },
      {
        title: "Greek Salad",
        description: "Fresh and crisp salad with Mediterranean flavors",
        ingredientHeading: "Ingredients:",
        ingredients: ["Romaine lettuce", "Cucumber", "Tomato", "Red onion",      "Kalamata olives", "Feta cheese", "Extra virgin olive oil", "Red wine vinegar", "Dried oregano", "Salt", "Black pepper"],
        instructionsHeading: "Instructions:",
        instructions: ["Chop Romaine lettuce, cucumber, tomato, and red onion into bite-sized pieces", "In a large bowl, combine chopped vegetables with Kalamata olives and crumbled feta cheese", "Drizzle extra virgin olive oil and red wine vinegar over the salad", "Sprinkle with dried oregano, salt, and black pepper to taste", "Toss gently to coat all ingredients with dressing", "Serve immediately as a refreshing side dish or light meal"]
      },
      {
      title: "Banana Bread",
      description: "Moist and delicious bread made with ripe bananas",
      ingredientHeading: "Ingredients:",
      ingredients: ["Ripe bananas", "All-purpose flour", "Granulated sugar", "Butter", "Eggs", "Baking soda", "Salt", "Vanilla extract", "Walnuts or chocolate chips (optional)"],
      instructionsHeading: "Instructions:",
      instructions: ["Preheat oven to 350°F (175°C) and grease a loaf pan", "In a mixing bowl, mash ripe bananas with a fork or potato masher", "Add softened butter, granulated sugar, beaten eggs, and vanilla extract to the mashed bananas, mix until well combined", "In a separate bowl, whisk together flour, baking soda, and salt", "Gradually add dry ingredients to wet ingredients, mixing until just combined", "Fold in chopped walnuts or chocolate chips if desired", "Pour batter into prepared loaf pan and bake for 50-60 minutes, or until a toothpick inserted into the center comes out clean", "Allow banana bread to cool in the pan for 10 minutes before transferring to a wire rack to cool completely"]
    },
    {
        title: "Butter Chicken",
        description: "A classic Indian dish consisting of tender chicken cooked in a rich and creamy tomato-based sauce.",
        ingredientHeading: "Ingredients:",
        ingredients: ["500g boneless, skinless chicken thighs, cut into bite-sized pieces", "1 cup plain yogurt", "1 tablespoon lemon juice", "2 tablespoons butter", "2 tablespoons vegetable oil", "1 large onion, finely chopped", "3 cloves garlic, minced", "1-inch piece of ginger, minced", "1 teaspoon ground cumin", "1 teaspoon ground coriander", "1 teaspoon garam masala", "1/2 teaspoon turmeric powder", "1/2 teaspoon chili powder", "1 cup tomato puree" ,"1/2 cup heavy cream" ,"Salt and black pepper to taste" , "Fresh cilantro leaves for garnish"],
        instructionsHeading: "Instructions:",
        instructions: ["Preheat oven to 350°F (175°C) and grease a loaf pan", "In a mixing bowl, mash ripe bananas with a fork or potato masher", "Add softened butter, granulated sugar, beaten eggs, and vanilla extract to the mashed bananas, mix until well combined", "In a separate bowl, whisk together flour, baking soda, and salt", "Gradually add dry ingredients to wet ingredients, mixing until just combined", "Fold in chopped walnuts or chocolate chips if desired", "Pour batter into prepared loaf pan and bake for 50-60 minutes, or until a toothpick inserted into the center comes out clean", "Allow banana bread to cool in the pan for 10 minutes before transferring to a wire rack to cool completely"]
      }
    // Add more recipes as needed
  ];
  
  // Get the dropdown heading and the recipe container
  const dropdownHeading = document.getElementById('dropdown-heading');
  const recipeContainer = document.querySelector('.recipe-container');
  
  // Function to toggle the visibility of the recipe container
  function toggleRecipeContainer() {
    const containerDisplayStyle = recipeContainer.style.display;
    recipeContainer.style.display = (containerDisplayStyle === 'none' || containerDisplayStyle === '') ? 'block' : 'none';
  }
  
  // Add event listener to the dropdown heading to toggle the container visibility
  dropdownHeading.addEventListener('click', toggleRecipeContainer);
  
  // Get the containers for featured recipes and all recipes
  const featuredRecipesContainer = document.querySelector('.featured-recipes');
  const recipeGridContainer = document.querySelector('.recipe-grid');
  
  // Loop through the recipes data and generate HTML for each recipe
  recipes.forEach(recipe => {
    // Create a new recipe element
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe');
    
    // Populate the recipe element with data
    recipeElement.innerHTML = `
      <h3>${recipe.title}</h3>
      <p>${recipe.description}</p>
      <!-- Add a button to toggle the visibility of ingredients and instructions -->
      <button class="toggle-details-button">Show Details</button>
      <div class="recipe-details" style="display: none;">
        <h4>Ingredients</h4>
        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h4>Instructions</h4>
        <p>${recipe.instructions}</p>
      </div>
    `;
    
    // Append the recipe element to the appropriate container
    if (recipeGridContainer) {
      recipeGridContainer.appendChild(recipeElement);
    } else {
      featuredRecipesContainer.appendChild(recipeElement);
    }
  });
  
  // Add event listener to each toggle-details-button
  const toggleButtons = document.querySelectorAll('.toggle-details-button');
  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const details = button.nextElementSibling;
      details.style.display = details.style.display === 'none' ? 'block' : 'none';
      button.textContent = details.style.display === 'none' ? 'Show Details' : 'Hide Details';
    });
  });
  // Get the recipes button and the recipe container
const recipesBtn = document.getElementById('recipes-btn');

// Function to toggle the visibility of the recipe container
function toggleRecipeContainer(event) {
  event.preventDefault(); // Prevent default link behavior
  const recipeContainer = document.querySelector('.recipe-container');
  const containerDisplayStyle = recipeContainer.style.display;
  recipeContainer.style.display = (containerDisplayStyle === 'none' || containerDisplayStyle === '') ? 'block' : 'none';
}

// Add event listener to the recipes button to toggle the container visibility
recipesBtn.addEventListener('click', toggleRecipeContainer);
// Sample recipe data (replace with your own data)
// Smooth scroll to contact section when contact button is clicked
const contactBtn = document.getElementById('contact-btn');
const contactSection = document.getElementById('contact');

contactBtn.addEventListener('click', function(event) {
  event.preventDefault();
  contactSection.scrollIntoView({ behavior: 'smooth' });
});
// Smooth scroll to about section when about button is clicked
const aboutBtn = document.getElementById('about-btn');
const aboutSection = document.getElementById('about');

aboutBtn.addEventListener('click', function(event) {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});
// Function to display recipes
function displayRecipes(recipes) {
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
      <p>${recipe.description}</p>
    `;
    searchResults.appendChild(recipeCard);
  });
}

// Function to search recipes
function searchRecipes(query) {
  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );
  displayRecipes(filteredRecipes);
}

// Event listener for search form submission
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('search-input').value.trim();
  if (searchTerm !== '') {
    searchRecipes(searchTerm);
  } else {
    // Display all recipes if search input is empty
    displayRecipes(recipes);
  }
});

// Initial display of all recipes
displayRecipes(recipes);
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Example: Log form data to console
  console.log(formDataObject);

  // You can send form data to your server using fetch or AJAX
});
