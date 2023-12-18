import { Suspense } from "react";
import AddCategoryModal from "./components/add-category-modal";
import CategoryTable from "./components/category-table";
import CategoryTableSkeleton from "./components/categoryTableSkeleton";

const Category = async () => {
  return (
    <div className="flex flex-col h-full w-full justify-evenly  items-center">
      <AddCategoryModal />
      <Suspense fallback={<CategoryTableSkeleton />}>
        <CategoryTable />
      </Suspense>
    </div>
  );
};

export default Category;
