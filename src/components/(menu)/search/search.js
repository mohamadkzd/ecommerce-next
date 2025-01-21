"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchComponents = () => {
  const [search, setSearch] = useState("");

  const pathName = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();

  const handleSearch = (remove) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    if (remove) {
      params.delete("search");

      setSearch("");
    } else {
      params.set("search", search);
    }

    router.replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div>
      <label className="form-label">جستجو</label>
      {/* zarbzar */}
      {searchParams.has("search") && (
        <span
          onClick={() => handleSearch(true)}
          className="text-danger fs-4 cursor-pointer"
        >
          <i className="bi bi-x"></i>
        </span>
      )}
      <div className="input-group mb-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          className="form-control"
          placeholder="نام محصول ..."
        />
        {/* شرطه زیر برای اینه که کاربر اگه چیزی وارد نکرد در اینپوت و روی دکمه کلیک کرد تابع اجرا نشود و شرطش به این شکل هست که سرچ اگه خالی بود اجرا نشه در غیر این صورت تابع اجرا شود */}
        <button
          onClick={() => search !== "" && handleSearch()}
          className="input-group-text"
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchComponents;
