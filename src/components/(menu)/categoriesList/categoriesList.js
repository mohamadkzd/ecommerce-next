"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategoriesListComponents = ({ categories }) => {
  const pathName = usePathname();
  const router = useRouter();

  // dalile khate zir video filter jostejo baraye rafe bag ha hast ke age chizi az search bod dakhelesh hazf nkne
  const searchParams = useSearchParams();

  const handelClick = (id) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", id);
    params.delete("page");
    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="filter-list">
      <div className="form-label">دسته بندی</div>
      <ul>
        {categories?.map((category) => {
          return (
            <li
              onClick={() => handelClick(category.id)}
              key={category.id}
              className={
                searchParams.has("category") &&
                searchParams.get("category") == category.id
                  ? "my-2    filter-list-active"
                  : "my-2 cursor-pointer"
              }
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesListComponents;
