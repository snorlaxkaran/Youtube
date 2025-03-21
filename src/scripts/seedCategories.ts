import { db } from "@/db";
import { categories } from "@/db/schema";

// TODO

const CategoryNames = [
  "Tech & Gadgets",
  "Gaming",
  "Education & Learning",
  "Business & Finance",
  "Entertainment & Pop Culture",
  "Fitness & Health",
  "Lifestyle & Vlogs",
  "Food & Cooking",
  "Science & Technology",
  "Art & Creativity",
  "Cars & Automobiles",
  "Personal Development & Motivation",
];

async function main() {
  console.log("Seeding categories");
  try {
    const values = CategoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));
    await db.insert(categories).values(values);
    console.log("Seeded categories successfully");
  } catch (error) {
    console.log("Error seeding categories", error);
    process.exit(1);
  }
}

main();
