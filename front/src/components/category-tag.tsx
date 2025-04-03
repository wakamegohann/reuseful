import "@/styles/category-tag.scss"
import React from "react";


interface CategoryTagProps {
  id: number;
  text: string;
}

interface CategorylistProps {
  categories: CategoryTagProps[];
  className: string;
}

const Categorylist: React.FC<CategorylistProps> = ({categories, className}) => {
  return (
    <>
      {categories.map((category) => (
          <CategoryTag key={category.id} text={category.text} className={className}/>
        ))}
    </>
  );
}

const CategoryTag: React.FC<{text:string, className:string}> = ({text, className}) => {
  return (
    <a 
    className={`tag ${className}`}
    >{text}</a>
  );
}

export default Categorylist