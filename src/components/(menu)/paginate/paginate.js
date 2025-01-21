"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginateComponents = ({ links }) => {
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName);

  // dalile khate zir video filter jostejo baraye rafe bag ha hast ke age chizi az search bod dakhelesh hazf nkne 
  const searchParams=useSearchParams()

  const handlePage = (page) => {
    // yeki az ravesh ha in ast va yek raveshe digar mitonim ba js pure benevisim
    //  router.replace(`${pathName}?page=${page}`)

    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.replace(`${pathName}?${params.toString()}`);
  };
  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {links.slice(1, -1).map((link, index) => {
          return (
            <li
              key={index}
              className={`${link.active ? `page-item active` : "page-item"} `}
            >
              <button
                onClick={() => handlePage(link.label)}
                className="page-link"
              >
                {link?.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PaginateComponents;
