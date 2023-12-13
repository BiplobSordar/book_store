"use client";
import Button from "@/components/button";
import { useState } from "react";
import AddCategoryModal from "./components/add-category-modal";
import CategoryTable from "./components/category-table";

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handelClose = () => {
    setIsModalOpen(false);
  };
  const handelOpen = () => {
    console.log("i am clicked");
    setIsModalOpen(true);
  };
  return (
    <div className="relative w-full h-full">
      <AddCategoryModal open={isModalOpen} onClose={handelClose} />
      <div
        className={`w-full h-full ${isModalOpen ? "invisible" : "visible"} `}
      >
        {/* First Section */}
        <section className="w-full h-1/6 flex items-center justify-around">
          <div>
            <h1 className="text-gray-600 text-3xl">Categorys</h1>
            <p className="mt-3 text-gray-500">
              All The Categories Are Here In The Table
            </p>
          </div>
          <div>
            <Button onclick={handelOpen} label="Add Category" />
          </div>
        </section>

        {/* Second Section */}

        <section className="flex flex-col items-center ">
          <h2 className="text-lg text-gray-600 mt-3">Category Items</h2>
          <CategoryTable />
        </section>
      </div>
    </div>
  );
};

export default Category;
