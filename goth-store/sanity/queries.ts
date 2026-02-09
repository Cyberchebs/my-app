// lib/sanity.ts
import {client} from './lib/client';

export const getFilteredProducts = async (filters: any ) => {
  const { gender, categories } = filters;
  
  // Build filter conditions
  const conditions = ['_type == "product"'];
  
  // Gender filter
  if (gender && gender !== 'all') {
    conditions.push(`gender == "${gender}"`);
  }
  
  // Category filter
  if (categories && categories.length > 0) {
    const categoryConditions = categories
      .map((cat: string) => `category == "${cat}"`)
      .join(' || ');
    conditions.push(`(${categoryConditions})`);
  }
  
  const query = `*[${conditions.join(' && ')}] | order(_createdAt desc) {
    _id,
    name,
    category,
    gender,
    "image": image.asset->url
  }`;
  
  const products = await client.fetch(query);
  return products;
};